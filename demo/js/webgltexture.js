const vs = 'attribute vec4 a_position; attribute vec2 a_texcoord; attribute vec4 a_normal; uniform mat4 u_vpMatrix; uniform mat4 u_modelMatrix; varying vec3 v_position; varying vec2 v_texcoord; varying vec3 v_normal; void main() { gl_Position = u_vpMatrix * u_modelMatrix * a_position; v_position = vec3(u_modelMatrix * a_position); v_texcoord = a_texcoord; v_normal = vec3(u_modelMatrix * a_normal); }';
const fs = '#extension GL_OES_standard_derivatives : enable\n precision highp float; uniform vec3 u_viewPosition; uniform vec3 u_lightPosition; uniform vec3 u_specularColor; uniform float u_shininess; uniform vec3 u_diffuseColor; uniform vec3 u_ambientColor; uniform sampler2D u_diffMap; uniform sampler2D u_specMap; uniform sampler2D u_normMap; uniform float u_spec; uniform float u_norm; uniform float bumpScale; varying vec3 v_position; varying vec2 v_texcoord; varying vec3 v_normal; vec2 dHdxy_fwd() { vec2 dSTdx = dFdx( v_texcoord ); vec2 dSTdy = dFdy( v_texcoord ); float Hll = bumpScale * texture2D( u_normMap, v_texcoord ).x; float dBx = bumpScale * texture2D( u_normMap, v_texcoord + dSTdx ).x - Hll; float dBy = bumpScale * texture2D( u_normMap, v_texcoord + dSTdy ).x - Hll; return vec2( dBx, dBy ); } vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) { vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) ); vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) ); vec3 vN = surf_norm; vec3 R1 = cross( vSigmaY, vN ); vec3 R2 = cross( vN, vSigmaX ); float fDet = dot( vSigmaX, R1 ); fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 ); vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 ); return normalize( abs( fDet ) * surf_norm - vGrad ); } void main() { vec3 normal = normalize(v_normal); if(u_norm >= 1.0){ normal = perturbNormalArb( -v_position, normal, dHdxy_fwd()); } vec3 lightDirection = normalize(u_lightPosition - v_position); float nDotL = max(dot(lightDirection, normal), 0.0); vec4 diffuseColor = texture2D(u_diffMap, v_texcoord); vec3 diffuse = u_diffuseColor * nDotL * diffuseColor.rgb; vec3 ambient = u_ambientColor * diffuseColor.rgb; vec3 eyeDirection = normalize(u_viewPosition - v_position); vec3 halfwayDir = normalize(lightDirection + eyeDirection); float specularIntensity = pow(max(dot(normal, halfwayDir), 0.0), u_shininess); vec3 specular = ( u_spec == 0.0 ? u_specularColor : texture2D(u_specMap, v_texcoord).rgb) * specularIntensity; gl_FragColor = vec4(ambient + diffuse + specular, diffuseColor.a); }';
const canvas = document.getElementById("canvas");
const gl = get3DContext(canvas, true);
const va = document.getElementById('viewAngle');
const la = document.getElementById('lightAngle');
const vav = document.getElementById('vav');
const lav = document.getElementById('lav');
const isSpec = document.getElementById('isSpec');
const isNorm = document.getElementById('isNorm');
const program = createProgramInfo(gl, vs, fs);
const arrays= {
    position: [
        -1, 1, 0,
        -1, -1, 0,
        1, 1, 0,
        1, -1, 0
        // -1, 0, -1,
        // -1, 0, 1,
        // 1, 0, -1,
        // 1, 0, 1
    ],
    texcoord: [
        0.0, 1.0,
        0.0, 0.0,
        1.0, 1.0,
        1.0, 0.0
    ],
    normal: [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ],
};
const buffer = createBufferInfoFromArrays( gl, arrays );

let vpMatrix = new Matrix4(),
    modelMatrix = new Matrix4(),
    cameraMatrix = new Matrix4(),
    lightMatrix = new Matrix4(),
    viewPosition = new Vector3([0, 0, 5]),
    lightPosition = new Vector3([0, 0, 6]),
    vAngle = 0, lAngle = 0,
    viewPoint = null,
    lightPoint = null,
    u_spec = 0,
    u_norm = 0;

// 设置背景颜色
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 开启隐藏面消除
gl.enable(gl.DEPTH_TEST);
// 根据dpr设置画布大小
setPixelRatio(canvas);
// 设置绘图区域，必须上面设置画布大小之后调用
gl.viewport(0, 0, canvas.width, canvas.height);

gl.useProgram(program.program);
setUniforms(program, {
    u_modelMatrix: modelMatrix.elements,
    u_diffuseColor: [0.5,0.5,0.5],
    u_ambientColor: [0.5,0.5,0.5],
    u_specularColor: [1,1,1],
    u_shininess: 30,
    bumpScale: 1,
    u_diffMap: 0,
    u_specMap: 1,
    u_normMap: 2
});

(async function (){
    const ret = await Promise.all([
        loadTexture('../img/floor_tiles_06_diff_1k.jpg'),
        loadTexture('../img/floor_tiles_06_spec_1k.jpg',1),
        loadTexture('../img/floor_tiles_06_nor_1k.jpg',2)
    ]);
    document.getElementsByTagName('h4')[0].style.display = 'none';
    setBuffersAndAttributes(gl, program, buffer);
    draw();
})()

va.oninput = function(e){
    vAngle = this.value;
    draw();
    vav.innerHTML = vAngle;
};
la.oninput = function(e){
    lAngle = this.value;
    draw();
    lav.innerHTML = lAngle;
};
isSpec.onclick = function() {
    u_spec = this.checked ? 1 : 0;
    draw();
}
isNorm.onclick = function() {
    u_norm = this.checked ? 1 : 0;
    draw();
}

function draw() {
    //模型旋转
    // modelMatrix.rotate(1,0,1,0);
    
    //直接计算视点
    // angleY = (++ angleY)%360;
    // z = r * Math.sin(Math.PI/180 * angleY);
    // x = r * Math.cos(Math.PI/180 * angleY);

    //使用矩阵计算视点
    cameraMatrix.setRotate(vAngle,1,0,0);
    viewPoint = cameraMatrix.multiplyVector3(viewPosition);

    lightMatrix.setRotate(lAngle,1,0,0);
    lightPoint = lightMatrix.multiplyVector3(lightPosition);

    vpMatrix.setPerspective( 30, canvas.width / canvas.height, 1, 300 );
    vpMatrix.lookAt( ...viewPoint.elements, 0, 0, 0, 0, 1, 0);
    setUniforms(program, {
        u_viewPosition: viewPoint.elements,
        u_lightPosition: lightPoint.elements,
        u_vpMatrix: vpMatrix.elements,
        u_spec: u_spec,
        u_norm: u_norm
    });
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    drawBufferInfo(gl, buffer, gl.TRIANGLE_STRIP);
}

function loadTexture(url,unit) {
    const texture = gl.createTexture();
    unit = gl.TEXTURE0 + (unit||0);
    gl.activeTexture(unit);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    
    let textureInfo = {
        width: 1,
        height: 1,
        texture: texture,
    };
    const img = new Image();
    return new Promise((resolve,reject) => {
        img.onload = function() {
            textureInfo.width = img.width;
            textureInfo.height = img.height;
            gl.activeTexture(unit);
            gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
            gl.generateMipmap(gl.TEXTURE_2D);
            resolve(textureInfo);
        };
        img.onerror = reject;
        img.src = url;
    });
}

function setPixelRatio(canvas,ratio) {
    ratio = ratio || window.devicePixelRatio;
    var cw = canvas.width;
    var ch = canvas.height;
    var w  = Math.floor(canvas.clientWidth  * ratio);
    var h = Math.floor(canvas.clientHeight * ratio);

    // 检查画布尺寸是否相同
    if (cw  !== w || ch !== h) {
        canvas.width  = w;
        canvas.height = h;
    }
    canvas.style.width = cw +'px';
    canvas.style.height = ch +'px';
}
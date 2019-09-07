const vs = "attribute vec4 a_position; attribute vec4 a_normal; uniform mat4 u_modelMatrix; uniform mat4 u_normalMatrix; uniform mat4 u_vpMatrix; varying vec3 v_normal; varying vec3 v_position; void main() { gl_Position = u_vpMatrix * u_modelMatrix * a_position; v_normal=vec3(u_normalMatrix * a_normal); v_position= vec3(u_modelMatrix * a_position); }";
const fs = "precision mediump float; uniform vec3 u_lightColor; uniform vec3 u_lightPosition; uniform vec3 u_lightPosition2; uniform vec3 u_ambientColor; uniform vec3 u_viewPosition; uniform vec4 u_color; varying vec3 v_normal; varying vec3 v_position; void main() { vec3 normal = normalize(v_normal); vec3 ambient = u_ambientColor * u_color.rgb; vec3 lightDirection = normalize(u_lightPosition); float cosTheta = max(dot(lightDirection, normal), 0.0); vec3 diffuse = u_lightColor * u_color.rgb * cosTheta; float shininess =100.0; vec3 specularColor =vec3(1.0,1.0,1.0); vec3 viewDirection = normalize(u_viewPosition-v_position); vec3 halfwayDir = normalize(lightDirection + viewDirection); float specularWeighting = pow(max(dot(normal, halfwayDir), 0.0), shininess); vec3 specular = specularColor.rgb * specularWeighting; vec3 lightDirection2 = normalize(u_lightPosition2 - v_position.xyz); float cosTheta2 = max(dot(lightDirection2, normal), 0.0); vec3 diffuse2 = u_lightColor * u_color.rgb * cosTheta2; float shininess2 =30.0; vec3 specularColor2 =vec3(1.0,1.0,1.0); vec3 reflectionDirection = reflect(-lightDirection2, normal); float specularWeighting2 = pow(max(dot(reflectionDirection, viewDirection), 0.0), shininess2); vec3 specular2 = specularColor2.rgb * specularWeighting2; gl_FragColor = vec4(diffuse+diffuse2+ambient+specular+specular2,u_color.a); }";
var canvas = document.getElementById('canvas'),
    gl = get3DContext(canvas, true),
    viewAngleX = 0,
    viewAngleY = 0,
    cViewAngleX = 0,
    cViewAngleY = 0,
    viewLEN = 25,
    LENPERCENT = 1,
    LENS = 1,
    LIGHT_POS = [100, 0, -100], //光源位置1
    LIGHT_POS2 = [-100, 0, 100], //光源位置2
    Polygons = [],
    NUM = 200,
    CENTER = { x: canvas.width / 2, y: canvas.height / 2 },
    START = {};

const program = createProgramInfo(gl, vs, fs);
const buffers = [
    createBufferInfoFromArrays(gl, Sphere(1, 50)), 
    createBufferInfoFromArrays(gl, Cube(1)), 
    createBufferInfoFromArrays(gl, Cylinder(1, 2, 30)), 
    createBufferInfoFromArrays(gl, Cone(1, 3, 40))
];

for (var i = 0; i < NUM; i++) {
    Polygons.push({
        xRotation: random(-60, 60),
        yRotation: random(-60, 60),
        xAngle: 0,
        yAngle: 0,
        x: random(-15, 15),
        y: random(-15, 15),
        z: random(3, 25),
        color: Color.rgbToWebgl(Color.hslToRgb(randomHsl()))
    });
}

gl.clearColor(0.1, 0.1, 0.1, 1);
gl.enable(gl.DEPTH_TEST);
gl.enable(gl.CULL_FACE);
gl.viewport(0, 0, canvas.width, canvas.height); //设置绘图区域
gl.useProgram(program.program);

setUniforms(program, {
    u_lightColor: [1, 1, 1],
    u_lightPosition: LIGHT_POS,
    u_lightPosition2: LIGHT_POS2,
    u_ambientColor: [0.4, 0.4, 0.4]
});

var modelMatrix = new Matrix4(),
    normalMatrix = new Matrix4(),
    vpMatrix = new Matrix4(),
    buffer,
    last = Date.now();

(function animate() {
    var now = new Date(),
        elapsed = now - last;

    last = now;
    var angleX = (viewAngleX + cViewAngleX) % 360,
        angleY = viewAngleY + cViewAngleY,
        len = viewLEN + LENS;

    // if(angleY<-270){
    //     angleY+=360
    // }
    // if(angleY>270){
    //     angleY-=360
    // }

    // angleY = angleY > 90 ? 90 : angleY < 10 ? 10 : angleY;
    len = len > 100 ? 100 : len < 6 ? 6 : len;

    var eyeY = len * Math.sin(angleY * Math.PI / 180),
        c = len * Math.cos(angleY * Math.PI / 180),
        eyeX = c * Math.sin(angleX * Math.PI / 180),
        eyeZ = c * Math.cos(angleX * Math.PI / 180);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    Polygons.forEach((polygon, i) => {
        polygon.xAngle += polygon.xRotation * elapsed / 1000;
        polygon.yAngle += polygon.yRotation * elapsed / 1000;
        polygon.xAngle %= 360;
        polygon.yAngle %= 360;

        // 模型矩阵
        modelMatrix.setRotate(polygon.xAngle, 1, 0, 0);
        modelMatrix.rotate(polygon.yAngle, 0, 1, 0);
        modelMatrix.translate(0, 0, polygon.z);

        // 视图投影矩阵
        vpMatrix.setPerspective(45, canvas.width / canvas.height, 1.0, 200.0);
        vpMatrix.lookAt(eyeX, eyeY, eyeZ, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

        // 逆转置模型矩阵
        normalMatrix.setInverseOf(modelMatrix);
        normalMatrix.transpose();
        
        buffer = buffers[i % buffers.length];
        setBuffersAndAttributes(gl, program, buffer);
        setUniforms(program, {
            u_viewPosition: [eyeX, eyeY, eyeZ],
            u_color: polygon.color,
            u_modelMatrix: modelMatrix.elements,
            u_normalMatrix: normalMatrix.elements,
            u_vpMatrix: vpMatrix.elements
        });

        drawBufferInfo(gl,buffer);
    });

    requestAnimationFrame(animate);
}());


canvas.addEventListener('mousedown', function(e) {
    START = windowToCanvas(canvas, e.clientX, e.clientY);
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mouseup', mouseUp, false);
}, false);

function mouseMove(e) {
    var end = windowToCanvas(canvas, e.clientX, e.clientY),
        a = Math.sqrt(Math.pow(START.x - CENTER.x, 2) + Math.pow(START.y - CENTER.y, 2)),
        b = Math.sqrt(Math.pow(end.x - CENTER.x, 2) + Math.pow(end.y - CENTER.y, 2)),
        radX = (START.x - end.x) * 0.01,
        radY = (end.y - START.y) * 0.01;

    cViewAngleX = radX * 180 / Math.PI;
    cViewAngleY = radY * 180 / Math.PI;
    // cViewAngleY > 90 ? 90 : cViewAngleY < -90 ? -90 : cViewAngleY;
    // LENPERCENT = b / a;
}

function mouseUp(e) {
    viewAngleX += cViewAngleX;
    cViewAngleX = 0;
    viewAngleY += cViewAngleY;
    cViewAngleY = 0;
    // viewLEN *= LENPERCENT;
    // LENPERCENT = 1;
    canvas.removeEventListener('mouseup', arguments.callee, false);
    canvas.removeEventListener('mousemove', mouseMove, false);
}

document.addEventListener('mousewheel', function(e){
    var val = 0;
    e = e || window.event;

    if (e.wheelDelta) { //IE/Opera/Chrome
        val = e.wheelDelta;
    } else if (e.detail) { //Firefox
        val = e.detail;
    }

    LENS +=val/3;

}, false);
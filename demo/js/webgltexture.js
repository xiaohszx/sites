(function(){'use strict';var aa=Math.PI;function a(a,b,c){const d=new ba(3);return a&&(d[0]=a),b&&(d[1]=b),c&&(d[2]=c),d}function b(c,a,b){return b=b||new ba(3),b[0]=c[0]-a[0],b[1]=c[1]-a[1],b[2]=c[2]-a[2],b}function c(c,a,b){b=b||new ba(3);const d=c[2]*a[0]-c[0]*a[2],e=c[0]*a[1]-c[1]*a[0];return b[0]=c[1]*a[2]-c[2]*a[1],b[1]=d,b[2]=e,b}function d(b,a){var c=Math.sqrt;a=a||new ba(3);const d=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],e=c(d);return 1e-5<e?(a[0]=b[0]/e,a[1]=b[1]/e,a[2]=b[2]/e):(a[0]=0,a[1]=0,a[2]=0),a}function e(a){return a=a||new ca(16),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function f(a,b){b=b||new ca(16);const c=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15],t=n*s,u=r*o,v=j*s,w=r*k,x=j*o,y=n*k,z=f*s,A=r*g,B=f*o,C=n*g,D=f*k,E=j*g,F=l*q,G=p*m,H=h*q,I=p*i,J=h*m,K=l*i,L=c*q,M=p*e,N=c*m,O=l*e,P=c*i,Q=h*e,R=t*i+w*m+x*q-(u*i+v*m+y*q),S=u*e+z*m+C*q-(t*e+A*m+B*q),T=v*e+A*i+D*q-(w*e+z*i+E*q),U=y*e+B*i+E*m-(x*e+C*i+D*m),V=1/(c*R+h*S+l*T+p*U);return b[0]=V*R,b[1]=V*S,b[2]=V*T,b[3]=V*U,b[4]=V*(u*h+v*l+y*p-(t*h+w*l+x*p)),b[5]=V*(t*c+A*l+B*p-(u*c+z*l+C*p)),b[6]=V*(w*c+z*h+E*p-(v*c+A*h+D*p)),b[7]=V*(x*c+C*h+D*l-(y*c+B*h+E*l)),b[8]=V*(F*k+I*o+J*s-(G*k+H*o+K*s)),b[9]=V*(G*g+L*o+O*s-(F*g+M*o+N*s)),b[10]=V*(H*g+M*k+P*s-(I*g+L*k+Q*s)),b[11]=V*(K*g+N*k+Q*o-(J*g+O*k+P*o)),b[12]=V*(H*n+K*r+G*j-(J*r+F*j+I*n)),b[13]=V*(N*r+F*f+M*n-(L*n+O*r+G*f)),b[14]=V*(L*j+Q*r+I*f-(P*r+H*f+M*j)),b[15]=V*(P*n+J*f+O*j-(N*j+Q*n+K*f)),b}function g(c,a,b){b=b||new ca(16);const d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],j=c[6],k=c[7],l=c[8],m=c[9],n=c[10],o=c[11],p=c[12],q=c[13],r=c[14],s=c[15],t=a[0],u=a[1],v=a[2],w=a[3],x=a[4],y=a[5],z=a[6],A=a[7],B=a[8],C=a[9],D=a[10],E=a[11],F=a[12],G=a[13],H=a[14],I=a[15];return b[0]=d*t+h*u+l*v+p*w,b[1]=e*t+i*u+m*v+q*w,b[2]=f*t+j*u+n*v+r*w,b[3]=g*t+k*u+o*v+s*w,b[4]=d*x+h*y+l*z+p*A,b[5]=e*x+i*y+m*z+q*A,b[6]=f*x+j*y+n*z+r*A,b[7]=g*x+k*y+o*z+s*A,b[8]=d*B+h*C+l*D+p*E,b[9]=e*B+i*C+m*D+q*E,b[10]=f*B+j*C+n*D+r*E,b[11]=g*B+k*C+o*D+s*E,b[12]=d*F+h*G+l*H+p*I,b[13]=e*F+i*G+m*H+q*I,b[14]=f*F+j*G+n*H+r*I,b[15]=g*F+k*G+o*H+s*I,b}function h(a,e,f,g){g=g||new ca(16);const h=da,i=ea,j=fa;return d(b(a,e,j),j),d(c(f,j,h),h),d(c(j,h,i),i),g[0]=h[0],g[1]=h[1],g[2]=h[2],g[3]=0,g[4]=i[0],g[5]=i[1],g[6]=i[2],g[7]=0,g[8]=j[0],g[9]=j[1],g[10]=j[2],g[11]=0,g[12]=a[0],g[13]=a[1],g[14]=a[2],g[15]=1,g}function i(a,b){var d=Math.sin,e=Math.cos;b=b||new ca(16);const f=e(a),c=d(a);return b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=f,b[6]=c,b[7]=0,b[8]=0,b[9]=-c,b[10]=f,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}function j(b,c,e){e=e||a();const f=c[0],g=c[1],h=c[2],i=f*b[3]+g*b[7]+h*b[11]+b[15];return e[0]=(f*b[0]+g*b[4]+h*b[8]+b[12])/i,e[1]=(f*b[1]+g*b[5]+h*b[9]+b[13])/i,e[2]=(f*b[2]+g*b[6]+h*b[10]+b[14])/i,e}function k(b,c,d){d=d||a();const e=c[0],f=c[1],g=c[2];return d[0]=e*b[0]+f*b[4]+g*b[8],d[1]=e*b[1]+f*b[5]+g*b[9],d[2]=e*b[2]+f*b[6]+g*b[10],d}function l(a){return Ka[a].bindPoint}function m(a,b){return function(c){a.uniform1i(b,c)}}function n(a,b){return function(c){a.uniform1iv(b,c)}}function o(a,b){return function(c){a.uniform2iv(b,c)}}function p(a,b){return function(c){a.uniform3iv(b,c)}}function q(a,b){return function(c){a.uniform4iv(b,c)}}function r(a,b,c,d){const e=l(b);return y(a)?function(b){let f,g;x(a,b)?(f=b,g=null):(f=b.texture,g=b.sampler),a.uniform1i(d,c),a.activeTexture(a.TEXTURE0+c),a.bindTexture(e,f),a.bindSampler(c,g)}:function(b){a.uniform1i(d,c),a.activeTexture(a.TEXTURE0+c),a.bindTexture(e,b)}}function s(a,b,c,d,e){const f=l(b),g=new Int32Array(e);for(let f=0;f<e;++f)g[f]=c+f;return y(a)?function(b){a.uniform1iv(d,g),b.forEach(function(b,d){a.activeTexture(a.TEXTURE0+g[d]);let e,h;x(a,b)?(e=b,h=null):(e=b.texture,h=b.sampler),a.bindSampler(c,h),a.bindTexture(f,e)})}:function(b){a.uniform1iv(d,g),b.forEach(function(b,c){a.activeTexture(a.TEXTURE0+g[c]),a.bindTexture(f,b)})}}function t(a,c){return function(d){d.value?(a.disableVertexAttribArray(c),a.vertexAttrib4fv(c,d.value)):(a.bindBuffer(a.ARRAY_BUFFER,d.buffer),a.enableVertexAttribArray(c),a.vertexAttribPointer(c,d.num||d.size,d.type||a.FLOAT,d.normalize||!1,d.stride||0,d.offset||0),d.divisor!==void 0&&a.vertexAttribDivisor(c,d.divisor))}}function u(a,c){return function(d){d.value?(a.disableVertexAttribArray(c),a.vertexAttrib4iv(c,d.value)):(a.bindBuffer(a.ARRAY_BUFFER,d.buffer),a.enableVertexAttribArray(c),a.vertexAttribIPointer(c,d.num||d.size,d.type||a.INT,d.stride||0,d.offset||0),d.divisor!==void 0&&a.vertexAttribDivisor(c,d.divisor))}}function v(a,c){return function(d){d.value?(a.disableVertexAttribArray(c),a.vertexAttrib4uiv(c,d.value)):(a.bindBuffer(a.ARRAY_BUFFER,d.buffer),a.enableVertexAttribArray(c),a.vertexAttribIPointer(c,d.num||d.size,d.type||a.UNSIGNED_INT,d.stride||0,d.offset||0),d.divisor!==void 0&&a.vertexAttribDivisor(c,d.divisor))}}function w(a,c,d){const e=d.size,f=d.count;return function(d){a.bindBuffer(a.ARRAY_BUFFER,d.buffer);const b=d.size||d.num||e,g=d.type||a.FLOAT,h=Ka[g],j=h.size*b,k=d.normalize||!1,l=d.offset||0;for(let e=0;e<f;++e)a.enableVertexAttribArray(c+e),a.vertexAttribPointer(c+e,b/f,g,k,j,l+j/f*e),void 0!==d.divisor&&a.vertexAttribDivisor(c+e,d.divisor)}}function x(a,b){return Na||(Na=a.createTexture()),b instanceof Na.constructor}function y(a){return!!a.texStorage2D}function z(a){const b=a.name;return b.startsWith("gl_")||b.startsWith("webgl_")}function A(a,b){Pa(a,0);const c=a.getExtension(b);if(c){const d={},e=Qa.exec(b)[1];for(const b in c){const f=c[b],g="function"==typeof f,h=g?e:"_"+e;let i=b;b.endsWith(h)&&(i=b.substring(0,b.length-h.length)),a[i]===void 0?g?a[i]=function(a){return function(){return a.apply(c,arguments)}}(f):(a[i]=f,d[i]=f):!g&&a[i]!==f&&console.warn(i,a[i],f,b)}d.constructor={name:c.constructor.name},Pa(d,0)}return c}function B(a){for(let b=0;b<Oa.length;++b)A(a,Oa[b])}function C(a,...b){const c=D(b);return E(a,c)}function D(...a){const b=[];let c,d,e;if((a+"").replace(/[^\,\s]+/g,function(a){a&&b.push(a)}),b.forEach(a=>{if(e=document.getElementById(a),!e)throw"unknown script element "+a;0<=e.type.indexOf("vert")?c=e.text:0<=e.type.indexOf("frag")&&(d=e.text)}),!c)throw"VERTEX_SHADER String not exist";if(!d)throw"FRAGMENT_SHADER String not exist";return[c,d]}function E(a,...b){Array.isArray(b[0])&&(b=b[0]);const c=F(a,a.VERTEX_SHADER,b[0]),d=F(a,a.FRAGMENT_SHADER,b[1]);if(!c)throw"VERTEX_SHADER not exist";if(!d)throw"FRAGMENT_SHADER not exist";const e=a.createProgram();if(!e)throw"program not exist";a.attachShader(e,c),a.attachShader(e,d),a.linkProgram(e);const f=a.getProgramParameter(e,a.LINK_STATUS);if(!f){const b=a.getProgramInfoLog(e);throw a.deleteProgram(e),a.deleteShader(d),a.deleteShader(c),"Failed to link program: "+b.toString()}return e}function F(a,b,c){const d=a.createShader(b);if(!d)throw"unable to create shader";a.shaderSource(d,c),a.compileShader(d);const e=a.getShaderParameter(d,a.COMPILE_STATUS);if(!e){const b=a.getShaderInfoLog(d);throw a.deleteShader(d),"Failed to compile shader: "+b.toString()}return d}function G(a,b){const c={},d=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES);for(let e=0;e<d;++e){const d=a.getActiveAttrib(b,e);if(z(d))continue;const f=a.getAttribLocation(b,d.name),g=La[d.type],h=g.setter(a,f,g);h.location=f,c[d.name]=h}return c}function H(a,b){function c(b,c){const e=a.getUniformLocation(b,c.name),f=1<c.size&&"[0]"===c.name.substr(-3),g=c.type,h=Ka[g];if(!h)throw"unknown type: 0x"+g.toString(16);let i;if(h.bindPoint){const b=d;d+=c.size,i=f?h.arraySetter(a,g,b,e,c.size):h.setter(a,g,b,e,c.size)}else i=h.arraySetter&&f?h.arraySetter(a,e):h.setter(a,e);return i.location=e,i}let d=0;const e={},f=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(let d=0;d<f;++d){const f=a.getActiveUniform(b,d);if(z(f))continue;let g=f.name;"[0]"===g.substr(-3)&&(g=g.substr(0,g.length-3));const h=c(b,f);e[g]=h}return e}function I(a,b){a=a.uniformSetters||a,Object.keys(b).forEach(function(c){const d=a[c];d&&d(b[c])})}function J(a,b,c){c.vertexArrayObject?a.bindVertexArray(c.vertexArrayObject):(K(b.attribSetters||b,c.attribs),c.indices&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,c.indices))}function K(a,b){a=a.attribSetters||a,Object.keys(b).forEach(function(c){const d=a[c];d&&d(b[c])})}function L(a,b){const c={};return Object.keys(b).forEach(function(d){if(!Q(d)){const e=b[d],f=e.name||e.attribName||Ma.attribPrefix(d),g=N(e,f);c[f]={buffer:M(a,g,void 0,e.drawType),num:e.num||e.size||O(f),type:P(g),normalize:S(g),stride:e.stride||0,offset:e.offset||0,divisor:e.divisor,drawType:e.drawType||a.STATIC_DRAW}}}),a.bindBuffer(a.ARRAY_BUFFER,null),c}function M(a,b,c,d){c=c||a.ARRAY_BUFFER;const e=a.createBuffer();return a.bindBuffer(c,e),a.bufferData(c,b,d||a.STATIC_DRAW),e}function N(a,b){if(R(a))return a;if(R(a.data))return a.data;Array.isArray(a)&&(a={data:a});let c=a.type;return c||(Q(b)?c=Uint16Array:c=Float32Array),new c(a.data)}function O(a,b){let c;if(c=Ra.test(a)?2:Sa.test(a)?4:3,0<b%c)throw"Can not guess num for attribute '"+a+"'. Tried "+c+" but "+b+" values is not evenly divisible by "+c+". You should specify it.";return c}function P(a){if(a instanceof Int8Array)return ga;if(a instanceof Uint8Array)return ha;if(a instanceof Uint8ClampedArray)return ha;if(a instanceof Int16Array)return ia;if(a instanceof Uint16Array)return ja;if(a instanceof Int32Array)return pa;if(a instanceof Uint32Array)return Ba;if(a instanceof Float32Array)return ka;throw"unsupported typed array type"}function Q(a){return"indices"===a}function R(b){return b&&b.buffer&&b.buffer instanceof ArrayBuffer}function S(a){return!!(a instanceof Int8Array)||!!(a instanceof Uint8Array)}function T(a){let b,c;for(c=0;c<Ta.length&&(b=Ta[c],!(b in a));++c);c===Ta.length&&(b=Object.keys(a)[0]);const d=a[b],e=U(d).length,f=V(d,b);if(0<e%f)throw"numComponents "+f+" not correct for length "+e;return e/f}function U(a){return a.length?a:a.data}function V(a,b){return a.num||a.size||O(b,U(a).length)}function W(a,b,c,d,e){c=c||a.TRIANGLES,d=d||b.count,e=e||0;const f=b.indices,g=b.indexType;g||f?a.drawElements(c,d,g||ja,e):a.drawArrays(c,e,d)}function X(a,b,c,d){const e=a.createTexture();if(!e)throw"Failed to create texture object";const f=b.target||Fa,g=b.format||Ha,h=b.informat||g,i=b.type||ha;return a.bindTexture(f,e),c&&d&&a.texImage2D(f,0,h,c,d,0,g,i,null),a.texParameteri(f,a.TEXTURE_MIN_FILTER,b.min||Ja),a.texParameteri(f,a.TEXTURE_MAG_FILTER,b.mag||Ja),a.texParameteri(f,a.TEXTURE_WRAP_T,b.wrapT||Ia),a.texParameteri(f,a.TEXTURE_WRAP_S,b.wrapS||Ia),e}function Y(a,b,c){function d(c,d,j){a.texImage2D(d,0,Ha,1,1,0,Ha,ha,new Uint8Array([0,0,255,255]));const k=new Image;k.onload=function(){!b.flipY||a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.bindTexture(e,i),a.texImage2D(d,0,g,f,h,k),j&&j()},Z(k,c)}const e=b.target||Fa,f=b.format||Ha,g=b.informat||f,h=b.type||ha,i=X(a,b),j=b.src;if("string"==typeof j){if(e!=Fa)throw"the target must be gl.TEXTURE_2D";d(b.src,e,function(){a.generateMipmap(e),a.bindTexture(e,null),c&&c(i)})}else if(Array.isArray(j)&&6===j.length&&"string"==typeof j[0]){if(e!=Ga)throw"the target must be gl.TEXTURE_CUBE_MAP";let b=j.length;j.forEach((f,g)=>{d(f,a.TEXTURE_CUBE_MAP_POSITIVE_X+g,function(){b--,0>=b&&(a.generateMipmap(e),a.bindTexture(e,null),c&&c(i))})})}return a.bindTexture(e,null),i}function Z(a,b){const c=location.href.lastIndexOf("/")+1;0>b.search("http")&&(b=location.href.substr(0,c)+b),new URL(b).origin!==window.location.origin&&(a.crossOrigin=""),a.src=b}function $(){ob--,ob||(document.getElementsByTagName("h4")[0].style.display="none",I($a,{u_modelMatrix:cb,u_diffuseColor:[.5,.5,.5],u_ambientColor:[.5,.5,.5],u_specularColor:[1,1,1],u_shininess:30,bumpScale:1,u_diffMap:lb,u_specMap:mb,u_normMap:nb}),J(Va,$a,ab),_())}function _(){const a=j(i(hb*aa/180),fb),b=k(i(ib*aa/180),gb);h(a,[0,0,0],[0,1,0],db),g(eb,f(db),bb),I($a,{u_viewPosition:a,u_lightPosition:b,u_vpMatrix:bb,u_spec:jb,u_norm:kb}),Va.clear(Va.COLOR_BUFFER_BIT|Va.DEPTH_BUFFER_BIT),W(Va,_a,Va.TRIANGLE_STRIP)}let ba=Float32Array,ca=Float32Array;const da=a(),ea=a(),fa=a(),ga=5120,ha=5121,ia=5122,ja=5123,ka=5126,ma=35664,na=35665,oa=35666,pa=5124,qa=35667,ra=35668,sa=35669,ta=35670,ua=35671,wa=35672,xa=35673,ya=35674,za=35675,Aa=35676,Ba=5125,Ca=36294,Da=36295,Ea=36296,Fa=3553,Ga=34067,Ha=6408,Ia=10497,Ja=9729,Ka={};Ka[ka]={Type:Float32Array,size:4,setter:function(a,b){return function(c){a.uniform1f(b,c)}},arraySetter:function(a,b){return function(c){a.uniform1fv(b,c)}}},Ka[ma]={Type:Float32Array,size:8,setter:function(a,b){return function(c){a.uniform2fv(b,c)}}},Ka[na]={Type:Float32Array,size:12,setter:function(a,b){return function(c){a.uniform3fv(b,c)}}},Ka[oa]={Type:Float32Array,size:16,setter:function(a,b){return function(c){a.uniform4fv(b,c)}}},Ka[pa]={Type:Int32Array,size:4,setter:m,arraySetter:n},Ka[qa]={Type:Int32Array,size:8,setter:o},Ka[ra]={Type:Int32Array,size:12,setter:p},Ka[sa]={Type:Int32Array,size:16,setter:q},Ka[Ba]={Type:Uint32Array,size:4,setter:function(a,b){return function(c){a.uniform1ui(b,c)}},arraySetter:function(a,b){return function(c){a.uniform1uiv(b,c)}}},Ka[Ca]={Type:Uint32Array,size:8,setter:function(a,b){return function(c){a.uniform2uiv(b,c)}}},Ka[Da]={Type:Uint32Array,size:12,setter:function(a,b){return function(c){a.uniform3uiv(b,c)}}},Ka[Ea]={Type:Uint32Array,size:16,setter:function(a,b){return function(c){a.uniform4uiv(b,c)}}},Ka[ta]={Type:Uint32Array,size:4,setter:m,arraySetter:n},Ka[ua]={Type:Uint32Array,size:8,setter:o},Ka[wa]={Type:Uint32Array,size:12,setter:p},Ka[xa]={Type:Uint32Array,size:16,setter:q},Ka[ya]={Type:Float32Array,size:16,setter:function(a,b){return function(c){a.uniformMatrix2fv(b,!1,c)}}},Ka[za]={Type:Float32Array,size:36,setter:function(a,b){return function(c){a.uniformMatrix3fv(b,!1,c)}}},Ka[Aa]={Type:Float32Array,size:64,setter:function(a,b){return function(c){a.uniformMatrix4fv(b,!1,c)}}},Ka[35685]={Type:Float32Array,size:24,setter:function(a,b){return function(c){a.uniformMatrix2x3fv(b,!1,c)}}},Ka[35686]={Type:Float32Array,size:32,setter:function(a,b){return function(c){a.uniformMatrix2x4fv(b,!1,c)}}},Ka[35687]={Type:Float32Array,size:24,setter:function(a,b){return function(c){a.uniformMatrix3x2fv(b,!1,c)}}},Ka[35688]={Type:Float32Array,size:48,setter:function(a,b){return function(c){a.uniformMatrix3x4fv(b,!1,c)}}},Ka[35689]={Type:Float32Array,size:32,setter:function(a,b){return function(c){a.uniformMatrix4x2fv(b,!1,c)}}},Ka[35690]={Type:Float32Array,size:48,setter:function(a,b){return function(c){a.uniformMatrix4x3fv(b,!1,c)}}},Ka[35678]={Type:null,size:0,setter:r,arraySetter:s,bindPoint:Fa},Ka[35680]={Type:null,size:0,setter:r,arraySetter:s,bindPoint:Ga},Ka[35679]={Type:null,size:0,setter:r,arraySetter:s,bindPoint:32879},Ka[36289]={Type:null,size:0,setter:r,arraySetter:s,bindPoint:35866};const La={};La[ka]={size:4,setter:t},La[ma]={size:8,setter:t},La[na]={size:12,setter:t},La[oa]={size:16,setter:t},La[pa]={size:4,setter:u},La[qa]={size:8,setter:u},La[ra]={size:12,setter:u},La[sa]={size:16,setter:u},La[Ba]={size:4,setter:v},La[Ca]={size:8,setter:v},La[Da]={size:12,setter:v},La[Ea]={size:16,setter:v},La[ta]={size:4,setter:u},La[ua]={size:8,setter:u},La[wa]={size:12,setter:u},La[xa]={size:16,setter:u},La[ya]={size:4,setter:w,count:2},La[za]={size:9,setter:w,count:3},La[Aa]={size:16,setter:w,count:4};const Ma={addExtensionsToContext:!0,attribPrefix:a=>"a"+a[0].toUpperCase()+a.substr(1)};let Na;const Oa=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_float","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_disjoint_timer_query_webgl2","EXT_frag_depth","EXT_sRGB","EXT_shader_texture_lod","EXT_texture_filter_anisotropic","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_atc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_depth_texture","WEBGL_draw_buffers"],Pa=function(){function a(a){const d=a.constructor.name;if(!b[d]){for(const b in a)if("number"==typeof a[b]){const d=c[a[b]];c[a[b]]=d?`${d} | ${b}`:b}b[d]=!0}}const b={},c={};return function(b,d){return a(b),c[d]||"0x"+d.toString(16)}}(),Qa=/^(.*?)_/,Ra=/coord|texture/i,Sa=/color|colour/i,Ta=["position","positions","a_position"];const Ua=document.getElementById("canvas"),Va=function(a,b){const c=["webgl","experimental-webgl"];let d=null;for(let e=0,f=c.length;e<f;e++)if(d=a.getContext(c[e],b),d){Ma.addExtensionsToContext&&B(d);break}return d}(Ua),Wa=document.getElementById("viewAngle"),va=document.getElementById("lightAngle"),la=document.getElementById("vav"),Xa=document.getElementById("lav"),Ya=document.getElementById("isSpec"),Za=document.getElementById("isNorm"),$a=function(a,...b){Array.isArray(b[0])&&(b=b[0]);const c=0<b[0].indexOf("{")?E(a,b):C(a,b),d=H(a,c),e=G(a,c);return{program:c,uniformSetters:d,attribSetters:e}}(Va,"#define GLSLIFY 1\nattribute vec4 aPosition;\nattribute vec4 aNormal;\nattribute vec2 aTexcoord;\nuniform mat4 u_vpMatrix;\nuniform mat4 u_modelMatrix;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec2 vTexcoord;\n\nvoid main() {\n  gl_Position = u_vpMatrix * u_modelMatrix * aPosition;\n  vNormal = vec3(u_modelMatrix * aNormal);\n  vPosition= vec3(u_modelMatrix * aPosition);\n  vTexcoord = aTexcoord;\n}","#extension GL_OES_standard_derivatives : enable\nprecision highp float;\n#define GLSLIFY 1\nuniform vec3 u_viewPosition;\nuniform vec3 u_lightPosition;\nuniform vec3 u_specularColor;\nuniform float u_shininess;\nuniform vec3 u_diffuseColor;\nuniform vec3 u_ambientColor;\nuniform sampler2D u_diffMap;\nuniform sampler2D u_specMap;\nuniform sampler2D u_normMap;\nuniform float u_spec;\nuniform float u_norm;\nuniform float bumpScale;\nvarying vec3 vPosition;\nvarying vec2 vTexcoord;\nvarying vec3 vNormal;\nvec2 dHdxy_fwd() {\n    vec2 dSTdx = dFdx( vTexcoord );\n    vec2 dSTdy = dFdy( vTexcoord );\n    float Hll = bumpScale * texture2D( u_normMap, vTexcoord ).x;\n    float dBx = bumpScale * texture2D( u_normMap, vTexcoord + dSTdx ).x - Hll;\n    float dBy = bumpScale * texture2D( u_normMap, vTexcoord + dSTdy ).x - Hll;\n    return vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n    vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n    vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n    vec3 vN = surf_norm;\n    vec3 R1 = cross( vSigmaY, vN );\n    vec3 R2 = cross( vN, vSigmaX );\n    float fDet = dot( vSigmaX, R1 );\n    fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n    return normalize( abs( fDet ) * surf_norm - vGrad );\n}\n\nvoid main() {\n    vec3 normal = normalize(vNormal);\n    if(u_norm >= 1.0){\n        normal = perturbNormalArb( -vPosition, normal, dHdxy_fwd());\n    }\n    // \u5149\u7EBF\u65B9\u5411\n    vec3 lightDirection = normalize(u_lightPosition - vPosition);\n    // \u5149\u7EBF\u65B9\u5411\u548C\u6CD5\u5411\u91CF\u5939\u89D2\n    float nDotL = max(dot(lightDirection, normal), 0.0);\n    // \u6F2B\u53CD\u5C04\n    vec4 diffuseColor = texture2D(u_diffMap, vTexcoord);\n    vec3 diffuse = u_diffuseColor * nDotL * diffuseColor.rgb;\n    // \u73AF\u5883\u5149\n    vec3 ambient = u_ambientColor * diffuseColor.rgb;\n\n    // \u89C2\u5BDF\u65B9\u5411\n    vec3 eyeDirection = normalize(u_viewPosition - vPosition);\n    // \u955C\u9762\u53CD\u5C04\n    vec3 halfwayDir = normalize(lightDirection + eyeDirection);\n    float specularIntensity = pow(max(dot(normal, halfwayDir), 0.0), u_shininess);\n    vec3 specular = ( u_spec == 0.0 ? u_specularColor : texture2D(u_specMap, vTexcoord).rgb) * specularIntensity;\n    gl_FragColor = vec4(ambient + diffuse + specular, diffuseColor.a);\n}"),_a=function(a,b){const c={attribs:L(a,b)};let d=b.indices;return d?(d=N(d,"indices"),c.indices=M(a,d,a.ELEMENT_ARRAY_BUFFER),c.count=d.length,c.indexType=P(d)):c.count=T(b),c}(Va,{position:[-1,1,0,-1,-1,0,1,1,0,1,-1,0],texcoord:[0,1,0,0,1,1,1,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1]}),ab=function(a,b,c){const d=a.createVertexArray();return a.bindVertexArray(d),b.length||(b=[b]),b.forEach(function(b){J(a,b,c)}),a.bindVertexArray(null),{count:c.count,indexType:c.indexType,vertexArrayObject:d}}(Va,$a,_a),bb=e(),cb=e(),db=e(),eb=function(a,b,c,d,e){var g=Math.tan;e=e||new ca(16);const h=g(.5*aa-.5*a),f=1/(c-d);return e[0]=h/b,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=h,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(c+d)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*(c*d*f),e[15]=0,e}(aa/6,Ua.width/Ua.height,1,50),fb=[0,0,5],gb=[0,0,6];let hb=0,ib=0,jb=0,kb=0;Va.clearColor(0,0,0,1),Va.enable(Va.DEPTH_TEST),Va.enable(Va.CULL_FACE),function(a,b){var c=Math.floor;b=b||window.devicePixelRatio;var d=a.width,e=a.height,f=c(a.clientWidth*b),g=c(a.clientHeight*b);(d!==f||e!==g)&&(a.width=f,a.height=g,a.style.width=d+"px",a.style.height=e+"px")}(Ua),Va.viewport(0,0,Ua.width,Ua.height),Va.useProgram($a.program);const lb=Y(Va,{src:"../img/floor_tiles_06_diff_1k.jpg"},$),mb=Y(Va,{src:"../img/floor_tiles_06_spec_1k.jpg"},$),nb=Y(Va,{src:"../img/floor_tiles_06_nor_1k.jpg"},$);let ob=3;Wa.oninput=function(){hb=this.value,_(),la.innerHTML=hb},va.oninput=function(){ib=this.value,_(),Xa.innerHTML=ib},Ya.onclick=function(){jb=this.checked?1:0,_()},Za.onclick=function(){kb=this.checked?1:0,_()}})();

(function(){'use strict';var Ee=Math.floor,xe=Math.sin,he=Math.cos,Te=Math.PI,ge=Math.sqrt;function e(e,t,r){const i=new be(3);return e&&(i[0]=e),t&&(i[1]=t),r&&(i[2]=r),i}function t(e,t,r){return r=r||new be(3),r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}function r(e,t,r){return r=r||new be(3),r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function i(e,t,r){r=r||new be(3);const i=e[2]*t[0]-e[0]*t[2],o=e[0]*t[1]-e[1]*t[0];return r[0]=e[1]*t[2]-e[2]*t[1],r[1]=i,r[2]=o,r}function o(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function n(e){return ge(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}function a(e,t){t=t||new be(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=ge(r);return 1e-5<i?(t[0]=e[0]/i,t[1]=e[1]/i,t[2]=e[2]/i):(t[0]=0,t[1]=0,t[2]=0),t}function s(e,t){return t=t||new be(3),t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function u(e){return e=e||new Ae(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function d(e,t){t=t||new Ae(16);const r=e[0],i=e[1],o=e[2],n=e[3],a=e[4],s=e[5],u=e[6],f=e[7],l=e[8],c=e[9],m=e[10],_=e[11],p=e[12],v=e[13],E=e[14],x=e[15],h=m*x,T=E*_,A=u*x,y=E*f,F=u*_,R=m*f,S=o*x,L=E*n,z=o*_,B=m*n,C=o*f,O=u*n,I=l*v,w=p*c,N=a*v,U=p*s,M=a*c,D=l*s,P=r*v,V=p*i,G=r*c,X=l*i,W=r*s,Y=a*i,H=h*s+y*c+F*v-(T*s+A*c+R*v),k=T*i+S*c+B*v-(h*i+L*c+z*v),j=A*i+L*s+C*v-(y*i+S*s+O*v),q=R*i+z*s+O*c-(F*i+B*s+C*c),K=1/(r*H+a*k+l*j+p*q);return t[0]=K*H,t[1]=K*k,t[2]=K*j,t[3]=K*q,t[4]=K*(T*a+A*l+R*p-(h*a+y*l+F*p)),t[5]=K*(h*r+L*l+z*p-(T*r+S*l+B*p)),t[6]=K*(y*r+S*a+O*p-(A*r+L*a+C*p)),t[7]=K*(F*r+B*a+C*l-(R*r+z*a+O*l)),t[8]=K*(I*f+U*_+M*x-(w*f+N*_+D*x)),t[9]=K*(w*n+P*_+X*x-(I*n+V*_+G*x)),t[10]=K*(N*n+V*f+W*x-(U*n+P*f+Y*x)),t[11]=K*(D*n+G*f+Y*_-(M*n+X*f+W*_)),t[12]=K*(N*m+D*E+w*u-(M*E+I*u+U*m)),t[13]=K*(G*E+I*o+V*m-(P*m+X*E+w*o)),t[14]=K*(P*u+Y*E+U*o-(W*E+N*o+V*u)),t[15]=K*(W*m+M*o+X*u-(G*u+Y*m+D*o)),t}function f(e,t,r){r=r||new Ae(16);const i=e[0],o=e[1],n=e[2],a=e[3],s=e[4],u=e[5],d=e[6],f=e[7],l=e[8],c=e[9],m=e[10],_=e[11],p=e[12],v=e[13],E=e[14],x=e[15],h=t[0],T=t[1],A=t[2],y=t[3],F=t[4],R=t[5],S=t[6],L=t[7],z=t[8],B=t[9],C=t[10],O=t[11],I=t[12],w=t[13],N=t[14],U=t[15];return r[0]=i*h+s*T+l*A+p*y,r[1]=o*h+u*T+c*A+v*y,r[2]=n*h+d*T+m*A+E*y,r[3]=a*h+f*T+_*A+x*y,r[4]=i*F+s*R+l*S+p*L,r[5]=o*F+u*R+c*S+v*L,r[6]=n*F+d*R+m*S+E*L,r[7]=a*F+f*R+_*S+x*L,r[8]=i*z+s*B+l*C+p*O,r[9]=o*z+u*B+c*C+v*O,r[10]=n*z+d*B+m*C+E*O,r[11]=a*z+f*B+_*C+x*O,r[12]=i*I+s*w+l*N+p*U,r[13]=o*I+u*w+c*N+v*U,r[14]=n*I+d*w+m*N+E*U,r[15]=a*I+f*w+_*N+x*U,r}function l(e,r,o,n){n=n||new Ae(16);const s=ye,u=Fe,d=Re;return a(t(e,r,d),d),a(i(o,d,s),s),a(i(d,s,u),u),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=0,n[4]=u[0],n[5]=u[1],n[6]=u[2],n[7]=0,n[8]=d[0],n[9]=d[1],n[10]=d[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function c(e,t){return t=t||new Ae(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function m(e,t){t=t||new Ae(16);const r=he(e),i=xe(e);return t[0]=r,t[1]=0,t[2]=-i,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=i,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(e,t,r,i){i=i||new Ae(16);let o=t[0],a=t[1],u=t[2];const d=ge(o*o+a*a+u*u);o/=d,a/=d,u/=d;const n=o*o,f=a*a,l=u*u,m=he(r),c=xe(r),s=1-m,_=n+(1-n)*m,p=o*a*s+u*c,v=o*u*s-a*c,E=o*a*s-u*c,h=f+(1-f)*m,T=a*u*s+o*c,A=o*u*s+a*c,F=a*u*s-o*c,R=l+(1-l)*m,S=e[0],L=e[1],B=e[2],C=e[3],O=e[4],I=e[5],w=e[6],N=e[7],U=e[8],M=e[9],D=e[10],P=e[11];return i[0]=_*S+p*O+v*U,i[1]=_*L+p*I+v*M,i[2]=_*B+p*w+v*D,i[3]=_*C+p*N+v*P,i[4]=E*S+h*O+T*U,i[5]=E*L+h*I+T*M,i[6]=E*B+h*w+T*D,i[7]=E*C+h*N+T*P,i[8]=A*S+F*O+R*U,i[9]=A*L+F*I+R*M,i[10]=A*B+F*w+R*D,i[11]=A*C+F*N+R*P,e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function p(t,r,i){i=i||e();const o=r[0],n=r[1],a=r[2],s=o*t[3]+n*t[7]+a*t[11]+t[15];return i[0]=(o*t[0]+n*t[4]+a*t[8]+t[12])/s,i[1]=(o*t[1]+n*t[5]+a*t[9]+t[13])/s,i[2]=(o*t[2]+n*t[6]+a*t[10]+t[14])/s,i}function v(t,r,i){i=i||e();const o=r[0],n=r[1],a=r[2];return i[0]=o*t[0]+n*t[4]+a*t[8],i[1]=o*t[1]+n*t[5]+a*t[9],i[2]=o*t[2]+n*t[6]+a*t[10],i}function E(){var e=Ee(360*Math.random()),t=Ee(50*Math.random()+50),r=Ee(20*Math.random()+40);return[e,t,r]}function x(e){var o=Math.ceil,n=parseFloat(e[0]/360,10),a=parseFloat(e[1]/100,10),s=parseFloat(e[2]/100,10);if(0==a){var u=g=b=o(255*s);return[u,g,b]}for(var r,d=.5<=s?s+a-s*a:s*(1+a),f=2*s-d,l=[1/3,0,-1/3],c=0;3>c;c++)r=n+l[c],0>r&&(r+=1),1<r&&(r-=1),r=1>6*r?f+6*(d-f)*r:1>2*r?d:2>3*r?f+6*((d-f)*(2/3-r)):f,l[c]=o(255*r);return l}function h(e){return[e[0]/255,e[1]/255,e[2]/255,e[3]||1]}function T(e,t,r){if(!e)throw new Error("canvas not exist");var i=e.getBoundingClientRect();return{x:(t-i.left)*(e.width/i.width),y:(r-i.top)*(e.height/i.height)}}function A(e,t){var r="mousewheel";try{document.createEvent("MouseScrollEvents"),r="DOMMouseScroll"}catch(t){}e.addEventListener(r,function(r){if("wheelDelta"in r){var e=r.wheelDelta;window.opera&&10>opera.version()&&(e=-e),r.delta=Math.round(e)/120}else"detail"in r&&(r.wheelDelta=40*-r.detail,r.delta=r.wheelDelta/120);t(r)},!1)}function F(t){var r=t[0],i=t[1],o=t[2],e=ge(r*r+i*i+o*o);return e?1==e?t:(e=1/e,t[0]=r*e,t[1]=i*e,t[2]=o*e,t):(t[0]=0,t[1]=0,t[2]=0,t)}function R(e){return ot[e].bindPoint}function S(e,t){return function(r){e.uniform1i(t,r)}}function L(e,t){return function(r){e.uniform1iv(t,r)}}function z(e,t){return function(r){e.uniform2iv(t,r)}}function B(e,t){return function(r){e.uniform3iv(t,r)}}function C(e,t){return function(r){e.uniform4iv(t,r)}}function O(e,t,r,i){const o=R(t);return P(e)?function(t){let n,a;D(e,t)?(n=t,a=null):(n=t.texture,a=t.sampler),e.uniform1i(i,r),e.activeTexture(e.TEXTURE0+r),e.bindTexture(o,n),e.bindSampler(r,a)}:function(t){e.uniform1i(i,r),e.activeTexture(e.TEXTURE0+r),e.bindTexture(o,t)}}function I(e,t,r,i,o){const n=R(t),a=new Int32Array(o);for(let n=0;n<o;++n)a[n]=r+n;return P(e)?function(t){e.uniform1iv(i,a),t.forEach(function(t,i){e.activeTexture(e.TEXTURE0+a[i]);let o,s;D(e,t)?(o=t,s=null):(o=t.texture,s=t.sampler),e.bindSampler(r,s),e.bindTexture(n,o)})}:function(t){e.uniform1iv(i,a),t.forEach(function(t,r){e.activeTexture(e.TEXTURE0+a[r]),e.bindTexture(n,t)})}}function w(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4fv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,r.num||r.size,r.type||e.FLOAT,r.normalize||!1,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function N(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4iv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.num||r.size,r.type||e.INT,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function U(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4uiv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.num||r.size,r.type||e.UNSIGNED_INT,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function M(e,t,r){const i=r.size,o=r.count;return function(r){e.bindBuffer(e.ARRAY_BUFFER,r.buffer);const n=r.size||r.num||i,a=r.type||e.FLOAT,s=ot[a],u=s.size*n,d=r.normalize||!1,f=r.offset||0;for(let s=0;s<o;++s)e.enableVertexAttribArray(t+s),e.vertexAttribPointer(t+s,n/o,a,d,u,f+u/o*s),void 0!==r.divisor&&e.vertexAttribDivisor(t+s,r.divisor)}}function D(e,r){return st||(st=e.createTexture()),r instanceof st.constructor}function P(e){return!!e.texStorage2D}function V(e){const t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}function G(e,t){dt(e,0);const r=e.getExtension(t);if(r){const i={},o=ft.exec(t)[1];for(const t in r){const n=r[t],a="function"==typeof n,s=a?o:"_"+o;let u=t;t.endsWith(s)&&(u=t.substring(0,t.length-s.length)),e[u]===void 0?a?e[u]=function(e){return function(){return e.apply(r,arguments)}}(n):(e[u]=n,i[u]=n):!a&&e[u]!==n&&console.warn(u,e[u],n,t)}i.constructor={name:r.constructor.name},dt(i,0)}return r}function X(e){for(let t=0;t<ut.length;++t)G(e,ut[t])}function W(e,...t){const r=Y(t);return H(e,r)}function Y(...e){let t,r,i,o=[];if((e+"").replace(/[^\,\s]+/g,function(e){e&&o.push(e)}),o.forEach(function(e){if(i=document.getElementById(e),!i)throw new Error("unknown script element "+e);0<=i.type.indexOf("vert")?t=i.text:0<=i.type.indexOf("frag")&&(r=i.text)}),!t)throw new Error("VERTEX_SHADER String not exist");if(!r)throw new Error("FRAGMENT_SHADER String not exist");return[t,r]}function H(e,...t){Array.isArray(t[0])&&(t=t[0]);const r=k(e,e.VERTEX_SHADER,t[0]),i=k(e,e.FRAGMENT_SHADER,t[1]);if(!r)throw new Error("VERTEX_SHADER not exist");if(!i)throw new Error("FRAGMENT_SHADER not exist");const o=e.createProgram();if(!o)throw new Error("program not exist");e.attachShader(o,r),e.attachShader(o,i),e.linkProgram(o);const n=e.getProgramParameter(o,e.LINK_STATUS);if(!n){const t=e.getProgramInfoLog(o);throw e.deleteProgram(o),e.deleteShader(i),e.deleteShader(r),new Error("Failed to link program: "+t)}return o}function k(e,t,r){const i=e.createShader(t);if(!i)throw new Error("unable to create shader");e.shaderSource(i,r),e.compileShader(i);const o=e.getShaderParameter(i,e.COMPILE_STATUS);if(!o){const t=e.getShaderInfoLog(i);throw e.deleteShader(i),new Error("Failed to compile shader: "+t)}return i}function j(e,...t){Array.isArray(t[0])&&(t=t[0]);const r=0<t[0].indexOf("{")?H(e,t):W(e,t),i=K(e,r),o=q(e,r);return{program:r,uniformSetters:i,attribSetters:o}}function q(e,t){const r={},o=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<o;++n){const i=e.getActiveAttrib(t,n);if(V(i))continue;const o=e.getAttribLocation(t,i.name),a=nt[i.type],s=a.setter(e,o,a);s.location=o,r[i.name]=s}return r}function K(e,t){function r(t,r){const o=e.getUniformLocation(t,r.name),n=1<r.size&&"[0]"===r.name.substr(-3),a=r.type,s=ot[a];if(!s)throw"unknown type: 0x"+a.toString(16);let u;if(s.bindPoint){const t=i;i+=r.size,u=n?s.arraySetter(e,a,t,o,r.size):s.setter(e,a,t,o,r.size)}else u=s.arraySetter&&n?s.arraySetter(e,o):s.setter(e,o);return u.location=o,u}let i=0,o={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const i=e.getActiveUniform(t,a);if(V(i))continue;let n=i.name;"[0]"===n.substr(-3)&&(n=n.substr(0,n.length-3));const s=r(t,i);o[n]=s}return o}function J(e,t){e=e.uniformSetters||e,Object.keys(t).forEach(function(r){const i=e[r];i&&i(t[r])})}function Z(e,t,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):($(t.attribSetters||t,r.attribs),r.indices&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.indices))}function $(e,t){e=e.attribSetters||e,Object.keys(t).forEach(function(r){const i=e[r];i&&i(t[r])})}function Q(e,t){let r={attribs:ee(e,t)},i=t.indices;return i?(i=ie(i,"indices"),r.indices=te(e,i,e.ELEMENT_ARRAY_BUFFER),r.count=i.length,r.indexType=ne(i)):r.count=de(t),r}function ee(e,t){let r={};return Object.keys(t).forEach(function(i){if(!ae(i)){const o=t[i],n=o.name||o.attribName||at.attribPrefix+i,a=ie(o,n);r[n]={buffer:te(e,a,void 0,o.drawType),num:o.num||o.size||oe(n),type:ne(a),normalize:ue(a),stride:o.stride||0,offset:o.offset||0,divisor:o.divisor,drawType:o.drawType||e.STATIC_DRAW}}}),e.bindBuffer(e.ARRAY_BUFFER,null),r}function te(e,t,r,i){r=r||e.ARRAY_BUFFER;const o=e.createBuffer();return e.bindBuffer(r,o),e.bufferData(r,t,i||e.STATIC_DRAW),o}function re(e,t,r){const i=e.createVertexArray();return e.bindVertexArray(i),t.length||(t=[t]),t.forEach(function(t){Z(e,t,r)}),e.bindVertexArray(null),{count:r.count,indexType:r.indexType,vertexArrayObject:i}}function ie(e,t){if(se(e))return e;if(se(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type;return r||(ae(t)?r=Uint16Array:r=Float32Array),new r(e.data)}function oe(e,t){let r;if(r=lt.test(e)?2:ct.test(e)?4:3,0<t%r)throw"Can not guess num for attribute '"+e+"'. Tried "+r+" but "+t+" values is not evenly divisible by "+r+". You should specify it.";return r}function ne(e){if(e instanceof Int8Array)return Se;if(e instanceof Uint8Array)return Le;if(e instanceof Uint8ClampedArray)return Le;if(e instanceof Int16Array)return ze;if(e instanceof Uint16Array)return Be;if(e instanceof Int32Array)return Ne;if(e instanceof Uint32Array)return ke;if(e instanceof Float32Array)return Ce;throw"unsupported typed array type"}function ae(e){return"indices"===e}function se(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer}function ue(e){return!!(e instanceof Int8Array)||!!(e instanceof Uint8Array)}function de(e){let t,r;for(r=0;r<mt.length&&(t=mt[r],!(t in e));++r);r===mt.length&&(t=Object.keys(e)[0]);const o=e[t],n=fe(o).length,a=le(o,t);if(0<n%a)throw"numComponents "+a+" not correct for length "+n;return n/a}function fe(e){return e.length?e:e.data}function le(e,t){return e.num||e.size||oe(t,fe(e).length)}function ce(e,t,r,i,o){r=r||e.TRIANGLES,i=i||t.count,o=o||0;const n=t.indices,a=t.indexType;a||n?e.drawElements(r,i,a||Be,o):e.drawArrays(r,o,i)}function me(t,r,o,n){o=o||t.drawingBufferWidth,n=n||t.drawingBufferHeight;const a=t.createFramebuffer();if(!a)throw new Error("Failed to create frame buffer object");t.bindFramebuffer(t.FRAMEBUFFER,a);const s={framebuffer:a,textures:[],width:o,height:n},u=r.texs||1,d=!!r.depth;r.wrapT=r.wrapS=rt;for(let e=0;e<u;e++){const i=pe(t,r,o,n);t.generateMipmap(Je),s.textures.push(i),t.framebufferTexture2D(t.FRAMEBUFFER,Qe+e,Je,i,0)}if(d){const e=t.createRenderbuffer();if(!e)throw new Error("Failed to create renderbuffer object");t.bindRenderbuffer(t.RENDERBUFFER,e),t.renderbufferStorage(t.RENDERBUFFER,$e,o,n),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,e)}const f=t.checkFramebufferStatus(t.FRAMEBUFFER);if(t.FRAMEBUFFER_COMPLETE!==f)throw new Error("Frame buffer object is incomplete: "+f.toString());return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(Je,null),d&&t.bindRenderbuffer(t.RENDERBUFFER,null),s}function _e(e,t,r){r=r||e.FRAMEBUFFER,t?(e.bindFramebuffer(r,t.framebuffer),e.viewport(0,0,t.width,t.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}function pe(e,t,r,i){const o=e.createTexture();if(!o)throw new Error("Failed to create texture object");const n=t.target||Je,a=t.format||Ze,s=t.informat||a,u=t.type||Le;return e.bindTexture(n,o),r&&i&&e.texImage2D(n,0,s,r,i,0,a,u,null),e.texParameteri(n,e.TEXTURE_MIN_FILTER,t.min||it),e.texParameteri(n,e.TEXTURE_MAG_FILTER,t.mag||it),e.texParameteri(n,e.TEXTURE_WRAP_T,t.wrapT||tt),e.texParameteri(n,e.TEXTURE_WRAP_S,t.wrapS||tt),o}function ve(){Z(vt,ht,bt),Object.assign(Lt,{u_ambientColor:[.3,.3,.3],u_viewPosition:Ot,u_vpMatrix:Ct,u_modelMatrix:u(),u_color:[.2,.2,.2,1],u_shininess:50}),J(ht,Lt),ce(vt,bt),St.forEach((e,t)=>{let r=At[t%At.length];Z(vt,ht,r),J(ht,{u_modelMatrix:c(e.pos),u_color:e.color}),ce(vt,r)}),vt.bindVertexArray(null)}let be=Float32Array,Ae=Float32Array;const ye=e(),Fe=e(),Re=e(),Se=5120,Le=5121,ze=5122,Be=5123,Ce=5126,Oe=35664,Ie=35665,we=35666,Ne=5124,Ue=35667,Me=35668,De=35669,Pe=35670,Ve=35671,Ge=35672,Xe=35673,We=35674,Ye=35675,He=35676,ke=5125,je=36294,qe=36295,Ke=36296,Je=3553,Ze=6408,$e=33189,Qe=36064,et=36096,tt=10497,rt=33071,it=9729,ot={};ot[Ce]={Type:Float32Array,size:4,setter:function(e,t){return function(r){e.uniform1f(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1fv(t,r)}}},ot[Oe]={Type:Float32Array,size:8,setter:function(e,t){return function(r){e.uniform2fv(t,r)}}},ot[Ie]={Type:Float32Array,size:12,setter:function(e,t){return function(r){e.uniform3fv(t,r)}}},ot[we]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniform4fv(t,r)}}},ot[Ne]={Type:Int32Array,size:4,setter:S,arraySetter:L},ot[Ue]={Type:Int32Array,size:8,setter:z},ot[Me]={Type:Int32Array,size:12,setter:B},ot[De]={Type:Int32Array,size:16,setter:C},ot[ke]={Type:Uint32Array,size:4,setter:function(e,t){return function(r){e.uniform1ui(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1uiv(t,r)}}},ot[je]={Type:Uint32Array,size:8,setter:function(e,t){return function(r){e.uniform2uiv(t,r)}}},ot[qe]={Type:Uint32Array,size:12,setter:function(e,t){return function(r){e.uniform3uiv(t,r)}}},ot[Ke]={Type:Uint32Array,size:16,setter:function(e,t){return function(r){e.uniform4uiv(t,r)}}},ot[Pe]={Type:Uint32Array,size:4,setter:S,arraySetter:L},ot[Ve]={Type:Uint32Array,size:8,setter:z},ot[Ge]={Type:Uint32Array,size:12,setter:B},ot[Xe]={Type:Uint32Array,size:16,setter:C},ot[We]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniformMatrix2fv(t,!1,r)}}},ot[Ye]={Type:Float32Array,size:36,setter:function(e,t){return function(r){e.uniformMatrix3fv(t,!1,r)}}},ot[He]={Type:Float32Array,size:64,setter:function(e,t){return function(r){e.uniformMatrix4fv(t,!1,r)}}},ot[35685]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix2x3fv(t,!1,r)}}},ot[35686]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix2x4fv(t,!1,r)}}},ot[35687]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix3x2fv(t,!1,r)}}},ot[35688]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix3x4fv(t,!1,r)}}},ot[35689]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix4x2fv(t,!1,r)}}},ot[35690]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix4x3fv(t,!1,r)}}},ot[35678]={Type:null,size:0,setter:O,arraySetter:I,bindPoint:Je},ot[35680]={Type:null,size:0,setter:O,arraySetter:I,bindPoint:34067},ot[35679]={Type:null,size:0,setter:O,arraySetter:I,bindPoint:32879},ot[36289]={Type:null,size:0,setter:O,arraySetter:I,bindPoint:35866};const nt={};nt[Ce]={size:4,setter:w},nt[Oe]={size:8,setter:w},nt[Ie]={size:12,setter:w},nt[we]={size:16,setter:w},nt[Ne]={size:4,setter:N},nt[Ue]={size:8,setter:N},nt[Me]={size:12,setter:N},nt[De]={size:16,setter:N},nt[ke]={size:4,setter:U},nt[je]={size:8,setter:U},nt[qe]={size:12,setter:U},nt[Ke]={size:16,setter:U},nt[Pe]={size:4,setter:N},nt[Ve]={size:8,setter:N},nt[Ge]={size:12,setter:N},nt[Xe]={size:16,setter:N},nt[We]={size:4,setter:M,count:2},nt[Ye]={size:9,setter:M,count:3},nt[He]={size:16,setter:M,count:4};const at={addExtensionsToContext:!0,attribPrefix:"a_"};let st;const ut=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_float","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_disjoint_timer_query_webgl2","EXT_frag_depth","EXT_sRGB","EXT_shader_texture_lod","EXT_texture_filter_anisotropic","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_atc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_depth_texture","WEBGL_draw_buffers"],dt=function(){function e(e){const i=e.constructor.name;if(!t[i]){for(const t in e)if("number"==typeof e[t]){const i=r[e[t]];r[e[t]]=i?`${i} | ${t}`:t}t[i]=!0}}const t={},r={};return function(t,i){return e(t),r[i]||"0x"+i.toString(16)}}(),ft=/^(.*?)_/,lt=/coord|texture/i,ct=/color|colour/i,mt=["position","positions","a_position"];var _t="#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_texcoord;\nout vec2 texcoord;\n\nvoid main()\n{\n    texcoord = a_texcoord;\n    gl_Position = vec4(a_position,1.0);\n}";const pt=document.getElementById("canvas"),vt=function(e,t){const r=["webgl2","webgl","experimental-webgl"];let o=null;for(let n=0;n<r.length;++n)if(o=e.getContext(r[n],t),o){at.addExtensionsToContext&&X(o);break}return o}(pt),y=me(vt,{informat:vt.RGBA16F,type:vt.FLOAT,texs:2,depth:!0}),Et=me(vt,{informat:vt.RGBA16F,type:vt.FLOAT}),xt=me(vt,{informat:vt.RGBA16F,type:vt.FLOAT}),ht=j(vt,"#version 300 es\n#define GLSLIFY 1\nin vec4 a_position;\nin vec4 a_normal;\nuniform mat4 u_vpMatrix;\nuniform mat4 u_modelMatrix;\nout vec3 vnormal;\nout vec3 vposition;\n\nvoid main() {\n    gl_Position = u_vpMatrix * u_modelMatrix * a_position;\n    vnormal = vec3(transpose(inverse(u_modelMatrix)) * a_normal);\n    vposition = vec3(u_modelMatrix * a_position);\n}","#version 300 es\nprecision highp float;\n#define GLSLIFY 1 \nlayout (location = 0) out vec4 FragColor;\nlayout (location = 1) out vec4 BrightColor;\nstruct Light {\n    vec3 Position;\n    vec4 Color;\n};\nuniform Light lights[4];\nuniform vec3 u_ambientColor;\nuniform vec4 u_color;\nuniform vec3 u_viewPosition;\nuniform float u_shininess;\nin vec3 vnormal;\nin vec3 vposition;\nconst float constantAtt = 1.0;\nconst float linearAtt = 0.14;\nconst float quadraticAtt = 0.07;\n\nvoid main() { \n    vec3 normal = normalize(vnormal);\n    vec3 viewDirection = normalize(u_viewPosition - vposition);\n    vec3 lighting = vec3(0.0);\n    for(int i = 0; i < 4; i++) {\n        vec3 pos = lights[i].Position;\n        vec4 color = lights[i].Color;\n        vec3 lightDir = normalize(pos - vposition);\n        float cosTheta = max(dot(lightDir, normal), 0.0);\n        //\u6F2B\u53CD\u5C04\n        vec3 diffuse = u_color.rgb * cosTheta * u_color.a;\n        if(u_color.a <= 1.0)\n            diffuse *= color.rgb;\n        //\u9AD8\u5149\n        vec3 halfwayDir = normalize(pos + viewDirection);\n        float specularIntensity = pow(max(dot(normal, halfwayDir), 0.0), u_shininess);\n        vec3 specular = color.rgb * specularIntensity;\n\n        // \u5149\u5F3A\u8870\u51CF\n        float att = 0.0;\n        if(cosTheta > 0.0){\n            float dis = length(pos - vposition);\n            att = 1.0/(constantAtt + linearAtt * dis + quadraticAtt * dis * dis);\n        }\n        \n        lighting += (diffuse + specular);\n    }\n    //\u73AF\u5883\u5149\n    vec3 ambient = u_ambientColor * u_color.rgb * u_color.a;\n    vec3 result = ambient + lighting;\n\n    // \u68C0\u67E5\u7ED3\u679C\u503C\u662F\u5426\u9AD8\u4E8E\u67D0\u4E2A\u95E8\u69DB\uFF0C\u5982\u679C\u9AD8\u4E8E\u5C31\u6E32\u67D3\u5230\u5149\u6E90\u989C\u8272\u7F13\u5B58\u4E2D\n    float brightness = dot(result, vec3(0.2126, 0.7152, 0.0722));\n    if(brightness > 1.0){\n        BrightColor = vec4(result, 1.0);\n    } else {\n        BrightColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }\n    FragColor = vec4(result, 1.0);\n}"),Tt=j(vt,_t,"#version 300 es\nprecision highp float;\n#define GLSLIFY 1\nuniform sampler2D image;\nuniform bool horizontal;\nin vec2 texcoord;\nout vec4 FragColor;\nconst float weight[5] = float[](0.2270270270, 0.1945945946, 0.1216216216, 0.0540540541, 0.0162162162);\n\nvoid main() {\n    vec2 tex_offset = vec2(1.0 / float(textureSize(image, 0)));//\u6BCF\u4E2A\u50CF\u7D20\u7684\u5C3A\u5BF8\n    vec3 result = texture(image, texcoord).rgb * weight[0];\n    if (horizontal) {\n        for (int i = 0; i < 5; ++i) {\n            result += texture(image, texcoord + vec2(tex_offset.x * float(i), 0.0)).rgb * weight[i];\n            result += texture(image, texcoord - vec2(tex_offset.x * float(i), 0.0)).rgb * weight[i];\n        }\n    } else {\n        for (int i = 0; i < 5; ++i) {\n            result += texture(image, texcoord + vec2(0.0, tex_offset.y * float(i))).rgb * weight[i];\n            result += texture(image, texcoord - vec2(0.0, tex_offset.y * float(i))).rgb * weight[i];\n        }\n    }\n    FragColor = vec4 (result, 1.0);\n}"),gt=j(vt,_t,"#version 300 es\nprecision highp float;\n#define GLSLIFY 1\nin vec2 texcoord;\nuniform sampler2D image;\nuniform sampler2D imageBlur;\nuniform bool bloom;\nout vec4 FragColor;\nconst float exposure = 1.0;\nconst float gamma = 2.2;\n\nvoid main() {   \n    vec3 hdrColor = texture(image, texcoord).rgb;\n    vec3 bloomColor = texture(imageBlur, texcoord).rgb;\n    if (bloom)\n        hdrColor += bloomColor;     //\u6DFB\u52A0\u878D\u5408\n    \n    //\u8272\u8C03\u6620\u5C04\n    // vec3 result = hdrColor / (hdrColor + vec3(1.0));\n    vec3 result = vec3 (1.0) - exp(-hdrColor * exposure);\n    //\u8FDB\u884Cgamma\u6821\u6B63\n    // result = pow(result, vec3 (1.0 / gamma));\n    FragColor = vec4(result, 1.0);\n}"),bt=re(vt,ht,Q(vt,function(e){return{position:[-e,0,-e,-e,0,e,e,0,-e,e,0,-e,-e,0,e,e,0,e,e,0,-e,-e,0,e,-e,0,-e,e,0,e,-e,0,e,e,0,-e],normal:[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],texcoord:[0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1]}}(30))),At=[re(vt,ht,Q(vt,function(e){e=e||1;var t=[-e,-e,-e,-e,e,-e,e,-e,-e,-e,e,-e,e,e,-e,e,-e,-e,-e,-e,e,e,-e,e,-e,e,e,-e,e,e,e,-e,e,e,e,e,-e,e,-e,-e,e,e,e,e,-e,-e,e,e,e,e,e,e,e,-e,-e,-e,-e,e,-e,-e,-e,-e,e,-e,-e,e,e,-e,-e,e,-e,e,-e,-e,-e,-e,-e,e,-e,e,-e,-e,-e,e,-e,e,e,-e,e,-e,e,-e,-e,e,e,-e,e,-e,e,e,-e,e,e,e,-e,e,e,e];return{position:t,normal:[0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]}}(1))),re(vt,ht,Q(vt,function(e,t){e=e||1,t=t||15;for(var o,n,a,s,u,d,f=[],c=[],m=[],_=0;_<=t;_++){s=_*Te/t,d=e*xe(s),n=e*he(s);for(var p=0;p<=t;p++)u=2*p*Te/t,o=xe(u)*d,a=he(u)*d,f.push(o,n,a)}for(_=0;_<t;_++)for(p=0;p<t;p++){var v=_*(t+1)+p,E=v+t+1;c.push(f[3*v],f[3*v+1],f[3*v+2]),c.push(f[3*E],f[3*E+1],f[3*E+2]),c.push(f[3*(v+1)],f[3*(v+1)+1],f[3*(v+1)+2]),c.push(f[3*(v+1)],f[3*(v+1)+1],f[3*(v+1)+2]),c.push(f[3*E],f[3*E+1],f[3*E+2]),c.push(f[3*(E+1)],f[3*(E+1)+1],f[3*(E+1)+2]),m=m.concat(F([f[3*v],f[3*v+1],f[3*v+2]])),m=m.concat(F([f[3*E],f[3*E+1],f[3*E+2]])),m=m.concat(F([f[3*(v+1)],f[3*(v+1)+1],f[3*(v+1)+2]])),m=m.concat(F([f[3*(v+1)],f[3*(v+1)+1],f[3*(v+1)+2]])),m=m.concat(F([f[3*E],f[3*E+1],f[3*E+2]])),m=m.concat(F([f[3*(E+1)],f[3*(E+1)+1],f[3*(E+1)+2]]))}return f=null,{position:c,normal:m}}(1,40))),re(vt,ht,Q(vt,function(e,t,o){e=e||1,t=t||1,o=o||3;for(var n=[],a=[],s=[],u=2*Te/o,d=0,f=e*e/t,c=0,m=3,_=0;_<o;_++)d=e*he(u*_),c=e*xe(u*_),n.push(d,-t/2,c);for(var _=0,p=n.length;_<p;_+=m){var v=(_+3)%p,E=(_+4)%p,T=(_+5)%p;a.push(0,t/2,0),a.push(n[v],n[E],n[T]),a.push(n[_],n[_+1],n[_+2]),s.push(0,1,0),s=s.concat(F([n[v],f,n[T]])),s=s.concat(F([n[_],f,n[_+2]])),a.push(0,-t/2,0),a.push(n[_],n[_+1],n[_+2]),a.push(n[v],n[E],n[T]),s.push(0,-1,0,0,-1,0,0,-1,0)}return n=null,{position:a,normal:s}}(1,3,40))),re(vt,ht,Q(vt,function(e,t,o){e=e||1,t=t||1,o=o||3;for(var n=[],a=[],s=[],u=2*Te/o,d=0,f=0,c=6,m=0;m<o;m++)d=e*he(u*m),f=e*xe(u*m),n.push(d,t/2,f),n.push(d,-t/2,f);for(var m=0,_=n.length;m<_;m+=c){var p=(m+6)%_,v=(m+7)%_,E=(m+8)%_,T=(m+9)%_,A=(m+10)%_,y=(m+11)%_;a.push(0,t/2,0),a.push(n[p],n[v],n[E]),a.push(n[m],n[m+1],n[m+2]),s.push(0,1,0,0,1,0,0,1,0),a.push(n[m],n[m+1],n[m+2]),a.push(n[p],n[v],n[E]),a.push(n[m+3],n[m+4],n[m+5]),s=s.concat(F([n[m],t/2,n[m+2]])),s=s.concat(F([n[p],t/2,n[E]])),s=s.concat(F([n[m+3],-t/2,n[m+5]])),a.push(n[m+3],n[m+4],n[m+5]),a.push(n[p],n[v],n[E]),a.push(n[T],n[A],n[y]),s=s.concat(F([n[m+3],-t/2,n[m+5]])),s=s.concat(F([n[p],t/2,n[E]])),s=s.concat(F([n[T],-t/2,n[y]])),a.push(0,-t/2,0),a.push(n[m+3],n[m+4],n[m+5]),a.push(n[T],n[A],n[y]),s.push(0,-1,0,0,-1,0,0,-1,0)}return n=null,{position:a,normal:s}}(1,2,40)))],yt={position:[-1,1,0,-1,-1,0,1,1,0,1,1,0,-1,-1,0,1,-1,0],texcoord:[0,1,0,0,1,1,1,1,0,0,1,0]},Ft=re(vt,Tt,Q(vt,yt)),Rt=re(vt,gt,Q(vt,yt));let St=[];const Lt={};for(let e=0;8>e;e++){let t,r=h(x(E()));4>e?(r[3]=50,t=[4*(e%2?1:-1),4*Math.random()+1,6*Ee(e/2)],Lt[`lights[${e}].Position`]=t,Lt[`lights[${e}].Color`]=r):t=[9*xe(2*(Math.random()*Te)),5*he(Math.random()*Te/2)+1,5*xe(2*(Math.random()*Te))],St.push({pos:t,color:r})}vt.clearColor(.1,.1,.1,1),vt.enable(vt.DEPTH_TEST),vt.enable(vt.CULL_FACE),function(e,t){t=t||window.devicePixelRatio;var r=e.width,i=e.height,o=Ee(e.clientWidth*t),n=Ee(e.clientHeight*t);(r!==o||i!==n)&&(e.width=o,e.height=n,e.style.width=r+"px",e.style.height=i+"px")}(pt);const zt=function(t,i,u,d){function f(r){var e=Math.acos,i=T(t,r.clientX,r.clientY),n=2*((F.y>h.y?F.x-i.x:i.x-F.x)/E*Te),u=(F.y-i.y)/x*Te,d=L[1],f=e(o(a(L),a([0,d,0]))),l=m(n);f+u<Te/90&&0<d&&0>u&&(u=Te/180-f),f-u<Te/90&&0>d&&0<u&&(u=f-Te/180);var c=v(m(-Te/2),[L[0],0,L[2]]),A=_(l,c,-u);S=s(p(A,L))}function l(){L=s(S),t.removeEventListener("mouseup",l,!1),t.removeEventListener("mousemove",f,!1),t.removeEventListener("mouseout",l,!1)}if(!t)throw new Error("canvas not exist");i=i||[0,5,5],u=u||1,d=d||50;var c,E=t.clientWidth,x=t.clientHeight,h={x:E/2,y:x/2},F=h,R=1,S=i,L=i;return A(t,function(t){var e=n(L);e<u+1&&0>t.delta||e>d-1&&0<t.delta||(R+=.05*t.delta,S=r(L,R),clearTimeout(c),c=setTimeout(function(){R=1,L=s(S)},20))}),t.addEventListener("mousedown",function(r){F=T(t,r.clientX,r.clientY),t.addEventListener("mousemove",f,!1),t.addEventListener("mouseup",l,!1),t.addEventListener("mouseout",l,!1)},!1),function(){return S}}(pt,[0,12,18],2,50),Bt=function(e,t,r,i,o){var n=Math.tan;o=o||new Ae(16);const a=n(.5*Te-.5*e),s=1/(r-i);return o[0]=a/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+i)*s,o[11]=-1,o[12]=0,o[13]=0,o[14]=2*(r*i*s),o[15]=0,o}(Te/3.6,pt.width/pt.height,1,100);let Ct,Ot;(function e(){Ot=zt();const t=l(Ot,[0,0,0],[0,1,0]);Ct=f(Bt,d(t)),_e(vt,y),vt.clear(vt.COLOR_BUFFER_BIT|vt.DEPTH_BUFFER_BIT),vt.useProgram(ht.program),vt.drawBuffers([vt.COLOR_ATTACHMENT0,vt.COLOR_ATTACHMENT1]),ve(),vt.useProgram(Tt.program);for(let e=0;6>e;e++)_e(vt,e%2?Et:xt),Z(vt,Tt,Ft),J(Tt,{horizontal:!!(e%2),image:0==e?y.textures[1]:e%2?xt.textures[0]:Et.textures[0]}),ce(vt,Ft);_e(vt,null),vt.clear(vt.COLOR_BUFFER_BIT|vt.DEPTH_BUFFER_BIT),vt.useProgram(gt.program),Z(vt,gt,Rt),J(gt,{image:y.textures[0],imageBlur:xt.textures[0],bloom:!0}),ce(vt,Rt),vt.bindVertexArray(null),requestAnimationFrame(e)})()})();
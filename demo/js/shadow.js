(function(){'use strict';var ce=Math.sin,le=Math.cos,ve=Math.PI,xe=Math.sqrt;function e(e,t,r){const i=new Ee(3);return e&&(i[0]=e),t&&(i[1]=t),r&&(i[2]=r),i}function t(e,t,r){return r=r||new Ee(3),r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}function r(e,t,r){r=r||new Ee(3);const i=e[2]*t[0]-e[0]*t[2],a=e[0]*t[1]-e[1]*t[0];return r[0]=e[1]*t[2]-e[2]*t[1],r[1]=i,r[2]=a,r}function i(e,t){t=t||new Ee(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=xe(r);return 1e-5<i?(t[0]=e[0]/i,t[1]=e[1]/i,t[2]=e[2]/i):(t[0]=0,t[1]=0,t[2]=0),t}function a(e){return e=e||new he(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function o(e,r){if(r=r||new he(16),r===e){let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,r}const i=e[0],a=e[1],o=e[2],n=e[3],s=e[4],u=e[5],f=e[6],d=e[7],_=e[8],m=e[9],p=e[10],c=e[11],l=e[12],v=e[13],x=e[14],E=e[15];return r[0]=i,r[1]=s,r[2]=_,r[3]=l,r[4]=a,r[5]=u,r[6]=m,r[7]=v,r[8]=o,r[9]=f,r[10]=p,r[11]=x,r[12]=n,r[13]=d,r[14]=c,r[15]=E,r}function n(e,t){t=t||new he(16);const r=e[0],i=e[1],a=e[2],o=e[3],n=e[4],s=e[5],u=e[6],f=e[7],_=e[8],m=e[9],p=e[10],c=e[11],l=e[12],v=e[13],x=e[14],E=e[15],h=p*E,T=x*c,b=u*E,g=x*f,y=u*c,A=p*f,F=a*E,R=x*o,M=a*c,S=p*o,z=a*f,L=u*o,B=_*v,w=l*m,C=n*v,N=l*s,I=n*m,O=_*s,P=r*v,D=l*i,U=r*m,V=_*i,G=r*s,X=n*i,k=h*s+g*m+y*v-(T*s+b*m+A*v),W=T*i+F*m+S*v-(h*i+R*m+M*v),H=b*i+R*s+z*v-(g*i+F*s+L*v),Y=A*i+M*s+L*m-(y*i+S*s+z*m),j=1/(r*k+n*W+_*H+l*Y);return t[0]=j*k,t[1]=j*W,t[2]=j*H,t[3]=j*Y,t[4]=j*(T*n+b*_+A*l-(h*n+g*_+y*l)),t[5]=j*(h*r+R*_+M*l-(T*r+F*_+S*l)),t[6]=j*(g*r+F*n+L*l-(b*r+R*n+z*l)),t[7]=j*(y*r+S*n+z*_-(A*r+M*n+L*_)),t[8]=j*(B*f+N*c+I*E-(w*f+C*c+O*E)),t[9]=j*(w*o+P*c+V*E-(B*o+D*c+U*E)),t[10]=j*(C*o+D*f+G*E-(N*o+P*f+X*E)),t[11]=j*(O*o+U*f+X*c-(I*o+V*f+G*c)),t[12]=j*(C*p+O*x+w*u-(I*x+B*u+N*p)),t[13]=j*(U*x+B*a+D*p-(P*p+V*x+w*a)),t[14]=j*(P*u+X*x+N*a-(G*x+C*a+D*u)),t[15]=j*(G*p+I*a+V*u-(U*u+X*p+O*a)),t}function s(e,t,r){r=r||new he(16);const i=e[0],a=e[1],o=e[2],n=e[3],s=e[4],u=e[5],f=e[6],d=e[7],_=e[8],m=e[9],p=e[10],c=e[11],l=e[12],v=e[13],x=e[14],E=e[15],h=t[0],T=t[1],b=t[2],g=t[3],y=t[4],A=t[5],F=t[6],R=t[7],M=t[8],S=t[9],z=t[10],L=t[11],B=t[12],w=t[13],C=t[14],N=t[15];return r[0]=i*h+s*T+_*b+l*g,r[1]=a*h+u*T+m*b+v*g,r[2]=o*h+f*T+p*b+x*g,r[3]=n*h+d*T+c*b+E*g,r[4]=i*y+s*A+_*F+l*R,r[5]=a*y+u*A+m*F+v*R,r[6]=o*y+f*A+p*F+x*R,r[7]=n*y+d*A+c*F+E*R,r[8]=i*M+s*S+_*z+l*L,r[9]=a*M+u*S+m*z+v*L,r[10]=o*M+f*S+p*z+x*L,r[11]=n*M+d*S+c*z+E*L,r[12]=i*B+s*w+_*C+l*N,r[13]=a*B+u*w+m*C+v*N,r[14]=o*B+f*w+p*C+x*N,r[15]=n*B+d*w+c*C+E*N,r}function u(e,t,r,i,a){var o=Math.tan;a=a||new he(16);const n=o(.5*ve-.5*e),s=1/(r-i);return a[0]=n/t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=n,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(r+i)*s,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*(r*i*s),a[15]=0,a}function f(e,a,o,n){n=n||new he(16);const s=Te,u=be,f=ge;return i(t(e,a,f),f),i(r(o,f,s),s),i(r(f,s,u),u),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=0,n[4]=u[0],n[5]=u[1],n[6]=u[2],n[7]=0,n[8]=f[0],n[9]=f[1],n[10]=f[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function d(e,t){return t=t||new he(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function _(e,t,r){r=r||new he(16);const i=t[0],a=t[1],o=t[2],n=e[0],s=e[1],u=e[2],f=e[3],d=e[4],_=e[5],m=e[6],p=e[7],c=e[8],l=e[9],v=e[10],x=e[11],E=e[12],h=e[13],T=e[14],b=e[15];return e!==r&&(r[0]=n,r[1]=s,r[2]=u,r[3]=f,r[4]=d,r[5]=_,r[6]=m,r[7]=p,r[8]=c,r[9]=l,r[10]=v,r[11]=x),r[12]=n*i+d*a+c*o+E,r[13]=s*i+_*a+l*o+h,r[14]=u*i+m*a+v*o+T,r[15]=f*i+p*a+x*o+b,r}function m(e,t,r){r=r||new he(16);const i=e[4],a=e[5],o=e[6],n=e[7],u=e[8],f=e[9],d=e[10],_=e[11],m=le(t),p=ce(t);return r[4]=m*i+p*u,r[5]=m*a+p*f,r[6]=m*o+p*d,r[7]=m*n+p*_,r[8]=m*u-p*i,r[9]=m*f-p*a,r[10]=m*d-p*o,r[11]=m*_-p*n,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function p(e,t){t=t||new he(16);const r=le(e),i=ce(e);return t[0]=r,t[1]=0,t[2]=-i,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=i,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(e,t,r){r=r||new he(16);const i=e[0],a=e[1],o=e[2],n=e[3],u=e[8],f=e[9],d=e[10],_=e[11],m=le(t),p=ce(t);return r[0]=m*i-p*u,r[1]=m*a-p*f,r[2]=m*o-p*d,r[3]=m*n-p*_,r[8]=m*u+p*i,r[9]=m*f+p*a,r[10]=m*d+p*o,r[11]=m*_+p*n,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function l(e,t,r){if(!e)throw new Error("canvas not exist");var i=e.getBoundingClientRect();return{x:(t-i.left)*(e.width/i.width),y:(r-i.top)*(e.height/i.height)}}function v(e,t,a){e=e||1,t=t||1,a=a||3;for(var o=[],n=[],s=[],u=2*ve/a,f=0,d=0,_=6,m=0;m<a;m++)f=e*le(u*m),d=e*ce(u*m),o.push(f,t/2,d),o.push(f,-t/2,d);for(var m=0,p=o.length;m<p;m+=_){var c=(m+6)%p,v=(m+7)%p,T=(m+8)%p,b=(m+9)%p,g=(m+10)%p,y=(m+11)%p;n.push(0,t/2,0),n.push(o[c],o[v],o[T]),n.push(o[m],o[m+1],o[m+2]),s.push(0,1,0,0,1,0,0,1,0),n.push(o[m],o[m+1],o[m+2]),n.push(o[c],o[v],o[T]),n.push(o[m+3],o[m+4],o[m+5]),s=s.concat(E([o[m],t/2,o[m+2]])),s=s.concat(E([o[c],t/2,o[T]])),s=s.concat(E([o[m+3],-t/2,o[m+5]])),n.push(o[m+3],o[m+4],o[m+5]),n.push(o[c],o[v],o[T]),n.push(o[b],o[g],o[y]),s=s.concat(E([o[m+3],-t/2,o[m+5]])),s=s.concat(E([o[c],t/2,o[T]])),s=s.concat(E([o[b],-t/2,o[y]])),n.push(0,-t/2,0),n.push(o[m+3],o[m+4],o[m+5]),n.push(o[b],o[g],o[y]),s.push(0,-1,0,0,-1,0,0,-1,0)}return o=null,{position:n,normal:s}}function x(e,t,a){e=e||1,t=t||1,a=a||3;for(var o=[],n=[],s=[],u=2*ve/a,f=0,d=e*e/t,_=0,m=3,p=0;p<a;p++)f=e*le(u*p),_=e*ce(u*p),o.push(f,-t/2,_);for(var p=0,c=o.length;p<c;p+=m){var v=(p+3)%c,T=(p+4)%c,b=(p+5)%c;n.push(0,t/2,0),n.push(o[v],o[T],o[b]),n.push(o[p],o[p+1],o[p+2]),s.push(0,1,0),s=s.concat(E([o[v],d,o[b]])),s=s.concat(E([o[p],d,o[p+2]])),n.push(0,-t/2,0),n.push(o[p],o[p+1],o[p+2]),n.push(o[v],o[T],o[b]),s.push(0,-1,0,0,-1,0,0,-1,0)}return o=null,{position:n,normal:s}}function E(t){var r=t[0],i=t[1],a=t[2],e=xe(r*r+i*i+a*a);return e?1==e?t:(e=1/e,t[0]=r*e,t[1]=i*e,t[2]=a*e,t):(t[0]=0,t[1]=0,t[2]=0,t)}function h(e){return Je[e].bindPoint}function T(e,t){return function(r){e.uniform1i(t,r)}}function b(e,t){return function(r){e.uniform1iv(t,r)}}function g(e,t){return function(r){e.uniform2iv(t,r)}}function y(e,t){return function(r){e.uniform3iv(t,r)}}function A(e,t){return function(r){e.uniform4iv(t,r)}}function F(e,t,r,i){const a=h(t);return w(e)?function(t){let o,n;B(e,t)?(o=t,n=null):(o=t.texture,n=t.sampler),e.uniform1i(i,r),e.activeTexture(e.TEXTURE0+r),e.bindTexture(a,o),e.bindSampler(r,n)}:function(t){e.uniform1i(i,r),e.activeTexture(e.TEXTURE0+r),e.bindTexture(a,t)}}function R(e,t,r,i,a){const o=h(t),n=new Int32Array(a);for(let o=0;o<a;++o)n[o]=r+o;return w(e)?function(t){e.uniform1iv(i,n),t.forEach(function(t,i){e.activeTexture(e.TEXTURE0+n[i]);let a,s;B(e,t)?(a=t,s=null):(a=t.texture,s=t.sampler),e.bindSampler(r,s),e.bindTexture(o,a)})}:function(t){e.uniform1iv(i,n),t.forEach(function(t,r){e.activeTexture(e.TEXTURE0+n[r]),e.bindTexture(o,t)})}}function M(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4fv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,r.num||r.size,r.type||e.FLOAT,r.normalize||!1,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function S(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4iv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.num||r.size,r.type||e.INT,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function z(e,t){return function(r){r.value?(e.disableVertexAttribArray(t),e.vertexAttrib4uiv(t,r.value)):(e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.num||r.size,r.type||e.UNSIGNED_INT,r.stride||0,r.offset||0),r.divisor!==void 0&&e.vertexAttribDivisor(t,r.divisor))}}function L(e,t,r){const i=r.size,a=r.count;return function(r){e.bindBuffer(e.ARRAY_BUFFER,r.buffer);const o=r.size||r.num||i,n=r.type||e.FLOAT,s=Je[n],u=s.size*o,f=r.normalize||!1,d=r.offset||0;for(let s=0;s<a;++s)e.enableVertexAttribArray(t+s),e.vertexAttribPointer(t+s,o/a,n,f,u,d+u/a*s),void 0!==r.divisor&&e.vertexAttribDivisor(t+s,r.divisor)}}function B(e,r){return $e||($e=e.createTexture()),r instanceof $e.constructor}function w(e){return!!e.texStorage2D}function C(e){const t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}function N(e,t){tt(e,0);const r=e.getExtension(t);if(r){const i={},a=rt.exec(t)[1];for(const t in r){const o=r[t],n="function"==typeof o,s=n?a:"_"+a;let u=t;t.endsWith(s)&&(u=t.substring(0,t.length-s.length)),e[u]===void 0?n?e[u]=function(e){return function(){return e.apply(r,arguments)}}(o):(e[u]=o,i[u]=o):!n&&e[u]!==o&&console.warn(u,e[u],o,t)}i.constructor={name:r.constructor.name},tt(i,0)}return r}function I(e){for(let t=0;t<et.length;++t)N(e,et[t])}function O(e,...t){const r=P(t);return D(e,r)}function P(...e){const t=[];let r,i,a;if((e+"").replace(/[^\,\s]+/g,function(e){e&&t.push(e)}),t.forEach(e=>{if(a=document.getElementById(e),!a)throw"unknown script element "+e;0<=a.type.indexOf("vert")?r=a.text:0<=a.type.indexOf("frag")&&(i=a.text)}),!r)throw"VERTEX_SHADER String not exist";if(!i)throw"FRAGMENT_SHADER String not exist";return[r,i]}function D(e,...t){Array.isArray(t[0])&&(t=t[0]);const r=U(e,e.VERTEX_SHADER,t[0]),i=U(e,e.FRAGMENT_SHADER,t[1]);if(!r)throw"VERTEX_SHADER not exist";if(!i)throw"FRAGMENT_SHADER not exist";const a=e.createProgram();if(!a)throw"program not exist";e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a);const o=e.getProgramParameter(a,e.LINK_STATUS);if(!o){const t=e.getProgramInfoLog(a);throw e.deleteProgram(a),e.deleteShader(i),e.deleteShader(r),"Failed to link program: "+t.toString()}return a}function U(e,t,r){const i=e.createShader(t);if(!i)throw"unable to create shader";e.shaderSource(i,r),e.compileShader(i);const a=e.getShaderParameter(i,e.COMPILE_STATUS);if(!a){const t=e.getShaderInfoLog(i);throw e.deleteShader(i),"Failed to compile shader: "+t.toString()}return i}function V(e,...t){Array.isArray(t[0])&&(t=t[0]);const r=0<t[0].indexOf("{")?D(e,t):O(e,t),i=X(e,r),a=G(e,r);return{program:r,uniformSetters:i,attribSetters:a}}function G(e,t){const r={},a=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let o=0;o<a;++o){const i=e.getActiveAttrib(t,o);if(C(i))continue;const a=e.getAttribLocation(t,i.name),n=Qe[i.type],s=n.setter(e,a,n);s.location=a,r[i.name]=s}return r}function X(e,t){function r(t,r){const a=e.getUniformLocation(t,r.name),o=1<r.size&&"[0]"===r.name.substr(-3),n=r.type,s=Je[n];if(!s)throw"unknown type: 0x"+n.toString(16);let u;if(s.bindPoint){const t=i;i+=r.size,u=o?s.arraySetter(e,n,t,a,r.size):s.setter(e,n,t,a,r.size)}else u=s.arraySetter&&o?s.arraySetter(e,a):s.setter(e,a);return u.location=a,u}let i=0;const a={},o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<o;++n){const i=e.getActiveUniform(t,n);if(C(i))continue;let o=i.name;"[0]"===o.substr(-3)&&(o=o.substr(0,o.length-3));const s=r(t,i);a[o]=s}return a}function k(e,t){e=e.uniformSetters||e,Object.keys(t).forEach(function(r){const i=e[r];i&&i(t[r])})}function W(e,t,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(H(t.attribSetters||t,r.attribs),r.indices&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.indices))}function H(e,t){e=e.attribSetters||e,Object.keys(t).forEach(function(r){const i=e[r];i&&i(t[r])})}function Y(e,t){const r={attribs:j(e,t)};let i=t.indices;return i?(i=K(i,"indices"),r.indices=q(e,i,e.ELEMENT_ARRAY_BUFFER),r.count=i.length,r.indexType=Q(i)):r.count=te(t),r}function j(e,t){const r={};return Object.keys(t).forEach(function(i){if(!Z(i)){const a=t[i],o=a.name||a.attribName||Ze.attribPrefix(i),n=K(a,o);r[o]={buffer:q(e,n,void 0,a.drawType),num:a.num||a.size||J(o),type:Q(n),normalize:ee(n),stride:a.stride||0,offset:a.offset||0,divisor:a.divisor,drawType:a.drawType||e.STATIC_DRAW}}}),e.bindBuffer(e.ARRAY_BUFFER,null),r}function q(e,t,r,i){r=r||e.ARRAY_BUFFER;const a=e.createBuffer();return e.bindBuffer(r,a),e.bufferData(r,t,i||e.STATIC_DRAW),a}function K(e,t){if($(e))return e;if($(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type;return r||(Z(t)?r=Uint16Array:r=Float32Array),new r(e.data)}function J(e,t){let r;if(r=it.test(e)?2:at.test(e)?4:3,0<t%r)throw"Can not guess num for attribute '"+e+"'. Tried "+r+" but "+t+" values is not evenly divisible by "+r+". You should specify it.";return r}function Q(e){if(e instanceof Int8Array)return ye;if(e instanceof Uint8Array)return Ae;if(e instanceof Uint8ClampedArray)return Ae;if(e instanceof Int16Array)return Fe;if(e instanceof Uint16Array)return Re;if(e instanceof Int32Array)return Be;if(e instanceof Uint32Array)return Xe;if(e instanceof Float32Array)return Me;throw"unsupported typed array type"}function Z(e){return"indices"===e}function $(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer}function ee(e){return!!(e instanceof Int8Array)||!!(e instanceof Uint8Array)}function te(e){let t,r;for(r=0;r<ot.length&&(t=ot[r],!(t in e));++r);r===ot.length&&(t=Object.keys(e)[0]);const a=e[t],o=re(a).length,n=ie(a,t);if(0<o%n)throw"numComponents "+n+" not correct for length "+o;return o/n}function re(e){return e.length?e:e.data}function ie(e,t){return e.num||e.size||J(t,re(e).length)}function ae(e,t,r,i,a){r=r||e.TRIANGLES,i=i||t.count,a=a||0;const o=t.indices,n=t.indexType;n||o?e.drawElements(r,i,n||Re,a):e.drawArrays(r,a,i)}function oe(e,t,r){r=r||e.FRAMEBUFFER,t?(e.bindFramebuffer(r,t.framebuffer),e.viewport(0,0,t.width,t.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}function ne(e,t,r,i){const a=e.createTexture();if(!a)throw"Failed to create texture object";const o=t.target||Ye,n=t.format||je,s=t.informat||n,u=t.type||Ae;return e.bindTexture(o,a),r&&i&&e.texImage2D(o,0,s,r,i,0,n,u,null),e.texParameteri(o,e.TEXTURE_MIN_FILTER,t.min||Ke),e.texParameteri(o,e.TEXTURE_MAG_FILTER,t.mag||Ke),e.texParameteri(o,e.TEXTURE_WRAP_T,t.wrapT||qe),e.texParameteri(o,e.TEXTURE_WRAP_S,t.wrapS||qe),a}function se(e){d([-3,2,-3],Mt),m(Mt,zt*ve/180,Mt),o(n(Mt),St),e==Et?k(e,{u_vpMatrix:Ft,u_modelMatrix:Mt}):k(e,{u_color:[.9,.9,.1],u_vpMatrix:Rt,u_vpMatrixFromLight:Ft,u_modelMatrix:Mt,u_normalMatrix:St}),W(vt,e,At),ae(vt,At)}function ue(e){d([0,2,0],Mt),o(n(Mt),St),e==Et?k(e,{u_vpMatrix:Ft,u_modelMatrix:Mt}):k(e,{u_color:[.2,.2,.8],u_vpMatrix:Rt,u_vpMatrixFromLight:Ft,u_modelMatrix:Mt,u_normalMatrix:St}),W(vt,e,yt),ae(vt,yt)}function fe(e){p(zt*ve/180,Mt),_(Mt,[1.5,2,1.5],Mt),o(n(Mt),St),e==Et?k(e,{u_vpMatrix:Ft,u_modelMatrix:Mt}):k(e,{u_color:[.2,.8,.2],u_vpMatrix:Rt,u_vpMatrixFromLight:Ft,u_modelMatrix:Mt,u_normalMatrix:St}),W(vt,e,gt),ae(vt,gt)}function de(e){d([3.5,2,3],Mt),c(Mt,zt*ve/180,Mt),o(n(Mt),St),e==Et?k(e,{u_vpMatrix:Ft,u_modelMatrix:Mt}):k(e,{u_color:[.8,.1,.3],u_vpMatrix:Rt,u_vpMatrixFromLight:Ft,u_modelMatrix:Mt,u_normalMatrix:St}),W(vt,e,bt),ae(vt,bt)}function _e(e){d([0,0,-2],Mt),o(n(Mt),St),e==Et?k(e,{u_vpMatrix:Ft,u_modelMatrix:Mt}):k(e,{u_color:[1,1,1],u_vpMatrix:Rt,u_vpMatrixFromLight:Ft,u_modelMatrix:Mt,u_normalMatrix:St}),W(vt,e,Tt),ae(vt,Tt)}function me(t){var e=Math.pow,r=l(nt,t.clientX,t.clientY),i=xe(e(lt.x-ct.x,2)+e(lt.y-ct.y,2)),a=xe(e(r.x-ct.x,2)+e(r.y-ct.y,2)),o=.01*(lt.x-r.x),n=.01*(r.y-lt.y);ft=180*o/ve,dt=180*n/ve,mt=a/i}function pe(){st+=ft,ft=0,ut+=dt,dt=0,_t*=mt,mt=1,nt.removeEventListener("mouseup",pe,!1),nt.removeEventListener("mousemove",me,!1),nt.removeEventListener("mouseout",pe,!1)}let Ee=Float32Array,he=Float32Array;const Te=e(),be=e(),ge=e(),ye=5120,Ae=5121,Fe=5122,Re=5123,Me=5126,Se=35664,ze=35665,Le=35666,Be=5124,we=35667,Ce=35668,Ne=35669,Ie=35670,Oe=35671,Pe=35672,De=35673,Ue=35674,Ve=35675,Ge=35676,Xe=5125,ke=36294,We=36295,He=36296,Ye=3553,je=6408,qe=10497,Ke=9729,Je={};Je[Me]={Type:Float32Array,size:4,setter:function(e,t){return function(r){e.uniform1f(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1fv(t,r)}}},Je[Se]={Type:Float32Array,size:8,setter:function(e,t){return function(r){e.uniform2fv(t,r)}}},Je[ze]={Type:Float32Array,size:12,setter:function(e,t){return function(r){e.uniform3fv(t,r)}}},Je[Le]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniform4fv(t,r)}}},Je[Be]={Type:Int32Array,size:4,setter:T,arraySetter:b},Je[we]={Type:Int32Array,size:8,setter:g},Je[Ce]={Type:Int32Array,size:12,setter:y},Je[Ne]={Type:Int32Array,size:16,setter:A},Je[Xe]={Type:Uint32Array,size:4,setter:function(e,t){return function(r){e.uniform1ui(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1uiv(t,r)}}},Je[ke]={Type:Uint32Array,size:8,setter:function(e,t){return function(r){e.uniform2uiv(t,r)}}},Je[We]={Type:Uint32Array,size:12,setter:function(e,t){return function(r){e.uniform3uiv(t,r)}}},Je[He]={Type:Uint32Array,size:16,setter:function(e,t){return function(r){e.uniform4uiv(t,r)}}},Je[Ie]={Type:Uint32Array,size:4,setter:T,arraySetter:b},Je[Oe]={Type:Uint32Array,size:8,setter:g},Je[Pe]={Type:Uint32Array,size:12,setter:y},Je[De]={Type:Uint32Array,size:16,setter:A},Je[Ue]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniformMatrix2fv(t,!1,r)}}},Je[Ve]={Type:Float32Array,size:36,setter:function(e,t){return function(r){e.uniformMatrix3fv(t,!1,r)}}},Je[Ge]={Type:Float32Array,size:64,setter:function(e,t){return function(r){e.uniformMatrix4fv(t,!1,r)}}},Je[35685]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix2x3fv(t,!1,r)}}},Je[35686]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix2x4fv(t,!1,r)}}},Je[35687]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix3x2fv(t,!1,r)}}},Je[35688]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix3x4fv(t,!1,r)}}},Je[35689]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix4x2fv(t,!1,r)}}},Je[35690]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix4x3fv(t,!1,r)}}},Je[35678]={Type:null,size:0,setter:F,arraySetter:R,bindPoint:Ye},Je[35680]={Type:null,size:0,setter:F,arraySetter:R,bindPoint:34067},Je[35679]={Type:null,size:0,setter:F,arraySetter:R,bindPoint:32879},Je[36289]={Type:null,size:0,setter:F,arraySetter:R,bindPoint:35866};const Qe={};Qe[Me]={size:4,setter:M},Qe[Se]={size:8,setter:M},Qe[ze]={size:12,setter:M},Qe[Le]={size:16,setter:M},Qe[Be]={size:4,setter:S},Qe[we]={size:8,setter:S},Qe[Ce]={size:12,setter:S},Qe[Ne]={size:16,setter:S},Qe[Xe]={size:4,setter:z},Qe[ke]={size:8,setter:z},Qe[We]={size:12,setter:z},Qe[He]={size:16,setter:z},Qe[Ie]={size:4,setter:S},Qe[Oe]={size:8,setter:S},Qe[Pe]={size:12,setter:S},Qe[De]={size:16,setter:S},Qe[Ue]={size:4,setter:L,count:2},Qe[Ve]={size:9,setter:L,count:3},Qe[Ge]={size:16,setter:L,count:4};const Ze={addExtensionsToContext:!0,attribPrefix:e=>"a"+e[0].toUpperCase()+e.substr(1)};let $e;const et=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_float","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_disjoint_timer_query_webgl2","EXT_frag_depth","EXT_sRGB","EXT_shader_texture_lod","EXT_texture_filter_anisotropic","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_atc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_depth_texture","WEBGL_draw_buffers"],tt=function(){function e(e){const i=e.constructor.name;if(!t[i]){for(const t in e)if("number"==typeof e[t]){const i=r[e[t]];r[e[t]]=i?`${i} | ${t}`:t}t[i]=!0}}const t={},r={};return function(t,i){return e(t),r[i]||"0x"+i.toString(16)}}(),rt=/^(.*?)_/,it=/coord|texture/i,at=/color|colour/i,ot=["position","positions","a_position"];var nt=document.getElementById("canvas"),st=-10,ut=30,ft=0,dt=0,_t=20,mt=1,pt=[2,8,9],ct={x:nt.width/2,y:nt.height/2},lt={},vt=function(e,t){const r=["webgl","experimental-webgl"];let a=null;for(let o=0,i=r.length;o<i;o++)if(a=e.getContext(r[o],t),a){Ze.addExtensionsToContext&&I(a);break}return a}(nt),xt=function(t,r,a,o){a=a||t.drawingBufferWidth,o=o||t.drawingBufferHeight;const n=t.createFramebuffer();if(!n)throw"Failed to create frame buffer object";t.bindFramebuffer(t.FRAMEBUFFER,n);const s={framebuffer:n,textures:[],width:a,height:o},u=r.texs||1,f=!!r.depth;r.wrapT=r.wrapS=33071;for(let e=0;e<u;e++){const i=ne(t,r,a,o);t.generateMipmap(Ye),s.textures.push(i),t.framebufferTexture2D(t.FRAMEBUFFER,36064+e,Ye,i,0)}if(f){const e=t.createRenderbuffer();if(!e)throw"Failed to create renderbuffer object";t.bindRenderbuffer(t.RENDERBUFFER,e),t.renderbufferStorage(t.RENDERBUFFER,33189,a,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,36096,t.RENDERBUFFER,e)}const d=t.checkFramebufferStatus(t.FRAMEBUFFER);if(t.FRAMEBUFFER_COMPLETE!==d)throw"Frame buffer object is incomplete: "+d.toString();return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(Ye,null),f&&t.bindRenderbuffer(t.RENDERBUFFER,null),s}(vt,{depth:!0},2048,2048),Et=V(vt,"attribute vec4 aPosition; uniform mat4 u_vpMatrix; uniform mat4 u_modelMatrix; void main() { gl_Position = u_vpMatrix * u_modelMatrix * aPosition; }","precision highp float; vec4 pack (float depth) { const vec4 bitShift = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0); const vec4 bitMask = vec4(1.0/256.0, 1.0/256.0, 1.0/256.0, 0.0); vec4 rgbaDepth = fract(depth * bitShift); rgbaDepth -= rgbaDepth.gbaa * bitMask; return rgbaDepth; } void main() { gl_FragColor = pack(gl_FragCoord.z); }"),ht=V(vt,"attribute vec4 aPosition; attribute vec4 aNormal; uniform mat4 u_modelMatrix; uniform mat4 u_vpMatrix; uniform mat4 u_vpMatrixFromLight; uniform mat4 u_normalMatrix; varying vec4 v_positionFromLight; varying vec3 v_position; varying vec3 v_normal; void main() { gl_Position = u_vpMatrix * u_modelMatrix * aPosition; v_positionFromLight = u_vpMatrixFromLight * u_modelMatrix * aPosition; v_position = vec3(u_modelMatrix * aPosition); v_normal = vec3(u_normalMatrix * aNormal); }","precision mediump float; uniform vec3 u_lightColor; uniform vec3 u_lightPosition; uniform vec3 u_ambientColor; uniform vec3 u_viewPosition; uniform sampler2D u_shadowMap; uniform vec3 u_color; varying vec4 v_positionFromLight; varying vec3 v_position; varying vec3 v_normal; float unpack(const in vec4 rgbaDepth) { const vec4 bitShift = vec4(1.0, 1.0/256.0, 1.0/(256.0*256.0), 1.0/(256.0*256.0*256.0)); return dot(rgbaDepth, bitShift); } float pcf(float cosTheta,vec4 position) { float shadows = 0.0; float opacity = 0.4; float texelSize = 1.0/2048.0; vec4 rgbaDepth; vec3 shadowCoord = (position.xyz/position.w)/2.0 + 0.5; float bias = 0.005 * tan(acos(cosTheta)); bias = clamp(bias, 0.0015, 0.01); for(float y=-1.5; y <= 1.5; y += 1.0){ for(float x=-1.5; x <=1.5; x += 1.0){ rgbaDepth = texture2D(u_shadowMap, shadowCoord.xy + vec2(x,y) * texelSize); shadows += step(shadowCoord.z - bias, unpack(rgbaDepth)); } } shadows /= 16.0; return min(opacity + shadows, 1.0); } void main() { vec3 normal = normalize(v_normal); vec3 lightDirection = normalize(u_lightPosition - v_position); float cosTheta = max(dot(lightDirection, normal), 0.0); vec3 diffuse = u_lightColor * u_color.rgb * cosTheta; vec3 ambient = u_ambientColor * u_color.rgb; float shininess =50.0; vec3 specularColor = vec3(1.0,1.0,1.0); vec3 viewDirection = normalize(u_viewPosition-v_position); vec3 halfwayDir = normalize(lightDirection + viewDirection); float specularIntensity = pow(max(dot(normal, halfwayDir), 0.0), shininess); vec3 specular = specularColor.rgb * specularIntensity; float shadow = pcf(cosTheta,v_positionFromLight); specular *= step(shadow, 1.0); gl_FragColor = vec4(ambient + (diffuse + specular) * shadow, 1.0); }"),Tt=Y(vt,function(e){return{position:[-e,0,-e,-e,0,e,e,0,-e,e,0,-e,-e,0,e,e,0,e,e,0,-e,-e,0,e,-e,0,-e,e,0,e,-e,0,e,e,0,-e],normal:[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],texcoord:[0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1]}}(8)),bt=Y(vt,function(e){e=e||1;var t=[-e,-e,-e,-e,e,-e,e,-e,-e,-e,e,-e,e,e,-e,e,-e,-e,-e,-e,e,e,-e,e,-e,e,e,-e,e,e,e,-e,e,e,e,e,-e,e,-e,-e,e,e,e,e,-e,-e,e,e,e,e,e,e,e,-e,-e,-e,-e,e,-e,-e,-e,-e,e,-e,-e,e,e,-e,-e,e,-e,e,-e,-e,-e,-e,-e,e,-e,e,-e,-e,-e,e,-e,e,e,-e,e,-e,e,-e,-e,e,e,-e,e,-e,e,e,-e,e,e,e,-e,e,e,e];return{position:t,normal:[0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]}}()),gt=Y(vt,function(e,t){e=e||1,t=t||15;for(var a,o,n,s,u,f,d=[],_=[],m=[],p=0;p<=t;p++){s=p*ve/t,f=e*ce(s),o=e*le(s);for(var c=0;c<=t;c++)u=2*c*ve/t,a=ce(u)*f,n=le(u)*f,d.push(a,o,n)}for(p=0;p<t;p++)for(c=0;c<t;c++){var v=p*(t+1)+c,h=v+t+1;_.push(d[3*v],d[3*v+1],d[3*v+2]),_.push(d[3*h],d[3*h+1],d[3*h+2]),_.push(d[3*(v+1)],d[3*(v+1)+1],d[3*(v+1)+2]),_.push(d[3*(v+1)],d[3*(v+1)+1],d[3*(v+1)+2]),_.push(d[3*h],d[3*h+1],d[3*h+2]),_.push(d[3*(h+1)],d[3*(h+1)+1],d[3*(h+1)+2]),m=m.concat(E([d[3*v],d[3*v+1],d[3*v+2]])),m=m.concat(E([d[3*h],d[3*h+1],d[3*h+2]])),m=m.concat(E([d[3*(v+1)],d[3*(v+1)+1],d[3*(v+1)+2]])),m=m.concat(E([d[3*(v+1)],d[3*(v+1)+1],d[3*(v+1)+2]])),m=m.concat(E([d[3*h],d[3*h+1],d[3*h+2]])),m=m.concat(E([d[3*(h+1)],d[3*(h+1)+1],d[3*(h+1)+2]]))}return d=null,{position:_,normal:m}}(1,50)),yt=Y(vt,v(.8,4,40)),At=Y(vt,x(1,4,40));vt.clearColor(0,0,0,1),vt.enable(vt.DEPTH_TEST),vt.enable(vt.CULL_FACE);const Ft=s(u(ve/2,1,1,100),n(f(pt,[0,0,0],[0,1,0]))),Rt=a(),Mt=a(),St=a();var zt=29,Lt=Date.now();(function e(){var t=new Date,r=t-Lt;Lt=t,zt+=40*r/1e3,zt%=360;var i=(st+ft)%360,a=ut+dt,o=_t*mt;a=90<a?90:10>a?10:a,o=30<o?30:4>o?4:o;var d=o*ce(a*ve/180),_=o*le(a*ve/180),m=_*ce(i*ve/180),p=_*le(i*ve/180);s(u(ve/6,nt.width/nt.height,1,100),n(f([m,d,p],[0,0,0],[0,1,0])),Rt),oe(vt,xt),vt.viewport(0,0,2048,2048),vt.clear(vt.COLOR_BUFFER_BIT|vt.DEPTH_BUFFER_BIT),vt.useProgram(Et.program),se(Et),ue(Et),fe(Et),de(Et),_e(Et),oe(vt),vt.viewport(0,0,nt.width,nt.height),vt.clear(vt.COLOR_BUFFER_BIT|vt.DEPTH_BUFFER_BIT),vt.useProgram(ht.program),k(ht,{u_shadowMap:xt.textures[0],u_lightColor:[1,1,1],u_lightPosition:pt,u_ambientColor:[.2,.2,.2],u_viewPosition:[m,d,p]}),se(ht),ue(ht),fe(ht),de(ht),_e(ht,Rt),requestAnimationFrame(e)})(),nt.addEventListener("mousedown",function(t){lt=l(nt,t.clientX,t.clientY),nt.addEventListener("mousemove",me,!1),nt.addEventListener("mouseup",pe,!1),nt.addEventListener("mouseout",pe,!1)},!1)})();

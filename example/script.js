!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s=2)}([function(t){t.exports=["0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520","0x000528583ba0c881f4d26a1ff50886fc89efc03f","0x01122df2b7d1c0a6ad94589da045af3885bedbbc","0x000ba5e704c33c58b5e7949f67344821fa54bd29","0x000587ac53175fc48d7b3e36d9c62f87275e1f2f ","0x000a9a0c2fb94536452aba2d199f11c404d508d3","0x12333e7c757cf270bd55bf988ca267014aaa463c ","0x068899cceb463ed483b79b565dde3bdbc90f598a","0x000eace0089e5d3c984bbd84bd4290426b0d71d1","0x0009a464895f4ddd47595da98d38e9e9ec110fff ","0x01235557747af9cd120aca462dac992c329304bd","0x000b82bb1f7db0eed2a69b78ba4dc655ca8086d6 ","0x00112ba39c66a00926aa1852e6f721f4f6505e72","0x000f7474c7236159bf7d51e8d260c388f7567ea9","0x000217dd5ce5985880567e8832ecba9a4cec7bb6","0x00098e3e0fdb9ca774645eba75331af5c072f848 ","0x000738aa02f0a97baddb03aafba537ca1244ca7c","0x000bda3063fce7699bf70ce31ff7f8ff69d9ccb7","0x0002bad45b918ab01e931ab049806530180aed8a","0x0008a0d473810aa819b471eef3d95743eb32ea89","0x0008e430ca209924db554c8efe125479272538ea ","0x07999deff8024f153d1a34bcd1372c7162f76d07","0x0009e6974cab530b6545da1e3d8354ff5f059a9f ","0x0001c190d5f71d37113c043498f8d69cd59bb7ba"]},function(t,e,i){window,t.exports=function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){function i(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}t.exports=function(t,e,r){let n,o,s;if(0==e)n=o=s=r;else{const f=r<.5?r*(1+e):r+e-r*e,a=2*r-f;n=i(a,f,t+1/3),o=i(a,f,t),s=i(a,f,t-1/3)}return[Math.round(255*n),Math.round(255*o),Math.round(255*s),255]}},function(t,e){
/**
 * A handy class to calculate color values.
 *
 * @version 1.0
 * @author Robert Eisele <robert@xarg.org>
 * @copyright Copyright (c) 2010, Robert Eisele
 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 *
 */
t.exports=function(t,e,i){function r(t,e){for(var i=2;i<arguments.length;i++)for(var r=0;r<arguments[i].length;r++)t[e++]=arguments[i].charAt(r)}function n(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function o(t){return String.fromCharCode(255&t,t>>8&255)}this.width=t,this.height=e,this.depth=i,this.pix_size=e*(t+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*i+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+i+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var s=new Array,f=0;f<this.buffer_size;f++)this.buffer[f]="\0";r(this.buffer,this.ihdr_offs,n(this.ihdr_size-12),"IHDR",n(t),n(e),"\b"),r(this.buffer,this.plte_offs,n(this.plte_size-12),"PLTE"),r(this.buffer,this.trns_offs,n(this.trns_size-12),"tRNS"),r(this.buffer,this.idat_offs,n(this.idat_size-12),"IDAT"),r(this.buffer,this.iend_offs,n(this.iend_size-12),"IEND");var a=30912;for(a+=31-a%31,r(this.buffer,this.idat_offs+8,function(t){return String.fromCharCode(t>>8&255,255&t)}(a)),f=0;(f<<16)-1<this.pix_size;f++){var d,c;f+65535<this.pix_size?(d=65535,c="\0"):(d=this.pix_size-(f<<16)-f,c=""),r(this.buffer,this.idat_offs+8+2+(f<<16)+(f<<2),c,o(d),o(~d))}for(f=0;f<256;f++){for(var h=f,u=0;u<8;u++)h=1&h?-306674912^h>>1&2147483647:h>>1&2147483647;s[f]=h}this.index=function(t,e){var i=e*(this.width+1)+t+1;return this.idat_offs+8+2+5*Math.floor(i/65535+1)+i},this.color=function(t,e,i,r){var n=(((r=r>=0?r:255)<<8|t)<<8|e)<<8|i;if(console.log("color",n),void 0===this.palette[n]){if(this.pindex==this.depth)return"\0";var o=this.plte_offs+8+3*this.pindex;this.buffer[o+0]=String.fromCharCode(t),this.buffer[o+1]=String.fromCharCode(e),this.buffer[o+2]=String.fromCharCode(i),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(r),this.palette[n]=String.fromCharCode(this.pindex++)}return this.palette[n]},this.getBase64=function(){var t,e,i,r,n,o,s,f=this.getDump(),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=f.length,c=0,h="";do{r=(t=f.charCodeAt(c))>>2,n=(3&t)<<4|(e=f.charCodeAt(c+1))>>4,i=f.charCodeAt(c+2),o=d<c+2?64:(15&e)<<2|i>>6,s=d<c+3?64:63&i,h+=a.charAt(r)+a.charAt(n)+a.charAt(o)+a.charAt(s)}while((c+=3)<d);return h},this.getDump=function(){for(var t=1,e=0,i=5552,o=0;o<this.height;o++)for(var f=-1;f<this.width;f++)e+=t+=this.buffer[this.index(f,o)].charCodeAt(0),0==(i-=1)&&(t%=65521,e%=65521,i=5552);function a(t,e,i){for(var o=-1,f=4;f<i-4;f+=1)o=s[255&(o^t[e+f].charCodeAt(0))]^o>>8&16777215;r(t,e+i-4,n(-1^o))}return t%=65521,e%=65521,r(this.buffer,this.idat_offs+this.idat_size-8,n(e<<16|t)),a(this.buffer,this.ihdr_offs,this.ihdr_size),a(this.buffer,this.plte_offs,this.plte_size),a(this.buffer,this.trns_offs,this.trns_size),a(this.buffer,this.idat_offs,this.idat_size),a(this.buffer,this.iend_offs,this.iend_size),"PNG\r\n\n"+this.buffer.join("")}}},function(t,e,i){i(1);const r=i(0),n=new Array(4);function o(){const t=n[0]^n[0]<<11;return n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=n[3]^n[3]>>19^t^t>>8,(n[3]>>>0)/(1<<31>>>0)}function s(){return[Math.floor(360*o())/360,(60*o()+40)/100,25*(o()+o()+o()+o())/100]}function f(t){if(!t.seed)throw new Error("No seed provided");return function(t){for(let t=0;t<n.length;t++)n[t]=0;for(let e=0;e<t.length;e++)n[e%4]=(n[e%4]<<5)-n[e%4]+t.charCodeAt(e)}(t.seed),Object.assign({size:8,scale:16,color:s(),bgcolor:s(),spotcolor:s(),extracolor:s()},t)}t.exports=function(t){const e=f({seed:t.toLowerCase()});let i=e.size*e.scale;const n=r(...e.color),o=r(...e.spotcolor),s=r(...e.extracolor),a=`rgb(${n[0]},${n[1]},${n[2]})`,d=`rgb(${o[0]},${o[1]},${o[2]})`,c=`rgb(${s[0]},${s[1]},${s[2]})`;console.log("color",n),console.log("spotcolor",o),console.log("extracolor",s);let h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${i} ${i}">\n  <defs>\n     <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>\n        <stop offset='0' stop-color='${a}'>\n           <animate attributeName="stop-color"\n              values="${a};${d};${c};${a};${d};${c};${a};" dur="20s" repeatCount="indefinite">\n           </animate>\n        </stop>\n        <stop offset='.5' stop-color='${d}'>\n           <animate attributeName="stop-color"\n              values="${d};${c};${a};${d};${c};${a};${d};" dur="20s" repeatCount="indefinite">\n           </animate>\n        </stop>\n        <stop offset='1' stop-color='  ${c}'>\n           <animate attributeName="stop-color"\n              values="${c};${a};${d};${c};${a};${d};${c};" dur="20s" repeatCount="indefinite">\n           </animate>\n        </stop>\n        <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5"\n           dur="20s" repeatCount="indefinite" />\n     </linearGradient>\n     <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>\n        <stop offset='0' stop-color='${a}'>\n           <animate attributeName="stop-color"\n              values="${a};${d};${c};${a};${d};${c};${a};" dur="20s" repeatCount="indefinite">\n           </animate>\n        </stop>\n        <stop offset='1' stop-color='${d}' stop-opacity="0">\n           <animate attributeName="stop-color"\n              values="${d};${c};${a};${d};${c};${a};${d};" dur="20s" repeatCount="indefinite">\n           </animate>\n        </stop>\n        <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5" class="ignore"\n           dur="10s" repeatCount="indefinite" />\n     </linearGradient>\n  </defs>\n  <rect fill='url(#a)' width='100%' height='100%' />\n  <rect fill='url(#b)' width='100%' height='100%' />\n</svg>`;return`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(h)))}`}}])},function(t,e,i){const r=i(1),n=i(0),o=document.getElementById("icons");for(let t=0;t<n.length;t++){var s=n[t],f=document.createElement("div");f.title=s,f.style.backgroundImage=`url(${r(s)})`;var a=document.createElement("h5");a.innerHTML=s;var d=document.createElement("div");f.classList.add("icon"),d.appendChild(f),d.appendChild(a),d.classList.add("icon-wrapper"),o.appendChild(d)}}]);
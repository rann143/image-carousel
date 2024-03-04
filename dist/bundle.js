(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),c=n(314),a=n.n(c)()(o());a.push([e.id,"h1 {\n  color: rgb(40, 121, 76);\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: solid 5px black;\n}\n\n.carousel {\n  width: 100%;\n  height: 500px;\n  background-color: rgba(164, 219, 214, 0.471);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],u=c[l]||0,p="".concat(l," ").concat(u);c[l]=u+1;var d=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=r(e,o),l=0;l<c.length;l++){var u=n(c[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),c=n(659),a=n.n(c),i=n(56),s=n.n(i),l=n(540),u=n.n(l),p=n(113),d=n.n(p),f=n(208),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const v=n.p+"7473419dd882a4168212.png",g=n.p+"4b92277225d3905e05e9.png",m=n.p+"dd41bc2e9c1f3f0549cb.png",y=document.querySelector(".carousel"),b=new Image;b.src=v,b.style.width="50%",b.style.height="90%";const w=new Image;w.src=g,w.style.width="50%",w.style.height="90%";const x=new Image;x.src=m,x.style.width="50%",x.style.height="90%";const C=[b,w,x];let S=0;y.appendChild(C[S]);let T=C[S];document.querySelector("#next-btn").addEventListener("click",(e=>{console.log("next image"),function(){let e=C[S+1],t=C[C.length-1];S<C.length-1?(y.replaceChild(e,T),S+=1,T=C[S],e=C[S+1]):S>=C.length-1&&(S=0,T=C[S],y.replaceChild(T,t)),console.log(S)}()})),document.querySelector("#previous-btn").addEventListener("click",(e=>{console.log("previous image"),function(){let e=C[S-1],t=C[0];S<=C.length-1&&S>0?(y.replaceChild(e,T),S-=1,T=C[S],e=C[S-1]):S<=0&&(S=2,T=C[S],y.replaceChild(T,t)),console.log(S)}()}))})()})();
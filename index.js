// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writablePropertiesIn=e()}(this,(function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys;var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return l&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var b="function"==typeof Symbol?Symbol:void 0,y="function"==typeof b?b.toStringTag:"";var d,h=f()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[y],e=g(r,y);try{r[y]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[y]=t:delete r[y],n}:function(r){return s.call(r)};function v(r){return"[object Arguments]"===h(r)}d=function(){return v(arguments)}();var w=d,m="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=Object.defineProperty;function O(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(o):S(o)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function P(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var T=Math.abs,x=String.prototype.toLowerCase,I=String.prototype.toUpperCase,A=String.prototype.replace,V=/e\+(\d)$/,F=/e-(\d)$/,N=/^(\d+)$/,$=/^(\d+)e/,C=/\.0$/,B=/\.0*e/,L=/(\..*[^0])0*e/;function R(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!O(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":T(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,L,"$1e"),t=A.call(t,B,"e"),t=A.call(t,C,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,V,"e+0$1"),t=A.call(t,F,"e-0$1"),r.alternate&&(t=A.call(t,N,"$1."),t=A.call(t,$,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===I.call(r.specifier)?I.call(t):x.call(t)}function G(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var W=String.fromCharCode,X=Array.isArray;function Z(r){return r!=r}function M(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Y(r){var e,t,n,o,i,a,u,c,l,f,s,p,g;if(!X(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Z(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Z(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=P(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Z(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Z(i)?String(n.arg):W(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=R(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+G(g):G(g)+f)),a+=n.arg||"",u+=1}return a}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,t,n,o;for(t=[],o=0,n=D.exec(r);n;)(e=r.slice(o,D.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),o=D.lastIndex,n=D.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function z(r){var e,t;if("string"!=typeof r)throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[H(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Y.apply(null,e)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function or(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var ar=String.prototype.valueOf;var ur=f();function cr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function lr(r){return ir(r)||cr(r)}function fr(r){return"number"==typeof r}or(lr,"isPrimitive",ir),or(lr,"isObject",cr);var sr=Number,pr=sr.prototype.toString;var gr=f();function br(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function yr(r){return fr(r)||br(r)}function dr(r){return r!=r}function hr(r){return fr(r)&&dr(r)}function vr(r){return br(r)&&dr(r.valueOf())}function wr(r){return hr(r)||vr(r)}or(yr,"isPrimitive",fr),or(yr,"isObject",br),or(wr,"isPrimitive",hr),or(wr,"isObject",vr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,Or=Math.floor;function Sr(r){return Or(r)===r}function _r(r){return r<mr&&r>jr&&Sr(r)}function Er(r){return fr(r)&&_r(r)}function kr(r){return br(r)&&_r(r.valueOf())}function Pr(r){return Er(r)||kr(r)}or(Pr,"isPrimitive",Er),or(Pr,"isObject",kr);var Tr=Object.prototype.propertyIsEnumerable;var xr,Ir=!Tr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=Tr.call(r,e))&&Ir&&lr(r)?!hr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var Vr,Fr=xr;Vr=w?v:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Ar(r,"callee")};var Nr=Vr,$r=Array.prototype.slice;function Cr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);or(Cr,"isObjectLikeArray",Br);var Lr=Ar((function(){}),"prototype"),Rr=!Ar({toString:null},"toString"),Gr=9007199254740991;function Wr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Sr(i.length)&&i.length>=0&&i.length<=Gr||ir(r)))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(wr(e)){for(;o<n;o++)if(wr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Xr=/./;function Zr(r){return"boolean"==typeof r}var Mr=Boolean,Yr=Boolean.prototype.toString;var Dr=f();function Ur(r){return"object"==typeof r&&(r instanceof Mr||(Dr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function Hr(r){return Zr(r)||Ur(r)}or(Hr,"isPrimitive",Zr),or(Hr,"isObject",Ur);var zr="object"==typeof self?self:null,qr="object"==typeof window?window:null,Jr="object"==typeof global?global:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Zr(r))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Kr)return Kr;if(zr)return zr;if(qr)return qr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),re=Qr.document&&Qr.document.childNodes,ee=Int8Array;function te(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function oe(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ne.exec(n.toString()))return e[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}or(te,"REGEXP",ne);var ie="function"==typeof Xr||"object"==typeof ee||"function"==typeof re?function(r){return oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?oe(r).toLowerCase():e};function ae(r){return r.constructor&&r.constructor.prototype===r}var ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window;var le=function(){var r;if("undefined"===ie(ce))return!1;for(r in ce)try{-1===Wr(ue,r)&&g(ce,r)&&null!==ce[r]&&"object"===ie(ce[r])&&ae(ce[r])}catch(r){return!0}return!1}(),fe="undefined"!=typeof window;var se,pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];se=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Nr(r)?u($r.call(r)):u(r)}:u:function(r){var e,t,n,o,i,a,u;if(o=[],Nr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return o;t=Lr&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Rr)for(e=function(r){if(!1===fe&&!le)return ae(r);try{return ae(r)}catch(r){return!1}}(r),u=0;u<pe.length;u++)a=pe[u],e&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var ge,be=se;ge=i?function(r){return a(t(r))}:function(r){return be(t(r))};var ye=ge;var de,he,ve=Object.getPrototypeOf;he=Object.getPrototypeOf,de="function"===ie(he)?ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var we=de;function me(r){return null==r?null:(r=t(r),we(r))}var je,Oe=void 0!==Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyDescriptor;je=Oe?function(r,e){var t;return null==r||void 0===(t=Se(r,e))?null:t}:function(r,e){return g(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var _e=je;function Ee(r,e){var t=_e(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,n,i,a,u,c;if(null==r)return[];i=t(r),e={},n=[];do{for(a=ye(i),c=0;c<a.length;c++)!1===g(e,u=a[c])&&Ee(i,u)&&n.push(u),e[u]=!0;for(a=o(i),c=0;c<a.length;c++)!1===g(e,u=a[c])&&Ee(i,u)&&n.push(u),e[u]=!0;i=me(i)}while(i);return n}}));
//# sourceMappingURL=index.js.map

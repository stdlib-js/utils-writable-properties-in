// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writablePropertiesIn=e()}(this,(function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function c(r){return Object.keys(Object(r))}var u=void 0!==Object.keys;function l(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var f=l();function s(){return f&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(r,e){return null!=r&&g.call(r,e)}var b="function"==typeof Symbol?Symbol:void 0,h="function"==typeof b?b.toStringTag:"";var y,v=s()?function(r){var e,t,n;if(null==r)return p.call(r);t=r[h],e=d(r,h);try{r[h]=void 0}catch(e){return p.call(r)}return n=p.call(r),e?r[h]=t:delete r[h],n}:function(r){return p.call(r)};function w(r){return"[object Arguments]"===v(r)}y=function(){return w(arguments)}();var m=y,j="function"==typeof Object.defineProperty?Object.defineProperty:null;var _=Object.defineProperty;function E(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function O(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(i):S(i)+r,n&&(r="-"+r)),r}var k=String.prototype.toLowerCase,x=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!E(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=O(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=O(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===x.call(r.specifier)?x.call(t):k.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function I(r){return"string"==typeof r}var A=Math.abs,P=String.prototype.toLowerCase,V=String.prototype.toUpperCase,F=String.prototype.replace,$=/e\+(\d)$/,C=/e-(\d)$/,N=/^(\d+)$/,B=/^(\d+)e/,L=/\.0$/,R=/\.0*e/,G=/(\..*[^0])0*e/;function W(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!E(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=F.call(t,G,"$1e"),t=F.call(t,R,"e"),t=F.call(t,L,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=F.call(t,$,"e+0$1"),t=F.call(t,C,"e-0$1"),r.alternate&&(t=F.call(t,N,"$1."),t=F.call(t,B,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===V.call(r.specifier)?V.call(t):P.call(t)}function Z(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function X(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Z(n):Z(n)+r}var M=String.fromCharCode,U=isNaN,Y=Array.isArray;function D(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function z(r){var e,t,n,i,o,a,c,u,l;if(!Y(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(I(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=D(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,U(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):M(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=W(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=O(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=X(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function q(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function J(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(q(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function K(r){return"string"==typeof r}function Q(r){var e,t;if(!K(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[J(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return z.apply(null,e)}var rr,er=Object.prototype,tr=er.toString,nr=er.__defineGetter__,ir=er.__defineSetter__,or=er.__lookupGetter__,ar=er.__lookupSetter__;rr=function(){try{return j({},"x",{}),!0}catch(r){return!1}}()?_:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===tr.call(r))throw new TypeError(Q("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===tr.call(t))throw new TypeError(Q("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(or.call(r,e)||ar.call(r,e)?(n=r.__proto__,r.__proto__=er,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&nr&&nr.call(r,e,t.get),a&&ir&&ir.call(r,e,t.set),r};var cr=rr;function ur(r,e,t){cr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function lr(r){return"string"==typeof r}var fr=String.prototype.valueOf;var sr=s();function pr(r){return"object"==typeof r&&(r instanceof String||(sr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===v(r)))}function gr(r){return lr(r)||pr(r)}function dr(r){return"number"==typeof r}ur(gr,"isPrimitive",lr),ur(gr,"isObject",pr);var br=Number,hr=br.prototype.toString;var yr=s();function vr(r){return"object"==typeof r&&(r instanceof br||(yr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===v(r)))}function wr(r){return dr(r)||vr(r)}function mr(r){return r!=r}function jr(r){return dr(r)&&mr(r)}function _r(r){return vr(r)&&mr(r.valueOf())}function Er(r){return jr(r)||_r(r)}ur(wr,"isPrimitive",dr),ur(wr,"isObject",vr),ur(Er,"isPrimitive",jr),ur(Er,"isObject",_r);var Sr=Number.POSITIVE_INFINITY,Or=br.NEGATIVE_INFINITY,kr=Math.floor;function xr(r){return kr(r)===r}function Tr(r){return r<Sr&&r>Or&&xr(r)}function Ir(r){return dr(r)&&Tr(r)}function Ar(r){return vr(r)&&Tr(r.valueOf())}function Pr(r){return Ir(r)||Ar(r)}ur(Pr,"isPrimitive",Ir),ur(Pr,"isObject",Ar);var Vr=Object.prototype.propertyIsEnumerable;var Fr,$r=!Vr.call("beep","0");function Cr(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&$r&&gr(r)?!jr(e=+e)&&Ir(e)&&e>=0&&e<r.length:t)}Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===v(r)};var Nr,Br=Fr;Nr=m?w:function(r){return null!==r&&"object"==typeof r&&!Br(r)&&"number"==typeof r.length&&xr(r.length)&&r.length>=0&&r.length<=4294967295&&d(r,"callee")&&!Cr(r,"callee")};var Lr=Nr,Rr=Array.prototype.slice;function Gr(r){return null!==r&&"object"==typeof r}var Wr=function(r){if("function"!=typeof r)throw new TypeError(Q("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Gr);ur(Gr,"isObjectLikeArray",Wr);var Zr=Cr((function(){}),"prototype"),Xr=!Cr({toString:null},"toString");function Mr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&xr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Ur(r,e,t){var n,i;if(!Mr(r)&&!lr(r))throw new TypeError(Q("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ir(t))throw new TypeError(Q("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Er(e)){for(;i<n;i++)if(Er(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Yr=/./;function Dr(r){return"boolean"==typeof r}var zr=Boolean,Hr=Boolean.prototype.toString;var qr=s();function Jr(r){return"object"==typeof r&&(r instanceof zr||(qr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===v(r)))}function Kr(r){return Dr(r)||Jr(r)}function Qr(){return new Function("return this;")()}ur(Kr,"isPrimitive",Dr),ur(Kr,"isObject",Jr);var re="object"==typeof self?self:null,ee="object"==typeof window?window:null,te="object"==typeof global?global:null,ne="object"==typeof globalThis?globalThis:null;var ie=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(Q("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Qr()}if(ne)return ne;if(re)return re;if(ee)return ee;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function le(r){var e,t,n,i;if(("Object"===(t=v(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ur(ce,"REGEXP",ue);var fe="function"==typeof Yr||"object"==typeof ae||"function"==typeof oe?function(r){return le(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?le(r).toLowerCase():e};function se(r){return r.constructor&&r.constructor.prototype===r}var pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ge="undefined"==typeof window?void 0:window;var de=function(){var r;if("undefined"===fe(ge))return!1;for(r in ge)try{-1===Ur(pe,r)&&d(ge,r)&&null!==ge[r]&&"object"===fe(ge[r])&&se(ge[r])}catch(r){return!0}return!1}(),be="undefined"!=typeof window;var he,ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];he=u?function(){return 2!==(c(arguments)||"").length}(1,2)?function(r){return Lr(r)?c(Rr.call(r)):c(r)}:c:function(r){var e,t,n,i,o,a,c;if(i=[],Lr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!d(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Gr(r))return i;t=Zr&&n}for(o in r)t&&"prototype"===o||!d(r,o)||i.push(String(o));if(Xr)for(e=function(r){if(!1===be&&!de)return se(r);try{return se(r)}catch(r){return!1}}(r),c=0;c<ye.length;c++)a=ye[c],e&&"constructor"===a||!d(r,a)||i.push(String(a));return i};var ve,we=he;ve=o?function(r){return a(t(r))}:function(r){return we(t(r))};var me=ve,je=/./,_e="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ee=Object.defineProperty;function Se(r){return"number"==typeof r}function Oe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ke(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Oe(i):Oe(i)+r,n&&(r="-"+r)),r}var xe=String.prototype.toLowerCase,Te=String.prototype.toUpperCase;function Ie(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Se(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ke(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ke(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Te.call(r.specifier)?Te.call(t):xe.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ae(r){return"string"==typeof r}var Pe=Math.abs,Ve=String.prototype.toLowerCase,Fe=String.prototype.toUpperCase,$e=String.prototype.replace,Ce=/e\+(\d)$/,Ne=/e-(\d)$/,Be=/^(\d+)$/,Le=/^(\d+)e/,Re=/\.0$/,Ge=/\.0*e/,We=/(\..*[^0])0*e/;function Ze(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Se(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Pe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$e.call(t,We,"$1e"),t=$e.call(t,Ge,"e"),t=$e.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$e.call(t,Ce,"e+0$1"),t=$e.call(t,Ne,"e-0$1"),r.alternate&&(t=$e.call(t,Be,"$1."),t=$e.call(t,Le,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Fe.call(r.specifier)?Fe.call(t):Ve.call(t)}function Xe(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Me(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Xe(n):Xe(n)+r}var Ue=String.fromCharCode,Ye=isNaN,De=Array.isArray;function ze(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function He(r){var e,t,n,i,o,a,c,u,l;if(!De(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Ae(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=ze(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ye(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ye(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Ie(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ye(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ye(o)?String(n.arg):Ue(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ze(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ke(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Me(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var qe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Je(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ke(r){var e,t,n,i;for(t=[],i=0,n=qe.exec(r);n;)(e=r.slice(i,qe.lastIndex-n[0].length)).length&&t.push(e),t.push(Je(n)),i=qe.lastIndex,n=qe.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Qe(r){return"string"==typeof r}function rt(r){var e,t;if(!Qe(r))throw new TypeError(rt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ke(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return He.apply(null,e)}var et,tt=Object.prototype,nt=tt.toString,it=tt.__defineGetter__,ot=tt.__defineSetter__,at=tt.__lookupGetter__,ct=tt.__lookupSetter__;et=function(){try{return _e({},"x",{}),!0}catch(r){return!1}}()?Ee:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===nt.call(r))throw new TypeError(rt("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===nt.call(t))throw new TypeError(rt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(at.call(r,e)||ct.call(r,e)?(n=r.__proto__,r.__proto__=tt,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&it&&it.call(r,e,t.get),a&&ot&&ot.call(r,e,t.set),r};var ut=et;function lt(r,e,t){ut(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ft(r){return"boolean"==typeof r}var st=l();function pt(){return st&&"symbol"==typeof Symbol.toStringTag}var gt=Object.prototype.toString;var dt="function"==typeof b?b.toStringTag:"";var bt=pt()?function(r){var e,t,n;if(null==r)return gt.call(r);t=r[dt],e=d(r,dt);try{r[dt]=void 0}catch(e){return gt.call(r)}return n=gt.call(r),e?r[dt]=t:delete r[dt],n}:function(r){return gt.call(r)},ht=Boolean,yt=Boolean.prototype.toString;var vt=pt();function wt(r){return"object"==typeof r&&(r instanceof ht||(vt?function(r){try{return yt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===bt(r)))}function mt(r){return ft(r)||wt(r)}function jt(){return new Function("return this;")()}lt(mt,"isPrimitive",ft),lt(mt,"isObject",wt);var _t="object"==typeof self?self:null,Et="object"==typeof window?window:null,St="object"==typeof global?global:null,Ot="object"==typeof globalThis?globalThis:null;var kt=function(r){if(arguments.length){if(!ft(r))throw new TypeError(rt("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jt()}if(Ot)return Ot;if(_t)return _t;if(Et)return Et;if(St)return St;throw new Error("unexpected error. Unable to resolve global object.")}(),xt=kt.document&&kt.document.childNodes,Tt=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var At,Pt=/^\s*function\s*([^(]*)/i;lt(It,"REGEXP",Pt),At=Array.isArray?Array.isArray:function(r){return"[object Array]"===bt(r)};var Vt=At;function Ft(r){return null!==r&&"object"==typeof r}var $t=function(r){if("function"!=typeof r)throw new TypeError(rt("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ft);function Ct(r){var e,t,n,i;if(("Object"===(t=bt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pt.exec(n.toString()))return e[1]}return Ft(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}lt(Ft,"isObjectLikeArray",$t);var Nt="function"==typeof je||"object"==typeof Tt||"function"==typeof xt?function(r){return Ct(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ct(r).toLowerCase():e};var Bt,Lt,Rt=Object.getPrototypeOf;Lt=Object.getPrototypeOf,Bt="function"===Nt(Lt)?Rt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===bt(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gt=Bt;function Wt(r){return null==r?null:(r=t(r),Gt(r))}var Zt,Xt=void 0!==Object.getOwnPropertyDescriptor,Mt=Object.getOwnPropertyDescriptor;Zt=Xt?function(r,e){var t;return null==r||void 0===(t=Mt(r,e))?null:t}:function(r,e){return d(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Ut=Zt;function Yt(r,e){var t=Ut(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,n,o,a,c,u;if(null==r)return[];o=t(r),e={},n=[];do{for(a=me(o),u=0;u<a.length;u++)!1===d(e,c=a[u])&&Yt(o,c)&&n.push(c),e[c]=!0;for(a=i(o),u=0;u<a.length;u++)!1===d(e,c=a[u])&&Yt(o,c)&&n.push(c),e[c]=!0;o=Wt(o)}while(o);return n}}));
//# sourceMappingURL=index.js.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=t?function(r){return e(Object(r))}:function(){return[]},o=void 0!==Object.getOwnPropertyNames,i=Object.getOwnPropertyNames;var u=function(r){return i(Object(r))};var c=function(r){return Object.keys(Object(r))},f=c;var a=function(){return function(){return 2!==(f(arguments)||"").length}(1,2)},l=void 0!==Object.keys;var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,y=s;var b=function(r){return y.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},d="function"==typeof Symbol?Symbol.toStringTag:"",m=j,O=d,h=s;var w=b,_=function(r){var t,e,n;if(null==r)return h.call(r);e=r[O],t=m(r,O);try{r[O]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[O]=e:delete r[O],n},P=p()?_:w,S=P;var E=function(r){return"[object Arguments]"===S(r)},I=E;var T=function(){return I(arguments)}(),A="function"==typeof Object.defineProperty?Object.defineProperty:null;var N=function(){try{return A({},"x",{}),!0}catch(r){return!1}},k=Object.defineProperty,x=Object.prototype,B=x.toString,V=x.__defineGetter__,F=x.__defineSetter__,G=x.__lookupGetter__,L=x.__lookupSetter__;var D=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=x,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),u&&F&&F.call(r,t,e.set),r},M=k,X=D,Y=N()?M:X;var C=function(r,t,e){Y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},H=C;var R=function(r){return"string"==typeof r},W=String.prototype.valueOf;var z=P,U=function(r){try{return W.call(r),!0}catch(r){return!1}},q=p();var J=function(r){return"object"==typeof r&&(r instanceof String||(q?U(r):"[object String]"===z(r)))},K=R,Q=J;var Z=H,$=function(r){return K(r)||Q(r)},rr=J;Z($,"isPrimitive",R),Z($,"isObject",rr);var tr=$;var er=function(r){return"number"==typeof r},nr=Number,or=nr.prototype.toString;var ir=P,ur=nr,cr=function(r){try{return or.call(r),!0}catch(r){return!1}},fr=p();var ar=function(r){return"object"==typeof r&&(r instanceof ur||(fr?cr(r):"[object Number]"===ir(r)))},lr=er,vr=ar;var pr=H,sr=function(r){return lr(r)||vr(r)},yr=ar;pr(sr,"isPrimitive",er),pr(sr,"isObject",yr);var br=sr;var gr=function(r){return r!=r},jr=br.isPrimitive,dr=gr;var mr=function(r){return jr(r)&&dr(r)},Or=br.isObject,hr=gr;var wr=function(r){return Or(r)&&hr(r.valueOf())},_r=mr,Pr=wr;var Sr=H,Er=function(r){return _r(r)||Pr(r)},Ir=wr;Sr(Er,"isPrimitive",mr),Sr(Er,"isObject",Ir);var Tr=Er,Ar=Number.POSITIVE_INFINITY,Nr=nr.NEGATIVE_INFINITY,kr=Math.floor;var xr=function(r){return kr(r)===r},Br=Ar,Vr=Nr,Fr=xr;var Gr=function(r){return r<Br&&r>Vr&&Fr(r)},Lr=br.isPrimitive,Dr=Gr;var Mr=function(r){return Lr(r)&&Dr(r)},Xr=br.isObject,Yr=Gr;var Cr=function(r){return Xr(r)&&Yr(r.valueOf())},Hr=Mr,Rr=Cr;var Wr=H,zr=function(r){return Hr(r)||Rr(r)},Ur=Cr;Wr(zr,"isPrimitive",Mr),Wr(zr,"isObject",Ur);var qr,Jr=zr,Kr=Object.prototype.propertyIsEnumerable;qr=!Kr.call("beep","0");var Qr=tr,Zr=Tr.isPrimitive,$r=Jr.isPrimitive,rt=Kr,tt=qr;var et=function(r,t){var e;return null!=r&&(!(e=rt.call(r,t))&&tt&&Qr(r)?!Zr(t=+t)&&$r(t)&&t>=0&&t<r.length:e)},nt=et,ot=P;var it=Array.isArray?Array.isArray:function(r){return"[object Array]"===ot(r)},ut=j,ct=nt,ft=it,at=xr;var lt=T?E:function(r){return null!==r&&"object"==typeof r&&!ft(r)&&"number"==typeof r.length&&at(r.length)&&r.length>=0&&r.length<=4294967295&&ut(r,"callee")&&!ct(r,"callee")},vt=lt,pt=c,st=Array.prototype.slice;var yt=function(r){return vt(r)?pt(st.call(r)):pt(r)},bt=it;var gt=function(r){return null!==r&&"object"==typeof r};H(gt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!bt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(gt));var jt=gt;var dt=nt((function(){}),"prototype"),mt=!nt({toString:null},"toString"),Ot=xr;var ht=Tr,wt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ot(r.length)&&r.length>=0&&r.length<=9007199254740991},_t=tr.isPrimitive,Pt=Jr.isPrimitive;var St=function(r,t,e){var n,o;if(!wt(r)&&!_t(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Pt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(ht(t)){for(;o<n;o++)if(ht(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},Et=/./;var It=function(r){return"boolean"==typeof r},Tt=Boolean.prototype.toString;var At=P,Nt=function(r){try{return Tt.call(r),!0}catch(r){return!1}},kt=p();var xt=function(r){return"object"==typeof r&&(r instanceof Boolean||(kt?Nt(r):"[object Boolean]"===At(r)))},Bt=It,Vt=xt;var Ft=H,Gt=function(r){return Bt(r)||Vt(r)},Lt=xt;Ft(Gt,"isPrimitive",It),Ft(Gt,"isObject",Lt);var Dt=Gt;var Mt=function(){return new Function("return this;")()},Xt="object"==typeof self?self:null,Yt="object"==typeof window?window:null,Ct="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ht="object"==typeof Ct?Ct:null;module.exports=Ht;var Rt=Dt.isPrimitive,Wt=Mt,zt=Xt,Ut=Yt,qt=r(Object.freeze({__proto__:null}));var Jt=function(r){if(arguments.length){if(!Rt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Wt()}if(zt)return zt;if(Ut)return Ut;if(qt)return qt;throw new Error("unexpected error. Unable to resolve global object.")},Kt=Jt(),Qt=Kt.document&&Kt.document.childNodes,Zt=Int8Array,$t=Et,re=Qt,te=Zt;var ee=function(){return"function"==typeof $t||"object"==typeof te||"function"==typeof re};var ne=function(){return/^\s*function\s*([^(]*)/i},oe=ne;H(oe,"REGEXP",ne());var ie=jt;var ue=P,ce=oe.REGEXP,fe=function(r){return ie(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ae=function(r){var t,e,n;if(("Object"===(e=ue(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ce.exec(n.toString()))return t[1]}return fe(r)?"Buffer":e},le=ae;var ve=ae;var pe=function(r){var t;return null===r?"null":"object"===(t=typeof r)?le(r).toLowerCase():t},se=function(r){return ve(r).toLowerCase()},ye=ee()?se:pe;var be,ge=function(r){return r.constructor&&r.constructor.prototype===r},je="undefined"==typeof window?void 0:window,de=j,me=St,Oe=ye,he=ge,we=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_e=je;be=function(){var r;if("undefined"===Oe(_e))return!1;for(r in _e)try{-1===me(we,r)&&de(_e,r)&&null!==_e[r]&&"object"===Oe(_e[r])&&he(_e[r])}catch(r){return!0}return!1}();var Pe="undefined"!=typeof window,Se=be,Ee=ge,Ie=Pe;var Te=jt,Ae=j,Ne=lt,ke=dt,xe=mt,Be=function(r){if(!1===Ie&&!Se)return Ee(r);try{return Ee(r)}catch(r){return!1}},Ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Fe=c,Ge=yt,Le=function(r){var t,e,n,o,i,u,c;if(o=[],Ne(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!Ae(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!Te(r))return o;e=ke&&n}for(i in r)e&&"prototype"===i||!Ae(r,i)||o.push(String(i));if(xe)for(t=Be(r),c=0;c<Ve.length;c++)u=Ve[c],t&&"constructor"===u||!Ae(r,u)||o.push(String(u));return o},De=l?a()?Ge:Fe:Le;var Me=o?u:function(r){return De(Object(r))},Xe=ye;var Ye=function(r){return"function"===Xe(r)},Ce=Object.getPrototypeOf;var He=function(r){return r.__proto__},Re=P,We=He;var ze=function(r){var t=We(r);return t||null===t?t:"[object Function]"===Re(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Ue=Ce,qe=ze,Je=Ye(Object.getPrototypeOf)?Ue:qe;var Ke=function(r){return null==r?null:(r=Object(r),Je(r))},Qe=void 0!==Object.getOwnPropertyDescriptor,Ze=Object.getOwnPropertyDescriptor;var $e=j;var rn=Qe?function(r,t){var e;return null==r||void 0===(e=Ze(r,t))?null:e}:function(r,t){return $e(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null};var tn=function(r,t){var e=rn(r,t);return null!==e&&(!0===e.writable||"function"==typeof e.set)};function en(r){var t,e,o,i,u,c;if(null==r)return[];o=Object(r),t={},e=[];do{for(i=Me(o),c=0;c<i.length;c++)u=i[c],!1===j(t,u)&&tn(o,u)&&e.push(u),t[u]=!0;for(i=n(o),c=0;c<i.length;c++)u=i[c],!1===j(t,u)&&tn(o,u)&&e.push(u),t[u]=!0;o=Ke(o)}while(o);return e}export{en as default};
//# sourceMappingURL=mod.js.map

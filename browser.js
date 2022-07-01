// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).writablePropertiesIn=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=r?function(t){return e(Object(t))}:function(){return[]},o=void 0!==Object.getOwnPropertyNames,i=Object.getOwnPropertyNames;var u=function(t){return i(Object(t))};var c=function(t){return Object.keys(Object(t))},f=c;var a=function(){return function(){return 2!==(f(arguments)||"").length}(1,2)},l=void 0!==Object.keys;var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return p&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,y=s;var b=function(t){return y.call(t)},g=Object.prototype.hasOwnProperty;var d=function(t,r){return null!=t&&g.call(t,r)},j="function"==typeof Symbol?Symbol.toStringTag:"",m=d,O=j,h=s;var w=b,_=function(t){var r,e,n;if(null==t)return h.call(t);e=t[O],r=m(t,O);try{t[O]=void 0}catch(r){return h.call(t)}return n=h.call(t),r?t[O]=e:delete t[O],n},P=v()?_:w,S=P;var E,I=function(t){return"[object Arguments]"===S(t)},T=I;E=function(){return T(arguments)}();var A=E,N="function"==typeof Object.defineProperty?Object.defineProperty:null;var k=function(){try{return N({},"x",{}),!0}catch(t){return!1}},x=Object.defineProperty,B=Object.prototype,V=B.toString,F=B.__defineGetter__,G=B.__defineSetter__,L=B.__lookupGetter__,D=B.__lookupSetter__;var M=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(L.call(t,r)||D.call(t,r)?(n=t.__proto__,t.__proto__=B,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(t,r,e.get),u&&G&&G.call(t,r,e.set),t},X=x,Y=M,C=k()?X:Y;var H=function(t,r,e){C(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},R=H;var W=function(t){return"string"==typeof t},z=String.prototype.valueOf;var U=P,q=function(t){try{return z.call(t),!0}catch(t){return!1}},J=v();var K=function(t){return"object"==typeof t&&(t instanceof String||(J?q(t):"[object String]"===U(t)))},Q=W,Z=K;var $=R,tt=function(t){return Q(t)||Z(t)},rt=K;$(tt,"isPrimitive",W),$(tt,"isObject",rt);var et=tt;var nt=function(t){return"number"==typeof t},ot=Number,it=ot.prototype.toString;var ut=P,ct=ot,ft=function(t){try{return it.call(t),!0}catch(t){return!1}},at=v();var lt=function(t){return"object"==typeof t&&(t instanceof ct||(at?ft(t):"[object Number]"===ut(t)))},pt=nt,vt=lt;var st=R,yt=function(t){return pt(t)||vt(t)},bt=lt;st(yt,"isPrimitive",nt),st(yt,"isObject",bt);var gt=yt;var dt=function(t){return t!=t},jt=gt.isPrimitive,mt=dt;var Ot=function(t){return jt(t)&&mt(t)},ht=gt.isObject,wt=dt;var _t=function(t){return ht(t)&&wt(t.valueOf())},Pt=Ot,St=_t;var Et=R,It=function(t){return Pt(t)||St(t)},Tt=_t;Et(It,"isPrimitive",Ot),Et(It,"isObject",Tt);var At=It,Nt=Number.POSITIVE_INFINITY,kt=ot.NEGATIVE_INFINITY,xt=Math.floor;var Bt=function(t){return xt(t)===t},Vt=Nt,Ft=kt,Gt=Bt;var Lt=function(t){return t<Vt&&t>Ft&&Gt(t)},Dt=gt.isPrimitive,Mt=Lt;var Xt=function(t){return Dt(t)&&Mt(t)},Yt=gt.isObject,Ct=Lt;var Ht=function(t){return Yt(t)&&Ct(t.valueOf())},Rt=Xt,Wt=Ht;var zt=R,Ut=function(t){return Rt(t)||Wt(t)},qt=Ht;zt(Ut,"isPrimitive",Xt),zt(Ut,"isObject",qt);var Jt,Kt=Ut,Qt=Object.prototype.propertyIsEnumerable;Jt=!Qt.call("beep","0");var Zt=et,$t=At.isPrimitive,tr=Kt.isPrimitive,rr=Qt,er=Jt;var nr=function(t,r){var e;return null!=t&&(!(e=rr.call(t,r))&&er&&Zt(t)?!$t(r=+r)&&tr(r)&&r>=0&&r<t.length:e)},or=nr,ir=P;var ur=Array.isArray?Array.isArray:function(t){return"[object Array]"===ir(t)},cr=d,fr=or,ar=ur,lr=Bt;var pr=A?I:function(t){return null!==t&&"object"==typeof t&&!ar(t)&&"number"==typeof t.length&&lr(t.length)&&t.length>=0&&t.length<=4294967295&&cr(t,"callee")&&!fr(t,"callee")},vr=pr,sr=c,yr=Array.prototype.slice;var br=function(t){return vr(t)?sr(yr.call(t)):sr(t)},gr=ur;var dr=function(t){return null!==t&&"object"==typeof t};R(dr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!gr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(dr));var jr=dr;var mr=or((function(){}),"prototype"),Or=!or({toString:null},"toString"),hr=Bt;var wr=At,_r=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&hr(t.length)&&t.length>=0&&t.length<=9007199254740991},Pr=et.isPrimitive,Sr=Kt.isPrimitive;var Er=function(t,r,e){var n,o;if(!_r(t)&&!Pr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Sr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(wr(r)){for(;o<n;o++)if(wr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Ir=Er,Tr=/./;var Ar=function(t){return"boolean"==typeof t},Nr=Boolean.prototype.toString;var kr=P,xr=function(t){try{return Nr.call(t),!0}catch(t){return!1}},Br=v();var Vr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Br?xr(t):"[object Boolean]"===kr(t)))},Fr=Ar,Gr=Vr;var Lr=R,Dr=function(t){return Fr(t)||Gr(t)},Mr=Vr;Lr(Dr,"isPrimitive",Ar),Lr(Dr,"isObject",Mr);var Xr=Dr;var Yr=function(){return new Function("return this;")()},Cr="object"==typeof self?self:null,Hr="object"==typeof window?window:null,Rr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wr="object"==typeof Rr?Rr:null;module.exports=Wr;var zr=Xr.isPrimitive,Ur=Yr,qr=Cr,Jr=Hr,Kr=t(Object.freeze({__proto__:null}));var Qr=function(t){if(arguments.length){if(!zr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Ur()}if(qr)return qr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")},Zr=Qr(),$r=Zr.document&&Zr.document.childNodes,te=Int8Array,re=Tr,ee=$r,ne=te;var oe=function(){return"function"==typeof re||"object"==typeof ne||"function"==typeof ee};var ie=function(){return/^\s*function\s*([^(]*)/i},ue=ie;R(ue,"REGEXP",ie());var ce=jr;var fe=P,ae=ue.REGEXP,le=function(t){return ce(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var pe=function(t){var r,e,n;if(("Object"===(e=fe(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ae.exec(n.toString()))return r[1]}return le(t)?"Buffer":e},ve=pe;var se=pe;var ye=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ve(t).toLowerCase():r},be=function(t){return se(t).toLowerCase()},ge=oe()?be:ye;var de,je=function(t){return t.constructor&&t.constructor.prototype===t},me="undefined"==typeof window?void 0:window,Oe=d,he=Ir,we=ge,_e=je,Pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Se=me;de=function(){var t;if("undefined"===we(Se))return!1;for(t in Se)try{-1===he(Pe,t)&&Oe(Se,t)&&null!==Se[t]&&"object"===we(Se[t])&&_e(Se[t])}catch(t){return!0}return!1}();var Ee="undefined"!=typeof window,Ie=de,Te=je,Ae=Ee;var Ne=jr,ke=d,xe=pr,Be=mr,Ve=Or,Fe=function(t){if(!1===Ae&&!Ie)return Te(t);try{return Te(t)}catch(t){return!1}},Ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Le=c,De=br,Me=function(t){var r,e,n,o,i,u,c;if(o=[],xe(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!ke(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof t)&&!Ne(t))return o;e=Be&&n}for(i in t)e&&"prototype"===i||!ke(t,i)||o.push(String(i));if(Ve)for(r=Fe(t),c=0;c<Ge.length;c++)u=Ge[c],r&&"constructor"===u||!ke(t,u)||o.push(String(u));return o},Xe=l?a()?De:Le:Me;var Ye=o?u:function(t){return Xe(Object(t))},Ce=ge;var He=function(t){return"function"===Ce(t)},Re=Object.getPrototypeOf;var We=function(t){return t.__proto__},ze=P,Ue=We;var qe=function(t){var r=Ue(t);return r||null===r?r:"[object Function]"===ze(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Je=Re,Ke=qe,Qe=He(Object.getPrototypeOf)?Je:Ke;var Ze=function(t){return null==t?null:(t=Object(t),Qe(t))},$e=void 0!==Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptor;var rn=d;var en=$e?function(t,r){var e;return null==t||void 0===(e=tn(t,r))?null:e}:function(t,r){return rn(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var nn=function(t,r){var e=en(t,r);return null!==e&&(!0===e.writable||"function"==typeof e.set)};return function(t){var r,e,o,i,u,c;if(null==t)return[];o=Object(t),r={},e=[];do{for(i=Ye(o),c=0;c<i.length;c++)u=i[c],!1===d(r,u)&&nn(o,u)&&e.push(u),r[u]=!0;for(i=n(o),c=0;c<i.length;c++)u=i[c],!1===d(r,u)&&nn(o,u)&&e.push(u),r[u]=!0;o=Ze(o)}while(o);return e}}));
//# sourceMappingURL=browser.js.map

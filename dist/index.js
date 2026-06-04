"use strict";var f=function(o,r){return function(){return r||o((r={exports:{}}).exports,r),r.exports}};var p=f(function(O,v){
var l=require('@stdlib/utils-property-symbols/dist'),h=require('@stdlib/utils-property-names/dist'),q=require('@stdlib/utils-get-prototype-of/dist'),s=require('@stdlib/assert-has-own-property/dist'),n=require('@stdlib/assert-is-writable-property/dist'),c=require('@stdlib/object-ctor/dist');function b(o){var r,u,t,a,e,i;if(o==null)return[];t=c(o),r={},u=[];do{for(a=h(t),i=0;i<a.length;i++)e=a[i],s(r,e)===!1&&n(t,e)&&u.push(e),r[e]=!0;for(a=l(t),i=0;i<a.length;i++)e=a[i],s(r,e)===!1&&n(t,e)&&u.push(e),r[e]=!0;t=q(t)}while(t);return u}v.exports=b
});var g=p();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

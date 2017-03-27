define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./core/DOMEval"],function(n,t,r,e,o,i,u,c,a,l,s,f,p,h){"use strict";function y(n){var t=!!n&&"length"in n&&n.length,r=v.type(n);return"function"!==r&&!v.isWindow(n)&&("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in n)}var g="3.1.1",v=function(n,t){return new v.fn.init(n,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,b=/^-ms-/,m=/-([a-z])/g,j=function(n,t){return t.toUpperCase()};return v.fn=v.prototype={jquery:g,constructor:v,length:0,toArray:function(){return e.call(this)},get:function(n){return null==n?e.call(this):n<0?this[n+this.length]:this[n]},pushStack:function(n){var t=v.merge(this.constructor(),n);return t.prevObject=this,t},each:function(n){return v.each(this,n)},map:function(n){return this.pushStack(v.map(this,function(t,r){return n.call(t,r,t)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var t=this.length,r=+n+(n<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:i,sort:n.sort,splice:n.splice},v.extend=v.fn.extend=function(){var n,t,r,e,o,i,u=arguments[0]||{},c=1,a=arguments.length,l=!1;for("boolean"==typeof u&&(l=u,u=arguments[c]||{},c++),"object"==typeof u||v.isFunction(u)||(u={}),c===a&&(u=this,c--);c<a;c++)if(null!=(n=arguments[c]))for(t in n)r=u[t],e=n[t],u!==e&&(l&&e&&(v.isPlainObject(e)||(o=v.isArray(e)))?(o?(o=!1,i=r&&v.isArray(r)?r:[]):i=r&&v.isPlainObject(r)?r:{},u[t]=v.extend(l,i,e)):e!==undefined&&(u[t]=e));return u},v.extend({expando:"jQuery"+(g+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isFunction:function(n){return"function"===v.type(n)},isArray:Array.isArray,isWindow:function(n){return null!=n&&n===n.window},isNumeric:function(n){var t=v.type(n);return("number"===t||"string"===t)&&!isNaN(n-parseFloat(n))},isPlainObject:function(n){var t,e;return!(!n||"[object Object]"!==a.call(n))&&(!(t=r(n))||"function"==typeof(e=l.call(t,"constructor")&&t.constructor)&&s.call(e)===f)},isEmptyObject:function(n){var t;for(t in n)return!1;return!0},type:function(n){return null==n?n+"":"object"==typeof n||"function"==typeof n?c[a.call(n)]||"object":typeof n},globalEval:function(n){h(n)},camelCase:function(n){return n.replace(b,"ms-").replace(m,j)},nodeName:function(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()},each:function(n,t){var r,e=0;if(y(n))for(r=n.length;e<r&&t.call(n[e],e,n[e])!==!1;e++);else for(e in n)if(t.call(n[e],e,n[e])===!1)break;return n},trim:function(n){return null==n?"":(n+"").replace(d,"")},makeArray:function(n,t){var r=t||[];return null!=n&&(y(Object(n))?v.merge(r,"string"==typeof n?[n]:n):i.call(r,n)),r},inArray:function(n,t,r){return null==t?-1:u.call(t,n,r)},merge:function(n,t){for(var r=+t.length,e=0,o=n.length;e<r;e++)n[o++]=t[e];return n.length=o,n},grep:function(n,t,r){for(var e=[],o=0,i=n.length,u=!r;o<i;o++)!t(n[o],o)!==u&&e.push(n[o]);return e},map:function(n,t,r){var e,i,u=0,c=[];if(y(n))for(e=n.length;u<e;u++)null!=(i=t(n[u],u,r))&&c.push(i);else for(u in n)null!=(i=t(n[u],u,r))&&c.push(i);return o.apply([],c)},guid:1,proxy:function(n,t){var r,o,i;return"string"==typeof t&&(r=n[t],t=n,n=r),v.isFunction(n)?(o=e.call(arguments,2),i=function(){return n.apply(t||this,o.concat(e.call(arguments)))},i.guid=n.guid=n.guid||v.guid++,i):undefined},now:Date.now,support:p}),"function"==typeof Symbol&&(v.fn[Symbol.iterator]=n[Symbol.iterator]),v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(n,t){c["[object "+t+"]"]=t.toLowerCase()}),v});
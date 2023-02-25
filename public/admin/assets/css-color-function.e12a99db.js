import{c as S}from"./color.cb877126.js";var k={},O=function(t,o,r){for(var f=0,c={},C=0;C<r.length;C++)if(t==r.substr(C,t.length))"start"in c||(c.start=C),f++;else if(o==r.substr(C,o.length)&&"start"in c&&(f--,!f))return c.end=C,c.pre=r.substr(0,c.start),c.body=c.end-c.start>1?r.substring(c.start+t.length,c.end):"",c.post=r.slice(c.end+o.length),c},w={exports:{}},F,E;function _(){if(E)return F;E=1;var t=1e3,o=t*60,r=o*60,f=r*24,c=f*7,C=f*365.25;F=function(e,n){n=n||{};var u=typeof e;if(u==="string"&&e.length>0)return s(e);if(u==="number"&&isFinite(e))return n.long?d(e):i(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function s(e){if(e=String(e),!(e.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!!n){var u=parseFloat(n[1]),l=(n[2]||"ms").toLowerCase();switch(l){case"years":case"year":case"yrs":case"yr":case"y":return u*C;case"weeks":case"week":case"w":return u*c;case"days":case"day":case"d":return u*f;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*o;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function i(e){var n=Math.abs(e);return n>=f?Math.round(e/f)+"d":n>=r?Math.round(e/r)+"h":n>=o?Math.round(e/o)+"m":n>=t?Math.round(e/t)+"s":e+"ms"}function d(e){var n=Math.abs(e);return n>=f?a(e,n,f,"day"):n>=r?a(e,n,r,"hour"):n>=o?a(e,n,o,"minute"):n>=t?a(e,n,t,"second"):e+" ms"}function a(e,n,u,l){var v=n>=u*1.5;return Math.round(e/u)+" "+l+(v?"s":"")}return F}function B(t){r.debug=r,r.default=r,r.coerce=d,r.disable=s,r.enable=C,r.enabled=i,r.humanize=_(),Object.keys(t).forEach(function(a){r[a]=t[a]}),r.instances=[],r.names=[],r.skips=[],r.formatters={};function o(a){for(var e=0,n=0;n<a.length;n++)e=(e<<5)-e+a.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}r.selectColor=o;function r(a){var e;function n(){if(!!n.enabled){for(var u=arguments.length,l=new Array(u),v=0;v<u;v++)l[v]=arguments[v];var h=n,y=Number(new Date),j=y-(e||y);h.diff=j,h.prev=e,h.curr=y,e=y,l[0]=r.coerce(l[0]),typeof l[0]!="string"&&l.unshift("%O");var p=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,function(b,N){if(b==="%%")return b;p++;var A=r.formatters[N];if(typeof A=="function"){var z=l[p];b=A.call(h,z),l.splice(p,1),p--}return b}),r.formatArgs.call(h,l);var L=h.log||r.log;L.apply(h,l)}}return n.namespace=a,n.enabled=r.enabled(a),n.useColors=r.useColors(),n.color=o(a),n.destroy=f,n.extend=c,typeof r.init=="function"&&r.init(n),r.instances.push(n),n}function f(){var a=r.instances.indexOf(this);return a!==-1?(r.instances.splice(a,1),!0):!1}function c(a,e){return r(this.namespace+(typeof e>"u"?":":e)+a)}function C(a){r.save(a),r.names=[],r.skips=[];var e,n=(typeof a=="string"?a:"").split(/[\s,]+/),u=n.length;for(e=0;e<u;e++)!n[e]||(a=n[e].replace(/\*/g,".*?"),a[0]==="-"?r.skips.push(new RegExp("^"+a.substr(1)+"$")):r.names.push(new RegExp("^"+a+"$")));for(e=0;e<r.instances.length;e++){var l=r.instances[e];l.enabled=r.enabled(l.namespace)}}function s(){r.enable("")}function i(a){if(a[a.length-1]==="*")return!0;var e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(a))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(a))return!0;return!1}function d(a){return a instanceof Error?a.stack||a.message:a}return r.enable(r.load()),r}var D=B;(function(t,o){function r(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(u){return typeof u}:r=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},r(e)}o.log=C,o.formatArgs=c,o.save=s,o.load=i,o.useColors=f,o.storage=d(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function f(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function c(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!!this.useColors){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var u=0,l=0;e[0].replace(/%[a-zA-Z%]/g,function(v){v!=="%%"&&(u++,v==="%c"&&(l=u))}),e.splice(l,0,n)}}function C(){var e;return(typeof console>"u"?"undefined":r(console))==="object"&&console.log&&(e=console).log.apply(e,arguments)}function s(e){try{e?o.storage.setItem("debug",e):o.storage.removeItem("debug")}catch{}}function i(){var e;try{e=o.storage.getItem("debug")}catch{}return!e&&typeof process<"u"&&"env"in process&&(e=process.env.DEBUG),e}function d(){try{return localStorage}catch{}}t.exports=D(o);var a=t.exports.formatters;a.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}})(w,w.exports);var J=O,m=w.exports("css-color-function:parse"),$=U;function U(t){typeof t!="string"&&(t=t.toString()),m("string %s",t);function o(e){var n=e.exec(t);if(!!n)return t=t.slice(n[0].length),n.slice(1)}function r(){o(/^\s+/)}function f(){var e=o(/^\)/);if(!!e)return m("rparen"),e}function c(){var e=o(/^([\+\-\*])/);if(!!e){var n={};return n.type="modifier",n.value=e[0],m("modifier %o",n),n}}function C(){var e=o(/^([^\)\s]+)/);if(!!e){var n={};return n.type="number",n.value=e[0],m("number %o",n),n}}function s(){for(var e=[],n;n=c()||a()||C();)e.push(n),r();return m("args %o",e),e}function i(){var e=o(/^(\w+)\(/);if(!!e){r();var n={};return n.type="function",n.name=e[0],n.arguments=s(),f(),m("adjuster %o",n),n}}function d(){var e={};e.type="color";var n=o(/([^\)\s]+)/)[0];if(n.indexOf("(")!=-1){var u=o(/([^\)]*?\))/)[0];n=n+u}return e.value=n,r(),e}function a(){if(!!t.match(/^color\(/)){var e=J("(",")",t);if(!e)throw new SyntaxError("Missing closing parenthese for '"+t+"'");if(e.body==="")throw new SyntaxError("color() function cannot be empty");t=e.body,r();var n={};n.type="function",n.name="color",n.arguments=[a()||d()],m("function arguments %o",n.arguments);for(var u;u=i();)n.arguments.push(u),r();return t=e.post,r(),m("function %o",n),n}}return a()}var I={};(function(t){var o=S;t.red=r("red"),t.blue=r("blue"),t.green=r("green"),t.alpha=t.a=r("alpha"),t.rgb=function(){},t.hue=t.h=f("hue"),t.saturation=t.s=f("saturation"),t.lightness=t.l=f("lightness"),t.whiteness=t.w=f("whiteness"),t.blackness=t.b=f("blackness"),t.blend=function(s,i){var d=s.alpha();s.alpha(1);var a=new o(i[0].value),e=1-parseInt(i[1].value,10)/100;s.mix(a,e).alpha(d)},t.tint=function(s,i){i.unshift({type:"argument",value:"white"}),t.blend(s,i)},t.shade=function(s,i){i.unshift({type:"argument",value:"black"}),t.blend(s,i)},t.contrast=function(s,i){i.length==0&&i.push({type:"argument",value:"100%"});var d=1-parseInt(i[0].value,10)/100,a=s.luminosity()<.5?new o({h:s.hue(),w:100,b:0}):new o({h:s.hue(),w:0,b:100}),e=a,n=4.5;if(s.contrast(a)>n){var e=C(n,s,a),u=e.alpha();e.alpha(1),e.mix(a,d).alpha(u)}s.hwb(e.hwb())};function r(s){return function(i,d){var a;d[0].type=="modifier"&&(a=d.shift().value);var e=d[0].value;e.indexOf("%")!=-1?(e=parseInt(e,10)/100,a?a!="*"&&(e=i[s]()*e):e=e*(s=="alpha"?1:255)):e=Number(e),i[s](c(i[s](),e,a))}}function f(s){return function(i,d){var a;d[0].type=="modifier"&&(a=d.shift().value);var e=parseFloat(d[0].value,10);i[s](c(i[s](),e,a))}}function c(s,i,d){switch(d){case"+":return s+i;case"-":return s-i;case"*":return s*i;default:return i}}function C(s,i,d){i.hue();for(var a=i.clone(),e=i.whiteness(),n=i.blackness(),u=d.whiteness(),l=d.blackness();Math.abs(e-u)>1||Math.abs(n-l)>1;){var v=Math.round((u+e)/2),h=Math.round((l+n)/2);a.whiteness(v),a.blackness(h),a.contrast(i)>s?(u=v,l=h):(e=v,n=h)}return a}})(I);var q=O,G=S,P=$,M=I,W=R;function R(t){var o=t.indexOf("color(");if(o==-1)return t;if(t=t.slice(o),t=q("(",")",t),!t)throw new SyntaxError("Missing closing parenthese for '"+t+"'");var r=P("color("+t.body+")");return g(r)+R(t.post)}function g(t){var o=new G(t.arguments[0].type=="function"?g(t.arguments[0]):t.arguments[0].value),r=t.arguments.slice(1);return r.forEach(function(f){var c=f.name;if(!M[c])throw new Error("Unknown <color-adjuster> '"+c+"'");f.arguments.forEach(function(C){C.type=="function"&&C.name=="color"&&(C.value=g(C),C.type="color",delete C.name)}),M[c](o,f.arguments)}),o.rgbString()}var Z=W,x=$;k.convert=Z;k.parse=x;export{k as l};

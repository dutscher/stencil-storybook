var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]};return e(r,n)};return function(r,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{s(t.next(e))}catch(e){i(e)}}function o(e){try{s(t["throw"](e))}catch(e){i(e)}}function s(e){e.done?n(e.value):a(e.value).then(l,o)}s((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(r){return s([e,r])}}function s(l){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;a=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1];i=l;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(l);break}if(i[2])n.ops.pop();n.trys.pop();continue}l=r.call(e,n)}catch(e){l=[6,e];a=0}finally{t=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,r){for(var n=0,t=r.length,a=e.length;n<t;n++,a++)e[a]=r[n];return e};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="lib";var a;var i;var l=false;var o=false;var s=false;var f=false;var u=false;var $=typeof window!=="undefined"?window:{};var c=$.document||{head:{}};var v={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)},ce:function(e,r){return new CustomEvent(e,r)}};var d=e("p",(function(e){return Promise.resolve(e)}));var h=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var m=function(e,r){if(r===void 0){r=""}{return function(){return}}};var g=function(e,r){{return function(){return}}};var y=new WeakMap;var b=function(e,r,n){var t=_e.get(e);if(h&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}_e.set(e,t)};var w=function(e,r,n,t){var a=_(r);var i=_e.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var l=y.get(e);var o=void 0;if(!l){y.set(e,l=new Set)}if(!l.has(a)){{{o=c.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var N=function(e){var r=e.$cmpMeta$;var n=e.$hostElement$;var t=m("attachStyles",r.$tagName$);w(n.getRootNode(),r);t()};var _=function(e,r){return"sc-"+e.$tagName$};var R={};var S=function(e){e=typeof e;return e==="object"||e==="function"};var x=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var l=false;var o=false;var s=[];var f=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!S(a)){a=String(a)}if(l&&o){s[s.length-1].$text$+=a}else{s.push(l?T(null,a):a)}o=l}}};f(n);if(r){if(r.name){i=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var $=T(e,null);$.$attrs$=r;if(s.length>0){$.$children$=s}{$.$name$=i}return $}));var T=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$name$=null}return n};var C=e("H",{});var E=function(e){return e&&e.$tag$===C};var j=function(e,r,n,t,a,i){if(n!==t){var l=ye(e,r);var o=r.toLowerCase();if(r==="class"){var s=e.classList;var f=M(n);var u=M(t);s.remove.apply(s,f.filter((function(e){return e&&!u.includes(e)})));s.add.apply(s,u.filter((function(e){return e&&!f.includes(e)})))}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(ye($,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(n){v.rel(e,r,n,false)}if(t){v.ael(e,r,t,false)}}else{var c=S(t);if((l||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var d=t==null?"":t;if(r==="list"){l=false}else if(n==null||e[r]!=d){e[r]=d}}else{e[r]=t}}catch(e){}}if(t==null||t===false){if(t!==false||e.getAttribute(r)===""){{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}}};var k=/\s/;var M=function(e){return!e?[]:e.split(k)};var A=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||R;var l=r.$attrs$||R;{for(t in i){if(!(t in l)){j(a,t,i[t],undefined,n,r.$flags$)}}}for(t in l){j(a,t,i[t],l[t],n,r.$flags$)}};var P=function(e,r,n,t){var o=r.$children$[n];var u=0;var $;var v;var d;if(!l){s=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){$=o.$elm$=c.createTextNode(o.$text$)}else if(o.$flags$&1){$=o.$elm$=c.createTextNode("")}else{$=o.$elm$=c.createElement(o.$flags$&2?"slot-fb":o.$tag$);{A(null,o,f)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=P(e,o,u);if(v){$.appendChild(v)}}}}{$["s-hn"]=i;if(o.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=a;$["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[n];if(d&&d.$tag$===o.$tag$&&e.$elm$){B(e.$elm$,false)}}}return $};var B=function(e,r){v.$flags$|=1;var n=e.childNodes;for(var t=n.length-1;t>=0;t--){var a=n[t];if(a["s-hn"]!==i&&a["s-ol"]){H(a).insertBefore(a,z(a));a["s-ol"].remove();a["s-ol"]=undefined;s=true}if(r){B(a,r)}}v.$flags$&=~1};var O=function(e,r,n,t,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(t[a]){o=P(null,n,a);if(o){t[a].$elm$=o;l.insertBefore(o,z(r))}}}};var L=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{B(a,true)}}a.remove()}}};var I=function(e,r,n,t){var a=0;var i=0;var l=r.length-1;var o=r[0];var s=r[l];var f=t.length-1;var u=t[0];var $=t[f];var c;while(a<=l&&i<=f){if(o==null){o=r[++a]}else if(s==null){s=r[--l]}else if(u==null){u=t[++i]}else if($==null){$=t[--f]}else if(U(o,u)){V(o,u);o=r[++a];u=t[++i]}else if(U(s,$)){V(s,$);s=r[--l];$=t[--f]}else if(U(o,$)){if(o.$tag$==="slot"||$.$tag$==="slot"){B(o.$elm$.parentNode,false)}V(o,$);e.insertBefore(o.$elm$,s.$elm$.nextSibling);o=r[++a];$=t[--f]}else if(U(s,u)){if(o.$tag$==="slot"||$.$tag$==="slot"){B(s.$elm$.parentNode,false)}V(s,u);e.insertBefore(s.$elm$,o.$elm$);s=r[--l];u=t[++i]}else{{c=P(r&&r[i],n,i);u=t[++i]}if(c){{H(o.$elm$).insertBefore(c,z(o.$elm$))}}}}if(a>l){O(e,t[f+1]==null?null:t[f+1].$elm$,n,t,i,f)}else if(i>f){L(r,a,l)}};var U=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var z=function(e){return e&&e["s-ol"]||e};var H=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var V=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var o;if(l===null){{if(i==="slot");else{A(e,r,f)}}if(t!==null&&a!==null){I(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}O(n,null,r,a,0,a.length-1)}else if(t!==null){L(t,0,t.length-1)}}else if(o=n["s-cr"]){o.parentNode.textContent=l}else if(e.$text$!==l){n.data=l}};var q=function(e){var r=e.childNodes;var n;var t;var a;var i;var l;var o;for(t=0,a=r.length;t<a;t++){n=r[t];if(n.nodeType===1){if(n["s-sr"]){l=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){o=r[i].nodeType;if(r[i]["s-hn"]!==n["s-hn"]||l!==""){if(o===1&&l===r[i].getAttribute("slot")){n.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){n.hidden=true;break}}}}q(n)}}};var W=[];var F=function(e){var r;var n;var t;var a;var i;var l;var s=0;var f=e.childNodes;var u=f.length;for(;s<u;s++){r=f[s];if(r["s-sr"]&&(n=r["s-cr"])&&n.parentNode){t=n.parentNode.childNodes;a=r["s-sn"];for(l=t.length-1;l>=0;l--){n=t[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==r["s-hn"]){if(G(n,a)){i=W.find((function(e){return e.$nodeToRelocate$===n}));o=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=r}else{W.push({$slotRefNode$:r,$nodeToRelocate$:n})}if(n["s-sr"]){W.map((function(e){if(G(e.$nodeToRelocate$,n["s-sn"])){i=W.find((function(e){return e.$nodeToRelocate$===n}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!W.some((function(e){return e.$nodeToRelocate$===n}))){W.push({$nodeToRelocate$:n})}}}}if(r.nodeType===1){F(r)}}};var G=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var D=function(e,r){var n=e.$hostElement$;var t=e.$cmpMeta$;var f=e.$vnode$||T(null,null);var u=E(r)?r:x(null,null,r);i=n.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=n;{a=n["s-cr"];l=(t.$flags$&1)!==0;o=false}V(f,u);{v.$flags$|=1;if(s){F(u.$elm$);var $=void 0;var d=void 0;var h=void 0;var p=void 0;var m=void 0;var g=void 0;var y=0;for(;y<W.length;y++){$=W[y];d=$.$nodeToRelocate$;if(!d["s-ol"]){h=c.createTextNode("");h["s-nr"]=d;d.parentNode.insertBefore(d["s-ol"]=h,d)}}for(y=0;y<W.length;y++){$=W[y];d=$.$nodeToRelocate$;if($.$slotRefNode$){p=$.$slotRefNode$.parentNode;m=$.$slotRefNode$.nextSibling;h=d["s-ol"];while(h=h.previousSibling){g=h["s-nr"];if(g&&g["s-sn"]===d["s-sn"]&&p===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){m=g;break}}}if(!m&&p!==d.parentNode||d.nextSibling!==m){if(d!==m){if(!d["s-hn"]&&d["s-ol"]){d["s-hn"]=d["s-ol"].parentNode.nodeName}p.insertBefore(d,m)}}}else{if(d.nodeType===1){d.hidden=true}}}}if(o){q(u.$elm$)}v.$flags$&=~1;W.length=0}};var J=e("g",(function(e){return pe(e).$hostElement$}));var K=e("c",(function(e,r,n){var t=J(e);return{emit:function(e){return Q(t,r,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var Q=function(e,r,n){var t=v.ce(r,n);e.dispatchEvent(t);return t};var X=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Y=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}X(e,e.$ancestorComponent$);var n=function(){return Z(e,r)};return je(n)};var Z=function(e,r){var n=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var t=e.$lazyInstance$;var a;n();return ae(a,(function(){return ee(e,t,r)}))};var ee=function(e,r,t){return __awaiter(n,void 0,void 0,(function(){var n,a,i,l,o,s;return __generator(this,(function(f){n=e.$hostElement$;a=m("update",e.$cmpMeta$.$tagName$);i=n["s-rc"];if(t){N(e)}l=m("render",e.$cmpMeta$.$tagName$);{re(e,r)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}l();a();{o=n["s-p"];s=function(){return ne(e)};if(o.length===0){s()}else{Promise.all(o).then(s);e.$flags$|=4;o.length=0}}return[2]}))}))};var re=function(e,r,n){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}{{{D(e,r)}}}}catch(r){be(r,e.$hostElement$)}return null};var ne=function(e){var r=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var t=m("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ie(n)}t();{e.$onReadyResolve$(n);if(!a){te()}}}else{t()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ee((function(){return Y(e,false)}))}e.$flags$&=~(4|512)}};var te=function(e){{ie(c.documentElement)}Ee((function(){return Q($,"appload",{detail:{namespace:t}})}))};var ae=function(e,r){return e&&e.then?e.then(r):r()};var ie=function(e){return e.classList.add("hydrated")};var le=function(e,r){if(e!=null&&!S(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var oe=function(e,r){return pe(e).$instanceValues$.get(r)};var se=function(e,r,n,t){var a=pe(e);var i=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;n=le(n,t.$members$[r][0]);if((!(l&8)||i===undefined)&&n!==i){a.$instanceValues$.set(r,n);if(o){if((l&(2|16))===2){Y(a,false)}}}};var fe=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.map((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return oe(this,t)},set:function(e){se(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;v.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var ue=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var e,n,a,l,o,s,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Ne(t);if(!i.then)return[3,2];e=g();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){fe(i,t,2);i.isProxied=true}n=m("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch(e){be(e)}{r.$flags$&=~8}n();if(i.style){a=i.style;l=_(t);if(!_e.has(l)){o=m("registerStyles",t.$tagName$);b(l,a,!!(t.$flags$&1));o()}}u.label=3;case 3:s=r.$ancestorComponent$;f=function(){return Y(r,true)};if(s&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}}))}))};var $e=function(e){if((v.$flags$&1)===0){var r=pe(e);var n=r.$cmpMeta$;var t=m("connectedCallback",n.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(n.$flags$&(4|8)){ce(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){X(r,r.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{ue(e,r,n)}}t()}};var ce=function(e){var r=e["s-cr"]=c.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ve=function(e){if((v.$flags$&1)===0){pe(e)}};var de=e("b",(function(e,r){if(r===void 0){r={}}var n=m();var t=[];var a=r.exclude||[];var i=$.customElements;var l=c.head;var o=l.querySelector("meta[charset]");var s=c.createElement("style");var f=[];var u;var d=true;Object.assign(v,r);v.$resourcesUrl$=new URL(r.resourcesUrl||"./",c.baseURI).href;e.map((function(e){return e[1].map((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}var l=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;ge(r,n);return t}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(d){f.push(this)}else{v.jmp((function(){return $e(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;v.jmp((function(){return ve(e)}))};r.prototype.componentOnReady=function(){return pe(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){t.push(l);i.define(l,fe(o,n,1))}}))}));{s.innerHTML=t+p;s.setAttribute("data-styles","");l.insertBefore(s,o?o.nextSibling:l.firstChild)}d=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{v.jmp((function(){return u=setTimeout(te,30)}))}}n()}));var he=new WeakMap;var pe=function(e){return he.get(e)};var me=e("r",(function(e,r){return he.set(r.$lazyInstance$=e,r)}));var ge=function(e,r){var n={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return he.set(e,n)};var ye=function(e,r){return r in e};var be=function(e,r){return(0,console.error)(e,r)};var we=new Map;var Ne=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=we.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{we.set(i,e)}return e[a]}),be)};var _e=new Map;var Re=[];var Se=[];var xe=function(e,r){return function(n){e.push(n);if(!u){u=true;if(r&&v.$flags$&4){Ee(Ce)}else{v.raf(Ce)}}}};var Te=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(e){be(e)}}e.length=0};var Ce=function(){Te(Re);{Te(Se);if(u=Re.length>0){v.raf(Ce)}}};var Ee=function(e){return d().then(e)};var je=xe(Se,true)}}}));
import{g as o,r as t,c as n,h as e,H as s}from"./p-554c30a1.js";const f=(o,t)=>{let n=[];return t.length>0&&(n=t.filter((o=>o&&""!==o&&""!==o.trim())).map((t=>`${o}--${t}`))),n};function r(o,t,...n){const e=o.componentName+(t?`__${t}`:"");return[e,...f(e,n)].join(" ")}function a(o){return!!o}const c=class{constructor(o){t(this,o),this.removeButtonResponse=n(this,"removeButtonResponse",7),this.modifier=""}getText(){return(this.first||"")+((o=this.middle)?` ${o}`:"")+((t=this.last)?` ${t}`:"");var o,t}render(){const o=function(o={componentName:""}){let t=[];return"object"==typeof o.modifier?o.modifier.filter(a).forEach((o=>{t=t.concat(...o.trim().split(" "))})):o.modifier&&o.modifier.length>0&&(t=o.modifier.trim().split(" ")),[o.componentName?o.componentName:"",...o.additionalClasses||[],o.variant&&o.componentName?`${o.componentName}--${o.variant}`:"",o.componentName?t.map((t=>`${o.componentName}--${t}`)).join(" "):""].filter(a).join(" ")}({componentName:this.componentName,modifier:this.modifier});return e(s,{class:`${o} dasdsa---dddsd container`,onClick:()=>this.removeButtonResponse.emit({test:"test"})},"Hello, World! I'm ",e("span",{class:r(this,"name")}," ",this.getText()),e("slot",null),e("slot",{name:"right"}))}};(function(o,t,n,e){var s,f=arguments.length,r=f<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(o,t,n,e);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(f<3?s(r):f>3?s(t,n,r):s(t,n))||r);f>3&&r&&Object.defineProperty(t,n,r)})([(t,n)=>{const{render:e}=t;t.render=function(){const t=o(this).tagName.toLowerCase();return n&&(this[n]=t),e?e.call(this):null}}],c.prototype,"componentName",void 0),c.style='@font-face{font-family:"Roboto";src:url("../fonts/Roboto/light.woff") format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url("../fonts/Roboto/regular.woff") format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url("../fonts/Roboto/bold.woff") format("woff");font-weight:700;font-style:normal;font-display:swap}:host{display:block;font-family:sans-serif}.my-component{font-size:16px;display:block}.my-component__name{color:#fba308}.my-component__name .my-component__example-for-inner-block{color:#00abba}.my-component--modified{text-align:center}';export{c as my_component}
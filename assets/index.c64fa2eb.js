import{r as d,o as f,c as m,a as _,b as h,d as v,e as y}from"./vendor.189b3d61.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};g();var L=(i,n)=>{const s=i.__vccOpts||i;for(const[r,e]of n)s[r]=e;return s};const E={name:"App"};function b(i,n,s,r,e,t){const o=d("router-view");return f(),m(o)}var O=L(E,[["render",b]]);const P="modulepreload",l={},$="./",c=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${$}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,p)=>{o.addEventListener("load",u),o.addEventListener("error",p)})})).then(()=>n())};var A=_({history:h(),routes:[{path:"/",component:()=>c(()=>import("./Home.a5c76542.js"),["assets/Home.a5c76542.js","assets/vendor.189b3d61.js","assets/index.69acf359.js"])},{path:"/login",component:()=>c(()=>import("./Login.968b5ee1.js"),["assets/Login.968b5ee1.js","assets/vendor.189b3d61.js","assets/index.69acf359.js"])},{path:"/admin",component:()=>c(()=>import("./Dashboard.a95bc869.js"),["assets/Dashboard.a95bc869.js","assets/vendor.189b3d61.js","assets/index.69acf359.js"])}]});const a=v(O),k=y();a.use(k);a.use(A);a.mount("#app");export{L as _};
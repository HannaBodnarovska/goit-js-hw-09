function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){i[e]=o},o.parcelRequired7c6=n);var r=n("7Y9D8");function s(e,o){return new Promise(((t,i)=>{Math.random()>.3?t({position:e,delay:o}):i({position:e,delay:o})}))}const l=document.querySelector(".form");l.addEventListener("submit",(o=>{o.preventDefault();const t=parseInt(l.elements.delay.value),i=parseInt(l.elements.step.value),n=parseInt(l.elements.amount.value);e(r).Loading.pulse("Generating promises...");const a=[];for(let e=1;e<=n;e++){const o=t+(e-1)*i;a.push(s(e,o))}Promise.all(a.map((e=>e.catch((e=>e))))).then((o=>{e(r).Loading.remove(),o.forEach((({position:o,delay:t})=>{setTimeout((()=>{1===o?e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`):e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`,{position:"topRight"})}),t)}))})).catch((o=>{e(r).Loading.remove(),o.forEach((({position:o,delay:t})=>{setTimeout((()=>{1===o?e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`):e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`,{position:"topRight"})}),t)}))}))}));
//# sourceMappingURL=03-promises.c0a3a536.js.map

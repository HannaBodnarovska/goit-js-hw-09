function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const s=document.querySelector(".form");function l(e,o){return new Promise(((t,n)=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}))}s.addEventListener("submit",(o=>{o.preventDefault();const t=parseInt(s.elements.delay.value),n=parseInt(s.elements.step.value),i=parseInt(s.elements.amount.value);e(r).Loading.pulse("Generating promises...");const a=[];for(let e=1;e<=i;e++){const o=t+(e-1)*n;a.push(l(e,o))}Promise.all(a.map((e=>e.catch((e=>e))))).then((o=>{e(r).Loading.remove(),o.forEach((({position:o,delay:t})=>{1===o?e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`):e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`,{position:"topRight"})}))})).catch((o=>{e(r).Loading.remove(),o.forEach((({position:o,delay:t})=>{1===o?e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`):e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`,{position:"topRight"})}))}))}));
//# sourceMappingURL=03-promises.7b3eb600.js.map

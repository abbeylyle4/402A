if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>r(e,n),c={module:{uri:n},exports:o,require:t};i[n]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(d(...e),o)))}}define(["./workbox-1c082513"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"095edbd0.js",revision:"b250b31a6b824ff3d446b79f301c3ab5"},{url:"0fbaaad2.js",revision:"79677680090fef7e40b9ea828503613b"},{url:"137ea483.js",revision:"42bce70927c082986a1c0e9f915d0e88"},{url:"338e7e61.js",revision:"37d094a6e2803fa008a7a1d271b14c38"},{url:"3550d799.js",revision:"30c1e5b0ea6de6d5b0b4a5703d27dc2d"},{url:"aa05e036.js",revision:"d07a57d9bef86c1fad9c4f2b359afd1e"},{url:"index.html",revision:"7e4d2342584c212c887698e97d008611"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map

if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-04110d4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2aa52b4e.css",revision:null},{url:"assets/index-648c12ac.js",revision:null},{url:"assets/index-7580b4a7.js",revision:null},{url:"assets/index-c51cc1d7.js",revision:null},{url:"assets/vendor-ce70786a.js",revision:null},{url:"index.html",revision:"1a36393c6588b22dbbfc60149a8b16dd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"9e86d1b0876fa1187e859f18feee5a6a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

import{T as p,g as v}from"./index-3a74a5d5.js";import{x as n,n as a,d as b,e as m}from"./vendor-efda1ba5.js";const u="";var f=Object.defineProperty,k=Object.getOwnPropertyDescriptor,d=(e,o,c,t)=>{for(var s=t>1?void 0:t?k(o,c):o,l=e.length-1,r;l>=0;l--)(r=e[l])&&(s=(t?r(o,c,s):r(s))||s);return t&&s&&f(o,c,s),s};let i=class extends p(u){constructor(){super(...arguments),this.blockObj=""}goMinerBlock(e){e=="miner"&&v("/blocks/"+this.blocks[e])}connectedCallback(){super.connectedCallback(),this.blockObj&&(decodeURIComponent(this.blockObj),this.blocks=JSON.parse(decodeURIComponent(this.blockObj)))}render(){return n`<div class="dui-container"><div class="mt-4 px-1"><div class="text-blue-700 font-bold cursor-pointer uppercase text-sm" @click="${()=>{history.back()}}"><i class="mdi mdi-arrow-left"></i> Back</div><div class="text-3xl mt-1">Block</div></div><div class="bg-gray-100 rounded-lg p-2 px-4 mt-3">${Object.keys(this.blocks).map(e=>n`${a(this.blocks[e],()=>n`<div class="flex font-blod py-2"><div class="text-gray-400 w-1/4 flex-none capitalize">${e}:</div><div class="${a(e==="miner",()=>"text-blue-500 cursor-pointer underline")}" @click="${()=>{this.goMinerBlock(e)}}">${this.blocks[e]}</div></div>`)}`)}</div></div>`}};d([b()],i.prototype,"blockObj",2);d([b()],i.prototype,"blocks",2);i=d([m("view-block")],i);export{i as ViewHome};

import{T as p}from"./index-31fbc090.js";import{x as n,n as a,d as b,e as v}from"./vendor-fa06579b.js";const m="";var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d=(e,s,i,t)=>{for(var o=t>1?void 0:t?f(s,i):s,l=e.length-1,r;l>=0;l--)(r=e[l])&&(o=(t?r(s,i,o):r(o))||o);return t&&o&&u(s,i,o),o};let c=class extends p(m){constructor(){super(...arguments),this.blockObj=""}goMinerBlock(e){}connectedCallback(){super.connectedCallback(),this.blockObj&&(decodeURIComponent(this.blockObj),this.blocks=JSON.parse(decodeURIComponent(this.blockObj)))}render(){return n`<div class="dui-container"><div class="mt-4 px-2"><div class="text-blue-700 font-bold cursor-pointer uppercase" @click="${()=>{history.back()}}"><i class="mdi mdi-arrow-left mx-1"></i> Back</div><div class="text-3xl font-bold mt-1">Block</div></div><div class="bg-gray-100 rounded-lg p-2 px-4 mt-3">${Object.keys(this.blocks).map(e=>n`${a(this.blocks[e],()=>n`<div class="flex font-blod py-2"><div class="text-gray-400 w-1/4 flex-none capitalize">${e}:</div><div class="${a(e==="miner",()=>"text-blue-500 cursor-pointer underline")}" @click="${()=>{this.goMinerBlock(e)}}">${this.blocks[e]}</div></div>`)}`)}</div></div>`}};d([b()],c.prototype,"blockObj",2);d([b()],c.prototype,"blocks",2);c=d([v("view-block")],c);export{c as ViewHome};

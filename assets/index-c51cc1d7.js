import{T as p,g as v}from"./index-7580b4a7.js";import{x as n,n as a,d as b,e as m}from"./vendor-ce70786a.js";const f="";var u=Object.defineProperty,k=Object.getOwnPropertyDescriptor,d=(e,s,c,t)=>{for(var o=t>1?void 0:t?k(s,c):s,l=e.length-1,r;l>=0;l--)(r=e[l])&&(o=(t?r(s,c,o):r(o))||o);return t&&o&&u(s,c,o),o};let i=class extends p(f){constructor(){super(...arguments),this.blockObj=""}goMinerBlock(e){e=="miner"&&v("/blocks/"+this.blocks[e])}connectedCallback(){super.connectedCallback(),this.blockObj&&(decodeURIComponent(this.blockObj),this.blocks=JSON.parse(decodeURIComponent(this.blockObj)))}render(){return n`<div class="dui-container"><div class="mt-4 px-2"><div class="text-blue-700 font-bold cursor-pointer uppercase" @click="${()=>{history.back()}}"><i class="mdi mdi-arrow-left mx-1"></i> Back</div><div class="text-3xl font-bold mt-1">Block</div></div><div class="bg-gray-100 rounded-lg p-2 px-4 mt-3">${Object.keys(this.blocks).map(e=>n`${a(this.blocks[e],()=>n`<div class="flex font-blod py-2"><div class="text-gray-400 w-1/4 flex-none capitalize">${e}:</div><div class="${a(e==="miner",()=>"text-blue-500 cursor-pointer underline")}" @click="${()=>{this.goMinerBlock(e)}}">${this.blocks[e]}</div></div>`)}`)}</div></div>`}};d([b()],i.prototype,"blockObj",2);d([b()],i.prototype,"blocks",2);i=d([m("view-block")],i);export{i as ViewHome};

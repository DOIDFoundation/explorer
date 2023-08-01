import{T as h,g as $}from"./index-01bfc717.js";import{x as r,c as x,d as p,e as v,n as b,t as g}from"./vendor-fa06579b.js";const y="/assets/doid-15c8a698.svg";var D=Object.defineProperty,_=Object.getOwnPropertyDescriptor,a=(e,s,n,i)=>{for(var t=i>1?void 0:i?_(s,n):s,o=e.length-1,l;o>=0;o--)(l=e[o])&&(t=(i?l(s,n,t):l(t))||t);return i&&t&&D(s,n,t),t};let c=class extends h(""){constructor(){super(...arguments),this.icon="",this.sm=!1,this.dense=!1}render(){return r`<strong href="/" class="block m-12 mx-auto ${x(this.$c([this.sm?"w-14 h-14 ":"w-24 h-24"]))}"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||y}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};a([p()],c.prototype,"icon",2);a([p({type:Boolean})],c.prototype,"sm",2);a([p({type:Boolean})],c.prototype,"dense",2);c=a([v("doid-symbol")],c);let f=class extends h(""){constructor(){super(...arguments),this.sm=!1}render(){return r`<img class="w-full h-full object-contain select-none pointer-events-none ${x({"w-2/3 h-2/3":this.sm})}" src="${y}">`}};a([p({type:Boolean})],f.prototype,"sm",2);f=a([v("doid-icon")],f);var k=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=(e,s,n,i)=>{for(var t=i>1?void 0:i?O(s,n):s,o=e.length-1,l;o>=0;o--)(l=e[o])&&(t=(i?l(s,n,t):l(t))||t);return i&&t&&k(s,n,t),t};let m=class extends h(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return r`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return r`<i class="mdi mdi-loading mr-1"></i> Loading...`}}};w([p({type:String})],m.prototype,"type",2);m=w([v("loading-icon")],m);const C="";var j=Object.defineProperty,P=Object.getOwnPropertyDescriptor,u=(e,s,n,i)=>{for(var t=i>1?void 0:i?P(s,n):s,o=e.length-1,l;o>=0;o--)(l=e[o])&&(t=(i?l(s,n,t):l(t))||t);return i&&t&&j(s,n,t),t};let d=class extends h(C){constructor(){super(...arguments),this.blockData=[],this.pending=!1,this.isConnect=!1,this.goto=e=>{const s=JSON.stringify(e);$(`/block/${s}`)}}runWs(){const e=this;e.pending=!0,this.isConnect=!1,this.blockData=[];const s=new WebSocket("ws://54.91.9.8:8557");s.addEventListener("open",function(n){s.send('{"jsonrpc":"2.0","id":1,"method":"doid_currentBlock","params":[]}'),s.send('{"jsonrpc": "2.0", "method": "doid_subscribe", "params": ["newHeads"], "id": 2}')}),s.addEventListener("message",function(n){const i=JSON.parse(n.data);if(e.getData(i),i.id===1){const t=i.result.header.height;for(let o=t-1;o>t-30;o--)s.send(`{"jsonrpc":"2.0","id":3,"method":"doid_getBlockByHeight","params":[${o}]}`)}e.pending=!1,e.isConnect=!0}),s.addEventListener("close",function(n){e.runWs(),e.isConnect=!1}),s.addEventListener("error",function(n){e.runWs(),e.isConnect=!1})}reloadSocket(){location.reload()}getData(e){e.result&&e.result.header&&this.blockData.unshift(e.result.header),e.method==="doid_subscription"&&this.blockData.unshift(e.params.result.header),this.blockData=this.blockData.slice(0,30).sort((s,n)=>n.height-s.height)}connectedCallback(){super.connectedCallback(),this.runWs()}render(){return r`<div class="home">
      <!-- <p class="my-4 text-center">
        If you have locked a name with lockpass before, click&nbsp;<dui-link href="https://lockpass.doid.tech/passes"
          >here</dui-link
        >&nbsp;to redeem your DOID.
      </p> -->
      <div class="dui-container">
        <!-- <doid-symbol>
          <span slot="h1">Your Decentralized OpenID</span>
          <p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p>
        </doid-symbol> -->
        <div class="mx-auto">
          <!-- <dui-ns-search @search=${this.goto} placeholder="Search Explorer"></dui-ns-search> -->
        </div>
        <div class="mt-2 flex justify-between items-center">
          <div class="text-3xl">Latest Blocks</div>
          <div>
            ${b(this.isConnect,()=>r`<div class="text-green-600">
                    <span class="relative inline-flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                    </span>
                    <!-- <i class="mdi mdi-lan-connect mx-1"></i> -->
                    Connected</div>`,()=>r`
             <div class="text-red-600 inline-block"><i class="mdi mdi-lan-disconnect mx-1"></i>Disconnected</div>
             <i class="mdi mdi-reload mx-1 text-green-600 cursor-pointer" @click="${this.reloadSocket}"></i>
          `)}

          </div>
        </div>
        <div class="mt-2 blocks-table">
          <div class="flex block-header uppercase py-2 border-y">
            <div class="flex-none w-20 p-2">BLOCK</div>
            <div class="flex-1 p-2 ">timestamp</div>
            <div class="flex-1 p-2">HASH</div>
            <div class="flex-1 p-2 text-right">miner</div>
            <div class="flex-1 p-2 text-right">transactionsRoot</div>
          </div>
          ${b(!this.pending,()=>r`
            ${this.blockData.map((e,s)=>r`<div
          class="flex bg-gray-100 rounded-lg mt-2 cursor-pointer  py-2 hover_bg-gray-300"
          @click="${()=>{this.goto(e)}}">
              <div class="flex-none w-20 p-2 text-blue-500 underline">${e.height}</div>
              <div class="flex-1 p-2 truncate">${new Date(e.timestamp*1e3).toUTCString()}</div>
              <div class="flex-1 p-2 truncate">${e.parentHash}</div>
              <div class="flex-1 p-2 text-right truncate">${e.miner}</div>
              <div class="flex-1 p-2 text-right truncate">${e.transactionsRoot}</div>
            </div>`)}
          `,()=>r`
          <div class="text-center p-3 border-t-2">
          <loading-icon type="inline-block"></loading-icon>
          </div>
          `)}
        </div>
      </div>
    </div>`}};u([g()],d.prototype,"blockData",2);u([g()],d.prototype,"pending",2);u([g()],d.prototype,"isConnect",2);d=u([v("view-home")],d);export{d as ViewHome};

import{T as b,g as I}from"./index-fdc98ed2.js";import{x as l,c as T,d as a,e as w,t as h,n as v,S as J,p as k,b as K,h as V}from"./vendor-efda1ba5.js";const G="/assets/doid-15c8a698.svg";var Y=Object.defineProperty,X=Object.getOwnPropertyDescriptor,x=(t,e,i,s)=>{for(var n=s>1?void 0:s?X(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&Y(e,i,n),n};let $=class extends b(""){constructor(){super(...arguments),this.icon="",this.sm=!1,this.dense=!1}render(){return l`<strong href="/" class="block m-12 mx-auto ${T(this.$c([this.sm?"w-14 h-14 ":"w-24 h-24"]))}"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||G}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};x([a()],$.prototype,"icon",2);x([a({type:Boolean})],$.prototype,"sm",2);x([a({type:Boolean})],$.prototype,"dense",2);$=x([w("doid-symbol")],$);let B=class extends b(""){constructor(){super(...arguments),this.sm=!1}render(){return l`<img class="w-full h-full object-contain select-none pointer-events-none ${T({"w-2/3 h-2/3":this.sm})}" src="${G}">`}};x([a({type:Boolean})],B.prototype,"sm",2);B=x([w("doid-icon")],B);var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,U=(t,e,i,s)=>{for(var n=s>1?void 0:s?ee(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&Z(e,i,n),n};let L=class extends b(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return l`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return l`<i class="mdi mdi-loading mr-1"></i> Loading...`}}};U([a({type:String})],L.prototype,"type",2);L=U([w("loading-icon")],L);const te=`.dui-input-text{position:relative;margin-left:auto;margin-right:auto;display:flex;width:100%;padding-top:1.25rem;padding-bottom:1.25rem}.dui-input-text input[type]{font-family:var(--fontFamily);position:relative;display:inline-flex;height:2rem;width:100%;border-radius:.375rem;--tw-bg-opacity: 1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.25rem .75rem;font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){.dui-input-text input[type]{padding:1.5rem;font-size:1rem;line-height:1.5rem}}.dui-input-text input[type]{border:1px solid #ccc}.dui-input-text[disabled]{opacity:.6}.dui-input-text.dense,.dui-input-text.sm{padding-top:0;padding-bottom:0}.dui-input-text.sm input[type]{height:1.25rem;padding-top:1rem;padding-bottom:1rem;font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){.dui-input-text.sm input[type]{height:1.5rem}}.dui-input-text.sm .dui-input-right,.dui-input-text.sm .dui-input-left{padding-top:1rem;padding-bottom:1rem;line-height:1rem}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{line-height:1!important}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{position:absolute;display:flex;height:1rem;flex-wrap:wrap;align-items:center;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;margin-left:1px;top:.15rem}.dui-input-text .dui-input-msg{top:auto;bottom:.15rem}.dui-input-text .dui-input-tip{left:auto;right:0px}.dui-input-text .dui-input-right,.dui-input-text .dui-input-left{pointer-events:none;position:absolute;display:flex;height:1.25rem;align-items:center;justify-content:center;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem;padding:1.25rem .25rem 1.25rem .5rem}@media (min-width: 640px){.dui-input-text .dui-input-right,.dui-input-text .dui-input-left{height:1.5rem;padding:1.5rem .5rem 1.5rem 1.5rem}}.dui-input-text .dui-input-right,.dui-input-text .dui-input-left{min-width:1.5rem;z-index:1;right:1px;margin-top:1px;font-size:1em;line-height:1em}.dui-input-text .dui-input-right:empty,.dui-input-text .dui-input-left:empty{--tw-bg-opacity: 1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dui-input-text .dui-input-right>*,.dui-input-text .dui-input-left>*{pointer-events:auto}.dui-input-text .dui-input-left{right:auto;left:1px}.dui-input-text[required] label:after{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-weight:600;line-height:1;--tw-text-opacity: 1;color:#ef4444;color:rgba(239,68,68,var(--tw-text-opacity));content:"*";height:1em;margin-left:.25em}.dui-input-text[rightSlotted] input[type]{padding-right:5rem}.dui-input-text.sm[rightSlotted] input[type]{padding-right:2.5rem}.dui-input-text[leftSlotted] input[type]{padding-left:2.75rem}.dui-input-text.sm[leftSlotted] input[type]{padding-left:2rem}
`;var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,c=(t,e,i,s)=>{for(var n=s>1?void 0:s?ne(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&ie(e,i,n),n};const F=(t,e,{lower:i=!1,upper:s=!1}={})=>(t&&(t=t==null?void 0:t.trim(),i?t=t.toLowerCase():s&&(t=t.toUpperCase())),t);let u=class extends b(te){constructor(){super(...arguments),this.placeholder="",this.class="",this.sm=!1,this.dense=!1,this.disabled=!1,this.autofocus=!1,this.required=!1,this.lower=!1,this.upper=!1,this.err=!1,this.value="",this.debounce=300,this.rightSlotted=!1,this.leftSlotted=!1,this.type="text",this.onKeyup=t=>{t.key==="Enter"&&(this.emit("submit",this.value),setTimeout(()=>this.updateVal()))}}onSlotChange(t){const e=t.target;if(!e)return;e.assignedNodes({flatten:!0}).length}onSlotRight(t){this.rightSlotted=!!t.target}onSlotLeft(t){this.leftSlotted=!!t.target}firstUpdated(){this.autofocus&&this.$("input").focus()}onFocus(t){t.target.select()}updateVal(){const t=this.$("input");t&&(t.value=this.value)}onInput(t){t.stopImmediatePropagation();let e=t.target.value;this.value=F(e,null,{lower:this.lower,upper:this.upper})||"",this.updateVal(),this.emit("input",e)}render(){return l`<div class="dui-input-text ${T(this.$c([this.class,{sm:this.sm,dense:this.dense}]))}" ?required="${this.required}" ?rightSlotted="${this.rightSlotted}" ?leftSlotted="${this.leftSlotted}" part="dui-input-text"><label><slot name="label" @slotchange="${this.onSlotChange}"></slot></label> <span class="dui-input-left"><slot name="left" @slotchange="${this.onSlotLeft}"></slot></span><input .type="${this.type}" .disabled="${this.disabled}" placeholder="${this.placeholder}" value="${this.value}" title="${this.title}" @focus="${this.onFocus}" @input="${this.onInput}" @keyup="${this.onKeyup}"><div class="dui-input-right"><slot name="right" @slotchange="${this.onSlotRight}"></slot></div><div class="dui-input-msg"><slot name="msg" @slotchange="${this.onSlotChange}"></slot></div><div class="dui-input-tip"><slot name="tip" @slotchange="${this.onSlotChange}"></slot></div></div>`}};c([a({type:String})],u.prototype,"placeholder",2);c([a({type:String})],u.prototype,"class",2);c([a({type:Boolean})],u.prototype,"sm",2);c([a({type:Boolean})],u.prototype,"dense",2);c([a({type:Boolean})],u.prototype,"disabled",2);c([a({type:Boolean})],u.prototype,"autofocus",2);c([a({type:Boolean})],u.prototype,"required",2);c([a({type:Boolean})],u.prototype,"lower",2);c([a({type:Boolean})],u.prototype,"upper",2);c([a({type:Boolean})],u.prototype,"err",2);c([a({type:String,converter:F})],u.prototype,"value",2);c([a({type:Number})],u.prototype,"debounce",2);c([h()],u.prototype,"rightSlotted",2);c([h()],u.prototype,"leftSlotted",2);c([h()],u.prototype,"type",2);u=c([w("dui-input-text")],u);const se="";var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,y=(t,e,i,s)=>{for(var n=s>1?void 0:s?oe(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&re(e,i,n),n};let m=class extends b(se){constructor(){super(...arguments),this.placeholder="Search names or addresses",this.entire=!1,this.keyword="",this.err="",this.pending=!1,this.onInput=async t=>{this.keyword=t.detail}}doSearch(){this.err||this.emit("search",this.keyword)}async connectedCallback(){super.connectedCallback(),typeof this.default>"u"}render(){return l`<dui-input-text @input="${this.onInput}" @submit="${this.doSearch}" value="${this.keyword}" placeholder="${this.placeholder}" ?disabled="${this.pending}"><span slot="label"><slot name="label"></slot></span><span slot="right" class="-mr-1"><dui-button @click="${this.doSearch}" icon sm class="text-blue-500"><i class="mdi mdi-magnify text-lg"></i></dui-button></span><span slot="msg">${v(this.err,()=>l`<span class="text-red-500">${this.err}</span>`,()=>l`<slot name="msg"></slot>`)}</span></dui-input-text>`}};y([a()],m.prototype,"placeholder",2);y([a()],m.prototype,"default",2);y([a({type:Boolean})],m.prototype,"entire",2);y([h()],m.prototype,"keyword",2);y([h()],m.prototype,"err",2);y([h()],m.prototype,"pending",2);m=y([w("dui-ns-search")],m);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var N=function(t,e){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var n in s)s.hasOwnProperty(n)&&(i[n]=s[n])},N(t,e)};function q(t,e){N(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}function ae(t,e){var i=typeof Symbol=="function"&&t[Symbol.iterator];if(!i)return t;var s=i.call(t),n,r=[],o;try{for(;(e===void 0||e-- >0)&&!(n=s.next()).done;)r.push(n.value)}catch(p){o={error:p}}finally{try{n&&!n.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}return r}function le(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(ae(arguments[e]));return t}var Q=function(){function t(e,i){this.target=i,this.type=e}return t}(),ue=function(t){q(e,t);function e(i,s){var n=t.call(this,"error",s)||this;return n.message=i.message,n.error=i,n}return e}(Q),ce=function(t){q(e,t);function e(i,s,n){i===void 0&&(i=1e3),s===void 0&&(s="");var r=t.call(this,"close",n)||this;return r.wasClean=!0,r.code=i,r.reason=s,r}return e}(Q),de=function(){if(typeof WebSocket<"u")return WebSocket},pe=function(t){return typeof t<"u"&&!!t&&t.CLOSING===2},g={maxReconnectionDelay:1e4,minReconnectionDelay:1e3+Math.random()*4e3,minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,maxEnqueuedMessages:1/0,startClosed:!1,debug:!1},he=function(){function t(e,i,s){var n=this;s===void 0&&(s={}),this._listeners={error:[],message:[],open:[],close:[]},this._retryCount=-1,this._shouldReconnect=!0,this._connectLock=!1,this._binaryType="blob",this._closeCalled=!1,this._messageQueue=[],this.onclose=void 0,this.onerror=void 0,this.onmessage=void 0,this.onopen=void 0,this._handleOpen=function(r){n._debug("open event");var o=n._options.minUptime,p=o===void 0?g.minUptime:o;clearTimeout(n._connectTimeout),n._uptimeTimeout=setTimeout(function(){return n._acceptOpen()},p),n._ws.binaryType=n._binaryType,n._messageQueue.forEach(function(d){return n._ws.send(d)}),n._messageQueue=[],n.onopen&&n.onopen(r),n._listeners.open.forEach(function(d){return n._callEventListener(r,d)})},this._handleMessage=function(r){n._debug("message event"),n.onmessage&&n.onmessage(r),n._listeners.message.forEach(function(o){return n._callEventListener(r,o)})},this._handleError=function(r){n._debug("error event",r.message),n._disconnect(void 0,r.message==="TIMEOUT"?"timeout":void 0),n.onerror&&n.onerror(r),n._debug("exec error listeners"),n._listeners.error.forEach(function(o){return n._callEventListener(r,o)}),n._connect()},this._handleClose=function(r){n._debug("close event"),n._clearTimeouts(),n._shouldReconnect&&n._connect(),n.onclose&&n.onclose(r),n._listeners.close.forEach(function(o){return n._callEventListener(r,o)})},this._url=e,this._protocols=i,this._options=s,this._options.startClosed&&(this._shouldReconnect=!1),this._connect()}return Object.defineProperty(t,"CONNECTING",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t,"OPEN",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t,"CLOSING",{get:function(){return 2},enumerable:!0,configurable:!0}),Object.defineProperty(t,"CLOSED",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"CONNECTING",{get:function(){return t.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"OPEN",{get:function(){return t.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"CLOSING",{get:function(){return t.CLOSING},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"CLOSED",{get:function(){return t.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"binaryType",{get:function(){return this._ws?this._ws.binaryType:this._binaryType},set:function(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"retryCount",{get:function(){return Math.max(this._retryCount,0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bufferedAmount",{get:function(){var e=this._messageQueue.reduce(function(i,s){return typeof s=="string"?i+=s.length:s instanceof Blob?i+=s.size:i+=s.byteLength,i},0);return e+(this._ws?this._ws.bufferedAmount:0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"extensions",{get:function(){return this._ws?this._ws.extensions:""},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"protocol",{get:function(){return this._ws?this._ws.protocol:""},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readyState",{get:function(){return this._ws?this._ws.readyState:this._options.startClosed?t.CLOSED:t.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._ws?this._ws.url:""},enumerable:!0,configurable:!0}),t.prototype.close=function(e,i){if(e===void 0&&(e=1e3),this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),!this._ws){this._debug("close enqueued: no ws instance");return}if(this._ws.readyState===this.CLOSED){this._debug("close: already closed");return}this._ws.close(e,i)},t.prototype.reconnect=function(e,i){this._shouldReconnect=!0,this._closeCalled=!1,this._retryCount=-1,!this._ws||this._ws.readyState===this.CLOSED?this._connect():(this._disconnect(e,i),this._connect())},t.prototype.send=function(e){if(this._ws&&this._ws.readyState===this.OPEN)this._debug("send",e),this._ws.send(e);else{var i=this._options.maxEnqueuedMessages,s=i===void 0?g.maxEnqueuedMessages:i;this._messageQueue.length<s&&(this._debug("enqueue",e),this._messageQueue.push(e))}},t.prototype.addEventListener=function(e,i){this._listeners[e]&&this._listeners[e].push(i)},t.prototype.removeEventListener=function(e,i){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter(function(s){return s!==i}))},t.prototype._debug=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this._options.debug&&console.log.apply(console,le(["RWS>"],e))},t.prototype._getNextDelay=function(){var e=this._options,i=e.reconnectionDelayGrowFactor,s=i===void 0?g.reconnectionDelayGrowFactor:i,n=e.minReconnectionDelay,r=n===void 0?g.minReconnectionDelay:n,o=e.maxReconnectionDelay,p=o===void 0?g.maxReconnectionDelay:o,d=0;return this._retryCount>0&&(d=r*Math.pow(s,this._retryCount-1),d>p&&(d=p)),this._debug("next delay",d),d},t.prototype._wait=function(){var e=this;return new Promise(function(i){setTimeout(i,e._getNextDelay())})},t.prototype._getNextUrl=function(e){if(typeof e=="string")return Promise.resolve(e);if(typeof e=="function"){var i=e();if(typeof i=="string")return Promise.resolve(i);if(i.then)return i}throw Error("Invalid URL")},t.prototype._connect=function(){var e=this;if(!(this._connectLock||!this._shouldReconnect)){this._connectLock=!0;var i=this._options,s=i.maxRetries,n=s===void 0?g.maxRetries:s,r=i.connectionTimeout,o=r===void 0?g.connectionTimeout:r,p=i.WebSocket,d=p===void 0?de():p;if(this._retryCount>=n){this._debug("max retries reached",this._retryCount,">=",n);return}if(this._retryCount++,this._debug("connect",this._retryCount),this._removeListeners(),!pe(d))throw Error("No valid WebSocket class provided");this._wait().then(function(){return e._getNextUrl(e._url)}).then(function(f){e._closeCalled||(e._debug("connect",{url:f,protocols:e._protocols}),e._ws=e._protocols?new d(f,e._protocols):new d(f),e._ws.binaryType=e._binaryType,e._connectLock=!1,e._addListeners(),e._connectTimeout=setTimeout(function(){return e._handleTimeout()},o))})}},t.prototype._handleTimeout=function(){this._debug("timeout event"),this._handleError(new ue(Error("TIMEOUT"),this))},t.prototype._disconnect=function(e,i){if(e===void 0&&(e=1e3),this._clearTimeouts(),!!this._ws){this._removeListeners();try{this._ws.close(e,i),this._handleClose(new ce(e,i,this))}catch{}}},t.prototype._acceptOpen=function(){this._debug("accept open"),this._retryCount=0},t.prototype._callEventListener=function(e,i){"handleEvent"in i?i.handleEvent(e):i(e)},t.prototype._removeListeners=function(){this._ws&&(this._debug("removeListeners"),this._ws.removeEventListener("open",this._handleOpen),this._ws.removeEventListener("close",this._handleClose),this._ws.removeEventListener("message",this._handleMessage),this._ws.removeEventListener("error",this._handleError))},t.prototype._addListeners=function(){this._ws&&(this._debug("addListeners"),this._ws.addEventListener("open",this._handleOpen),this._ws.addEventListener("close",this._handleClose),this._ws.addEventListener("message",this._handleMessage),this._ws.addEventListener("error",this._handleError))},t.prototype._clearTimeouts=function(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout)},t}();function P(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(e){return typeof e}:P=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(t)}function fe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function me(t,e,i){return e&&R(t.prototype,e),i&&R(t,i),t}var ge=typeof process<"u"?"arraybuffer":"blob",M={},W=function(e){var i=e.data;return i?(e.data instanceof ArrayBuffer&&(i=new TextDecoder().decode(i)),JSON.parse(i)):e},ye=function(){function t(e){var i=this,s=e.uri,n=e.binaryType,r=e.ping,o=e.options;fe(this,t),this.uri=s,n||(n=ge),typeof TextEncoder>"u"&&(n="blob"),this.binaryType=n,this.id=10,this.sendQueue=[],this.callbacks=new Map,this.keeper=null,this.pingFrame=r||"💧",this.keeping=function(){clearTimeout(i.keeper),i.keeper=setTimeout(function(){i.send(i.pingFrame),i.keeping()},55e3)};var p=M[s];if(p)return this.ws=p;this.ws=p=M[s]=new he(s,[],o),this.ws.addEventListener("open",function(){for(i.ws.binaryType=i.binaryType;i.sendQueue.length;)i.send(i.sendQueue.shift());i.keeping()}),this.ws.addEventListener("message",function(d){var f=W(d),j=i.callbacks.get(f.id);j&&(j(f.result||f),i.callbacks.delete(f.id))})}return me(t,[{key:"send",value:function(i,s){var n=i;P(n)==="object"&&(n=Object.assign({},n,{id:this.id++}),s&&this.callbacks.set(n.id,s),n=JSON.stringify(n)),this.ws.readyState===1?this.ws.send(this.binaryType==="arraybuffer"?new TextEncoder().encode(n).buffer:n):n!==this.pingFrame&&this.sendQueue.push(n)}},{key:"on",value:function(i,s){var n=function(o){return s(W(o))};return this.ws.addEventListener(i,n),n}},{key:"off",value:function(i,s){this.ws.removeEventListener(i,s)}}]),t}();const ve={testnet:{chainId:"testnet",title:"DOID Testnet",name:"DOIDTestnet",provider:"http://54.221.168.235:8556",providerWs:"ws://54.221.168.235:8557",scan:"http://explorer.testnet.doid.tech",icon:""}},_e="testnet",z=ve[_e];var be=Object.defineProperty,we=Object.getOwnPropertyDescriptor,C=(t,e,i,s)=>{for(var n=s>1?void 0:s?we(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&be(e,i,n),n};const H=new ye({uri:z.providerWs}),O=async(t,e)=>H.send({jsonrpc:"2.0",...t},e),A=`blocks.${z.chainId}`,xe=JSON.parse(sessionStorage.getItem(A)??"[]").map(t=>(delete t.incoming,t));class S extends J{constructor(){super(),this.delay=3e3,this.updateBlocks=async()=>{const e=new Date().getTime();this.blocks=this.blocks.map(i=>{const{incoming:s=!1,timestamp:n=0}=i;return s&&n&&e-+n*1e3>this.delay&&delete i.incoming,i}),sessionStorage.setItem(A,JSON.stringify(this.blocks))},this.addBlock=(e,i=!1)=>{!e||this.blocks.some(s=>s.height===e.height)||(e.incoming=!0,setTimeout(()=>e.incoming=!1,this.delay),this.blocks.unshift(e),this.blocks.sort((s,n)=>n.height-s.height),this.blocks.length=Math.min(this.limit,this.blocks.length),i&&this.updateBlocks())},this.getBlocks=async()=>{this.pending=!0,O({method:"doid_currentBlock",params:[]},({header:e}={})=>{this.addBlock(e);for(let i=e.height-1;i>e.height-this.limit;i--)O({method:"doid_getBlockByHeight",params:[i]},s=>{this.addBlock(s==null?void 0:s.header),this.ts++})}),this.updateBlocks(),this.pending=!1},this.getBlocks(),O({method:"doid_subscribe",params:["newHeads"]}),this.ws.on("message",({method:e,params:i}={})=>{if(!i)return;const{header:s}=i==null?void 0:i.result;switch(e){case"doid_subscription":s&&this.addBlock(s,!0);return}}),this.ws.on("open",this.getBlocks)}get isEmpty(){return this.ts&&!this.blocks.length}get loading(){return!this.ts}get isConnected(){const{ws:{readyState:e,OPEN:i}}=this.ws;return e===i}}C([k({value:H})],S.prototype,"ws",2);C([k({value:!1})],S.prototype,"pending",2);C([k({value:0})],S.prototype,"ts",2);C([k({value:30})],S.prototype,"limit",2);C([k({value:xe})],S.prototype,"blocks",2);const E=new S,Se=`.incoming{transform-origin:top;animation:incoming .4s ease-out}@keyframes incoming{0%{height:0px;--tw-translate-y: 0px;transform:translate(var(--tw-translate-x)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}
`;var Oe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,D=(t,e,i,s)=>{for(var n=s>1?void 0:s?$e(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&Oe(e,i,n),n};let _=class extends b(Se){constructor(){super(...arguments),this.bindBlocks=new K(this,E),this.miner="",this.minerData={data:[],totalPage:0,page:1,limit:10,ts:0},this.minerBlocks=[],this.pending=!1,this.goto=t=>{const e=JSON.stringify(t);I(`/block/${e}`)},this.getMinerBlocks=(t=1)=>{this.miner&&(this.pending=!0,t<1&&(t=1),this.minerData.totalPage!=0&&t>=this.minerData.totalPage&&(t=this.minerData.totalPage),this.minerData.page=t,this.minerBlocks=[],this.minerData.ts=0,O({method:"doid_getBlockByMiner",params:[{miner:this.miner.toLowerCase(),limit:this.minerData.limit,page:this.minerData.page}]},({data:e,totalPage:i}={})=>{this.minerData.data=e,this.minerData.totalPage=i;for(let s in this.minerData.data)O({method:"doid_getBlockByHeight",params:[this.minerData.data[s]]},({header:n}={})=>{t===this.minerData.page&&(this.minerBlocks=[n,...this.minerBlocks].sort((r,o)=>r.height-o.height),this.pending=!1,this.minerData.ts++)});this.minerBlocks.length=Math.min(this.minerBlocks.length,this.minerData.limit)}))}}get loading(){return this.miner?!this.minerData.ts:E.loading}connectedCallback(){super.connectedCallback(),this.getMinerBlocks()}render(){return l`<div class="home"><div class="dui-container"><div class="mx-auto"></div><div class="mt-4 flex justify-between items-center px-1"><div class="text-3xl">${v(!this.miner,()=>"Latest Blocks",()=>l`<div class="text-blue-700 font-bold cursor-pointer uppercase text-sm" @click="${()=>I("/")}"><i class="mdi mdi-arrow-left"></i> Back</div><div class="mt-1">Blocks</div>`)}</div><div>${v(!this.miner,()=>l`${v(E.isConnected,()=>l`<div class="inline-flex gap-2 items-center text-green-600"><span class="relative inline-flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span> </span>Connected</div>`,()=>l`<div class="text-gray-600 inline-block"><i class="mdi mdi-lan-disconnect mx-1"></i>Connecting...</div>`)}`,()=>l`<div class="text-sm mt-1 text-gray-400">By: <i class="mdi mdi-laptop mx-1"></i>${this.miner}</div>`)}</div></div><div class="mt-2 blocks-table"><div class="flex block-header uppercase py-2 border-y"><div class="flex-none w-20 p-2">BLOCK</div><div class="flex-1 p-2">timestamp</div><div class="flex-1 p-2">HASH</div><div class="flex-1 p-2 text-right">miner</div><div class="flex-1 p-2 text-right">transactionsRoot</div></div>${v(!this.loading,()=>l`${V(this.miner?this.minerBlocks:E.blocks,t=>l`<div class="flex overflow-hidden bg-gray-100 rounded-lg mt-2 cursor-pointer h-14 items-center py-2 hover_bg-gray-300 ${T({incoming:!!t.incoming})}" @click="${()=>this.goto(t)}"><div class="flex-none w-20 p-2 text-blue-500 underline">${t.height}</div><div class="flex-1 p-2 truncate">${new Date(t.timestamp*1e3).toLocaleString()}</div><div class="flex-1 p-2 truncate">${t.parentHash}</div><div class="flex-1 p-2 text-right truncate">${t.miner}</div><div class="flex-1 p-2 text-right truncate">${t.transactionsRoot}</div></div>`)}`,()=>l`<div class="text-center p-3 border-t-2"><loading-icon type="inline-block"></loading-icon></div>`)} ${v(this.miner&&this.minerData.totalPage,()=>l`<div class="flex justify-center items-center my-4"><dui-button title="First Page" icon class="text-blue-500" @click="${()=>this.getMinerBlocks(1)}"><i class="mdi mdi-page-first text-lg"></i></dui-button><dui-button title="Previous Page" icon class="text-blue-500" @click="${()=>this.getMinerBlocks(this.minerData.page-1)}"><i class="mdi mdi-chevron-left text-lg"></i></dui-button><div class="text-gray-300 text-sm inline-block mx-1">Page ${this.minerData.page} of ${this.minerData.totalPage}</div><dui-button title="Next Page" icon class="text-blue-500" @click="${()=>this.getMinerBlocks(this.minerData.page+1)}"><i class="mdi mdi-chevron-right text-lg"></i></dui-button><dui-button title="Last Page" icon class="text-blue-500" @click="${()=>this.getMinerBlocks(this.minerData.totalPage)}"><i class="mdi mdi-page-last text-lg"></i></dui-button></div>`)}</div></div></div>`}};D([a()],_.prototype,"miner",2);D([h()],_.prototype,"minerData",2);D([h()],_.prototype,"minerBlocks",2);D([h()],_.prototype,"pending",2);_=D([w("view-home")],_);export{_ as ViewHome};

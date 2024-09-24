"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[4057],{34057:(e,t,n)=>{n.d(t,{default:()=>Ie}),function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}}();var r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function i(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},a={},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.allInputsSelector=function(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(e){return'input[type="'.concat(e,'"]')})).join(", ")},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.allInputsSelector=void 0;var t=l;Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})}(a);var u={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.isNativeInput=function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNativeInput=void 0;var t=c;Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return t.isNativeInput}})}(u);var s={},d={};Object.defineProperty(d,"__esModule",{value:!0}),d.append=function(e,t){Array.isArray(t)?t.forEach((function(t){e.appendChild(t)})):e.appendChild(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.append=void 0;var t=d;Object.defineProperty(e,"append",{enumerable:!0,get:function(){return t.append}})}(s);var p={},f={};Object.defineProperty(f,"__esModule",{value:!0}),f.blockElements=function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.blockElements=void 0;var t=f;Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return t.blockElements}})}(p);var g={},v={};Object.defineProperty(v,"__esModule",{value:!0}),v.calculateBaseline=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.fontSize),r=parseFloat(t.lineHeight)||1.2*n,i=parseFloat(t.paddingTop),o=parseFloat(t.borderTopWidth);return parseFloat(t.marginTop)+o+i+(r-n)/2+.8*n},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateBaseline=void 0;var t=v;Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return t.calculateBaseline}})}(g);var b={},m={},y={},h={};Object.defineProperty(h,"__esModule",{value:!0}),h.isContentEditable=function(e){return"true"===e.contentEditable},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isContentEditable=void 0;var t=h;Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return t.isContentEditable}})}(y),Object.defineProperty(m,"__esModule",{value:!0}),m.canSetCaret=function(e){var t=!0;if((0,_.isNativeInput)(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=(0,O.isContentEditable)(e);return t};var _=u,O=y;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.canSetCaret=void 0;var t=m;Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return t.canSetCaret}})}(b);var P={},E={};function j(){const e={win:!1,mac:!1,x11:!1,linux:!1},t=Object.keys(e).find((e=>-1!==window.navigator.appVersion.toLowerCase().indexOf(e)));return void 0!==t&&(e[t]=!0),e}function C(e){return null!=e&&""!==e&&("object"!=typeof e||Object.keys(e).length>0)}function T(e){return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function M(e){return"function"===T(e)||"asyncfunction"===T(e)}function w(e){return"object"===T(e)}const S=Object.freeze(Object.defineProperty({__proto__:null,PromiseQueue:class{constructor(){this.completed=Promise.resolve()}add(e){return new Promise(((t,n)=>{this.completed=this.completed.then(e).then(t).catch(n)}))}},beautifyShortcut:function(e){const t=j();return e=e.replace(/shift/gi,"\u21e7").replace(/backspace/gi,"\u232b").replace(/enter/gi,"\u23ce").replace(/up/gi,"\u2191").replace(/left/gi,"\u2192").replace(/down/gi,"\u2193").replace(/right/gi,"\u2190").replace(/escape/gi,"\u238b").replace(/insert/gi,"Ins").replace(/delete/gi,"\u2421").replace(/\+/gi,"+"),e=t.mac?e.replace(/ctrl|cmd/gi,"\u2318").replace(/alt/gi,"\u2325"):e.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},cacheable:function(e,t,n){const r=void 0!==n.value?"value":"get",i=n[r],o=`#${t}Cache`;if(n[r]=function(...e){return void 0===this[o]&&(this[o]=i.apply(this,e)),this[o]},"get"===r&&n.set){const t=n.set;n.set=function(n){delete e[o],t.apply(this,n)}}return n},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)},copyTextToClipboard:function(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="-999px",t.style.bottom="-999px",t.innerHTML=e,document.body.appendChild(t);const n=window.getSelection(),r=document.createRange();if(r.selectNode(t),null===n)throw new Error("Cannot copy text to clipboard");n.removeAllRanges(),n.addRange(r),document.execCommand("copy"),document.body.removeChild(t)},debounce:function(e,t,n){let r;return(...i)=>{const o=this,a=!0===n&&void 0!==r;window.clearTimeout(r),r=window.setTimeout((()=>{r=void 0,!0!==n&&e.apply(o,i)}),t),a&&e.apply(o,i)}},deepMerge:function e(t,...n){if(!n.length)return t;const r=n.shift();if(w(t)&&w(r))for(const i in r)w(r[i])?(void 0===t[i]&&Object.assign(t,{[i]:{}}),e(t[i],r[i])):Object.assign(t,{[i]:r[i]});return e(t,...n)},deprecationAssert:function(e,t,n){const r=`\xab${t}\xbb is deprecated and will be removed in the next major release. Please use the \xab${n}\xbb instead.`;e&&console.warn(r)},getUserOS:j,getValidUrl:function(e){try{return new URL(e).href}catch{}return"//"===e.substring(0,2)?window.location.protocol+e:window.location.origin+e},isBoolean:function(e){return"boolean"===T(e)},isClass:function(e){return M(e)&&/^\s*class\s+/.test(e.toString())},isEmpty:function(e){return!C(e)},isFunction:M,isIosDevice:()=>typeof window<"u"&&null!==window.navigator&&C(window.navigator.platform)&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),isNumber:function(e){return"number"===T(e)},isObject:w,isPrintableKey:function(e){return e>47&&e<58||32===e||13===e||229===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223},isPromise:function(e){return Promise.resolve(e)===e},isString:function(e){return"string"===T(e)},isUndefined:function(e){return"undefined"===T(e)},keyCodes:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},mouseButtons:{LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},notEmpty:C,throttle:function(e,t,n=void 0){let r,i,o,a=null,l=0;n||(n={});const u=function(){l=!1===n.leading?0:Date.now(),a=null,o=e.apply(r,i),null===a&&(r=i=null)};return function(){const c=Date.now();!l&&!1===n.leading&&(l=c);const s=t-(c-l);return r=this,i=arguments,s<=0||s>t?(a&&(clearTimeout(a),a=null),l=c,o=e.apply(r,i),null===a&&(r=i=null)):!a&&!1!==n.trailing&&(a=setTimeout(u,s)),o}},typeOf:T},Symbol.toStringTag,{value:"Module"})),k=i(S);Object.defineProperty(E,"__esModule",{value:!0}),E.containsOnlyInlineElements=function(e){var t;(0,L.isString)(e)?(t=document.createElement("div")).innerHTML=e:t=e;var n=function(e){return!(0,N.blockElements)().includes(e.tagName.toLowerCase())&&Array.from(e.children).every(n)};return Array.from(t.children).every(n)};var L=k,N=p;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.containsOnlyInlineElements=void 0;var t=E;Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return t.containsOnlyInlineElements}})}(P);var A={},x={},I={},B={};Object.defineProperty(B,"__esModule",{value:!0}),B.make=function(e,t,n){var r;void 0===t&&(t=null),void 0===n&&(n={});var i=document.createElement(e);if(Array.isArray(t)){var o=t.filter((function(e){return void 0!==e}));(r=i.classList).add.apply(r,o)}else null!==t&&i.classList.add(t);for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a]);return i},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.make=void 0;var t=B;Object.defineProperty(e,"make",{enumerable:!0,get:function(){return t.make}})}(I),Object.defineProperty(x,"__esModule",{value:!0}),x.fragmentToString=function(e){var t=(0,D.make)("div");return t.appendChild(e),t.innerHTML};var D=I;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fragmentToString=void 0;var t=x;Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return t.fragmentToString}})}(A);var R={},H={};Object.defineProperty(H,"__esModule",{value:!0}),H.getContentLength=function(e){var t,n;return(0,F.isNativeInput)(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:null!==(n=null===(t=e.textContent)||void 0===t?void 0:t.length)&&void 0!==n?n:0};var F=u;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContentLength=void 0;var t=H;Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return t.getContentLength}})}(R);var q={},U={},W=r&&r.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)(r||!(i in t))&&(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(U,"__esModule",{value:!0}),U.getDeepestBlockElements=function e(t){return(0,$.containsOnlyInlineElements)(t)?[t]:Array.from(t.children).reduce((function(t,n){return W(W([],t,!0),e(n),!0)}),[])};var $=P;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestBlockElements=void 0;var t=U;Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return t.getDeepestBlockElements}})}(q);var G={},z={},K={},Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.isLineBreakTag=function(e){return["BR","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLineBreakTag=void 0;var t=Q;Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return t.isLineBreakTag}})}(K);var X={},V={};Object.defineProperty(V,"__esModule",{value:!0}),V.isSingleTag=function(e){return["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isSingleTag=void 0;var t=V;Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return t.isSingleTag}})}(X),Object.defineProperty(z,"__esModule",{value:!0}),z.getDeepestNode=function e(t,n){void 0===n&&(n=!1);var r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";if(t.nodeType===Node.ELEMENT_NODE&&t[r]){var o=t[r];if((0,J.isSingleTag)(o)&&!(0,Y.isNativeInput)(o)&&!(0,Z.isLineBreakTag)(o))if(o[i])o=o[i];else{if(null===o.parentNode||!o.parentNode[i])return o.parentNode;o=o.parentNode[i]}return e(o,n)}return t};var Y=u,Z=K,J=X;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestNode=void 0;var t=z;Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return t.getDeepestNode}})}(G);var ee={},te={},ne=r&&r.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)(r||!(i in t))&&(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(te,"__esModule",{value:!0}),te.findAllInputs=function(e){return Array.from(e.querySelectorAll((0,oe.allInputsSelector)())).reduce((function(e,t){return(0,ae.isNativeInput)(t)||(0,re.containsOnlyInlineElements)(t)?ne(ne([],e,!0),[t],!1):ne(ne([],e,!0),(0,ie.getDeepestBlockElements)(t),!0)}),[])};var re=P,ie=q,oe=a,ae=u;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.findAllInputs=void 0;var t=te;Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return t.findAllInputs}})}(ee);var le={},ue={};Object.defineProperty(ue,"__esModule",{value:!0}),ue.isCollapsedWhitespaces=function(e){return!/[^\t\n\r ]/.test(e)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCollapsedWhitespaces=void 0;var t=ue;Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return t.isCollapsedWhitespaces}})}(le);var ce={},se={};Object.defineProperty(se,"__esModule",{value:!0}),se.isElement=function(e){return!(0,de.isNumber)(e)&&(!!e&&!!e.nodeType&&e.nodeType===Node.ELEMENT_NODE)};var de=k;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isElement=void 0;var t=se;Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return t.isElement}})}(ce);var pe={},fe={},ge={},ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.isLeaf=function(e){return null!==e&&0===e.childNodes.length},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLeaf=void 0;var t=ve;Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return t.isLeaf}})}(ge);var be={},me={};Object.defineProperty(me,"__esModule",{value:!0}),me.isNodeEmpty=function(e,t){var n="";return!((0,Oe.isSingleTag)(e)&&!(0,ye.isLineBreakTag)(e))&&((0,he.isElement)(e)&&(0,_e.isNativeInput)(e)?n=e.value:null!==e.textContent&&(n=e.textContent.replace("\u200b","")),void 0!==t&&(n=n.replace(new RegExp(t,"g"),"")),0===n.trim().length)};var ye=K,he=ce,_e=u,Oe=X;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNodeEmpty=void 0;var t=me;Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return t.isNodeEmpty}})}(be),Object.defineProperty(fe,"__esModule",{value:!0}),fe.isEmpty=function(e,t){e.normalize();for(var n=[e];n.length>0;){var r=n.shift();if(r){if(e=r,(0,Pe.isLeaf)(e)&&!(0,Ee.isNodeEmpty)(e,t))return!1;n.push.apply(n,Array.from(e.childNodes))}}return!0};var Pe=ge,Ee=be;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=void 0;var t=fe;Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return t.isEmpty}})}(pe);var je={},Ce={};Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.isFragment=function(e){return!(0,Te.isNumber)(e)&&(!!e&&!!e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)};var Te=k;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isFragment=void 0;var t=Ce;Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return t.isFragment}})}(je);var Me={},we={};Object.defineProperty(we,"__esModule",{value:!0}),we.isHTMLString=function(e){var t=(0,Se.make)("div");return t.innerHTML=e,t.childElementCount>0};var Se=I;!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isHTMLString=void 0;var t=we;Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return t.isHTMLString}})}(Me);var ke={},Le={};Object.defineProperty(Le,"__esModule",{value:!0}),Le.offset=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop,i=t.top+r,o=t.left+n;return{top:i,left:o,bottom:i+t.height,right:o+t.width}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.offset=void 0;var t=Le;Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return t.offset}})}(ke);var Ne={},Ae={};Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.prepend=function(e,t){Array.isArray(t)?(t=t.reverse()).forEach((function(t){return e.prepend(t)})):e.prepend(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=void 0;var t=Ae;Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return t.prepend}})}(Ne),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=e.offset=e.make=e.isLineBreakTag=e.isSingleTag=e.isNodeEmpty=e.isLeaf=e.isHTMLString=e.isFragment=e.isEmpty=e.isElement=e.isContentEditable=e.isCollapsedWhitespaces=e.findAllInputs=e.isNativeInput=e.allInputsSelector=e.getDeepestNode=e.getDeepestBlockElements=e.getContentLength=e.fragmentToString=e.containsOnlyInlineElements=e.canSetCaret=e.calculateBaseline=e.blockElements=e.append=void 0;var t=a;Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}});var n=u;Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return n.isNativeInput}});var r=s;Object.defineProperty(e,"append",{enumerable:!0,get:function(){return r.append}});var i=p;Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return i.blockElements}});var o=g;Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return o.calculateBaseline}});var l=b;Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return l.canSetCaret}});var c=P;Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return c.containsOnlyInlineElements}});var d=A;Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return d.fragmentToString}});var f=R;Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return f.getContentLength}});var v=q;Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return v.getDeepestBlockElements}});var m=G;Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return m.getDeepestNode}});var h=ee;Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return h.findAllInputs}});var _=le;Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return _.isCollapsedWhitespaces}});var O=y;Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return O.isContentEditable}});var E=ce;Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return E.isElement}});var j=pe;Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return j.isEmpty}});var C=je;Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return C.isFragment}});var T=Me;Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return T.isHTMLString}});var M=ge;Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return M.isLeaf}});var w=be;Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return w.isNodeEmpty}});var S=K;Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return S.isLineBreakTag}});var k=X;Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return k.isSingleTag}});var L=I;Object.defineProperty(e,"make",{enumerable:!0,get:function(){return L.make}});var N=ke;Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return N.offset}});var x=Ne;Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return x.prepend}})}(o);var xe=(e=>(e.Left="left",e.Center="center",e))(xe||{});class Ie{constructor({data:e,config:t,api:n,readOnly:r,block:i}){const{DEFAULT_ALIGNMENT:o}=Ie;this.api=n,this.readOnly=r,this._quotePlaceholder=t.quotePlaceholder||Ie.DEFAULT_QUOTE_PLACEHOLDER,this._captionPlaceholder=t.captionPlaceholder||Ie.DEFAULT_CAPTION_PLACEHOLDER,this._data={text:e.text||"",caption:e.caption||"",alignment:Object.values(xe).includes(e.alignment)&&e.alignment||t.defaultAlignment||o},this._CSS={baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption"},this._block=i}static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>',title:"Quote"}}static get contentless(){return!0}static get enableLineBreaks(){return!0}static get DEFAULT_QUOTE_PLACEHOLDER(){return"Enter a quote"}static get DEFAULT_CAPTION_PLACEHOLDER(){return"Enter a caption"}static get DEFAULT_ALIGNMENT(){return"left"}static get conversionConfig(){return{import:"text",export:function(e){return e.caption?`${e.text} \u2014 ${e.caption}`:e.text}}}get CSS(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption"}}get settings(){return[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>'}]}render(){const e=o.make("blockquote",[this._CSS.baseClass,this._CSS.wrapper]),t=o.make("div",[this._CSS.input,this._CSS.text],{contentEditable:!this.readOnly,innerHTML:this._data.text}),n=o.make("div",[this._CSS.input,this._CSS.caption],{contentEditable:!this.readOnly,innerHTML:this._data.caption});return t.dataset.placeholder=this._quotePlaceholder,n.dataset.placeholder=this._captionPlaceholder,e.appendChild(t),e.appendChild(n),e}save(e){const t=e.querySelector(`.${this._CSS.text}`),n=e.querySelector(`.${this._CSS.caption}`);return Object.assign(this._data,{text:(null==t?void 0:t.innerHTML)??"",caption:(null==n?void 0:n.innerHTML)??""})}static get sanitize(){return{text:{br:!0},caption:{br:!0},alignment:{}}}renderSettings(){const e=e=>e&&e[0].toUpperCase()+e.slice(1);return this.settings.map((t=>({icon:t.icon,label:this.api.i18n.t(`Align ${e(t.name)}`),onActivate:()=>this._toggleTune(t.name),isActive:this._data.alignment===t.name,closeOnActivate:!0})))}_toggleTune(e){this._data.alignment=e,this._block.dispatchChange()}}}}]);
var app=function(){"use strict";function e(){}function t(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function n(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function a(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function d(){return e=" ",document.createTextNode(e);var e}function c(e,t,i){null==i?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function h(e,t,i){t in e?e[t]="boolean"==typeof e[t]&&""===i||i:c(e,t,i)}let u;function p(e){u=e}const f=[],b=[],g=[],m=[],v=Promise.resolve();let y=!1;function x(e){g.push(e)}const $=new Set;let C=0;function w(){const e=u;do{for(;C<f.length;){const e=f[C];C++,p(e),k(e.$$)}for(p(null),f.length=0,C=0;b.length;)b.pop()();for(let e=0;e<g.length;e+=1){const t=g[e];$.has(t)||($.add(t),t())}g.length=0}while(f.length);for(;m.length;)m.pop()();y=!1,$.clear(),p(e)}function k(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const I=new Set;function T(e,t){-1===e.$$.dirty[0]&&(f.push(e),y||(y=!0,v.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(n,r,l,d,c,h,f,b=[-1]){const g=u;p(n);const m=n.$$={fragment:null,ctx:null,props:h,update:e,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:i(),dirty:b,skip_bound:!1,root:r.target||g.$$.root};f&&f(m.root);let v=!1;if(m.ctx=l?l(n,r.props||{},((e,t,...i)=>{const s=i.length?i[0]:t;return m.ctx&&c(m.ctx[e],m.ctx[e]=s)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](s),v&&T(n,e)),t})):[],m.update(),v=!0,s(m.before_update),m.fragment=!!d&&d(m.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);m.fragment&&m.fragment.l(e),e.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&((y=n.$$.fragment)&&y.i&&(I.delete(y),y.i($))),function(e,i,n,r){const{fragment:a,on_mount:l,on_destroy:d,after_update:c}=e.$$;a&&a.m(i,n),r||x((()=>{const i=l.map(t).filter(o);d?d.push(...i):s(i),e.$$.on_mount=[]})),c.forEach(x)}(n,r.target,r.anchor,r.customElement),w()}var y,$;p(g)}const S=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===S.trustedTypes&&(S.trustedTypes={createPolicy:(e,t)=>t});const A={configurable:!1,enumerable:!1,writable:!1};void 0===S.FAST&&Reflect.defineProperty(S,"FAST",Object.assign({value:Object.create(null)},A));const R=S.FAST;if(void 0===R.getById){const e=Object.create(null);Reflect.defineProperty(R,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},A))}const E=Object.freeze([]);function D(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const B=S.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function o(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&S.requestAnimationFrame(o),e.push(t)},process:o})})),P=S.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let F=P;const L=`fast-${Math.random().toString(36).substring(2,8)}`,H=`${L}{`,V=`}${L}`,M=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(F!==P)throw new Error("The HTML policy can only be set once.");F=e},createHTML:e=>F.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(L),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${L}:`,"")),createInterpolationPlaceholder:e=>`${H}${e}${V}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${L}:${e}--\x3e`,queueUpdate:B.enqueue,processUpdates:B.process,nextUpdate:()=>new Promise(B.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class N{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class z{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new N(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new N(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const _=R.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=M.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new z(e))),i}const r=D();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class l extends N{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new l(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function j(e,t){_.defineProperty(e,t)}const q=R.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class U{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return q.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){q.set(e)}}_.defineProperty(U.prototype,"index"),_.defineProperty(U.prototype,"length");const K=Object.seal(new U);class W{constructor(){this.targetIndex=0}}class G extends W{constructor(){super(...arguments),this.createPlaceholder=M.createInterpolationPlaceholder}}class Q extends W{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return M.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function X(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=_.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Y(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function J(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Z(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function ee(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function te(e){M.setAttribute(this.target,this.targetName,e)}function ie(e){M.setBooleanAttribute(this.target,this.targetName,e)}function se(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function oe(e){this.target[this.targetName]=e}function ne(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class re extends G{constructor(e){super(),this.binding=e,this.bind=X,this.unbind=J,this.updateTarget=te,this.isBindingVolatile=_.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=oe,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>M.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ie;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Y,this.unbind=ee;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=ne)}}targetAtContent(){this.updateTarget=se,this.unbind=Z}createBehavior(e){return new ae(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ae{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){U.setEvent(e);const t=this.binding(this.source,this.context);U.setEvent(null),!0!==t&&e.preventDefault()}}let le=null;class de{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){le=this}static borrow(e){const t=le||new de;return t.directives=e,t.reset(),le=null,t}}function ce(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new re(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const he=V.length;function ue(e,t){const i=t.split(H);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(V);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+he)}""!==r&&s.push(r)}return s}function pe(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=ue(e,a);let d=null;null===l?i&&(d=new re((()=>a)),d.targetName=r.name):d=ce(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function fe(e,t,i){const s=ue(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const be=document.createRange();class ge{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){be.setStartBefore(e[0].firstChild),be.setEndAfter(e[e.length-1].lastChild),be.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class me{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=M.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=de.borrow(t);pe(s,e,!0);const o=s.behaviorFactories;s.reset();const n=M.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:pe(s,r);break;case 3:fe(s,r,n);break;case 8:M.isMarker(r)&&s.addFactory(t[M.extractDirectiveIndexFromMarker(r)])}let a=0;(M.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=M.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new ge(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,K),s.appendTo(t),s}}const ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ye(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof me){const e=r;r=()=>e}if("function"==typeof r&&(r=new re(r)),r instanceof G){const e=ve.exec(n);null!==e&&(r.targetName=e[2])}r instanceof W?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new me(s,i)}class xe{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function $e(e){return e.map((e=>e instanceof xe?$e(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Ce(e){return e.map((e=>e instanceof xe?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}xe.create=(()=>{if(M.supportsAdoptedStyleSheets){const e=new Map;return t=>new we(t,e)}return e=>new Ie(e)})();class we extends xe{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Ce(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=$e(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let ke=0;class Ie extends xe{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Ce(e),this.styleSheets=$e(e),this.styleClass="fast-style-class-"+ ++ke}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Te=Object.freeze({locate:D()}),Oe={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},Se={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class Ae{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=Oe)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return _.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||M.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;M.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":M.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(Te.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new Ae(e,s)):i.push(new Ae(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function Re(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),Te.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const Ee={mode:"open"},De={},Be=R.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class Pe{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=Ae.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?Ee:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Ee),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?De:Object.assign(Object.assign({},De),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?xe.create(t.styles):t.styles instanceof xe?t.styles:xe.create([t.styles])}get isDefined(){return!!Be.getByType(this.type)}define(e=customElements){const t=this.type;if(Be.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)_.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Pe.forType=Be.getByType;const Fe=new WeakMap,Le={bubbles:!0,composed:!0,cancelable:!0};function He(e){return e.shadowRoot||Fe.get(e)||null}class Ve extends z{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&Fe.set(e,t)}const s=_.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return _.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,_.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=He(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=He(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,K)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,K);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,K);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Le),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=He(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||M.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=Pe.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new Ve(e,i)}}function Me(e){return class extends e{constructor(){super(),Ve.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const Ne=Object.assign(Me(HTMLElement),{from:e=>Me(e),define:(e,t)=>new Pe(e,t).define().type});class ze{createCSS(){return""}createBehavior(){}}function _e(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof ze){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof xe||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=xe.create(i);return s.length&&o.withBehaviors(...s),o}function je(e,t,i){return{index:e,removed:t,addedCount:i}}function qe(e,t,i,s,o,n){let r=0,a=0;const l=Math.min(i-t,n-o);if(0===t&&0===o&&(r=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,l)),i===e.length&&n===s.length&&(a=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,l-r)),o+=r,n-=a,(i-=a)-(t+=r)==0&&n-o==0)return E;if(t===i){const e=je(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[je(t,[],i-t)];const d=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(2),i--;continue}if(0===i){o.push(3),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(0):(o.push(1),s=n),t--,i--):l===r?(o.push(3),t--,s=r):(o.push(2),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),c=[];let h,u=t,p=o;for(let e=0;e<d.length;++e)switch(d[e]){case 0:void 0!==h&&(c.push(h),h=void 0),u++,p++;break;case 1:void 0===h&&(h=je(u,[],0)),h.addedCount++,u++,h.removed.push(s[p]),p++;break;case 2:void 0===h&&(h=je(u,[],0)),h.addedCount++,u++;break;case 3:void 0===h&&(h=je(u,[],0)),h.removed.push(s[p]),p++}return void 0!==h&&c.push(h),c}const Ue=Array.prototype.push;function Ke(e,t,i,s){const o=je(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);Ue.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);Ue.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}function We(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];Ke(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(qe(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}let Ge=!1;function Qe(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Xe extends N{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,M.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,M.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?We(this.source,e):qe(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}class Ye{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Je(e){return new Q("fast-ref",Ye,e)}function Ze(e,t){const i="function"==typeof t?t:()=>t;return(t,s)=>e(t,s)?i(t,s):null}function et(e,t,i,s){e.bind(t[i],s)}function tt(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class it{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=et,this.itemsBindingObserver=_.binding(t,this,i),this.templateBindingObserver=_.binding(s,this,o),n.positioning&&(this.bindView=tt)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=E);const t=this.itemsObserver,i=this.itemsObserver=_.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),m=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=m&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(ge.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l){n(a[e],t,e,i)}else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class st extends W{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=M.createBlockPlaceholder,function(){if(Ge)return;Ge=!0,_.setArrayObserverFactory((e=>new Xe(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(je(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Qe(je(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(je(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Qe(je(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Qe(je(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=_.isVolatileBinding(e),this.isTemplateBindingVolatile=_.isVolatileBinding(t)}createBehavior(e){return new it(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function ot(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}class nt{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=_.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(E),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class rt extends nt{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function at(e){return"string"==typeof e&&(e={property:e}),new Q("fast-slotted",rt,e)}class lt extends nt{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function dt(e){return"string"==typeof e&&(e={property:e}),new Q("fast-children",lt,e)}class ct{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ht=(e,t)=>ye`
    <span
        part="end"
        ${Je("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Je("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ut=(e,t)=>ye`
    <span
        part="start"
        ${Je("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Je("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function pt(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}ye`
    <span part="end" ${Je("endContainer")}>
        <slot
            name="end"
            ${Je("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,ye`
    <span part="start" ${Je("startContainer")}>
        <slot
            name="start"
            ${Je("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;const ft=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=ft.get(i);void 0===s&&ft.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=ft.get(t);if(void 0!==i)return i.get(e)});class bt{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ht(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new It(s,e,t))}}function gt(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],Ut(o)||(t[o]=e[o]);return t}const mt=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new It(e,1,e),transient:e=>new It(e,2,e)}),vt=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:mt.singleton})}),yt=new Map;function xt(e){return t=>Reflect.getOwnMetadata(e,t)}let $t=null;const Ct=Object.freeze({createContainer:e=>new Ft(null,Object.assign({},vt.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Ct.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Bt,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Ct.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Ft(e,Object.assign({},vt.default,t,{parentLocator:Ct.findParentContainer})):$t||($t=new Ft(null,Object.assign({},vt.default,t,{parentLocator:()=>null}))),getDesignParamtypes:xt("design:paramtypes"),getAnnotationParamtypes:xt("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=yt.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=Ct.getDesignParamtypes(e),s=Ct.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?gt(Ct.getDependencies(i)):[]}else t=gt(s);else if(void 0===s)t=gt(i);else{t=gt(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],Ut(r)||(t[r]=s[r])}}else t=gt(i);yt.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?Ct.findResponsibleContainer(this):Ct.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof Ne){const s=this.$fastController,n=()=>{Ct.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||zt,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(t)Ct.defineProperty(e,t,n,o);else{Ct.getOrCreateAnnotationParamTypes(e)[i]=n}};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new bt(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=Ct.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)Ct.defineProperty(t,i,e[0]);else{const i=s?Ct.getOrCreateAnnotationParamTypes(s.value):Ct.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return Vt.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=kt)=>(e.register=function(t){return Vt.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),wt=Ct.createInterface("Container");Ct.inject;const kt={scoped:!1};class It{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function Tt(e){return this.get(e)}function Ot(e,t){return t(e)}class St{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(Tt,e)):new this.Type(...this.dependencies.map(Tt,e),...t),null==this.transformers?i:this.transformers.reduce(Ot,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const At={$isResolver:!0,resolve:(e,t)=>t};function Rt(e){return"function"==typeof e.register}function Et(e){return function(e){return Rt(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Dt=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Bt="__DI_LOCATE_PARENT__",Pt=new Map;class Ft{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(wt,At),e instanceof Node&&e.addEventListener(Bt,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],_t(t))if(Rt(t))t.register(this,r);else if(void 0!==t.prototype)Vt.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],_t(s)&&(Rt(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){Mt(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof It&&4===s.strategy?s.state.push(t):i.set(e,new It(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Mt(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=Et(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Mt(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=Et(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Mt(e);const i=this;let s,o=i;if(t){let t=E;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(Nt(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return Nt(s,o,i);if(o=o.parent,null==o)return E}return E}getFactory(e){let t=Pt.get(e);if(void 0===t){if(jt(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Pt.set(e,t=new St(e,Ct.getDependencies(e)))}return t}registerFactory(e,t){Pt.set(e,t)}createChild(e){return new Ft(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Dt.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Rt(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const Lt=new WeakMap;function Ht(e){return function(t,i,s){if(Lt.has(s))return Lt.get(s);const o=e(t,i,s);return Lt.set(s,o),o}}const Vt=Object.freeze({instance:(e,t)=>new It(e,0,t),singleton:(e,t)=>new It(e,1,t),transient:(e,t)=>new It(e,2,t),callback:(e,t)=>new It(e,3,t),cachedCallback:(e,t)=>new It(e,3,Ht(t)),aliasTo:(e,t)=>new It(t,5,e)});function Mt(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Nt(e,t,i){if(e instanceof It&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const zt="(anonymous)";function _t(e){return"object"==typeof e&&null!==e||"function"==typeof e}const jt=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),qt={};function Ut(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=qt[e];if(void 0!==t)return t;const i=e.length;if(0===i)return qt[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return qt[e]=!1;return qt[e]=!0}default:return!1}}function Kt(e){return`${e.toLowerCase()}:presentation`}const Wt=new Map,Gt=Object.freeze({define(e,t,i){const s=Kt(e);void 0===Wt.get(s)?Wt.set(s,t):Wt.set(s,!1),i.register(Vt.instance(s,t))},forTag(e,t){const i=Kt(e),s=Wt.get(i);if(!1===s){return Ct.findResponsibleContainer(t).get(i)}return s||null}});class Qt{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?xe.create(t):t instanceof xe?t:xe.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Xt extends Ne{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Gt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Jt(this===Xt?class extends Xt{}:this,e,t)}}function Yt(e,t,i){return"function"==typeof e?e(t,i):e}pt([j],Xt.prototype,"template",void 0),pt([j],Xt.prototype,"styles",void 0);class Jt{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Qt(Yt(i.template,e,i),Yt(i.styles,e,i));e.definePresentation(t);let o=Yt(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Yt(i.elementOptions,e,i),shadowOptions:o,attributes:Yt(i.attributes,e,i)})}})}}function Zt(e,...t){const i=Te.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))}));Te.locate(t).forEach((e=>i.push(e)))}))}const ei="horizontal";let ti;const ii="focus",si="focusin",oi="focusout",ni="keydown";var ri;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(ri||(ri={}));const ai="ArrowDown",li="ArrowLeft",di="ArrowRight",ci="ArrowUp",hi="Enter",ui="Escape",pi="Home",fi="End",bi=" ",gi="Tab",mi={ArrowDown:ai,ArrowLeft:li,ArrowRight:di,ArrowUp:ci};var vi;function yi(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}!function(e){e.ltr="ltr",e.rtl="rtl"}(vi||(vi={}));let xi=0;function $i(e=""){return`${e}${xi++}`}class Ci{}pt([Re({attribute:"aria-atomic"})],Ci.prototype,"ariaAtomic",void 0),pt([Re({attribute:"aria-busy"})],Ci.prototype,"ariaBusy",void 0),pt([Re({attribute:"aria-controls"})],Ci.prototype,"ariaControls",void 0),pt([Re({attribute:"aria-current"})],Ci.prototype,"ariaCurrent",void 0),pt([Re({attribute:"aria-describedby"})],Ci.prototype,"ariaDescribedby",void 0),pt([Re({attribute:"aria-details"})],Ci.prototype,"ariaDetails",void 0),pt([Re({attribute:"aria-disabled"})],Ci.prototype,"ariaDisabled",void 0),pt([Re({attribute:"aria-errormessage"})],Ci.prototype,"ariaErrormessage",void 0),pt([Re({attribute:"aria-flowto"})],Ci.prototype,"ariaFlowto",void 0),pt([Re({attribute:"aria-haspopup"})],Ci.prototype,"ariaHaspopup",void 0),pt([Re({attribute:"aria-hidden"})],Ci.prototype,"ariaHidden",void 0),pt([Re({attribute:"aria-invalid"})],Ci.prototype,"ariaInvalid",void 0),pt([Re({attribute:"aria-keyshortcuts"})],Ci.prototype,"ariaKeyshortcuts",void 0),pt([Re({attribute:"aria-label"})],Ci.prototype,"ariaLabel",void 0),pt([Re({attribute:"aria-labelledby"})],Ci.prototype,"ariaLabelledby",void 0),pt([Re({attribute:"aria-live"})],Ci.prototype,"ariaLive",void 0),pt([Re({attribute:"aria-owns"})],Ci.prototype,"ariaOwns",void 0),pt([Re({attribute:"aria-relevant"})],Ci.prototype,"ariaRelevant",void 0),pt([Re({attribute:"aria-roledescription"})],Ci.prototype,"ariaRoledescription",void 0);class wi extends Xt{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}pt([Re],wi.prototype,"download",void 0),pt([Re],wi.prototype,"href",void 0),pt([Re],wi.prototype,"hreflang",void 0),pt([Re],wi.prototype,"ping",void 0),pt([Re],wi.prototype,"referrerpolicy",void 0),pt([Re],wi.prototype,"rel",void 0),pt([Re],wi.prototype,"target",void 0),pt([Re],wi.prototype,"type",void 0),pt([j],wi.prototype,"defaultSlottedContent",void 0);class ki{}pt([Re({attribute:"aria-expanded"})],ki.prototype,"ariaExpanded",void 0),Zt(ki,Ci),Zt(wi,ct,ki);const Ii=(e,t)=>ye`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Ti extends Xt{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}pt([Re({attribute:"fill"})],Ti.prototype,"fill",void 0),pt([Re({attribute:"color"})],Ti.prototype,"color",void 0),pt([Re({mode:"boolean"})],Ti.prototype,"circular",void 0);const Oi="form-associated-proxy",Si="ElementInternals",Ai=Si in window&&"setFormValue"in window.ElementInternals.prototype,Ri=new WeakMap;function Ei(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ai}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return E}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),M.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),M.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Ai)return null;let e=Ri.get(this);return e||(e=this.attachInternals(),Ri.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Oi),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Oi)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===hi)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return Re({mode:"boolean"})(t.prototype,"disabled"),Re({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),Re({attribute:"current-value"})(t.prototype,"currentValue"),Re(t.prototype,"name"),Re({mode:"boolean"})(t.prototype,"required"),j(t.prototype,"value"),t}function Di(e){class t extends(Ei(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return Re({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),Re({attribute:"current-checked",converter:Oe})(i.prototype,"currentChecked"),j(i.prototype,"defaultChecked"),j(i.prototype,"checked"),i}class Bi extends Xt{}class Pi extends(Ei(Bi)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fi extends Pi{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}pt([Re({mode:"boolean"})],Fi.prototype,"autofocus",void 0),pt([Re({attribute:"form"})],Fi.prototype,"formId",void 0),pt([Re],Fi.prototype,"formaction",void 0),pt([Re],Fi.prototype,"formenctype",void 0),pt([Re],Fi.prototype,"formmethod",void 0),pt([Re({mode:"boolean"})],Fi.prototype,"formnovalidate",void 0),pt([Re],Fi.prototype,"formtarget",void 0),pt([Re],Fi.prototype,"type",void 0),pt([j],Fi.prototype,"defaultSlottedContent",void 0);class Li{}pt([Re({attribute:"aria-expanded"})],Li.prototype,"ariaExpanded",void 0),pt([Re({attribute:"aria-pressed"})],Li.prototype,"ariaPressed",void 0),Zt(Li,Ci),Zt(Fi,ct,Li);const Hi="none",Vi="default",Mi="sticky",Ni="default",zi="columnheader",_i="rowheader",ji="default",qi="header",Ui="sticky-header";class Ki extends Xt{constructor(){super(...arguments),this.rowType=ji,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new st((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(oi,this.handleFocusout),this.addEventListener(ni,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(oi,this.handleFocusout),this.removeEventListener(ni,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case li:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case di:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case pi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case fi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ji&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===ji&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}pt([Re({attribute:"grid-template-columns"})],Ki.prototype,"gridTemplateColumns",void 0),pt([Re({attribute:"row-type"})],Ki.prototype,"rowType",void 0),pt([j],Ki.prototype,"rowData",void 0),pt([j],Ki.prototype,"columnDefinitions",void 0),pt([j],Ki.prototype,"cellItemTemplate",void 0),pt([j],Ki.prototype,"headerCellItemTemplate",void 0),pt([j],Ki.prototype,"rowIndex",void 0),pt([j],Ki.prototype,"isActiveRow",void 0),pt([j],Ki.prototype,"activeCellItemTemplate",void 0),pt([j],Ki.prototype,"defaultCellItemTemplate",void 0),pt([j],Ki.prototype,"defaultHeaderCellItemTemplate",void 0),pt([j],Ki.prototype,"cellElements",void 0);class Wi extends Xt{constructor(){super(),this.noTabbing=!1,this.generateHeader=Vi,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,M.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=Wi.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=Wi.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new st((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(ii,this.handleFocus),this.addEventListener(ni,this.handleKeydown),this.addEventListener(oi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),M.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(ii,this.handleFocus),this.removeEventListener(ni,this.handleKeydown),this.removeEventListener(oi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case ci:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ai:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===Mi&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case pi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case fi:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,M.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Hi&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Mi?Ui:qi,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}Wi.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),pt([Re({attribute:"no-tabbing",mode:"boolean"})],Wi.prototype,"noTabbing",void 0),pt([Re({attribute:"generate-header"})],Wi.prototype,"generateHeader",void 0),pt([Re({attribute:"grid-template-columns"})],Wi.prototype,"gridTemplateColumns",void 0),pt([j],Wi.prototype,"rowsData",void 0),pt([j],Wi.prototype,"columnDefinitions",void 0),pt([j],Wi.prototype,"rowItemTemplate",void 0),pt([j],Wi.prototype,"cellItemTemplate",void 0),pt([j],Wi.prototype,"headerCellItemTemplate",void 0),pt([j],Wi.prototype,"focusRowIndex",void 0),pt([j],Wi.prototype,"focusColumnIndex",void 0),pt([j],Wi.prototype,"defaultRowItemTemplate",void 0),pt([j],Wi.prototype,"rowElementTag",void 0),pt([j],Wi.prototype,"rowElements",void 0);const Gi=ye`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,Qi=ye`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class Xi extends Xt{constructor(){super(...arguments),this.cellType=Ni,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(si,this.handleFocusin),this.addEventListener(oi,this.handleFocusout),this.addEventListener(ni,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(si,this.handleFocusin),this.removeEventListener(oi,this.handleFocusout),this.removeEventListener(ni,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===zi){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Ni&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===zi&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case hi:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===zi){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case ui:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case zi:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Qi.render(this,this);break;case void 0:case _i:case Ni:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Gi.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}pt([Re({attribute:"cell-type"})],Xi.prototype,"cellType",void 0),pt([Re({attribute:"grid-column"})],Xi.prototype,"gridColumn",void 0),pt([j],Xi.prototype,"rowData",void 0),pt([j],Xi.prototype,"columnDefinition",void 0);class Yi extends Xt{}class Ji extends(Di(Yi)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zi extends Ji{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===bi)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}function es(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}pt([Re({attribute:"readonly",mode:"boolean"})],Zi.prototype,"readOnly",void 0),pt([j],Zi.prototype,"defaultSlottedNodes",void 0),pt([j],Zi.prototype,"indeterminate",void 0);class ts extends Xt{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),_.notify(this,"value")}get value(){var e;return _.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}pt([j],ts.prototype,"checked",void 0),pt([j],ts.prototype,"content",void 0),pt([j],ts.prototype,"defaultSelected",void 0),pt([Re({mode:"boolean"})],ts.prototype,"disabled",void 0),pt([Re({attribute:"selected",mode:"boolean"})],ts.prototype,"selectedAttribute",void 0),pt([j],ts.prototype,"selected",void 0),pt([Re({attribute:"value",mode:"fromView"})],ts.prototype,"initialValue",void 0);class is{}pt([j],is.prototype,"ariaChecked",void 0),pt([j],is.prototype,"ariaPosInSet",void 0),pt([j],is.prototype,"ariaSelected",void 0),pt([j],is.prototype,"ariaSetSize",void 0),Zt(is,Ci),Zt(ts,ct,is);class ss extends Xt{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return _.track(this,"options"),this._options}set options(e){this._options=e,_.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){if("selected"===t)ss.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),ss.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case pi:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ai:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ci:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case fi:e.preventDefault(),this.selectLastOption();break;case gi:return this.focusAndScrollOptionIntoView(),!0;case hi:case ui:return!0;case bi:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(ss.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=_.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(es(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=$i("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}ss.slottedOptionFilter=e=>es(e)&&!e.hidden,ss.TYPE_AHEAD_TIMEOUT_MS=1e3,pt([Re({mode:"boolean"})],ss.prototype,"disabled",void 0),pt([j],ss.prototype,"selectedIndex",void 0),pt([j],ss.prototype,"selectedOptions",void 0),pt([j],ss.prototype,"slottedOptions",void 0),pt([j],ss.prototype,"typeaheadBuffer",void 0);class os{}pt([j],os.prototype,"ariaActiveDescendant",void 0),pt([j],os.prototype,"ariaDisabled",void 0),pt([j],os.prototype,"ariaExpanded",void 0),pt([j],os.prototype,"ariaMultiSelectable",void 0),Zt(os,Ci),Zt(ss,os);const ns="above",rs="below";function as(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const ls=document.createElement("div");class ds{setProperty(e,t){M.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){M.queueUpdate((()=>this.target.removeProperty(e)))}}class cs extends ds{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class hs extends ds{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class us{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),_.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),M.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),M.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}pt([j],us.prototype,"target",void 0);class ps{constructor(e){this.target=e.style}setProperty(e,t){M.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){M.queueUpdate((()=>this.target.removeProperty(e)))}}class fs{setProperty(e,t){fs.properties[e]=t;for(const i of fs.roots.values())ms.getOrCreate(fs.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete fs.properties[e];for(const t of fs.roots.values())ms.getOrCreate(fs.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=fs;if(!t.has(e)){t.add(e);const i=ms.getOrCreate(this.normalizeRoot(e));for(const e in fs.properties)i.setProperty(e,fs.properties[e])}}static unregisterRoot(e){const{roots:t}=fs;if(t.has(e)){t.delete(e);const i=ms.getOrCreate(fs.normalizeRoot(e));for(const e in fs.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===ls?document:e}}fs.roots=new Set,fs.properties={};const bs=new WeakMap,gs=M.supportsAdoptedStyleSheets?class extends ds{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(xe.create([t]))}}:us,ms=Object.freeze({getOrCreate(e){if(bs.has(e))return bs.get(e);let t;return t=e===ls?new fs:e instanceof Document?M.supportsAdoptedStyleSheets?new cs:new hs:function(e){return e instanceof Ne}(e)?new gs(e):new ps(e),bs.set(e,t),t}});class vs extends ze{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=vs.uniqueId(),vs.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new vs({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return vs.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=ws.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof vs&&(t=this.alias(t)),ws.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ws.existsFor(e)&&ws.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ls,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!ws.existsFor(t)&&ws.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}vs.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),vs.tokensById=new Map;class ys{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=_.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,K))}}class xs{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),_.getNotifier(this).notify(e.id))}get(e){return _.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const $s=new WeakMap,Cs=new WeakMap;class ws{constructor(e){this.target=e,this.store=new xs,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=vs.getTokenById(t);if(i&&(i.notify(this.target),vs.isCSSDesignToken(i))){const t=this.parent,s=this.isReflecting(i);if(t){const o=t.get(i),n=e.get(i);o===n||s?o===n&&s&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else s||this.reflectToCSS(i)}}},$s.set(e,this),_.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ne?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return $s.get(e)||new ws(e)}static existsFor(e){return $s.has(e)}static findParent(e){if(ls!==e.target){let t=as(e.target);for(;null!==t;){if($s.has(t))return $s.get(t);t=as(t)}return ws.getOrCreate(ls)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==ls?ws.getOrCreate(ls):null}while(null!==i);return null}get parent(){return Cs.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=ws.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){vs.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),vs.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=ws.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Cs.get(this).removeChild(this)}}appendChild(e){e.parent&&Cs.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Cs.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),_.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),_.getNotifier(this.store).unsubscribe(e),e.parent===this&&Cs.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=as(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),ws.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),ws.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=vs.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);vs.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new ys(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}ws.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){ms.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ws.getOrCreate(t).get(e)))}remove(e,t){ms.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},pt([j],ws.prototype,"children",void 0);const ks=Object.freeze({create:function(e){return vs.from(e)},notifyConnection:e=>!(!e.isConnected||!ws.existsFor(e))&&(ws.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!ws.existsFor(e))&&(ws.getOrCreate(e).unbind(),!0),registerRoot(e=ls){fs.registerRoot(e)},unregisterRoot(e=ls){fs.unregisterRoot(e)}}),Is=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ts=new Map,Os=new Map;let Ss=null;const As=Ct.createInterface((e=>e.cachedCallback((e=>(null===Ss&&(Ss=new Es(null,e)),Ss))))),Rs=Object.freeze({tagFor:e=>Os.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Ct.findResponsibleContainer(e).get(As)},getOrCreate(e){if(!e)return null===Ss&&(Ss=Ct.getOrCreateDOMContainer().get(As)),Ss;const t=e.$$designSystem$$;if(t)return t;const i=Ct.getOrCreateDOMContainer(e);if(i.has(As,!1))return i.get(As);{const t=new Es(e,i);return i.register(Vt.instance(As,t)),t}}});class Es{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Is.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=Ts.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case Is.ignoreDuplicate:return;case Is.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=Ts.get(u)}}f&&((Os.has(h)||h===Xt)&&(h=class extends h{}),Ts.set(u,h),Os.set(h,u),c&&Os.set(c,u)),i.push(new Ds(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&ks.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class Ds{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Gt.define(this.name,e,this.container)}defineElement(e){this.definition=new Pe(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Rs.tagFor(e)}}const Bs="separator";class Ps extends Xt{constructor(){super(...arguments),this.role=Bs,this.orientation=ei}}pt([Re],Ps.prototype,"role",void 0),pt([Re],Ps.prototype,"orientation",void 0);class Fs extends ss{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=yi(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=yi(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=yi(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=yi(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case pi:return void this.checkFirstOption(i);case ai:return void this.checkNextOption(i);case ci:return void this.checkPreviousOption(i);case fi:return void this.checkLastOption(i);case gi:return this.focusAndScrollOptionIntoView(),!0;case ui:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case bi:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&M.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}pt([j],Fs.prototype,"activeIndex",void 0),pt([Re({mode:"boolean"})],Fs.prototype,"multiple",void 0),pt([Re({converter:Se})],Fs.prototype,"size",void 0);class Ls extends Xt{}class Hs extends(Ei(Ls)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Vs="text";class Ms extends Hs{constructor(){super(...arguments),this.type=Vs}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&M.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}pt([Re({attribute:"readonly",mode:"boolean"})],Ms.prototype,"readOnly",void 0),pt([Re({mode:"boolean"})],Ms.prototype,"autofocus",void 0),pt([Re],Ms.prototype,"placeholder",void 0),pt([Re],Ms.prototype,"type",void 0),pt([Re],Ms.prototype,"list",void 0),pt([Re({converter:Se})],Ms.prototype,"maxlength",void 0),pt([Re({converter:Se})],Ms.prototype,"minlength",void 0),pt([Re],Ms.prototype,"pattern",void 0),pt([Re({converter:Se})],Ms.prototype,"size",void 0),pt([Re({mode:"boolean"})],Ms.prototype,"spellcheck",void 0),pt([j],Ms.prototype,"defaultSlottedNodes",void 0);class Ns{}Zt(Ns,Ci),Zt(Ms,ct,Ns);class zs extends Xt{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}pt([Re({converter:Se})],zs.prototype,"value",void 0),pt([Re({converter:Se})],zs.prototype,"min",void 0),pt([Re({converter:Se})],zs.prototype,"max",void 0),pt([Re({mode:"boolean"})],zs.prototype,"paused",void 0),pt([j],zs.prototype,"percentComplete",void 0);class _s extends Xt{constructor(){super(...arguments),this.orientation=ei,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===di,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===li,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in mi&&this.isInsideFoundationToolbar)return!0;switch(t){case hi:this.checkFocusedRadio();break;case di:case ai:this.direction===vi.ltr?this.moveRight(e):this.moveLeft(e);break;case li:case ci:this.direction===vi.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?vi.rtl:vi.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}pt([Re({attribute:"readonly",mode:"boolean"})],_s.prototype,"readOnly",void 0),pt([Re({attribute:"disabled",mode:"boolean"})],_s.prototype,"disabled",void 0),pt([Re],_s.prototype,"name",void 0),pt([Re],_s.prototype,"value",void 0),pt([Re],_s.prototype,"orientation",void 0),pt([j],_s.prototype,"childItems",void 0),pt([j],_s.prototype,"slottedRadioButtons",void 0);class js extends Xt{}class qs extends(Di(js)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Us extends qs{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==bi)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}function Ks(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}pt([Re({attribute:"readonly",mode:"boolean"})],Us.prototype,"readOnly",void 0),pt([j],Us.prototype,"name",void 0),pt([j],Us.prototype,"defaultSlottedNodes",void 0);class Ws extends Fs{}class Gs extends(Ei(Ws)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Qs extends Gs{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=$i("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void M.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return _.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),_.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?ns:rs,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ns?~~e.top:~~t}get displayValue(){var e,t;return _.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{_.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{_.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(ss.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case bi:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case pi:case fi:e.preventDefault();break;case hi:e.preventDefault(),this.open=!this.open;break;case ui:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case gi:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ai||t===ci)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&_.notify(this,"displayValue")}}pt([Re({attribute:"open",mode:"boolean"})],Qs.prototype,"open",void 0),pt([function(e,t,i){return Object.assign({},i,{get:function(){return _.trackVolatile(),i.get.apply(this)}})}],Qs.prototype,"collapsible",null),pt([j],Qs.prototype,"control",void 0),pt([Re({attribute:"position"})],Qs.prototype,"positionAttribute",void 0),pt([j],Qs.prototype,"position",void 0),pt([j],Qs.prototype,"maxHeight",void 0);class Xs{}pt([j],Xs.prototype,"ariaControls",void 0),Zt(Xs,os),Zt(Qs,ct,Xs);class Ys extends Xt{}class Js extends Xt{}pt([Re({mode:"boolean"})],Js.prototype,"disabled",void 0);const Zs="horizontal";class eo extends Xt{constructor(){super(...arguments),this.orientation=Zs,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((e,t)=>{if("tab"===e.slot){const i=this.activeTabIndex===t&&this.isFocusableElement(e);this.activeindicator&&this.isFocusableElement(e)&&(this.showActiveIndicator=!0);const s=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-selected",i?"true":"false"),e.setAttribute("aria-controls",o),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",i?"0":"-1"),i&&(this.activetab=e)}e.style.gridColumn="",e.style.gridRow="",e.style[i]=`${t+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case li:e.preventDefault(),this.adjustBackward(e);break;case di:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ci:e.preventDefault(),this.adjustBackward(e);break;case ai:e.preventDefault(),this.adjustForward(e)}switch(e.key){case pi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case fi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${$i()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${$i()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Zs}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,i,s;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(t=0,i=this.tabs.length-1,(s=this.activeTabIndex+e)<t?i:s>i?t:s),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}pt([Re],eo.prototype,"orientation",void 0),pt([Re],eo.prototype,"activeid",void 0),pt([j],eo.prototype,"tabs",void 0),pt([j],eo.prototype,"tabpanels",void 0),pt([Re({mode:"boolean"})],eo.prototype,"activeindicator",void 0),pt([j],eo.prototype,"activeIndicatorRef",void 0),pt([j],eo.prototype,"showActiveIndicator",void 0),Zt(eo,ct);class to extends Xt{}class io extends(Ei(to)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const so="none";class oo extends io{constructor(){super(...arguments),this.resize=so,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}pt([Re({mode:"boolean"})],oo.prototype,"readOnly",void 0),pt([Re],oo.prototype,"resize",void 0),pt([Re({mode:"boolean"})],oo.prototype,"autofocus",void 0),pt([Re({attribute:"form"})],oo.prototype,"formId",void 0),pt([Re],oo.prototype,"list",void 0),pt([Re({converter:Se})],oo.prototype,"maxlength",void 0),pt([Re({converter:Se})],oo.prototype,"minlength",void 0),pt([Re],oo.prototype,"name",void 0),pt([Re],oo.prototype,"placeholder",void 0),pt([Re({converter:Se,mode:"fromView"})],oo.prototype,"cols",void 0),pt([Re({converter:Se,mode:"fromView"})],oo.prototype,"rows",void 0),pt([Re({mode:"boolean"})],oo.prototype,"spellcheck",void 0),pt([j],oo.prototype,"defaultSlottedNodes",void 0),Zt(oo,Ns);const no="not-allowed";function ro(e){return`:host([hidden]){display:none}:host{display:${e}}`}const ao=function(){if("boolean"==typeof ti)return ti;if("undefined"==typeof window||!window.document||!window.document.createElement)return ti=!1,ti;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),ti=!0}catch(e){ti=!1}finally{document.head.removeChild(e)}return ti}()?"focus-visible":"focus";function lo(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const co=new Map;let ho=!1;function uo(e,t){const i=ks.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}co.set(t,i)}return ho||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{lo(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),lo(e)}))}(co),ho=!0),i}const po=uo("background","--vscode-editor-background").withDefault("#1e1e1e"),fo=uo("border-width").withDefault(1),bo=uo("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");uo("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const go=uo("corner-radius").withDefault(0),mo=uo("design-unit").withDefault(4),vo=uo("disabled-opacity").withDefault(.4),yo=uo("focus-border","--vscode-focusBorder").withDefault("#007fd4"),xo=uo("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");uo("font-weight","--vscode-font-weight").withDefault("400");const $o=uo("foreground","--vscode-foreground").withDefault("#cccccc"),Co=uo("input-height").withDefault("26"),wo=uo("input-min-width").withDefault("100px"),ko=uo("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Io=uo("type-ramp-base-line-height").withDefault("normal"),To=uo("type-ramp-minus1-font-size").withDefault("11px"),Oo=uo("type-ramp-minus1-line-height").withDefault("16px");uo("type-ramp-minus2-font-size").withDefault("9px"),uo("type-ramp-minus2-line-height").withDefault("16px"),uo("type-ramp-plus1-font-size").withDefault("16px"),uo("type-ramp-plus1-line-height").withDefault("24px");const So=uo("scrollbarWidth").withDefault("10px"),Ao=uo("scrollbarHeight").withDefault("10px"),Ro=uo("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Eo=uo("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Do=uo("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Bo=uo("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Po=uo("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Fo=uo("button-border","--vscode-button-border").withDefault("transparent"),Lo=uo("button-icon-background").withDefault("transparent"),Ho=uo("button-icon-corner-radius").withDefault("5px"),Vo=uo("button-icon-outline-offset").withDefault(0),Mo=uo("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),No=uo("button-icon-padding").withDefault("3px"),zo=uo("button-primary-background","--vscode-button-background").withDefault("#0e639c"),_o=uo("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),jo=uo("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),qo=uo("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Uo=uo("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Ko=uo("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Wo=uo("button-padding-horizontal").withDefault("11px"),Go=uo("button-padding-vertical").withDefault("4px"),Qo=uo("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Xo=uo("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Yo=uo("checkbox-corner-radius").withDefault(3);uo("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Jo=uo("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),Zo=uo("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),en=uo("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),tn=uo("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),sn=uo("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),on=uo("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");uo("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const nn=uo("dropdown-list-max-height").withDefault("200px"),rn=uo("input-background","--vscode-input-background").withDefault("#3c3c3c"),an=uo("input-foreground","--vscode-input-foreground").withDefault("#cccccc");uo("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const ln=uo("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),dn=uo("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),cn=uo("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),hn=uo("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),un=uo("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),pn=uo("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");uo("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),uo("panel-view-border","--vscode-panel-border").withDefault("#80808059");const fn=uo("tag-corner-radius").withDefault("2px");(class extends Ti{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}).compose({baseName:"badge",template:Ii,styles:(e,t)=>_e`
	${ro("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${xo};
		font-size: ${To};
		line-height: ${Oo};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Bo};
		border: calc(${fo} * 1px) solid ${Fo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Po};
		display: flex;
		height: calc(${mo} * 4px);
		justify-content: center;
		min-width: calc(${mo} * 4px + 2px);
		min-height: calc(${mo} * 4px + 2px);
		padding: 3px 6px;
	}
`});const bn=_e`
	${ro("inline-flex")} :host {
		outline: none;
		font-family: ${xo};
		font-size: ${ko};
		line-height: ${Io};
		color: ${_o};
		background: ${zo};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Go} ${Wo};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${fo} * 1px) solid ${Fo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${jo};
	}
	:host(:active) {
		background: ${zo};
	}
	.control:${ao} {
		outline: calc(${fo} * 1px) solid ${yo};
		outline-offset: calc(${fo} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${vo};
		background: ${zo};
		cursor: ${no};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${mo} * 4px);
		height: calc(${mo} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,gn=_e`
	:host([appearance='primary']) {
		background: ${zo};
		color: ${_o};
	}
	:host([appearance='primary']:hover) {
		background: ${jo};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${zo};
	}
	:host([appearance='primary']) .control:${ao} {
		outline: calc(${fo} * 1px) solid ${yo};
		outline-offset: calc(${fo} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${zo};
	}
`,mn=_e`
	:host([appearance='secondary']) {
		background: ${qo};
		color: ${Uo};
	}
	:host([appearance='secondary']:hover) {
		background: ${Ko};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${qo};
	}
	:host([appearance='secondary']) .control:${ao} {
		outline: calc(${fo} * 1px) solid ${yo};
		outline-offset: calc(${fo} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${qo};
	}
`,vn=_e`
	:host([appearance='icon']) {
		background: ${Lo};
		border-radius: ${Ho};
		color: ${$o};
	}
	:host([appearance='icon']:hover) {
		background: ${Mo};
		outline: 1px dotted ${bo};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${No};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Mo};
	}
	:host([appearance='icon']) .control:${ao} {
		outline: calc(${fo} * 1px) solid ${yo};
		outline-offset: ${Vo};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Lo};
	}
`;class yn extends Fi{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){if("appearance"===e&&"icon"===i){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}!function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([Re],yn.prototype,"appearance",void 0);const xn=yn.compose({baseName:"button",template:(e,t)=>ye`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Je("control")}
    >
        ${ut(0,t)}
        <span class="content" part="content">
            <slot ${at("defaultSlottedContent")}></slot>
        </span>
        ${ht(0,t)}
    </button>
`,styles:(e,t)=>_e`
	${bn}
	${gn}
	${mn}
	${vn}
`,shadowOptions:{delegatesFocus:!0}});(class extends Zi{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}).compose({baseName:"checkbox",template:(e,t)=>ye`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${mo} * 1px) 0;
		user-select: none;
		font-size: ${ko};
		line-height: ${Io};
	}
	.control {
		position: relative;
		width: calc(${mo} * 4px + 2px);
		height: calc(${mo} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Yo} * 1px);
		border: calc(${fo} * 1px) solid ${Xo};
		background: ${Qo};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${xo};
		color: ${$o};
		padding-inline-start: calc(${mo} * 2px + 2px);
		margin-inline-end: calc(${mo} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${$o};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${$o};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Qo};
		border-color: ${Xo};
	}
	:host(:enabled) .control:active {
		background: ${Qo};
		border-color: ${yo};
	}
	:host(:${ao}) .control {
		border: calc(${fo} * 1px) solid ${yo};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${no};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${vo};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});(class extends Wi{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}).compose({baseName:"data-grid",baseClass:Wi,template:(e,t)=>{const i=function(e){const t=e.tagFor(Ki);return ye`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(Ki);return ye`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${dt({property:"rowElements",filter:ot("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>_e`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});(class extends Ki{}).compose({baseName:"data-grid-row",baseClass:Ki,template:(e,t)=>{const i=function(e){const t=e.tagFor(Xi);return ye`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(Xi);return ye`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return ye`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${dt({property:"cellElements",filter:ot('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${at("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>_e`
	:host {
		display: grid;
		padding: calc((${mo} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${po};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${en};
		outline: 1px dotted ${bo};
		outline-offset: -1px;
	}
`});(class extends Xi{}).compose({baseName:"data-grid-cell",baseClass:Xi,template:(e,t)=>ye`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>_e`
	:host {
		padding: calc(${mo} * 1px) calc(${mo} * 3px);
		color: ${$o};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${xo};
		font-size: ${ko};
		line-height: ${Io};
		font-weight: 400;
		border: solid calc(${fo} * 1px) transparent;
		border-radius: calc(${go} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${ao}),
	:host(:focus),
	:host(:active) {
		background: ${Jo};
		border: solid calc(${fo} * 1px) ${yo};
		color: ${Zo};
		outline: none;
	}
	:host(:${ao}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Zo} !important;
	}
`});(class extends Ps{}).compose({baseName:"divider",template:(e,t)=>ye`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>_e`
	${ro("block")} :host {
		border: none;
		border-top: calc(${fo} * 1px) solid ${tn};
		box-sizing: content-box;
		height: 0;
		margin: calc(${mo} * 1px) 0;
		width: 100%;
	}
`});(class extends Qs{}).compose({baseName:"dropdown",template:(e,t)=>ye`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Ze((e=>e.collapsible),ye`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Je("control")}
                >
                    ${ut(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${ht(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Je("listbox")}
        >
            <slot
                ${at({filter:ss.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		background: ${sn};
		box-sizing: border-box;
		color: ${$o};
		contain: contents;
		font-family: ${xo};
		height: calc(${Co} * 1px);
		position: relative;
		user-select: none;
		min-width: ${wo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${fo} * 1px) solid ${on};
		border-radius: calc(${go} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ko};
		line-height: ${Io};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${sn};
		border: calc(${fo} * 1px) solid ${yo};
		border-radius: calc(${go} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${nn};
		padding: 0 0 calc(${mo} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${ao}) .control {
		border-color: ${yo};
	}
	:host(:not([disabled]):hover) {
		background: ${sn};
		border-color: ${on};
	}
	:host(:${ao}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Jo};
		border: calc(${fo} * 1px) solid ${yo};
		color: ${Zo};
	}
	:host([disabled]) {
		cursor: ${no};
		opacity: ${vo};
	}
	:host([disabled]) .control {
		cursor: ${no};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${sn};
		color: ${$o};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${yo};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${yo};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Co} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Co} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${mo} * 4px);
		min-width: calc(${mo} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});(class extends wi{}).compose({baseName:"link",template:(e,t)=>ye`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Je("control")}
    >
        ${ut(0,t)}
        <span class="content" part="content">
            <slot ${at("defaultSlottedContent")}></slot>
        </span>
        ${ht(0,t)}
    </a>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${dn};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${xo};
		font-size: ${ko};
		line-height: ${Io};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${fo} * 1px) solid transparent;
		border-radius: calc(${go} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${ln};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${ln};
	}
	:host(:${ao}) .control,
	:host(:focus) .control {
		border: calc(${fo} * 1px) solid ${yo};
	}
`,shadowOptions:{delegatesFocus:!0}});(class extends ts{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}).compose({baseName:"option",template:(e,t)=>ye`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ut(0,t)}
        <span class="content" part="content">
            <slot ${at("content")}></slot>
        </span>
        ${ht(0,t)}
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${go};
		border: calc(${fo} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${$o};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ko};
		line-height: ${Io};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${mo} / 2) * 1px)
			calc((${mo} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${ao}) {
		border-color: ${yo};
		background: ${Jo};
		color: ${$o};
	}
	:host([aria-selected='true']) {
		background: ${Jo};
		border: calc(${fo} * 1px) solid ${yo};
		color: ${Zo};
	}
	:host(:active) {
		background: ${Jo};
		color: ${Zo};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Jo};
		border: calc(${fo} * 1px) solid ${yo};
		color: ${Zo};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Jo};
		color: ${$o};
	}
	:host([disabled]) {
		cursor: ${no};
		opacity: ${vo};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`});(class extends eo{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Zs);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}).compose({baseName:"panels",template:(e,t)=>ye`
    <template class="${e=>e.orientation}">
        ${ut(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${at("tabs")}></slot>

            ${Ze((e=>e.showActiveIndicator),ye`
                    <div
                        ${Je("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ht(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${at("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>_e`
	${ro("grid")} :host {
		box-sizing: border-box;
		font-family: ${xo};
		font-size: ${ko};
		line-height: ${Io};
		color: ${$o};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${mo} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${mo} * 1px) calc(${mo} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${mo} / 4) * 1px);
		justify-self: center;
		background: ${un};
		margin: 0;
		border-radius: calc(${go} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});(class extends Js{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}).compose({baseName:"panel-tab",template:(e,t)=>ye`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${xo};
		font-size: ${ko};
		line-height: ${Io};
		height: calc(${mo} * 7px);
		padding: calc(${mo} * 1px) 0;
		color: ${pn};
		fill: currentcolor;
		border-radius: calc(${go} * 1px);
		border: solid calc(${fo} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${un};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${un};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${un};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${un};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${un};
		fill: currentcolor;
	}
	:host(:${ao}) {
		outline: none;
		border: solid calc(${fo} * 1px) ${hn};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${mo} * 2px);
	}
`});(class extends Ys{}).compose({baseName:"panel-view",template:(e,t)=>ye`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>_e`
	${ro("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${fo} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${ko};
		line-height: ${Io};
		padding: 10px calc((${mo} + 2) * 1px);
	}
`});(class extends zs{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}).compose({baseName:"progress-ring",template:(e,t)=>ye`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Ze((e=>"number"==typeof e.value),ye`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Ze((e=>"number"!=typeof e.value),ye`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>_e`
	${ro("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${mo} * 7px);
		width: calc(${mo} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${mo} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${cn};
		stroke-width: calc(${mo} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});(class extends _s{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}).compose({baseName:"radio-group",template:(e,t)=>ye`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===ei?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${at({property:"slottedRadioButtons",filter:ot("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>_e`
	${ro("flex")} :host {
		align-items: flex-start;
		margin: calc(${mo} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${$o};
		font-size: ${ko};
		margin: calc(${mo} * 1px) 0;
	}
`});(class extends Us{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}).compose({baseName:"radio",template:(e,t)=>ye`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${ko};
		line-height: ${Io};
		margin: calc(${mo} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Qo};
		border-radius: 999px;
		border: calc(${fo} * 1px) solid ${Xo};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${mo} * 4px);
		position: relative;
		outline: none;
		width: calc(${mo} * 4px);
	}
	.label {
		color: ${$o};
		cursor: pointer;
		font-family: ${xo};
		margin-inline-end: calc(${mo} * 2px + 2px);
		padding-inline-start: calc(${mo} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${$o};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${mo} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Qo};
		border-color: ${Xo};
	}
	:host(:not([disabled])) .control:active {
		background: ${Qo};
		border-color: ${yo};
	}
	:host(:${ao}) .control {
		border: calc(${fo} * 1px) solid ${yo};
	}
	:host([aria-checked='true']) .control {
		background: ${Qo};
		border: calc(${fo} * 1px) solid ${Xo};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Qo};
		border: calc(${fo} * 1px) solid ${Xo};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Qo};
		border: calc(${fo} * 1px) solid ${yo};
	}
	:host([aria-checked="true"]:${ao}:not([disabled])) .control {
		border: calc(${fo} * 1px) solid ${yo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${no};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${vo};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});(class extends Ti{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}).compose({baseName:"tag",template:Ii,styles:(e,t)=>_e`
	${ro("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${xo};
		font-size: ${To};
		line-height: ${Oo};
	}
	.control {
		background-color: ${Bo};
		border: calc(${fo} * 1px) solid ${Fo};
		border-radius: ${fn};
		color: ${Po};
		padding: calc(${mo} * 0.5px) calc(${mo} * 1px);
		text-transform: uppercase;
	}
`});(class extends oo{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}).compose({baseName:"text-area",template:(e,t)=>ye`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==so?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Je("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-block")} :host {
		font-family: ${xo};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${an};
		background: ${rn};
		border-radius: calc(${go} * 1px);
		border: calc(${fo} * 1px) solid ${on};
		font: inherit;
		font-size: ${ko};
		line-height: ${Io};
		padding: calc(${mo} * 2px + 1px);
		width: 100%;
		min-width: ${wo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${rn};
		border-color: ${on};
	}
	.control:active:enabled {
		background: ${rn};
		border-color: ${yo};
	}
	.control:hover,
	.control:${ao},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${So};
		height: ${Ao};
	}
	.control::-webkit-scrollbar-corner {
		background: ${rn};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Ro};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Eo};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Do};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${yo};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${$o};
		cursor: pointer;
		font-size: ${ko};
		line-height: ${Io};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${no};
	}
	:host([disabled]) {
		opacity: ${vo};
	}
	:host([disabled]) .control {
		border-color: ${on};
	}
`,shadowOptions:{delegatesFocus:!0}});(class extends Ms{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}).compose({baseName:"text-field",template:(e,t)=>ye`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${at({property:"defaultSlottedNodes",filter:Ks})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ut(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Je("control")}
            />
            ${ht(0,t)}
        </div>
    </template>
`,styles:(e,t)=>_e`
	${ro("inline-block")} :host {
		font-family: ${xo};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${an};
		background: ${rn};
		border-radius: calc(${go} * 1px);
		border: calc(${fo} * 1px) solid ${on};
		height: calc(${Co} * 1px);
		min-width: ${wo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${mo} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${mo} * 2px + 1px);
		font-size: ${ko};
		line-height: ${Io};
	}
	.control:hover,
	.control:${ao},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${$o};
		cursor: pointer;
		font-size: ${ko};
		line-height: ${Io};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${mo} * 4px);
		height: calc(${mo} * 4px);
	}
	.start {
		margin-inline-start: calc(${mo} * 2px);
	}
	.end {
		margin-inline-end: calc(${mo} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${rn};
		border-color: ${on};
	}
	:host(:active:not([disabled])) .root {
		background: ${rn};
		border-color: ${yo};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${yo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${no};
	}
	:host([disabled]) {
		opacity: ${vo};
	}
	:host([disabled]) .control {
		border-color: ${on};
	}
`,shadowOptions:{delegatesFocus:!0}});const $n=new class{constructor(){"function"==typeof acquireVsCodeApi&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();{const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}};function Cn(t){let i,s,o,n,u,p,f,b;return{c(){i=l("main"),s=l("h1"),s.textContent="Coco Editor 🥥",o=d(),n=l("vscode-editor"),u=d(),p=l("vscode-button"),p.textContent="Howdy!",h(n,"language","typescript"),h(n,"value","console.log('Hello, world!')"),c(i,"class","svelte-7fxbnh")},m(e,a){var l,d,c,h;!function(e,t,i){e.insertBefore(t,i||null)}(e,i,a),r(i,s),r(i,o),r(i,n),r(i,u),r(i,p),f||(l=p,d="click",c=t[0],l.addEventListener(d,c,h),b=()=>l.removeEventListener(d,c,h),f=!0)},p:e,i:e,o:e,d(e){e&&a(i),f=!1,b()}}}function wn(e){return function(e){return Rs.getOrCreate(e).withPrefix("vscode")}().register(xn()),[function(){$n.postMessage({command:"hello",text:"Coco is good! 🥥"})}]}return new class extends class{$destroy(){!function(e,t){const i=e.$$;null!==i.fragment&&(s(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),O(this,e,wn,Cn,n,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

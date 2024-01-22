var app=function(){"use strict";function e(){}function t(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function n(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function a(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function d(){return e=" ",document.createTextNode(e);var e}let c;function h(e){c=e}const u=[],p=[],f=[],b=[],g=Promise.resolve();let m=!1;function v(e){f.push(e)}const y=new Set;let x=0;function $(){const e=c;do{for(;x<u.length;){const e=u[x];x++,h(e),C(e.$$)}for(h(null),u.length=0,x=0;p.length;)p.pop()();for(let e=0;e<f.length;e+=1){const t=f[e];y.has(t)||(y.add(t),t())}f.length=0}while(u.length);for(;b.length;)b.pop()();m=!1,y.clear(),h(e)}function C(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const w=new Set;function k(e,t){-1===e.$$.dirty[0]&&(u.push(e),m||(m=!0,g.then($)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(n,r,l,d,u,p,f,b=[-1]){const g=c;h(n);const m=n.$$={fragment:null,ctx:null,props:p,update:e,not_equal:u,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:i(),dirty:b,skip_bound:!1,root:r.target||g.$$.root};f&&f(m.root);let y=!1;if(m.ctx=l?l(n,r.props||{},((e,t,...i)=>{const s=i.length?i[0]:t;return m.ctx&&u(m.ctx[e],m.ctx[e]=s)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](s),y&&k(n,e)),t})):[],m.update(),y=!0,s(m.before_update),m.fragment=!!d&&d(m.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);m.fragment&&m.fragment.l(e),e.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&((x=n.$$.fragment)&&x.i&&(w.delete(x),x.i(C))),function(e,i,n,r){const{fragment:a,on_mount:l,on_destroy:d,after_update:c}=e.$$;a&&a.m(i,n),r||v((()=>{const i=l.map(t).filter(o);d?d.push(...i):s(i),e.$$.on_mount=[]})),c.forEach(v)}(n,r.target,r.anchor,r.customElement),$()}var x,C;h(g)}const T=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===T.trustedTypes&&(T.trustedTypes={createPolicy:(e,t)=>t});const O={configurable:!1,enumerable:!1,writable:!1};void 0===T.FAST&&Reflect.defineProperty(T,"FAST",Object.assign({value:Object.create(null)},O));const S=T.FAST;if(void 0===S.getById){const e=Object.create(null);Reflect.defineProperty(S,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},O))}const A=Object.freeze([]);function R(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const E=T.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function o(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&T.requestAnimationFrame(o),e.push(t)},process:o})})),D=T.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let B=D;const P=`fast-${Math.random().toString(36).substring(2,8)}`,F=`${P}{`,L=`}${P}`,H=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(B!==D)throw new Error("The HTML policy can only be set once.");B=e},createHTML:e=>B.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(P),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${P}:`,"")),createInterpolationPlaceholder:e=>`${F}${e}${L}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${P}:${e}--\x3e`,queueUpdate:E.enqueue,processUpdates:E.process,nextUpdate:()=>new Promise(E.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class V{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class M{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new V(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new V(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const N=S.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=H.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new M(e))),i}const r=R();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class l extends V{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new l(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function z(e,t){N.defineProperty(e,t)}const _=S.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class j{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return _.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){_.set(e)}}N.defineProperty(j.prototype,"index"),N.defineProperty(j.prototype,"length");const q=Object.seal(new j);class U{constructor(){this.targetIndex=0}}class K extends U{constructor(){super(...arguments),this.createPlaceholder=H.createInterpolationPlaceholder}}class W extends U{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return H.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function G(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=N.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Q(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function X(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Y(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function J(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Z(e){H.setAttribute(this.target,this.targetName,e)}function ee(e){H.setBooleanAttribute(this.target,this.targetName,e)}function te(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function ie(e){this.target[this.targetName]=e}function se(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class oe extends K{constructor(e){super(),this.binding=e,this.bind=G,this.unbind=X,this.updateTarget=Z,this.isBindingVolatile=N.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ie,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>H.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ee;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Q,this.unbind=J;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=se)}}targetAtContent(){this.updateTarget=te,this.unbind=Y}createBehavior(e){return new ne(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ne{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){j.setEvent(e);const t=this.binding(this.source,this.context);j.setEvent(null),!0!==t&&e.preventDefault()}}let re=null;class ae{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){re=this}static borrow(e){const t=re||new ae;return t.directives=e,t.reset(),re=null,t}}function le(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new oe(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const de=L.length;function ce(e,t){const i=t.split(F);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(L);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+de)}""!==r&&s.push(r)}return s}function he(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=ce(e,a);let d=null;null===l?i&&(d=new oe((()=>a)),d.targetName=r.name):d=le(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function ue(e,t,i){const s=ce(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const pe=document.createRange();class fe{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){pe.setStartBefore(e[0].firstChild),pe.setEndAfter(e[e.length-1].lastChild),pe.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class be{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=H.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=ae.borrow(t);he(s,e,!0);const o=s.behaviorFactories;s.reset();const n=H.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:he(s,r);break;case 3:ue(s,r,n);break;case 8:H.isMarker(r)&&s.addFactory(t[H.extractDirectiveIndexFromMarker(r)])}let a=0;(H.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=H.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new fe(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,q),s.appendTo(t),s}}const ge=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function me(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof be){const e=r;r=()=>e}if("function"==typeof r&&(r=new oe(r)),r instanceof K){const e=ge.exec(n);null!==e&&(r.targetName=e[2])}r instanceof U?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new be(s,i)}class ve{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function ye(e){return e.map((e=>e instanceof ve?ye(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function xe(e){return e.map((e=>e instanceof ve?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}ve.create=(()=>{if(H.supportsAdoptedStyleSheets){const e=new Map;return t=>new $e(t,e)}return e=>new we(e)})();class $e extends ve{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=xe(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=ye(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let Ce=0;class we extends ve{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=xe(e),this.styleSheets=ye(e),this.styleClass="fast-style-class-"+ ++Ce}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const ke=Object.freeze({locate:R()}),Ie={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},Te={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class Oe{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=Ie)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return N.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||H.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;H.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":H.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(ke.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new Oe(e,s)):i.push(new Oe(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function Se(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),ke.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const Ae={mode:"open"},Re={},Ee=S.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class De{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=Oe.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?Ae:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Ae),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Re:Object.assign(Object.assign({},Re),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?ve.create(t.styles):t.styles instanceof ve?t.styles:ve.create([t.styles])}get isDefined(){return!!Ee.getByType(this.type)}define(e=customElements){const t=this.type;if(Ee.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)N.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}De.forType=Ee.getByType;const Be=new WeakMap,Pe={bubbles:!0,composed:!0,cancelable:!0};function Fe(e){return e.shadowRoot||Be.get(e)||null}class Le extends M{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&Be.set(e,t)}const s=N.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return N.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,N.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Fe(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=Fe(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,q)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,q);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,q);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Pe),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=Fe(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||H.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=De.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new Le(e,i)}}function He(e){return class extends e{constructor(){super(),Le.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const Ve=Object.assign(He(HTMLElement),{from:e=>He(e),define:(e,t)=>new De(e,t).define().type});class Me{createCSS(){return""}createBehavior(){}}function Ne(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof Me){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof ve||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=ve.create(i);return s.length&&o.withBehaviors(...s),o}function ze(e,t,i){return{index:e,removed:t,addedCount:i}}function _e(e,t,i,s,o,n){let r=0,a=0;const l=Math.min(i-t,n-o);if(0===t&&0===o&&(r=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,l)),i===e.length&&n===s.length&&(a=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,l-r)),o+=r,n-=a,(i-=a)-(t+=r)==0&&n-o==0)return A;if(t===i){const e=ze(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[ze(t,[],i-t)];const d=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(2),i--;continue}if(0===i){o.push(3),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(0):(o.push(1),s=n),t--,i--):l===r?(o.push(3),t--,s=r):(o.push(2),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),c=[];let h,u=t,p=o;for(let e=0;e<d.length;++e)switch(d[e]){case 0:void 0!==h&&(c.push(h),h=void 0),u++,p++;break;case 1:void 0===h&&(h=ze(u,[],0)),h.addedCount++,u++,h.removed.push(s[p]),p++;break;case 2:void 0===h&&(h=ze(u,[],0)),h.addedCount++,u++;break;case 3:void 0===h&&(h=ze(u,[],0)),h.removed.push(s[p]),p++}return void 0!==h&&c.push(h),c}const je=Array.prototype.push;function qe(e,t,i,s){const o=ze(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);je.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);je.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}function Ue(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];qe(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(_e(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}let Ke=!1;function We(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Ge extends V{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,H.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,H.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?Ue(this.source,e):_e(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}class Qe{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Xe(e){return new W("fast-ref",Qe,e)}function Ye(e,t){const i="function"==typeof t?t:()=>t;return(t,s)=>e(t,s)?i(t,s):null}function Je(e,t,i,s){e.bind(t[i],s)}function Ze(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class et{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Je,this.itemsBindingObserver=N.binding(t,this,i),this.templateBindingObserver=N.binding(s,this,o),n.positioning&&(this.bindView=Ze)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=A);const t=this.itemsObserver,i=this.itemsObserver=N.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),m=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=m&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(fe.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l){n(a[e],t,e,i)}else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class tt extends U{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=H.createBlockPlaceholder,function(){if(Ke)return;Ke=!0,N.setArrayObserverFactory((e=>new Ge(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(ze(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(We(ze(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(ze(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(We(ze(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(We(ze(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=N.isVolatileBinding(e),this.isTemplateBindingVolatile=N.isVolatileBinding(t)}createBehavior(e){return new et(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function it(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}class st{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=N.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(A),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ot extends st{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function nt(e){return"string"==typeof e&&(e={property:e}),new W("fast-slotted",ot,e)}class rt extends st{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function at(e){return"string"==typeof e&&(e={property:e}),new W("fast-children",rt,e)}class lt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const dt=(e,t)=>me`
    <span
        part="end"
        ${Xe("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Xe("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ct=(e,t)=>me`
    <span
        part="start"
        ${Xe("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Xe("start")}
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
function ht(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}me`
    <span part="end" ${Xe("endContainer")}>
        <slot
            name="end"
            ${Xe("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,me`
    <span part="start" ${Xe("startContainer")}>
        <slot
            name="start"
            ${Xe("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;const ut=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=ut.get(i);void 0===s&&ut.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=ut.get(t);if(void 0!==i)return i.get(e)});class pt{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ft(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new wt(s,e,t))}}function ft(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],jt(o)||(t[o]=e[o]);return t}const bt=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new wt(e,1,e),transient:e=>new wt(e,2,e)}),gt=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:bt.singleton})}),mt=new Map;function vt(e){return t=>Reflect.getOwnMetadata(e,t)}let yt=null;const xt=Object.freeze({createContainer:e=>new Bt(null,Object.assign({},gt.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:xt.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Et,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||xt.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Bt(e,Object.assign({},gt.default,t,{parentLocator:xt.findParentContainer})):yt||(yt=new Bt(null,Object.assign({},gt.default,t,{parentLocator:()=>null}))),getDesignParamtypes:vt("design:paramtypes"),getAnnotationParamtypes:vt("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=mt.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=xt.getDesignParamtypes(e),s=xt.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?ft(xt.getDependencies(i)):[]}else t=ft(s);else if(void 0===s)t=ft(i);else{t=ft(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],jt(r)||(t[r]=s[r])}}else t=ft(i);mt.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?xt.findResponsibleContainer(this):xt.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof Ve){const s=this.$fastController,n=()=>{xt.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Mt,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(t)xt.defineProperty(e,t,n,o);else{xt.getOrCreateAnnotationParamTypes(e)[i]=n}};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new pt(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=xt.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)xt.defineProperty(t,i,e[0]);else{const i=s?xt.getOrCreateAnnotationParamTypes(s.value):xt.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return Lt.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=Ct)=>(e.register=function(t){return Lt.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),$t=xt.createInterface("Container");xt.inject;const Ct={scoped:!1};class wt{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function kt(e){return this.get(e)}function It(e,t){return t(e)}class Tt{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(kt,e)):new this.Type(...this.dependencies.map(kt,e),...t),null==this.transformers?i:this.transformers.reduce(It,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ot={$isResolver:!0,resolve:(e,t)=>t};function St(e){return"function"==typeof e.register}function At(e){return function(e){return St(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Rt=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Et="__DI_LOCATE_PARENT__",Dt=new Map;class Bt{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set($t,Ot),e instanceof Node&&e.addEventListener(Et,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Nt(t))if(St(t))t.register(this,r);else if(void 0!==t.prototype)Lt.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],Nt(s)&&(St(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){Ht(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof wt&&4===s.strategy?s.state.push(t):i.set(e,new wt(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ht(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=At(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ht(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=At(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Ht(e);const i=this;let s,o=i;if(t){let t=A;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(Vt(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return Vt(s,o,i);if(o=o.parent,null==o)return A}return A}getFactory(e){let t=Dt.get(e);if(void 0===t){if(zt(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Dt.set(e,t=new Tt(e,xt.getDependencies(e)))}return t}registerFactory(e,t){Dt.set(e,t)}createChild(e){return new Bt(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Rt.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(St(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const Pt=new WeakMap;function Ft(e){return function(t,i,s){if(Pt.has(s))return Pt.get(s);const o=e(t,i,s);return Pt.set(s,o),o}}const Lt=Object.freeze({instance:(e,t)=>new wt(e,0,t),singleton:(e,t)=>new wt(e,1,t),transient:(e,t)=>new wt(e,2,t),callback:(e,t)=>new wt(e,3,t),cachedCallback:(e,t)=>new wt(e,3,Ft(t)),aliasTo:(e,t)=>new wt(t,5,e)});function Ht(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Vt(e,t,i){if(e instanceof wt&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const Mt="(anonymous)";function Nt(e){return"object"==typeof e&&null!==e||"function"==typeof e}const zt=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),_t={};function jt(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=_t[e];if(void 0!==t)return t;const i=e.length;if(0===i)return _t[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return _t[e]=!1;return _t[e]=!0}default:return!1}}function qt(e){return`${e.toLowerCase()}:presentation`}const Ut=new Map,Kt=Object.freeze({define(e,t,i){const s=qt(e);void 0===Ut.get(s)?Ut.set(s,t):Ut.set(s,!1),i.register(Lt.instance(s,t))},forTag(e,t){const i=qt(e),s=Ut.get(i);if(!1===s){return xt.findResponsibleContainer(t).get(i)}return s||null}});class Wt{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?ve.create(t):t instanceof ve?t:ve.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Gt extends Ve{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Kt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Xt(this===Gt?class extends Gt{}:this,e,t)}}function Qt(e,t,i){return"function"==typeof e?e(t,i):e}ht([z],Gt.prototype,"template",void 0),ht([z],Gt.prototype,"styles",void 0);class Xt{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Wt(Qt(i.template,e,i),Qt(i.styles,e,i));e.definePresentation(t);let o=Qt(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Qt(i.elementOptions,e,i),shadowOptions:o,attributes:Qt(i.attributes,e,i)})}})}}function Yt(e,...t){const i=ke.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))}));ke.locate(t).forEach((e=>i.push(e)))}))}const Jt="horizontal";let Zt;const ei="focus",ti="focusin",ii="focusout",si="keydown";var oi;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(oi||(oi={}));const ni="ArrowDown",ri="ArrowLeft",ai="ArrowRight",li="ArrowUp",di="Enter",ci="Escape",hi="Home",ui="End",pi=" ",fi="Tab",bi={ArrowDown:ni,ArrowLeft:ri,ArrowRight:ai,ArrowUp:li};var gi;function mi(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}!function(e){e.ltr="ltr",e.rtl="rtl"}(gi||(gi={}));let vi=0;function yi(e=""){return`${e}${vi++}`}class xi{}ht([Se({attribute:"aria-atomic"})],xi.prototype,"ariaAtomic",void 0),ht([Se({attribute:"aria-busy"})],xi.prototype,"ariaBusy",void 0),ht([Se({attribute:"aria-controls"})],xi.prototype,"ariaControls",void 0),ht([Se({attribute:"aria-current"})],xi.prototype,"ariaCurrent",void 0),ht([Se({attribute:"aria-describedby"})],xi.prototype,"ariaDescribedby",void 0),ht([Se({attribute:"aria-details"})],xi.prototype,"ariaDetails",void 0),ht([Se({attribute:"aria-disabled"})],xi.prototype,"ariaDisabled",void 0),ht([Se({attribute:"aria-errormessage"})],xi.prototype,"ariaErrormessage",void 0),ht([Se({attribute:"aria-flowto"})],xi.prototype,"ariaFlowto",void 0),ht([Se({attribute:"aria-haspopup"})],xi.prototype,"ariaHaspopup",void 0),ht([Se({attribute:"aria-hidden"})],xi.prototype,"ariaHidden",void 0),ht([Se({attribute:"aria-invalid"})],xi.prototype,"ariaInvalid",void 0),ht([Se({attribute:"aria-keyshortcuts"})],xi.prototype,"ariaKeyshortcuts",void 0),ht([Se({attribute:"aria-label"})],xi.prototype,"ariaLabel",void 0),ht([Se({attribute:"aria-labelledby"})],xi.prototype,"ariaLabelledby",void 0),ht([Se({attribute:"aria-live"})],xi.prototype,"ariaLive",void 0),ht([Se({attribute:"aria-owns"})],xi.prototype,"ariaOwns",void 0),ht([Se({attribute:"aria-relevant"})],xi.prototype,"ariaRelevant",void 0),ht([Se({attribute:"aria-roledescription"})],xi.prototype,"ariaRoledescription",void 0);class $i extends Gt{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}ht([Se],$i.prototype,"download",void 0),ht([Se],$i.prototype,"href",void 0),ht([Se],$i.prototype,"hreflang",void 0),ht([Se],$i.prototype,"ping",void 0),ht([Se],$i.prototype,"referrerpolicy",void 0),ht([Se],$i.prototype,"rel",void 0),ht([Se],$i.prototype,"target",void 0),ht([Se],$i.prototype,"type",void 0),ht([z],$i.prototype,"defaultSlottedContent",void 0);class Ci{}ht([Se({attribute:"aria-expanded"})],Ci.prototype,"ariaExpanded",void 0),Yt(Ci,xi),Yt($i,lt,Ci);const wi=(e,t)=>me`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class ki extends Gt{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}ht([Se({attribute:"fill"})],ki.prototype,"fill",void 0),ht([Se({attribute:"color"})],ki.prototype,"color",void 0),ht([Se({mode:"boolean"})],ki.prototype,"circular",void 0);const Ii="form-associated-proxy",Ti="ElementInternals",Oi=Ti in window&&"setFormValue"in window.ElementInternals.prototype,Si=new WeakMap;function Ai(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Oi}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return A}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),H.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),H.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Oi)return null;let e=Si.get(this);return e||(e=this.attachInternals(),Si.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ii),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ii)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===di)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return Se({mode:"boolean"})(t.prototype,"disabled"),Se({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),Se({attribute:"current-value"})(t.prototype,"currentValue"),Se(t.prototype,"name"),Se({mode:"boolean"})(t.prototype,"required"),z(t.prototype,"value"),t}function Ri(e){class t extends(Ai(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return Se({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),Se({attribute:"current-checked",converter:Ie})(i.prototype,"currentChecked"),z(i.prototype,"defaultChecked"),z(i.prototype,"checked"),i}class Ei extends Gt{}class Di extends(Ai(Ei)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bi extends Di{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}ht([Se({mode:"boolean"})],Bi.prototype,"autofocus",void 0),ht([Se({attribute:"form"})],Bi.prototype,"formId",void 0),ht([Se],Bi.prototype,"formaction",void 0),ht([Se],Bi.prototype,"formenctype",void 0),ht([Se],Bi.prototype,"formmethod",void 0),ht([Se({mode:"boolean"})],Bi.prototype,"formnovalidate",void 0),ht([Se],Bi.prototype,"formtarget",void 0),ht([Se],Bi.prototype,"type",void 0),ht([z],Bi.prototype,"defaultSlottedContent",void 0);class Pi{}ht([Se({attribute:"aria-expanded"})],Pi.prototype,"ariaExpanded",void 0),ht([Se({attribute:"aria-pressed"})],Pi.prototype,"ariaPressed",void 0),Yt(Pi,xi),Yt(Bi,lt,Pi);const Fi="none",Li="default",Hi="sticky",Vi="default",Mi="columnheader",Ni="rowheader",zi="default",_i="header",ji="sticky-header";class qi extends Gt{constructor(){super(...arguments),this.rowType=zi,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new tt((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ii,this.handleFocusout),this.addEventListener(si,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ii,this.handleFocusout),this.removeEventListener(si,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case ri:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ai:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case hi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ui:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===zi&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===zi&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}ht([Se({attribute:"grid-template-columns"})],qi.prototype,"gridTemplateColumns",void 0),ht([Se({attribute:"row-type"})],qi.prototype,"rowType",void 0),ht([z],qi.prototype,"rowData",void 0),ht([z],qi.prototype,"columnDefinitions",void 0),ht([z],qi.prototype,"cellItemTemplate",void 0),ht([z],qi.prototype,"headerCellItemTemplate",void 0),ht([z],qi.prototype,"rowIndex",void 0),ht([z],qi.prototype,"isActiveRow",void 0),ht([z],qi.prototype,"activeCellItemTemplate",void 0),ht([z],qi.prototype,"defaultCellItemTemplate",void 0),ht([z],qi.prototype,"defaultHeaderCellItemTemplate",void 0),ht([z],qi.prototype,"cellElements",void 0);class Ui extends Gt{constructor(){super(),this.noTabbing=!1,this.generateHeader=Li,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,H.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=Ui.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=Ui.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new tt((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(ei,this.handleFocus),this.addEventListener(si,this.handleKeydown),this.addEventListener(ii,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),H.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(ei,this.handleFocus),this.removeEventListener(si,this.handleKeydown),this.removeEventListener(ii,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case li:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ni:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===Hi&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case hi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ui:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,H.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Fi&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Hi?ji:_i,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}Ui.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),ht([Se({attribute:"no-tabbing",mode:"boolean"})],Ui.prototype,"noTabbing",void 0),ht([Se({attribute:"generate-header"})],Ui.prototype,"generateHeader",void 0),ht([Se({attribute:"grid-template-columns"})],Ui.prototype,"gridTemplateColumns",void 0),ht([z],Ui.prototype,"rowsData",void 0),ht([z],Ui.prototype,"columnDefinitions",void 0),ht([z],Ui.prototype,"rowItemTemplate",void 0),ht([z],Ui.prototype,"cellItemTemplate",void 0),ht([z],Ui.prototype,"headerCellItemTemplate",void 0),ht([z],Ui.prototype,"focusRowIndex",void 0),ht([z],Ui.prototype,"focusColumnIndex",void 0),ht([z],Ui.prototype,"defaultRowItemTemplate",void 0),ht([z],Ui.prototype,"rowElementTag",void 0),ht([z],Ui.prototype,"rowElements",void 0);const Ki=me`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,Wi=me`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class Gi extends Gt{constructor(){super(...arguments),this.cellType=Vi,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(ti,this.handleFocusin),this.addEventListener(ii,this.handleFocusout),this.addEventListener(si,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(ti,this.handleFocusin),this.removeEventListener(ii,this.handleFocusout),this.removeEventListener(si,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Mi){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Vi&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Mi&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case di:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Mi){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case ci:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Mi:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Wi.render(this,this);break;case void 0:case Ni:case Vi:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Ki.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}ht([Se({attribute:"cell-type"})],Gi.prototype,"cellType",void 0),ht([Se({attribute:"grid-column"})],Gi.prototype,"gridColumn",void 0),ht([z],Gi.prototype,"rowData",void 0),ht([z],Gi.prototype,"columnDefinition",void 0);class Qi extends Gt{}class Xi extends(Ri(Qi)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Yi extends Xi{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===pi)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}function Ji(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}ht([Se({attribute:"readonly",mode:"boolean"})],Yi.prototype,"readOnly",void 0),ht([z],Yi.prototype,"defaultSlottedNodes",void 0),ht([z],Yi.prototype,"indeterminate",void 0);class Zi extends Gt{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),N.notify(this,"value")}get value(){var e;return N.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}ht([z],Zi.prototype,"checked",void 0),ht([z],Zi.prototype,"content",void 0),ht([z],Zi.prototype,"defaultSelected",void 0),ht([Se({mode:"boolean"})],Zi.prototype,"disabled",void 0),ht([Se({attribute:"selected",mode:"boolean"})],Zi.prototype,"selectedAttribute",void 0),ht([z],Zi.prototype,"selected",void 0),ht([Se({attribute:"value",mode:"fromView"})],Zi.prototype,"initialValue",void 0);class es{}ht([z],es.prototype,"ariaChecked",void 0),ht([z],es.prototype,"ariaPosInSet",void 0),ht([z],es.prototype,"ariaSelected",void 0),ht([z],es.prototype,"ariaSetSize",void 0),Yt(es,xi),Yt(Zi,lt,es);class ts extends Gt{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return N.track(this,"options"),this._options}set options(e){this._options=e,N.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){if("selected"===t)ts.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),ts.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case hi:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ni:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case li:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ui:e.preventDefault(),this.selectLastOption();break;case fi:return this.focusAndScrollOptionIntoView(),!0;case di:case ci:return!0;case pi:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(ts.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=N.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Ji(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=yi("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}ts.slottedOptionFilter=e=>Ji(e)&&!e.hidden,ts.TYPE_AHEAD_TIMEOUT_MS=1e3,ht([Se({mode:"boolean"})],ts.prototype,"disabled",void 0),ht([z],ts.prototype,"selectedIndex",void 0),ht([z],ts.prototype,"selectedOptions",void 0),ht([z],ts.prototype,"slottedOptions",void 0),ht([z],ts.prototype,"typeaheadBuffer",void 0);class is{}ht([z],is.prototype,"ariaActiveDescendant",void 0),ht([z],is.prototype,"ariaDisabled",void 0),ht([z],is.prototype,"ariaExpanded",void 0),ht([z],is.prototype,"ariaMultiSelectable",void 0),Yt(is,xi),Yt(ts,is);const ss="above",os="below";function ns(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const rs=document.createElement("div");class as{setProperty(e,t){H.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){H.queueUpdate((()=>this.target.removeProperty(e)))}}class ls extends as{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class ds extends as{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class cs{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),N.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),H.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),H.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}ht([z],cs.prototype,"target",void 0);class hs{constructor(e){this.target=e.style}setProperty(e,t){H.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){H.queueUpdate((()=>this.target.removeProperty(e)))}}class us{setProperty(e,t){us.properties[e]=t;for(const i of us.roots.values())bs.getOrCreate(us.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete us.properties[e];for(const t of us.roots.values())bs.getOrCreate(us.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=us;if(!t.has(e)){t.add(e);const i=bs.getOrCreate(this.normalizeRoot(e));for(const e in us.properties)i.setProperty(e,us.properties[e])}}static unregisterRoot(e){const{roots:t}=us;if(t.has(e)){t.delete(e);const i=bs.getOrCreate(us.normalizeRoot(e));for(const e in us.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===rs?document:e}}us.roots=new Set,us.properties={};const ps=new WeakMap,fs=H.supportsAdoptedStyleSheets?class extends as{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(ve.create([t]))}}:cs,bs=Object.freeze({getOrCreate(e){if(ps.has(e))return ps.get(e);let t;return t=e===rs?new us:e instanceof Document?H.supportsAdoptedStyleSheets?new ls:new ds:function(e){return e instanceof Ve}(e)?new fs(e):new hs(e),ps.set(e,t),t}});class gs extends Me{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=gs.uniqueId(),gs.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new gs({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return gs.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=$s.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof gs&&(t=this.alias(t)),$s.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),$s.existsFor(e)&&$s.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(rs,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!$s.existsFor(t)&&$s.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}gs.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),gs.tokensById=new Map;class ms{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=N.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,q))}}class vs{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),N.getNotifier(this).notify(e.id))}get(e){return N.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const ys=new WeakMap,xs=new WeakMap;class $s{constructor(e){this.target=e,this.store=new vs,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=gs.getTokenById(t);if(i&&(i.notify(this.target),gs.isCSSDesignToken(i))){const t=this.parent,s=this.isReflecting(i);if(t){const o=t.get(i),n=e.get(i);o===n||s?o===n&&s&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else s||this.reflectToCSS(i)}}},ys.set(e,this),N.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ve?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return ys.get(e)||new $s(e)}static existsFor(e){return ys.has(e)}static findParent(e){if(rs!==e.target){let t=ns(e.target);for(;null!==t;){if(ys.has(t))return ys.get(t);t=ns(t)}return $s.getOrCreate(rs)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==rs?$s.getOrCreate(rs):null}while(null!==i);return null}get parent(){return xs.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=$s.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){gs.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),gs.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=$s.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){xs.get(this).removeChild(this)}}appendChild(e){e.parent&&xs.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));xs.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),N.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),N.getNotifier(this.store).unsubscribe(e),e.parent===this&&xs.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=ns(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),$s.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),$s.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=gs.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);gs.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new ms(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}$s.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){bs.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue($s.getOrCreate(t).get(e)))}remove(e,t){bs.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},ht([z],$s.prototype,"children",void 0);const Cs=Object.freeze({create:function(e){return gs.from(e)},notifyConnection:e=>!(!e.isConnected||!$s.existsFor(e))&&($s.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!$s.existsFor(e))&&($s.getOrCreate(e).unbind(),!0),registerRoot(e=rs){us.registerRoot(e)},unregisterRoot(e=rs){us.unregisterRoot(e)}}),ws=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ks=new Map,Is=new Map;let Ts=null;const Os=xt.createInterface((e=>e.cachedCallback((e=>(null===Ts&&(Ts=new As(null,e)),Ts))))),Ss=Object.freeze({tagFor:e=>Is.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return xt.findResponsibleContainer(e).get(Os)},getOrCreate(e){if(!e)return null===Ts&&(Ts=xt.getOrCreateDOMContainer().get(Os)),Ts;const t=e.$$designSystem$$;if(t)return t;const i=xt.getOrCreateDOMContainer(e);if(i.has(Os,!1))return i.get(Os);{const t=new As(e,i);return i.register(Lt.instance(Os,t)),t}}});class As{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ws.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=ks.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case ws.ignoreDuplicate:return;case ws.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=ks.get(u)}}f&&((Is.has(h)||h===Gt)&&(h=class extends h{}),ks.set(u,h),Is.set(h,u),c&&Is.set(c,u)),i.push(new Rs(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Cs.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class Rs{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Kt.define(this.name,e,this.container)}defineElement(e){this.definition=new De(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ss.tagFor(e)}}const Es="separator";class Ds extends Gt{constructor(){super(...arguments),this.role=Es,this.orientation=Jt}}ht([Se],Ds.prototype,"role",void 0),ht([Se],Ds.prototype,"orientation",void 0);class Bs extends ts{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=mi(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=mi(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=mi(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=mi(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case hi:return void this.checkFirstOption(i);case ni:return void this.checkNextOption(i);case li:return void this.checkPreviousOption(i);case ui:return void this.checkLastOption(i);case fi:return this.focusAndScrollOptionIntoView(),!0;case ci:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case pi:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&H.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}ht([z],Bs.prototype,"activeIndex",void 0),ht([Se({mode:"boolean"})],Bs.prototype,"multiple",void 0),ht([Se({converter:Te})],Bs.prototype,"size",void 0);class Ps extends Gt{}class Fs extends(Ai(Ps)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ls="text";class Hs extends Fs{constructor(){super(...arguments),this.type=Ls}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&H.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}ht([Se({attribute:"readonly",mode:"boolean"})],Hs.prototype,"readOnly",void 0),ht([Se({mode:"boolean"})],Hs.prototype,"autofocus",void 0),ht([Se],Hs.prototype,"placeholder",void 0),ht([Se],Hs.prototype,"type",void 0),ht([Se],Hs.prototype,"list",void 0),ht([Se({converter:Te})],Hs.prototype,"maxlength",void 0),ht([Se({converter:Te})],Hs.prototype,"minlength",void 0),ht([Se],Hs.prototype,"pattern",void 0),ht([Se({converter:Te})],Hs.prototype,"size",void 0),ht([Se({mode:"boolean"})],Hs.prototype,"spellcheck",void 0),ht([z],Hs.prototype,"defaultSlottedNodes",void 0);class Vs{}Yt(Vs,xi),Yt(Hs,lt,Vs);class Ms extends Gt{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}ht([Se({converter:Te})],Ms.prototype,"value",void 0),ht([Se({converter:Te})],Ms.prototype,"min",void 0),ht([Se({converter:Te})],Ms.prototype,"max",void 0),ht([Se({mode:"boolean"})],Ms.prototype,"paused",void 0),ht([z],Ms.prototype,"percentComplete",void 0);class Ns extends Gt{constructor(){super(...arguments),this.orientation=Jt,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===ai,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ri,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in bi&&this.isInsideFoundationToolbar)return!0;switch(t){case di:this.checkFocusedRadio();break;case ai:case ni:this.direction===gi.ltr?this.moveRight(e):this.moveLeft(e);break;case ri:case li:this.direction===gi.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?gi.rtl:gi.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}ht([Se({attribute:"readonly",mode:"boolean"})],Ns.prototype,"readOnly",void 0),ht([Se({attribute:"disabled",mode:"boolean"})],Ns.prototype,"disabled",void 0),ht([Se],Ns.prototype,"name",void 0),ht([Se],Ns.prototype,"value",void 0),ht([Se],Ns.prototype,"orientation",void 0),ht([z],Ns.prototype,"childItems",void 0),ht([z],Ns.prototype,"slottedRadioButtons",void 0);class zs extends Gt{}class _s extends(Ri(zs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class js extends _s{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==pi)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}function qs(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}ht([Se({attribute:"readonly",mode:"boolean"})],js.prototype,"readOnly",void 0),ht([z],js.prototype,"name",void 0),ht([z],js.prototype,"defaultSlottedNodes",void 0);class Us extends Bs{}class Ks extends(Ai(Us)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Ws extends Ks{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=yi("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void H.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return N.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),N.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?ss:os,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ss?~~e.top:~~t}get displayValue(){var e,t;return N.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{N.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{N.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(ts.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case pi:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case hi:case ui:e.preventDefault();break;case di:e.preventDefault(),this.open=!this.open;break;case ci:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case fi:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ni||t===li)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&N.notify(this,"displayValue")}}ht([Se({attribute:"open",mode:"boolean"})],Ws.prototype,"open",void 0),ht([function(e,t,i){return Object.assign({},i,{get:function(){return N.trackVolatile(),i.get.apply(this)}})}],Ws.prototype,"collapsible",null),ht([z],Ws.prototype,"control",void 0),ht([Se({attribute:"position"})],Ws.prototype,"positionAttribute",void 0),ht([z],Ws.prototype,"position",void 0),ht([z],Ws.prototype,"maxHeight",void 0);class Gs{}ht([z],Gs.prototype,"ariaControls",void 0),Yt(Gs,is),Yt(Ws,lt,Gs);class Qs extends Gt{}class Xs extends Gt{}ht([Se({mode:"boolean"})],Xs.prototype,"disabled",void 0);const Ys="horizontal";class Js extends Gt{constructor(){super(...arguments),this.orientation=Ys,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((e,t)=>{if("tab"===e.slot){const i=this.activeTabIndex===t&&this.isFocusableElement(e);this.activeindicator&&this.isFocusableElement(e)&&(this.showActiveIndicator=!0);const s=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-selected",i?"true":"false"),e.setAttribute("aria-controls",o),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",i?"0":"-1"),i&&(this.activetab=e)}e.style.gridColumn="",e.style.gridRow="",e.style[i]=`${t+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ri:e.preventDefault(),this.adjustBackward(e);break;case ai:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case li:e.preventDefault(),this.adjustBackward(e);break;case ni:e.preventDefault(),this.adjustForward(e)}switch(e.key){case hi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ui:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${yi()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${yi()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Ys}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,i,s;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(t=0,i=this.tabs.length-1,(s=this.activeTabIndex+e)<t?i:s>i?t:s),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}ht([Se],Js.prototype,"orientation",void 0),ht([Se],Js.prototype,"activeid",void 0),ht([z],Js.prototype,"tabs",void 0),ht([z],Js.prototype,"tabpanels",void 0),ht([Se({mode:"boolean"})],Js.prototype,"activeindicator",void 0),ht([z],Js.prototype,"activeIndicatorRef",void 0),ht([z],Js.prototype,"showActiveIndicator",void 0),Yt(Js,lt);class Zs extends Gt{}class eo extends(Ai(Zs)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const to="none";class io extends eo{constructor(){super(...arguments),this.resize=to,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}ht([Se({mode:"boolean"})],io.prototype,"readOnly",void 0),ht([Se],io.prototype,"resize",void 0),ht([Se({mode:"boolean"})],io.prototype,"autofocus",void 0),ht([Se({attribute:"form"})],io.prototype,"formId",void 0),ht([Se],io.prototype,"list",void 0),ht([Se({converter:Te})],io.prototype,"maxlength",void 0),ht([Se({converter:Te})],io.prototype,"minlength",void 0),ht([Se],io.prototype,"name",void 0),ht([Se],io.prototype,"placeholder",void 0),ht([Se({converter:Te,mode:"fromView"})],io.prototype,"cols",void 0),ht([Se({converter:Te,mode:"fromView"})],io.prototype,"rows",void 0),ht([Se({mode:"boolean"})],io.prototype,"spellcheck",void 0),ht([z],io.prototype,"defaultSlottedNodes",void 0),Yt(io,Vs);const so="not-allowed";function oo(e){return`:host([hidden]){display:none}:host{display:${e}}`}const no=function(){if("boolean"==typeof Zt)return Zt;if("undefined"==typeof window||!window.document||!window.document.createElement)return Zt=!1,Zt;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Zt=!0}catch(e){Zt=!1}finally{document.head.removeChild(e)}return Zt}()?"focus-visible":"focus";function ro(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const ao=new Map;let lo=!1;function co(e,t){const i=Cs.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}ao.set(t,i)}return lo||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{ro(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),ro(e)}))}(ao),lo=!0),i}const ho=co("background","--vscode-editor-background").withDefault("#1e1e1e"),uo=co("border-width").withDefault(1),po=co("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");co("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const fo=co("corner-radius").withDefault(0),bo=co("design-unit").withDefault(4),go=co("disabled-opacity").withDefault(.4),mo=co("focus-border","--vscode-focusBorder").withDefault("#007fd4"),vo=co("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");co("font-weight","--vscode-font-weight").withDefault("400");const yo=co("foreground","--vscode-foreground").withDefault("#cccccc"),xo=co("input-height").withDefault("26"),$o=co("input-min-width").withDefault("100px"),Co=co("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),wo=co("type-ramp-base-line-height").withDefault("normal"),ko=co("type-ramp-minus1-font-size").withDefault("11px"),Io=co("type-ramp-minus1-line-height").withDefault("16px");co("type-ramp-minus2-font-size").withDefault("9px"),co("type-ramp-minus2-line-height").withDefault("16px"),co("type-ramp-plus1-font-size").withDefault("16px"),co("type-ramp-plus1-line-height").withDefault("24px");const To=co("scrollbarWidth").withDefault("10px"),Oo=co("scrollbarHeight").withDefault("10px"),So=co("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Ao=co("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Ro=co("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Eo=co("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Do=co("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Bo=co("button-border","--vscode-button-border").withDefault("transparent"),Po=co("button-icon-background").withDefault("transparent"),Fo=co("button-icon-corner-radius").withDefault("5px"),Lo=co("button-icon-outline-offset").withDefault(0),Ho=co("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Vo=co("button-icon-padding").withDefault("3px"),Mo=co("button-primary-background","--vscode-button-background").withDefault("#0e639c"),No=co("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),zo=co("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),_o=co("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),jo=co("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),qo=co("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Uo=co("button-padding-horizontal").withDefault("11px"),Ko=co("button-padding-vertical").withDefault("4px"),Wo=co("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Go=co("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Qo=co("checkbox-corner-radius").withDefault(3);co("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Xo=co("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),Yo=co("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Jo=co("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Zo=co("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),en=co("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),tn=co("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");co("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const sn=co("dropdown-list-max-height").withDefault("200px"),on=co("input-background","--vscode-input-background").withDefault("#3c3c3c"),nn=co("input-foreground","--vscode-input-foreground").withDefault("#cccccc");co("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const rn=co("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),an=co("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ln=co("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),dn=co("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),cn=co("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),hn=co("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");co("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),co("panel-view-border","--vscode-panel-border").withDefault("#80808059");const un=co("tag-corner-radius").withDefault("2px");(class extends ki{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}).compose({baseName:"badge",template:wi,styles:(e,t)=>Ne`
	${oo("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${vo};
		font-size: ${ko};
		line-height: ${Io};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Eo};
		border: calc(${uo} * 1px) solid ${Bo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Do};
		display: flex;
		height: calc(${bo} * 4px);
		justify-content: center;
		min-width: calc(${bo} * 4px + 2px);
		min-height: calc(${bo} * 4px + 2px);
		padding: 3px 6px;
	}
`});const pn=Ne`
	${oo("inline-flex")} :host {
		outline: none;
		font-family: ${vo};
		font-size: ${Co};
		line-height: ${wo};
		color: ${No};
		background: ${Mo};
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
		padding: ${Ko} ${Uo};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${uo} * 1px) solid ${Bo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${zo};
	}
	:host(:active) {
		background: ${Mo};
	}
	.control:${no} {
		outline: calc(${uo} * 1px) solid ${mo};
		outline-offset: calc(${uo} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${go};
		background: ${Mo};
		cursor: ${so};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${bo} * 4px);
		height: calc(${bo} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,fn=Ne`
	:host([appearance='primary']) {
		background: ${Mo};
		color: ${No};
	}
	:host([appearance='primary']:hover) {
		background: ${zo};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Mo};
	}
	:host([appearance='primary']) .control:${no} {
		outline: calc(${uo} * 1px) solid ${mo};
		outline-offset: calc(${uo} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Mo};
	}
`,bn=Ne`
	:host([appearance='secondary']) {
		background: ${_o};
		color: ${jo};
	}
	:host([appearance='secondary']:hover) {
		background: ${qo};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${_o};
	}
	:host([appearance='secondary']) .control:${no} {
		outline: calc(${uo} * 1px) solid ${mo};
		outline-offset: calc(${uo} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${_o};
	}
`,gn=Ne`
	:host([appearance='icon']) {
		background: ${Po};
		border-radius: ${Fo};
		color: ${yo};
	}
	:host([appearance='icon']:hover) {
		background: ${Ho};
		outline: 1px dotted ${po};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Vo};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Ho};
	}
	:host([appearance='icon']) .control:${no} {
		outline: calc(${uo} * 1px) solid ${mo};
		outline-offset: ${Lo};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Po};
	}
`;class mn extends Bi{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){if("appearance"===e&&"icon"===i){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}!function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([Se],mn.prototype,"appearance",void 0);const vn=mn.compose({baseName:"button",template:(e,t)=>me`
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
        ${Xe("control")}
    >
        ${ct(0,t)}
        <span class="content" part="content">
            <slot ${nt("defaultSlottedContent")}></slot>
        </span>
        ${dt(0,t)}
    </button>
`,styles:(e,t)=>Ne`
	${pn}
	${fn}
	${bn}
	${gn}
`,shadowOptions:{delegatesFocus:!0}});(class extends Yi{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}).compose({baseName:"checkbox",template:(e,t)=>me`
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
            <slot ${nt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${bo} * 1px) 0;
		user-select: none;
		font-size: ${Co};
		line-height: ${wo};
	}
	.control {
		position: relative;
		width: calc(${bo} * 4px + 2px);
		height: calc(${bo} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Qo} * 1px);
		border: calc(${uo} * 1px) solid ${Go};
		background: ${Wo};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${vo};
		color: ${yo};
		padding-inline-start: calc(${bo} * 2px + 2px);
		margin-inline-end: calc(${bo} * 2px + 2px);
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
		fill: ${yo};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${yo};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Wo};
		border-color: ${Go};
	}
	:host(:enabled) .control:active {
		background: ${Wo};
		border-color: ${mo};
	}
	:host(:${no}) .control {
		border: calc(${uo} * 1px) solid ${mo};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${so};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${go};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});(class extends Ui{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}).compose({baseName:"data-grid",baseClass:Ui,template:(e,t)=>{const i=function(e){const t=e.tagFor(qi);return me`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(qi);return me`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${at({property:"rowElements",filter:it("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Ne`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});(class extends qi{}).compose({baseName:"data-grid-row",baseClass:qi,template:(e,t)=>{const i=function(e){const t=e.tagFor(Gi);return me`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(Gi);return me`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return me`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${at({property:"cellElements",filter:it('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${nt("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Ne`
	:host {
		display: grid;
		padding: calc((${bo} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${ho};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Jo};
		outline: 1px dotted ${po};
		outline-offset: -1px;
	}
`});(class extends Gi{}).compose({baseName:"data-grid-cell",baseClass:Gi,template:(e,t)=>me`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Ne`
	:host {
		padding: calc(${bo} * 1px) calc(${bo} * 3px);
		color: ${yo};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${vo};
		font-size: ${Co};
		line-height: ${wo};
		font-weight: 400;
		border: solid calc(${uo} * 1px) transparent;
		border-radius: calc(${fo} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${no}),
	:host(:focus),
	:host(:active) {
		background: ${Xo};
		border: solid calc(${uo} * 1px) ${mo};
		color: ${Yo};
		outline: none;
	}
	:host(:${no}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Yo} !important;
	}
`});(class extends Ds{}).compose({baseName:"divider",template:(e,t)=>me`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Ne`
	${oo("block")} :host {
		border: none;
		border-top: calc(${uo} * 1px) solid ${Zo};
		box-sizing: content-box;
		height: 0;
		margin: calc(${bo} * 1px) 0;
		width: 100%;
	}
`});(class extends Ws{}).compose({baseName:"dropdown",template:(e,t)=>me`
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
        ${Ye((e=>e.collapsible),me`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Xe("control")}
                >
                    ${ct(0,t)}
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
                    ${dt(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Xe("listbox")}
        >
            <slot
                ${nt({filter:ts.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		background: ${en};
		box-sizing: border-box;
		color: ${yo};
		contain: contents;
		font-family: ${vo};
		height: calc(${xo} * 1px);
		position: relative;
		user-select: none;
		min-width: ${$o};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${uo} * 1px) solid ${tn};
		border-radius: calc(${fo} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Co};
		line-height: ${wo};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${en};
		border: calc(${uo} * 1px) solid ${mo};
		border-radius: calc(${fo} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${sn};
		padding: 0 0 calc(${bo} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${no}) .control {
		border-color: ${mo};
	}
	:host(:not([disabled]):hover) {
		background: ${en};
		border-color: ${tn};
	}
	:host(:${no}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Xo};
		border: calc(${uo} * 1px) solid ${mo};
		color: ${Yo};
	}
	:host([disabled]) {
		cursor: ${so};
		opacity: ${go};
	}
	:host([disabled]) .control {
		cursor: ${so};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${en};
		color: ${yo};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${mo};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${mo};
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
		bottom: calc(${xo} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${xo} * 1px);
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
		min-height: calc(${bo} * 4px);
		min-width: calc(${bo} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});(class extends $i{}).compose({baseName:"link",template:(e,t)=>me`
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
        ${Xe("control")}
    >
        ${ct(0,t)}
        <span class="content" part="content">
            <slot ${nt("defaultSlottedContent")}></slot>
        </span>
        ${dt(0,t)}
    </a>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${an};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${vo};
		font-size: ${Co};
		line-height: ${wo};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${uo} * 1px) solid transparent;
		border-radius: calc(${fo} * 1px);
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
		color: ${rn};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${rn};
	}
	:host(:${no}) .control,
	:host(:focus) .control {
		border: calc(${uo} * 1px) solid ${mo};
	}
`,shadowOptions:{delegatesFocus:!0}});(class extends Zi{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}).compose({baseName:"option",template:(e,t)=>me`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ct(0,t)}
        <span class="content" part="content">
            <slot ${nt("content")}></slot>
        </span>
        ${dt(0,t)}
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${fo};
		border: calc(${uo} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${yo};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Co};
		line-height: ${wo};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${bo} / 2) * 1px)
			calc((${bo} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${no}) {
		border-color: ${mo};
		background: ${Xo};
		color: ${yo};
	}
	:host([aria-selected='true']) {
		background: ${Xo};
		border: calc(${uo} * 1px) solid ${mo};
		color: ${Yo};
	}
	:host(:active) {
		background: ${Xo};
		color: ${Yo};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Xo};
		border: calc(${uo} * 1px) solid ${mo};
		color: ${Yo};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Xo};
		color: ${yo};
	}
	:host([disabled]) {
		cursor: ${so};
		opacity: ${go};
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
`});(class extends Js{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Ys);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}).compose({baseName:"panels",template:(e,t)=>me`
    <template class="${e=>e.orientation}">
        ${ct(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${nt("tabs")}></slot>

            ${Ye((e=>e.showActiveIndicator),me`
                    <div
                        ${Xe("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${dt(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${nt("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Ne`
	${oo("grid")} :host {
		box-sizing: border-box;
		font-family: ${vo};
		font-size: ${Co};
		line-height: ${wo};
		color: ${yo};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${bo} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${bo} * 1px) calc(${bo} * 1px) 0;
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
		height: calc((${bo} / 4) * 1px);
		justify-self: center;
		background: ${cn};
		margin: 0;
		border-radius: calc(${fo} * 1px);
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
`});(class extends Xs{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}).compose({baseName:"panel-tab",template:(e,t)=>me`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${vo};
		font-size: ${Co};
		line-height: ${wo};
		height: calc(${bo} * 7px);
		padding: calc(${bo} * 1px) 0;
		color: ${hn};
		fill: currentcolor;
		border-radius: calc(${fo} * 1px);
		border: solid calc(${uo} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${cn};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${cn};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${cn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${cn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${cn};
		fill: currentcolor;
	}
	:host(:${no}) {
		outline: none;
		border: solid calc(${uo} * 1px) ${dn};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${bo} * 2px);
	}
`});(class extends Qs{}).compose({baseName:"panel-view",template:(e,t)=>me`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Ne`
	${oo("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${uo} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Co};
		line-height: ${wo};
		padding: 10px calc((${bo} + 2) * 1px);
	}
`});(class extends Ms{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}).compose({baseName:"progress-ring",template:(e,t)=>me`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Ye((e=>"number"==typeof e.value),me`
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
        ${Ye((e=>"number"!=typeof e.value),me`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Ne`
	${oo("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${bo} * 7px);
		width: calc(${bo} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${bo} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${ln};
		stroke-width: calc(${bo} / 2 * 1px);
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
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});(class extends Ns{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}).compose({baseName:"radio-group",template:(e,t)=>me`
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
            class="positioning-region ${e=>e.orientation===Jt?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${nt({property:"slottedRadioButtons",filter:it("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Ne`
	${oo("flex")} :host {
		align-items: flex-start;
		margin: calc(${bo} * 1px) 0;
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
		color: ${yo};
		font-size: ${Co};
		margin: calc(${bo} * 1px) 0;
	}
`});(class extends js{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}).compose({baseName:"radio",template:(e,t)=>me`
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
            <slot ${nt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Co};
		line-height: ${wo};
		margin: calc(${bo} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Wo};
		border-radius: 999px;
		border: calc(${uo} * 1px) solid ${Go};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${bo} * 4px);
		position: relative;
		outline: none;
		width: calc(${bo} * 4px);
	}
	.label {
		color: ${yo};
		cursor: pointer;
		font-family: ${vo};
		margin-inline-end: calc(${bo} * 2px + 2px);
		padding-inline-start: calc(${bo} * 2px + 2px);
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
		background: ${yo};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${bo} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Wo};
		border-color: ${Go};
	}
	:host(:not([disabled])) .control:active {
		background: ${Wo};
		border-color: ${mo};
	}
	:host(:${no}) .control {
		border: calc(${uo} * 1px) solid ${mo};
	}
	:host([aria-checked='true']) .control {
		background: ${Wo};
		border: calc(${uo} * 1px) solid ${Go};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Wo};
		border: calc(${uo} * 1px) solid ${Go};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Wo};
		border: calc(${uo} * 1px) solid ${mo};
	}
	:host([aria-checked="true"]:${no}:not([disabled])) .control {
		border: calc(${uo} * 1px) solid ${mo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${so};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${go};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});(class extends ki{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}).compose({baseName:"tag",template:wi,styles:(e,t)=>Ne`
	${oo("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${vo};
		font-size: ${ko};
		line-height: ${Io};
	}
	.control {
		background-color: ${Eo};
		border: calc(${uo} * 1px) solid ${Bo};
		border-radius: ${un};
		color: ${Do};
		padding: calc(${bo} * 0.5px) calc(${bo} * 1px);
		text-transform: uppercase;
	}
`});(class extends io{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}).compose({baseName:"text-area",template:(e,t)=>me`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==to?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${nt("defaultSlottedNodes")}></slot>
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
            ${Xe("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-block")} :host {
		font-family: ${vo};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${nn};
		background: ${on};
		border-radius: calc(${fo} * 1px);
		border: calc(${uo} * 1px) solid ${tn};
		font: inherit;
		font-size: ${Co};
		line-height: ${wo};
		padding: calc(${bo} * 2px + 1px);
		width: 100%;
		min-width: ${$o};
		resize: none;
	}
	.control:hover:enabled {
		background: ${on};
		border-color: ${tn};
	}
	.control:active:enabled {
		background: ${on};
		border-color: ${mo};
	}
	.control:hover,
	.control:${no},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${To};
		height: ${Oo};
	}
	.control::-webkit-scrollbar-corner {
		background: ${on};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${So};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Ao};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Ro};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${mo};
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
		color: ${yo};
		cursor: pointer;
		font-size: ${Co};
		line-height: ${wo};
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
		cursor: ${so};
	}
	:host([disabled]) {
		opacity: ${go};
	}
	:host([disabled]) .control {
		border-color: ${tn};
	}
`,shadowOptions:{delegatesFocus:!0}});(class extends Hs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}).compose({baseName:"text-field",template:(e,t)=>me`
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
                ${nt({property:"defaultSlottedNodes",filter:qs})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ct(0,t)}
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
                ${Xe("control")}
            />
            ${dt(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Ne`
	${oo("inline-block")} :host {
		font-family: ${vo};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${nn};
		background: ${on};
		border-radius: calc(${fo} * 1px);
		border: calc(${uo} * 1px) solid ${tn};
		height: calc(${xo} * 1px);
		min-width: ${$o};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${bo} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${bo} * 2px + 1px);
		font-size: ${Co};
		line-height: ${wo};
	}
	.control:hover,
	.control:${no},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${yo};
		cursor: pointer;
		font-size: ${Co};
		line-height: ${wo};
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
		width: calc(${bo} * 4px);
		height: calc(${bo} * 4px);
	}
	.start {
		margin-inline-start: calc(${bo} * 2px);
	}
	.end {
		margin-inline-end: calc(${bo} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${on};
		border-color: ${tn};
	}
	:host(:active:not([disabled])) .root {
		background: ${on};
		border-color: ${mo};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${mo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${so};
	}
	:host([disabled]) {
		opacity: ${go};
	}
	:host([disabled]) .control {
		border-color: ${tn};
	}
`,shadowOptions:{delegatesFocus:!0}});const yn=new class{constructor(){"function"==typeof acquireVsCodeApi&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();{const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}};function xn(t){let i,s,o,n,c,h;return{c(){var e,t,r;i=l("main"),s=l("h1"),s.textContent="Hello world!",o=d(),n=l("vscode-button"),n.textContent="Howdy!",e=i,t="class",null==(r="svelte-15juf1r")?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)},m(e,a){var l,d,u,p;!function(e,t,i){e.insertBefore(t,i||null)}(e,i,a),r(i,s),r(i,o),r(i,n),c||(l=n,d="click",u=t[0],l.addEventListener(d,u,p),h=()=>l.removeEventListener(d,u,p),c=!0)},p:e,i:e,o:e,d(e){e&&a(i),c=!1,h()}}}function $n(e){return function(e){return Ss.getOrCreate(e).withPrefix("vscode")}().register(vn()),[function(){yn.postMessage({command:"hello",text:"Hey there partner! 🤠"})}]}return new class extends class{$destroy(){!function(e,t){const i=e.$$;null!==i.fragment&&(s(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),I(this,e,$n,xn,n,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

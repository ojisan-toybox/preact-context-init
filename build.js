(()=>{"use strict";var e,t,n,_,o,r,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var _,o,r,l=arguments,i={};for(r in t)"key"==r?_=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return s(e,i,_,o,null)}function s(t,n,_,o,r){var l={type:t,props:n,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++e.__v:r};return null!=e.vnode&&e.vnode(l),l}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function y(o){(!o.__d&&(o.__d=!0)&&t.push(o)&&!m.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(m)}function m(){for(var e;m.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,_,o,r,l,i;e.__d&&(l=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(_=c({},r)).__v=r.__v+1,o=A(i,r,_,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[l]:null,n,null==l?d(r):l,r.__h),E(n,r),o!=l&&v(r)))}))}function b(e,t,n,_,o,r,u,c,f,h){var v,y,m,b,g,w,S,C=_&&_.__k||i,x=C.length;for(f==l&&(f=null!=u?u[0]:x?d(_,0):null),n.__k=[],v=0;v<t.length;v++)if(null!=(b=n.__k[v]=null==(b=t[v])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?s(null,b,null,null,b):Array.isArray(b)?s(p,{children:b},null,null,null):null!=b.__e||null!=b.__c?s(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=C[v])||m&&b.key==m.key&&b.type===m.type)C[v]=void 0;else for(y=0;y<x;y++){if((m=C[y])&&b.key==m.key&&b.type===m.type){C[y]=void 0;break}m=null}g=A(e,b,m=m||l,o,r,u,c,f,h),(y=b.ref)&&m.ref!=y&&(S||(S=[]),m.ref&&S.push(m.ref,null,b),S.push(y,b.__c||g,b)),null!=g?(null==w&&(w=g),f=k(e,b,m,C,u,g,f),h||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&m.__e==f&&f.parentNode!=e&&(f=d(m))}if(n.__e=w,null!=u&&"function"!=typeof n.type)for(v=u.length;v--;)null!=u[v]&&a(u[v]);for(v=x;v--;)null!=C[v]&&H(C[v],C[v]);if(S)for(v=0;v<S.length;v++)N(S[v],S[++v],S[++v])}function g(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){g(e,t)})):t.push(e)),t}function k(e,t,n,_,o,r,l){var i,u,c;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(o==n||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),i=null;else{for(u=l,c=0;(u=u.nextSibling)&&c<_.length;c+=2)if(u==r)break e;e.insertBefore(r,l),i=l}return void 0!==i?i:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function S(e,t,n,_,o){var r,l,i;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||w(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||w(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(r=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+r]=n,i=r?x:C,n?_||e.addEventListener(t,i,r):e.removeEventListener(t,i,r)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(t){this.l[t.type+!1](e.event?e.event(t):t)}function x(t){this.l[t.type+!0](e.event?e.event(t):t)}function P(e,t,n){var _,o;for(_=0;_<e.__k.length;_++)(o=e.__k[_])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&P(o,t,n),t=k(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function A(t,n,_,o,r,l,i,u,a){var f,s,d,v,y,m,g,k,w,S,C,x=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(a=_.__h,u=n.__e=_.__e,n.__h=null,l=[u]),(f=e.__b)&&f(n);try{e:if("function"==typeof x){if(k=n.props,w=(f=x.contextType)&&o[f.__c],S=f?w?w.props.value:f.__:o,_.__c?g=(s=n.__c=_.__c).__=s.__E:("prototype"in x&&x.prototype.render?n.__c=s=new x(k,S):(n.__c=s=new h(k,S),s.constructor=x,s.render=T),w&&w.sub(s),s.props=k,s.state||(s.state={}),s.context=S,s.__n=o,d=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=x.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=c({},s.__s)),c(s.__s,x.getDerivedStateFromProps(k,s.__s))),v=s.props,y=s.state,d)null==x.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==x.getDerivedStateFromProps&&k!==v&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(k,S),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(k,s.__s,S)||n.__v===_.__v){s.props=k,s.state=s.__s,n.__v!==_.__v&&(s.__d=!1),s.__v=n,n.__e=_.__e,n.__k=_.__k,s.__h.length&&i.push(s),P(n,u,t);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(k,s.__s,S),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(v,y,m)}))}s.context=S,s.props=k,s.state=s.__s,(f=e.__r)&&f(n),s.__d=!1,s.__v=n,s.__P=t,f=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(o=c(c({},o),s.getChildContext())),d||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(v,y)),C=null!=f&&f.type==p&&null==f.key?f.props.children:f,b(t,Array.isArray(C)?C:[C],n,_,o,r,l,i,u,a),s.base=n.__e,n.__h=null,s.__h.length&&i.push(s),g&&(s.__E=s.__=null),s.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=U(_.__e,n,_,o,r,l,i,a);(f=e.diffed)&&f(n)}catch(t){n.__v=null,(a||null!=l)&&(n.__e=u,n.__h=!!a,l[l.indexOf(u)]=null),e.__e(t,n,_)}return n.__e}function E(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function U(e,t,n,_,o,r,u,c){var a,f,s,p,h,d=n.props,v=t.props;if(o="svg"===t.type||o,null!=r)for(a=0;a<r.length;a++)if(null!=(f=r[a])&&((null===t.type?3===f.nodeType:f.localName===t.type)||e==f)){e=f,r[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null,c=!1}if(null===t.type)d===v||c&&e.data===v||(e.data=v);else{if(null!=r&&(r=i.slice.call(e.childNodes)),s=(d=n.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=r)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||S(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||S(e,r,t[r],n[r],_)})(e,v,d,o,c),p?t.__k=[]:(a=t.props.children,b(e,Array.isArray(a)?a:[a],t,n,_,"foreignObject"!==t.type&&o,r,u,l,c)),c||("value"in v&&void 0!==(a=v.value)&&(a!==e.value||"progress"===t.type&&!a)&&S(e,"value",a,d.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&S(e,"checked",a,d.checked,!1))}return e}function N(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function H(t,n,_){var o,r,l;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||N(o,null,n)),_||"function"==typeof t.type||(_=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&H(o[l],n,_);null!=r&&a(r)}function T(e,t,n){return this.constructor(e,n)}function W(e,t){var n={__c:t="__cC"+r++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,_){return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(y)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e={__e:function(e,t){for(var n,_,o,r=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return t.__h=r,n.__E=n}catch(t){e=t}throw e},__v:0},h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},h.prototype.render=p,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,o=l,r=0;var O,D,M,L=0,F=[],R=e.__b,j=e.__r,I=e.diffed,$=e.__c,B=e.unmount;function q(t,n){e.__h&&e.__h(D,t,L||n),L=0;var _=D.__H||(D.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function z(e){var t=D.context[e.__c],n=q(O++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(D)),t.props.value):e.__}function V(){F.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(Z),t.__H.__h.forEach(J),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),F=[]}e.__b=function(e){D=null,R&&R(e)},e.__r=function(e){j&&j(e),O=0;var t=(D=e.__c).__H;t&&(t.__h.forEach(Z),t.__h.forEach(J),t.__h=[])},e.diffed=function(t){I&&I(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==F.push(n)&&M===e.requestAnimationFrame||((M=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),G&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);G&&(t=requestAnimationFrame(n))})(V)),D=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(Z),t.__h=t.__h.filter((function(e){return!e.__||J(e)}))}catch(_){n.some((function(e){e.__h&&(e.__h=[])})),n=[],e.__e(_,t.__v)}})),$&&$(t,n)},e.unmount=function(t){B&&B(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(Z)}catch(t){e.__e(t,n.__v)}};var G="function"==typeof requestAnimationFrame;function Z(e){var t=D;"function"==typeof e.__c&&e.__c(),D=t}function J(e){var t=D;e.__c=e.__(),D=t}function K(e,t){return"function"==typeof t?t(e):t}function Q(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var _ in t)if("__source"!==_&&e[_]!==t[_])return!0;return!1}function X(e){this.props=e}(X.prototype=new h).isPureReactComponent=!0,X.prototype.shouldComponentUpdate=function(e,t){return Q(this.props,e)||Q(this.state,t)};var Y=e.__b;e.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Y&&Y(e)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var ee=e.__e;function te(e){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(te)),e}function ne(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(ne)),e}function _e(){this.__u=0,this.t=null,this.__b=null}function oe(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function re(){this.u=null,this.o=null}e.__e=function(e,t,n){if(e.then)for(var _,o=t;o=o.__;)if((_=o.__c)&&_.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),_.__c(e,t);ee(e,t,n)},(_e.prototype=new h).__c=function(e,t){var n=t.__c,_=this;null==_.t&&(_.t=[]),_.t.push(n);var o=oe(_.__v),r=!1,l=function(){r||(r=!0,n.componentWillUnmount=n.__c,o?o(i):i())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){l(),n.__c&&n.__c()};var i=function(){var e;if(!--_.__u)for(_.__v.__k[0]=ne(_.state.__e),_.setState({__e:_.__b=null});e=_.t.pop();)e.forceUpdate()};!0===t.__h||_.__u++||_.setState({__e:_.__b=_.__v.__k[0]}),e.then(l,l)},_e.prototype.componentWillUnmount=function(){this.t=[]},_e.prototype.render=function(e,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=te(this.__b)),this.__b=null);var n=t.__e&&f(p,null,e.fallback);return n&&(n.__h=null),[f(p,null,t.__e?null:e.children),n]};var le=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(re.prototype=new h).__e=function(e){var t=this,n=oe(t.__v),_=t.o.get(e);return _[0]++,function(o){var r=function(){t.props.revealOrder?(_.push(o),le(t,e,_)):o()};n?n(r):r()}},re.prototype.render=function(e){this.u=null,this.o=new Map;var t=g(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},re.prototype.componentDidUpdate=re.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){le(e,n,t)}))};var ie="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ue=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ce="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(h.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var ae=e.event;function fe(){}function se(){return this.cancelBubble}function pe(){return this.defaultPrevented}e.event=function(e){return ae&&(e=ae(e)),e.persist=fe,e.isPropagationStopped=se,e.isDefaultPrevented=pe,e.nativeEvent=e};var he={configurable:!0,get:function(){return this.class}},de=e.vnode;e.vnode=function(e){var t=e.type,n=e.props,_=n;if("string"==typeof t){for(var o in _={},n){var r=n[o];"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===r?r="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!ce.test(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():ue.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===r&&(r=void 0),_[o]=r}"select"==t&&_.multiple&&Array.isArray(_.value)&&(_.value=g(n.children).forEach((function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)}))),e.props=_}t&&n.class!=n.className&&(he.enumerable="className"in n,null!=n.className&&(_.class=n.className),Object.defineProperty(_,"className",he)),e.$$typeof=ie,de&&de(e)};var ve=e.__r;function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,_=new Array(t);n<t;n++)_[n]=e[n];return _}e.__r=function(e){ve&&ve(e),e.__c};var me="INCREMENT",be={count:0},ge=function(e,t){switch(t.type){case me:return{count:e.count+1};default:return e}},ke=W({state:{count:100}}),we=W({dispatch:function(){}});!function(t,n,_){var r,u,c;e.__&&e.__(t,n),u=(r=_===o)?null:_&&_.__k||n.__k,t=f(p,null,[t]),c=[],A(n,(r?n:_||n).__k=t,u||l,l,void 0!==n.ownerSVGElement,_&&!r?[_]:u?null:n.childNodes.length?i.slice.call(n.childNodes):null,c,_||l,r),E(c,t)}(f((function(e){var t=e.children,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(_=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);_=!0);}catch(e){o=!0,r=e}finally{try{_||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(function(e,t,n){var _=q(O++,2);return _.t=e,_.__c||(_.__=[n?n(t):K(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=D),_.__}(ge,be),2),_=n[0],o=n[1];return console.log("<AnswerContextContextProvider>dispatch",o),f(ke.Provider,{value:{state:_}},f(we.Provider,{value:{dispatch:o}},t))}),null,f((function(){var e=z(ke),t=z(we);return f("div",null,e.state.count,f("button",{onclick:function(){t.dispatch({type:me})}},"increment"))}),null)),document.body)})();
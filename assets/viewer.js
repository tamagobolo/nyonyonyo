(()=>{var ob=Object.create;var r0=Object.defineProperty;var lb=Object.getOwnPropertyDescriptor;var cb=Object.getOwnPropertyNames;var ub=Object.getPrototypeOf,hb=Object.prototype.hasOwnProperty;var vs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var fb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of cb(t))!hb.call(e,s)&&s!==n&&r0(e,s,{get:()=>t[s],enumerable:!(i=lb(t,s))||i.enumerable});return e};var o0=(e,t,n)=>(n=e!=null?ob(ub(e)):{},fb(t||!e||!e.__esModule?r0(n,"default",{value:e,enumerable:!0}):n,e));var y0=vs(It=>{"use strict";var ed=Symbol.for("react.transitional.element"),db=Symbol.for("react.portal"),pb=Symbol.for("react.fragment"),mb=Symbol.for("react.strict_mode"),gb=Symbol.for("react.profiler"),_b=Symbol.for("react.consumer"),yb=Symbol.for("react.context"),vb=Symbol.for("react.forward_ref"),xb=Symbol.for("react.suspense"),Sb=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),Mb=Symbol.for("react.activity"),l0=Symbol.iterator;function bb(e){return e===null||typeof e!="object"?null:(e=l0&&e[l0]||e["@@iterator"],typeof e=="function"?e:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function ja(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}ja.prototype.isReactComponent={};ja.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ja.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function g0(){}g0.prototype=ja.prototype;function nd(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}var id=nd.prototype=new g0;id.constructor=nd;p0(id,ja.prototype);id.isPureReactComponent=!0;var c0=Array.isArray;function td(){}var ye={H:null,A:null,T:null,S:null},_0=Object.prototype.hasOwnProperty;function sd(e,t,n){var i=n.ref;return{$$typeof:ed,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Eb(e,t){return sd(e.type,t,e.props)}function ad(e){return typeof e=="object"&&e!==null&&e.$$typeof===ed}function Tb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var u0=/\/+/g;function $f(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tb(""+e.key):t.toString(36)}function Ab(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(td,td):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ka(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case ed:case db:r=!0;break;case f0:return r=e._init,Ka(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+$f(e,0):i,c0(s)?(n="",r!=null&&(n=r.replace(u0,"$&/")+"/"),Ka(s,t,n,"",function(c){return c})):s!=null&&(ad(s)&&(s=Eb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(u0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(c0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+$f(i,l),r+=Ka(i,t,n,a,s);else if(l=bb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+$f(i,l++),r+=Ka(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ka(Ab(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function vc(e,t,n){if(e==null)return e;var i=[],s=0;return Ka(e,i,"","",function(a){return t.call(n,a,s++)}),i}function wb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var h0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Cb={map:vc,forEach:function(e,t,n){vc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vc(e,function(){t++}),t},toArray:function(e){return vc(e,function(t){return t})||[]},only:function(e){if(!ad(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=Mb;It.Children=Cb;It.Component=ja;It.Fragment=pb;It.Profiler=gb;It.PureComponent=nd;It.StrictMode=mb;It.Suspense=xb;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ye.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=p0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!_0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return sd(e.type,s,i)};It.createContext=function(e){return e={$$typeof:yb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:_b,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)_0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return sd(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:vb,render:e}};It.isValidElement=ad;It.lazy=function(e){return{$$typeof:f0,_payload:{_status:-1,_result:e},_init:wb}};It.memo=function(e,t){return{$$typeof:Sb,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=ye.T,n={};ye.T=n;try{var i=e(),s=ye.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(td,h0)}catch(a){h0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ye.T=t}};It.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()};It.use=function(e){return ye.H.use(e)};It.useActionState=function(e,t,n){return ye.H.useActionState(e,t,n)};It.useCallback=function(e,t){return ye.H.useCallback(e,t)};It.useContext=function(e){return ye.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return ye.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return ye.H.useEffect(e,t)};It.useEffectEvent=function(e){return ye.H.useEffectEvent(e)};It.useId=function(){return ye.H.useId()};It.useImperativeHandle=function(e,t,n){return ye.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return ye.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return ye.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return ye.H.useMemo(e,t)};It.useOptimistic=function(e,t){return ye.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return ye.H.useReducer(e,t,n)};It.useRef=function(e){return ye.H.useRef(e)};It.useState=function(e){return ye.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return ye.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return ye.H.useTransition()};It.version="19.2.6"});var xc=vs((J2,v0)=>{"use strict";v0.exports=y0()});var R0=vs(Ae=>{"use strict";function cd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Sc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function bi(e){return e.length===0?null:e[0]}function bc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Sc(o,n))l<s&&0>Sc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Sc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Sc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ae.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(x0=performance,Ae.unstable_now=function(){return x0.now()}):(rd=Date,S0=rd.now(),Ae.unstable_now=function(){return rd.now()-S0});var x0,rd,S0,Fi=[],xs=[],Rb=1,jn=null,rn=3,ud=!1,wo=!1,Co=!1,hd=!1,E0=typeof setTimeout=="function"?setTimeout:null,T0=typeof clearTimeout=="function"?clearTimeout:null,M0=typeof setImmediate<"u"?setImmediate:null;function Mc(e){for(var t=bi(xs);t!==null;){if(t.callback===null)bc(xs);else if(t.startTime<=e)bc(xs),t.sortIndex=t.expirationTime,cd(Fi,t);else break;t=bi(xs)}}function fd(e){if(Co=!1,Mc(e),!wo)if(bi(Fi)!==null)wo=!0,$a||($a=!0,Qa());else{var t=bi(xs);t!==null&&dd(fd,t.startTime-e)}}var $a=!1,Ro=-1,A0=5,w0=-1;function C0(){return hd?!0:!(Ae.unstable_now()-w0<A0)}function od(){if(hd=!1,$a){var e=Ae.unstable_now();w0=e;var t=!0;try{t:{wo=!1,Co&&(Co=!1,T0(Ro),Ro=-1),ud=!0;var n=rn;try{e:{for(Mc(e),jn=bi(Fi);jn!==null&&!(jn.expirationTime>e&&C0());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,rn=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=Ae.unstable_now(),typeof s=="function"){jn.callback=s,Mc(e),t=!0;break e}jn===bi(Fi)&&bc(Fi),Mc(e)}else bc(Fi);jn=bi(Fi)}if(jn!==null)t=!0;else{var a=bi(xs);a!==null&&dd(fd,a.startTime-e),t=!1}}break t}finally{jn=null,rn=n,ud=!1}t=void 0}}finally{t?Qa():$a=!1}}}var Qa;typeof M0=="function"?Qa=function(){M0(od)}:typeof MessageChannel<"u"?(ld=new MessageChannel,b0=ld.port2,ld.port1.onmessage=od,Qa=function(){b0.postMessage(null)}):Qa=function(){E0(od,0)};var ld,b0;function dd(e,t){Ro=E0(function(){e(Ae.unstable_now())},t)}Ae.unstable_IdlePriority=5;Ae.unstable_ImmediatePriority=1;Ae.unstable_LowPriority=4;Ae.unstable_NormalPriority=3;Ae.unstable_Profiling=null;Ae.unstable_UserBlockingPriority=2;Ae.unstable_cancelCallback=function(e){e.callback=null};Ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A0=0<e?Math.floor(1e3/e):5};Ae.unstable_getCurrentPriorityLevel=function(){return rn};Ae.unstable_next=function(e){switch(rn){case 1:case 2:case 3:var t=3;break;default:t=rn}var n=rn;rn=t;try{return e()}finally{rn=n}};Ae.unstable_requestPaint=function(){hd=!0};Ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=rn;rn=e;try{return t()}finally{rn=n}};Ae.unstable_scheduleCallback=function(e,t,n){var i=Ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Rb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,cd(xs,e),bi(Fi)===null&&e===bi(xs)&&(Co?(T0(Ro),Ro=-1):Co=!0,dd(fd,n-i))):(e.sortIndex=s,cd(Fi,e),wo||ud||(wo=!0,$a||($a=!0,Qa()))),e};Ae.unstable_shouldYield=C0;Ae.unstable_wrapCallback=function(e){var t=rn;return function(){var n=rn;rn=t;try{return e.apply(this,arguments)}finally{rn=n}}}});var U0=vs((j2,D0)=>{"use strict";D0.exports=R0()});var L0=vs(dn=>{"use strict";var Db=xc();function N0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ss(){}var fn={d:{f:Ss,r:function(){throw Error(N0(522))},D:Ss,C:Ss,L:Ss,m:Ss,X:Ss,S:Ss,M:Ss},p:0,findDOMNode:null},Ub=Symbol.for("react.portal");function Nb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ub,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Do=Db.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ec(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fn;dn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(N0(299));return Nb(e,t,null,n)};dn.flushSync=function(e){var t=Do.T,n=fn.p;try{if(Do.T=null,fn.p=2,e)return e()}finally{Do.T=t,fn.p=n,fn.d.f()}};dn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,fn.d.C(e,t))};dn.prefetchDNS=function(e){typeof e=="string"&&fn.d.D(e)};dn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ec(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&fn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};dn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ec(t.as,t.crossOrigin);fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&fn.d.M(e)};dn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ec(n,t.crossOrigin);fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};dn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ec(t.as,t.crossOrigin);fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else fn.d.m(e)};dn.requestFormReset=function(e){fn.d.r(e)};dn.unstable_batchedUpdates=function(e,t){return e(t)};dn.useFormState=function(e,t,n){return Do.H.useFormState(e,t,n)};dn.useFormStatus=function(){return Do.H.useHostTransitionStatus()};dn.version="19.2.6"});var P0=vs(($2,I0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(e){console.error(e)}}O0(),I0.exports=L0()});var Zx=vs(Ju=>{"use strict";var ke=U0(),ly=xc(),Lb=P0();function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B0(e){if(gl(e)!==e)throw Error(Z(188))}function Ob(e){var t=e.alternate;if(!t){if(t=gl(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return B0(s),e;if(a===i)return B0(s),t;a=a.sibling}throw Error(Z(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function fy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fy(e),t!==null)return t;e=e.sibling}return null}var Se=Object.assign,Ib=Symbol.for("react.element"),Tc=Symbol.for("react.transitional.element"),zo=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),py=Symbol.for("react.consumer"),Yi=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),Ms=Symbol.for("react.lazy");Symbol.for("react.scope");var Kd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Pb=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z0=Symbol.iterator;function Uo(e){return e===null||typeof e!="object"?null:(e=z0&&e[z0]||e["@@iterator"],typeof e=="function"?e:null)}var Bb=Symbol.for("react.client.reference");function jd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case Yd:return"Profiler";case dy:return"StrictMode";case Zd:return"Suspense";case Jd:return"SuspenseList";case Kd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zo:return"Portal";case Yi:return e.displayName||"Context";case py:return(e._context.displayName||"Context")+".Consumer";case Gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kp:return t=e.displayName||null,t!==null?t:jd(e.type)||"Memo";case Ms:t=e._payload,e=e._init;try{return jd(e(t))}catch{}}return null}var Fo=Array.isArray,Dt=ly.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Lb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ga={pending:!1,data:null,method:null,action:null},Qd=[],rr=-1;function Ci(e){return{current:e}}function Ke(e){0>rr||(e.current=Qd[rr],Qd[rr]=null,rr--)}function ge(e,t){rr++,Qd[rr]=e.current,e.current=t}var wi=Ci(null),nl=Ci(null),Ls=Ci(null),su=Ci(null);function au(e,t){switch(ge(Ls,t),ge(nl,e),ge(wi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?W_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=W_(t),e=Ox(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(wi),ge(wi,e)}function Er(){Ke(wi),Ke(nl),Ke(Ls)}function $d(e){e.memoizedState!==null&&ge(su,e);var t=wi.current,n=Ox(t,e.type);t!==n&&(ge(nl,e),ge(wi,n))}function ru(e){nl.current===e&&(Ke(wi),Ke(nl)),su.current===e&&(Ke(su),dl._currentValue=ga)}var pd,F0;function fa(e){if(pd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pd=t&&t[1]||"",F0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pd+e+F0}var md=!1;function gd(e,t){if(!e||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{md=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fa(n):""}function zb(e,t){switch(e.tag){case 26:case 27:case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return e.child!==t&&t!==null?fa("Suspense Fallback"):fa("Suspense");case 19:return fa("SuspenseList");case 0:case 15:return gd(e.type,!1);case 11:return gd(e.type.render,!1);case 1:return gd(e.type,!0);case 31:return fa("Activity");default:return""}}function H0(e){try{var t="",n=null;do t+=zb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tp=Object.prototype.hasOwnProperty,Xp=ke.unstable_scheduleCallback,_d=ke.unstable_cancelCallback,Fb=ke.unstable_shouldYield,Hb=ke.unstable_requestPaint,zn=ke.unstable_now,Vb=ke.unstable_getCurrentPriorityLevel,my=ke.unstable_ImmediatePriority,gy=ke.unstable_UserBlockingPriority,ou=ke.unstable_NormalPriority,Gb=ke.unstable_LowPriority,_y=ke.unstable_IdlePriority,kb=ke.log,Xb=ke.unstable_setDisableYieldValue,_l=null,Fn=null;function Cs(e){if(typeof kb=="function"&&Xb(e),Fn&&typeof Fn.setStrictMode=="function")try{Fn.setStrictMode(_l,e)}catch{}}var Hn=Math.clz32?Math.clz32:Yb,Wb=Math.log,qb=Math.LN2;function Yb(e){return e>>>=0,e===0?32:31-(Wb(e)/qb|0)|0}var Ac=256,wc=262144,Cc=4194304;function da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=da(i):(r&=o,r!==0?s=da(r):n||(n=o&~e,n!==0&&(s=da(n))))):(o=i&~a,o!==0?s=da(o):r!==0?s=da(r):n||(n=i&~e,n!==0&&(s=da(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(){var e=Cc;return Cc<<=1,(Cc&62914560)===0&&(Cc=4194304),e}function yd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jb(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Hn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&vy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function vy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Hn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function xy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Hn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Sy(e,t){var n=t&-t;return n=(n&42)!==0?1:Wp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Wp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function My(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function V0(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var qs=Math.random().toString(36).slice(2),$e="__reactFiber$"+qs,Tn="__reactProps$"+qs,Ir="__reactContainer$"+qs,ep="__reactEvents$"+qs,Kb="__reactListeners$"+qs,jb="__reactHandles$"+qs,G0="__reactResources$"+qs,xl="__reactMarker$"+qs;function Yp(e){delete e[$e],delete e[Tn],delete e[ep],delete e[Kb],delete e[jb]}function or(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ir]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=K_(e);e!==null;){if(n=e[$e])return n;e=K_(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){if(e=e[$e]||e[Ir]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ho(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function _r(e){var t=e[G0];return t||(t=e[G0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[xl]=!0}var by=new Set,Ey={};function Aa(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Ey[e]=t,e=0;e<t.length;e++)by.add(t[e])}var Qb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),k0={},X0={};function $b(e){return tp.call(X0,e)?!0:tp.call(k0,e)?!1:Qb.test(e)?X0[e]=!0:(k0[e]=!0,!1)}function kc(e,t,n){if($b(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Rc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Hi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ty(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function t1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function np(e){if(!e._valueTracker){var t=Ty(e)?"checked":"value";e._valueTracker=t1(e,t,""+e[t])}}function Ay(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ty(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function lu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var e1=/[\n"\\]/g;function ni(e){return e.replace(e1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ip(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$n(t)):e.value!==""+$n(t)&&(e.value=""+$n(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?sp(e,r,$n(t)):n!=null?sp(e,r,$n(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$n(o):e.removeAttribute("name")}function wy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){np(e);return}n=n!=null?""+$n(n):"",t=t!=null?""+$n(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),np(e)}function sp(e,t,n){t==="number"&&lu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Cy(e,t,n){if(t!=null&&(t=""+$n(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$n(n):""}function Ry(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(Fo(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$n(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),np(e)}function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var n1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function W0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||n1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&W0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&W0(e,a,t[a])}function Zp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xc(e){return s1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var ap=null;function Jp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lr=null,vr=null;function q0(e){var t=Pr(e);if(t&&(e=t.stateNode)){var n=e[Tn]||null;t:switch(e=t.stateNode,t.type){case"input":if(ip(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ni(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Tn]||null;if(!s)throw Error(Z(90));ip(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ay(i)}break t;case"textarea":Cy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}}}var vd=!1;function Uy(e,t,n){if(vd)return e(t,n);vd=!0;try{var i=e(t);return i}finally{if(vd=!1,(lr!==null||vr!==null)&&(Wu(),lr&&(t=lr,e=vr,vr=lr=null,q0(t),e)))for(t=0;t<e.length;t++)q0(e[t])}}function il(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=!1;if($i)try{tr={},Object.defineProperty(tr,"passive",{get:function(){rp=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{rp=!1}var tr,Rs=null,Kp=null,Wc=null;function Ny(){if(Wc)return Wc;var e,t=Kp,n=t.length,i,s="value"in Rs?Rs.value:Rs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Wc=s.slice(e,1<i?1-i:void 0)}function qc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dc(){return!0}function Y0(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Dc:Y0,this.isPropagationStopped=Y0,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=An(wa),Sl=Se({},wa,{view:0,detail:0}),a1=An(Sl),xd,Sd,No,Iu=Se({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(xd=e.screenX-No.screenX,Sd=e.screenY-No.screenY):Sd=xd=0,No=e),xd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),Z0=An(Iu),r1=Se({},Iu,{dataTransfer:0}),o1=An(r1),l1=Se({},Sl,{relatedTarget:0}),Md=An(l1),c1=Se({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=An(c1),h1=Se({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),f1=An(h1),d1=Se({},wa,{data:0}),J0=An(d1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=g1[e])?!!t[e]:!1}function jp(){return _1}var y1=Se({},Sl,{key:function(e){if(e.key){var t=p1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(e){return e.type==="keypress"?qc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v1=An(y1),x1=Se({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=An(x1),S1=Se({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),M1=An(S1),b1=Se({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),E1=An(b1),T1=Se({},Iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=An(T1),w1=Se({},wa,{newState:0,oldState:0}),C1=An(w1),R1=[9,13,27,32],Qp=$i&&"CompositionEvent"in window,ko=null;$i&&"documentMode"in document&&(ko=document.documentMode);var D1=$i&&"TextEvent"in window&&!ko,Ly=$i&&(!Qp||ko&&8<ko&&11>=ko),j0=" ",Q0=!1;function Oy(e,t){switch(e){case"keyup":return R1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function U1(e,t){switch(e){case"compositionend":return Iy(t);case"keypress":return t.which!==32?null:(Q0=!0,j0);case"textInput":return e=t.data,e===j0&&Q0?null:e;default:return null}}function N1(e,t){if(cr)return e==="compositionend"||!Qp&&Oy(e,t)?(e=Ny(),Wc=Kp=Rs=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ly&&t.locale!=="ko"?null:t.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L1[e.type]:t==="textarea"}function Py(e,t,n,i){lr?vr?vr.push(i):vr=[i]:lr=i,t=Au(t,"onChange"),0<t.length&&(n=new Ou("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xo=null,sl=null;function O1(e){Ux(e,0)}function Pu(e){var t=Ho(e);if(Ay(t))return e}function t_(e,t){if(e==="change")return t}var By=!1;$i&&($i?(Nc="oninput"in document,Nc||(bd=document.createElement("div"),bd.setAttribute("oninput","return;"),Nc=typeof bd.oninput=="function"),Uc=Nc):Uc=!1,By=Uc&&(!document.documentMode||9<document.documentMode));var Uc,Nc,bd;function e_(){Xo&&(Xo.detachEvent("onpropertychange",zy),sl=Xo=null)}function zy(e){if(e.propertyName==="value"&&Pu(sl)){var t=[];Py(t,sl,e,Jp(e)),Uy(O1,t)}}function I1(e,t,n){e==="focusin"?(e_(),Xo=t,sl=n,Xo.attachEvent("onpropertychange",zy)):e==="focusout"&&e_()}function P1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(sl)}function B1(e,t){if(e==="click")return Pu(t)}function z1(e,t){if(e==="input"||e==="change")return Pu(t)}function F1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:F1;function al(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!tp.call(t,s)||!Gn(e[s],t[s]))return!1}return!0}function n_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function i_(e,t){var n=n_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=n_(n)}}function Fy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=lu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lu(e.document)}return t}function $p(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H1=$i&&"documentMode"in document&&11>=document.documentMode,ur=null,op=null,Wo=null,lp=!1;function s_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lp||ur==null||ur!==lu(i)||(i=ur,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&al(Wo,i)||(Wo=i,i=Au(op,"onSelect"),0<i.length&&(t=new Ou("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ur)))}function ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},Ed={},Vy={};$i&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Ca(e){if(Ed[e])return Ed[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vy)return Ed[e]=t[n];return e}var Gy=Ca("animationend"),ky=Ca("animationiteration"),Xy=Ca("animationstart"),V1=Ca("transitionrun"),G1=Ca("transitionstart"),k1=Ca("transitioncancel"),Wy=Ca("transitionend"),qy=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cp.push("scrollEnd");function di(e,t){qy.set(e,t),Aa(t,[e])}var cu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qn=[],fr=0,tm=0;function Bu(){for(var e=fr,t=tm=fr=0;t<e;){var n=Qn[t];Qn[t++]=null;var i=Qn[t];Qn[t++]=null;var s=Qn[t];Qn[t++]=null;var a=Qn[t];if(Qn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Yy(n,s,a)}}function zu(e,t,n,i){Qn[fr++]=e,Qn[fr++]=t,Qn[fr++]=n,Qn[fr++]=i,tm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function em(e,t,n,i){return zu(e,t,n,i),uu(e)}function Ra(e,t){return zu(e,null,null,t),uu(e)}function Yy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Hn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function uu(e){if(50<tl)throw tl=0,Dp=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dr={};function X1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new X1(e,t,n,i)}function nm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")nm(e)&&(r=1);else if(typeof e=="string")r=YE(e,n,wi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Kd:return e=Pn(31,n,t,s),e.elementType=Kd,e.lanes=a,e;case ar:return _a(n.children,s,a,t);case dy:r=8,s|=24;break;case Yd:return e=Pn(12,n,t,s|2),e.elementType=Yd,e.lanes=a,e;case Zd:return e=Pn(13,n,t,s),e.elementType=Zd,e.lanes=a,e;case Jd:return e=Pn(19,n,t,s),e.elementType=Jd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yi:r=10;break t;case py:r=9;break t;case Gp:r=11;break t;case kp:r=14;break t;case Ms:r=16,i=null;break t}r=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function _a(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function Td(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function Jy(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function Ad(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a_=new WeakMap;function ii(e,t){if(typeof e=="object"&&e!==null){var n=a_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:H0(t)},a_.set(e,t),t)}return{value:e,source:t,stack:H0(t)}}var pr=[],mr=0,hu=null,rl=0,ti=[],ei=0,Gs=null,Ei=1,Ti="";function Wi(e,t){pr[mr++]=rl,pr[mr++]=hu,hu=e,rl=t}function Ky(e,t,n){ti[ei++]=Ei,ti[ei++]=Ti,ti[ei++]=Gs,Gs=e;var i=Ei;e=Ti;var s=32-Hn(i)-1;i&=~(1<<s),n+=1;var a=32-Hn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ei=1<<32-Hn(t)+s|n<<s|i,Ti=a+e}else Ei=1<<a|n<<s|i,Ti=e}function im(e){e.return!==null&&(Wi(e,1),Ky(e,1,0))}function sm(e){for(;e===hu;)hu=pr[--mr],pr[mr]=null,rl=pr[--mr],pr[mr]=null;for(;e===Gs;)Gs=ti[--ei],ti[ei]=null,Ti=ti[--ei],ti[ei]=null,Ei=ti[--ei],ti[ei]=null}function jy(e,t){ti[ei++]=Ei,ti[ei++]=Ti,ti[ei++]=Gs,Ei=t.id,Ti=t.overflow,Gs=e}var tn=null,xe=null,Zt=!1,Os=null,si=!1,up=Error(Z(519));function ks(e){var t=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(ii(t,e)),up}function r_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[Tn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<hl.length;n++)Xt(hl[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),wy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),Ry(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Lx(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||ks(e,!0)}function o_(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:tn=tn.return}}function er(e){if(e!==tn)return!1;if(!Zt)return o_(e),Zt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ip(e.type,e.memoizedProps)),n=!n),n&&xe&&ks(e),o_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));xe=J_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));xe=J_(e)}else t===27?(t=xe,Ys(e.type)?(e=Fp,Fp=null,xe=e):xe=t):xe=tn?ri(e.stateNode.nextSibling):null;return!0}function Sa(){xe=tn=null,Zt=!1}function wd(){var e=Os;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Os=null),e}function ol(e){Os===null?Os=[e]:Os.push(e)}var hp=Ci(null),Da=null,Ji=null;function Es(e,t,n){ge(hp,t._currentValue),t._currentValue=n}function ji(e){e._currentValue=hp.current,Ke(hp)}function fp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function dp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),fp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Z(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),fp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Br(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Z(387));if(r=r.memoizedProps,r!==null){var o=s.type;Gn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===su.current){if(r=s.alternate,r===null)throw Error(Z(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}s=s.return}e!==null&&dp(t,e,n,i),t.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Da=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return Qy(Da,e)}function Lc(e,t){return Da===null&&Ma(e),Qy(e,t)}function Qy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(Z(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var W1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},q1=ke.unstable_scheduleCallback,Y1=ke.unstable_NormalPriority,Fe={$$typeof:Yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function am(){return{controller:new W1,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&q1(Y1,function(){e.controller.abort()})}var qo=null,pp=0,wr=0,xr=null;function Z1(e,t){if(qo===null){var n=qo=[];pp=0,wr=Dm(),xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return pp++,t.then(l_,l_),t}function l_(){if(--pp===0&&qo!==null){xr!==null&&(xr.status="fulfilled");var e=qo;qo=null,wr=0,xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function J1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var c_=Dt.S;Dt.S=function(e,t){fx=zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z1(e,t),c_!==null&&c_(e,t)};var ya=Ci(null);function rm(){var e=ya.current;return e!==null?e:fe.pooledCache}function Zc(e,t){t===null?ge(ya,ya.current):ge(ya,t.pool)}function $y(){var e=rm();return e===null?null:{parent:Fe._currentValue,pool:e}}var zr=Error(Z(460)),om=Error(Z(474)),Fu=Error(Z(542)),du={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zi,Zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f_(e),e;default:if(typeof t.status=="string")t.then(Zi,Zi);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f_(e),e}throw va=t,zr}}function pa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,zr):n}}var va=null;function h_(){if(va===null)throw Error(Z(459));var e=va;return va=null,e}function f_(e){if(e===zr||e===Fu)throw Error(Z(483))}var Sr=null,ll=0;function Oc(e){var t=ll;return ll+=1,Sr===null&&(Sr=[]),tv(Sr,e,t)}function Lo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ic(e,t){throw t.$$typeof===Ib?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ev(e){function t(u,g){if(e){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(u,g){return u=Ki(u,g),u.index=0,u.sibling=null,u}function a(u,g,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=67108866,g):y):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,y,v){return g===null||g.tag!==6?(g=Td(y,u.mode,v),g.return=u,g):(g=s(g,y),g.return=u,g)}function l(u,g,y,v){var T=y.type;return T===ar?h(u,g,y.props.children,v,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ms&&pa(T)===g.type)?(g=s(g,y.props),Lo(g,y),g.return=u,g):(g=Yc(y.type,y.key,y.props,null,u.mode,v),Lo(g,y),g.return=u,g)}function c(u,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Ad(y,u.mode,v),g.return=u,g):(g=s(g,y.children||[]),g.return=u,g)}function h(u,g,y,v,T){return g===null||g.tag!==7?(g=_a(y,u.mode,v,T),g.return=u,g):(g=s(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Td(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tc:return y=Yc(g.type,g.key,g.props,null,u.mode,y),Lo(y,g),y.return=u,y;case zo:return g=Ad(g,u.mode,y),g.return=u,g;case Ms:return g=pa(g),d(u,g,y)}if(Fo(g)||Uo(g))return g=_a(g,u.mode,y,null),g.return=u,g;if(typeof g.then=="function")return d(u,Oc(g),y);if(g.$$typeof===Yi)return d(u,Lc(u,g),y);Ic(u,g)}return null}function f(u,g,y,v){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(u,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tc:return y.key===T?l(u,g,y,v):null;case zo:return y.key===T?c(u,g,y,v):null;case Ms:return y=pa(y),f(u,g,y,v)}if(Fo(y)||Uo(y))return T!==null?null:h(u,g,y,v,null);if(typeof y.then=="function")return f(u,g,Oc(y),v);if(y.$$typeof===Yi)return f(u,g,Lc(u,y),v);Ic(u,y)}return null}function p(u,g,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(y)||null,o(g,u,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tc:return u=u.get(v.key===null?y:v.key)||null,l(g,u,v,T);case zo:return u=u.get(v.key===null?y:v.key)||null,c(g,u,v,T);case Ms:return v=pa(v),p(u,g,y,v,T)}if(Fo(v)||Uo(v))return u=u.get(y)||null,h(g,u,v,T,null);if(typeof v.then=="function")return p(u,g,y,Oc(v),T);if(v.$$typeof===Yi)return p(u,g,y,Lc(g,v),T);Ic(g,v)}return null}function _(u,g,y,v){for(var T=null,R=null,w=g,N=g=0,E=null;w!==null&&N<y.length;N++){w.index>N?(E=w,w=null):E=w.sibling;var b=f(u,w,y[N],v);if(b===null){w===null&&(w=E);break}e&&w&&b.alternate===null&&t(u,w),g=a(b,g,N),R===null?T=b:R.sibling=b,R=b,w=E}if(N===y.length)return n(u,w),Zt&&Wi(u,N),T;if(w===null){for(;N<y.length;N++)w=d(u,y[N],v),w!==null&&(g=a(w,g,N),R===null?T=w:R.sibling=w,R=w);return Zt&&Wi(u,N),T}for(w=i(w);N<y.length;N++)E=p(w,u,N,y[N],v),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?N:E.key),g=a(E,g,N),R===null?T=E:R.sibling=E,R=E);return e&&w.forEach(function(L){return t(u,L)}),Zt&&Wi(u,N),T}function x(u,g,y,v){if(y==null)throw Error(Z(151));for(var T=null,R=null,w=g,N=g=0,E=null,b=y.next();w!==null&&!b.done;N++,b=y.next()){w.index>N?(E=w,w=null):E=w.sibling;var L=f(u,w,b.value,v);if(L===null){w===null&&(w=E);break}e&&w&&L.alternate===null&&t(u,w),g=a(L,g,N),R===null?T=L:R.sibling=L,R=L,w=E}if(b.done)return n(u,w),Zt&&Wi(u,N),T;if(w===null){for(;!b.done;N++,b=y.next())b=d(u,b.value,v),b!==null&&(g=a(b,g,N),R===null?T=b:R.sibling=b,R=b);return Zt&&Wi(u,N),T}for(w=i(w);!b.done;N++,b=y.next())b=p(w,u,N,b.value,v),b!==null&&(e&&b.alternate!==null&&w.delete(b.key===null?N:b.key),g=a(b,g,N),R===null?T=b:R.sibling=b,R=b);return e&&w.forEach(function(k){return t(u,k)}),Zt&&Wi(u,N),T}function m(u,g,y,v){if(typeof y=="object"&&y!==null&&y.type===ar&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Tc:t:{for(var T=y.key;g!==null;){if(g.key===T){if(T=y.type,T===ar){if(g.tag===7){n(u,g.sibling),v=s(g,y.props.children),v.return=u,u=v;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ms&&pa(T)===g.type){n(u,g.sibling),v=s(g,y.props),Lo(v,y),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}y.type===ar?(v=_a(y.props.children,u.mode,v,y.key),v.return=u,u=v):(v=Yc(y.type,y.key,y.props,null,u.mode,v),Lo(v,y),v.return=u,u=v)}return r(u);case zo:t:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),v=s(g,y.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=Ad(y,u.mode,v),v.return=u,u=v}return r(u);case Ms:return y=pa(y),m(u,g,y,v)}if(Fo(y))return _(u,g,y,v);if(Uo(y)){if(T=Uo(y),typeof T!="function")throw Error(Z(150));return y=T.call(y),x(u,g,y,v)}if(typeof y.then=="function")return m(u,g,Oc(y),v);if(y.$$typeof===Yi)return m(u,g,Lc(u,y),v);Ic(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),v=s(g,y),v.return=u,u=v):(n(u,g),v=Td(y,u.mode,v),v.return=u,u=v),r(u)):n(u,g)}return function(u,g,y,v){try{ll=0;var T=m(u,g,y,v);return Sr=null,T}catch(w){if(w===zr||w===Fu)throw w;var R=Pn(29,w,null,u.mode);return R.lanes=v,R.return=u,R}finally{}}}var ba=ev(!0),nv=ev(!1),bs=!1;function lm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Is(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ps(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($t&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=uu(e),Yy(e,null,n),t}return zu(e,i,t,n),uu(e)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xy(e,n)}}function Cd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gp=!1;function Zo(){if(gp){var e=xr;if(e!==null)throw e}}function Jo(e,t,n,i){gp=!1;var s=e.updateQueue;bs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Yt&f)===f:(i&f)===f){f!==0&&f===wr&&(gp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,f);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break t;d=Se({},d,f);break t;case 2:bs=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Ws|=r,e.lanes=r,e.memoizedState=d}}function iv(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function sv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)iv(n[e],t)}var Cr=Ci(null),pu=Ci(0);function d_(e,t){e=is,ge(pu,e),ge(Cr,t),is=e|t.baseLanes}function _p(){ge(pu,is),ge(Cr,Cr.current)}function cm(){is=pu.current,Ke(Cr),Ke(pu)}var kn=Ci(null),ai=null;function Ts(e){var t=e.alternate;ge(Ie,Ie.current&1),ge(kn,e),ai===null&&(t===null||Cr.current!==null||t.memoizedState!==null)&&(ai=e)}function yp(e){ge(Ie,Ie.current),ge(kn,e),ai===null&&(ai=e)}function av(e){e.tag===22?(ge(Ie,Ie.current),ge(kn,e),ai===null&&(ai=e)):As(e)}function As(){ge(Ie,Ie.current),ge(kn,kn.current)}function In(e){Ke(kn),ai===e&&(ai=null),Ke(Ie)}var Ie=Ci(0);function mu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bp(n)||zp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=0,Bt=null,ce=null,Be=null,gu=!1,Mr=!1,Ea=!1,_u=0,cl=0,br=null,K1=0;function Ue(){throw Error(Z(321))}function um(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function hm(e,t,n,i,s,a){return ts=a,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?Pv:Mm,Ea=!1,a=n(i,s),Ea=!1,Mr&&(a=ov(t,n,i,s)),rv(e),a}function rv(e){Dt.H=ul;var t=ce!==null&&ce.next!==null;if(ts=0,Be=ce=Bt=null,gu=!1,cl=0,br=null,t)throw Error(Z(300));e===null||He||(e=e.dependencies,e!==null&&fu(e)&&(He=!0))}function ov(e,t,n,i){Bt=e;var s=0;do{if(Mr&&(br=null),cl=0,Mr=!1,25<=s)throw Error(Z(301));if(s+=1,Be=ce=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=Bv,a=t(n,i)}while(Mr);return a}function j1(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(Bt.flags|=1024),t}function fm(){var e=_u!==0;return _u=0,e}function dm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function pm(e){if(gu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gu=!1}ts=0,Be=ce=Bt=null,Mr=!1,cl=_u=0,br=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Bt.memoizedState=Be=e:Be=Be.next=e,Be}function Pe(){if(ce===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Be===null?Bt.memoizedState:Be.next;if(t!==null)Be=t,ce=e;else{if(e===null)throw Bt.alternate===null?Error(Z(467)):Error(Z(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Be===null?Bt.memoizedState=Be=e:Be=Be.next=e}return Be}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=cl;return cl+=1,br===null&&(br=[]),e=tv(br,e,t),t=Bt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?Pv:Mm),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===Yi)return en(e)}throw Error(Z(438,String(e)))}function mm(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hu(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Pb;return t.index++,n}function es(e,t){return typeof t=="function"?t(e):t}function Jc(e){var t=Pe();return gm(t,ce,e)}function gm(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Yt&d)===d:(ts&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===wr&&(h=!0);else if((ts&f)===f){c=c.next,f===wr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Bt.lanes|=f,Ws|=f;d=c.action,Ea&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Bt.lanes|=d,Ws|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Gn(a,e.memoizedState)&&(He=!0,h&&(n=xr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Rd(e){var t=Pe(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Gn(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function lv(e,t,n){var i=Bt,s=Pe(),a=Zt;if(a){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var r=!Gn((ce||s).memoizedState,n);if(r&&(s.memoizedState=n,He=!0),s=s.queue,_m(hv.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Be!==null&&Be.memoizedState.tag&1){if(i.flags|=2048,Rr(9,{destroy:void 0},uv.bind(null,i,s,n,t),null),fe===null)throw Error(Z(349));a||(ts&127)!==0||cv(i,t,n)}return n}function cv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=Hu(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uv(e,t,n,i){t.value=n,t.getSnapshot=i,fv(t)&&dv(e)}function hv(e,t,n){return n(function(){fv(t)&&dv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function dv(e){var t=Ra(e,2);t!==null&&En(t,e,2)}function vp(e){var t=pn();if(typeof e=="function"){var n=e;if(e=n(),Ea){Cs(!0);try{n()}finally{Cs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t}function pv(e,t,n,i){return e.baseState=n,gm(e,ce,typeof i=="function"?i:es)}function Q1(e,t,n,i,s){if(ku(e))throw Error(Z(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,mv(t,a)):(a.next=n.next,t.pending=n.next=a)}}function mv(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),p_(e,t,o)}catch(c){xp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),p_(e,t,a)}catch(c){xp(e,t,c)}}function p_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){m_(e,t,i)},function(i){return xp(e,t,i)}):m_(e,t,n)}function m_(e,t,n){t.status="fulfilled",t.value=n,gv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mv(e,n)))}function xp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,gv(t),t=t.next;while(t!==i)}e.action=null}function gv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _v(e,t){return t}function g_(e,t){if(Zt){var n=fe.formState;if(n!==null){t:{var i=Bt;if(Zt){if(xe){e:{for(var s=xe,a=si;s.nodeType!==8;){if(!a){s=null;break e}if(s=ri(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){xe=ri(s.nextSibling),i=s.data==="F!";break t}}ks(i)}i=!1}i&&(t=n[0])}}return n=pn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_v,lastRenderedState:t},n.queue=i,n=Lv.bind(null,Bt,i),i.dispatch=n,i=vp(!1),a=Sm.bind(null,Bt,!1,i.queue),i=pn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Q1.bind(null,Bt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function __(e){var t=Pe();return yv(t,ce,e)}function yv(e,t,n){if(t=gm(e,t,_v)[0],e=Jc(es)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bl(t)}catch(r){throw r===zr?Fu:r}else i=t;t=Pe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,Rr(9,{destroy:void 0},$1.bind(null,s,n),null)),[i,a,e]}function $1(e,t){e.action=t}function y_(e){var t=Pe(),n=ce;if(n!==null)return yv(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Rr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=Hu(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vv(){return Pe().memoizedState}function Kc(e,t,n,i){var s=pn();Bt.flags|=e,s.memoizedState=Rr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Gu(e,t,n,i){var s=Pe();i=i===void 0?null:i;var a=s.memoizedState.inst;ce!==null&&i!==null&&um(i,ce.memoizedState.deps)?s.memoizedState=Rr(t,a,n,i):(Bt.flags|=e,s.memoizedState=Rr(1|t,a,n,i))}function v_(e,t){Kc(8390656,8,e,t)}function _m(e,t){Gu(2048,8,e,t)}function tE(e){Bt.flags|=4;var t=Bt.updateQueue;if(t===null)t=Hu(),Bt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xv(e){var t=Pe().memoizedState;return tE({ref:t,nextImpl:e}),function(){if(($t&2)!==0)throw Error(Z(440));return t.impl.apply(void 0,arguments)}}function Sv(e,t){return Gu(4,2,e,t)}function Mv(e,t){return Gu(4,4,e,t)}function bv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ev(e,t,n){n=n!=null?n.concat([e]):null,Gu(4,4,bv.bind(null,t,e),n)}function ym(){}function Tv(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&um(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Av(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&um(t,i[1]))return i[0];if(i=e(),Ea){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i}function vm(e,t,n){return n===void 0||(ts&1073741824)!==0&&(Yt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=px(),Bt.lanes|=e,Ws|=e,n)}function wv(e,t,n,i){return Gn(n,t)?n:Cr.current!==null?(e=vm(e,n,i),Gn(e,t)||(He=!0),e):(ts&42)===0||(ts&1073741824)!==0&&(Yt&261930)===0?(He=!0,e.memoizedState=n):(e=px(),Bt.lanes|=e,Ws|=e,t)}function Cv(e,t,n,i,s){var a=te.p;te.p=a!==0&&8>a?a:8;var r=Dt.T,o={};Dt.T=o,Sm(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=J1(l,i);Ko(e,t,h,Vn(e))}else Ko(e,t,i,Vn(e))}catch(d){Ko(e,t,{then:function(){},status:"rejected",reason:d},Vn())}finally{te.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function eE(){}function Sp(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var s=Rv(e).queue;Cv(e,s,t,ga,n===null?eE:function(){return Dv(e),n(i)})}function Rv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ga,baseState:ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:ga},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dv(e){var t=Rv(e);t.next===null&&(t=e.alternate.memoizedState),Ko(e,t.next.queue,{},Vn())}function xm(){return en(dl)}function Uv(){return Pe().memoizedState}function Nv(){return Pe().memoizedState}function nE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=Is(n);var i=Ps(t,e,n);i!==null&&(En(i,t,n),Yo(i,t,n)),t={cache:am()},e.payload=t;return}t=t.return}}function iE(e,t,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ku(e)?Ov(t,n):(n=em(e,t,n,i),n!==null&&(En(n,e,i),Iv(n,t,i)))}function Lv(e,t,n){var i=Vn();Ko(e,t,n,i)}function Ko(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Ov(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Gn(o,r))return zu(e,t,s,0),fe===null&&Bu(),!1}catch{}finally{}if(n=em(e,t,s,i),n!==null)return En(n,e,i),Iv(n,t,i),!0}return!1}function Sm(e,t,n,i){if(i={lane:2,revertLane:Dm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ku(e)){if(t)throw Error(Z(479))}else t=em(e,n,i,2),t!==null&&En(t,e,2)}function ku(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function Ov(e,t){Mr=gu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iv(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xy(e,n)}}var ul={readContext:en,use:Vu,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};ul.useEffectEvent=Ue;var Pv={readContext:en,use:Vu,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:v_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Kc(4194308,4,bv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kc(4194308,4,e,t)},useInsertionEffect:function(e,t){Kc(4,2,e,t)},useMemo:function(e,t){var n=pn();t=t===void 0?null:t;var i=e();if(Ea){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pn();if(n!==void 0){var s=n(t);if(Ea){Cs(!0);try{n(t)}finally{Cs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=iE.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:function(e){e=vp(e);var t=e.queue,n=Lv.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ym,useDeferredValue:function(e,t){var n=pn();return vm(n,e,t)},useTransition:function(){var e=vp(!1);return e=Cv.bind(null,Bt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,s=pn();if(Zt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),fe===null)throw Error(Z(349));(Yt&127)!==0||cv(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,v_(hv.bind(null,i,a,e),[e]),i.flags|=2048,Rr(9,{destroy:void 0},uv.bind(null,i,a,n,t),null),n},useId:function(){var e=pn(),t=fe.identifierPrefix;if(Zt){var n=Ti,i=Ei;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=_u++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=K1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xm,useFormState:g_,useActionState:g_,useOptimistic:function(e){var t=pn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sm.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:mm,useCacheRefresh:function(){return pn().memoizedState=nE.bind(null,Bt)},useEffectEvent:function(e){var t=pn(),n={impl:e};return t.memoizedState=n,function(){if(($t&2)!==0)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},Mm={readContext:en,use:Vu,useCallback:Tv,useContext:en,useEffect:_m,useImperativeHandle:Ev,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Av,useReducer:Jc,useRef:vv,useState:function(){return Jc(es)},useDebugValue:ym,useDeferredValue:function(e,t){var n=Pe();return wv(n,ce.memoizedState,e,t)},useTransition:function(){var e=Jc(es)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:lv,useId:Uv,useHostTransitionStatus:xm,useFormState:__,useActionState:__,useOptimistic:function(e,t){var n=Pe();return pv(n,ce,e,t)},useMemoCache:mm,useCacheRefresh:Nv};Mm.useEffectEvent=xv;var Bv={readContext:en,use:Vu,useCallback:Tv,useContext:en,useEffect:_m,useImperativeHandle:Ev,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Av,useReducer:Rd,useRef:vv,useState:function(){return Rd(es)},useDebugValue:ym,useDeferredValue:function(e,t){var n=Pe();return ce===null?vm(n,e,t):wv(n,ce.memoizedState,e,t)},useTransition:function(){var e=Rd(es)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:lv,useId:Uv,useHostTransitionStatus:xm,useFormState:y_,useActionState:y_,useOptimistic:function(e,t){var n=Pe();return ce!==null?pv(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:mm,useCacheRefresh:Nv};Bv.useEffectEvent=xv;function Dd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Is(i);s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(En(t,e,i),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Is(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(En(t,e,i),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),i=Is(n);i.tag=2,t!=null&&(i.callback=t),t=Ps(e,i,n),t!==null&&(En(t,e,n),Yo(t,e,n))}};function x_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!al(n,i)||!al(s,a):!0}function S_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Mp.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function zv(e){cu(e)}function Fv(e){console.error(e)}function Hv(e){cu(e)}function yu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function M_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function bp(e,t,n){return n=Is(n),n.tag=3,n.payload={element:null},n.callback=function(){yu(e,t)},n}function Vv(e){return e=Is(e),e.tag=3,e}function Gv(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){M_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){M_(t,n,i),typeof s!="function"&&(Bs===null?Bs=new Set([this]):Bs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function sE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Br(t,n,s,!0),n=kn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?bu():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===du?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Vd(e,i,s)),!1;case 22:return n.flags|=65536,i===du?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Vd(e,i,s)),!1}throw Error(Z(435,n.tag))}return Vd(e,i,s),bu(),!1}if(Zt)return t=kn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==up&&(e=Error(Z(422),{cause:i}),ol(ii(e,n)))):(i!==up&&(t=Error(Z(423),{cause:i}),ol(ii(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ii(i,n),s=bp(e.stateNode,i,s),Cd(e,s),Ne!==4&&(Ne=2)),!1;var a=Error(Z(520),{cause:i});if(a=ii(a,n),$o===null?$o=[a]:$o.push(a),Ne!==4&&(Ne=2),t===null)return!0;i=ii(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=bp(n.stateNode,i,e),Cd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Bs===null||!Bs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Vv(s),Gv(s,e,n,i),Cd(n,s),!1}n=n.return}while(n!==null);return!1}var bm=Error(Z(461)),He=!1;function Qe(e,t,n,i){t.child=e===null?nv(t,null,n,i):ba(t,e.child,n,i)}function b_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ma(t),i=hm(e,t,n,r,a,s),o=fm(),e!==null&&!He?(dm(e,t,s),ns(e,t,s)):(Zt&&o&&im(t),t.flags|=1,Qe(e,t,i,s),t.child)}function E_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!nm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kv(e,t,a,i,s)):(e=Yc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Em(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(r,i)&&e.ref===t.ref)return ns(e,t,s)}return t.flags|=1,e=Ki(a,i),e.ref=t.ref,e.return=t,t.child=e}function kv(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(al(a,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=a,Em(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,ns(e,t,s)}return Ep(e,t,n,i,s)}function Xv(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return T_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zc(t,a!==null?a.cachePool:null),a!==null?d_(t,a):_p(),av(t);else return i=t.lanes=536870912,T_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Zc(t,a.cachePool),d_(t,a),As(t),t.memoizedState=null):(e!==null&&Zc(t,null),_p(),As(t));return Qe(e,t,s,n),t.child}function Vo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function T_(e,t,n,i,s){var a=rm();return a=a===null?null:{parent:Fe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Zc(t,null),_p(),av(t),e!==null&&Br(e,t,i,!0),t.childLanes=s,null}function jc(e,t){return t=vu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function A_(e,t,n){return ba(t,e.child,null,n),e=jc(t,t.pendingProps),e.flags|=2,In(t),t.memoizedState=null,e}function aE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Zt){if(i.mode==="hidden")return e=jc(t,i),t.lanes=536870912,Vo(null,e);if(yp(t),(e=xe)?(e=Px(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gs!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=Jy(e),n.return=t,t.child=n,tn=t,xe=null)):e=null,e===null)throw ks(t);return t.lanes=536870912,null}return jc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(yp(t),s)if(t.flags&256)t.flags&=-257,t=A_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Z(558));else if(He||Br(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(i=fe,i!==null&&(r=Sy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ra(e,r),En(i,e,r),bm;bu(),t=A_(e,t,n)}else e=a.treeContext,xe=ri(r.nextSibling),tn=t,Zt=!0,Os=null,si=!1,e!==null&&jy(t,e),t=jc(t,i),t.flags|=4096;return t}return e=Ki(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ep(e,t,n,i,s){return Ma(t),n=hm(e,t,n,i,void 0,s),i=fm(),e!==null&&!He?(dm(e,t,s),ns(e,t,s)):(Zt&&i&&im(t),t.flags|=1,Qe(e,t,n,s),t.child)}function w_(e,t,n,i,s,a){return Ma(t),t.updateQueue=null,n=ov(t,i,n,s),rv(e),i=fm(),e!==null&&!He?(dm(e,t,a),ns(e,t,a)):(Zt&&i&&im(t),t.flags|=1,Qe(e,t,n,a),t.child)}function C_(e,t,n,i,s){if(Ma(t),t.stateNode===null){var a=dr,r=n.contextType;typeof r=="object"&&r!==null&&(a=en(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Mp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},lm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?en(r):dr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Dd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Mp.enqueueReplaceState(a,a.state,null),Jo(t,i,a,s),Zo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ta(n,o);a.props=l;var c=a.context,h=n.contextType;r=dr,typeof h=="object"&&h!==null&&(r=en(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&S_(t,a,i,r),bs=!1;var f=t.memoizedState;a.state=f,Jo(t,i,a,s),Zo(),c=t.memoizedState,o||f!==c||bs?(typeof d=="function"&&(Dd(t,n,d,i),c=t.memoizedState),(l=bs||x_(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,mp(e,t),r=t.memoizedProps,h=Ta(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=dr,typeof c=="object"&&c!==null&&(l=en(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&S_(t,a,i,l),bs=!1,f=t.memoizedState,a.state=f,Jo(t,i,a,s),Zo();var p=t.memoizedState;r!==d||f!==p||bs||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof o=="function"&&(Dd(t,n,o,i),p=t.memoizedState),(h=bs||x_(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Qc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ba(t,e.child,null,s),t.child=ba(t,null,n,s)):Qe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ns(e,t,s),e}function R_(e,t,n,i){return Sa(),t.flags|=256,Qe(e,t,n,i),t.child}var Ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nd(e){return{baseLanes:e,cachePool:$y()}}function Ld(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function Wv(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Zt){if(s?Ts(t):As(t),(e=xe)?(e=Px(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gs!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=Jy(e),n.return=t,t.child=n,tn=t,xe=null)):e=null,e===null)throw ks(t);return zp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(As(t),s=t.mode,o=vu({mode:"hidden",children:o},s),i=_a(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Nd(n),i.childLanes=Ld(e,r,n),t.memoizedState=Ud,Vo(null,i)):(Ts(t),Tp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ts(t),t.flags&=-257,t=Od(e,t,n)):t.memoizedState!==null?(As(t),t.child=e.child,t.flags|=128,t=null):(As(t),o=i.fallback,s=t.mode,i=vu({mode:"visible",children:i.children},s),o=_a(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ba(t,e.child,null,n),i=t.child,i.memoizedState=Nd(n),i.childLanes=Ld(e,r,n),t.memoizedState=Ud,t=Vo(null,i));else if(Ts(t),zp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(Z(419)),i.stack="",i.digest=r,ol({value:i,source:null,stack:null}),t=Od(e,t,n)}else if(He||Br(e,t,n,!1),r=(n&e.childLanes)!==0,He||r){if(r=fe,r!==null&&(i=Sy(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ra(e,i),En(r,e,i),bm;Bp(o)||bu(),t=Od(e,t,n)}else Bp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,xe=ri(o.nextSibling),tn=t,Zt=!0,Os=null,si=!1,e!==null&&jy(t,e),t=Tp(t,i.children),t.flags|=4096);return t}return s?(As(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=Ki(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ki(c,o):(o=_a(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Vo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Nd(n):(s=o.cachePool,s!==null?(l=Fe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$y(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ld(e,r,n),t.memoizedState=Ud,Vo(e.child,i)):(Ts(t),n=e.child,e=n.sibling,n=Ki(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Tp(e,t){return t=vu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vu(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function Od(e,t,n){return ba(t,e.child,null,n),e=Tp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fp(e.return,t,n)}function Id(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qv(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ie.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ge(Ie,r),Qe(e,t,i,n),i=Zt?rl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&D_(e,n,t);else if(e.tag===19)D_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&mu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Id(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&mu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Id(t,!0,n,null,a,i);break;case"together":Id(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ns(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ws|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Br(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Em(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function rE(e,t,n){switch(t.tag){case 3:au(t,t.stateNode.containerInfo),Es(t,Fe,e.memoizedState.cache),Sa();break;case 27:case 5:$d(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:Es(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ts(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wv(e,t,n):(Ts(t),e=ns(e,t,n),e!==null?e.sibling:null);Ts(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Br(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return qv(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,Xv(e,t,n,t.pendingProps);case 24:Es(t,Fe,e.memoizedState.cache)}return ns(e,t,n)}function Yv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Em(e,n)&&(t.flags&128)===0)return He=!1,rE(e,t,n);He=(e.flags&131072)!==0}else He=!1,Zt&&(t.flags&1048576)!==0&&Ky(t,rl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=pa(t.elementType),t.type=e,typeof e=="function")nm(e)?(i=Ta(e,i),t.tag=1,t=C_(null,t,e,i,n)):(t.tag=0,t=Ep(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Gp){t.tag=11,t=b_(null,t,e,i,n);break t}else if(s===kp){t.tag=14,t=E_(null,t,e,i,n);break t}}throw t=jd(e)||e,Error(Z(306,t,""))}}return t;case 0:return Ep(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ta(i,t.pendingProps),C_(e,t,i,s,n);case 3:t:{if(au(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,mp(e,t),Jo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Es(t,Fe,i),i!==a.cache&&dp(t,[Fe],n,!0),Zo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=R_(e,t,i,n);break t}else if(i!==s){s=ii(Error(Z(424)),t),ol(s),t=R_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xe=ri(e.firstChild),tn=t,Zt=!0,Os=null,si=!0,n=nv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Sa(),i===s){t=ns(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return Qc(e,t),e===null?(n=Q_(t.type,null,t.pendingProps,null))?t.memoizedState=n:Zt||(n=t.type,e=t.pendingProps,i=wu(Ls.current).createElement(n),i[$e]=t,i[Tn]=e,nn(i,n,e),Je(i),t.stateNode=i):t.memoizedState=Q_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $d(t),e===null&&Zt&&(i=t.stateNode=Bx(t.type,t.pendingProps,Ls.current),tn=t,si=!0,s=xe,Ys(t.type)?(Fp=s,xe=ri(i.firstChild)):xe=s),Qe(e,t,t.pendingProps.children,n),Qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Zt&&((s=i=xe)&&(i=OE(i,t.type,t.pendingProps,si),i!==null?(t.stateNode=i,tn=t,xe=ri(i.firstChild),si=!1,s=!0):s=!1),s||ks(t)),$d(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Ip(s,a)?i=null:r!==null&&Ip(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=hm(e,t,j1,null,null,n),dl._currentValue=s),Qc(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&Zt&&((e=n=xe)&&(n=IE(n,t.pendingProps,si),n!==null?(t.stateNode=n,tn=t,xe=null,e=!0):e=!1),e||ks(t)),null;case 13:return Wv(e,t,n);case 4:return au(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ba(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return b_(e,t,t.type,t.pendingProps,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Es(t,t.type,i.value),Qe(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ma(t),s=en(s),i=i(s),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return E_(e,t,t.type,t.pendingProps,n);case 15:return kv(e,t,t.type,t.pendingProps,n);case 19:return qv(e,t,n);case 31:return aE(e,t,n);case 22:return Xv(e,t,n,t.pendingProps);case 24:return Ma(t),i=en(Fe),e===null?(s=rm(),s===null&&(s=fe,a=am(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},lm(t),Es(t,Fe,s)):((e.lanes&n)!==0&&(mp(e,t),Jo(t,null,null,n),Zo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Es(t,Fe,i)):(i=a.cache,Es(t,Fe,i),i!==s.cache&&dp(t,[Fe],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function Vi(e){e.flags|=4}function Pd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_x())e.flags|=8192;else throw va=du,om}else e.flags&=-16777217}function U_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hx(t))if(_x())e.flags|=8192;else throw va=du,om}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yy():536870912,e.lanes|=t,Dr|=t)}function Oo(e,t){if(!Zt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function oE(e,t,n){var i=t.pendingProps;switch(sm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ji(Fe),Er(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(er(t)?Vi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wd())),ve(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Vi(t),a!==null?(ve(t),U_(t,a)):(ve(t),Pd(t,s,null,i,n))):a?a!==e.memoizedState?(Vi(t),ve(t),U_(t,a)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Vi(t),ve(t),Pd(t,s,e,i,n)),null;case 27:if(ru(t),n=Ls.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return ve(t),null}e=wi.current,er(t)?r_(t,e):(e=Bx(s,i,n),t.stateNode=e,Vi(t))}return ve(t),null;case 5:if(ru(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return ve(t),null}if(a=wi.current,er(t))r_(t,a);else{var r=wu(Ls.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[$e]=t,a[Tn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(nn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Vi(t)}}return ve(t),Pd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=Ls.current,er(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=tn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Lx(e.nodeValue,n)),e||ks(t,!0)}else e=wu(e).createTextNode(i),e[$e]=t,t.stateNode=e}return ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=er(t),n!==null){if(e===null){if(!i)throw Error(Z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(557));e[$e]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else n=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(In(t),t):(In(t),null);if((t.flags&128)!==0)throw Error(Z(558))}return ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[$e]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else s=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(In(t),t):(In(t),null)}return In(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),ve(t),null);case 4:return Er(),e===null&&Um(t.stateNode.containerInfo),ve(t),null;case 10:return ji(t.type),ve(t),null;case 19:if(Ke(Ie),i=t.memoizedState,i===null)return ve(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Oo(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=mu(e),a!==null){for(t.flags|=128,Oo(i,!1),e=a.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zy(n,e),n=n.sibling;return ge(Ie,Ie.current&1|2),Zt&&Wi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zn()>Su&&(t.flags|=128,s=!0,Oo(i,!1),t.lanes=4194304)}else{if(!s)if(e=mu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Zt)return ve(t),null}else 2*zn()-i.renderingStartTime>Su&&n!==536870912&&(t.flags|=128,s=!0,Oo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zn(),e.sibling=null,n=Ie.current,ge(Ie,s?n&1|2:n&1),Zt&&Wi(t,i.treeForkCount),e):(ve(t),null);case 22:case 23:return In(t),cm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ke(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ji(Fe),ve(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function lE(e,t){switch(sm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(Fe),Er(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ru(t),null;case 31:if(t.memoizedState!==null){if(In(t),t.alternate===null)throw Error(Z(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(In(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(Ie),null;case 4:return Er(),null;case 10:return ji(t.type),null;case 22:case 23:return In(t),cm(),e!==null&&Ke(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ji(Fe),null;case 25:return null;default:return null}}function Zv(e,t){switch(sm(t),t.tag){case 3:ji(Fe),Er();break;case 26:case 27:case 5:ru(t);break;case 4:Er();break;case 31:t.memoizedState!==null&&In(t);break;case 13:In(t);break;case 19:Ke(Ie);break;case 10:ji(t.type);break;case 22:case 23:In(t),cm(),e!==null&&Ke(ya);break;case 24:ji(Fe)}}function El(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){se(t,t.return,o)}}function Xs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){se(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){se(t,t.return,h)}}function Jv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sv(t,n)}catch(i){se(e,e.return,i)}}}function Kv(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){se(e,t,i)}}function jo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){se(e,t,s)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){se(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){se(e,t,s)}else n.current=null}function jv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){se(e,e.return,s)}}function Bd(e,t,n){try{var i=e.stateNode;CE(i,e.type,n,t),i[Tn]=t}catch(s){se(e,e.return,s)}}function Qv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ys(e.type)||e.tag===4}function zd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ys(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ap(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(i!==4&&(i===27&&Ys(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ap(e,t,n),e=e.sibling;e!==null;)Ap(e,t,n),e=e.sibling}function xu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ys(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function $v(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);nn(t,i,n),t[$e]=e,t[Tn]=n}catch(a){se(e,e.return,a)}}var qi=!1,ze=!1,Fd=!1,N_=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function cE(e,t){if(e=e.containerInfo,Lp=Uu,e=Hy(e),$p(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Op={focusedElem:e,selectionRange:n},Uu=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Ta(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){se(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Pp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function tx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n),i&4&&El(5,n);break;case 1:if(ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){se(n,n.return,r)}else{var s=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){se(n,n.return,r)}}i&64&&Jv(n),i&512&&jo(n,n.return);break;case 3:if(ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sv(e,t)}catch(r){se(n,n.return,r)}}break;case 27:t===null&&i&4&&$v(n);case 26:case 5:ki(e,n),t===null&&i&4&&jv(n),i&512&&jo(n,n.return);break;case 12:ki(e,n);break;case 31:ki(e,n),i&4&&ix(e,n);break;case 13:ki(e,n),i&4&&sx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yE.bind(null,n),PE(e,n))));break;case 22:if(i=n.memoizedState!==null||qi,!i){t=t!==null&&t.memoizedState!==null||ze,s=qi;var a=ze;qi=i,(ze=t)&&!a?Xi(e,n,(n.subtreeFlags&8772)!==0):ki(e,n),qi=s,ze=a}break;case 30:break;default:ki(e,n)}}function ex(e){var t=e.alternate;t!==null&&(e.alternate=null,ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,Mn=!1;function Gi(e,t,n){for(n=n.child;n!==null;)nx(e,t,n),n=n.sibling}function nx(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 26:ze||Ai(n,t),Gi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ze||Ai(n,t);var i=we,s=Mn;Ys(n.type)&&(we=n.stateNode,Mn=!1),Gi(e,t,n),el(n.stateNode),we=i,Mn=s;break;case 5:ze||Ai(n,t);case 6:if(i=we,s=Mn,we=null,Gi(e,t,n),we=i,Mn=s,we!==null)if(Mn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(a){se(n,t,a)}else try{we.removeChild(n.stateNode)}catch(a){se(n,t,a)}break;case 18:we!==null&&(Mn?(e=we,Y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Or(e)):Y_(we,n.stateNode));break;case 4:i=we,s=Mn,we=n.stateNode.containerInfo,Mn=!0,Gi(e,t,n),we=i,Mn=s;break;case 0:case 11:case 14:case 15:Xs(2,n,t),ze||Xs(4,n,t),Gi(e,t,n);break;case 1:ze||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Kv(n,t,i)),Gi(e,t,n);break;case 21:Gi(e,t,n);break;case 22:ze=(i=ze)||n.memoizedState!==null,Gi(e,t,n),ze=i;break;default:Gi(e,t,n)}}function ix(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Or(e)}catch(n){se(t,t.return,n)}}}function sx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Or(e)}catch(n){se(t,t.return,n)}}function uE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new N_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new N_),t;default:throw Error(Z(435,e.tag))}}function Bc(e,t){var n=uE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=vE.bind(null,e,i);i.then(s,s)}})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ys(o.type)){we=o.stateNode,Mn=!1;break t}break;case 5:we=o.stateNode,Mn=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,Mn=!0;break t}o=o.return}if(we===null)throw Error(Z(160));nx(a,r,s),we=null,Mn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ax(t,e),t=t.sibling}var fi=null;function ax(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),Sn(e),i&4&&(Xs(3,e,e.return),El(3,e),Xs(5,e,e.return));break;case 1:xn(t,e),Sn(e),i&512&&(ze||n===null||Ai(n,n.return)),i&64&&qi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=fi;if(xn(t,e),Sn(e),i&512&&(ze||n===null||Ai(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[xl]||a[$e]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),nn(a,i,n),a[$e]=e,Je(a),i=a;break t;case"link":var r=ty("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),nn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=ty("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),nn(a,i,n),s.head.appendChild(a);break;default:throw Error(Z(468,i))}a[$e]=e,Je(a),i=a}e.stateNode=i}else ey(s,e.type,e.stateNode);else e.stateNode=$_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?ey(s,e.type,e.stateNode):$_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Bd(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),Sn(e),i&512&&(ze||n===null||Ai(n,n.return)),n!==null&&i&4&&Bd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),Sn(e),i&512&&(ze||n===null||Ai(n,n.return)),e.flags&32){s=e.stateNode;try{Ar(s,"")}catch(_){se(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Bd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Fd=!0);break;case 6:if(xn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){se(e,e.return,_)}}break;case 3:if(eu=null,s=fi,fi=Cu(t.containerInfo),xn(t,e),fi=s,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(_){se(e,e.return,_)}Fd&&(Fd=!1,rx(e));break;case 4:i=fi,fi=Cu(e.stateNode.containerInfo),xn(t,e),Sn(e),fi=i;break;case 12:xn(t,e),Sn(e);break;case 31:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bc(e,i)));break;case 13:xn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xu=zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=qi,h=ze;if(qi=c||s,ze=h||l,xn(t,e),ze=h,qi=c,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||qi||ze||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){se(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){se(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Z_(p,!0):Z_(l.stateNode,!1)}catch(_){se(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Bc(e,n))));break;case 19:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bc(e,i)));break;case 30:break;case 21:break;default:xn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Qv(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var s=n.stateNode,a=zd(e);xu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Ar(r,""),n.flags&=-33);var o=zd(e);xu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=zd(e);Ap(e,c,l);break;default:throw Error(Z(161))}}catch(h){se(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tx(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xs(4,t,t.return),ma(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kv(t,t.return,n),ma(t);break;case 27:el(t.stateNode);case 26:case 5:Ai(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function Xi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(s,a,n),El(4,a);break;case 1:if(Xi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){se(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)iv(l[s],o)}catch(c){se(i,i.return,c)}}n&&r&64&&Jv(a),jo(a,a.return);break;case 27:$v(a);case 26:case 5:Xi(s,a,n),n&&i===null&&r&4&&jv(a),jo(a,a.return);break;case 12:Xi(s,a,n);break;case 31:Xi(s,a,n),n&&r&4&&ix(s,a);break;case 13:Xi(s,a,n),n&&r&4&&sx(s,a);break;case 22:a.memoizedState===null&&Xi(s,a,n),jo(a,a.return);break;case 30:break;default:Xi(s,a,n)}t=t.sibling}}function Tm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ml(n))}function Am(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e))}function hi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ox(e,t,n,i),t=t.sibling}function ox(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:hi(e,t,n,i),s&2048&&El(9,t);break;case 1:hi(e,t,n,i);break;case 3:hi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e)));break;case 12:if(s&2048){hi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){se(t,t.return,l)}}else hi(e,t,n,i);break;case 31:hi(e,t,n,i);break;case 13:hi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?hi(e,t,n,i):Qo(e,t):a._visibility&2?hi(e,t,n,i):(a._visibility|=2,ir(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Tm(r,t);break;case 24:hi(e,t,n,i),s&2048&&Am(t.alternate,t);break;default:hi(e,t,n,i)}}function ir(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ir(a,r,o,l,s),El(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?ir(a,r,o,l,s):Qo(a,r):(h._visibility|=2,ir(a,r,o,l,s)),s&&c&2048&&Tm(r.alternate,r);break;case 24:ir(a,r,o,l,s),s&&c&2048&&Am(r.alternate,r);break;default:ir(a,r,o,l,s)}t=t.sibling}}function Qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qo(n,i),s&2048&&Tm(i.alternate,i);break;case 24:Qo(n,i),s&2048&&Am(i.alternate,i);break;default:Qo(n,i)}t=t.sibling}}var Go=8192;function nr(e,t,n){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)lx(e,t,n),e=e.sibling}function lx(e,t,n){switch(e.tag){case 26:nr(e,t,n),e.flags&Go&&e.memoizedState!==null&&ZE(n,fi,e.memoizedState,e.memoizedProps);break;case 5:nr(e,t,n);break;case 3:case 4:var i=fi;fi=Cu(e.stateNode.containerInfo),nr(e,t,n),fi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Go,Go=16777216,nr(e,t,n),Go=i):nr(e,t,n));break;default:nr(e,t,n)}}function cx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Io(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,hx(i,e)}cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Xs(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$c(e)):Io(e);break;default:Io(e)}}function $c(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,hx(i,e)}cx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xs(8,t,t.return),$c(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$c(t));break;default:$c(t)}e=e.sibling}}function hx(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Xs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else t:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,a=i.return;if(ex(i),i===n){Ze=null;break t}if(s!==null){s.return=a,Ze=s;break t}Ze=a}}}var hE={getCacheForType:function(e){var t=en(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return en(Fe).controller.signal}},fE=typeof WeakMap=="function"?WeakMap:Map,$t=0,fe=null,Wt=null,Yt=0,ie=0,On=null,Ds=!1,Fr=!1,wm=!1,is=0,Ne=0,Ws=0,xa=0,Cm=0,Bn=0,Dr=0,$o=null,bn=null,wp=!1,Xu=0,fx=0,Su=1/0,Mu=null,Bs=null,Ge=0,zs=null,Ur=null,Qi=0,Cp=0,Rp=null,dx=null,tl=0,Dp=null;function Vn(){return($t&2)!==0&&Yt!==0?Yt&-Yt:Dt.T!==null?Dm():My()}function px(){if(Bn===0)if((Yt&536870912)===0||Zt){var e=wc;wc<<=1,(wc&3932160)===0&&(wc=262144),Bn=e}else Bn=536870912;return e=kn.current,e!==null&&(e.flags|=32),Bn}function En(e,t,n){(e===fe&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Nr(e,0),Us(e,Yt,Bn,!1)),vl(e,n),(($t&2)===0||e!==fe)&&(e===fe&&(($t&2)===0&&(xa|=n),Ne===4&&Us(e,Yt,Bn,!1)),Ri(e))}function mx(e,t,n){if(($t&6)!==0)throw Error(Z(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yl(e,t),s=i?mE(e,t):Hd(e,t,!0),a=i;do{if(s===0){Fr&&!i&&Us(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!dE(n)){s=Hd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=$o;var l=o.current.memoizedState.isDehydrated;if(l&&(Nr(o,r).flags|=256),r=Hd(o,r,!1),r!==2){if(wm&&!l){o.errorRecoveryDisabledLanes|=a,xa|=a,s=4;break t}a=bn,bn=s,a!==null&&(bn===null?bn=a:bn.push.apply(bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Nr(e,0),Us(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:Us(i,t,Bn,!Ds);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(s=Xu+300-zn(),10<s)){if(Us(i,t,Bn,!Ds),Lu(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=Ix(L_.bind(null,i,n,bn,Mu,wp,t,Bn,xa,Dr,Ds,a,"Throttled",-0,0),s);break t}L_(i,n,bn,Mu,wp,t,Bn,xa,Dr,Ds,a,null,-0,0)}}break}while(!0);Ri(e)}function L_(e,t,n,i,s,a,r,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},lx(t,a,d);var _=(a&62914560)===a?Xu-zn():(a&4194048)===a?fx-zn():0;if(_=JE(d,_),_!==null){Qi=a,e.cancelPendingCommit=_(I_.bind(null,e,t,a,n,i,s,r,o,l,h,d,null,f,p)),Us(e,a,r,!c);return}}I_(e,t,a,n,i,s,r,o,l)}function dE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Gn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Us(e,t,n,i){t&=~Cm,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Hn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&vy(e,n,t)}function Wu(){return($t&6)===0?(Tl(0,!1),!1):!0}function Rm(){if(Wt!==null){if(ie===0)var e=Wt.return;else e=Wt,Ji=Da=null,pm(e),Sr=null,ll=0,e=Wt;for(;e!==null;)Zv(e.alternate,e),e=e.return;Wt=null}}function Nr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,UE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Rm(),fe=e,Wt=n=Ki(e.current,null),Yt=t,ie=0,On=null,Ds=!1,Fr=yl(e,t),wm=!1,Dr=Bn=Cm=xa=Ws=Ne=0,bn=$o=null,wp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Hn(i),a=1<<s;t|=e[s],i&=~a}return is=t,Bu(),n}function gx(e,t){Bt=null,Dt.H=ul,t===zr||t===Fu?(t=h_(),ie=3):t===om?(t=h_(),ie=4):ie=t===bm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,On=t,Wt===null&&(Ne=1,yu(e,ii(t,e.current)))}function _x(){var e=kn.current;return e===null?!0:(Yt&4194048)===Yt?ai===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?e===ai:!1}function yx(){var e=Dt.H;return Dt.H=ul,e===null?ul:e}function vx(){var e=Dt.A;return Dt.A=hE,e}function bu(){Ne=4,Ds||(Yt&4194048)!==Yt&&kn.current!==null||(Fr=!0),(Ws&134217727)===0&&(xa&134217727)===0||fe===null||Us(fe,Yt,Bn,!1)}function Hd(e,t,n){var i=$t;$t|=2;var s=yx(),a=vx();(fe!==e||Yt!==t)&&(Mu=null,Nr(e,t)),t=!1;var r=Ne;t:do try{if(ie!==0&&Wt!==null){var o=Wt,l=On;switch(ie){case 8:Rm(),r=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var c=ie;if(ie=0,On=null,gr(e,o,l,c),n&&Fr){r=0;break t}break;default:c=ie,ie=0,On=null,gr(e,o,l,c)}}pE(),r=Ne;break}catch(h){gx(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ji=Da=null,$t=i,Dt.H=s,Dt.A=a,Wt===null&&(fe=null,Yt=0,Bu()),r}function pE(){for(;Wt!==null;)xx(Wt)}function mE(e,t){var n=$t;$t|=2;var i=yx(),s=vx();fe!==e||Yt!==t?(Mu=null,Su=zn()+500,Nr(e,t)):Fr=yl(e,t);t:do try{if(ie!==0&&Wt!==null){t=Wt;var a=On;e:switch(ie){case 1:ie=0,On=null,gr(e,t,a,1);break;case 2:case 9:if(u_(a)){ie=0,On=null,O_(t);break}t=function(){ie!==2&&ie!==9||fe!==e||(ie=7),Ri(e)},a.then(t,t);break t;case 3:ie=7;break t;case 4:ie=5;break t;case 7:u_(a)?(ie=0,On=null,O_(t)):(ie=0,On=null,gr(e,t,a,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?Hx(r):o.stateNode.complete){ie=0,On=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,qu(c)):Wt=null}break e}}ie=0,On=null,gr(e,t,a,5);break;case 6:ie=0,On=null,gr(e,t,a,6);break;case 8:Rm(),Ne=6;break t;default:throw Error(Z(462))}}gE();break}catch(h){gx(e,h)}while(!0);return Ji=Da=null,Dt.H=i,Dt.A=s,$t=n,Wt!==null?0:(fe=null,Yt=0,Bu(),Ne)}function gE(){for(;Wt!==null&&!Fb();)xx(Wt)}function xx(e){var t=Yv(e.alternate,e,is);e.memoizedProps=e.pendingProps,t===null?qu(e):Wt=t}function O_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=w_(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=w_(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:pm(t);default:Zv(n,t),t=Wt=Zy(t,is),t=Yv(n,t,is)}e.memoizedProps=e.pendingProps,t===null?qu(e):Wt=t}function gr(e,t,n,i){Ji=Da=null,pm(t),Sr=null,ll=0;var s=t.return;try{if(sE(e,s,t,n,Yt)){Ne=1,yu(e,ii(n,e.current)),Wt=null;return}}catch(a){if(s!==null)throw Wt=s,a;Ne=1,yu(e,ii(n,e.current)),Wt=null;return}t.flags&32768?(Zt||i===1?e=!0:Fr||(Yt&536870912)!==0?e=!1:(Ds=e=!0,(i===2||i===9||i===3||i===6)&&(i=kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Sx(t,e)):qu(t)}function qu(e){var t=e;do{if((t.flags&32768)!==0){Sx(t,Ds);return}e=t.return;var n=oE(t.alternate,t,is);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Ne===0&&(Ne=5)}function Sx(e,t){do{var n=lE(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Ne=6,Wt=null}function I_(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Yu();while(Ge!==0);if(($t&6)!==0)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(a=t.lanes|t.childLanes,a|=tm,Jb(e,n,a,r,o,l),e===fe&&(Wt=fe=null,Yt=0),Ur=t,zs=e,Qi=n,Cp=a,Rp=s,dx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xE(ou,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=te.p,te.p=2,r=$t,$t|=4;try{cE(e,t,n)}finally{$t=r,te.p=s,Dt.T=i}}Ge=1,Mx(),bx(),Ex()}}function Mx(){if(Ge===1){Ge=0;var e=zs,t=Ur,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Dt.T,Dt.T=null;var i=te.p;te.p=2;var s=$t;$t|=4;try{ax(t,e);var a=Op,r=Hy(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Fy(o.ownerDocument.documentElement,o)){if(l!==null&&$p(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,x=Math.min(l.start,_),m=l.end===void 0?x:Math.min(l.end,_);!p.extend&&x>m&&(r=m,m=x,x=r);var u=i_(o,x),g=i_(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Uu=!!Lp,Op=Lp=null}finally{$t=s,te.p=i,Dt.T=n}}e.current=t,Ge=2}}function bx(){if(Ge===2){Ge=0;var e=zs,t=Ur,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=te.p;te.p=2;var s=$t;$t|=4;try{tx(e,t.alternate,t)}finally{$t=s,te.p=i,Dt.T=n}}Ge=3}}function Ex(){if(Ge===4||Ge===3){Ge=0,Hb();var e=zs,t=Ur,n=Qi,i=dx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,Ur=zs=null,Tx(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Bs=null),qp(n),t=t.stateNode,Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Dt.T,s=te.p,te.p=2,Dt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Dt.T=t,te.p=s}}(Qi&3)!==0&&Yu(),Ri(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Dp?tl++:(tl=0,Dp=e):tl=0,Tl(0,!1)}}function Tx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ml(t)))}function Yu(){return Mx(),bx(),Ex(),Ax()}function Ax(){if(Ge!==5)return!1;var e=zs,t=Cp;Cp=0;var n=qp(Qi),i=Dt.T,s=te.p;try{te.p=32>n?32:n,Dt.T=null,n=Rp,Rp=null;var a=zs,r=Qi;if(Ge=0,Ur=zs=null,Qi=0,($t&6)!==0)throw Error(Z(331));var o=$t;if($t|=4,ux(a.current),ox(a,a.current,r,n),$t=o,Tl(0,!1),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(_l,a)}catch{}return!0}finally{te.p=s,Dt.T=i,Tx(e,t)}}function P_(e,t,n){t=ii(n,t),t=bp(e.stateNode,t,2),e=Ps(e,t,2),e!==null&&(vl(e,2),Ri(e))}function se(e,t,n){if(e.tag===3)P_(e,e,n);else for(;t!==null;){if(t.tag===3){P_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bs===null||!Bs.has(i))){e=ii(n,e),n=Vv(2),i=Ps(t,n,2),i!==null&&(Gv(n,i,t,e),vl(i,2),Ri(i));break}}t=t.return}}function Vd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new fE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(wm=!0,s.add(n),e=_E.bind(null,e,t,n),t.then(e,e))}function _E(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(Yt&n)===n&&(Ne===4||Ne===3&&(Yt&62914560)===Yt&&300>zn()-Xu?($t&2)===0&&Nr(e,0):Cm|=n,Dr===Yt&&(Dr=0)),Ri(e)}function wx(e,t){t===0&&(t=yy()),e=Ra(e,t),e!==null&&(vl(e,t),Ri(e))}function yE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wx(e,n)}function vE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),wx(e,n)}function xE(e,t){return Xp(e,t)}var Eu=null,sr=null,Up=!1,Tu=!1,Gd=!1,Ns=0;function Ri(e){e!==sr&&e.next===null&&(sr===null?Eu=sr=e:sr=sr.next=e),Tu=!0,Up||(Up=!0,ME())}function Tl(e,t){if(!Gd&&Tu){Gd=!0;do for(var n=!1,i=Eu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Hn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,B_(i,a))}else a=Yt,a=Lu(i,i===fe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||yl(i,a)||(n=!0,B_(i,a));i=i.next}while(n);Gd=!1}}function SE(){Cx()}function Cx(){Tu=Up=!1;var e=0;Ns!==0&&DE()&&(e=Ns);for(var t=zn(),n=null,i=Eu;i!==null;){var s=i.next,a=Rx(i,t);a===0?(i.next=null,n===null?Eu=s:n.next=s,s===null&&(sr=n)):(n=i,(e!==0||(a&3)!==0)&&(Tu=!0)),i=s}Ge!==0&&Ge!==5||Tl(e,!1),Ns!==0&&(Ns=0)}function Rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Hn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Zb(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=fe,n=Yt,n=Lu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&_d(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&_d(i),qp(n)){case 2:case 8:n=gy;break;case 32:n=ou;break;case 268435456:n=_y;break;default:n=ou}return i=Dx.bind(null,e),n=Xp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&_d(i),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Yu()&&e.callbackNode!==n)return null;var i=Yt;return i=Lu(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mx(e,i,t),Rx(e,zn()),e.callbackNode!=null&&e.callbackNode===n?Dx.bind(null,e):null)}function B_(e,t){if(Yu())return null;mx(e,t,!0)}function ME(){NE(function(){($t&6)!==0?Xp(my,SE):Cx()})}function Dm(){if(Ns===0){var e=wr;e===0&&(e=Ac,Ac<<=1,(Ac&261888)===0&&(Ac=256)),Ns=e}return Ns}function z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xc(""+e)}function F_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=z_((s[Tn]||null).action),r=i.submitter;r&&(t=(t=r[Tn]||null)?z_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Ou("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ns!==0){var l=r?F_(s,r):new FormData(s);Sp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?F_(s,r):new FormData(s),Sp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(zc=0;zc<cp.length;zc++)Fc=cp[zc],H_=Fc.toLowerCase(),V_=Fc[0].toUpperCase()+Fc.slice(1),di(H_,"on"+V_);var Fc,H_,V_,zc;di(Gy,"onAnimationEnd");di(ky,"onAnimationIteration");di(Xy,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(V1,"onTransitionRun");di(G1,"onTransitionStart");di(k1,"onTransitionCancel");di(Wy,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function Ux(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){cu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){cu(h)}s.currentTarget=null,a=l}}}}function Xt(e,t){var n=t[ep];n===void 0&&(n=t[ep]=new Set);var i=e+"__bubble";n.has(i)||(Nx(t,e,2,!1),n.add(i))}function kd(e,t,n){var i=0;t&&(i|=4),Nx(n,e,i,t)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function Um(e){if(!e[Hc]){e[Hc]=!0,by.forEach(function(n){n!=="selectionchange"&&(EE.has(n)||kd(n,!1,e),kd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hc]||(t[Hc]=!0,kd("selectionchange",!1,t))}}function Nx(e,t,n,i){switch(Wx(t)){case 2:var s=QE;break;case 8:s=$E;break;default:s=Im}n=s.bind(null,t,n,e),s=void 0,!rp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Xd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Uy(function(){var c=a,h=Jp(n),d=[];t:{var f=qy.get(e);if(f!==void 0){var p=Ou,_=e;switch(e){case"keypress":if(qc(n)===0)break t;case"keydown":case"keyup":p=v1;break;case"focusin":_="focus",p=Md;break;case"focusout":_="blur",p=Md;break;case"beforeblur":case"afterblur":p=Md;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=o1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=M1;break;case Gy:case ky:case Xy:p=u1;break;case Wy:p=E1;break;case"scroll":case"scrollend":p=a1;break;case"wheel":p=A1;break;case"copy":case"cut":case"paste":p=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=K0;break;case"toggle":case"beforetoggle":p=C1}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||u===null||(v=il(g,u),v!=null&&x.push(fl(g,v,y))),m)break;g=g.return}0<x.length&&(f=new p(f,_,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==ap&&(_=n.relatedTarget||n.fromElement)&&(or(_)||_[Ir]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?or(_):null,_!==null&&(m=gl(_),x=_.tag,_!==m||x!==5&&x!==27&&x!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Z0,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=K0,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Ho(p),y=_==null?f:Ho(_),f=new x(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=y,v=null,or(h)===c&&(x=new x(u,g+"enter",_,n,h),x.target=y,x.relatedTarget=m,v=x),m=v,p&&_)e:{for(x=TE,u=p,g=_,y=0,v=u;v;v=x(v))y++;v=0;for(var T=g;T;T=x(T))v++;for(;0<y-v;)u=x(u),y--;for(;0<v-y;)g=x(g),v--;for(;y--;){if(u===g||g!==null&&u===g.alternate){x=u;break e}u=x(u),g=x(g)}x=null}else x=null;p!==null&&G_(d,f,p,x,!1),_!==null&&m!==null&&G_(d,m,_,x,!0)}}t:{if(f=c?Ho(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=t_;else if($0(f))if(By)R=z1;else{R=P1;var w=I1}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Zp(c.elementType)&&(R=t_):R=B1;if(R&&(R=R(e,c))){Py(d,R,n,h);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&sp(f,"number",f.value)}switch(w=c?Ho(c):window,e){case"focusin":($0(w)||w.contentEditable==="true")&&(ur=w,op=c,Wo=null);break;case"focusout":Wo=op=ur=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,s_(d,n,h);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":s_(d,n,h)}var N;if(Qp)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else cr?Oy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ly&&n.locale!=="ko"&&(cr||E!=="onCompositionStart"?E==="onCompositionEnd"&&cr&&(N=Ny()):(Rs=h,Kp="value"in Rs?Rs.value:Rs.textContent,cr=!0)),w=Au(c,E),0<w.length&&(E=new J0(E,e,null,n,h),d.push({event:E,listeners:w}),N?E.data=N:(N=Iy(n),N!==null&&(E.data=N)))),(N=D1?U1(e,n):N1(e,n))&&(E=Au(c,"onBeforeInput"),0<E.length&&(w=new J0("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:E}),w.data=N)),bE(d,e,c,n,h)}Ux(d,t)})}function fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Au(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=il(e,n),s!=null&&i.unshift(fl(e,s,a)),s=il(e,t),s!=null&&i.push(fl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function TE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G_(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=il(n,a),c!=null&&r.unshift(fl(n,c,l))):s||(c=il(n,a),c!=null&&r.push(fl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var AE=/\r\n?/g,wE=/\u0000|\uFFFD/g;function k_(e){return(typeof e=="string"?e:""+e).replace(AE,`
`).replace(wE,"")}function Lx(e,t){return t=k_(t),k_(e)===t}function le(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ar(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ar(e,""+i);break;case"className":Rc(e,"class",i);break;case"tabIndex":Rc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rc(e,n,i);break;case"style":Dy(e,i,a);break;case"data":if(t!=="object"){Rc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",s.name,s,null),le(e,t,"formEncType",s.formEncType,s,null),le(e,t,"formMethod",s.formMethod,s,null),le(e,t,"formTarget",s.formTarget,s,null)):(le(e,t,"encType",s.encType,s,null),le(e,t,"method",s.method,s,null),le(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Xc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),kc(e,"popover",i);break;case"xlinkActuate":Hi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":kc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=i1.get(n)||n,kc(e,n,i))}}function Np(e,t,n,i,s,a){switch(n){case"style":Dy(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ar(e,i):(typeof i=="number"||typeof i=="bigint")&&Ar(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ey.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Tn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):kc(e,n,i)}}}function nn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:le(e,t,a,r,n,null)}}s&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:le(e,t,i,h,n,null)}}wy(e,a,o,l,c,r,s,!1);return;case"select":Xt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:le(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?yr(e,!!i,t,!1):n!=null&&yr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:le(e,t,r,o,n,null)}Ry(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<hl.length;i++)Xt(hl[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:le(e,t,c,i,n,null)}return;default:if(Zp(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Np(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function CE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==d&&le(e,t,f,p,i,d)}}ip(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||le(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&le(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?yr(e,!!n,f,!1):!!i!=!!n&&(t!=null?yr(e,!!n,t,!0):yr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Z(91));break;default:s!==a&&le(e,t,r,s,i,a)}Cy(e,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:le(e,t,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&le(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(Zp(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Np(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Np(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||le(e,t,d,f,i,p)}function X_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&X_(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&X_(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lp=null,Op=null;function wu(e){return e.nodeType===9?e:e.ownerDocument}function W_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ox(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ip(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function DE(){var e=window.event;return e&&e.type==="popstate"?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Ix=typeof setTimeout=="function"?setTimeout:void 0,UE=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(e){return q_.resolve(null).then(e).catch(LE)}:Ix;function LE(e){setTimeout(function(){throw e})}function Ys(e){return e==="head"}function Y_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Or(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")el(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,el(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[xl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&el(e.ownerDocument.body);n=s}while(n);Or(t)}function Z_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Pp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pp(n),Yp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function OE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function IE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function Px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function Bp(e){return e.data==="$?"||e.data==="$~"}function zp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fp=null;function J_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function K_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bx(e,t,n){switch(t=wu(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function el(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yp(e)}var oi=new Map,j_=new Set;function Cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ss=te.d;te.d={f:BE,r:zE,D:FE,C:HE,L:VE,m:GE,X:XE,S:kE,M:WE};function BE(){var e=ss.f(),t=Wu();return e||t}function zE(e){var t=Pr(e);t!==null&&t.tag===5&&t.type==="form"?Dv(t):ss.r(e)}var Hr=typeof document>"u"?null:document;function zx(e,t,n){var i=Hr;if(i&&typeof t=="string"&&t){var s=ni(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),j_.has(s)||(j_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),nn(t,"link",e),Je(t),i.head.appendChild(t)))}}function FE(e){ss.D(e),zx("dns-prefetch",e,null)}function HE(e,t){ss.C(e,t),zx("preconnect",e,t)}function VE(e,t,n){ss.L(e,t,n);var i=Hr;if(i&&e&&t){var s='link[rel="preload"][as="'+ni(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ni(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ni(n.imageSizes)+'"]')):s+='[href="'+ni(e)+'"]';var a=s;switch(t){case"style":a=Lr(e);break;case"script":a=Vr(e)}oi.has(a)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Al(a))||t==="script"&&i.querySelector(wl(a))||(t=i.createElement("link"),nn(t,"link",e),Je(t),i.head.appendChild(t)))}}function GE(e,t){ss.m(e,t);var n=Hr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ni(i)+'"][href="'+ni(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Vr(e)}if(!oi.has(a)&&(e=Se({rel:"modulepreload",href:e},t),oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wl(a)))return}i=n.createElement("link"),nn(i,"link",e),Je(i),n.head.appendChild(i)}}}function kE(e,t,n){ss.S(e,t,n);var i=Hr;if(i&&e){var s=_r(i).hoistableStyles,a=Lr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Al(a)))o.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(a))&&Nm(e,n);var l=r=i.createElement("link");Je(l),nn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,tu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function XE(e,t){ss.X(e,t);var n=Hr;if(n&&e){var i=_r(n).hoistableScripts,s=Vr(e),a=i.get(s);a||(a=n.querySelector(wl(s)),a||(e=Se({src:e,async:!0},t),(t=oi.get(s))&&Lm(e,t),a=n.createElement("script"),Je(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function WE(e,t){ss.M(e,t);var n=Hr;if(n&&e){var i=_r(n).hoistableScripts,s=Vr(e),a=i.get(s);a||(a=n.querySelector(wl(s)),a||(e=Se({src:e,async:!0,type:"module"},t),(t=oi.get(s))&&Lm(e,t),a=n.createElement("script"),Je(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Q_(e,t,n,i){var s=(s=Ls.current)?Cu(s):null;if(!s)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lr(n.href),n=_r(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lr(n.href);var a=_r(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Al(e)))&&!a._p&&(r.instance=a,r.state.loading=5),oi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,n),a||qE(s,e,n,r.state))),t&&i===null)throw Error(Z(528,""));return r}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vr(n),n=_r(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function Lr(e){return'href="'+ni(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function Fx(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function qE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),nn(t,"link",n),Je(t),e.head.appendChild(t))}function Vr(e){return'[src="'+ni(e)+'"]'}function wl(e){return"script[async]"+e}function $_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ni(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var s=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),nn(i,"style",s),tu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Lr(n.href);var a=e.querySelector(Al(s));if(a)return t.state.loading|=4,t.instance=a,Je(a),a;i=Fx(n),(s=oi.get(s))&&Nm(i,s),a=(e.ownerDocument||e).createElement("link"),Je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),t.state.loading|=4,tu(a,n.precedence,e),t.instance=a;case"script":return a=Vr(n.src),(s=e.querySelector(wl(a)))?(t.instance=s,Je(s),s):(i=n,(s=oi.get(a))&&(i=Se({},n),Lm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Je(s),nn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,tu(i,n.precedence,e));return t.instance}function tu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Nm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eu=null;function ty(e,t,n){if(eu===null){var i=new Map,s=eu=new Map;s.set(n,i)}else s=eu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[xl]||a[$e]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function ey(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function YE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Lr(i.href),a=t.querySelector(Al(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ru.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Je(a);return}a=t.ownerDocument||t,i=Fx(i),(s=oi.get(s))&&Nm(i,s),a=a.createElement("link"),Je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ru.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var qd=0;function JE(e,t){return e.stylesheets&&e.count===0&&nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&qd===0&&(qd=62500*RE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>qd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function nu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,t.forEach(KE,e),Du=null,Ru.call(e))}function KE(e,t){if(!(t.state.loading&4)){var n=Du.get(e);if(n)var i=n.get(null);else{n=new Map,Du.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ru.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var dl={$$typeof:Yi,Provider:null,Consumer:null,_currentValue:ga,_currentValue2:ga,_threadCount:0};function jE(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.hiddenUpdates=yd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Vx(e,t,n,i,s,a,r,o,l,c,h,d){return e=new jE(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=Pn(3,null,null,t),e.current=a,a.stateNode=e,t=am(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},lm(a),e}function Gx(e){return e?(e=dr,e):dr}function kx(e,t,n,i,s,a){s=Gx(s),i.context===null?i.context=s:i.pendingContext=s,i=Is(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ps(e,i,t),n!==null&&(En(n,e,t),Yo(n,e,t))}function ny(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Om(e,t){ny(e,t),(e=e.alternate)&&ny(e,t)}function Xx(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&En(t,e,67108864),Om(e,67108864)}}function iy(e){if(e.tag===13||e.tag===31){var t=Vn();t=Wp(t);var n=Ra(e,t);n!==null&&En(n,e,t),Om(e,t)}}var Uu=!0;function QE(e,t,n,i){var s=Dt.T;Dt.T=null;var a=te.p;try{te.p=2,Im(e,t,n,i)}finally{te.p=a,Dt.T=s}}function $E(e,t,n,i){var s=Dt.T;Dt.T=null;var a=te.p;try{te.p=8,Im(e,t,n,i)}finally{te.p=a,Dt.T=s}}function Im(e,t,n,i){if(Uu){var s=Hp(i);if(s===null)Xd(e,t,i,Nu,n),sy(e,i);else if(eT(s,e,t,n,i))i.stopPropagation();else if(sy(e,i),t&4&&-1<tT.indexOf(e)){for(;s!==null;){var a=Pr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=da(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Hn(r);o.entanglements[1]|=l,r&=~l}Ri(a),($t&6)===0&&(Su=zn()+500,Tl(0,!1))}}break;case 31:case 13:o=Ra(a,2),o!==null&&En(o,a,2),Wu(),Om(a,2)}if(a=Hp(i),a===null&&Xd(e,t,i,Nu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Xd(e,t,i,null,n)}}function Hp(e){return e=Jp(e),Pm(e)}var Nu=null;function Pm(e){if(Nu=null,e=or(e),e!==null){var t=gl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=uy(t),e!==null)return e;e=null}else if(n===31){if(e=hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nu=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vb()){case my:return 2;case gy:return 8;case ou:case Gb:return 32;case _y:return 268435456;default:return 32}default:return 32}}var Vp=!1,Fs=null,Hs=null,Vs=null,pl=new Map,ml=new Map,ws=[],tT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sy(e,t){switch(e){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":Hs=null;break;case"mouseover":case"mouseout":Vs=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(t.pointerId)}}function Po(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Pr(t),t!==null&&Xx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function eT(e,t,n,i,s){switch(t){case"focusin":return Fs=Po(Fs,e,t,n,i,s),!0;case"dragenter":return Hs=Po(Hs,e,t,n,i,s),!0;case"mouseover":return Vs=Po(Vs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return pl.set(a,Po(pl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ml.set(a,Po(ml.get(a)||null,e,t,n,i,s)),!0}return!1}function qx(e){var t=or(e.target);if(t!==null){var n=gl(t);if(n!==null){if(t=n.tag,t===13){if(t=uy(n),t!==null){e.blockedOn=t,V0(e.priority,function(){iy(n)});return}}else if(t===31){if(t=hy(n),t!==null){e.blockedOn=t,V0(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ap=i,n.target.dispatchEvent(i),ap=null}else return t=Pr(n),t!==null&&Xx(t),e.blockedOn=n,!1;t.shift()}return!0}function ay(e,t,n){iu(e)&&n.delete(t)}function nT(){Vp=!1,Fs!==null&&iu(Fs)&&(Fs=null),Hs!==null&&iu(Hs)&&(Hs=null),Vs!==null&&iu(Vs)&&(Vs=null),pl.forEach(ay),ml.forEach(ay)}function Vc(e,t){e.blockedOn===t&&(e.blockedOn=null,Vp||(Vp=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,nT)))}var Gc=null;function ry(e){Gc!==e&&(Gc=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Pm(i||n)===null)continue;break}var a=Pr(n);a!==null&&(e.splice(t,3),t-=3,Sp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Or(e){function t(l){return Vc(l,e)}Fs!==null&&Vc(Fs,e),Hs!==null&&Vc(Hs,e),Vs!==null&&Vc(Vs,e),pl.forEach(t),ml.forEach(t);for(var n=0;n<ws.length;n++){var i=ws[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ws.length&&(n=ws[0],n.blockedOn===null);)qx(n),n.blockedOn===null&&ws.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Tn]||null;if(typeof a=="function")r||ry(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Tn]||null)o=r.formAction;else if(Pm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ry(n)}}}function Yx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bm(e){this._internalRoot=e}Zu.prototype.render=Bm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=Vn();kx(n,i,e,t,null,null)};Zu.prototype.unmount=Bm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kx(e.current,2,null,e,null,null),Wu(),t[Ir]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var t=My();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ws.length&&t!==0&&t<ws[n].priority;n++);ws.splice(n,0,e),n===0&&qx(e)}};var oy=ly.version;if(oy!=="19.2.6")throw Error(Z(527,oy,"19.2.6"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=Ob(t),e=e!==null?fy(e):null,e=e===null?null:e.stateNode,e};var iT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Bo.isDisabled&&Bo.supportsFiber))try{_l=Bo.inject(iT),Fn=Bo}catch{}var Bo;Ju.createRoot=function(e,t){if(!cy(e))throw Error(Z(299));var n=!1,i="",s=zv,a=Fv,r=Hv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vx(e,1,!1,null,null,n,i,null,s,a,r,Yx),e[Ir]=t.current,Um(e),new Bm(t)};Ju.hydrateRoot=function(e,t,n){if(!cy(e))throw Error(Z(299));var i=!1,s="",a=zv,r=Fv,o=Hv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Vx(e,1,!0,t,n??null,i,s,l,a,r,o,Yx),t.context=Gx(null),n=t.current,i=Vn(),i=Wp(i),s=Is(i),s.callback=null,Ps(n,s,i),n=i,t.current.lanes=n,vl(t,n),Ri(t),e[Ir]=t.current,Um(e),new Zu(t)};Ju.version="19.2.6"});var jx=vs((e3,Kx)=>{"use strict";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),Kx.exports=Zx()});var D=o0(xc(),1),QM=o0(jx(),1);var aa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ra={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AS=0,dg=1,wS=2;var pg=1,CS=2,Oi=3,ds=0,yn=1,Ii=2,gs=0,Ba=1,mg=2,gg=3,_g=4,RS=5,ea=100,DS=101,US=102,NS=103,LS=104,OS=200,IS=201,PS=202,BS=203,Sh=204,Mh=205,zS=206,FS=207,HS=208,VS=209,GS=210,kS=211,XS=212,WS=213,qS=214,Kh=0,jh=1,Qh=2,za=3,$h=4,tf=5,ef=6,nf=7,yg=0,YS=1,ZS=2,_s=0,JS=1,KS=2,jS=3,QS=4,$S=5,tM=6,eM=7;var vg=300,Ga=301,ka=302,sf=303,af=304,uc=306,bh=1e3,ta=1001,Eh=1002,wn=1003,nM=1004;var hc=1005;var vi=1006,rf=1007;var oa=1008;var Pi=1009,xg=1010,Sg=1011,_o=1012,of=1013,la=1014,Si=1015,yo=1016,lf=1017,cf=1018,vo=1020,Mg=35902,bg=35899,Eg=1021,Tg=1022,ui=1023,ro=1026,xo=1027,uf=1028,hf=1029,Ag=1030,ff=1031;var df=1033,fc=33776,dc=33777,pc=33778,mc=33779,pf=35840,mf=35841,gf=35842,_f=35843,yf=36196,vf=37492,xf=37496,Sf=37808,Mf=37809,bf=37810,Ef=37811,Tf=37812,Af=37813,wf=37814,Cf=37815,Rf=37816,Df=37817,Uf=37818,Nf=37819,Lf=37820,Of=37821,If=36492,Pf=36494,Bf=36495,zf=36283,Ff=36284,Hf=36285,Vf=36286;var Hl=2300,Th=2301,xh=2302,og=2400,lg=2401,cg=2402;var iM=3200,sM=3201;var aM=0,rM=1,ys="",qn="srgb",Fa="srgb-linear",Vl="linear",re="srgb";var Ia=7680;var ug=519,oM=512,lM=513,cM=514,wg=515,uM=516,hM=517,fM=518,dM=519,Ah=35044;var Cg="300 es",yi=2e3,Gl=2001;var Di=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qx=1234567,zl=Math.PI/180,oo=180/Math.PI;function hs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[e&255]+on[e>>8&255]+on[e>>16&255]+on[e>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Gt(e,t,n){return Math.max(t,Math.min(n,e))}function Rg(e,t){return(e%t+t)%t}function sT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function aT(e,t,n){return e!==t?(n-e)/(t-e):0}function Fl(e,t,n){return(1-n)*e+n*t}function rT(e,t,n,i){return Fl(e,t,1-Math.exp(-n*i))}function oT(e,t=1){return t-Math.abs(Rg(e,t*2)-t)}function lT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function cT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function uT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function hT(e,t){return e+Math.random()*(t-e)}function fT(e){return e*(.5-Math.random())}function dT(e){e!==void 0&&(Qx=e);let t=Qx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pT(e){return e*zl}function mT(e){return e*oo}function gT(e){return(e&e-1)===0&&e!==0}function _T(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function yT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function vT(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ae(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Dg={DEG2RAD:zl,RAD2DEG:oo,generateUUID:hs,clamp:Gt,euclideanModulo:Rg,mapLinear:sT,inverseLerp:aT,lerp:Fl,damp:rT,pingpong:oT,smoothstep:lT,smootherstep:cT,randInt:uT,randFloat:hT,randFloatSpread:fT,seededRandom:dT,degToRad:pT,radToDeg:mT,isPowerOfTwo:gT,ceilPowerOfTwo:_T,floorPowerOfTwo:yT,setQuaternionFromProperEuler:vT,normalize:ae,denormalize:_i},wt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],_=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==_){let m=1-o,u=l*f+c*p+h*_+d*x,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let T=Math.sqrt(y),R=Math.atan2(T,u*g);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}let v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+_*v,d=d*m+x*v,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+h*d+l*p-c*f,t[n+1]=l*_+h*f+c*d-o*p,t[n+2]=c*_+h*p+o*f-l*d,t[n+3]=h*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion($x.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion($x.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zm.copy(this).projectOnVector(t),this.sub(zm)}reflect(t){return this.sub(zm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zm=new B,$x=new Cn,zt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],u=s[6],g=s[1],y=s[4],v=s[7],T=s[2],R=s[5],w=s[8];return a[0]=r*x+o*g+l*T,a[3]=r*m+o*y+l*R,a[6]=r*u+o*v+l*w,a[1]=c*x+h*g+d*T,a[4]=c*m+h*y+d*R,a[7]=c*u+h*v+d*w,a[2]=f*x+p*g+_*T,a[5]=f*m+p*y+_*R,a[8]=f*u+p*v+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,_=n*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Fm.makeScale(t,n)),this}rotate(t){return this.premultiply(Fm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Fm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fm=new zt;function Ug(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function kl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function pM(){let e=kl("canvas");return e.style.display="block",e}var tS={};function lo(e){e in tS||(tS[e]=!0,console.warn(e))}function mM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var eS=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nS=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xT(){let e={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===re&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===re&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?Vl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Fa]:{primaries:t,whitePoint:i,transfer:Vl,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),e}var jt=xT();function fs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Gr,wh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gr===void 0&&(Gr=kl("canvas")),Gr.width=t.width,Gr.height=t.height;let s=Gr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=kl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=fs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ST=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Hm(s[r].image)):a.push(Hm(s[r]))}else a=Hm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Hm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?wh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var MT=0,Vm=new B,_n=class e extends Di{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ta,s=ta,a=vi,r=oa,o=ui,l=Pi,c=e.DEFAULT_ANISOTROPY,h=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=hs(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vm).x}get height(){return this.source.getSize(Vm).y}get depth(){return this.source.getSize(Vm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bh:t.x=t.x-Math.floor(t.x);break;case ta:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bh:t.y=t.y-Math.floor(t.y);break;case ta:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=vg;_n.DEFAULT_ANISOTROPY=1;var Le=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(p+1)/2,T=(u+1)/2,R=(h+f)/4,w=(d+x)/4,N=(_+m)/4;return y>v&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=R/i,a=w/i):v>T?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=R/s,a=N/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=N/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-x)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this.w=Gt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this.w=Gt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ch=class extends Di{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new _n(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends Ch{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Xl=class extends _n{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rh=class extends _n{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(a,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ku.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ku.copy(i.boundingBox)),Ku.applyMatrix4(t.matrixWorld),this.union(Ku)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),ju.subVectors(this.max,Cl),kr.subVectors(t.a,Cl),Xr.subVectors(t.b,Cl),Wr.subVectors(t.c,Cl),Zs.subVectors(Xr,kr),Js.subVectors(Wr,Xr),Ua.subVectors(kr,Wr);let n=[0,-Zs.z,Zs.y,0,-Js.z,Js.y,0,-Ua.z,Ua.y,Zs.z,0,-Zs.x,Js.z,0,-Js.x,Ua.z,0,-Ua.x,-Zs.y,Zs.x,0,-Js.y,Js.x,0,-Ua.y,Ua.x,0];return!Gm(n,kr,Xr,Wr,ju)||(n=[1,0,0,0,1,0,0,0,1],!Gm(n,kr,Xr,Wr,ju))?!1:(Qu.crossVectors(Zs,Js),n=[Qu.x,Qu.y,Qu.z],Gm(n,kr,Xr,Wr,ju))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(as),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},as=[new B,new B,new B,new B,new B,new B,new B,new B],pi=new B,Ku=new Ni,kr=new B,Xr=new B,Wr=new B,Zs=new B,Js=new B,Ua=new B,Cl=new B,ju=new B,Qu=new B,Na=new B;function Gm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Na.fromArray(e,a);let o=s.x*Math.abs(Na.x)+s.y*Math.abs(Na.y)+s.z*Math.abs(Na.z),l=t.dot(Na),c=n.dot(Na),h=i.dot(Na);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var bT=new Ni,Rl=new B,km=new B,ps=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):bT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rl.subVectors(t,this.center);let n=Rl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(km.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rl.copy(t.center).add(km)),this.expandByPoint(Rl.copy(t.center).sub(km))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rs=new B,Xm=new B,$u=new B,Ks=new B,Wm=new B,th=new B,qm=new B,na=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=rs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,n),rs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Xm.copy(t).add(n).multiplyScalar(.5),$u.copy(n).sub(t).normalize(),Ks.copy(this.origin).sub(Xm);let a=t.distanceTo(n)*.5,r=-this.direction.dot($u),o=Ks.dot(this.direction),l=-Ks.dot($u),c=Ks.lengthSq(),h=Math.abs(1-r*r),d,f,p,_;if(h>0)if(d=r*l-o,f=r*o-l,_=a*h,d>=0)if(f>=-_)if(f<=_){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xm).addScaledVector($u,f),p}intersectSphere(t,n){rs.subVectors(t.center,this.origin);let i=rs.dot(this.direction),s=rs.dot(rs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,n,i,s,a){Wm.subVectors(n,t),th.subVectors(i,t),qm.crossVectors(Wm,th);let r=this.direction.dot(qm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ks.subVectors(this.origin,t);let l=o*this.direction.dot(th.crossVectors(Ks,th));if(l<0)return null;let c=o*this.direction.dot(Wm.cross(Ks));if(c<0||l+c>r)return null;let h=-o*Ks.dot(qm);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,_,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,x,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/qr.setFromMatrixColumn(t,0).length(),a=1/qr.setFromMatrixColumn(t,1).length(),r=1/qr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,_=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,x=c*d;n[0]=f+x*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,_=o*h,x=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=_*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ET,t,TT)}lookAt(t,n,i){let s=this.elements;return Xn.subVectors(t,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),js.crossVectors(i,Xn),js.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),js.crossVectors(i,Xn)),js.normalize(),eh.crossVectors(Xn,js),s[0]=js.x,s[4]=eh.x,s[8]=Xn.x,s[1]=js.y,s[5]=eh.y,s[9]=Xn.y,s[2]=js.z,s[6]=eh.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],u=i[14],g=i[3],y=i[7],v=i[11],T=i[15],R=s[0],w=s[4],N=s[8],E=s[12],b=s[1],L=s[5],k=s[9],z=s[13],C=s[2],H=s[6],X=s[10],tt=s[14],V=s[3],at=s[7],ht=s[11],Et=s[15];return a[0]=r*R+o*b+l*C+c*V,a[4]=r*w+o*L+l*H+c*at,a[8]=r*N+o*k+l*X+c*ht,a[12]=r*E+o*z+l*tt+c*Et,a[1]=h*R+d*b+f*C+p*V,a[5]=h*w+d*L+f*H+p*at,a[9]=h*N+d*k+f*X+p*ht,a[13]=h*E+d*z+f*tt+p*Et,a[2]=_*R+x*b+m*C+u*V,a[6]=_*w+x*L+m*H+u*at,a[10]=_*N+x*k+m*X+u*ht,a[14]=_*E+x*z+m*tt+u*Et,a[3]=g*R+y*b+v*C+T*V,a[7]=g*w+y*L+v*H+T*at,a[11]=g*N+y*k+v*X+T*ht,a[15]=g*E+y*z+v*tt+T*Et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],u=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,y=_*f*c-h*m*c-_*l*p+r*m*p+h*l*u-r*f*u,v=h*x*c-_*d*c+_*o*p-r*x*p-h*o*u+r*d*u,T=_*d*l-h*x*l-_*o*f+r*x*f+h*o*m-r*d*m,R=n*g+i*y+s*v+a*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=g*w,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*w,t[4]=y*w,t[5]=(h*m*a-_*f*a+_*s*p-n*m*p-h*s*u+n*f*u)*w,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*w,t[8]=v*w,t[9]=(_*d*a-h*x*a-_*i*p+n*x*p+h*i*u-n*d*u)*w,t[10]=(r*x*a-_*o*a+_*i*c-n*x*c-r*i*u+n*o*u)*w,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=T*w,t[13]=(h*x*s-_*d*s+_*i*f-n*x*f-h*i*m+n*d*m)*w,t[14]=(_*o*s-r*x*s-_*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,_=a*d,x=r*h,m=r*d,u=o*d,g=l*c,y=l*h,v=l*d,T=i.x,R=i.y,w=i.z;return s[0]=(1-(x+u))*T,s[1]=(p+v)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(f+u))*R,s[6]=(m+g)*R,s[7]=0,s[8]=(_+y)*w,s[9]=(m-g)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=qr.set(s[0],s[1],s[2]).length(),r=qr.set(s[4],s[5],s[6]).length(),o=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],mi.copy(this);let c=1/a,h=1/r,d=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,n.setFromRotationMatrix(mi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),_,x;if(l)_=a/(r-a),x=r*a/(r-a);else if(o===yi)_=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Gl)_=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),_,x;if(l)_=1/(r-a),x=r/(r-a);else if(o===yi)_=-2/(r-a),x=-(r+a)/(r-a);else if(o===Gl)_=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},qr=new B,mi=new de,ET=new B(0,0,0),TT=new B(1,1,1),js=new B,eh=new B,Xn=new B,iS=new de,sS=new Cn,Li=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return iS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sS.setFromEuler(this),this.setFromQuaternion(sS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},AT=0,aS=new B,Yr=new Cn,os=new de,nh=new B,Dl=new B,wT=new B,CT=new Cn,rS=new B(1,0,0),oS=new B(0,1,0),lS=new B(0,0,1),cS={type:"added"},RT={type:"removed"},Zr={type:"childadded",child:null},Ym={type:"childremoved",child:null},Rn=class e extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Li,i=new Cn,s=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(rS,t)}rotateY(t){return this.rotateOnAxis(oS,t)}rotateZ(t){return this.rotateOnAxis(lS,t)}translateOnAxis(t,n){return aS.copy(t).applyQuaternion(this.quaternion),this.position.add(aS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rS,t)}translateY(t){return this.translateOnAxis(oS,t)}translateZ(t){return this.translateOnAxis(lS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nh.copy(t):nh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Dl,nh,this.up):os.lookAt(nh,Dl,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(os),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cS),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(RT),Ym.child=t,this.dispatchEvent(Ym),Ym.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cS),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,t,wT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,CT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Rn.DEFAULT_UP=new B(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new B,ls=new B,Zm=new B,cs=new B,Jr=new B,Kr=new B,uS=new B,Jm=new B,Km=new B,jm=new B,Qm=new Le,$m=new Le,tg=new Le,us=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),gi.subVectors(t,n),s.cross(gi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){gi.subVectors(s,n),ls.subVectors(i,n),Zm.subVectors(t,n);let r=gi.dot(gi),o=gi.dot(ls),l=gi.dot(Zm),c=ls.dot(ls),h=ls.dot(Zm),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,_=(r*h-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,cs.x),l.addScaledVector(r,cs.y),l.addScaledVector(o,cs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Qm.setScalar(0),$m.setScalar(0),tg.setScalar(0),Qm.fromBufferAttribute(t,n),$m.fromBufferAttribute(t,i),tg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Qm,a.x),r.addScaledVector($m,a.y),r.addScaledVector(tg,a.z),r}static isFrontFacing(t,n,i,s){return gi.subVectors(i,n),ls.subVectors(t,n),gi.cross(ls).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),gi.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Jr.subVectors(s,i),Kr.subVectors(a,i),Jm.subVectors(t,i);let l=Jr.dot(Jm),c=Kr.dot(Jm);if(l<=0&&c<=0)return n.copy(i);Km.subVectors(t,s);let h=Jr.dot(Km),d=Kr.dot(Km);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Jr,r);jm.subVectors(t,a);let p=Jr.dot(jm),_=Kr.dot(jm);if(_>=0&&p<=_)return n.copy(a);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Kr,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return uS.subVectors(a,s),o=(d-h)/(d-h+(p-_)),n.copy(s).addScaledVector(uS,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(Jr,r).addScaledVector(Kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},ih={h:0,s:0,l:0};function eg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=jt.workingColorSpace){if(t=Rg(t,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=eg(r,a,t+1/3),this.g=eg(r,a,t),this.b=eg(r,a,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,n=qn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){let i=gM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return jt.workingToColorSpace(ln.copy(this),t),Math.round(Gt(ln.r*255,0,255))*65536+Math.round(Gt(ln.g*255,0,255))*256+Math.round(Gt(ln.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.workingToColorSpace(ln.copy(this),n);let i=ln.r,s=ln.g,a=ln.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=jt.workingColorSpace){return jt.workingToColorSpace(ln.copy(this),n),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=qn){jt.workingToColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,s=ln.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Qs),this.setHSL(Qs.h+t,Qs.s+n,Qs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Qs),t.getHSL(ih);let i=Fl(Qs.h,ih.h,n),s=Fl(Qs.s,ih.s,n),a=Fl(Qs.l,ih.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Jt;Jt.NAMES=gM;var DT=0,ms=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Ba,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Mh,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sh&&(i.blendSrc=this.blendSrc),this.blendDst!==Mh&&(i.blendDst=this.blendDst),this.blendEquation!==ea&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ha=class extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new B,sh=new wt,UT=0,gn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sh.fromBufferAttribute(this,n),sh.applyMatrix3(t),this.setXY(n,sh.x,sh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=_i(n,this.array)),n}setX(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=_i(n,this.array)),n}setY(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=_i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=_i(n,this.array)),n}setW(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array),a=ae(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}};var Wl=class extends gn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ql=class extends gn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var sn=class extends gn{constructor(t,n,i){super(new Float32Array(t),n,i)}},NT=0,li=new de,ng=new Rn,jr=new B,Wn=new Ni,Ul=new Ni,je=new B,Yn=class e extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ug(t)?ql:Wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return ng.lookAt(t),ng.updateMatrix(),this.applyMatrix4(ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new sn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Ul.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Wn.min,Ul.min),Wn.expandByPoint(je),je.addVectors(Wn.max,Ul.max),Wn.expandByPoint(je)):(Wn.expandByPoint(Ul.min),Wn.expandByPoint(Ul.max))}Wn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)je.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(je));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)je.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(t,c),je.add(jr)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;let c=new B,h=new B,d=new B,f=new wt,p=new wt,_=new wt,x=new B,m=new B;function u(N,E,b){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),f.fromBufferAttribute(a,N),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,b),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),o[N].add(x),o[E].add(x),o[b].add(x),l[N].add(m),l[E].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let N=0,E=g.length;N<E;++N){let b=g[N],L=b.start,k=b.count;for(let z=L,C=L+k;z<C;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let y=new B,v=new B,T=new B,R=new B;function w(N){T.fromBufferAttribute(s,N),R.copy(T);let E=o[N];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(R,E);let L=v.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,L)}for(let N=0,E=g.length;N<E;++N){let b=g[N],L=b.start,k=b.count;for(let z=L,C=L+k;z<C;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new B,a=new B,r=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)je.fromBufferAttribute(t,n),je.normalize(),t.setXYZ(n,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new gn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hS=new de,La=new na,ah=new ps,fS=new B,rh=new B,oh=new B,lh=new B,ig=new B,ch=new B,dS=new B,uh=new B,Dn=class extends Rn{constructor(t=new Yn,n=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ch.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(ig.fromBufferAttribute(d,t),r?ch.addScaledVector(ig,h):ch.addScaledVector(ig.sub(n),h))}n.add(ch)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ah.copy(i.boundingSphere),ah.applyMatrix4(a),La.copy(t.ray).recast(t.near),!(ah.containsPoint(La.origin)===!1&&(La.intersectSphere(ah,fS)===null||La.origin.distanceToSquared(fS)>(t.far-t.near)**2))&&(hS.copy(a).invert(),La.copy(t.ray).applyMatrix4(hS),!(i.boundingBox!==null&&La.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,La)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){let m=f[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,T=y;v<T;v+=3){let R=o.getX(v),w=o.getX(v+1),N=o.getX(v+2);s=hh(this,u,t,i,c,h,d,R,w,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){let g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=hh(this,r,t,i,c,h,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){let m=f[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,T=y;v<T;v+=3){let R=v,w=v+1,N=v+2;s=hh(this,u,t,i,c,h,d,R,w,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){let g=m,y=m+1,v=m+2;s=hh(this,r,t,i,c,h,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function LT(e,t,n,i,s,a,r,o){let l;if(t.side===yn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ds,o),l===null)return null;uh.copy(o),uh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(uh);return c<n.near||c>n.far?null:{distance:c,point:uh.clone(),object:e}}function hh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,rh),e.getVertexPosition(l,oh),e.getVertexPosition(c,lh);let h=LT(e,t,n,i,rh,oh,lh,dS);if(h){let d=new B;us.getBarycoord(dS,rh,oh,lh,d),s&&(h.uv=us.getInterpolatedAttribute(s,o,l,c,d,new wt)),a&&(h.uv1=us.getInterpolatedAttribute(a,o,l,c,d,new wt)),r&&(h.normal=us.getInterpolatedAttribute(r,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};us.getNormal(rh,oh,lh,f.normal),h.face=f,h.barycoord=d}return h}var ho=class e extends Yn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(d,2));function _(x,m,u,g,y,v,T,R,w,N,E){let b=v/w,L=T/N,k=v/2,z=T/2,C=R/2,H=w+1,X=N+1,tt=0,V=0,at=new B;for(let ht=0;ht<X;ht++){let Et=ht*L-z;for(let kt=0;kt<H;kt++){let pe=kt*b-k;at[x]=pe*g,at[m]=Et*y,at[u]=C,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[u]=R>0?1:-1,h.push(at.x,at.y,at.z),d.push(kt/w),d.push(1-ht/N),tt+=1}}for(let ht=0;ht<N;ht++)for(let Et=0;Et<w;Et++){let kt=f+Et+H*ht,pe=f+Et+H*(ht+1),be=f+(Et+1)+H*(ht+1),ee=f+(Et+1)+H*ht;l.push(kt,pe,ee),l.push(pe,be,ee),V+=6}o.addGroup(p,V,E),p+=V,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function un(e){let t={};for(let n=0;n<e.length;n++){let i=Xa(e[n]);for(let s in i)t[s]=i[s]}return t}function OT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ng(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var _M={clone:Xa,merge:un},IT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xi=class extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IT,this.fragmentShader=PT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xa(t.uniforms),this.uniformsGroups=OT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Yl=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$s=new B,pS=new wt,mS=new wt,cn=class extends Yl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-t/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($s.x,$s.y).multiplyScalar(-t/$s.z)}getViewSize(t,n){return this.getViewBounds(t,pS,mS),n.subVectors(mS,pS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(zl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Qr=-90,$r=1,Dh=class extends Rn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Qr,$r,t,n);s.layers=this.layers,this.add(s);let a=new cn(Qr,$r,t,n);a.layers=this.layers,this.add(a);let r=new cn(Qr,$r,t,n);r.layers=this.layers,this.add(r);let o=new cn(Qr,$r,t,n);o.layers=this.layers,this.add(o);let l=new cn(Qr,$r,t,n);l.layers=this.layers,this.add(l);let c=new cn(Qr,$r,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Zl=class extends _n{constructor(t=[],n=Ga,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Uh=class extends Ui{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ho(5,5,5),a=new xi({name:"CubemapFromEquirect",uniforms:Xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:gs});a.uniforms.tEquirect.value=n;let r=new Dn(s,a),o=n.minFilter;return n.minFilter===oa&&(n.minFilter=vi),new Dh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Pa=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},BT={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Pa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Jl=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Nh=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=hs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new B,Kl=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=_i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=_i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=_i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=_i(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array),a=ae(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new gn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},po=class extends ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},to,Nl=new B,eo=new B,no=new B,io=new wt,Ll=new wt,yM=new de,fh=new B,Ol=new B,dh=new B,gS=new wt,sg=new wt,_S=new wt,jl=class extends Rn{constructor(t=new po){if(super(),this.isSprite=!0,this.type="Sprite",to===void 0){to=new Yn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nh(n,5);to.setIndex([0,1,2,0,2,3]),to.setAttribute("position",new Kl(i,3,0,!1)),to.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=to,this.material=t,this.center=new wt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),yM.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-no.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;ph(fh.set(-.5,-.5,0),no,r,eo,s,a),ph(Ol.set(.5,-.5,0),no,r,eo,s,a),ph(dh.set(.5,.5,0),no,r,eo,s,a),gS.set(0,0),sg.set(1,0),_S.set(1,1);let o=t.ray.intersectTriangle(fh,Ol,dh,!1,Nl);if(o===null&&(ph(Ol.set(-.5,.5,0),no,r,eo,s,a),sg.set(0,1),o=t.ray.intersectTriangle(fh,dh,Ol,!1,Nl),o===null))return;let l=t.ray.origin.distanceTo(Nl);l<t.near||l>t.far||n.push({distance:l,point:Nl.clone(),uv:us.getInterpolation(Nl,fh,Ol,dh,gS,sg,_S,new wt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ph(e,t,n,i,s,a){io.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Ll.x=a*io.x-s*io.y,Ll.y=s*io.x+a*io.y):Ll.copy(io),e.copy(t),e.x+=Ll.x,e.y+=Ll.y,e.applyMatrix4(yM)}var Lh=class extends _n{constructor(t=null,n=1,i=1,s,a,r,o,l,c=wn,h=wn,d,f){super(null,r,o,l,c,h,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ql=class extends gn{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},so=new de,yS=new de,mh=[],vS=new Ni,zT=new de,Il=new Dn,Pl=new ps,$l=class extends Dn{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zT)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),vS.copy(t.boundingBox).applyMatrix4(so),this.boundingBox.union(vS)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),Pl.copy(t.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Pl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Il.geometry=this.geometry,Il.material=this.material,Il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(i),t.ray.intersectsSphere(Pl)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,so),yS.multiplyMatrices(i,so),Il.matrixWorld=yS,Il.raycast(t,mh);for(let r=0,o=mh.length;r<o;r++){let l=mh[r];l.instanceId=a,l.object=this,n.push(l)}mh.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lh(new Float32Array(s*this.count),s,this.count,uf,Si));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ag=new B,FT=new B,HT=new zt,ci=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=ag.subVectors(i,n).cross(FT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(ag),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||HT.getNormalMatrix(t),s=this.coplanarPoint(ag).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oa=new ps,VT=new wt(.5,.5),gh=new B,tc=class{constructor(t=new ci,n=new ci,i=new ci,s=new ci,a=new ci,r=new ci){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],_=a[8],x=a[9],m=a[10],u=a[11],g=a[12],y=a[13],v=a[14],T=a[15];if(s[0].setComponents(c-r,p-h,u-_,T-g).normalize(),s[1].setComponents(c+r,p+h,u+_,T+g).normalize(),s[2].setComponents(c+o,p+d,u+x,T+y).normalize(),s[3].setComponents(c-o,p-d,u-x,T-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,u-m,T-v).normalize();else if(s[4].setComponents(c-l,p-f,u-m,T-v).normalize(),n===yi)s[5].setComponents(c+l,p+f,u+m,T+v).normalize();else if(n===Gl)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oa)}intersectsSprite(t){Oa.center.set(0,0,0);let n=VT.distanceTo(t.center);return Oa.radius=.7071067811865476+n,Oa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(gh.x=s.normal.x>0?t.max.x:t.min.x,gh.y=s.normal.y>0?t.max.y:t.min.y,gh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mo=class extends ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oh=new B,Ih=new B,xS=new de,Bl=new na,_h=new ps,rg=new B,SS=new B,Ph=class extends Rn{constructor(t=new Yn,n=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Oh.fromBufferAttribute(n,s-1),Ih.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Oh.distanceTo(Ih);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_h.copy(i.boundingSphere),_h.applyMatrix4(s),_h.radius+=a,t.ray.intersectsSphere(_h)===!1)return;xS.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(xS);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){let u=h.getX(x),g=h.getX(x+1),y=yh(this,t,Bl,l,u,g,x);y&&n.push(y)}if(this.isLineLoop){let x=h.getX(_-1),m=h.getX(p),u=yh(this,t,Bl,l,x,m,_-1);u&&n.push(u)}}else{let p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){let u=yh(this,t,Bl,l,x,x+1,x);u&&n.push(u)}if(this.isLineLoop){let x=yh(this,t,Bl,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function yh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(Oh.fromBufferAttribute(o,s),Ih.fromBufferAttribute(o,a),n.distanceSqToSegment(Oh,Ih,rg,SS)>i)return;rg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(rg);if(!(c<t.near||c>t.far))return{distance:c,point:SS.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var MS=new B,bS=new B,ec=class extends Ph{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)MS.fromBufferAttribute(n,s),bS.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+MS.distanceTo(bS);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nc=class extends _n{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ic=class extends _n{constructor(t,n,i=la,s,a,r,o=wn,l=wn,c,h=ro,d=1){if(h!==ro&&h!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},sc=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ac=class e extends Yn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],_=[],x=[],m=[];for(let u=0;u<h;u++){let g=u*f-r;for(let y=0;y<c;y++){let v=y*d-a;_.push(v,-g,0),x.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let y=g+c*u,v=g+c*(u+1),T=g+1+c*(u+1),R=g+1+c*u;p.push(y,v,R),p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var rc=class e extends Yn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new B,f=new B,p=[],_=[],x=[],m=[];for(let u=0;u<=i;u++){let g=[],y=u/i,v=0;u===0&&r===0?v=.5/n:u===i&&l===Math.PI&&(v=-.5/n);for(let T=0;T<=n;T++){let R=T/n;d.x=-t*Math.cos(s+R*a)*Math.sin(r+y*o),d.y=t*Math.cos(r+y*o),d.z=t*Math.sin(s+R*a)*Math.sin(r+y*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+v,1-y),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){let y=h[u][g+1],v=h[u][g],T=h[u+1][g],R=h[u+1][g+1];(u!==0||r>0)&&p.push(y,v,R),(u!==i-1||l<Math.PI)&&p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bh=class extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zh=class extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function GT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Va=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fh=class extends Va{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:og,endingEnd:og}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case lg:a=t,o=2*n-i;break;case cg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lg:r=t,l=2*i-n;break;case cg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),x=_*_,m=x*_,u=-f*m+2*f*x-f*_,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*x+.5*_,v=p*m-p*x;for(let T=0;T!==o;++T)a[T]=u*r[h+T]+g*r[c+T]+y*r[l+T]+v*r[d+T];return a}},Hh=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},Vh=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vh(n,this.TimeBufferType),this.values=vh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:vh(t.times,Array),values:vh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Hl:n=this.InterpolantFactoryMethodDiscrete;break;case Th:n=this.InterpolantFactoryMethodLinear;break;case xh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hl;case this.InterpolantFactoryMethodLinear:return Th;case this.InterpolantFactoryMethodSmooth:return xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&GT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let x=n[d+_];if(x!==n[f+_]||x!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Th;var ia=class extends Zn{constructor(t,n,i){super(t,n,i)}};ia.prototype.ValueTypeName="bool";ia.prototype.ValueBufferType=Array;ia.prototype.DefaultInterpolation=Hl;ia.prototype.InterpolantFactoryMethodLinear=void 0;ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Gh.prototype.ValueTypeName="color";var kh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};kh.prototype.ValueTypeName="number";var Xh=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(a,0,r,c-o,r,c,l);return a}},oc=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}};oc.prototype.ValueTypeName="quaternion";oc.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Zn{constructor(t,n,i){super(t,n,i)}};sa.prototype.ValueTypeName="string";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=Hl;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Wh.prototype.ValueTypeName="vector";var qh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},vM=new qh,Yh=class{constructor(t){this.manager=t!==void 0?t:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zh=class extends Yl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Jh=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lg="\\[\\]\\.:\\/",kT=new RegExp("["+Lg+"]","g"),Og="[^"+Lg+"]",XT="[^"+Lg.replace("\\.","")+"]",WT=/((?:WC+[\/:])*)/.source.replace("WC",Og),qT=/(WCOD+)?/.source.replace("WCOD",XT),YT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Og),ZT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Og),JT=new RegExp("^"+WT+qT+YT+ZT+"$"),KT=["material","materials","bones","map"],hg=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kT,"")}static parseTrackName(t){let n=JT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);KT.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=hg;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n3=new Float32Array(1);var ES=new de,lc=class{constructor(t,n,i=0,s=1/0){this.ray=new na(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return ES.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ES),this}intersectObject(t,n=!0,i=[]){return fg(t,this,i,n),i.sort(TS),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)fg(t[s],this,i,n);return i.sort(TS),i}};function TS(e,t){return e.distance-t.distance}function fg(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)fg(a[r],t,n,!0)}}var go=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cc=class extends Di{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ig(e,t,n,i){let s=jT(i);switch(n){case Eg:return e*t;case uf:return e*t/s.components*s.byteLength;case hf:return e*t/s.components*s.byteLength;case Ag:return e*t*2/s.components*s.byteLength;case ff:return e*t*2/s.components*s.byteLength;case Tg:return e*t*3/s.components*s.byteLength;case ui:return e*t*4/s.components*s.byteLength;case df:return e*t*4/s.components*s.byteLength;case fc:case dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mf:case _f:return Math.max(e,16)*Math.max(t,8)/4;case pf:case gf:return Math.max(e,8)*Math.max(t,8)/2;case yf:case vf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ef:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Tf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Af:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Df:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Uf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Nf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Lf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Of:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case If:case Pf:case Bf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zf:case Ff:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Hf:case Vf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jT(e){switch(e){case Pi:case xg:return{byteLength:1,components:1};case _o:case Sg:case yo:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case la:case of:case Si:return{byteLength:4,components:1};case Mg:case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kM(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function $T(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var tA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DA="gl_FragColor = linearToOutputTexel( gl_FragColor );",UA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$A=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:tA,alphahash_pars_fragment:eA,alphamap_fragment:nA,alphamap_pars_fragment:iA,alphatest_fragment:sA,alphatest_pars_fragment:aA,aomap_fragment:rA,aomap_pars_fragment:oA,batching_pars_vertex:lA,batching_vertex:cA,begin_vertex:uA,beginnormal_vertex:hA,bsdfs:fA,iridescence_fragment:dA,bumpmap_pars_fragment:pA,clipping_planes_fragment:mA,clipping_planes_pars_fragment:gA,clipping_planes_pars_vertex:_A,clipping_planes_vertex:yA,color_fragment:vA,color_pars_fragment:xA,color_pars_vertex:SA,color_vertex:MA,common:bA,cube_uv_reflection_fragment:EA,defaultnormal_vertex:TA,displacementmap_pars_vertex:AA,displacementmap_vertex:wA,emissivemap_fragment:CA,emissivemap_pars_fragment:RA,colorspace_fragment:DA,colorspace_pars_fragment:UA,envmap_fragment:NA,envmap_common_pars_fragment:LA,envmap_pars_fragment:OA,envmap_pars_vertex:IA,envmap_physical_pars_fragment:qA,envmap_vertex:PA,fog_vertex:BA,fog_pars_vertex:zA,fog_fragment:FA,fog_pars_fragment:HA,gradientmap_pars_fragment:VA,lightmap_pars_fragment:GA,lights_lambert_fragment:kA,lights_lambert_pars_fragment:XA,lights_pars_begin:WA,lights_toon_fragment:YA,lights_toon_pars_fragment:ZA,lights_phong_fragment:JA,lights_phong_pars_fragment:KA,lights_physical_fragment:jA,lights_physical_pars_fragment:QA,lights_fragment_begin:$A,lights_fragment_maps:tw,lights_fragment_end:ew,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:sw,logdepthbuf_vertex:aw,map_fragment:rw,map_pars_fragment:ow,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:hw,morphinstance_vertex:fw,morphcolor_vertex:dw,morphnormal_vertex:pw,morphtarget_pars_vertex:mw,morphtarget_vertex:gw,normal_fragment_begin:_w,normal_fragment_maps:yw,normal_pars_fragment:vw,normal_pars_vertex:xw,normal_vertex:Sw,normalmap_pars_fragment:Mw,clearcoat_normal_fragment_begin:bw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Aw,opaque_fragment:ww,packing:Cw,premultiplied_alpha_fragment:Rw,project_vertex:Dw,dithering_fragment:Uw,dithering_pars_fragment:Nw,roughnessmap_fragment:Lw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:Iw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Bw,shadowmask_pars_fragment:zw,skinbase_vertex:Fw,skinning_pars_vertex:Hw,skinning_vertex:Vw,skinnormal_vertex:Gw,specularmap_fragment:kw,specularmap_pars_fragment:Xw,tonemapping_fragment:Ww,tonemapping_pars_fragment:qw,transmission_fragment:Yw,transmission_pars_fragment:Zw,uv_pars_fragment:Jw,uv_pars_vertex:Kw,uv_vertex:jw,worldpos_vertex:Qw,background_vert:$w,background_frag:tC,backgroundCube_vert:eC,backgroundCube_frag:nC,cube_vert:iC,cube_frag:sC,depth_vert:aC,depth_frag:rC,distanceRGBA_vert:oC,distanceRGBA_frag:lC,equirect_vert:cC,equirect_frag:uC,linedashed_vert:hC,linedashed_frag:fC,meshbasic_vert:dC,meshbasic_frag:pC,meshlambert_vert:mC,meshlambert_frag:gC,meshmatcap_vert:_C,meshmatcap_frag:yC,meshnormal_vert:vC,meshnormal_frag:xC,meshphong_vert:SC,meshphong_frag:MC,meshphysical_vert:bC,meshphysical_frag:EC,meshtoon_vert:TC,meshtoon_frag:AC,points_vert:wC,points_frag:CC,shadow_vert:RC,shadow_frag:DC,sprite_vert:UC,sprite_frag:NC},ot={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Bi={basic:{uniforms:un([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:un([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:un([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:un([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:un([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:un([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:un([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:un([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:un([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:un([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:un([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:un([ot.common,ot.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:un([ot.lights,ot.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Bi.physical={uniforms:un([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Gf={r:0,b:0,g:0},Wa=new Li,LC=new de;function OC(e,t,n,i,s,a,r){let o=new Jt(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function x(y){let v=!1,T=_(y);T===null?u(o,l):T&&T.isColor&&(u(T,1),v=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let T=_(v);T&&(T.isCubeTexture||T.mapping===uc)?(h===void 0&&(h=new Dn(new ho(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Xa(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wa.copy(v.backgroundRotation),Wa.x*=-1,Wa.y*=-1,Wa.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wa.y*=-1,Wa.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LC.makeRotationFromEuler(Wa)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,(d!==T||f!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Dn(new ac(2,2),new xi({name:"BackgroundMaterial",uniforms:Xa(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(Gf,Ng(e)),i.buffers.color.setClear(Gf.r,Gf.g,Gf.b,v,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:m,dispose:g}}function IC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(b,L,k,z,C){let H=!1,X=d(z,k,L);a!==X&&(a=X,c(a.object)),H=p(b,z,k,C),H&&_(b,z,k,C),C!==null&&t.update(C,e.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,v(b,L,k,z),C!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function h(b){return e.deleteVertexArray(b)}function d(b,L,k){let z=k.wireframe===!0,C=i[b.id];C===void 0&&(C={},i[b.id]=C);let H=C[L.id];H===void 0&&(H={},C[L.id]=H);let X=H[z];return X===void 0&&(X=f(l()),H[z]=X),X}function f(b){let L=[],k=[],z=[];for(let C=0;C<n;C++)L[C]=0,k[C]=0,z[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,L,k,z){let C=a.attributes,H=L.attributes,X=0,tt=k.getAttributes();for(let V in tt)if(tt[V].location>=0){let ht=C[V],Et=H[V];if(Et===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),ht===void 0||ht.attribute!==Et||Et&&ht.data!==Et.data)return!0;X++}return a.attributesNum!==X||a.index!==z}function _(b,L,k,z){let C={},H=L.attributes,X=0,tt=k.getAttributes();for(let V in tt)if(tt[V].location>=0){let ht=H[V];ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let Et={};Et.attribute=ht,ht&&ht.data&&(Et.data=ht.data),C[V]=Et,X++}a.attributes=C,a.attributesNum=X,a.index=z}function x(){let b=a.newAttributes;for(let L=0,k=b.length;L<k;L++)b[L]=0}function m(b){u(b,0)}function u(b,L){let k=a.newAttributes,z=a.enabledAttributes,C=a.attributeDivisors;k[b]=1,z[b]===0&&(e.enableVertexAttribArray(b),z[b]=1),C[b]!==L&&(e.vertexAttribDivisor(b,L),C[b]=L)}function g(){let b=a.newAttributes,L=a.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==b[k]&&(e.disableVertexAttribArray(k),L[k]=0)}function y(b,L,k,z,C,H,X){X===!0?e.vertexAttribIPointer(b,L,k,C,H):e.vertexAttribPointer(b,L,k,z,C,H)}function v(b,L,k,z){x();let C=z.attributes,H=k.getAttributes(),X=L.defaultAttributeValues;for(let tt in H){let V=H[tt];if(V.location>=0){let at=C[tt];if(at===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){let ht=at.normalized,Et=at.itemSize,kt=t.get(at);if(kt===void 0)continue;let pe=kt.buffer,be=kt.type,ee=kt.bytesPerElement,J=be===e.INT||be===e.UNSIGNED_INT||at.gpuType===of;if(at.isInterleavedBufferAttribute){let Q=at.data,pt=Q.stride,Lt=at.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)u(V.location+bt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let bt=0;bt<V.locationSize;bt++)y(V.location+bt,Et/V.locationSize,be,ht,pt*ee,(Lt+Et/V.locationSize*bt)*ee,J)}else{if(at.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)u(V.location+Q,at.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let Q=0;Q<V.locationSize;Q++)y(V.location+Q,Et/V.locationSize,be,ht,Et*ee,Et/V.locationSize*Q*ee,J)}}else if(X!==void 0){let ht=X[tt];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(V.location,ht);break;case 3:e.vertexAttrib3fv(V.location,ht);break;case 4:e.vertexAttrib4fv(V.location,ht);break;default:e.vertexAttrib1fv(V.location,ht)}}}}g()}function T(){N();for(let b in i){let L=i[b];for(let k in L){let z=L[k];for(let C in z)h(z[C].object),delete z[C];delete L[k]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let k in L){let z=L[k];for(let C in z)h(z[C].object),delete z[C];delete L[k]}delete i[b.id]}function w(b){for(let L in i){let k=i[L];if(k[b.id]===void 0)continue;let z=k[b.id];for(let C in z)h(z[C].object),delete z[C];delete k[b.id]}}function N(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function PC(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x]*f[x];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function BC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==ui&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let N=w===yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Si&&!N)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:R}}function zC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ci,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?h(null):c();else{let g=a?0:i,y=g*4,v=u.clippingState||null;l.value=v,v=h(_,f,y,p);for(let T=0;T!==y;++T)v[T]=n[T];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let u=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==x;++y,v+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function FC(e){let t=new WeakMap;function n(r,o){return o===sf?r.mapping=Ga:o===af&&(r.mapping=ka),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===sf||o===af)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Uh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Mo=4,xM=[.125,.215,.35,.446,.526,.582],Za=20,Pg=new Zh,SM=new Jt,Bg=null,zg=0,Fg=0,Hg=!1,Ya=(1+Math.sqrt(5))/2,So=1/Ya,MM=[new B(-Ya,So,0),new B(Ya,So,0),new B(-So,0,Ya),new B(So,0,Ya),new B(0,Ya,-So),new B(0,Ya,So),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],HC=new B,Wf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=HC}=a;Bg=this._renderer.getRenderTarget(),zg=this._renderer.getActiveCubeFace(),Fg=this._renderer.getActiveMipmapLevel(),Hg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=TM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=EM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bg,zg,Fg),this._renderer.xr.enabled=Hg,t.scissorTest=!1,kf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ga||t.mapping===ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bg=this._renderer.getRenderTarget(),zg=this._renderer.getActiveCubeFace(),Fg=this._renderer.getActiveMipmapLevel(),Hg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:yo,format:ui,colorSpace:Fa,depthBuffer:!1},s=bM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bM(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VC(a)),this._blurMaterial=GC(a,t,n)}return s}_compileMaterial(t){let n=new Dn(this._lodPlanes[0],t);this._renderer.compile(n,Pg)}_sceneToCubeUV(t,n,i,s,a){let l=new cn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(SM),d.toneMapping=_s,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Ha({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new Dn(new ho,x),u=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,u=!0):(x.color.copy(SM),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));let T=this._cubeSize;kf(s,v*T,y>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ga||t.mapping===ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=TM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=EM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Dn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;kf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Pg)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=MM[(s-a-1)%MM.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Dn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Za-1),x=a/_,m=isFinite(a)?1+Math.floor(h*x):Za;m>Za&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Za}`);let u=[],g=0;for(let w=0;w<Za;++w){let N=w/x,E=Math.exp(-N*N/2);u.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;let v=this._sizeLods[s],T=3*v*(s>y-Mo?s-y+Mo:0),R=4*(this._cubeSize-v);kf(n,T,R,3*v,2*v),l.setRenderTarget(n),l.render(d,Pg)}};function VC(e){let t=[],n=[],i=[],s=e,a=e-Mo+1+xM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Mo?l=xM[r-e+Mo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,x=3,m=2,u=1,g=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(u*_*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,N=R>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];g.set(E,x*_*R),y.set(f,m*_*R);let b=[R,R,R,R,R,R];v.set(b,u*_*R)}let T=new Yn;T.setAttribute("position",new gn(g,x)),T.setAttribute("uv",new gn(y,m)),T.setAttribute("faceIndex",new gn(v,u)),t.push(T),s>Mo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function bM(e,t,n){let i=new Ui(e,t,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function GC(e,t,n){let i=new Float32Array(Za),s=new B(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Za,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function EM(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function TM(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Kg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kC(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===sf||l===af,h=l===Ga||l===ka;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Wf(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new Wf(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function XC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function WC(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,_=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let y=0,v=g.length;y<v;y+=3){let T=g[y+0],R=g[y+1],w=g[y+2];f.push(T,R,R,w,w,T)}}else if(_!==void 0){let g=_.array;x=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){let T=y+0,R=y+1,w=y+2;f.push(T,R,R,w,w,T)}}else return;let m=new(Ug(f)?ql:Wl)(f,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function qC(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,f*r,_),n.update(p,i,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(f,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*x[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function YC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ZC(e,t,n){let i=new WeakMap,s=new Le;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*T*4*d),w=new Xl(R,v,T,d);w.type=Si,w.needsUpdate=!0;let N=y*4;for(let b=0;b<d;b++){let L=m[b],k=u[b],z=g[b],C=v*T*4*b;for(let H=0;H<L.count;H++){let X=H*N;p===!0&&(s.fromBufferAttribute(L,H),R[C+X+0]=s.x,R[C+X+1]=s.y,R[C+X+2]=s.z,R[C+X+3]=0),_===!0&&(s.fromBufferAttribute(k,H),R[C+X+4]=s.x,R[C+X+5]=s.y,R[C+X+6]=s.z,R[C+X+7]=0),x===!0&&(s.fromBufferAttribute(z,H),R[C+X+8]=s.x,R[C+X+9]=s.y,R[C+X+10]=s.z,R[C+X+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new wt(v,T)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function JC(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var XM=new _n,AM=new ic(1,1),WM=new Xl,qM=new Rh,YM=new Zl,wM=[],CM=[],RM=new Float32Array(16),DM=new Float32Array(9),UM=new Float32Array(4);function Eo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=wM[s];if(a===void 0&&(a=new Float32Array(s),wM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function We(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Yf(e,t){let n=CM[t];n===void 0&&(n=new Int32Array(t),CM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function KC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function jC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),We(n,t)}}function QC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),We(n,t)}}function $C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),We(n,t)}}function tR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;UM.set(i),e.uniformMatrix2fv(this.addr,!1,UM),We(n,i)}}function eR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;DM.set(i),e.uniformMatrix3fv(this.addr,!1,DM),We(n,i)}}function nR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;RM.set(i),e.uniformMatrix4fv(this.addr,!1,RM),We(n,i)}}function iR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function sR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),We(n,t)}}function aR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),We(n,t)}}function rR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),We(n,t)}}function oR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),We(n,t)}}function cR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),We(n,t)}}function uR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),We(n,t)}}function hR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(AM.compareFunction=wg,a=AM):a=XM,n.setTexture2D(t||a,s)}function fR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||qM,s)}function dR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||YM,s)}function pR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||WM,s)}function mR(e){switch(e){case 5126:return KC;case 35664:return jC;case 35665:return QC;case 35666:return $C;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return sR;case 35668:case 35672:return aR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(e,t){e.uniform1fv(this.addr,t)}function _R(e,t){let n=Eo(t,this.size,2);e.uniform2fv(this.addr,n)}function yR(e,t){let n=Eo(t,this.size,3);e.uniform3fv(this.addr,n)}function vR(e,t){let n=Eo(t,this.size,4);e.uniform4fv(this.addr,n)}function xR(e,t){let n=Eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function SR(e,t){let n=Eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function MR(e,t){let n=Eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bR(e,t){e.uniform1iv(this.addr,t)}function ER(e,t){e.uniform2iv(this.addr,t)}function TR(e,t){e.uniform3iv(this.addr,t)}function AR(e,t){e.uniform4iv(this.addr,t)}function wR(e,t){e.uniform1uiv(this.addr,t)}function CR(e,t){e.uniform2uiv(this.addr,t)}function RR(e,t){e.uniform3uiv(this.addr,t)}function DR(e,t){e.uniform4uiv(this.addr,t)}function UR(e,t,n){let i=this.cache,s=t.length,a=Yf(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||XM,a[r])}function NR(e,t,n){let i=this.cache,s=t.length,a=Yf(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||qM,a[r])}function LR(e,t,n){let i=this.cache,s=t.length,a=Yf(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||YM,a[r])}function OR(e,t,n){let i=this.cache,s=t.length,a=Yf(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||WM,a[r])}function IR(e){switch(e){case 5126:return gR;case 35664:return _R;case 35665:return yR;case 35666:return vR;case 35674:return xR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return bR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return wR;case 36294:return CR;case 36295:return RR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return OR}}var Gg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mR(n.type)}},kg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IR(n.type)}},Xg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Vg=/(\w+)(\])?(\[|\.)?/g;function NM(e,t){e.seq.push(t),e.map[t.id]=t}function PR(e,t,n){let i=e.name,s=i.length;for(Vg.lastIndex=0;;){let a=Vg.exec(i),r=Vg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){NM(n,c===void 0?new Gg(o,e,t):new kg(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Xg(o),NM(n,d)),n=d}}}var bo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);PR(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function LM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var BR=37297,zR=0;function FR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var OM=new zt;function HR(e){jt._getMatrix(OM,jt.workingColorSpace,e);let t=`mat3( ${OM.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case Vl:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function IM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+FR(e.getShaderSource(t),o)}else return a}function VR(e,t){let n=HR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GR(e,t){let n;switch(t){case JS:n="Linear";break;case KS:n="Reinhard";break;case jS:n="Cineon";break;case QS:n="ACESFilmic";break;case tM:n="AgX";break;case eM:n="Neutral";break;case $S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Xf=new B;function kR(){jt.getLuminanceCoefficients(Xf);let e=Xf.x.toFixed(4),t=Xf.y.toFixed(4),n=Xf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gc).join(`
`)}function WR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function qR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function gc(e){return e!==""}function PM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function BM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wg(e){return e.replace(YR,JR)}var ZR=new Map;function JR(e,t){let n=Vt[t];if(n===void 0){let i=ZR.get(t);if(i!==void 0)n=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wg(n)}var KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zM(e){return e.replace(KR,jR)}function jR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function FM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function QR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===CS?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function $R(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ga:case ka:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ka:t="ENVMAP_MODE_REFRACTION";break}return t}function e2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case yg:t="ENVMAP_BLENDING_MULTIPLY";break;case YS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function n2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function i2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=QR(n),c=$R(n),h=t2(n),d=e2(n),f=n2(n),p=XR(n),_=WR(a),x=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gc).join(`
`),u.length>0&&(u+=`
`)):(m=[FM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gc).join(`
`),u=[FM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_s?"#define TONE_MAPPING":"",n.toneMapping!==_s?Vt.tonemapping_pars_fragment:"",n.toneMapping!==_s?GR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,VR("linearToOutputTexel",n.outputColorSpace),kR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gc).join(`
`)),r=Wg(r),r=PM(r,n),r=BM(r,n),o=Wg(o),o=PM(o,n),o=BM(o,n),r=zM(r),o=zM(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+m+r,v=g+u+o,T=LM(s,s.VERTEX_SHADER,y),R=LM(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(L){if(e.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(T)||"",C=s.getShaderInfoLog(R)||"",H=k.trim(),X=z.trim(),tt=C.trim(),V=!0,at=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,R);else{let ht=IM(s,T,"vertex"),Et=IM(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ht+`
`+Et)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||tt==="")&&(at=!1);at&&(L.diagnostics={runnable:V,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:u}})}s.deleteShader(T),s.deleteShader(R),N=new bo(s,x),E=qR(s,x)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,BR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zR++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}var s2=0,qg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Yg(t),n.set(t,i)),i}},Yg=class{constructor(t){this.id=s2++,this.code=t,this.usedTimes=0}};function a2(e,t,n,i,s,a,r){let o=new uo,l=new qg,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,L,k,z){let C=k.fog,H=z.geometry,X=E.isMeshStandardMaterial?k.environment:null,tt=(E.isMeshStandardMaterial?n:t).get(E.envMap||X),V=tt&&tt.mapping===uc?tt.image.height:null,at=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Et=ht!==void 0?ht.length:0,kt=0;H.morphAttributes.position!==void 0&&(kt=1),H.morphAttributes.normal!==void 0&&(kt=2),H.morphAttributes.color!==void 0&&(kt=3);let pe,be,ee,J;if(at){let ne=Bi[at];pe=ne.vertexShader,be=ne.fragmentShader}else pe=E.vertexShader,be=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),J=l.getFragmentShaderID(E);let Q=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,bt=z.isBatchedMesh===!0,Kt=!!E.map,an=!!E.matcap,U=!!tt,Ee=!!E.aoMap,Pt=!!E.lightMap,Ut=!!E.bumpMap,_t=!!E.normalMap,Te=!!E.displacementMap,yt=!!E.emissiveMap,Ht=!!E.metalnessMap,Ye=!!E.roughnessMap,Oe=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,F=E.iridescence>0,Y=E.sheen>0,j=E.transmission>0,q=Oe&&!!E.anisotropyMap,Mt=A&&!!E.clearcoatMap,st=A&&!!E.clearcoatNormalMap,vt=A&&!!E.clearcoatRoughnessMap,xt=F&&!!E.iridescenceMap,nt=F&&!!E.iridescenceThicknessMap,ut=Y&&!!E.sheenColorMap,Rt=Y&&!!E.sheenRoughnessMap,St=!!E.specularMap,lt=!!E.specularColorMap,Ft=!!E.specularIntensityMap,O=j&&!!E.transmissionMap,it=j&&!!E.thicknessMap,rt=!!E.gradientMap,dt=!!E.alphaMap,$=E.alphaTest>0,K=!!E.alphaHash,gt=!!E.extensions,Ot=_s;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ot=e.toneMapping);let me={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:pe,fragmentShader:be,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:bt,batchingColor:bt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Fa,alphaToCoverage:!!E.alphaToCoverage,map:Kt,matcap:an,envMap:U,envMapMode:U&&tt.mapping,envMapCubeUVHeight:V,aoMap:Ee,lightMap:Pt,bumpMap:Ut,normalMap:_t,displacementMap:f&&Te,emissiveMap:yt,normalMapObjectSpace:_t&&E.normalMapType===rM,normalMapTangentSpace:_t&&E.normalMapType===aM,metalnessMap:Ht,roughnessMap:Ye,anisotropy:Oe,anisotropyMap:q,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:vt,dispersion:S,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:lt,specularIntensityMap:Ft,transmission:j,transmissionMap:O,thicknessMap:it,gradientMap:rt,opaque:E.transparent===!1&&E.blending===Ba&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:K,combine:E.combine,mapUv:Kt&&x(E.map.channel),aoMapUv:Ee&&x(E.aoMap.channel),lightMapUv:Pt&&x(E.lightMap.channel),bumpMapUv:Ut&&x(E.bumpMap.channel),normalMapUv:_t&&x(E.normalMap.channel),displacementMapUv:Te&&x(E.displacementMap.channel),emissiveMapUv:yt&&x(E.emissiveMap.channel),metalnessMapUv:Ht&&x(E.metalnessMap.channel),roughnessMapUv:Ye&&x(E.roughnessMap.channel),anisotropyMapUv:q&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(E.sheenRoughnessMap.channel),specularMapUv:St&&x(E.specularMap.channel),specularColorMapUv:lt&&x(E.specularColorMap.channel),specularIntensityMapUv:Ft&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:it&&x(E.thicknessMap.channel),alphaMapUv:dt&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||Oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Kt||dt),fog:!!C,useFog:E.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Kt&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ii,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)b.push(L),b.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(g(b,E),y(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let b=_[E.type],L;if(b){let k=Bi[b];L=_M.clone(k.uniforms)}else L=E.uniforms;return L}function T(E,b){let L;for(let k=0,z=h.length;k<z;k++){let C=h[k];if(C.cacheKey===b){L=C,++L.usedTimes;break}}return L===void 0&&(L=new i2(e,b,E,a),h.push(L)),L}function R(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:N}}function r2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function o2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function HM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function VM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,_,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,_,x,m){let u=r(d,f,p,_,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,_,x,m){let u=r(d,f,p,_,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||o2),i.length>1&&i.sort(f||HM),s.length>1&&s.sort(f||HM)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function l2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new VM,e.set(i,[r])):s>=a.length?(r=new VM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function c2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Jt};break;case"SpotLight":n={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function u2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var h2=0;function f2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function d2(e){let t=new c2,n=u2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,a=new de,r=new de;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,g=0,y=0,v=0,T=0,R=0,w=0;c.sort(f2);for(let E=0,b=c.length;E<b;E++){let L=c[E],k=L.color,z=L.intensity,C=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*z,d+=k.g*z,f+=k.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);w++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,V=n.get(L);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=X,p++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(z),X.distance=C,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;let tt=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,tt.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[x]=tt.matrix,L.castShadow){let V=n.get(L);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=H,v++}x++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(k).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let tt=L.shadow,V=n.get(L);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=X,_++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=X,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==y||N.numSpotShadows!==v||N.numSpotMaps!==T||N.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,N.directionalLength=p,N.pointLength=_,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=y,N.numSpotShadows=v,N.numSpotMaps=T,N.numLightProbes=w,i.version=h2++)}function l(c,h){let d=0,f=0,p=0,_=0,x=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let y=c[u];if(y.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function GM(e){let t=new d2(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function p2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new GM(e),t.set(s,[o])):a>=r.length?(o=new GM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var m2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _2(e,t,n){let i=new tc,s=new wt,a=new wt,r=new Le,o=new Bh({depthPacking:sM}),l=new zh,c={},h=n.maxTextureSize,d={[ds]:yn,[yn]:ds,[Ii]:Ii},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:m2,fragmentShader:g2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Yn;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let u=this.type;this.render=function(R,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),k=e.state;k.setBlending(gs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=u!==Oi&&this.type===Oi,C=u===Oi&&this.type!==Oi;for(let H=0,X=R.length;H<X;H++){let tt=R[H],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let at=V.getFrameExtents();if(s.multiply(at),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,V.mapSize.y=a.y)),V.map===null||z===!0||C===!0){let Et=this.type!==Oi?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,Et),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let ht=V.getViewportCount();for(let Et=0;Et<ht;Et++){let kt=V.getViewport(Et);r.set(a.x*kt.x,a.y*kt.y,a.x*kt.z,a.y*kt.w),k.viewport(r),V.updateMatrices(tt,Et),i=V.getFrustum(),v(w,N,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&g(V,N),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,L)};function g(R,w){let N=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ui(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,N,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,N,p,x,null)}function y(R,w,N,E){let b=null,L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)b=L;else if(b=N.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let k=b.uuid,z=w.uuid,C=c[k];C===void 0&&(C={},c[k]=C);let H=C[z];H===void 0&&(H=b.clone(),C[z]=H,w.addEventListener("dispose",T)),b=H}if(b.visible=w.visible,b.wireframe=w.wireframe,E===Oi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=e.properties.get(b);k.light=N}return b}function v(R,w,N,E,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let z=t.update(R),C=R.material;if(Array.isArray(C)){let H=z.groups;for(let X=0,tt=H.length;X<tt;X++){let V=H[X],at=C[V.materialIndex];if(at&&at.visible){let ht=y(R,at,E,b);R.onBeforeShadow(e,R,w,N,z,ht,V),e.renderBufferDirect(N,null,z,ht,R,V),R.onAfterShadow(e,R,w,N,z,ht,V)}}}else if(C.visible){let H=y(R,C,E,b);R.onBeforeShadow(e,R,w,N,z,H,null),e.renderBufferDirect(N,null,z,H,R,null),R.onAfterShadow(e,R,w,N,z,H,null)}}let k=R.children;for(let z=0,C=k.length;z<C;z++)v(k[z],w,N,E,b)}function T(R){R.target.removeEventListener("dispose",T);for(let N in c){let E=c[N],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var y2={[Kh]:jh,[Qh]:ef,[$h]:nf,[za]:tf,[jh]:Kh,[ef]:Qh,[nf]:$h,[tf]:za};function v2(e,t){function n(){let O=!1,it=new Le,rt=null,dt=new Le(0,0,0,0);return{setMask:function($){rt!==$&&!O&&(e.colorMask($,$,$,$),rt=$)},setLocked:function($){O=$},setClear:function($,K,gt,Ot,me){me===!0&&($*=Ot,K*=Ot,gt*=Ot),it.set($,K,gt,Ot),dt.equals(it)===!1&&(e.clearColor($,K,gt,Ot),dt.copy(it))},reset:function(){O=!1,rt=null,dt.set(-1,0,0,0)}}}function i(){let O=!1,it=!1,rt=null,dt=null,$=null;return{setReversed:function(K){if(it!==K){let gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),it=K;let Ot=$;$=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(K){K?Q(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(K){rt!==K&&!O&&(e.depthMask(K),rt=K)},setFunc:function(K){if(it&&(K=y2[K]),dt!==K){switch(K){case Kh:e.depthFunc(e.NEVER);break;case jh:e.depthFunc(e.ALWAYS);break;case Qh:e.depthFunc(e.LESS);break;case za:e.depthFunc(e.LEQUAL);break;case $h:e.depthFunc(e.EQUAL);break;case tf:e.depthFunc(e.GEQUAL);break;case ef:e.depthFunc(e.GREATER);break;case nf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=K}},setLocked:function(K){O=K},setClear:function(K){$!==K&&(it&&(K=1-K),e.clearDepth(K),$=K)},reset:function(){O=!1,rt=null,dt=null,$=null,it=!1}}}function s(){let O=!1,it=null,rt=null,dt=null,$=null,K=null,gt=null,Ot=null,me=null;return{setTest:function(ne){O||(ne?Q(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ne){it!==ne&&!O&&(e.stencilMask(ne),it=ne)},setFunc:function(ne,zi,Mi){(rt!==ne||dt!==zi||$!==Mi)&&(e.stencilFunc(ne,zi,Mi),rt=ne,dt=zi,$=Mi)},setOp:function(ne,zi,Mi){(K!==ne||gt!==zi||Ot!==Mi)&&(e.stencilOp(ne,zi,Mi),K=ne,gt=zi,Ot=Mi)},setLocked:function(ne){O=ne},setClear:function(ne){me!==ne&&(e.clearStencil(ne),me=ne)},reset:function(){O=!1,it=null,rt=null,dt=null,$=null,K=null,gt=null,Ot=null,me=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,x=!1,m=null,u=null,g=null,y=null,v=null,T=null,R=null,w=new Jt(0,0,0),N=0,E=!1,b=null,L=null,k=null,z=null,C=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=tt>=2);let at=null,ht={},Et=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),pe=new Le().fromArray(Et),be=new Le().fromArray(kt);function ee(O,it,rt,dt){let $=new Uint8Array(4),K=e.createTexture();e.bindTexture(O,K),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<rt;gt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(it+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return K}let J={};J[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(za),Ut(!1),_t(dg),Q(e.CULL_FACE),Ee(gs);function Q(O){h[O]!==!0&&(e.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(e.disable(O),h[O]=!1)}function Lt(O,it){return d[O]!==it?(e.bindFramebuffer(O,it),d[O]=it,O===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=it),O===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(O,it){let rt=p,dt=!1;if(O){rt=f.get(it),rt===void 0&&(rt=[],f.set(it,rt));let $=O.textures;if(rt.length!==$.length||rt[0]!==e.COLOR_ATTACHMENT0){for(let K=0,gt=$.length;K<gt;K++)rt[K]=e.COLOR_ATTACHMENT0+K;rt.length=$.length,dt=!0}}else rt[0]!==e.BACK&&(rt[0]=e.BACK,dt=!0);dt&&e.drawBuffers(rt)}function Kt(O){return _!==O?(e.useProgram(O),_=O,!0):!1}let an={[ea]:e.FUNC_ADD,[DS]:e.FUNC_SUBTRACT,[US]:e.FUNC_REVERSE_SUBTRACT};an[NS]=e.MIN,an[LS]=e.MAX;let U={[OS]:e.ZERO,[IS]:e.ONE,[PS]:e.SRC_COLOR,[Sh]:e.SRC_ALPHA,[GS]:e.SRC_ALPHA_SATURATE,[HS]:e.DST_COLOR,[zS]:e.DST_ALPHA,[BS]:e.ONE_MINUS_SRC_COLOR,[Mh]:e.ONE_MINUS_SRC_ALPHA,[VS]:e.ONE_MINUS_DST_COLOR,[FS]:e.ONE_MINUS_DST_ALPHA,[kS]:e.CONSTANT_COLOR,[XS]:e.ONE_MINUS_CONSTANT_COLOR,[WS]:e.CONSTANT_ALPHA,[qS]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(O,it,rt,dt,$,K,gt,Ot,me,ne){if(O===gs){x===!0&&(pt(e.BLEND),x=!1);return}if(x===!1&&(Q(e.BLEND),x=!0),O!==RS){if(O!==m||ne!==E){if((u!==ea||v!==ea)&&(e.blendEquation(e.FUNC_ADD),u=ea,v=ea),ne)switch(O){case Ba:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mg:e.blendFunc(e.ONE,e.ONE);break;case gg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _g:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case gg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _g:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,y=null,T=null,R=null,w.set(0,0,0),N=0,m=O,E=ne}return}$=$||it,K=K||rt,gt=gt||dt,(it!==u||$!==v)&&(e.blendEquationSeparate(an[it],an[$]),u=it,v=$),(rt!==g||dt!==y||K!==T||gt!==R)&&(e.blendFuncSeparate(U[rt],U[dt],U[K],U[gt]),g=rt,y=dt,T=K,R=gt),(Ot.equals(w)===!1||me!==N)&&(e.blendColor(Ot.r,Ot.g,Ot.b,me),w.copy(Ot),N=me),m=O,E=!1}function Pt(O,it){O.side===Ii?pt(e.CULL_FACE):Q(e.CULL_FACE);let rt=O.side===yn;it&&(rt=!rt),Ut(rt),O.blending===Ba&&O.transparent===!1?Ee(gs):Ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),a.setMask(O.colorWrite);let dt=O.stencilWrite;o.setTest(dt),dt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(O){b!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),b=O)}function _t(O){O!==AS?(Q(e.CULL_FACE),O!==L&&(O===dg?e.cullFace(e.BACK):O===wS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),L=O}function Te(O){O!==k&&(X&&e.lineWidth(O),k=O)}function yt(O,it,rt){O?(Q(e.POLYGON_OFFSET_FILL),(z!==it||C!==rt)&&(e.polygonOffset(it,rt),z=it,C=rt)):pt(e.POLYGON_OFFSET_FILL)}function Ht(O){O?Q(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Ye(O){O===void 0&&(O=e.TEXTURE0+H-1),at!==O&&(e.activeTexture(O),at=O)}function Oe(O,it,rt){rt===void 0&&(at===null?rt=e.TEXTURE0+H-1:rt=at);let dt=ht[rt];dt===void 0&&(dt={type:void 0,texture:void 0},ht[rt]=dt),(dt.type!==O||dt.texture!==it)&&(at!==rt&&(e.activeTexture(rt),at=rt),e.bindTexture(O,it||J[O]),dt.type=O,dt.texture=it)}function A(){let O=ht[at];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{e.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{e.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{e.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{e.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{e.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{e.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(O){pe.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function Rt(O){be.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function St(O,it){let rt=c.get(it);rt===void 0&&(rt=new WeakMap,c.set(it,rt));let dt=rt.get(O);dt===void 0&&(dt=e.getUniformBlockIndex(it,O.name),rt.set(O,dt))}function lt(O,it){let dt=c.get(it).get(O);l.get(it)!==dt&&(e.uniformBlockBinding(it,dt,O.__bindingPointIndex),l.set(it,dt))}function Ft(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},at=null,ht={},d={},f=new WeakMap,p=[],_=null,x=!1,m=null,u=null,g=null,y=null,v=null,T=null,R=null,w=new Jt(0,0,0),N=0,E=!1,b=null,L=null,k=null,z=null,C=null,pe.set(0,0,e.canvas.width,e.canvas.height),be.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:pt,bindFramebuffer:Lt,drawBuffers:bt,useProgram:Kt,setBlending:Ee,setMaterial:Pt,setFlipSided:Ut,setCullFace:_t,setLineWidth:Te,setPolygonOffset:yt,setScissorTest:Ht,activeTexture:Ye,bindTexture:Oe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:xt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Mt,scissor:ut,viewport:Rt,reset:Ft}}function x2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):kl("canvas")}function x(A,S,F){let Y=1,j=Oe(A);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(Y*j.width),Mt=Math.floor(Y*j.height);d===void 0&&(d=_(q,Mt));let st=S?_(q,Mt):d;return st.width=q,st.height=Mt,st.getContext("2d").drawImage(A,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Mt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,S,F,Y,j=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===e.RED&&(F===e.FLOAT&&(q=e.R32F),F===e.HALF_FLOAT&&(q=e.R16F),F===e.UNSIGNED_BYTE&&(q=e.R8)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.R8UI),F===e.UNSIGNED_SHORT&&(q=e.R16UI),F===e.UNSIGNED_INT&&(q=e.R32UI),F===e.BYTE&&(q=e.R8I),F===e.SHORT&&(q=e.R16I),F===e.INT&&(q=e.R32I)),S===e.RG&&(F===e.FLOAT&&(q=e.RG32F),F===e.HALF_FLOAT&&(q=e.RG16F),F===e.UNSIGNED_BYTE&&(q=e.RG8)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RG8UI),F===e.UNSIGNED_SHORT&&(q=e.RG16UI),F===e.UNSIGNED_INT&&(q=e.RG32UI),F===e.BYTE&&(q=e.RG8I),F===e.SHORT&&(q=e.RG16I),F===e.INT&&(q=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(q=e.RGB16UI),F===e.UNSIGNED_INT&&(q=e.RGB32UI),F===e.BYTE&&(q=e.RGB8I),F===e.SHORT&&(q=e.RGB16I),F===e.INT&&(q=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),F===e.UNSIGNED_INT&&(q=e.RGBA32UI),F===e.BYTE&&(q=e.RGBA8I),F===e.SHORT&&(q=e.RGBA16I),F===e.INT&&(q=e.RGBA32I)),S===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),S===e.RGBA){let Mt=j?Vl:jt.getTransfer(Y);F===e.FLOAT&&(q=e.RGBA32F),F===e.HALF_FLOAT&&(q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(q=Mt===re?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(A,S){let F;return A?S===null||S===la||S===vo?F=e.DEPTH24_STENCIL8:S===Si?F=e.DEPTH32F_STENCIL8:S===_o&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===la||S===vo?F=e.DEPTH_COMPONENT24:S===Si?F=e.DEPTH_COMPONENT32F:S===_o&&(F=e.DEPTH_COMPONENT16),F}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==vi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),N(S),S.isVideoTexture&&h.delete(S)}function w(A){let S=A.target;S.removeEventListener("dispose",w),b(S)}function N(A){let S=i.get(A);if(S.__webglInit===void 0)return;let F=A.source,Y=f.get(F);if(Y){let j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(Y).length===0&&f.delete(F)}i.remove(A)}function E(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let F=A.source,Y=f.get(F);delete Y[S.__cacheKey],r.memory.textures--}function b(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)e.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else e.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)e.deleteFramebuffer(S.__webglFramebuffer[Y]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let Y=0,j=F.length;Y<j;Y++){let q=i.get(F[Y]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(F[Y])}i.remove(A)}let L=0;function k(){L=0}function z(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function C(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){let F=i.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,A,S);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function X(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){J(F,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function tt(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){J(F,A,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function V(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}let at={[bh]:e.REPEAT,[ta]:e.CLAMP_TO_EDGE,[Eh]:e.MIRRORED_REPEAT},ht={[wn]:e.NEAREST,[nM]:e.NEAREST_MIPMAP_NEAREST,[hc]:e.NEAREST_MIPMAP_LINEAR,[vi]:e.LINEAR,[rf]:e.LINEAR_MIPMAP_NEAREST,[oa]:e.LINEAR_MIPMAP_LINEAR},Et={[oM]:e.NEVER,[dM]:e.ALWAYS,[lM]:e.LESS,[wg]:e.LEQUAL,[cM]:e.EQUAL,[fM]:e.GEQUAL,[uM]:e.GREATER,[hM]:e.NOTEQUAL};function kt(A,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vi||S.magFilter===rf||S.magFilter===hc||S.magFilter===oa||S.minFilter===vi||S.minFilter===rf||S.minFilter===hc||S.minFilter===oa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,at[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,at[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,at[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ht[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==hc&&S.minFilter!==oa||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let Y=S.source,j=f.get(Y);j===void 0&&(j={},f.set(Y,j));let q=C(S);if(q!==A.__cacheKey){j[q]===void 0&&(j[q]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),j[q].usedTimes++;let Mt=j[A.__cacheKey];Mt!==void 0&&(j[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(S)),A.__cacheKey=q,A.__webglTexture=j[q].texture}return F}function be(A,S,F){return Math.floor(Math.floor(A/F)/S)}function ee(A,S,F,Y){let q=A.updateRanges;if(q.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,F,Y,S.data);else{q.sort((nt,ut)=>nt.start-ut.start);let Mt=0;for(let nt=1;nt<q.length;nt++){let ut=q[Mt],Rt=q[nt],St=ut.start+ut.count,lt=be(Rt.start,S.width,4),Ft=be(ut.start,S.width,4);Rt.start<=St+1&&lt===Ft&&be(Rt.start+Rt.count-1,S.width,4)===lt?ut.count=Math.max(ut.count,Rt.start+Rt.count-ut.start):(++Mt,q[Mt]=Rt)}q.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),vt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ut=q.length;nt<ut;nt++){let Rt=q[nt],St=Math.floor(Rt.start/4),lt=Math.ceil(Rt.count/4),Ft=St%S.width,O=Math.floor(St/S.width),it=lt,rt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Ft,O,it,rt,F,Y,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function J(A,S,F){let Y=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=e.TEXTURE_3D);let j=pe(A,S),q=S.source;n.bindTexture(Y,A.__webglTexture,e.TEXTURE0+F);let Mt=i.get(q);if(q.version!==Mt.__version||j===!0){n.activeTexture(e.TEXTURE0+F);let st=jt.getPrimaries(jt.workingColorSpace),vt=S.colorSpace===ys?null:jt.getPrimaries(S.colorSpace),xt=S.colorSpace===ys||st===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let nt=x(S.image,!1,s.maxTextureSize);nt=Ye(S,nt);let ut=a.convert(S.format,S.colorSpace),Rt=a.convert(S.type),St=y(S.internalFormat,ut,Rt,S.colorSpace,S.isVideoTexture);kt(Y,S);let lt,Ft=S.mipmaps,O=S.isVideoTexture!==!0,it=Mt.__version===void 0||j===!0,rt=q.dataReady,dt=T(S,nt);if(S.isDepthTexture)St=v(S.format===xo,S.type),it&&(O?n.texStorage2D(e.TEXTURE_2D,1,St,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,St,nt.width,nt.height,0,ut,Rt,null));else if(S.isDataTexture)if(Ft.length>0){O&&it&&n.texStorage2D(e.TEXTURE_2D,dt,St,Ft[0].width,Ft[0].height);for(let $=0,K=Ft.length;$<K;$++)lt=Ft[$],O?rt&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Rt,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Rt,lt.data);S.generateMipmaps=!1}else O?(it&&n.texStorage2D(e.TEXTURE_2D,dt,St,nt.width,nt.height),rt&&ee(S,nt,ut,Rt)):n.texImage2D(e.TEXTURE_2D,0,St,nt.width,nt.height,0,ut,Rt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,Ft[0].width,Ft[0].height,nt.depth);for(let $=0,K=Ft.length;$<K;$++)if(lt=Ft[$],S.format!==ui)if(ut!==null)if(O){if(rt)if(S.layerUpdates.size>0){let gt=Ig(lt.width,lt.height,S.format,S.type);for(let Ot of S.layerUpdates){let me=lt.data.subarray(Ot*gt/lt.data.BYTES_PER_ELEMENT,(Ot+1)*gt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ot,lt.width,lt.height,1,ut,me)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,nt.depth,ut,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?rt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,nt.depth,ut,Rt,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,nt.depth,0,ut,Rt,lt.data)}else{O&&it&&n.texStorage2D(e.TEXTURE_2D,dt,St,Ft[0].width,Ft[0].height);for(let $=0,K=Ft.length;$<K;$++)lt=Ft[$],S.format!==ui?ut!==null?O?rt&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?rt&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Rt,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Rt,lt.data)}else if(S.isDataArrayTexture)if(O){if(it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,nt.width,nt.height,nt.depth),rt)if(S.layerUpdates.size>0){let $=Ig(nt.width,nt.height,S.format,S.type);for(let K of S.layerUpdates){let gt=nt.data.subarray(K*$/nt.data.BYTES_PER_ELEMENT,(K+1)*$/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ut,Rt,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(S.isData3DTexture)O?(it&&n.texStorage3D(e.TEXTURE_3D,dt,St,nt.width,nt.height,nt.depth),rt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(S.isFramebufferTexture){if(it)if(O)n.texStorage2D(e.TEXTURE_2D,dt,St,nt.width,nt.height);else{let $=nt.width,K=nt.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,St,$,K,0,ut,Rt,null),$>>=1,K>>=1}}else if(Ft.length>0){if(O&&it){let $=Oe(Ft[0]);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}for(let $=0,K=Ft.length;$<K;$++)lt=Ft[$],O?rt&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut,Rt,lt):n.texImage2D(e.TEXTURE_2D,$,St,ut,Rt,lt);S.generateMipmaps=!1}else if(O){if(it){let $=Oe(nt);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}rt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Rt,nt)}else n.texImage2D(e.TEXTURE_2D,0,St,ut,Rt,nt);m(S)&&u(Y),Mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,F){if(S.image.length!==6)return;let Y=pe(A,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let q=i.get(j);if(j.version!==q.__version||Y===!0){n.activeTexture(e.TEXTURE0+F);let Mt=jt.getPrimaries(jt.workingColorSpace),st=S.colorSpace===ys?null:jt.getPrimaries(S.colorSpace),vt=S.colorSpace===ys||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let xt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!xt&&!nt?ut[K]=x(S.image[K],!0,s.maxCubemapSize):ut[K]=nt?S.image[K].image:S.image[K],ut[K]=Ye(S,ut[K]);let Rt=ut[0],St=a.convert(S.format,S.colorSpace),lt=a.convert(S.type),Ft=y(S.internalFormat,St,lt,S.colorSpace),O=S.isVideoTexture!==!0,it=q.__version===void 0||Y===!0,rt=j.dataReady,dt=T(S,Rt);kt(e.TEXTURE_CUBE_MAP,S);let $;if(xt){O&&it&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Ft,Rt.width,Rt.height);for(let K=0;K<6;K++){$=ut[K].mipmaps;for(let gt=0;gt<$.length;gt++){let Ot=$[gt];S.format!==ui?St!==null?O?rt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ot.width,Ot.height,St,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ft,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ot.width,Ot.height,St,lt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ft,Ot.width,Ot.height,0,St,lt,Ot.data)}}}else{if($=S.mipmaps,O&&it){$.length>0&&dt++;let K=Oe(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Ft,K.width,K.height)}for(let K=0;K<6;K++)if(nt){O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,St,lt,ut[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,ut[K].width,ut[K].height,0,St,lt,ut[K].data);for(let gt=0;gt<$.length;gt++){let me=$[gt].image[K].image;O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,me.width,me.height,St,lt,me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ft,me.width,me.height,0,St,lt,me.data)}}else{O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,lt,ut[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,St,lt,ut[K]);for(let gt=0;gt<$.length;gt++){let Ot=$[gt];O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,St,lt,Ot.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ft,St,lt,Ot.image[K])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pt(A,S,F,Y,j,q){let Mt=a.convert(F.format,F.colorSpace),st=a.convert(F.type),vt=y(F.internalFormat,Mt,st,F.colorSpace),xt=i.get(S),nt=i.get(F);if(nt.__renderTarget=S,!xt.__hasExternalTextures){let ut=Math.max(1,S.width>>q),Rt=Math.max(1,S.height>>q);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,q,vt,ut,Rt,S.depth,0,Mt,st,null):n.texImage2D(j,q,vt,ut,Rt,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,j,nt.__webglTexture,0,Te(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,j,nt.__webglTexture,q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(A,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=v(S.stencilBuffer,j),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=Te(S);yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,q,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,q,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{let Y=S.textures;for(let j=0;j<Y.length;j++){let q=Y[j],Mt=a.convert(q.format,q.colorSpace),st=a.convert(q.type),vt=y(q.internalFormat,Mt,st,q.colorSpace),xt=Te(S);F&&yt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,vt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,vt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,vt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let j=Y.__webglTexture,q=Te(S);if(S.depthTexture.format===ro)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(S.depthTexture.format===xo)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Kt(A){let S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let Y=A.texture.mipmaps;Y&&Y.length>0?bt(S.__webglFramebuffer[0],A):bt(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=e.createRenderbuffer(),Lt(S.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,q)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Lt(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,q)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function an(A,S,F){let Y=i.get(A);S!==void 0&&pt(Y.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Kt(A)}function U(A){let S=A.texture,F=i.get(A),Y=i.get(S);A.addEventListener("dispose",w);let j=A.textures,q=A.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=S.version,r.memory.textures++),q){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let vt=0;vt<S.mipmaps.length;vt++)F.__webglFramebuffer[st][vt]=e.createFramebuffer()}else F.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)F.__webglFramebuffer[st]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,vt=j.length;st<vt;st++){let xt=i.get(j[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&yt(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){let vt=j[st];F.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[st]);let xt=a.convert(vt.format,vt.colorSpace),nt=a.convert(vt.type),ut=y(vt.internalFormat,xt,nt,vt.colorSpace,A.isXRRenderTarget===!0),Rt=Te(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ut,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,F.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)pt(F.__webglFramebuffer[st][vt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt);else pt(F.__webglFramebuffer[st],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,vt=j.length;st<vt;st++){let xt=j[st],nt=i.get(xt),ut=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,nt.__webglTexture),kt(ut,xt),pt(F.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+st,ut,0),m(xt)&&u(ut)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,Y.__webglTexture),kt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)pt(F.__webglFramebuffer[vt],A,S,e.COLOR_ATTACHMENT0,st,vt);else pt(F.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&u(st),n.unbindTexture()}A.depthBuffer&&Kt(A)}function Ee(A){let S=A.textures;for(let F=0,Y=S.length;F<Y;F++){let j=S[F];if(m(j)){let q=g(A),Mt=i.get(j).__webglTexture;n.bindTexture(q,Mt),u(q),n.unbindTexture()}}}let Pt=[],Ut=[];function _t(A){if(A.samples>0){if(yt(A)===!1){let S=A.textures,F=A.width,Y=A.height,j=e.COLOR_BUFFER_BIT,q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),st=S.length>1;if(st)for(let xt=0;xt<S.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let vt=A.texture.mipmaps;vt&&vt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let nt=i.get(S[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,nt,0)}e.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,e.NEAREST),l===!0&&(Pt.length=0,Ut.length=0,Pt.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(q),Ut.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ut)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<S.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let nt=i.get(S[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ye(A,S){let F=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Fa&&F!==ys&&(jt.getTransfer(F)===re?(Y!==ui||j!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=an,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=yt}function S2(e,t){function n(i,s=ys){let a,r=jt.getTransfer(s);if(i===Pi)return e.UNSIGNED_BYTE;if(i===lf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===cf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Mg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===bg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xg)return e.BYTE;if(i===Sg)return e.SHORT;if(i===_o)return e.UNSIGNED_SHORT;if(i===of)return e.INT;if(i===la)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===yo)return e.HALF_FLOAT;if(i===Eg)return e.ALPHA;if(i===Tg)return e.RGB;if(i===ui)return e.RGBA;if(i===ro)return e.DEPTH_COMPONENT;if(i===xo)return e.DEPTH_STENCIL;if(i===uf)return e.RED;if(i===hf)return e.RED_INTEGER;if(i===Ag)return e.RG;if(i===ff)return e.RG_INTEGER;if(i===df)return e.RGBA_INTEGER;if(i===fc||i===dc||i===pc||i===mc)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pf||i===mf||i===gf||i===_f)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===pf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_f)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===vf||i===xf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yf||i===vf)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===xf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sf||i===Mf||i===bf||i===Ef||i===Tf||i===Af||i===wf||i===Cf||i===Rf||i===Df||i===Uf||i===Nf||i===Lf||i===Of)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Sf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Af)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Df)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Of)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===If||i===Pf||i===Bf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===If)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zf||i===Ff||i===Hf||i===Vf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===zf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ff)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new sc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new xi({vertexShader:M2,fragmentShader:b2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jg=class extends Di{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,x=typeof XRWebGLBinding<"u",m=new Zg,u={},g=n.getContextAttributes(),y=null,v=null,T=[],R=[],w=new wt,N=null,E=new cn;E.viewport=new Le;let b=new cn;b.viewport=new Le;let L=[E,b],k=new Jh,z=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=T[J];return Q===void 0&&(Q=new fo,T[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=T[J];return Q===void 0&&(Q=new fo,T[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=T[J];return Q===void 0&&(Q=new fo,T[J]=Q),Q.getHandSpace()};function H(J){let Q=R.indexOf(J.inputSource);if(Q===-1)return;let pt=T[Q];pt!==void 0&&(pt.update(J.inputSource,J.frame,c||r),pt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let J=0;J<T.length;J++){let Q=R[J];Q!==null&&(R[J]=null,T[J].disconnect(Q))}z=null,C=null,m.reset();for(let J in u)delete u[J];t.setRenderTarget(y),p=null,f=null,d=null,s=null,v=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,bt=null;g.depth&&(bt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=g.stencil?xo:ro,Lt=g.stencil?vo:la);let Kt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ui(f.textureWidth,f.textureHeight,{format:ui,type:Pi,depthTexture:new ic(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ui(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(J){for(let Q=0;Q<J.removed.length;Q++){let pt=J.removed[Q],Lt=R.indexOf(pt);Lt>=0&&(R[Lt]=null,T[Lt].disconnect(pt))}for(let Q=0;Q<J.added.length;Q++){let pt=J.added[Q],Lt=R.indexOf(pt);if(Lt===-1){for(let Kt=0;Kt<T.length;Kt++)if(Kt>=R.length){R.push(pt),Lt=Kt;break}else if(R[Kt]===null){R[Kt]=pt,Lt=Kt;break}if(Lt===-1)break}let bt=T[Lt];bt&&bt.connect(pt)}}let V=new B,at=new B;function ht(J,Q,pt){V.setFromMatrixPosition(Q.matrixWorld),at.setFromMatrixPosition(pt.matrixWorld);let Lt=V.distanceTo(at),bt=Q.projectionMatrix.elements,Kt=pt.projectionMatrix.elements,an=bt[14]/(bt[10]-1),U=bt[14]/(bt[10]+1),Ee=(bt[9]+1)/bt[5],Pt=(bt[9]-1)/bt[5],Ut=(bt[8]-1)/bt[0],_t=(Kt[8]+1)/Kt[0],Te=an*Ut,yt=an*_t,Ht=Lt/(-Ut+_t),Ye=Ht*-Ut;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(Ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Oe=an+Ht,A=U+Ht,S=Te-Ye,F=yt+(Lt-Ye),Y=Ee*U/A*Oe,j=Pt*U/A*Oe;J.projectionMatrix.makePerspective(S,F,Y,j,Oe,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,pt=J.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),k.near=b.near=E.near=Q,k.far=b.far=E.far=pt,(z!==k.near||C!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,C=k.far),k.layers.mask=J.layers.mask|6,E.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;let Lt=J.parent,bt=k.cameras;Et(k,Lt);for(let Kt=0;Kt<bt.length;Kt++)Et(bt[Kt],Lt);bt.length===2?ht(k,E,b):k.projectionMatrix.copy(E.projectionMatrix),kt(J,k,Lt)};function kt(J,Q,pt){pt===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=oo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return u[J]};let pe=null;function be(J,Q){if(h=Q.getViewerPose(c||r),_=Q,h!==null){let pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Lt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Lt=!0);for(let U=0;U<pt.length;U++){let Ee=pt[U],Pt=null;if(p!==null)Pt=p.getViewport(Ee);else{let _t=d.getViewSubImage(f,Ee);Pt=_t.viewport,U===0&&(t.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(v))}let Ut=L[U];Ut===void 0&&(Ut=new cn,Ut.layers.enable(U),Ut.viewport=new Le,L[U]=Ut),Ut.matrix.fromArray(Ee.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ee.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),U===0&&(k.matrix.copy(Ut.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Lt===!0&&k.cameras.push(Ut)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let U=d.getDepthInformation(pt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let U=0;U<pt.length;U++){let Ee=pt[U].camera;if(Ee){let Pt=u[Ee];Pt||(Pt=new sc,u[Ee]=Pt);let Ut=d.getCameraImage(Ee);Pt.sourceTexture=Ut}}}}for(let pt=0;pt<T.length;pt++){let Lt=R[pt],bt=T[pt];Lt!==null&&bt!==void 0&&bt.update(Lt,Q,c||r)}pe&&pe(J,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let ee=new kM;ee.setAnimationLoop(be),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}},qa=new Li,E2=new de;function T2(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ng(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,qa.copy(v),qa.x*=-1,qa.y*=-1,qa.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qa.y*=-1,qa.z*=-1),m.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(qa)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let v=y.program;i.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(g,T);let R=t.render.frame;a[g.id]!==R&&(f(g),a[g.id]=R)}function h(g){let y=d();g.__bindingPointIndex=y;let v=e.createBuffer(),T=g.__size,R=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,T,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=s[g.id],v=g.uniforms,T=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let R=0,w=v.length;R<w;R++){let N=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,b=N.length;E<b;E++){let L=N[E];if(p(L,R,E,T)===!0){let k=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],C=0;for(let H=0;H<z.length;H++){let X=z[H],tt=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,k+C,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,C),C+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,v,T){let R=g.value,w=y+"_"+v;if(T[w]===void 0)return typeof R=="number"||typeof R=="boolean"?T[w]=R:T[w]=R.clone(),!0;{let N=T[w];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return T[w]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(g){let y=g.uniforms,v=0,T=16;for(let w=0,N=y.length;w<N;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,L=E.length;b<L;b++){let k=E[b],z=Array.isArray(k.value)?k.value:[k.value];for(let C=0,H=z.length;C<H;C++){let X=z[C],tt=x(X),V=v%T,at=V%tt.boundary,ht=V+at;v+=at,ht!==0&&T-ht<tt.storage&&(v+=T-ht),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=tt.storage}}}let R=v%T;return R>0&&(v+=T-R),g.__size=v,g.__cache={},this}function x(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var qf=class{constructor(t={}){let{canvas:n=pM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=qn;let R=0,w=0,N=null,E=-1,b=null,L=new Le,k=new Le,z=null,C=new Jt(0),H=0,X=n.width,tt=n.height,V=1,at=null,ht=null,Et=new Le(0,0,X,tt),kt=new Le(0,0,X,tt),pe=!1,be=new tc,ee=!1,J=!1,Q=new de,pt=new B,Lt=new Le,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function an(){return N===null?V:1}let U=i;function Ee(M,I){return n.getContext(M,I)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",$,!1),U===null){let I="webgl2";if(U=Ee(I,M),U===null)throw Ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Pt,Ut,_t,Te,yt,Ht,Ye,Oe,A,S,F,Y,j,q,Mt,st,vt,xt,nt,ut,Rt,St,lt,Ft;function O(){Pt=new XC(U),Pt.init(),St=new S2(U,Pt),Ut=new BC(U,Pt,t,St),_t=new v2(U,Pt),Ut.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Te=new YC(U),yt=new r2,Ht=new x2(U,Pt,_t,yt,Ut,St,Te),Ye=new FC(v),Oe=new kC(v),A=new $T(U),lt=new IC(U,A),S=new WC(U,A,Te,lt),F=new JC(U,S,A,Te),nt=new ZC(U,Ut,Ht),st=new zC(yt),Y=new a2(v,Ye,Oe,Pt,Ut,lt,st),j=new T2(v,yt),q=new l2,Mt=new p2(Pt),xt=new OC(v,Ye,Oe,_t,F,p,l),vt=new _2(v,F,Ut),Ft=new A2(U,Te,Ut,_t),ut=new PC(U,Pt,Te),Rt=new qC(U,Pt,Te),Te.programs=Y.programs,v.capabilities=Ut,v.extensions=Pt,v.properties=yt,v.renderLists=q,v.shadowMap=vt,v.state=_t,v.info=Te}O();let it=new Jg(v,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(X,tt,!1))},this.getSize=function(M){return M.set(X,tt)},this.setSize=function(M,I,G=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,tt=I,n.width=Math.floor(M*V),n.height=Math.floor(I*V),G===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(X*V,tt*V).floor()},this.setDrawingBufferSize=function(M,I,G){X=M,tt=I,V=G,n.width=Math.floor(M*G),n.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Et)},this.setViewport=function(M,I,G,W){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,I,G,W),_t.viewport(L.copy(Et).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,I,G,W){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,I,G,W),_t.scissor(k.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){_t.setScissorTest(pe=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,G=!0){let W=0;if(M){let P=!1;if(N!==null){let et=N.texture.format;P=et===df||et===ff||et===hf}if(P){let et=N.texture.type,ct=et===Pi||et===la||et===_o||et===vo||et===lf||et===cf,mt=xt.getClearColor(),ft=xt.getClearAlpha(),Ct=mt.r,Nt=mt.g,Tt=mt.b;ct?(_[0]=Ct,_[1]=Nt,_[2]=Tt,_[3]=ft,U.clearBufferuiv(U.COLOR,0,_)):(x[0]=Ct,x[1]=Nt,x[2]=Tt,x[3]=ft,U.clearBufferiv(U.COLOR,0,x))}else W|=U.COLOR_BUFFER_BIT}I&&(W|=U.DEPTH_BUFFER_BIT),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),q.dispose(),Mt.dispose(),yt.dispose(),Ye.dispose(),Oe.dispose(),F.dispose(),lt.dispose(),Ft.dispose(),Y.dispose(),it.dispose(),it.removeEventListener("sessionstart",Mi),it.removeEventListener("sessionend",t0),ca.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=Te.autoReset,I=vt.enabled,G=vt.autoUpdate,W=vt.needsUpdate,P=vt.type;O(),Te.autoReset=M,vt.enabled=I,vt.autoUpdate=G,vt.needsUpdate=W,vt.type=P}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){let I=M.target;I.removeEventListener("dispose",K),gt(I)}function gt(M){Ot(M),yt.remove(M)}function Ot(M){let I=yt.get(M).programs;I!==void 0&&(I.forEach(function(G){Y.releaseProgram(G)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,W,P,et){I===null&&(I=bt);let ct=P.isMesh&&P.matrixWorld.determinant()<0,mt=eb(M,I,G,W,P);_t.setMaterial(W,ct);let ft=G.index,Ct=1;if(W.wireframe===!0){if(ft=S.getWireframeAttribute(G),ft===void 0)return;Ct=2}let Nt=G.drawRange,Tt=G.attributes.position,qt=Nt.start*Ct,oe=(Nt.start+Nt.count)*Ct;et!==null&&(qt=Math.max(qt,et.start*Ct),oe=Math.min(oe,(et.start+et.count)*Ct)),ft!==null?(qt=Math.max(qt,0),oe=Math.min(oe,ft.count)):Tt!=null&&(qt=Math.max(qt,0),oe=Math.min(oe,Tt.count));let De=oe-qt;if(De<0||De===1/0)return;lt.setup(P,W,mt,G,ft);let _e,he=ut;if(ft!==null&&(_e=A.get(ft),he=Rt,he.setIndex(_e)),P.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*an()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(P.isLine){let At=W.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*an()),P.isLineSegments?he.setMode(U.LINES):P.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else P.isPoints?he.setMode(U.POINTS):P.isSprite&&he.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))he.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let At=P._multiDrawStarts,Ce=P._multiDrawCounts,Qt=P._multiDrawCount,Nn=ft?A.get(ft).bytesPerElement:1,Ja=yt.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<Qt;Ln++)Ja.setValue(U,"_gl_DrawID",Ln),he.render(At[Ln]/Nn,Ce[Ln])}else if(P.isInstancedMesh)he.renderInstances(qt,De,P.count);else if(G.isInstancedBufferGeometry){let At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ce=Math.min(G.instanceCount,At);he.renderInstances(qt,De,Ce)}else he.render(qt,De)};function me(M,I,G){M.transparent===!0&&M.side===Ii&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,yc(M,I,G),M.side=ds,M.needsUpdate=!0,yc(M,I,G),M.side=Ii):yc(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),u=Mt.get(G),u.init(I),y.push(u),G.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),M!==G&&M.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();let W=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let et=P.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){let mt=et[ct];me(mt,G,P),W.add(mt)}else me(et,G,P),W.add(et)}),u=y.pop(),W},this.compileAsync=function(M,I,G=null){let W=this.compile(M,I,G);return new Promise(P=>{function et(){if(W.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){P(M);return}setTimeout(et,10)}Pt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ne=null;function zi(M){ne&&ne(M)}function Mi(){ca.stop()}function t0(){ca.start()}let ca=new kM;ca.setAnimationLoop(zi),typeof self<"u"&&ca.setContext(self),this.setAnimationLoop=function(M){ne=M,it.setAnimationLoop(M),M===null?ca.stop():ca.start()},it.addEventListener("sessionstart",Mi),it.addEventListener("sessionend",t0),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,N),u=Mt.get(M,y.length),u.init(I),y.push(u),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),be.setFromProjectionMatrix(Q,yi,I.reversedDepth),J=this.localClippingEnabled,ee=st.init(this.clippingPlanes,J),m=q.get(M,g.length),m.init(),g.push(m),it.enabled===!0&&it.isPresenting===!0){let et=v.xr.getDepthSensingMesh();et!==null&&jf(et,I,-1/0,v.sortObjects)}jf(M,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,ht),Kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Kt&&xt.addToRenderList(m,M),this.info.render.frame++,ee===!0&&st.beginShadows();let G=u.state.shadowsArray;vt.render(G,M,I),ee===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,P=m.transmissive;if(u.setupLights(),I.isArrayCamera){let et=I.cameras;if(P.length>0)for(let ct=0,mt=et.length;ct<mt;ct++){let ft=et[ct];n0(W,P,M,ft)}Kt&&xt.render(M);for(let ct=0,mt=et.length;ct<mt;ct++){let ft=et[ct];e0(m,M,ft,ft.viewport)}}else P.length>0&&n0(W,P,M,I),Kt&&xt.render(M),e0(m,M,I);N!==null&&w===0&&(Ht.updateMultisampleRenderTarget(N),Ht.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(v,M,I),lt.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],ee===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function jf(M,I,G,W){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){W&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let ct=F.update(M),mt=M.material;mt.visible&&m.push(M,ct,mt,G,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){let ct=F.update(M),mt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Lt.copy(ct.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(mt)){let ft=ct.groups;for(let Ct=0,Nt=ft.length;Ct<Nt;Ct++){let Tt=ft[Ct],qt=mt[Tt.materialIndex];qt&&qt.visible&&m.push(M,ct,qt,G,Lt.z,Tt)}}else mt.visible&&m.push(M,ct,mt,G,Lt.z,null)}}let et=M.children;for(let ct=0,mt=et.length;ct<mt;ct++)jf(et[ct],I,G,W)}function e0(M,I,G,W){let P=M.opaque,et=M.transmissive,ct=M.transparent;u.setupLightsView(G),ee===!0&&st.setGlobalState(v.clippingPlanes,G),W&&_t.viewport(L.copy(W)),P.length>0&&_c(P,I,G),et.length>0&&_c(et,I,G),ct.length>0&&_c(ct,I,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function n0(M,I,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Ui(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?yo:Pi,minFilter:oa,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let et=u.state.transmissionRenderTarget[W.id],ct=W.viewport||L;et.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);let mt=v.getRenderTarget(),ft=v.getActiveCubeFace(),Ct=v.getActiveMipmapLevel();v.setRenderTarget(et),v.getClearColor(C),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&xt.render(G);let Nt=v.toneMapping;v.toneMapping=_s;let Tt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ee===!0&&st.setGlobalState(v.clippingPlanes,W),_c(M,G,W),Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let oe=0,De=I.length;oe<De;oe++){let _e=I[oe],he=_e.object,At=_e.geometry,Ce=_e.material,Qt=_e.group;if(Ce.side===Ii&&he.layers.test(W.layers)){let Nn=Ce.side;Ce.side=yn,Ce.needsUpdate=!0,i0(he,G,W,At,Ce,Qt),Ce.side=Nn,Ce.needsUpdate=!0,qt=!0}}qt===!0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et))}v.setRenderTarget(mt,ft,Ct),v.setClearColor(C,H),Tt!==void 0&&(W.viewport=Tt),v.toneMapping=Nt}function _c(M,I,G){let W=I.isScene===!0?I.overrideMaterial:null;for(let P=0,et=M.length;P<et;P++){let ct=M[P],mt=ct.object,ft=ct.geometry,Ct=ct.group,Nt=ct.material;Nt.allowOverride===!0&&W!==null&&(Nt=W),mt.layers.test(G.layers)&&i0(mt,I,G,ft,Nt,Ct)}}function i0(M,I,G,W,P,et){M.onBeforeRender(v,I,G,W,P,et),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(v,I,G,W,M,et),P.transparent===!0&&P.side===Ii&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,v.renderBufferDirect(G,I,W,P,M,et),P.side=ds,P.needsUpdate=!0,v.renderBufferDirect(G,I,W,P,M,et),P.side=Ii):v.renderBufferDirect(G,I,W,P,M,et),M.onAfterRender(v,I,G,W,P,et)}function yc(M,I,G){I.isScene!==!0&&(I=bt);let W=yt.get(M),P=u.state.lights,et=u.state.shadowsArray,ct=P.state.version,mt=Y.getParameters(M,P.state,et,I,G),ft=Y.getProgramCacheKey(mt),Ct=W.programs;W.environment=M.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(M.isMeshStandardMaterial?Oe:Ye).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",K),Ct=new Map,W.programs=Ct);let Nt=Ct.get(ft);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===ct)return a0(M,mt),Nt}else mt.uniforms=Y.getUniforms(M),M.onBeforeCompile(mt,v),Nt=Y.acquireProgram(mt,ft),Ct.set(ft,Nt),W.uniforms=mt.uniforms;let Tt=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=st.uniform),a0(M,mt),W.needsLights=ib(M),W.lightsStateVersion=ct,W.needsLights&&(Tt.ambientLightColor.value=P.state.ambient,Tt.lightProbe.value=P.state.probe,Tt.directionalLights.value=P.state.directional,Tt.directionalLightShadows.value=P.state.directionalShadow,Tt.spotLights.value=P.state.spot,Tt.spotLightShadows.value=P.state.spotShadow,Tt.rectAreaLights.value=P.state.rectArea,Tt.ltc_1.value=P.state.rectAreaLTC1,Tt.ltc_2.value=P.state.rectAreaLTC2,Tt.pointLights.value=P.state.point,Tt.pointLightShadows.value=P.state.pointShadow,Tt.hemisphereLights.value=P.state.hemi,Tt.directionalShadowMap.value=P.state.directionalShadowMap,Tt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Tt.spotShadowMap.value=P.state.spotShadowMap,Tt.spotLightMatrix.value=P.state.spotLightMatrix,Tt.spotLightMap.value=P.state.spotLightMap,Tt.pointShadowMap.value=P.state.pointShadowMap,Tt.pointShadowMatrix.value=P.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function s0(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=bo.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function a0(M,I){let G=yt.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function eb(M,I,G,W,P){I.isScene!==!0&&(I=bt),Ht.resetTextureUnits();let et=I.fog,ct=W.isMeshStandardMaterial?I.environment:null,mt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Fa,ft=(W.isMeshStandardMaterial?Oe:Ye).get(W.envMap||ct),Ct=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color,De=_s;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(De=v.toneMapping);let _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=_e!==void 0?_e.length:0,At=yt.get(W),Ce=u.state.lights;if(ee===!0&&(J===!0||M!==b)){let hn=M===b&&W.id===E;st.setState(W,M,hn)}let Qt=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ce.state.version||At.outputColorSpace!==mt||P.isBatchedMesh&&At.batching===!1||!P.isBatchedMesh&&At.batching===!0||P.isBatchedMesh&&At.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&At.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&At.instancing===!1||!P.isInstancedMesh&&At.instancing===!0||P.isSkinnedMesh&&At.skinning===!1||!P.isSkinnedMesh&&At.skinning===!0||P.isInstancedMesh&&At.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&At.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&At.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&At.instancingMorph===!1&&P.morphTexture!==null||At.envMap!==ft||W.fog===!0&&At.fog!==et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Ct||At.vertexTangents!==Nt||At.morphTargets!==Tt||At.morphNormals!==qt||At.morphColors!==oe||At.toneMapping!==De||At.morphTargetsCount!==he)&&(Qt=!0):(Qt=!0,At.__version=W.version);let Nn=At.currentProgram;Qt===!0&&(Nn=yc(W,I,P));let Ja=!1,Ln=!1,Ao=!1,Re=Nn.getUniforms(),Jn=At.uniforms;if(_t.useProgram(Nn.program)&&(Ja=!0,Ln=!0,Ao=!0),W.id!==E&&(E=W.id,Ln=!0),Ja||b!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Re.setValue(U,"projectionMatrix",M.projectionMatrix),Re.setValue(U,"viewMatrix",M.matrixWorldInverse);let vn=Re.map.cameraPosition;vn!==void 0&&vn.setValue(U,pt.setFromMatrixPosition(M.matrixWorld)),Ut.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ln=!0,Ao=!0)}if(P.isSkinnedMesh){Re.setOptional(U,P,"bindMatrix"),Re.setOptional(U,P,"bindMatrixInverse");let hn=P.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Re.setValue(U,"boneTexture",hn.boneTexture,Ht))}P.isBatchedMesh&&(Re.setOptional(U,P,"batchingTexture"),Re.setValue(U,"batchingTexture",P._matricesTexture,Ht),Re.setOptional(U,P,"batchingIdTexture"),Re.setValue(U,"batchingIdTexture",P._indirectTexture,Ht),Re.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&Re.setValue(U,"batchingColorTexture",P._colorsTexture,Ht));let Kn=G.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&nt.update(P,G,Nn),(Ln||At.receiveShadow!==P.receiveShadow)&&(At.receiveShadow=P.receiveShadow,Re.setValue(U,"receiveShadow",P.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Jn.envMap.value=ft,Jn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(Jn.envMapIntensity.value=I.environmentIntensity),Ln&&(Re.setValue(U,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&nb(Jn,Ao),et&&W.fog===!0&&j.refreshFogUniforms(Jn,et),j.refreshMaterialUniforms(Jn,W,V,tt,u.state.transmissionRenderTarget[M.id]),bo.upload(U,s0(At),Jn,Ht)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bo.upload(U,s0(At),Jn,Ht),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(U,"center",P.center),Re.setValue(U,"modelViewMatrix",P.modelViewMatrix),Re.setValue(U,"normalMatrix",P.normalMatrix),Re.setValue(U,"modelMatrix",P.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hn=W.uniformsGroups;for(let vn=0,Qf=hn.length;vn<Qf;vn++){let ua=hn[vn];Ft.update(ua,Nn),Ft.bind(ua,Nn)}}return Nn}function nb(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function ib(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,I,G){let W=yt.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),yt.get(M.texture).__webglTexture=I,yt.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){let G=yt.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};let sb=U.createFramebuffer();this.setRenderTarget=function(M,I=0,G=0){N=M,R=I,w=G;let W=!0,P=null,et=!1,ct=!1;if(M){let ft=yt.get(M);if(ft.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ht.rebindTextures(M,yt.get(M.texture).__webglTexture,yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&yt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);let Nt=yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?P=Nt[I][G]:P=Nt[I],et=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?P=yt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?P=Nt[G]:P=Nt,L.copy(M.viewport),k.copy(M.scissor),z=M.scissorTest}else L.copy(Et).multiplyScalar(V).floor(),k.copy(kt).multiplyScalar(V).floor(),z=pe;if(G!==0&&(P=sb),_t.bindFramebuffer(U.FRAMEBUFFER,P)&&W&&_t.drawBuffers(M,P),_t.viewport(L),_t.scissor(k),_t.setScissorTest(z),et){let ft=yt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ft.__webglTexture,G)}else if(ct){let ft=I;for(let Ct=0;Ct<M.textures.length;Ct++){let Nt=yt.get(M.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Nt.__webglTexture,G,ft)}}else if(M!==null&&G!==0){let ft=yt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(M,I,G,W,P,et,ct,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){_t.bindFramebuffer(U.FRAMEBUFFER,ft);try{let Ct=M.textures[mt],Nt=Ct.format,Tt=Ct.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-W&&G>=0&&G<=M.height-P&&(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(I,G,W,P,St.convert(Nt),St.convert(Tt),et))}finally{let Ct=N!==null?yt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(M,I,G,W,P,et,ct,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(I>=0&&I<=M.width-W&&G>=0&&G<=M.height-P){_t.bindFramebuffer(U.FRAMEBUFFER,ft);let Ct=M.textures[mt],Nt=Ct.format,Tt=Ct.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(I,G,W,P,St.convert(Nt),St.convert(Tt),0);let oe=N!==null?yt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,oe);let De=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mM(U,De,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(qt),U.deleteSync(De),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,G=0){let W=Math.pow(2,-G),P=Math.floor(M.image.width*W),et=Math.floor(M.image.height*W),ct=I!==null?I.x:0,mt=I!==null?I.y:0;Ht.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,ct,mt,P,et),_t.unbindTexture()};let ab=U.createFramebuffer(),rb=U.createFramebuffer();this.copyTextureToTexture=function(M,I,G=null,W=null,P=0,et=null){et===null&&(P!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=P,P=0):et=0);let ct,mt,ft,Ct,Nt,Tt,qt,oe,De,_e=M.isCompressedTexture?M.mipmaps[et]:M.image;if(G!==null)ct=G.max.x-G.min.x,mt=G.max.y-G.min.y,ft=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,Nt=G.min.y,Tt=G.isBox3?G.min.z:0;else{let Kn=Math.pow(2,-P);ct=Math.floor(_e.width*Kn),mt=Math.floor(_e.height*Kn),M.isDataArrayTexture?ft=_e.depth:M.isData3DTexture?ft=Math.floor(_e.depth*Kn):ft=1,Ct=0,Nt=0,Tt=0}W!==null?(qt=W.x,oe=W.y,De=W.z):(qt=0,oe=0,De=0);let he=St.convert(I.format),At=St.convert(I.type),Ce;I.isData3DTexture?(Ht.setTexture3D(I,0),Ce=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ht.setTexture2DArray(I,0),Ce=U.TEXTURE_2D_ARRAY):(Ht.setTexture2D(I,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let Qt=U.getParameter(U.UNPACK_ROW_LENGTH),Nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ja=U.getParameter(U.UNPACK_SKIP_PIXELS),Ln=U.getParameter(U.UNPACK_SKIP_ROWS),Ao=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt);let Re=M.isDataArrayTexture||M.isData3DTexture,Jn=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){let Kn=yt.get(M),hn=yt.get(I),vn=yt.get(Kn.__renderTarget),Qf=yt.get(hn.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,vn.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qf.__webglFramebuffer);for(let ua=0;ua<ft;ua++)Re&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(M).__webglTexture,P,Tt+ua),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(I).__webglTexture,et,De+ua)),U.blitFramebuffer(Ct,Nt,ct,mt,qt,oe,ct,mt,U.DEPTH_BUFFER_BIT,U.NEAREST);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(P!==0||M.isRenderTargetTexture||yt.has(M)){let Kn=yt.get(M),hn=yt.get(I);_t.bindFramebuffer(U.READ_FRAMEBUFFER,ab),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,rb);for(let vn=0;vn<ft;vn++)Re?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kn.__webglTexture,P,Tt+vn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kn.__webglTexture,P),Jn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,et,De+vn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,et),P!==0?U.blitFramebuffer(Ct,Nt,ct,mt,qt,oe,ct,mt,U.COLOR_BUFFER_BIT,U.NEAREST):Jn?U.copyTexSubImage3D(Ce,et,qt,oe,De+vn,Ct,Nt,ct,mt):U.copyTexSubImage2D(Ce,et,qt,oe,Ct,Nt,ct,mt);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Jn?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Ce,et,qt,oe,De,ct,mt,ft,he,At,_e.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,et,qt,oe,De,ct,mt,ft,he,_e.data):U.texSubImage3D(Ce,et,qt,oe,De,ct,mt,ft,he,At,_e):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,et,qt,oe,ct,mt,he,At,_e.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,et,qt,oe,_e.width,_e.height,he,_e.data):U.texSubImage2D(U.TEXTURE_2D,et,qt,oe,ct,mt,he,At,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ja),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ao),et===0&&I.generateMipmaps&&U.generateMipmap(Ce),_t.unbindTexture()},this.initRenderTarget=function(M){yt.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){R=0,w=0,N=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}};var ZM={type:"change"},Qg={type:"start"},KM={type:"end"},Zf=new na,JM=new ci,C2=Math.cos(70*Dg.DEG2RAD),qe=new B,Un=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jg=1e-6,Jf=class extends cc{constructor(t,n=null){super(t,n),this.state=ue.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:aa.ROTATE,MIDDLE:aa.DOLLY,RIGHT:aa.PAN},this.touches={ONE:ra.ROTATE,TWO:ra.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Cn,this._lastTargetPosition=new B,this._quat=new Cn().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new go,this._sphericalDelta=new go,this._scale=1,this._panOffset=new B,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new B,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D2.bind(this),this._onPointerDown=R2.bind(this),this._onPointerUp=U2.bind(this),this._onContextMenu=z2.bind(this),this._onMouseWheel=O2.bind(this),this._onKeyDown=I2.bind(this),this._onTouchStart=P2.bind(this),this._onTouchMove=B2.bind(this),this._onMouseDown=N2.bind(this),this._onMouseMove=L2.bind(this),this._interceptControlDown=F2.bind(this),this._interceptControlUp=H2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ZM),this.update(),this.state=ue.NONE}update(t=null){let n=this.object.position;qe.copy(n).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),n.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=qe.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Zf.origin.copy(this.object.position),Zf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zf.direction))<C2?this.object.lookAt(this.target):(JM.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zf.intersectPlane(JM,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>jg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jg||this._lastTargetPosition.distanceToSquared(this.target)>jg?(this.dispatchEvent(ZM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){qe.setFromMatrixColumn(n,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,n){this.screenSpacePanning===!0?qe.setFromMatrixColumn(n,1):(qe.setFromMatrixColumn(n,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qe.copy(s).sub(this.target);let a=qe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new wt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function R2(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function D2(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function U2(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(KM),this.state=ue.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function N2(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ue.DOLLY;break;case aa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}break;case aa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Qg)}function L2(e){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function O2(e){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(e.preventDefault(),this.dispatchEvent(Qg),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(KM))}function I2(e){this.enabled!==!1&&this._handleKeyDown(e)}function P2(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ra.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ue.TOUCH_ROTATE;break;case ra.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case ra.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ue.TOUCH_DOLLY_PAN;break;case ra.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Qg)}function B2(e){switch(this._trackPointer(e),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ue.NONE}}function z2(e){this.enabled!==!1&&e.preventDefault()}function F2(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H2(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var To={source:"\u30B3\u30FC\u30C9",test:"\u30C6\u30B9\u30C8",package:"\u4F9D\u5B58\u5B9A\u7FA9",dependency:"\u5916\u90E8\u4F9D\u5B58",skill:"\u30B9\u30AD\u30EB",agent:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8",hook:"Hook",instruction:"\u4F5C\u696D\u6307\u793A",config:"\u8A2D\u5B9A",doc:"\u6587\u66F8",asset:"\u30A2\u30BB\u30C3\u30C8",group:"\u307E\u3068\u307E\u308A"},Kf={source:"#369cdd",test:"#5a9a75",package:"#bc8851",dependency:"#bc8851",skill:"#9c82d2",agent:"#ca7297",hook:"#d48457",instruction:"#7283ad",config:"#898e9d",doc:"#6aa5a1",asset:"#a3a5a7",group:"#4b9aaf"},$M={imports:"import",loads:"\u8AAD\u307F\u8FBC\u307F",references:"\u8A18\u8F09\u3055\u308C\u305F\u53C2\u7167","uses-skill":"\u30B9\u30AD\u30EB\u5229\u7528\u306E\u6307\u793A","references-agent":"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u53C2\u7167",bundles:"\u540C\u68B1\u30EA\u30BD\u30FC\u30B9",declares:"\u4F9D\u5B58\u5BA3\u8A00",runs:"\u30B9\u30AF\u30EA\u30D7\u30C8\u8D77\u52D5"},V2={add:"\u8FFD\u52A0\u5019\u88DC",merge:"\u7D71\u5408\u5019\u88DC","retire-review":"\u5EC3\u6B62\u524D\u306E\u5229\u7528\u78BA\u8A8D",repair:"\u4FEE\u5FA9\u5019\u88DC"},G2=JSON.parse(document.getElementById("observatory-data").textContent);function tb(e){let t=[...new Set(e.map(n=>n.group))].sort();return e.map(n=>{let i=e.filter(h=>h.group===n.group),s=i.indexOf(n),a=t.indexOf(n.group),r=a/t.length*Math.PI*2-Math.PI/2,o=t.length===1?0:220,l=s/i.length*Math.PI*2,c=Math.min(115,25+i.length*2);return{...n,x:430+Math.cos(r)*o+Math.cos(l)*c,y:300+Math.sin(r)*o+Math.sin(l)*c,z:(a%3-1)*90+s%5*15}})}function k2(e,t){let n=new Set(e.map(r=>r.id)),i=new Map(e.map(r=>[r.id,r])),s=new Map;for(let r of e){s.has(r.group)||s.set(r.group,{id:`group:${r.group}`,label:r.group,group:r.group,kind:"group",count:0,lines:0,incoming:0,outgoing:0});let o=s.get(r.group);o.count++,o.lines+=r.lines}let a=new Map;for(let r of t)if(n.has(r.source)&&n.has(r.target)){let o=`group:${i.get(r.source).group}`,l=`group:${i.get(r.target).group}`;if(o===l)continue;let c=`${o}|${l}|${r.relation}`;a.has(c)||a.set(c,{source:o,target:l,relation:r.relation,count:0}),a.get(c).count++}return{nodes:[...s.values()],edges:[...a.values()]}}function X2({nodes:e,edges:t,onSelect:n,selected:i}){let s=(0,D.useMemo)(()=>tb(e),[e]),a=new Map(s.map(r=>[r.id,r]));return D.default.createElement("svg",{className:"graph",viewBox:"0 0 860 600",role:"img","aria-label":"\u4F9D\u5B58\u95A2\u4FC2\u306E2D\u30DE\u30C3\u30D7\u3002\u77E2\u5370\u306F\u53C2\u7167\u5143\u304B\u3089\u53C2\u7167\u5148\u3002\u4E0B\u306E\u4E00\u89A7\u304B\u3089\u540C\u3058\u9805\u76EE\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002"},D.default.createElement("defs",null,D.default.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"19",refY:"5",markerWidth:"5",markerHeight:"5",orient:"auto-start-reverse"},D.default.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"currentColor"}))),D.default.createElement("g",{className:"edges"},t.map((r,o)=>{let l=a.get(r.source),c=a.get(r.target);return!l||!c?null:D.default.createElement("line",{key:o,x1:l.x,y1:l.y,x2:c.x,y2:c.y,markerEnd:"url(#arrow)",className:["references","uses-skill","bundles","references-agent"].includes(r.relation)?"ref-edge":"",opacity:i&&r.source!==i&&r.target!==i?.14:.55},D.default.createElement("title",null,$M[r.relation],r.count?` \xD7 ${r.count}`:""))})),s.map(r=>D.default.createElement("g",{key:r.id,transform:`translate(${r.x},${r.y})`,className:"graph-node",onClick:()=>n(r)},D.default.createElement("circle",{r:r.kind==="group"?Math.min(30,14+Math.sqrt(r.count)):r.id===i?10:6,fill:Kf[r.kind],opacity:i&&r.id!==i?.55:.9}),D.default.createElement("circle",{r:r.kind==="group"?35:18,fill:"transparent"}),(s.length<35||r.id===i)&&D.default.createElement("text",{y:r.kind==="group"?48:23,textAnchor:"middle"},r.label.length>26?r.label.slice(0,23)+"\u2026":r.label,r.count?` (${r.count})`:""),D.default.createElement("title",null,r.id," \xB7 ",To[r.kind],r.count?` \xB7 ${r.count}\u4EF6`:""))),!e.length&&D.default.createElement("text",{x:"430",y:"300",textAnchor:"middle"},"\u8A72\u5F53\u3059\u308B\u9805\u76EE\u304C\u3042\u308A\u307E\u305B\u3093"))}function W2({nodes:e,edges:t,onSelect:n,onFallback:i}){let s=(0,D.useRef)();return(0,D.useEffect)(()=>{let a=s.current,r;try{r=new qf({antialias:!0,alpha:!0})}catch{i();return}r.setPixelRatio(Math.min(devicePixelRatio,2)),r.domElement.setAttribute("aria-label","Three.js \u306E3D\u69CB\u9020\u30DE\u30C3\u30D7\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002\u9805\u76EE\u306E\u9078\u629E\u306F\u4E0B\u306E\u4E00\u89A7\u3067\u3082\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002"),r.domElement.setAttribute("role","img"),a.append(r.domElement);let o=new Jl,l=new cn(48,1,.1,4e3);l.position.set(0,220,890);let c=new Jf(l,r.domElement);c.enableDamping=!1;let h=tb(e),d=new Map(h.map(z=>[z.id,z])),f=new rc(1,12,8),p=new Ha,_=new $l(f,p,h.length),x=new de;h.forEach((z,C)=>{let H=z.kind==="group"?Math.min(30,12+Math.sqrt(z.count)):7;x.compose(new B(z.x-430,300-z.y,z.z),new Cn,new B(H,H,H)),_.setMatrixAt(C,x),_.setColorAt(C,new Jt(Kf[z.kind]))}),o.add(_);let m=[];if(h.length<=30)for(let z of h){let C=document.createElement("canvas");C.width=640,C.height=96;let H=C.getContext("2d");H.font="42px system-ui, sans-serif",H.textAlign="center",H.fillStyle=getComputedStyle(a).getPropertyValue("--fg").trim(),H.fillText(`${z.label.length>25?z.label.slice(0,22)+"\u2026":z.label}${z.count?` (${z.count})`:""}`,320,58,620);let X=new nc(C),tt=new po({map:X,transparent:!0,depthTest:!1}),V=new jl(tt);V.position.set(z.x-430,300-z.y-40,z.z),V.scale.set(330,50,1),o.add(V),m.push([X,tt])}let u=[];for(let z of t){let C=d.get(z.source),H=d.get(z.target);C&&H&&u.push(C.x-430,300-C.y,C.z,H.x-430,300-H.y,H.z)}let g=new Yn;g.setAttribute("position",new sn(u,3));let y=new mo({color:8819618,transparent:!0,opacity:.35});o.add(new ec(g,y));let v=()=>r.render(o,l),T=()=>{let z=a.clientWidth,C=Math.max(350,a.clientHeight);r.setSize(z,C),l.aspect=z/C,l.updateProjectionMatrix(),v()};c.addEventListener("change",v);let R=new ResizeObserver(T);R.observe(a),T();let w=new lc,N=new wt,E=null,b=z=>{E=[z.clientX,z.clientY]},L=z=>{if(!E||Math.hypot(z.clientX-E[0],z.clientY-E[1])>5)return;let C=r.domElement.getBoundingClientRect();N.set((z.clientX-C.left)/C.width*2-1,-(z.clientY-C.top)/C.height*2+1),w.setFromCamera(N,l);let H=w.intersectObject(_)[0];H?.instanceId!==void 0&&n(h[H.instanceId])},k=z=>{z.preventDefault(),i()};return r.domElement.addEventListener("pointerdown",b),r.domElement.addEventListener("pointerup",L),r.domElement.addEventListener("webglcontextlost",k),()=>{R.disconnect(),c.dispose(),f.dispose(),p.dispose(),g.dispose(),y.dispose();for(let[z,C]of m)z.dispose(),C.dispose();r.dispose(),r.domElement.remove()}},[e,t]),D.default.createElement("div",{className:"three-host",ref:s})}function jM({items:e,onPath:t}){let[n,i]=(0,D.useState)("all"),s=e.filter(o=>n==="all"||o.severity===n),[a,r]=(0,D.useState)(60);return D.default.createElement(D.default.Fragment,null,D.default.createElement("div",{className:"section-row"},D.default.createElement("p",null,s.length," \u4EF6\u306E\u78BA\u8A8D\u4E8B\u9805\u3002\u5024\u3084\u30BD\u30FC\u30B9\u672C\u6587\u306F\u51FA\u529B\u3057\u3066\u3044\u307E\u305B\u3093\u3002"),D.default.createElement("label",null,"\u91CD\u8981\u5EA6 ",D.default.createElement("select",{value:n,onChange:o=>i(o.target.value)},D.default.createElement("option",{value:"all"},"\u3059\u3079\u3066"),["critical","high","medium","low","info"].map(o=>D.default.createElement("option",{key:o},o))))),D.default.createElement("div",{className:"finding-list"},s.slice(0,a).map(o=>D.default.createElement("article",{key:o.id,className:"finding"},D.default.createElement("div",null,D.default.createElement("span",{className:`severity ${o.severity}`},o.severity),D.default.createElement("span",{className:"muted"},o.confidence==="confirmed"?"\u9759\u7684\u4E8B\u5B9F":"\u8981\u691C\u8A3C")),D.default.createElement("h3",null,o.title),D.default.createElement("button",{className:"path-link",onClick:()=>t(o.path)},o.path,":",o.line),D.default.createElement("p",null,o.detail),D.default.createElement("p",{className:"next"},o.action)))),!s.length&&D.default.createElement("p",{className:"empty"},"\u8A72\u5F53\u3059\u308B\u5146\u5019\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4ECA\u56DE\u306E\u89B3\u6E2C\u7BC4\u56F2\u3067\u306E\u7D50\u679C\u3067\u3059\u3002"),s.length>a&&D.default.createElement("button",{onClick:()=>r(a+60)},"\u3055\u3089\u306B60\u4EF6\u8868\u793A"))}function q2(){let[e,t]=(0,D.useState)(G2),[n,i]=(0,D.useState)("map"),[s,a]=(0,D.useState)(""),[r,o]=(0,D.useState)("all"),[l,c]=(0,D.useState)("all"),[h,d]=(0,D.useState)("groups"),[f,p]=(0,D.useState)("2d"),[_,x]=(0,D.useState)(null),[m,u]=(0,D.useState)(0),[g,y]=(0,D.useState)(""),T=(0,D.useMemo)(()=>new Map(e.nodes.map(C=>[C.id,C])),[e]).get(_),R=(0,D.useMemo)(()=>e.nodes.filter(C=>(r==="all"||C.kind===r)&&(l==="all"||C.group===l)&&`${C.path} ${C.name??""}`.toLowerCase().includes(s.toLowerCase())),[e,s,r,l]);(0,D.useEffect)(()=>u(0),[s,r,l]);let w=(0,D.useMemo)(()=>{if(h==="groups")return k2(R,e.edges);let C=new Set([_]);if(_)for(let V of e.edges)V.source===_&&C.add(V.target),V.target===_&&C.add(V.source);let X=[...R].sort((V,at)=>C.has(at.id)-C.has(V.id)||at.incoming+at.outgoing-V.incoming-V.outgoing||V.id.localeCompare(at.id)).slice(0,160),tt=new Set(X.map(V=>V.id));return{nodes:X,edges:e.edges.filter(V=>tt.has(V.source)&&tt.has(V.target)).slice(0,650)}},[R,e,h,_]),N=(0,D.useMemo)(()=>e.edges.filter(C=>C.source===_||C.target===_),[e,_]);function E(C){C.kind==="group"?(c(C.group),d("files"),x(null)):x(C.id)}function b(C){i("map"),x(C),d("files"),c("all"),o("all"),a("")}function L(){a(""),o("all"),c("all"),x(null),d("groups")}function k(){let C=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),H=document.createElement("a");H.href=C,H.download="observatory-report.json",H.click(),setTimeout(()=>URL.revokeObjectURL(C),1e3)}async function z(C){try{let H=C.target.files[0];if(!H)return;if(H.size>80*1024*1024)throw Error("\u30D5\u30A1\u30A4\u30EB\u304C\u5927\u304D\u3059\u304E\u307E\u3059");let X=JSON.parse(await H.text());if(X.schema_version!==1||!Array.isArray(X.nodes)||!Array.isArray(X.edges)||!X.coverage||!X.stats||!Array.isArray(X.findings)||!Array.isArray(X.fit)||!Array.isArray(X.recommendations))throw Error("\u5BFE\u5FDC\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u5F62\u5F0F\u3067\u306F\u3042\u308A\u307E\u305B\u3093");t(X),L(),y("\u30EC\u30DD\u30FC\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F")}catch(H){y(H.message)}finally{C.target.value=""}}return D.default.createElement("main",null,D.default.createElement("header",null,D.default.createElement("div",null,D.default.createElement("div",{className:"eyebrow"},"CODEBASE / OBSERVATORY"),D.default.createElement("h1",null,"\u30B3\u30FC\u30C9\u3068\u3001\u652F\u3048\u308B\u4ED5\u7D44\u307F\u3092\u898B\u6E21\u3059\u3002"),D.default.createElement("p",{className:"root-path"},e.root)),D.default.createElement("div",{className:"header-actions"},D.default.createElement("label",{className:"file-button"},"\u30EC\u30DD\u30FC\u30C8\u3092\u958B\u304F",D.default.createElement("input",{type:"file",accept:".json,application/json",onChange:z})),D.default.createElement("button",{onClick:k},"JSON\u3092\u4FDD\u5B58"))),D.default.createElement("div",{className:"overview"},D.default.createElement("div",null,D.default.createElement("strong",null,e.stats.files.toLocaleString()),D.default.createElement("span",null,"\u30D5\u30A1\u30A4\u30EB")),D.default.createElement("div",null,D.default.createElement("strong",null,e.edges.length.toLocaleString()),D.default.createElement("span",null,"\u9759\u7684\u306A\u95A2\u4FC2")),D.default.createElement("div",null,D.default.createElement("strong",null,e.fit.length),D.default.createElement("span",null,"\u30B9\u30AD\u30EB\u30FB\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8")),D.default.createElement("div",null,D.default.createElement("strong",null,e.findings.length),D.default.createElement("span",null,"\u8981\u78BA\u8A8D\u4E8B\u9805")),D.default.createElement("p",{className:"scan-state"},D.default.createElement("span",{className:`dot ${e.coverage.complete?"ok":"warn"}`}),e.coverage.complete?"\u8A2D\u5B9A\u7BC4\u56F2\u306E\u8AAD\u53D6\u5B8C\u4E86":"\u8AAD\u53D6\u304C\u4E0D\u5B8C\u5168",D.default.createElement("br",null),D.default.createElement("time",null,new Date(e.generated_at).toLocaleString("ja-JP")))),D.default.createElement("nav",{"aria-label":"\u30EC\u30DD\u30FC\u30C8\u306E\u8868\u793A"},[["map","\u69CB\u9020\u30DE\u30C3\u30D7"],["findings","\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30FB\u8A2D\u5B9A"],["fit","\u62C5\u5F53\u3068\u9069\u5408\u6027"],["delta","\u524D\u56DE\u3068\u306E\u5DEE\u5206"],["coverage","\u89B3\u6E2C\u7BC4\u56F2"]].map(([C,H])=>D.default.createElement("button",{key:C,"aria-pressed":n===C,onClick:()=>i(C)},H))),D.default.createElement("div",{className:"live-message",role:"status"},g),n==="map"&&D.default.createElement(D.default.Fragment,null,D.default.createElement("div",{className:"toolbar"},D.default.createElement("label",null,"\u691C\u7D22",D.default.createElement("input",{value:s,placeholder:"\u30D5\u30A1\u30A4\u30EB\u540D\u30FB\u30B9\u30AD\u30EB\u540D",onChange:C=>a(C.target.value)})),D.default.createElement("label",null,"\u7A2E\u985E",D.default.createElement("select",{value:r,onChange:C=>o(C.target.value)},D.default.createElement("option",{value:"all"},"\u3059\u3079\u3066\u306E\u7A2E\u985E"),Object.entries(To).filter(([C])=>C!=="group").map(([C,H])=>D.default.createElement("option",{key:C,value:C},H)))),D.default.createElement("label",null,"\u7BC4\u56F2",D.default.createElement("select",{value:l,onChange:C=>c(C.target.value)},D.default.createElement("option",{value:"all"},"\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u5168\u4F53"),[...new Set(e.nodes.map(C=>C.group))].sort().map(C=>D.default.createElement("option",{key:C},C)))),D.default.createElement("button",{onClick:L},"\u5168\u4F53\u3078\u623B\u308B")),D.default.createElement("div",{className:"map-layout"},D.default.createElement("section",{className:"map-area"},D.default.createElement("div",{className:"section-row"},D.default.createElement("div",{className:"segmented"},D.default.createElement("button",{"aria-pressed":h==="groups",onClick:()=>d("groups")},"\u307E\u3068\u307E\u308A"),D.default.createElement("button",{"aria-pressed":h==="files",onClick:()=>d("files")},"\u30D5\u30A1\u30A4\u30EB")),D.default.createElement("div",{className:"segmented"},D.default.createElement("button",{"aria-pressed":f==="2d",onClick:()=>p("2d")},"2D"),D.default.createElement("button",{"aria-pressed":f==="3d",onClick:()=>p("3d")},"3D \xB7 Three.js"))),f==="2d"?D.default.createElement(X2,{...w,selected:_,onSelect:E}):D.default.createElement(W2,{...w,onSelect:E,onFallback:()=>{p("2d"),y("WebGL\u3092\u5229\u7528\u3067\u304D\u306A\u3044\u305F\u30812D\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002")}}),D.default.createElement("div",{className:"map-caption"},D.default.createElement("p",null,h==="groups"?"\u307E\u3068\u307E\u308A\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u4E2D\u306E\u30D5\u30A1\u30A4\u30EB\u3078\u9032\u307F\u307E\u3059\u3002":`${R.length} \u4EF6\u4E2D ${w.nodes.length} \u4EF6\u3092\u63CF\u753B\u3002\u9078\u629E\u3057\u305F\u9805\u76EE\u3068\u63A5\u7D9A\u6570\u304C\u591A\u3044\u9805\u76EE\u3092\u512A\u5148\u3002\u5168\u4EF6\u306F\u4E0B\u306E\u4E00\u89A7\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002`),D.default.createElement("p",null,f==="2d"?"\u77E2\u5370: \u53C2\u7167\u5143 \u2192 \u53C2\u7167\u5148\u3002\u70B9\u7DDA: \u6587\u66F8\u30FB\u30B9\u30AD\u30EB\u4E0A\u306E\u53C2\u7167\u3002":"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002\u65B9\u5411\u3068\u95A2\u4FC2\u306E\u7A2E\u985E\u306F\u8A73\u7D30\u30FB2D\u3067\u78BA\u8A8D\u3002")),D.default.createElement("div",{className:"legend"},Object.entries(To).filter(([C])=>w.nodes.some(H=>H.kind===C)).map(([C,H])=>D.default.createElement("span",{key:C},D.default.createElement("i",{style:{background:Kf[C]}}),H)))),D.default.createElement("aside",{"aria-live":"polite"},T?D.default.createElement(D.default.Fragment,null,D.default.createElement("div",{className:"eyebrow"},"SELECTED / ",To[T.kind]),D.default.createElement("h2",null,T.name??T.label),D.default.createElement("p",{className:"path"},T.path),D.default.createElement("dl",null,D.default.createElement("dt",null,"\u884C\u6570"),D.default.createElement("dd",null,T.lines),D.default.createElement("dt",null,"\u53C2\u7167\u5143"),D.default.createElement("dd",null,T.incoming),D.default.createElement("dt",null,"\u53C2\u7167\u5148"),D.default.createElement("dd",null,T.outgoing)),D.default.createElement("h3",null,"\u3064\u306A\u304C\u308A"),D.default.createElement("div",{className:"connection-list"},N.slice(0,80).map((C,H)=>D.default.createElement("button",{key:H,onClick:()=>b(C.source===_?C.target:C.source)},D.default.createElement("span",null,C.source===_?"\u2192 \u53C2\u7167\u5148":"\u2190 \u53C2\u7167\u5143"," \xB7 ",$M[C.relation]),C.source===_?C.target:C.source,D.default.createElement("small",null,"\u6839\u62E0: ",C.source,":",C.line)))),N.length>80&&D.default.createElement("p",null,"\u63A5\u7D9A ",N.length," \u4EF6\u4E2D80\u4EF6\u3002\u5168\u4EF6\u306FJSON\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"),!N.length&&D.default.createElement("p",null,"\u9759\u7684\u53C2\u7167\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u672A\u4F7F\u7528\u3092\u610F\u5473\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"),e.findings.filter(C=>C.path===_).map(C=>D.default.createElement("div",{className:"inline-finding",key:C.id},D.default.createElement("span",{className:`severity ${C.severity}`},C.severity),D.default.createElement("p",null,C.title," \xB7 ",C.line,"\u884C\u76EE")))):D.default.createElement(D.default.Fragment,null,D.default.createElement("div",{className:"eyebrow"},"HOW TO READ"),D.default.createElement("h2",null,"\u5165\u53E3\u304B\u3089\u3001\u95A2\u4FC2\u3092\u305F\u3069\u308B\u3002"),D.default.createElement("p",null,"\u5DE6\u306E\u307E\u3068\u307E\u308A\u3092\u958B\u304D\u3001\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u4F9D\u5B58\u5148\u30FB\u53C2\u7167\u5143\u3068\u6839\u62E0\u306E\u884C\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"),D.default.createElement("div",{className:"reading-guide"},D.default.createElement("p",null,D.default.createElement("b",null,"\u30B3\u30FC\u30C9"),D.default.createElement("br",null),"import / HTML\u8AAD\u307F\u8FBC\u307F\u3092\u8FFD\u8DE1"),D.default.createElement("p",null,D.default.createElement("b",null,"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 \u2192 \u30B9\u30AD\u30EB"),D.default.createElement("br",null),"\u62C5\u5F53\u3059\u308B\u5F79\u5272\u3068\u5229\u7528\u3059\u308B\u624B\u9806"),D.default.createElement("p",null,D.default.createElement("b",null,"\u30B9\u30AD\u30EB \u2192 scripts / hooks / \u8A2D\u5B9A"),D.default.createElement("br",null),"\u5B9F\u884C\u3068\u5224\u65AD\u3092\u652F\u3048\u308B\u30D5\u30A1\u30A4\u30EB")),D.default.createElement("p",{className:"muted"},"\u3053\u306E\u56F3\u306F\u9759\u7684\u306A\u69CB\u9020\u3067\u3059\u3002\u5B9F\u884C\u4E2D\u306E\u72B6\u614B\u306F\u8868\u3057\u3066\u3044\u307E\u305B\u3093\u3002")))),D.default.createElement("section",{className:"inventory"},D.default.createElement("div",{className:"section-row"},D.default.createElement("h2",null,"\u9805\u76EE\u3092\u9078\u3076 ",D.default.createElement("span",{className:"muted"},R.length,"\u4EF6")),D.default.createElement("div",null,D.default.createElement("button",{disabled:!m,onClick:()=>u(m-1)},"\u524D\u3078"),D.default.createElement("span",{className:"page-label"},m+1," / ",Math.max(1,Math.ceil(R.length/60))),D.default.createElement("button",{disabled:(m+1)*60>=R.length,onClick:()=>u(m+1)},"\u6B21\u3078"))),D.default.createElement("div",{className:"node-list"},R.slice(m*60,(m+1)*60).map(C=>D.default.createElement("button",{key:C.id,onClick:()=>{x(C.id),d("files")},"aria-pressed":_===C.id},D.default.createElement("span",{className:"kind-label"},D.default.createElement("i",{style:{background:Kf[C.kind]}}),To[C.kind]),D.default.createElement("span",null,C.path),D.default.createElement("small",null,"\u2190",C.incoming,"\u3000\u2192",C.outgoing)))))),n==="findings"&&D.default.createElement("section",{className:"tab-content"},D.default.createElement("h2",null,"\u691C\u51FA\u3057\u305F\u5146\u5019\u304B\u3089\u3001\u78BA\u8A8D\u7B87\u6240\u3078\u3002"),D.default.createElement("p",null,"\u69CB\u6587\u30FB\u8A2D\u5B9A\u306E\u4E0D\u5099\u3068\u3001\u5371\u967A\u306B\u306A\u308A\u5F97\u308B\u51E6\u7406\u3092\u5217\u6319\u3057\u307E\u3059\u3002\u60AA\u7528\u53EF\u80FD\u6027\u3084\u6700\u65B0CVE\u306F\u5225\u9014\u691C\u8A3C\u304C\u5FC5\u8981\u3067\u3059\u3002"),D.default.createElement(jM,{items:e.findings,onPath:b})),n==="fit"&&D.default.createElement("section",{className:"tab-content"},D.default.createElement("h2",null,"\u5F79\u5272\u3068\u624B\u9806\u3092\u3001\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u306B\u5408\u308F\u305B\u308B\u3002"),D.default.createElement("p",null,"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306F\u300C\u8AB0\u304C\u62C5\u5F53\u3059\u308B\u304B\u300D\u3001\u30B9\u30AD\u30EB\u306F\u300C\u3069\u306E\u624B\u9806\u3092\u4F7F\u3046\u304B\u300D\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u53C2\u7167\u6570\u3060\u3051\u3067\u5FC5\u8981\u30FB\u4E0D\u8981\u306F\u6C7A\u3081\u307E\u305B\u3093\u3002"),D.default.createElement("div",{className:"fit-table"},D.default.createElement("table",null,D.default.createElement("thead",null,D.default.createElement("tr",null,D.default.createElement("th",null,"\u5B9A\u7FA9"),D.default.createElement("th",null,"\u7A2E\u985E"),D.default.createElement("th",null,"\u53C2\u7167\u5143"),D.default.createElement("th",null,"\u9759\u7684\u306A\u72B6\u614B"),D.default.createElement("th",null,"\u5229\u7528\u5B9F\u7E3E"))),D.default.createElement("tbody",null,e.fit.map(C=>D.default.createElement("tr",{key:C.path},D.default.createElement("td",null,D.default.createElement("button",{className:"path-link",onClick:()=>b(C.path)},C.name),D.default.createElement("small",null,C.path)),D.default.createElement("td",null,To[C.kind]),D.default.createElement("td",null,C.incoming),D.default.createElement("td",null,C.status),D.default.createElement("td",null,C.usage)))))),D.default.createElement("h2",null,"\u8FFD\u52A0\u30FB\u7D71\u5408\u30FB\u5EC3\u6B62\u306E\u691C\u8A0E\u5019\u88DC"),D.default.createElement("div",{className:"recommendations"},e.recommendations.map((C,H)=>D.default.createElement("article",{key:H},D.default.createElement("div",{className:"eyebrow"},V2[C.action]," / ",C.confidence),D.default.createElement("h3",null,C.title),D.default.createElement("p",null,C.reason),C.paths.map(X=>D.default.createElement("button",{key:X,className:"path-link",onClick:()=>b(X)},X)),D.default.createElement("p",{className:"next"},C.next_step)))),!e.recommendations.length&&D.default.createElement("p",null,"\u4ECA\u56DE\u306E\u30EB\u30FC\u30EB\u304B\u3089\u306E\u63D0\u6848\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u5B9F\u4F5C\u696D\u3067\u9069\u5408\u6027\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002")),n==="delta"&&D.default.createElement("section",{className:"tab-content"},D.default.createElement("h2",null,"\u524D\u56DE\u306E\u89B3\u6E2C\u304B\u3089\u5909\u308F\u3063\u305F\u3053\u3068\u3002"),e.delta?D.default.createElement(D.default.Fragment,null,D.default.createElement("p",null,e.delta.note),D.default.createElement("div",{className:"delta-grid"},[["added","\u8FFD\u52A0"],["changed","\u5909\u66F4"],["removed","\u524A\u9664"],["control_changes","\u5236\u5FA1\u8A2D\u5B9A\u306E\u5909\u66F4"]].map(([C,H])=>D.default.createElement("article",{key:C},D.default.createElement("h3",null,H," \xB7 ",e.delta[C].length),e.delta[C].slice(0,100).map(X=>D.default.createElement("button",{className:"path-link",key:X,onClick:()=>b(X)},X)),e.delta[C].length>100&&D.default.createElement("p",null,"\u6B8B\u308A\u306FJSON\u3092\u53C2\u7167")))),D.default.createElement("h2",null,"\u65B0\u3057\u3044\u78BA\u8A8D\u4E8B\u9805"),D.default.createElement(jM,{items:e.delta.new_findings,onPath:b}),D.default.createElement("p",null,"\u89E3\u6D88\u5019\u88DC: ",e.delta.resolved_findings.length," \u4EF6\uFF08\u79FB\u52D5\u3084\u884C\u5909\u66F4\u306B\u3088\u308B\u898B\u304B\u3051\u306E\u89E3\u6D88\u3092\u542B\u307F\u307E\u3059\uFF09\u3002")):D.default.createElement("p",{className:"empty"},"\u521D\u56DE\u306E\u89B3\u6E2C\u3067\u3059\u3002\u540C\u3058\u51FA\u529B\u30D5\u30A9\u30EB\u30C0\u3067\u3082\u3046\u4E00\u5EA6\u30B9\u30AD\u30E3\u30F3\u3059\u308B\u304B\u3001watch\u3092\u5B9F\u884C\u3059\u308B\u3068\u5DEE\u5206\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002")),n==="coverage"&&D.default.createElement("section",{className:"tab-content"},D.default.createElement("h2",null,"\u8AAD\u3081\u305F\u7BC4\u56F2\u3092\u3001\u7D50\u679C\u3068\u4E00\u7DD2\u306B\u6B8B\u3059\u3002"),D.default.createElement("p",null,"\u30C6\u30AD\u30B9\u30C8\u89E3\u6790 ",e.coverage.text_files," \u30D5\u30A1\u30A4\u30EB / ",(e.coverage.bytes_read/1024/1024).toFixed(2)," MB\u3002JS/TS: ",e.coverage.js_parser,"\u3002YAML: ",e.coverage.yaml_parser,"\u3002"),D.default.createElement("ul",null,e.coverage.limitations.map(C=>D.default.createElement("li",{key:C},C))),D.default.createElement("p",null,"\u9664\u5916: ",e.coverage.exclusions.join(", "),"\u3002\u8FFD\u52A0\u306E\u9664\u5916: ",e.coverage.configured_exclusions.join(", ")||"\u306A\u3057","\u3002"),D.default.createElement("p",null,"\u4E0A\u9650: ",e.coverage.limits.max_files,"\u30D5\u30A1\u30A4\u30EB\u30011\u30D5\u30A1\u30A4\u30EB ",e.coverage.limits.max_bytes," bytes\u3001\u5408\u8A08 ",e.coverage.limits.max_total_bytes," bytes\u3002"),e.context_roots?.length>0&&D.default.createElement("p",null,"\u8FFD\u52A0\u306E\u89B3\u6E2C\u5BFE\u8C61: ",e.context_roots.join(" / ")),D.default.createElement("h3",null,"\u8AAD\u307F\u53D6\u308A\u30A8\u30E9\u30FC ",e.coverage.errors.length,"\u4EF6"),e.coverage.errors.map((C,H)=>D.default.createElement("p",{className:"path",key:H},C.path,": ",C.reason)),D.default.createElement("details",null,D.default.createElement("summary",null,"\u30B9\u30AD\u30C3\u30D7\u3057\u305F\u9805\u76EE ",e.coverage.skipped.length,"\u4EF6"),e.coverage.skipped.slice(0,300).map((C,H)=>D.default.createElement("p",{className:"path",key:H},C.path,": ",C.reason)),e.coverage.skipped.length>300&&D.default.createElement("p",null,"\u5168\u4EF6\u306FJSON\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))),D.default.createElement("footer",null,D.default.createElement("span",null,"\u30ED\u30FC\u30AB\u30EB\u3067\u8AAD\u3080\u3001\u30AA\u30D5\u30E9\u30A4\u30F3\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3002"),D.default.createElement("span",null,"\u30BD\u30FC\u30B9\u672C\u6587\u30FB\u79D8\u5BC6\u5024\u306E\u51FA\u529B\u306A\u3057 / \u5916\u90E8\u901A\u4FE1\u306A\u3057")))}var $g=class extends D.default.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?D.default.createElement("main",null,D.default.createElement("h1",null,"\u30EC\u30DD\u30FC\u30C8\u3092\u8868\u793A\u3067\u304D\u307E\u305B\u3093"),D.default.createElement("p",null,"\u5F62\u5F0F\u3092\u78BA\u8A8D\u3057\u3001\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u540C\u3058\u30D5\u30A9\u30EB\u30C0\u306E report.md / report.json \u3082\u5229\u7528\u3067\u304D\u307E\u3059\u3002")):this.props.children}};(0,QM.createRoot)(document.getElementById("root")).render(D.default.createElement($g,null,D.default.createElement(q2,null)));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

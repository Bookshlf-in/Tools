(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9290)}])},1345:function(e,t,r){"use strict";var n=r(5893),o=r(9055),i=r.n(o);let l=e=>{let{children:t,onClick:r}=e;return(0,n.jsx)("button",{className:i().button,onClick:r,children:t})};t.Z=l},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",a="server-patch",s="prefetch",u="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(2636)),a=r(7757),s=r(3735),u=r(3341);r(4210);let c=n._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,n,o,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function g(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:l,className:a,imgStyle:s,blurStyle:u,isLazy:c,fetchPriority:f,fill:d,placeholder:p,loading:m,srcString:v,config:b,unoptimized:_,loader:y,onLoadRef:j,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:E,onLoad:C,onError:O,...S}=e;return m=c?"lazy":m,i.default.createElement("img",{...S,...g(f),loading:m,width:o,height:n,decoding:"async","data-nimg":d?"fill":"1",className:a,style:{...s,...u},...r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,v,p,j,x,w,_))},[v,p,j,x,w,O,_,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,p,j,x,w,_)},onError:e=>{E(!0),"blur"===p&&w(!0),O&&O(e)}})}),v=(0,i.forwardRef)((e,t)=>{var r;let n,o,{src:h,sizes:v,unoptimized:b=!1,priority:_=!1,loading:y,className:j,quality:x,width:w,height:E,fill:C,style:O,onLoad:S,onLoadingComplete:P,placeholder:k="empty",blurDataURL:N,fetchPriority:R,layout:I,objectFit:M,objectPosition:T,lazyBoundary:A,lazyRoot:L,...H}=e,B=(0,i.useContext)(u.ImageConfigContext),z=(0,i.useMemo)(()=>{let e=f||B||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[B]),F=H.loader||c.default;delete H.loader;let U="__next_img_default"in F;if(U){if("custom"===z.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(O={...O,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!v&&(v=t)}let D="",Z=p(w),K=p(E);if("object"==typeof(r=h)&&(d(r)||void 0!==r.src)){let e=d(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,o=e.blurHeight,N=N||e.blurDataURL,D=e.src,!C){if(Z||K){if(Z&&!K){let t=Z/e.width;K=Math.round(e.height*t)}else if(!Z&&K){let t=K/e.height;Z=Math.round(e.width*t)}}else Z=e.width,K=e.height}}let G=!_&&("lazy"===y||void 0===y);(!(h="string"==typeof h?h:D)||h.startsWith("data:")||h.startsWith("blob:"))&&(b=!0,G=!1),z.unoptimized&&(b=!0),U&&h.endsWith(".svg")&&!z.dangerouslyAllowSVG&&(b=!0),_&&(R="high");let[V,W]=(0,i.useState)(!1),[q,Y]=(0,i.useState)(!1),J=p(x),X=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:T}:{},q?{}:{color:"transparent"},O),$="blur"===k&&N&&!V?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:Z,heightInt:K,blurWidth:n,blurHeight:o,blurDataURL:N,objectFit:X.objectFit})+'")'}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:i,width:s[c]})}}({config:z,src:h,unoptimized:b,width:Z,quality:J,sizes:v,loader:F}),ee=h,et=(0,i.useRef)(S);(0,i.useEffect)(()=>{et.current=S},[S]);let er=(0,i.useRef)(P);(0,i.useEffect)(()=>{er.current=P},[P]);let en={isLazy:G,imgAttributes:Q,heightInt:K,widthInt:Z,qualityInt:J,className:j,imgStyle:X,blurStyle:$,loading:y,config:z,fetchPriority:R,fill:C,unoptimized:b,placeholder:k,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:W,setShowAltText:Y,...H};return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{...en,ref:t}),_?i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:H.crossOrigin,...g(R)})):null)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),o=n._(r(7294)),i=r(4532),l=r(3353),a=r(1410),s=r(9064),u=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),h=r(4266),g=r(3991),m=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let _=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:_,prefetch:y=null,passHref:j,replace:x,shallow:w,scroll:E,locale:C,onClick:O,onMouseEnter:S,onTouchStart:P,legacyBehavior:k=!1,...N}=e;r=_,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=!1!==y,I=null===y?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,M=o.default.useContext(c.RouterContext),T=o.default.useContext(f.AppRouterContext),A=null!=M?M:T,L=!M,{href:H,as:B}=o.default.useMemo(()=>{if(!M){let e=b(a);return{href:e,as:m?b(m):e}}let[e,t]=(0,i.resolveHref)(M,a,!0);return{href:e,as:m?(0,i.resolveHref)(M,m):t||e}},[M,a,m]),z=o.default.useRef(H),F=o.default.useRef(B);k&&(n=o.default.Children.only(r));let U=k?n&&"object"==typeof n&&n.ref:t,[D,Z,K]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(F.current!==B||z.current!==H)&&(K(),F.current=B,z.current=H),D(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[B,U,H,K,D]);o.default.useEffect(()=>{A&&Z&&R&&v(A,H,B,{locale:C},{kind:I},L)},[B,H,Z,C,R,null==M?void 0:M.locale,A,L,I]);let V={ref:G,onClick(e){k||"function"!=typeof O||O(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,i,a,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:u,scroll:s}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,A,H,B,x,w,E,C,L,R)},onMouseEnter(e){k||"function"!=typeof S||S(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(R||!L)&&v(A,H,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},L)},onTouchStart(e){k||"function"!=typeof P||P(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(R||!L)&&v(A,H,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},L)}};if((0,s.isAbsoluteUrl)(B))V.href=B;else if(!k||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(B,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);V.href=t||(0,h.addBasePath)((0,u.addLocale)(B,e,null==M?void 0:M.defaultLocale))}return k?o.default.cloneElement(n,V):o.default.createElement("a",{...N,...V},r)}),y=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n||t,s=o||r,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9290:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),o=r(7294);let i=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");r(3814);var l=r(5244),a=r.n(l),s=r(5675),u=r.n(s),c=r(1664),f=r.n(c),d=r(1345);let p=()=>{let[e,t]=(0,o.useState)(!1),r=()=>{t(e=>!e)};return(0,n.jsxs)("div",{className:a().nav,children:[(0,n.jsxs)("div",{className:a().navTop,children:[(0,n.jsxs)("div",{className:a().navLeft,children:[(0,n.jsx)(u(),{src:"/images/logo.svg",style:a().logo,width:50,height:50,alt:"Bookshlf Logo"}),(0,n.jsx)("div",{className:a().websiteName,children:"BOOKSHLF TOOLS"})]}),(0,n.jsxs)("div",{className:a().navRight,children:[(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(d.Z,{children:"Home"})}),(0,n.jsx)(f(),{href:"/college-predictor",children:(0,n.jsx)(d.Z,{children:"College Predictor"})}),(0,n.jsx)(f(),{href:"/rank-predictor",children:(0,n.jsx)(d.Z,{children:"Rank Predictor"})}),(0,n.jsx)(f(),{href:"https://bookshlf.in",target:"_blank",children:(0,n.jsx)(d.Z,{children:"Buy & Sell Used Books"})})]}),(0,n.jsx)("div",{className:a().hamburgerContainer,children:(0,n.jsx)(d.Z,{onClick:r,children:(0,n.jsxs)("div",{className:a().hamburgerButton,children:[(0,n.jsx)("div",{className:a().hamburgerLine}),(0,n.jsx)("div",{className:a().hamburgerLine}),(0,n.jsx)("div",{className:a().hamburgerLine})]})})})]}),e&&(0,n.jsxs)("div",{className:a().navBottom,children:[(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(d.Z,{children:"Home"})}),(0,n.jsx)(f(),{href:"/college-predictor",children:(0,n.jsx)(d.Z,{children:"College Predictor"})}),(0,n.jsx)(f(),{href:"/rank-predictor",children:(0,n.jsx)(d.Z,{children:"Rank Predictor"})}),(0,n.jsx)(f(),{href:"https://bookshlf.in",target:"_blank",children:(0,n.jsx)(d.Z,{children:"Buy & Sell Used Books"})})]})]})};var h=r(7595),g=r.n(h);let m=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)("div",{className:g().children,children:t})]})};function v(e){let{Component:t,pageProps:r}=e;return(0,o.useEffect)(()=>{sessionStorage.getItem("ip")||fetch("https://api.ipify.org/?format=json").then(e=>e.json()).then(e=>{sessionStorage.setItem("ip",null==e?void 0:e.ip)}).catch(e=>{console.log("Error fetching info",e)}),sessionStorage.getItem("sessionId")||sessionStorage.setItem("sessionId",i())},[]),(0,n.jsx)(m,{children:(0,n.jsx)(t,{...r})})}},3814:function(){},9055:function(e){e.exports={button:"Button_button__HxzDS"}},5244:function(e){e.exports={nav:"Header_nav__F3t74",navTop:"Header_navTop__3f1Xs",navLeft:"Header_navLeft__pAsbu",navRight:"Header_navRight__JtcqO",logo:"Header_logo__6vBZG",websiteName:"Header_websiteName__Dtglx",hamburgerContainer:"Header_hamburgerContainer__xNNAT",hamburgerButton:"Header_hamburgerButton__3wffq",hamburgerLine:"Header_hamburgerLine__wFzYi",navBottom:"Header_navBottom__kfMDP"}},7595:function(e){e.exports={children:"Layout_children__4GgcI"}},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);
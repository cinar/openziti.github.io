"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,f=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},83236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Starting With Services",s={unversionedId:"learn/quickstarts/services/index",id:"learn/quickstarts/services/index",title:"Starting With Services",description:"Once you have your zero trust overlay network in place and you want to start using it, you'll be wondering where to begin. You can start",source:"@site/docs/learn/quickstarts/services/index.md",sourceDirName:"learn/quickstarts/services",slug:"/learn/quickstarts/services/",permalink:"/docs/learn/quickstarts/services/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/services/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Example Enabling BrowZer",permalink:"/docs/learn/quickstarts/browzer/example/"},next:{title:"Kubernetes Service",permalink:"/docs/learn/quickstarts/services/kubernetes-service"}},c={},l=[{value:"Zero Trust Application Access",id:"zero-trust-application-access",level:2},{value:"Zero Trust Host Access",id:"zero-trust-host-access",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"starting-with-services"},"Starting With Services"),(0,o.kt)("p",null,"Once you have your zero trust overlay network in place and you want to start using it, you'll be wondering where to begin. You can start\nin a few different directions. Depending on your experience and what you're looking to do you'll have numerous directions to go in."),(0,o.kt)("p",null,"This page will hopefully give you some insight into some of the choices you can make."),(0,o.kt)("h2",{id:"zero-trust-application-access"},"Zero Trust Application Access"),(0,o.kt)("p",null,"OpenZiti is really about embedding zero trust directly into your applications. If you are a developer, you might want to start with\nyour favorite language and start your OpenZiti journey with \"zero trust application access\". This means you'll take an SDK and embed it\ninto an application you write! It's probably best to explore the best SDK for your language and find samples for that SDK to use.\n",(0,o.kt)("a",{parentName:"p",href:"/"},"The landing page")," has links to all the SDKs to choose from.  "),(0,o.kt)("h2",{id:"zero-trust-host-access"},"Zero Trust Host Access"),(0,o.kt)("p",null,"If you're not a developer, or if you have an application which you can't (or don't want to) change you can start with \"zero trust host\naccess\". For this, you will install an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/tunnelers/"},"OpenZiti tunneller"),' on your "clients" and on your "servers" and\nprovide access to your services using these executables. If this sounds like a good place to start, follow the\n',(0,o.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/services/ztha"},"Your First Service")," quickstart."))}p.isMDXComponent=!0}}]);
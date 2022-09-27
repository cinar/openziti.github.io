"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={},a="On Demand",s={unversionedId:"metrics/inspect",id:"metrics/inspect",title:"On Demand",description:"The Ziti Controller supports pulling metrics on demand via the inspections framework.",source:"@site/docs/metrics/inspect.md",sourceDirName:"metrics",slug:"/metrics/inspect",permalink:"/docusaurus/docs/metrics/inspect",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/metrics/inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Reporter",permalink:"/docusaurus/docs/metrics/file"},next:{title:"Types of Metrics Reported",permalink:"/docusaurus/docs/metrics/metric-types"}},c={},p=[{value:"Ziti Command Line",id:"ziti-command-line",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-demand"},"On Demand"),(0,i.kt)("p",null,"The Ziti Controller supports pulling metrics on demand via the ",(0,i.kt)("inlineCode",{parentName:"p"},"inspections")," framework. "),(0,i.kt)("p",null,"The inspections framework is part of the fabric API, hosted by the controller. The fabric API binding will need to be enabled in the controller configuration file for this to work."),(0,i.kt)("h2",{id:"ziti-command-line"},"Ziti Command Line"),(0,i.kt)("p",null,"The Ziti fabric CLI has support for the inspect command built in.  Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ziti fabric inspect '.*' metrics:json\n")),(0,i.kt)("p",null,"Let's break that command down a bit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ziti fabric inspect:")," The base fabric inspect command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".","*",":")," The network components to inspect.  .","*"," inspects everything,  other options include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ctrl_client:")," Just the controller"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Router Id:")," Just a single router"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metrics:json:")," Get metrics in json format.  Other formats include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prometheus:")," Get metrics in the Prometheus ","[text exposition format]"," (",(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format"},"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format"),").")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The default CLI result will strip json markup.  Add ",(0,i.kt)("inlineCode",{parentName:"p"},"-j")," to the inspect command to get the raw json output.")))}m.isMDXComponent=!0}}]);
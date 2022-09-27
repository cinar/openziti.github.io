"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6805:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(7462),o=(n(7294),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are building a new application you have a unique opportunity to choose to use one of the Ziti SDKs and to create a\ntruly zero trust application from the start! Navigate over to the ",(0,o.kt)("a",{parentName:"p",href:"../api"},"api")," page to learn more about which SDKs\nare available and for documentation focused on using these sdks."))}a.isMDXComponent=!0},2390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905)),i=n(6805);const a={uid:"ziti_client_sdk",title:"SDKs",sidebar_position:5},s="Ziti SDKs",c={unversionedId:"clients/sdks",id:"clients/sdks",title:"SDKs",description:"",source:"@site/docs/clients/sdks.mdx",sourceDirName:"clients",slug:"/clients/sdks",permalink:"/docusaurus/docs/clients/sdks",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/clients/sdks.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{uid:"ziti_client_sdk",title:"SDKs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Choosing a Client",permalink:"/docusaurus/docs/clients/choose"},next:{title:"Tunnelers",permalink:"/docusaurus/docs/clients/tunnelers/"}},u={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ziti-sdks"},"Ziti SDKs"),(0,o.kt)(i.ZP,{mdxType:"SdkMd"}))}d.isMDXComponent=!0}}]);
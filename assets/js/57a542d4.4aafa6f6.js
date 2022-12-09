"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[f]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={},c="Tunneler Config Type `intercept.v1`",a={unversionedId:"core-concepts/config-store/config-type-intercept-v1",id:"core-concepts/config-store/config-type-intercept-v1",title:"Tunneler Config Type `intercept.v1`",description:"A Config of Config Type intercept.v1 configures an intercepting Ziti tunneler as a proxy for a particular Ziti service.",source:"@site/docs/core-concepts/config-store/config-type-intercept-v1.md",sourceDirName:"core-concepts/config-store",slug:"/core-concepts/config-store/config-type-intercept-v1",permalink:"/docs/core-concepts/config-store/config-type-intercept-v1",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/config-store/config-type-intercept-v1.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Tunneler Config Type `host.v1`",permalink:"/docs/core-concepts/config-store/config-type-host-v1"},next:{title:"Consuming",permalink:"/docs/core-concepts/config-store/consuming"}},p={},s=[{value:"Examples",id:"examples",level:2},{value:"Schema Reference",id:"schema-reference",level:2}],l={toc:s};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tunneler-config-type-interceptv1"},"Tunneler Config Type ",(0,i.kt)("inlineCode",{parentName:"h1"},"intercept.v1")),(0,i.kt)("p",null,"A Config of Config Type ",(0,i.kt)("inlineCode",{parentName:"p"},"intercept.v1")," configures an intercepting Ziti tunneler as a proxy for a particular Ziti service."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"This Config instructs the tunneler to intercept any outgoing traffic with destination ",(0,i.kt)("inlineCode",{parentName:"p"},"tcp:acme.example.ziti:5000"),". An intercepting tunneler provides a DNS nameserver that resolves authorized Ziti services' domain names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "protocols": [\n        "tcp"\n    ],\n    "addresses": [\n        "acme.example.ziti"\n    ],\n    "portRanges": [\n        {\n            "low": 5000,\n            "high": 5000\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"This Config has not only a Ziti domain name destination ",(0,i.kt)("inlineCode",{parentName:"p"},"acme.ziti")," for which traffic is intercepted, but also a wildcard domain and an IP subnet. Additionally, there is a range of destination ports for which all packets will be intercepted if their destination address also matches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "addresses": [\n        "acme.ziti",\n        "*.dazzle.acme.ziti",\n        "10.0.0.0/8"\n    ],\n    "portRanges": [\n        {\n            "low": 1025,\n            "high": 1999\n        }\n    ],\n    "protocols": [\n        "tcp"\n    ]\n}\n')),(0,i.kt)("h2",{id:"schema-reference"},"Schema Reference"),(0,i.kt)("p",null,"The JSON schema for this tunneler Config Type is maintained ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/edge/blob/main/tunnel/entities/intercept.v1.json"},"in GitHub"),"."))}f.isMDXComponent=!0}}]);
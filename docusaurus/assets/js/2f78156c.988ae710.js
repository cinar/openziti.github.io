"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return t?o.createElement(m,s(s({ref:n},d),{},{components:t})):o.createElement(m,s({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(7462),i=(t(7294),t(3905));const r={},s="Sessions and Connections",a={unversionedId:"process-sequences/SessionsAndConnections",id:"process-sequences/SessionsAndConnections",title:"Sessions and Connections",description:"OpenZiti has a number of different conenction and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting.",source:"@site/docs/process-sequences/SessionsAndConnections.md",sourceDirName:"process-sequences",slug:"/process-sequences/SessionsAndConnections",permalink:"/docusaurus/docs/process-sequences/SessionsAndConnections",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/process-sequences/SessionsAndConnections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Endpoint Registration",permalink:"/docusaurus/docs/process-sequences/EndpointRegistration"},next:{title:"Overview",permalink:"/docusaurus/docs/security/overview"}},c={},l=[{value:"Control Plane",id:"control-plane",level:2},{value:"Data Plane",id:"data-plane",level:2}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sessions-and-connections"},"Sessions and Connections"),(0,i.kt)("p",null,"OpenZiti has a number of different conenction and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqdVDtrwzAQ_iuHpgTSoR49BEKSoRRKaDoVLUK6pKLyyZXPLSXkv1dS4hLnUZJOxqf77nv4rI3Q3qAoRYMfLZLGmVXroCpJbNkhvFq2sMSmsZ4aUGRg6olQc3qXJKlWga22tSKGqbMYH5O6dlar1NI_X84e4b5fmps1wrNvGcPx0RPylw_viZCDdw7DZWhxSnRUOhAV_YTPNC13dPNh4RRhLHKWCXfj8RkJJUwWD10gklIgHaRIkKsRPeO3kfWMXwdFMp3djL7R85VG8-g9JwzqKK-JSVuNw1t93zqp-Nekg1RmitUuDRi8TBfDRHC6zpllF1UJse3gZ8i6ckJ5uc6iijOoCxqS7GH_w_SSK_OQv8LIhF3bnuU0_B4udtugW8tiJCoMlbIm3gwbSQBS8BtWKEVcBmFwpVrHUkjaxlbVsl9-kxYlhxZHoq2N4u4iEeVKuea3OjeWfdgXtz_UjZHr"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNqdVDtrwzAQ_iuHpgTSoR49BEKSoRRKaDoVLUK6pKLyyZXPLSXkv1dS4hLnUZJOxqf77nv4rI3Q3qAoRYMfLZLGmVXroCpJbNkhvFq2sMSmsZ4aUGRg6olQc3qXJKlWga22tSKGqbMYH5O6dlar1NI_X84e4b5fmps1wrNvGcPx0RPylw_viZCDdw7DZWhxSnRUOhAV_YTPNC13dPNh4RRhLHKWCXfj8RkJJUwWD10gklIgHaRIkKsRPeO3kfWMXwdFMp3djL7R85VG8-g9JwzqKK-JSVuNw1t93zqp-Nekg1RmitUuDRi8TBfDRHC6zpllF1UJse3gZ8i6ckJ5uc6iijOoCxqS7GH_w_SSK_OQv8LIhF3bnuU0_B4udtugW8tiJCoMlbIm3gwbSQBS8BtWKEVcBmFwpVrHUkjaxlbVsl9-kxYlhxZHoq2N4u4iEeVKuea3OjeWfdgXtz_UjZHr",alt:null}))),(0,i.kt)("h2",{id:"control-plane"},"Control Plane"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The API Session is the first and primary session between and endpoint and the OpenZiti network isntance.  This session is created during attachment, after validating the certificates in both directions, and the endpoint name.  This makes the endpoint present on the network, and all endpoints and routers have API sessions to the Contoller(s)"),(0,i.kt)("li",{parentName:"ol"},"The Edge Session is created with the API session authorization, and is specific to each service configured for the endpoint.  The edge session object holds information such as the service policies, parent API session, service ID, and other information the endpoint and network require to properly service each given service."),(0,i.kt)("li",{parentName:"ol"},"Channels are formed between the endpoitn and each Edge Router available and wihin the policies.  These chanels are monitored for latency to select best path, and are the control connections for incoming connections for hosted services."),(0,i.kt)("li",{parentName:"ol"},"Links connect Edge Routers logically.  Edge Routers can advertise a listener socket, which is distributed during client initialization to other Edge Routers.  All Edge Routers will attach to all others in a mesh, provided the policy dictates/allows it.  Each pair of routers will have one link per link type (TLS, WSS, etc.)  Links are a split connection, having both control plane and data plane messaging.")),(0,i.kt)("h2",{id:"data-plane"},"Data Plane"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The TCP connections at eaither end of an OpenZiti connection are dependent on the implementation model.  If Tunnelers, or Edge Router with embedded Tunnelers are used, and the end device makes a TCP connection to gain entry to the OpenZiti network.  If the endpoints, both dialing and binding, or either one, is fully embedded via the SDK, these connections will not exist."),(0,i.kt)("li",{parentName:"ol"},"The Connection is the flow speciic connection between the endpoint and the intial Edge Router.  Each service invocation will create an independent Connection, and data will flow over this to the Edge Router"),(0,i.kt)("li",{parentName:"ol"},"The Fabric Circuit is the path in the OpenZiti Network from initial to terminating Edge Router, comprised of one more more Edge Routers, and zero or more Links. (An initiating Edge Router may have a local terminator for the service) ")),(0,i.kt)("p",null,"These terms in their full and abbreviated forms appear in logs, metrics, and software, and are therefore ccritical terminaology to understand OpenZiti Networks."))}p.isMDXComponent=!0}}]);
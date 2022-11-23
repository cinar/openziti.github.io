"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="MacOS",l={unversionedId:"core-concepts/clients/tunnelers/macos",id:"core-concepts/clients/tunnelers/macos",title:"MacOS",description:"Installation",source:"@site/docs/core-concepts/clients/tunnelers/04-macos.md",sourceDirName:"core-concepts/clients/tunnelers",slug:"/core-concepts/clients/tunnelers/macos",permalink:"/docs/core-concepts/clients/tunnelers/macos",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/tunnelers/04-macos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Android",permalink:"/docs/core-concepts/clients/tunnelers/android"},next:{title:"iOS",permalink:"/docs/core-concepts/clients/tunnelers/iOS"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Enrolling",id:"enrolling",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos"},"MacOS"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("strong",{parentName:"p"},"Ziti Desktop Edge")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/ziti-tunnel/id1460484572?mt=12"},"Mac App Store")),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you already have ",(0,o.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," installed and you are updating it, please make sure to turn off your ",(0,o.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," before updating it")),(0,o.kt)("p",null,"And after the download and installation is complete, click on ",(0,o.kt)("strong",{parentName:"p"},"open")),(0,o.kt)("h2",{id:"enrolling"},"Enrolling"),(0,o.kt)("p",null,"Following this ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/identities/creating"},"guide")," to create an identity and transfer the jwt file to your MAC."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," UI, click on ",(0,o.kt)("strong",{parentName:"p"},"Turn Ziti On"),". Add an identity by clicking the ",(0,o.kt)("strong",{parentName:"p"},"+")," in the lower left of the UI. Choose the jwt downloaded to your Mac in the previous step."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(789).Z,width:"1202",height:"664"})," "),(0,o.kt)("p",null,"Find and select the downloaded jwt file and then click on ",(0,o.kt)("strong",{parentName:"p"},"Open")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(3509).Z,width:"1196",height:"652"})," "),(0,o.kt)("p",null,"In the left side list, the added jwt will be displayed. Finish the enrollment process by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Enroll")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2786).Z,width:"1196",height:"652"})," "),(0,o.kt)("p",null,"The Enrollment Status will show ",(0,o.kt)("strong",{parentName:"p"},"Enrolled")," once it's completed. Once the identity has been enrolled, the ",(0,o.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," UI will display the services authorized for the identity. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(618).Z,width:"1200",height:"316"})))}d.isMDXComponent=!0},789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install4-7d9d0f18318d7ed7af3ae33d766b9ffc.png"},3509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install5-bd5bc268c9e1fa696e5700f505bfcd83.png"},2786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install6-bb328338cc6871a61d23133c6041d9dc.png"},618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install7-6822dea2c93a08351f03eced7f283c0a.png"}}]);
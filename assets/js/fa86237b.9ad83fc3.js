"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="MacOS",l={unversionedId:"reference/tunnelers/macos",id:"reference/tunnelers/macos",title:"MacOS",description:"Installation",source:"@site/docs/reference/tunnelers/04-macos.md",sourceDirName:"reference/tunnelers",slug:"/reference/tunnelers/macos",permalink:"/docs/reference/tunnelers/macos",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/04-macos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Android",permalink:"/docs/reference/tunnelers/android"},next:{title:"iOS",permalink:"/docs/reference/tunnelers/iOS"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Enrolling",id:"enrolling",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macos"},"MacOS"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("strong",{parentName:"p"},"Ziti Desktop Edge")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/ziti-tunnel/id1460484572?mt=12"},"Mac App Store")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you already have ",(0,a.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," installed and you are updating it, please make sure to turn off your ",(0,a.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," before updating it")),(0,a.kt)("p",null,"And after the download and installation is complete, click on ",(0,a.kt)("strong",{parentName:"p"},"open")),(0,a.kt)("h2",{id:"enrolling"},"Enrolling"),(0,a.kt)("p",null,"Following this ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/identities/creating"},"guide")," to create an identity and transfer the jwt file to your MAC."),(0,a.kt)("p",null,"From the ",(0,a.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," UI, click on ",(0,a.kt)("strong",{parentName:"p"},"Turn Ziti On"),". Add an identity by clicking the ",(0,a.kt)("strong",{parentName:"p"},"+")," in the lower left of the UI. Choose the jwt downloaded to your Mac in the previous step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(90789).Z,width:"1202",height:"664"})," "),(0,a.kt)("p",null,"Find and select the downloaded jwt file and then click on ",(0,a.kt)("strong",{parentName:"p"},"Open")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(3509).Z,width:"1196",height:"652"})," "),(0,a.kt)("p",null,"In the left side list, the added jwt will be displayed. Finish the enrollment process by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Enroll")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(12786).Z,width:"1196",height:"652"})," "),(0,a.kt)("p",null,"The Enrollment Status will show ",(0,a.kt)("strong",{parentName:"p"},"Enrolled")," once it's completed. Once the identity has been enrolled, the ",(0,a.kt)("strong",{parentName:"p"},"Ziti Desktop Edge for Mac")," UI will display the services authorized for the identity. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(80618).Z,width:"1200",height:"316"})))}d.isMDXComponent=!0},90789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install4-7d9d0f18318d7ed7af3ae33d766b9ffc.png"},3509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install5-bd5bc268c9e1fa696e5700f505bfcd83.png"},12786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install6-bb328338cc6871a61d23133c6041d9dc.png"},80618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac-install7-6822dea2c93a08351f03eced7f283c0a.png"}}]);
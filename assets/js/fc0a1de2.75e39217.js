"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),s=r(7392),c=r(7094),l=r(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:r,block:i,defaultValue:m,values:d,groupId:h,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,c.U)(),[N,E]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,r=C.indexOf(t),n=g[r].value;n!==N&&(O(t),E(n),null!=h&&w(h,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]??C[C.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},g.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},7144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# creates a new service named ssh\nziti edge create service ssh\n\n# creates a new service named ssh with a terminator strategy which load-balances using random selection\nziti edge create service ssh --terminator-strategy random\n\n# creates a router based terminator for ssh on router router1 which connects to the local machine\nziti edge create terminator ssh router1 tcp:localhost:22\n\n# creates a new service named postgresql with a terminator strategy which does failover\nziti edge create service postgresql --terminator-strategy ha\n\n# creates a router based terminator for postgres on router router1\n# this is the posgres primary, so precedence is set to required\nziti edge create terminator postgresql router1 tcp:pg-primary:5432 --precedence required\n\n# creates a router based terminator for postgres on router router1 which connects to another machine\n# this is the posgresql secondary, so precedence is left at default\nziti edge create terminator postgresql router1 tcp:pg-secondary:5432\n\n# If the primary goes down, the controller will notice that dials are failing and set the \n# precedence to failed. New sessions will go to the secondary. When the primary is brought \n# back up, it can be marked as requred again\nziti edge update terminator <terminator-id> --precedence required \n")))}i.isMDXComponent=!0;var s=r(5488),c=r(5162);const l={title:"Creating"},p="Creating a Service",u={unversionedId:"core-concepts/services/creating",id:"core-concepts/services/creating",title:"Creating",description:"",source:"@site/docs/core-concepts/services/creating.mdx",sourceDirName:"core-concepts/services",slug:"/core-concepts/services/creating",permalink:"/docs/core-concepts/services/creating",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/services/creating.mdx",tags:[],version:"current",frontMatter:{title:"Creating"},sidebar:"rootSidebar",previous:{title:"Ziti Services",permalink:"/docs/core-concepts/services/overview"},next:{title:"Service Configurations",permalink:"/docs/core-concepts/config-store/overview"}},m={},d=[],h={toc:d};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-service"},"Creating a Service"),(0,a.kt)("p",null,"Here's how you can create a service."),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"create-service-ui",label:"Create Service UI",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Edge Services"'),(0,a.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new service'),(0,a.kt)("li",{parentName:"ol"},'Choose a name for the serivce. Example "my-first-service"'),(0,a.kt)("li",{parentName:"ol"},'Enter a host name for the service. Enter "intercepted-hostname"'),(0,a.kt)("li",{parentName:"ol"},"Enter the port you want intercepted: 1111"),(0,a.kt)("li",{parentName:"ol"},'Choose Router by name - for example "ziti-gw01" if you are using ',(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer\nEdition")),(0,a.kt)("li",{parentName:"ol"},"For Endpoint Service choose:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"protocol = tcp"),(0,a.kt)("li",{parentName:"ul"},"host = actual-hostname"),(0,a.kt)("li",{parentName:"ul"},"port = 2222")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select a cluster. If using ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer Edition"),' choose\n"demo-c01"'),(0,a.kt)("li",{parentName:"ol"},"Leave Hosting Identities as is"),(0,a.kt)("li",{parentName:"ol"},"Click save"))),(0,a.kt)(c.Z,{value:"create-hosted-service-ui",label:"Create Hosted Service UI",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Edge Services"'),(0,a.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new service'),(0,a.kt)("li",{parentName:"ol"},'Choose a name for the serivce. Example "my-first-hosted-service"'),(0,a.kt)("li",{parentName:"ol"},'Enter a host name for the service. Enter "intercepted-hostname"'),(0,a.kt)("li",{parentName:"ol"},"Enter the port you want intercepted: 1111"),(0,a.kt)("li",{parentName:"ol"},'Choose "Hosted (No Router)" for the Router'),(0,a.kt)("li",{parentName:"ol"},"Select a cluster. If using ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer Edition"),' choose\n"demo-c01"'),(0,a.kt)("li",{parentName:"ol"},'Select one or more identities in "Hosting Identities" representing the identities which host the service'),(0,a.kt)("li",{parentName:"ol"},"Click save"))),(0,a.kt)(c.Z,{value:"create-service-cli",label:"Create Service CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"To create a new service via CLI simply issue these commands: ",(0,a.kt)(i,{mdxType:"CreateServiceCliMd"})))))}v.isMDXComponent=!0}}]);
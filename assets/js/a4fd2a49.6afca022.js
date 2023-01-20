"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(y,l(l({ref:t},p),{},{components:n})):i.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(67294),r=n(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(87462),r=n(67294),a=n(86010),l=n(72389),o=n(67392),c=n(7094),s=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:m,groupId:d,className:y}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,c.U)(),[N,w]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),i=v[n].value;i!==N&&(T(t),w(i),null!=d&&g(d,String(i)))},O=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},y)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:P},l,{className:(0,a.Z)("tabs__item",u,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,i.Z)({key:String(t)},e))}},20476:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get a session from the controller's management API. You will be prompted to trust any new server certificates. Your session cache and trust store are managed by the CLI in your home directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://\nziti edge login ziti.example.com:8441 -u admin -p admin\n")))}l.isMDXComponent=!0},9248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var i=n(87462),r=(n(67294),n(3905)),a=n(65488),l=n(85162);const o={toc:[]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Ziti Policies"'),(0,r.kt)("li",{parentName:"ol"},'On the top nav bar, click "Service Policies"'),(0,r.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Service Policy'),(0,r.kt)("li",{parentName:"ol"},'Choose a name for the Service Policy, such as "My Service Policy"'),(0,r.kt)("li",{parentName:"ol"},'Select "Dial" or "Bind" in the Type dropdown',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dial policies allow identities to use or connect to the service"),(0,r.kt)("li",{parentName:"ol"},"Bind policies allow identities to host or provide the service"))),(0,r.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,r.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,r.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,r.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,r.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,r.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,r.kt)("li",{parentName:"ol"},"Enter the identities you want to include in the policy",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Specific identities can be referenced by ID or name using ",(0,r.kt)("inlineCode",{parentName:"li"},"@"),".  For example, as identity called ",(0,r.kt)("inlineCode",{parentName:"li"},"jsmith-desktop")," can be referenced using ",(0,r.kt)("inlineCode",{parentName:"li"},"@jsmith-desktop"),". "),(0,r.kt)("li",{parentName:"ol"},"Identities can be referenced by role attribute using ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),". For example, any identity which has the ",(0,r.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,r.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the identities roles list."))),(0,r.kt)("li",{parentName:"ol"},"Specify the role semantic",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you select ",(0,r.kt)("inlineCode",{parentName:"li"},"Has Any Role")," then if you specify multiple roles then all entities which include ",(0,r.kt)("strong",{parentName:"li"},"any")," of the roles will be included."),(0,r.kt)("li",{parentName:"ol"},"If you select ",(0,r.kt)("inlineCode",{parentName:"li"},"Must Have All Roles"),", then if you specify multiple roles then only entities which include ",(0,r.kt)("strong",{parentName:"li"},"all")," of the given roles will be included    "))),(0,r.kt)("li",{parentName:"ol"},"Click save")))}c.isMDXComponent=!0;var s=n(20476);const p={toc:[]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To create a Service Policy using the CLI issue the following commands."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ensure you are logged in with the CLI."),(0,r.kt)(s.ZP,{mdxType:"CliLoginMd"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a service policy named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-policy")," which allows all identities to dial/connect to all services."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create service-policy my-policy Dial --identity-roles '#all' --service-roles '#all'\n")))))}u.isMDXComponent=!0;const m={},d="Creating a Service Policy",y={unversionedId:"learn/core-concepts/security/authorization/policies/creating-service-policies",id:"learn/core-concepts/security/authorization/policies/creating-service-policies",title:"Creating a Service Policy",description:"",source:"@site/docs/learn/core-concepts/security/authorization/policies/creating-service-policies.mdx",sourceDirName:"learn/core-concepts/security/authorization/policies",slug:"/learn/core-concepts/security/authorization/policies/creating-service-policies",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-service-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authorization/policies/creating-service-policies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Creating a Service Edge Router Policy",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies"},next:{title:"Posture Checks",permalink:"/docs/learn/core-concepts/security/authorization/posture-checks"}},h={},v=[],b={toc:v};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-service-policy"},"Creating a Service Policy"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"New Service Policy via UI",value:"tabid-new-service-policy-ui",mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"CreateServicePolicyUIMd"})),(0,r.kt)(l.Z,{label:"New Service Policy via CLI",value:"tabid-new-service-policy-cli",mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"CreateServicePolicyCLIMd"}))))}f.isMDXComponent=!0}}]);
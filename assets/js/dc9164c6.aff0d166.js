"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=r(72389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},47653:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={toc:[]};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All Ziti components log to standard output and standard error file descriptors."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"goformats",label:"Log Formats",mdxType:"TabItem"},(0,a.kt)("p",null,"Output from Ziti components comes in three distinct styles. Choose the style of logging that is right for you."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pfxlog")," - a human-readable format leveraging ascii escape codes to display colorized log level"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json")," - a machine-readable format targeting automated processes for log aggregation/searching"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," - a human-readable format using plain text (no ascii escape codes)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-router run ./router.yml --log-formatter pfxlog\n"))),(0,a.kt)(l.Z,{value:"golevels",label:"Log Levels",mdxType:"TabItem"},(0,a.kt)("p",null,"By default the Ziti components will log at the ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO")," level. This means that log messages ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"FATAL")," will all be emitted. Ziti components all support verbose logging by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose or -v")," to the command being executed. Verbose mode will add ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," log messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-controller run ./ctrl.yml --verbose\n")))))}u.isMDXComponent=!0},66262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(47653);const l={id:"controller",title:"Controller Deployment",sidebar_label:"Controller"},i=void 0,u={unversionedId:"reference/deployments/controller",id:"reference/deployments/controller",title:"Controller Deployment",description:"This article provides some guidance for deploying a Ziti Controller. You can go back and read the controller component introduction if needed.",source:"@site/docs/reference/deployments/01-controller.md",sourceDirName:"reference/deployments",slug:"/reference/deployments/controller",permalink:"/docs/reference/deployments/controller",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/deployments/01-controller.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"controller",title:"Controller Deployment",sidebar_label:"Controller"},sidebar:"docsSidebar",previous:{title:"Deployments",permalink:"/docs/reference/deployments/"},next:{title:"Router Deployment",permalink:"/docs/reference/deployments/router/deployment"}},s={},c=[{value:"Public Key Infrastructure",id:"public-key-infrastructure",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Firewall",id:"firewall",level:2},{value:"Logging",id:"logging",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article provides some guidance for deploying a Ziti Controller. You can go back and read ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/introduction/#openziti-controller"},"the controller component introduction")," if needed."),(0,a.kt)("h2",{id:"public-key-infrastructure"},"Public Key Infrastructure"),(0,a.kt)("p",null,"You will need a PKI setup for Ziti. If you follow one of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/"},"quickstart guides")," then a PKI will be generated for you. This is probably the best way to start out. Pay particular attention to the PKI-related fields in the configuration file, and check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/pki"},"the pki page"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Ziti Controller's configuration is loaded from a YAML file. If you follow one of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/"},"quickstart guides")," a configuration file will be generated. You can generate a configuration with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti create config controller")," command, optionally mutating the result through command-line options or environment variables. You can also find an annotated sample config file from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/blob/main/etc/ctrl.with.edge.yml"},"the Ziti repo"),"."),(0,a.kt)("h2",{id:"firewall"},"Firewall"),(0,a.kt)("p",null,"The controller listens on several configurable server ports that must be exposed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1280/tcp"),": client sessions and management API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6262/tcp"),": router control plane")),(0,a.kt)("p",null,"You may configure the controller to expose management functions on separate port if you wish to limit network access for password authenticators."),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)(o.ZP,{mdxType:"CliLogFormats"}))}d.isMDXComponent=!0}}]);
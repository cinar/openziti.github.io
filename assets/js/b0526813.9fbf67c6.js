"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7094],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(i),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},41740:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={title:"Ziti Security"},o=void 0,c={unversionedId:"learn/core-concepts/security/overview",id:"learn/core-concepts/security/overview",title:"Ziti Security",description:"A Ziti Network's security setup is defined by several entities defined in the Edge Management API. The following",source:"@site/docs/learn/core-concepts/security/overview.md",sourceDirName:"learn/core-concepts/security",slug:"/learn/core-concepts/security/overview",permalink:"/docs/learn/core-concepts/security/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/overview.md",tags:[],version:"current",frontMatter:{title:"Ziti Security"},sidebar:"docsSidebar",previous:{title:"Network Access",permalink:"/docs/learn/core-concepts/zero-trust-models/ztna"},next:{title:"Authentication",permalink:"/docs/learn/core-concepts/security/authentication/auth"}},s={},l=[{value:"Authentication &amp; Authorization High Level Flow",id:"authentication--authorization-high-level-flow",level:2},{value:"High Level Concepts",id:"high-level-concepts",level:2},{value:"Identity",id:"identity",level:3},{value:"Enrollment",id:"enrollment",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Authorization",id:"authorization",level:3}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Ziti Network's security setup is defined by several entities defined in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api#edge-management-api"},"Edge Management API"),". The following\nare related to identity authentication and service access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#identity"},"Identities")," - describe a human, device, or service within Ziti Edge"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/auth#authenticators"},"Authenticators")," - describes the credentials of an authentication method associated with an Identity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/enrollment"},"Enrollments")," - describes a set of criteria necessary to create a new Identity and associated Authenticator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/authentication-policies"},"Authentication Policy")," - describes the methods available for Identity authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/third-party-cas"},"3rd Party CAs")," - allows external x509 PKIs to be used for authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/external-jwt-signers"},"External JWT Signers")," - allows external JWT signers to be used for authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/sessions"},"API Session")," - a security context represented by a security token (JWT, secret, etc) that represents\nIdentity authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/sessions"},"Session")," - a security context represented by a security token (JWT, secret, etc) that represents access\nto a Service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Service Policy")," - describes which Identities have access to which Services and the Posture Checks that are required to\npass for access"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Edge Router Policies"),"  - describes which Identities have access to which Edge Routers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/posture-checks"},"Posture Checks")," - describes additional environmental state that an Identity must have in order to obtain and maintain\nservice access"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/posture-checks#posture-data"},"Posture Queries")," - describes a request for environmental information from a client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/posture-checks#posture-data"},"Posture Responses")," - a response to a Posture Query provided by a client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/posture-checks#posture-data"},"Posture Data")," - the current environmental state provided via Posture Responses and known information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/sessions#authentication-queries"},"Authentication Queries")," - additional, secondary, authentication factors required after initial, primary, authentication")),(0,r.kt)("p",null,"There is an additional policy type for Edge Routers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Service Edge Router Policies")," - determines which services can be accessed over which routers")),(0,r.kt)("p",null,"Additionally, connection security document is provided on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/connection-security"},"Connection Security")," page. "),(0,r.kt)("h2",{id:"authentication--authorization-high-level-flow"},"Authentication & Authorization High Level Flow"),(0,r.kt)("p",null,"The following is a high level overview of how these entities interact. Each interaction is further detailed in their\nown separate section."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a client enrolls",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"A client may enroll via a pre-shared secret defined as an Enrollment or other verifiable documents (JWTs, x509\nCerts/CAs)"),(0,r.kt)("li",{parentName:"ol"},"an Identity is created with associated Authenticators and Authentication Policies"))),(0,r.kt)("li",{parentName:"ol"},"authentication: a client Identity attempts to authenticate",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"the authentication credentials are verified against the Authenticators, 3rd Party CAs, External JWT Signers,\nand/or Authentication Policy associated with the principal"),(0,r.kt)("li",{parentName:"ol"},"secondary factors defined by the Authentication Policy are reported to the client (MFA TOTP, JWT) as Authentication Queries"),(0,r.kt)("li",{parentName:"ol"},"the client provides secondary factors"),(0,r.kt)("li",{parentName:"ol"},"the client receives an API Session security token without unanswered Authentication Queries"))),(0,r.kt)("li",{parentName:"ol"},"authorization: a client may list Services which will be either grant ",(0,r.kt)("inlineCode",{parentName:"li"},"dial")," (client connect) or ",(0,r.kt)("inlineCode",{parentName:"li"},"bind")," (host) access",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"the Service Policies provide a filtered list of all services for the specific client issuing the request"),(0,r.kt)("li",{parentName:"ol"},"the Service Policies are also used to evaluate the Posture Checks associated with a Service Policy"),(0,r.kt)("li",{parentName:"ol"},"the Posture Checks are converted to Posture Queries with type, pass/fail state, and criteria information"),(0,r.kt)("li",{parentName:"ol"},"The Services and Posture Queries are returned to the client "),(0,r.kt)("li",{parentName:"ol"},"(Continuous) the client submits any Posture Responses to Posture Queries as necessary"))),(0,r.kt)("li",{parentName:"ol"},"authorization: the client requests a Session for a specific Service",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"(Continuous) the Service Policies are consulted for access additionally re-evaluating Posture Checks against the\ncurrent know Posture Data"),(0,r.kt)("li",{parentName:"ol"},"the list of Service Edge Router Policies and Edge Router Policies are consulted to provide a valid list Edge\nRouters the Session security token may be used on"),(0,r.kt)("li",{parentName:"ol"},"a Session security token and Edge Router list is provided to the client"))),(0,r.kt)("li",{parentName:"ol"},"the client attempts to connect to a target Edge Router with an API Session security token"),(0,r.kt)("li",{parentName:"ol"},"the target Edge Router evaluates the credential"),(0,r.kt)("li",{parentName:"ol"},"the client requests a Service connection with their Session security token",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"the connection request is verified through Service Edge Router Policies"))),(0,r.kt)("li",{parentName:"ol"},"the Edge Router coordinates the service connection")),(0,r.kt)("h2",{id:"high-level-concepts"},"High Level Concepts"),(0,r.kt)("p",null,"Below are the major areas of Ziti Edge's security model with a minimal description of what each area covers. The link(s)\nin each section will lead to a more detailed explanation of the relevant topics."),(0,r.kt)("h3",{id:"identity"},"Identity"),(0,r.kt)("p",null,"Ziti Edge defines a top level entity called an Identity. An Identity is a security principal that can bind (host) or\ndial (connect) to services over a Ziti Network. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/identities/overview"},"Identity")," section."),(0,r.kt)("h3",{id:"enrollment"},"Enrollment"),(0,r.kt)("p",null,"Enrollment is a client initiated process where the result is the creation of an Identity that has some manner\nof authenticating. Enrollments may be automated through ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/third-party-cas"},"3rd Party Cas")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/external-jwt-signers"},"External JWT Signers"),"  or may be completed through pre-provisioning. Read more in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/enrollment"},"Enrollment")," section."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth"},"Authentication")," is the process of a client proving their identity through the submission of one primary credential\nand zero or more secondary credentials that are prompted by Authentication Queries. Authentication methods can be\nconfigured through ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/third-party-cas"},"3rd Party Cas"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/external-jwt-signers"},"External JWT Signers"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/authentication-policies"},"Authentication Policies"),". Read more in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth"},"Authentication")," section."),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/auth"},"Authorization")," in Ziti is configured for Identities and Edge Routers. Edge Router authorization only covers which\nservices can be used over an Edge Router via Service Edge Router Policies. Identity authorization is covered by Service\nPolicies and Edge Router Policies."),(0,r.kt)("p",null,"All policies in Ziti are represented by a robust ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Attribute-based_access_control"},"attribute based access control system (ABAC)")," based on ",(0,r.kt)("inlineCode",{parentName:"p"},"roleAttributes"),"\nproperties on entities within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-management-api"},"Edge Management API"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"roleAttributes")," properties are an array of user defined strings.\nPolicies support attribute selector properties to determine which entities a policy interacts on. Policies themselves\nare documented in ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Policies")," section."),(0,r.kt)("p",null,"Additionally, Service Policies can require additional environmental states to be satisfied by Posture Checks.\nPosture Checks analyze Posture Data. Posture Data is a collection of server side information and data harvested from\nPosture Responses sent by client endpoints in response to Posture Queries. More can be found in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/posture-checks"},"Posture Check"),"\nsection."),(0,r.kt)("p",null,"Read more in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/auth"},"Authorization")," section."))}p.isMDXComponent=!0}}]);
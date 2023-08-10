"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9307],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>d});var a=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,r=function(t,e){if(null==t)return{};var i,a,r={},n=Object.keys(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var i=t.components,r=t.mdxType,n=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),h=c(i),f=r,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||n;return i?a.createElement(d,s(s({ref:e},u),{},{components:i})):a.createElement(d,s({ref:e},u))}));function d(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=i.length,s=new Array(n);s[0]=f;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[h]="string"==typeof t?t:r,s[1]=o;for(var c=2;c<n;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},40338:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=i(87462),r=(i(67294),i(3905));const n={authors:"andrewpmartinez"},s="Bootstrapping Trust",o={permalink:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust",source:"@site/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust.md",title:"Bootstrapping Trust",description:"Part 4: Certificate Authorities & Chains of Trust",date:"2023-08-10T18:45:59.000Z",formattedDate:"August 10, 2023",tags:[],readingTime:7.81,hasTruncateMarker:!1,authors:[{name:"Andrew Martinez",title:"OpenZiti Maintainer",url:"https://github.com/andrewpmartinez",imageURL:"https://avatars.githubusercontent.com/u/199856?v=4",key:"andrewpmartinez"}],frontMatter:{authors:"andrewpmartinez"},prevItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-03.certificates"},nextItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"}},l={authorsImageUrls:[void 0]},c=[{value:"Part 4: Certificate Authorities &amp; Chains of Trust",id:"part-4-certificate-authorities--chains-of-trust",level:2},{value:"Root &amp; Intermediate Certificate Authorities (CAs)",id:"root--intermediate-certificate-authorities-cas",level:3},{value:"Chains of Trust &amp; PKIs",id:"chains-of-trust--pkis",level:3},{value:"Distributed Systems &amp; CAs",id:"distributed-systems--cas",level:3}],u={toc:c};function h(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"part-4-certificate-authorities--chains-of-trust"},"Part 4: Certificate Authorities & Chains of Trust"),(0,r.kt)("p",null,"If you have read through the entire series up to here, welcome! If you\nhave not, please consider reading the whole series:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},"Part 1: Encryption Everywhere")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part 3: Certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"Part 5: Bootstrapping Trust"))),(0,r.kt)("p",null,"This article makes implicit heavy use of\n",(0,r.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"part 2")," and\n",(0,r.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-03.certificates"},"part 3")," of this series."),(0,r.kt)("h3",{id:"root--intermediate-certificate-authorities-cas"},"Root & Intermediate Certificate Authorities (CAs)"),(0,r.kt)("p",null,"Not all certificates are the same! Certificates have different\ncapabilities depending on their usage attributes and extensions. The\nprevious article in this series mentioned a few of those attributes and\nextensions. Two of those were ",(0,r.kt)("inlineCode",{parentName:"p"},"clientAuth"),", for client certificates, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"serverAuth"),", for server certificates, which play an essential role in\nhow a certificate is used during network authentication negotiations.\nThese roles are crucial, as they are a contract for what attributes and\nextensions should be included in the certificate to make it useful. For\nexample, a server certificate usually finds it useful to include Subject\nAlternate Names (SANs). A SAN can be used to tie a certificate to a\nspecific domain name (like ziti.dev). However, a client certificate will\nnot have use for those same fields."),(0,r.kt)("p",null,"The roles of certificates and the attributes/extensions they have are\nnot always strictly followed. Some systems, such as web browsers,\nrequire SANs on a server certificate. That wasn't always the case.\nBefore that, the Common Name field in the subject information contained\nthe domain name. Some systems still rely on that convention."),(0,r.kt)("p",null,'Another type of certificate is a Certificate Authority (CA) certificate.\nA CA is a key pair with a certificate that has a unique purpose: to sign\nother certificates. CA certificates have a special CA flag set to\n"true." This flag alone does not grant the CA certificate any power, but\nif a system trusts that CA, it then allows that system to trust any\ncertificate that CA has signed. As mentioned in previous parts of this\nseries, trusting a CA is a software or operating system configuration\nprocess. This process can be done in multiple ways depending on the\nsystem: adding it to a store, a specific folder, or adding lines to a\nconfiguration file.'),(0,r.kt)("p",null,"Your operating system, right now, has its own set of trusted CAs. Most\noperating systems come with a default list installed and maintained by\nyour OS developer. Over time this list is added to and removed from as\ntrust is granted or withdrawn. Some pieces of software come with a list\nof CAs that are used instead of or in addition to the OS's CAs. The\npower of a CA comes not by its creation but by it being trusted."),(0,r.kt)("p",null,"CAs come in two flavors: Root CAs and Intermediate CAs. Root CAs are the\negg or the chicken (depending on your viewpoint) of the CA trust\nchicken-and-egg problem. Trust for CAs has to start somewhere. With CAs,\nit is the Root CA. A Root CA can sign certificates that are themselves\nCAs as well. Those certificates represent Intermediate CAs. Layers of\nCAs starting with a root and adding intermediates along the way allows\nthe private key for the Root CAs to be kept in a highly secure\nenvironment, which is not convenient to use for signing. This security\nmeans that the Root CA has a far less likely chance of having its\nprivate key compromised. Intermediate CAs are put into less secure\nenvironments and, if compromised, can be revoked. Trust is usually put\ninto the Root CA, and since it was not compromised can remain trusted.\nCompromised intermediate CAs can be blacklisted."),(0,r.kt)("p",null,"Running a public CA is serious business if you wish to be publicly\ntrusted. The organizations running a CA have to have strict protocols\nthat verify the security and safe handling of the CAs private keys. If\nthe private key is compromised, it can be used to sign other\ncertificates for malicious intents. Any system that trusted the\ncompromised CA will now trust any maliciously signed certificates. This\nwill compromise all certificates signed by that CA."),(0,r.kt)("p",null,"Public CAs are maintained by organizations such as DigiCert, Let's\nEncrypt, and others. Anyone can create private CAs. The only difference\nis that the number of systems that trust a private CA is much smaller\nthan that of a public one. CAs are a cornerstone of bootstrapping trust.\nTrusting the proper CAs can grant trust to a large number of systems."),(0,r.kt)("h3",{id:"chains-of-trust--pkis"},"Chains of Trust & PKIs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part three"),' of this series introduced that\ncertificates self-sign or sign another certificate. Certificates are\nusually signed via Certificate Signing Requests (CSRs). A certificate\nsigning itself is called a "self-signed certificate" and is an indicator\nof it being a root CA if the CA flag is also set to true. A root CA can\nsign other certificates that also have the CA flag set to true. Those\ntypes of certificates are intermediate CAs. Any CA, root or\nintermediate, that fulfills a CSR and signs the enclosed certificate\nwill generate a non-CA certificate as long as the CA flag is false.\nThese certificates are "leaf certificates."'),(0,r.kt)("p",null,"The term Public Key Infrastructure (PKI) is used to describe all of the\noutputs that are generated when a CA is created. That includes the root,\nintermediates, and leaf certificates. It also optionally includes all of\nthe systems, processes, procedures, and data used to manage them. For\nthe purpose of this article, and simplicity, let us stick to the\ncertificates only."),(0,r.kt)("p",null,"Consider the following PKI setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Two root CAs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Root A"),(0,r.kt)("li",{parentName:"ul"},"Root B"))),(0,r.kt)("li",{parentName:"ul"},"The root CAs each sign an intermediate CA via CSR:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Intermediate A"),(0,r.kt)("li",{parentName:"ul"},"Intermediate B"))),(0,r.kt)("li",{parentName:"ul"},"A server wishes to have a certificate to have Root A's trust extended\nto it.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A key pair is generated"))),(0,r.kt)("li",{parentName:"ul"},"A CSR is created and submitted to Intermediate A to sign"),(0,r.kt)("li",{parentName:"ul"},"The CSR is fulfilled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Server Cert A is created and signed by Intermediate A")))),(0,r.kt)("p",null,"Visually this would appear as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chains",src:i(5268).Z,width:"1152",height:"1484"})),(0,r.kt)("p",null,"This PKI has two chains of trust: Chain A and Chain B. They are called\nchains because the signatures link the certificates together. Root A has\nsigned Intermediate A's certificate and Intermediate A has signed Server\nA's certificate. Programmatically we can traverse these signatures and\nverify them using the public certificates of each signatory. Trusting\nRoot A will trust Server A."),(0,r.kt)("p",null,"The second chain, Chain B, does not sign any of the certificates on\nChain A. As expected, Trusting either of the CAs from Chain B does not\ngrant any trust to the certificates on Chain A. Chain B highlights the\nfact that any system may have multiple chains of trust that do not\ninteract in any fashion."),(0,r.kt)("p",null,'Returning to Chain A, trusting Intermediate A designates it as a "trust\nanchor." Any certificate can be a trust anchor. The certificate used as\na trust anchor determines which certificates will additionally be\ntrusted. A leaf certificate as a trust anchor only trusts that one\ncertificate. Trusting a CA trusts all certificates that it has signed\nitself or any of its intermediates. In the diagram above, trust only\nflow downward.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trusting Server Cert A will only trust that one server certificate"),(0,r.kt)("li",{parentName:"ul"},"Trusting Intermediate A will trust Server Cert A and any other\ncertificate it signs"),(0,r.kt)("li",{parentName:"ul"},"Trust Root A will trust Intermediate A and Server Cert A and any other\ncertificate Root A signs (intermediate CA or not) and in turn, any of\nthe certificates they sign")),(0,r.kt)("p",null,"Trusting a CA that has signed many certificates allows public\ncertificate trust to scale. This is how trust scales for web traffic.\nCompanies like DigiCert, IdenTrust, GoDaddy, etc. have their root CA or\none of their large intermediate CAs trusted. Those CAs sign certificates\nfor websites. All of our devices trust those website certificates\nbecause the CA has signed them."),(0,r.kt)("h3",{id:"distributed-systems--cas"},"Distributed Systems & CAs"),(0,r.kt)("p",null,'The goal for any private distributed system should be to have\ncertificates verified on both sides: clients verify servers and vice\nversa. This behavior is a tenant of Zero Trust - do not trust, verify.\nVerification should be done on every connection before any data\nexchange. Over TLS, which secures HTTPS, this would be "mutual TLS" or\n"mTLS." Most public websites do not require mTLS. Instead, they use TLS\nwith the client validating the server. For public web traffic, the\nserver wishes to be trusted widely. The reverse is not necessary. If it\nis, websites use an additional form of authentications, like usernames\nand passwords, to verify the client\'s identity. Public key cryptography\nis a stronger authentication mechanism, but it is also difficult for the\ngeneral public to set up, manage, and maintain.'),(0,r.kt)("p",null,"The same is true for distributed systems. Most don't secure anything at\nall or only verify servers. It is inherently insecure and can cause\nissues depending on the setup of the system. Ziti is a distributed\nsystem that abstracts away this security setup for both its internal\nrouters and client SDKs. This setup allows application-specific\nnetworking with strong identity verification, powerful policy\nmanagement, flexible mesh routing, and more. The goal of this series is\nto focus on bootstrapping trust. So in the\n",(0,r.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"last article")," we will come full\ncircle and see how all of this relates to bootstrapping trust for Zero\nTrust networks."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Written By: Andrew Martinez",(0,r.kt)("br",{parentName:"p"}),"\n","June 2020"))}h.isMDXComponent=!0},5268:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/chains-05f3e840c1ce1d197e14b93538129e8d.png"}}]);
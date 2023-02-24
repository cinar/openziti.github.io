"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Controller",sidebar_position:20},l="Controller Configuration Reference",o={unversionedId:"reference/configuration/controller",id:"reference/configuration/controller",title:"Controller Configuration Reference",description:"OpenZiti uses configuration files for controllers that are in the YAML format. All configuration",source:"@site/docs/reference/30-configuration/controller.md",sourceDirName:"reference/30-configuration",slug:"/reference/configuration/controller",permalink:"/docs/reference/configuration/controller",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/30-configuration/controller.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Controller",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"Conventions",permalink:"/docs/reference/configuration/conventions"},next:{title:"Router",permalink:"/docs/reference/configuration/router"}},s={},p=[{value:"Sections",id:"sections",level:2},{value:"<code>ctrl</code>",id:"ctrl",level:3},{value:"<code>db</code>",id:"db",level:3},{value:"<code>edge</code>",id:"edge",level:3},{value:"<code>api</code>",id:"api",level:4},{value:"<code>enrollment</code>",id:"enrollment",level:4},{value:"<code>signingCert</code>",id:"signingcert",level:4},{value:"<code>edgeIdentity</code>",id:"edgeidentity",level:4},{value:"<code>edgeRouter</code>",id:"edgerouter",level:4},{value:"<code>events</code>",id:"events",level:3},{value:"<code>healthChecks</code>",id:"healthchecks",level:3},{value:"<code>identity</code>",id:"identity",level:3},{value:"<code>network</code>",id:"network",level:3},{value:"<code>profile</code>",id:"profile",level:3},{value:"<code>trace</code>",id:"trace",level:3},{value:"<code>web</code>",id:"web",level:3},{value:"<code>v</code>",id:"v",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controller-configuration-reference"},"Controller Configuration Reference"),(0,a.kt)("p",null,"OpenZiti uses configuration files for controllers that are in the ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format. All configuration\nfiles are also subject to a set of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions"},"conventions")," such as environment variable substitution, identity\nsections, and addressing formats."),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("p",null,"The controller configuration file has several top level configuration sections that group together\nrelated configuration settings."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ctrl"},(0,a.kt)("inlineCode",{parentName:"a"},"ctrl"))," - define control channel listener"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#db"},(0,a.kt)("inlineCode",{parentName:"a"},"db"))," - specifies database file location"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#edge"},(0,a.kt)("inlineCode",{parentName:"a"},"edge"))," - configures edge specific functionality"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#events"},(0,a.kt)("inlineCode",{parentName:"a"},"events"))," - allows configuration of event output"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#healthchecks"},(0,a.kt)("inlineCode",{parentName:"a"},"healthChecks"))," - enables controller database health checks for transactions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identity"},(0,a.kt)("inlineCode",{parentName:"a"},"identity"))," - configures the certificates used for outbound client connections, server listening, and CA\nbundles"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#network"},(0,a.kt)("inlineCode",{parentName:"a"},"network"))," - set network level cost values"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," - enables profiling of controller memory and CPU statistics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"))," - adds a peek handler to all controller messaging for debug purposes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#web"},(0,a.kt)("inlineCode",{parentName:"a"},"web"))," - configures API presentation exposure"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#v"},(0,a.kt)("inlineCode",{parentName:"a"},"v"))," - A special section to note the version of the configuration file, only ",(0,a.kt)("inlineCode",{parentName:"li"},"v: 3")," is currently supported")),(0,a.kt)("p",null,"The standard OpenZit experience minimally requires the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"web")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v"))),(0,a.kt)("p",null,"Of those values, to start the controller only the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"db"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," sections are required. However, not\nincluding the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),' section will start the controller in "fabric only" mode and will not support any edge functionality\nor concepts (identities, JWT enrollment, 3rd Party CAs, policies, etc.). Not including the ',(0,a.kt)("inlineCode",{parentName:"p"},"web")," section will result in\nnone of the REST APIs (Fabric Management API, Edge Client API, Edge Management API, Health Check API) being started.\nWithout the Edge and Fabric Management APIs running administration of the network will be impossible. Without the Edge\nClient API running it will be impossible for Edge clients to connect to services."),(0,a.kt)("p",null,"Example Minimum Controller Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"v: 3\n\ndb: ctrl.db\n\nidentity:\n  cert: ctrl-client.cert.pem\n  server_cert: ctrl-server.cert.pem\n  key: ctrl.key.pem\n  ca: ca-chain.cert.pem\n\nctrl:\n  listener: tls:127.0.0.1:6262\n\nedge:\n  enrollment:\n    signingCert:\n      cert: intermediate.cert.pem\n      key: intermediate.key.pem\n\n\nweb:\n  - name: all-apis-localhost\n    bindPoints:\n      - interface: 127.0.0.1:1280\n        address: 127.0.0.1:1280\n    apis:\n      - binding: fabric\n      - binding: edge-management\n      - binding: edge-client\n")),(0,a.kt)("h3",{id:"ctrl"},(0,a.kt)("inlineCode",{parentName:"h3"},"ctrl")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," section configures how the controller will listen for incoming connections from routers. This includes the\nprotocol(s) used for router connections and how those connections are managed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listener")," - (required) is in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<protocol>:<interface>:<port>")," format. The value set here must be\nresolvable by routers and correspond the routers ",(0,a.kt)("inlineCode",{parentName:"li"},"ctrl.endpoint")," configuration value.\nSee ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#addressing"},"addressing"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - a set of option which includes the below options and those defined\nin ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#channel"},"channel options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newListener")," - (optional) an ",(0,a.kt)("inlineCode",{parentName:"li"},"<protocol>:<interface>:<port>")," address that is sent to routers to indicate a\ncontroller address migration. Should only be specified when the new listener address is reachable as clients will\nbegin to use the new value on restart")))),(0,a.kt)("p",null,"Example w/o options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ctrl:\n  listener: tls:127.0.0.1:6262\n")),(0,a.kt)("p",null,"Example w/ options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ctrl:\n  listener: tls:127.0.0.1:6262\n  options:\n    maxQueuedConnects: 1000\n    maxOutstandingConnects: 16\n    connectTimeoutMs: 1000\n    writeTimeout: 15s\n")),(0,a.kt)("h3",{id:"db"},(0,a.kt)("inlineCode",{parentName:"h3"},"db")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," section is a single scalar value that defines the path to the database file that the controller should use.\nOpenZiti uses a file backed in memory database. This path may be on the same or different drive. This section is\nrequired."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"db: /mnt/fast-drive/db/ctrl.db\n")),(0,a.kt)("h3",{id:"edge"},(0,a.kt)("inlineCode",{parentName:"h3"},"edge")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," section instructs the controller to start the edge components. If the section is not defined, all edge\nfunctionality will be disabled. This includes all features associated with identities (e.g. identity enrollment), 3rd\nParty CAs, policies, edge router connections, posture checks, and more. It is highly unlikely that this section should\nbe omitted."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," section also has the following subsections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api")," - (required) defines API specific configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enrollment")," - (required) defines enrollment specific configuration")),(0,a.kt)("p",null,"Example Minimum Edge:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"edge:\n  enrollment:\n    signingCert:\n      cert: intermediate.cert.pem\n      key: intermediate.key.pem\n")),(0,a.kt)("p",null,"Example Fully Defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"edge:\n  api:\n    activityUpdateInterval: 90s\n    activityUpdateBatchSize: 250\n    sessionTimeout: 30m\n    address: 127.0.0.1:1280\n  enrollment:\n    signingCert:\n      cert: intermediate.cert.pem\n      key: intermediate.key.pem\n    edgeIdentity:\n      duration: 5m\n    edgeRouter:\n      duration: 5m\n\n")),(0,a.kt)("h4",{id:"api"},(0,a.kt)("inlineCode",{parentName:"h4"},"api")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," section within the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," section defines API specific functionality."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"activityUpdateInterval")," - (optional) the interval used to buffer API Session usage notices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionTimeout")," - (optional) The amount of time an Edge API Session remains alive after the last REST API Request was\nprocessed\nor the last Edge Router connection for an API Session was closed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," - (required) the ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," combination that should be used to externally resolve to the Edge Client\nAPI")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"activityUpdateInterval"),", Edge Routers report connected API Sessions periodically and the controller tracks REST API\nrequests. ",(0,a.kt)("inlineCode",{parentName:"p"},"activityUpdateInterval")," defines the interval those updates are collated and buffered over. This is done to\nreduce the number of database writes required to persist API Session activity data. During the interval period the\ncontroller will buffer updates and flush at the end. Increasing this interval may increase the chance of unsaved updates\non controller crash or kill. Decreasing it will increase the frequency of database writes. The default should be\nsufficient."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," setting is unique as it must match the ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"bindPoint")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge-client")," API. This is to\nensure that responses and data persisted outside the system can reach the controller. An example of this is\nenrollment JWTs that contain the URL that is used to complete enrollment via the Edge Client API."),(0,a.kt)("h4",{id:"enrollment"},(0,a.kt)("inlineCode",{parentName:"h4"},"enrollment")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"enrollment")," section under ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," defines values that pertain specifically to identity and router enrollment. This\nincludes the certificate and private key used to sign certificates as well as enrolment JWT lifetimes."),(0,a.kt)("p",null,"The enrolment section has these subsection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signingCert")," - (required)  defines the certificate and key used to sign identity and router certificates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edgeIdentity")," - (optional) controls identity enrollment options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edgeRouter")," - (optional) controls router enrollment options")),(0,a.kt)("h4",{id:"signingcert"},(0,a.kt)("inlineCode",{parentName:"h4"},"signingCert")),(0,a.kt)("p",null,"An object defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," used to issue certificates to identities and routers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert")," - (required) the x509 PEM formatted certificate used to sign certificate, must be a root or intermediate CA"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - (required) the x509 PEM formatted private key used to sign certificates, must be the key for the certificate\ndefined\nin ",(0,a.kt)("inlineCode",{parentName:"li"},"cert"))),(0,a.kt)("p",null,"As this signing certificate will be the signer for all issued edge router certificates, it is important that all\nenrolling identities and routers trust the PKI that issued the signing certificate. To have that happen the trust anchor\nof the PKI the ",(0,a.kt)("inlineCode",{parentName:"p"},"signingCert")," is a member of should be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," bundle defined in the controller's ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," section.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," value is used as part of the trust bundle delivered to identities and routers during enrollment."),(0,a.kt)("h4",{id:"edgeidentity"},(0,a.kt)("inlineCode",{parentName:"h4"},"edgeIdentity")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edgeIdentity")," section controls the lifetime of identity enrollment JWTs. It has only one value:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," - (optional) the lifetime of identity enrollment JWTs")),(0,a.kt)("h4",{id:"edgerouter"},(0,a.kt)("inlineCode",{parentName:"h4"},"edgeRouter")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edgeRouter")," section controls the lifetime of router enrollment JWTs. It has only one value:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," - (optional) the lifetime of router enrollment JWTs")),(0,a.kt)("h3",{id:"events"},(0,a.kt)("inlineCode",{parentName:"h3"},"events")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section allows for the definition of multiple event loggers with their own handler and event subscriptions.\nHandlers define the type, format, and destination for events. Subscriptions handle which events are routed to the\nhandler. This allows different events to be output in different manners or to different locations."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section is an array of named objects. The name (",(0,a.kt)("inlineCode",{parentName:"p"},"jsonLogger")," in the example below) is used for\nconfiguration error output only. Each logger has a ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriptions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," section. The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriptions")," section is\nan array of objects with fields associated with the event type. Specifying an event type will cause it to be output via\nthe defined handler. If an event type is omitted, it will not be output. The list of valid event types and their options\nis as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge.apiSessions")," - (optional) Edge API Session events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"include"),' - (optional) a string or array of strings that specify which API session events to include ("created"\nand/or "\ndeleted")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge.entityCounts")," - (optional) Edge entity counts (API Sessions, sessions, routers, etc.)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval"),' - (optional) the time interval to generate entity count events on (e.g. "5s", "5000ms", "1h")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge.sessions"),"  - (optional) Edge Session events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"include"),' - (optional) a string or array of strings that specify which session events to include ("created"\nand/or "deleted")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric.circuits"),"  - (optional) Fabric circuit events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"include"),' - (optional) a string or array of strings that specify which circuit events to include ("created", "\npathUpdated", "\ndeleted", "failed")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric.links")," - - (optional) Fabric link events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric.routers")," - (optional) Fabric router events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric.usage")," - (optional) Fabric usage events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version"),' - (optional) a string representing the value of the usage event to use ("2\' or "3")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metrics")," - (optional) - System-wide metrics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sourceFilter")," - (optional) a regular expression to match the source name value on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metricFilter")," - (optional) a regular expression to match the metric name value on"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"services")," - (optional) Service events")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," section contains two or three properties depending on ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' - (required) the type of handler ("file" or "stdout")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format")," - (required) the format of events for the ",(0,a.kt)("inlineCode",{parentName:"li"},"type"),' ("json" or "plain")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),' - (conditional) used the "file" ',(0,a.kt)("inlineCode",{parentName:"li"},"type"),", the path of the output file")),(0,a.kt)("p",null,"Example JSON File Logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"events:\n  jsonLogger:\n    subscriptions:\n      - type: fabric.circuits\n      - type: fabric.links\n      - type: fabric.routers\n      - type: fabric.terminators\n      - type: metrics\n        sourceFilter: .*\n        metricFilter: .*\n      - type: edge.sessions\n      - type: edge.apiSessions\n      - type: fabric.usage\n      - type: services\n      - type: edge.entityCounts\n        interval: 5s\n    handler:\n      type: file\n      format: json\n      path: /tmp/ziti-events.log\n")),(0,a.kt)("h3",{id:"healthchecks"},(0,a.kt)("inlineCode",{parentName:"h3"},"healthChecks")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"healthChecks")," section configures how often health checking is performed. As of now, health checks are limited\nto ensuring the internal database has not deadlocked by attempting to acquire a locking transaction on some interval.\nHealth check status is reported externally on the ",(0,a.kt)("a",{parentName:"p",href:"#web"},(0,a.kt)("inlineCode",{parentName:"a"},"health-checks")," API"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boltCheck")," - (optional) bbolt specific configuration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," - (optional, 30s) how often to try entering a bolt read transaction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," - (optional, 15s) how long to wait for a transaction before timing out"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialDelay")," - (optional, 15s) how long to wait on startup before performing the first check")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"healthChecks:\n  boltCheck:\n    interval: 30s\n    timeout: 15s\n    initialDelay: 15s\n")),(0,a.kt)("h3",{id:"identity"},(0,a.kt)("inlineCode",{parentName:"h3"},"identity")),(0,a.kt)("p",null,"The identity section includes the default server certificate and private key used for services hosted by the controller,\nalternate server certificates and keys to support SNI on hosted services, client certificate and private key when making\nconnections, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," bundle that the controller will use when making connections and when bootstrapping identities\nand routers. See the conventions that apply to all ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#identity"},"identity")," sections for field level\ndetail."),(0,a.kt)("h3",{id:"network"},(0,a.kt)("inlineCode",{parentName:"h3"},"network")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"network")," section sets network wide options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minRouterCost")," - (optional) the minimum router cost (default 10)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"routerConnectionChurnLimit")," -  (optional) how often a new connection from a router can take over for an existing\nconnection (\ndefault 1m)")),(0,a.kt)("h3",{id:"profile"},(0,a.kt)("inlineCode",{parentName:"h3"},"profile")),(0,a.kt)("p",null,"The profile section allows for ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/blog/pprof"},"CPU (pprof) and memory (memprof)")," dumps to be created. CPU\nprofiling is buffered by the application's runtime and output to the designated file. Memory profiling allows the\ninterval memory profiling occurs at and is output. These settings are useful for debugging purposes only and should not\nbe enabled in production environments without careful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cpu")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the pprof data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memory")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the memprof data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intervalMs")," (optional, 15s) the frequency to output memprof data")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"profile:\n  cpu:\n    path: /home/user1/tmp/ctrl.cpu.pprof\n  memory:\n    path: ctrl.memprof\n    intervalMs: 150000\n")),(0,a.kt)("h3",{id:"trace"},(0,a.kt)("inlineCode",{parentName:"h3"},"trace")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," section instructs the controller to output incoming and outgoing messaging it receives. This setting is\nuseful for debugging purposes only and should not be enabled in production environments without careful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the file to output decoded messages to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"trace:\n  path: /var/opt/open.ziti.ctrl.trace\n")),(0,a.kt)("h3",{id:"web"},(0,a.kt)("inlineCode",{parentName:"h3"},"web")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section follows the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#xweb"},"conventions of XWeb"),". The controller has the following APIs\ndefined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"health-checks")," - provides a health check API that allows remote parties to verify the health of the controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric")," - the Fabric Management API which allows remote administration of a network"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge-management")," - the Edge Management API which allows remote administration of a network's edge components (\nidentities, policies, authentication, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge-client")," - the Edge Client API which allows clients to authenticate and request connections to services")),(0,a.kt)("p",null,"Each API may have their own options, but currently do not."),(0,a.kt)("h3",{id:"v"},(0,a.kt)("inlineCode",{parentName:"h3"},"v")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"v"),' section is used to detect if the version file is supported by the OpenZiti binary read it. The current and only\nsupported value is "3".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"v: 3\n")))}c.isMDXComponent=!0}}]);
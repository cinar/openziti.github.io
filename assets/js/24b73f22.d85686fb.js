"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:70,sidebar_label:"Sidecar Proxy"},s="Kubernetes Sidecar Proxy",o={unversionedId:"guides/kubernetes/workload-tunneling/kubernetes-sidecar",id:"guides/kubernetes/workload-tunneling/kubernetes-sidecar",title:"Kubernetes Sidecar Proxy",description:"Overview",source:"@site/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar.md",sourceDirName:"guides/kubernetes/workload-tunneling",slug:"/guides/kubernetes/workload-tunneling/kubernetes-sidecar",permalink:"/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,sidebar_label:"Sidecar Proxy"},sidebar:"docsSidebar",previous:{title:"Node Proxy",permalink:"/docs/guides/kubernetes/workload-tunneling/kubernetes-daemonset"},next:{title:"Hardware Security Modules (HSM) - PKCS11",permalink:"/docs/guides/hsm/"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create and Enroll an Identity",id:"create-and-enroll-an-identity",level:2},{value:"Restore the Quickstart KUBECONFIG If Necessary",id:"restore-the-quickstart-kubeconfig-if-necessary",level:2},{value:"Save the Identity in a Kubernetes Secret",id:"save-the-identity-in-a-kubernetes-secret",level:2},{value:"Deploy the Pod",id:"deploy-the-pod",level:2},{value:"Check the Logs",id:"check-the-logs",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-sidecar-proxy"},"Kubernetes Sidecar Proxy"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This guide shows you how to access a Ziti service with a non-Ziti client application that's running\nin a Kubernetes pod. To provide access to the service, we will deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," container as a sidecar in a pod with a demo client app."),(0,a.kt)("p",null,"This guide also demonstrates ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel"),"'s internal DNS server, which allows us to access Ziti services\nby hostname instead of IP address."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram of solution",src:n(16247).Z,width:"865",height:"584"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/tunnelers/linux"},"Here's some detail on how the various intercept modes work on Linux")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/local-kubernetes"},"Minikube Quickstart"),". This guide\nuses the Ziti Controller and Ziti Edge Router that are created in the Minikube Quickstart."),(0,a.kt)("li",{parentName:"ul"},"Admin-level access to a Kubernetes cluster via ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,a.kt)("h2",{id:"create-and-enroll-an-identity"},"Create and Enroll an Identity"),(0,a.kt)("p",null,'This guide will re-use the Ziti service "testapi-service", a REST API demo server, that was created in the quickstart.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We will create a new identity for our client app with the correct role to grant access to the Ziti service."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create identity device sidecar-client \\\n  --jwt-output-file /tmp/sidecar-client.jwt --role-attributes testapi-clients\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enroll the identity."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll /tmp/sidecar-client.jwt\n")))),(0,a.kt)("h2",{id:"restore-the-quickstart-kubeconfig-if-necessary"},"Restore the Quickstart KUBECONFIG If Necessary"),(0,a.kt)("p",null,"You can restore the KUBECONFIG context from the Minikube quickstart like this if you switched contexts after running it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube --profile miniziti update-context\n")),(0,a.kt)("h2",{id:"save-the-identity-in-a-kubernetes-secret"},"Save the Identity in a Kubernetes Secret"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," sidecar will access its identity by mounting a Kubernetes secret in the container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic "sidecar-client-identity" \\\n    --from-file=/tmp/sidecar-client.json\n')),(0,a.kt)("h2",{id:"deploy-the-pod"},"Deploy the Pod"),(0,a.kt)("p",null,"Deploy a Pod that runs a non-Ziti demo client application and ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," as a sidecar proxy. For this\ndemonstration, the client application is ",(0,a.kt)("inlineCode",{parentName:"p"},"wget"),". Our Pod sends a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to the demo testapi server in a loop so we can see the response in the log."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the CoreDNS cluster service IP address."),(0,a.kt)("p",{parentName:"li"},"You need to update the deployment manifest with the CoreDNS CLUSTER-IP address before you deploy. This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," sidecar provides an override nameserver for the pod, so we need to inject the CoreDNS nameserver as fallback resolver for non-Ziti names because ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," itself will not answer queries for non-Ziti DNS names."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --namespace kube-system get services kube-dns\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the following to a file named /tmp/sidecar-demo.yaml."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /tmp/sidecar-demo.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ziti-tunnel-sidecar-demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ziti-tunnel-sidecar-demo\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: ziti-tunnel-sidecar-demo\n    spec:\n      containers:\n        - image: stedolan/jq\n          name: testclient\n          command: \n            - sh\n            - -c\n            - |\n              while true; do\n                set -x\n                wget --quiet \\\n                  --output-document=- \\\n                  --post-data ziti=awesome \\\n                  http://testapi.ziti/post \\\n                | jq .data\n                set +x\n                sleep 3\n              done\n        - image: openziti/ziti-tunnel\n          name: ziti-tunnel\n          args: ["tproxy"]\n          env:\n          - name: ZITI_IDENTITY_BASENAME\n            value: sidecar-client  # the filename in the volume is sidecar-client.json\n          volumeMounts:\n          - name: sidecar-client-identity\n            mountPath: /netfoundry\n            readOnly: true\n          securityContext:\n            capabilities:\n              add:\n              - NET_ADMIN\n      dnsPolicy: None\n      dnsConfig:\n        nameservers:\n          - 127.0.0.1   # used by Ziti tunnel during startup to verify own DNS for the pod\n          - 10.96.0.10  # change to CoreDNS cluster service address\n      restartPolicy: Always\n      volumes:\n      - name: sidecar-client-identity\n        secret:\n          secretName: sidecar-client-identity\n')),(0,a.kt)("p",{parentName:"li"},"You'll notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," sidecar container has a few requirements:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The basename (sans suffix) of the identity that is assumed by ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," must be passed into the container with the\n",(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_IDENTITY_BASENAME")," environment variable."),(0,a.kt)("li",{parentName:"ol"},'The secret that we created above for the enrolled identity must be mounted into the container at\n"/netfoundry".'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the manifest YAML is saved, we can deploy the pod with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /tmp/sidecar-demo.yaml\n")))),(0,a.kt)("h2",{id:"check-the-logs"},"Check the Logs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the name of the pod that Kubernetes deployed for us."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods\nziti-tunnel-sidecar-demo-749c476989-6wpfn   1/1     Running   0          42s\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Tail the logs for the "testclient" container inside the pod. The first few attempts didn\'t get a reply because the tunnel was starting up.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl logs --follow ziti-tunnel-sidecar-demo-749c476989-6wpfn --container testclient\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n')))),(0,a.kt)("p",null,"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," client is using the DNS name that we provided in the Ziti service definition to make the request."))}u.isMDXComponent=!0},16247:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sidecar-diagram-94e794be522098d08715eac653dd8207.svg"}}]);
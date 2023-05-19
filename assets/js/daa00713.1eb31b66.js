"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[3751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Envoy",sidebar_position:2},a="Integrating Envoy with Protoconf",l={unversionedId:"integrations/envoy",id:"integrations/envoy",title:"Integrating Envoy with Protoconf",description:"Introduction",source:"@site/docs/integrations/envoy.mdx",sourceDirName:"integrations",slug:"/integrations/envoy",permalink:"/docs/0.1.7/integrations/envoy",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/integrations/envoy.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Envoy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terraform",permalink:"/docs/0.1.7/integrations/terraform"},next:{title:"Use Cases",permalink:"/docs/0.1.7/category/use-cases"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Install <code>protoconf-xds</code>",id:"step-1-install-protoconf-xds",level:2},{value:"Step 2: Initialize the Workspace",id:"step-2-initialize-the-workspace",level:2},{value:"Step 3: Edit the Example File",id:"step-3-edit-the-example-file",level:2},{value:"Step 4: Compile the Configuration",id:"step-4-compile-the-configuration",level:2},{value:"Step 5: Run the Protoconf Agent",id:"step-5-run-the-protoconf-agent",level:2},{value:"Step 6: Run <code>protoconf-xds</code> Server",id:"step-6-run-protoconf-xds-server",level:2},{value:"Step 7: Create Envoy Bootstrap Config",id:"step-7-create-envoy-bootstrap-config",level:2},{value:"Step 8: Create Dockerfile",id:"step-8-create-dockerfile",level:2},{value:"Step 9: Build Docker Image",id:"step-9-build-docker-image",level:2},{value:"Step 10: Run Docker Container",id:"step-10-run-docker-container",level:2},{value:"Running in Production",id:"running-in-production",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrating-envoy-with-protoconf"},"Integrating Envoy with Protoconf"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This guide aims to illustrate how you can use Protoconf to manage your Envoy configuration. Envoy Proxy is a modern, high performance, small footprint edge and service proxy which is particularly applicable in Cloud-Native applications. Envoy's configuration API, called xDS, is defined in Protobuf, making it a perfect candidate for Protoconf."),(0,r.kt)("p",null,"Our setup will involve running a ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf-xds")," server that will serve the Envoy configurations. In a nutshell, Protoconf will generate the xDS snapshot that ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf-xds")," will serve to Envoy, updating its configuration."),(0,r.kt)("p",null,"Below is a step-by-step guide on how to integrate Envoy with Protoconf:"),(0,r.kt)("h2",{id:"step-1-install-protoconf-xds"},"Step 1: Install ",(0,r.kt)("inlineCode",{parentName:"h2"},"protoconf-xds")),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf-xds")," via brew using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install protoconf/tap/protoconf-xds\n")),(0,r.kt)("p",null,"Alternatively, you can download it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/protoconf/protoconf-xds/releases"},"github releases page"),"."),(0,r.kt)("h2",{id:"step-2-initialize-the-workspace"},"Step 2: Initialize the Workspace"),(0,r.kt)("p",null,"Run the command below to initialize the workspace with all required proto files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf-xds init\n")),(0,r.kt)("p",null,"This command will create a directory structure for your project and will download all the necessary protobuf definitions."),(0,r.kt)("h2",{id:"step-3-edit-the-example-file"},"Step 3: Edit the Example File"),(0,r.kt)("p",null,"Find the example configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/example/envoy.mpconf"),". This file is written in the Starlark configuration language and defines your Envoy configuration. Make the necessary modifications to fit your use-case."),(0,r.kt)("h2",{id:"step-4-compile-the-configuration"},"Step 4: Compile the Configuration"),(0,r.kt)("p",null,"Compile the configuration by running the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf compile .\n")),(0,r.kt)("p",null,"It will create a new configuration with the path ",(0,r.kt)("inlineCode",{parentName:"p"},"example/envoy/test-id"),"."),(0,r.kt)("h2",{id:"step-5-run-the-protoconf-agent"},"Step 5: Run the Protoconf Agent"),(0,r.kt)("p",null,"To generate an xDS snapshot and serve it to Envoy, you'll need to run the Protoconf agent in development mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf agent --dev\n")),(0,r.kt)("h2",{id:"step-6-run-protoconf-xds-server"},"Step 6: Run ",(0,r.kt)("inlineCode",{parentName:"h2"},"protoconf-xds")," Server"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf-xds serve")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"-prefix=example/envoy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-nodeId=test-id"),". Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"-nodeId")," is repeatable and you can add as many node ids as you wish. The combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," id will result in ",(0,r.kt)("inlineCode",{parentName:"p"},"example/envoy/test-id"),", which is the same as our protoconf config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf-xds serve -prefix=example/envoy -nodeId=test-id\n")),(0,r.kt)("h2",{id:"step-7-create-envoy-bootstrap-config"},"Step 7: Create Envoy Bootstrap Config"),(0,r.kt)("p",null,"Create a new Envoy bootstrap configuration file. This config assumes Envoy will run in a Docker container, and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf-xds")," server runs on the host machine listening to port 18000. You can change the host address in the config file. Also, you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"node.id")," which, in this case, is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"test-id")," so our xDS server will know which configuration to serve."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/protoconf/protoconf-xds/blob/main/envoy.yaml"},"Here is the bootstrap config")),(0,r.kt)("h2",{id:"step-8-create-dockerfile"},"Step 8: Create Dockerfile"),(0,r.kt)("p",null,"Create a Dockerfile to generate a Docker container with Envoy and our new bootstrap config. Here's an example Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM envoyproxy/envoy:latest\nCOPY envoy.yaml /etc/envoy/envoy.yaml\nRUN chmod go+r /etc/envoy/envoy.yaml\n")),(0,r.kt)("h2",{id:"step-9-build-docker-image"},"Step 9: Build Docker Image"),(0,r.kt)("p",null,"Build the Docker image using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t envoy:v1 .\n")),(0,r.kt)("h2",{id:"step-10-run-docker-container"},"Step 10: Run Docker Container"),(0,r.kt)("p",null,"Run the Docker container using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p\n\n19000:19000 -p 10000:10000 envoy:v1\n")),(0,r.kt)("p",null,"You can then navigate to Envoy's admin page at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:19000")," and see the configuration of the clusters. If you change the cluster name in the example file, run ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf compile ."),", and reload the page, you'll see the new cluster name."),(0,r.kt)("h2",{id:"running-in-production"},"Running in Production"),(0,r.kt)("p",null,"For production environments, Docker images are provided via ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf/protoconf-xds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ghcr.io/protoconf/protoconf-xds"),"."),(0,r.kt)("p",null,"Remember to switch the Protoconf agent to production mode when you're ready to move your configuration out of the development environment."))}u.isMDXComponent=!0}}]);
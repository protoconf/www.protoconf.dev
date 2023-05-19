"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[4932],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(g,a(a({ref:n},u),{},{components:t})):o.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},a="Running the protoconf agent",s={unversionedId:"production/running-in-production",id:"production/running-in-production",title:"Running the protoconf agent",description:"Running protoconf in a production environment requires careful consideration to ensure reliability, security, and ease of maintenance. This guide provides some best practices and recommendations for running protoconf in production.",source:"@site/docs/production/running-in-production.mdx",sourceDirName:"production",slug:"/production/running-in-production",permalink:"/docs/0.1.7/production/running-in-production",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/production/running-in-production.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Inserting Configurations",permalink:"/docs/0.1.7/production/inserting-configurations"},next:{title:"Integrations",permalink:"/docs/0.1.7/category/integrations"}},c={},l=[{value:"Installing protoconf",id:"installing-protoconf",level:2},{value:"Configuration Management",id:"configuration-management",level:2},{value:"Security",id:"security",level:2},{value:"Config Backend",id:"config-backend",level:2},{value:"Protoconf Agent",id:"protoconf-agent",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Updates and Migrations",id:"updates-and-migrations",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-the-protoconf-agent"},"Running the protoconf agent"),(0,r.kt)("p",null,"Running protoconf in a production environment requires careful consideration to ensure reliability, security, and ease of maintenance. This guide provides some best practices and recommendations for running protoconf in production."),(0,r.kt)("h2",{id:"installing-protoconf"},"Installing protoconf"),(0,r.kt)("p",null,"You can install protoconf directly onto your server or use Docker. Docker images are available on Docker Hub and GitHub Container Registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Docker Hub\ndocker pull protoconf/protoconf:<version>\n\n# GitHub Container Registry\ndocker pull ghcr.io/protoconf/protoconf:<version>\n")),(0,r.kt)("p",null,"For macOS, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"brew")," to install protoconf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install protoconf/tap/protoconf\n")),(0,r.kt)("p",null,"For other platforms, download the latest version of protoconf from the official GitHub repository and install the executable into your PATH."),(0,r.kt)("h2",{id:"configuration-management"},"Configuration Management"),(0,r.kt)("p",null,"Keep all configuration files in a version control system (like Git) to track changes and easily revert to previous versions if needed."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"Secure sensitive configuration data using environment variables or secure storage solutions. Do not hard-code sensitive data in configuration files."),(0,r.kt)("h2",{id:"config-backend"},"Config Backend"),(0,r.kt)("p",null,"In a production environment, you should use a key-value store as a config backend. Protoconf supports Consul, Etcd, and Zookeeper as config backends. To specify the config backend, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-store")," flag and provide the address of the store with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-store-address")," flag. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf agent -store consul -store-address 10.0.0.1:8500\n")),(0,r.kt)("p",null,"You can also specify a key prefix to be used in the key-value store with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-prefix")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf agent -store consul -store-address 10.0.0.1:8500 -prefix myproject\n")),(0,r.kt)("h2",{id:"protoconf-agent"},"Protoconf Agent"),(0,r.kt)("p",null,"In a production environment, the protoconf agent should be run as a service, either natively or within a container, depending on your infrastructure."),(0,r.kt)("p",null,"The agent has several configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-grpc-address"),': The address for the gRPC interface (default is ":4300").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-http-address"),': The address for the Prometheus HTTP interface (default is ":9143").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-dev"),": Development mode. Watch a local Protoconf directory for file changes. This should not be used in production.")),(0,r.kt)("p",null,"For example, to start the agent with specific gRPC and HTTP addresses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf agent -grpc-address :5000 -http-address :9000\n")),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"Monitor the protoconf agent's logs for any potential issues. Consider integrating with a logging system to centralize logs and enable alerting on errors."),(0,r.kt)("h2",{id:"updates-and-migrations"},"Updates and Migrations"),(0,r.kt)("p",null,"When updating protoconf or migrating to new versions of your configuration, test changes in a staging environment first. Ensure that new configurations are compatible with your applications and that there are no disruptions in service."),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,"Ensure protoconf integrates smoothly with your deployment pipeline. It can be used in conjunction with various CI/CD tools and platforms like Jenkins, CircleCI, Kubernetes, and others."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Keep a record of common issues and their solutions for easy reference. Encourage open communication within your team to ensure everyone is aware of any ongoing issues and their resolutions."),(0,r.kt)("p",null,"Remember, each production environment is unique. Always consider your specific requirements and constraints when deciding how to run and manage protoconf in production."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[1514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),h=o,m=l["".concat(s,".").concat(h)]||l[h]||d[h]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Production Architecture",c={unversionedId:"production/production-architecture",id:"production/production-architecture",title:"Production Architecture",description:"The production architecture of protoconf involves several components working together to provide dynamic, event-driven configuration management. This architecture is designed to support high availability, scalability, and real-time updates.",source:"@site/docs/production/production-architecture.mdx",sourceDirName:"production",slug:"/production/production-architecture",permalink:"/docs/production/production-architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/production/production-architecture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Standard Libraries",permalink:"/docs/advanced-usage/starlib"},next:{title:"Inserting Configurations",permalink:"/docs/production/inserting-configurations"}},s={},p=[{value:"Architecture Overview",id:"architecture-overview",level:2}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"production-architecture"},"Production Architecture"),(0,o.kt)("p",null,"The production architecture of protoconf involves several components working together to provide dynamic, event-driven configuration management. This architecture is designed to support high availability, scalability, and real-time updates."),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("mermaid",{value:"flowchart TB\n  A(SCM) --\x3e|Event| B((.//\\nprotoconf\\ninsert))\n  B --\x3e|Write| C[(KVStore)]\n  C <--\x3e |Replication| N1[(KVStore)] &  N2[(KVStore)]\n  N1 --\x3e|Watch| D{{.//\\nprotoconf\\nagent}}\n  N2 --\x3e|Watch| E{{.//\\nprotoconf\\nagent}}\n  E --\x3e|Stream| F(((Applications)))\n  D --\x3e|Stream| G(((Applications)))\n"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Source Code Management (SCM):")," This is where your configuration files and your application code reside. Whenever there is an event (such as a commit or a merge), it triggers the next step in the process.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"protoconf insert:")," This is a command that is run in response to events from the SCM. It takes the configuration files and inserts them into the key-value store. This command can be triggered manually, or automatically via webhooks or CI/CD pipelines.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key-Value Store (Consul/Etcd/Zookeeper):")," This is the centralized store where all the configurations are stored. The key-value store ensures high availability and distributed access to the configurations.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"protoconf agent:")," This is a service that listens for changes in the key-value store. When a configuration is inserted or updated, the protoconf agent picks up the change and prepares to distribute it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Applications:")," These are your actual applications that need the configurations. They connect to the protoconf agent and receive real-time configuration updates via gRPC."))),(0,o.kt)("p",null,"This architecture allows for rapid response to configuration changes, ensuring that your applications always have the most up-to-date configurations. This is particularly useful in a microservices architecture where multiple services need to stay in sync with their configurations."))}d.isMDXComponent=!0}}]);
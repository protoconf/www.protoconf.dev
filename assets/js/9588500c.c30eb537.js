"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,g=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Inserting Configurations",s={unversionedId:"production/inserting-configurations",id:"production/inserting-configurations",title:"Inserting Configurations",description:"Once you have your configurations defined and validated, you can insert them into your key-value store using the protoconf insert command. This command enables protoconf to manage your configurations in a distributed manner, making them available to your applications wherever they are running.",source:"@site/docs/production/inserting-configurations.mdx",sourceDirName:"production",slug:"/production/inserting-configurations",permalink:"/docs/0.1.7/production/inserting-configurations",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/production/inserting-configurations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Production Architecture",permalink:"/docs/0.1.7/production/production-architecture"},next:{title:"Running the protoconf agent",permalink:"/docs/0.1.7/production/running-in-production"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Deleting Configurations",id:"deleting-configurations",level:2},{value:"Webhook Usage",id:"webhook-usage",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inserting-configurations"},"Inserting Configurations"),(0,r.kt)("p",null,"Once you have your configurations defined and validated, you can insert them into your key-value store using the ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf insert")," command. This command enables protoconf to manage your configurations in a distributed manner, making them available to your applications wherever they are running."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The basic usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf insert")," command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf insert -store <store> -store-address <store-address> <config>...\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<store>")," parameter specifies the type of key-value store you are using (either ",(0,r.kt)("inlineCode",{parentName:"p"},"consul"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),"). The ",(0,r.kt)("inlineCode",{parentName:"p"},"<store-address>")," parameter is the address of your key-value store."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<config>...")," parameters are one or more configuration paths that you want to insert. These paths correspond to the paths that your applications will use when requesting configurations from the protoconf agent."),(0,r.kt)("p",null,"For example, to insert the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," configurations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject/server_config")," into an Etcd store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf insert -store etcd -store-address etcd:2379 myproject/server_config/default myproject/server_config/debug\n")),(0,r.kt)("p",null,"Note that the user running this command needs to have access to the key-value store."),(0,r.kt)("h2",{id:"deleting-configurations"},"Deleting Configurations"),(0,r.kt)("p",null,"You can also delete configurations from your key-value store using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf insert -d -store <store> -store-address <store-address> <config>...\n")),(0,r.kt)("p",null,"This command will remove the specified configurations from your store."),(0,r.kt)("h2",{id:"webhook-usage"},"Webhook Usage"),(0,r.kt)("p",null,"In many cases, you may want to insert or update configurations in response to events like commits or merges in your version control system. Protoconf supports this use case by providing a container that can accept webhooks from GitHub or GitLab."),(0,r.kt)("p",null,"By configuring your repository to send webhooks to this container, you can ensure that your configurations are always up-to-date with your latest code changes. This can be particularly useful in a continuous integration/continuous delivery (CI/CD) workflow."))}d.isMDXComponent=!0}}]);
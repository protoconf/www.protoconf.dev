"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[3217],{9937:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=o(5893),t=o(3905);const i={sidebar_position:2},s="Inserting Configurations",a={id:"production/inserting-configurations",title:"Inserting Configurations",description:"Once you have your configurations defined and validated, you can insert them into your key-value store using the protoconf insert command. This command enables protoconf to manage your configurations in a distributed manner, making them available to your applications wherever they are running.",source:"@site/docs/production/inserting-configurations.mdx",sourceDirName:"production",slug:"/production/inserting-configurations",permalink:"/docs/0.1.7/production/inserting-configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/production/inserting-configurations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Production Architecture",permalink:"/docs/0.1.7/production/production-architecture"},next:{title:"Running the protoconf agent",permalink:"/docs/0.1.7/production/running-in-production"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Deleting Configurations",id:"deleting-configurations",level:2},{value:"Webhook Usage",id:"webhook-usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inserting-configurations",children:"Inserting Configurations"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have your configurations defined and validated, you can insert them into your key-value store using the ",(0,r.jsx)(n.code,{children:"protoconf insert"})," command. This command enables protoconf to manage your configurations in a distributed manner, making them available to your applications wherever they are running."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsxs)(n.p,{children:["The basic usage of the ",(0,r.jsx)(n.code,{children:"protoconf insert"})," command is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"protoconf insert -store <store> -store-address <store-address> <config>...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<store>"})," parameter specifies the type of key-value store you are using (either ",(0,r.jsx)(n.code,{children:"consul"}),", ",(0,r.jsx)(n.code,{children:"zookeeper"}),", or ",(0,r.jsx)(n.code,{children:"etcd"}),"). The ",(0,r.jsx)(n.code,{children:"<store-address>"})," parameter is the address of your key-value store."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<config>..."})," parameters are one or more configuration paths that you want to insert. These paths correspond to the paths that your applications will use when requesting configurations from the protoconf agent."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, to insert the ",(0,r.jsx)(n.code,{children:"default"})," and ",(0,r.jsx)(n.code,{children:"debug"})," configurations for the ",(0,r.jsx)(n.code,{children:"myproject/server_config"})," into an Etcd store:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"protoconf insert -store etcd -store-address etcd:2379 myproject/server_config/default myproject/server_config/debug\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the user running this command needs to have access to the key-value store."}),"\n",(0,r.jsx)(n.h2,{id:"deleting-configurations",children:"Deleting Configurations"}),"\n",(0,r.jsxs)(n.p,{children:["You can also delete configurations from your key-value store using the ",(0,r.jsx)(n.code,{children:"-d"})," option:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"protoconf insert -d -store <store> -store-address <store-address> <config>...\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command will remove the specified configurations from your store."}),"\n",(0,r.jsx)(n.h2,{id:"webhook-usage",children:"Webhook Usage"}),"\n",(0,r.jsx)(n.p,{children:"In many cases, you may want to insert or update configurations in response to events like commits or merges in your version control system. Protoconf supports this use case by providing a container that can accept webhooks from GitHub or GitLab."}),"\n",(0,r.jsx)(n.p,{children:"By configuring your repository to send webhooks to this container, you can ensure that your configurations are always up-to-date with your latest code changes. This can be particularly useful in a continuous integration/continuous delivery (CI/CD) workflow."})]})}function l(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,o)=>{o.d(n,{ah:()=>u});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=r.createContext({}),u=function(e){var n=r.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(o),h=t,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return o?r.createElement(f,s(s({ref:n},l),{},{components:o})):r.createElement(f,s({ref:n},l))}));l.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:4},i="Generating YAML, JSON and TOML",l={unversionedId:"advanced-usage/output-formats",id:"advanced-usage/output-formats",title:"Generating YAML, JSON and TOML",description:"Protoconf has built-in support for generating YAML, JSON, and TOML configurations. This allows you to use Protoconf in environments that expect configurations in these formats, and to take advantage of the different strengths of each format.",source:"@site/docs/advanced-usage/output-formats.mdx",sourceDirName:"advanced-usage",slug:"/advanced-usage/output-formats",permalink:"/docs/0.1.7/advanced-usage/output-formats",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/advanced-usage/output-formats.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pipelining",permalink:"/docs/0.1.7/advanced-usage/pipelining"},next:{title:"Protoconf Mutation Service",permalink:"/docs/0.1.7/advanced-usage/mutation-service/"}},p={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Multiple Configurations",id:"multiple-configurations",level:2},{value:"Full Example",id:"full-example",level:3}],c={toc:u},s="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generating-yaml-json-and-toml"},"Generating YAML, JSON and TOML"),(0,r.kt)("p",null,"Protoconf has built-in support for generating YAML, JSON, and TOML configurations. This allows you to use Protoconf in environments that expect configurations in these formats, and to take advantage of the different strengths of each format."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"If a configuration file's path ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".yml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".json"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},".toml"),", Protoconf will automatically generate the configuration in the corresponding format. The generated file will be written to the appropriate path under ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs")," as well as to the ",(0,r.kt)("inlineCode",{parentName:"p"},"./materialized_configs")," directory."),(0,r.kt)("p",null,"For example, if you have a configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject/server_config.json.pconf"),", Protoconf will generate a JSON configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs/myproject/server_config.json"),"."),(0,r.kt)("h2",{id:"multiple-configurations"},"Multiple Configurations"),(0,r.kt)("p",null,"If you are using a ",(0,r.kt)("inlineCode",{parentName:"p"},".mpconf")," file to generate multiple configurations, you can specify the output format for each configuration by including the format extension in the key of the returned dictionary."),(0,r.kt)("p",null,"For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},".mpconf")," file that returns ",(0,r.kt)("inlineCode",{parentName:"p"},'{"server_config.yaml": ServerConfiguration}'),", Protoconf will generate a YAML configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs/server_config.yaml"),"."),(0,r.kt)("h3",{id:"full-example"},"Full Example"),(0,r.kt)("p",null,"Let's assume you have a ProtoBuf message ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerConfiguration")," defined as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ServerConfiguration {\n  bool enable_debug = 1;\n  uint32 max_connections = 2;\n}\n")),(0,r.kt)("p",null,"You can create a ",(0,r.kt)("inlineCode",{parentName:"p"},".mpconf")," file as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("//myproject/v1/server_config.proto", "ServerConfiguration")\n\ndef main():\n  config = ServerConfiguration()\n  config.enable_debug = True\n  config.max_connections = 1000\n\n  return {\n    "server_config.json": config,\n    "server_config.yaml": config,\n    "server_config.toml": config\n  }\n')),(0,r.kt)("p",null,"By running ",(0,r.kt)("inlineCode",{parentName:"p"},"protoconf compile .")," on this ",(0,r.kt)("inlineCode",{parentName:"p"},".mpconf")," file, Protoconf will generate a JSON file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs/server_config.json"),", a YAML file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs/server_config.yaml"),", and a TOML file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./outputs/server_config.toml"),"."),(0,r.kt)("p",null,"This feature makes it easy to generate multiple configurations in different formats from a single ",(0,r.kt)("inlineCode",{parentName:"p"},".mpconf")," file, simplifying your configuration management process."))}f.isMDXComponent=!0}}]);
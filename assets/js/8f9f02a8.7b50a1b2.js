"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[4458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},i="Protoconf Mutation Service",l={unversionedId:"advanced-usage/mutation-service/mutation-service",id:"advanced-usage/mutation-service/mutation-service",title:"Protoconf Mutation Service",description:"Protoconf offers an RPC service for programmatically mutating configurations, which is particularly useful for applications that need to adjust configurations dynamically.",source:"@site/docs/advanced-usage/mutation-service/mutation-service.mdx",sourceDirName:"advanced-usage/mutation-service",slug:"/advanced-usage/mutation-service/",permalink:"/docs/advanced-usage/mutation-service/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced-usage/mutation-service/mutation-service.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generating YAML, JSON and TOML",permalink:"/docs/advanced-usage/output-formats"},next:{title:"Protoconf Mutation CLI",permalink:"/docs/advanced-usage/mutation-service/mutation-cli"}},c={},s=[{value:"Protoconf Mutation Service Definition",id:"protoconf-mutation-service-definition",level:2},{value:"Protoconf Value Definition",id:"protoconf-value-definition",level:2},{value:"Mutation Server",id:"mutation-server",level:2},{value:"Dynamic Dictionary Example",id:"dynamic-dictionary-example",level:2},{value:"Mutation Server Flags",id:"mutation-server-flags",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protoconf-mutation-service"},"Protoconf Mutation Service"),(0,a.kt)("p",null,"Protoconf offers an RPC service for programmatically mutating configurations, which is particularly useful for applications that need to adjust configurations dynamically."),(0,a.kt)("p",null,"This guide will explain how to use Protoconf's mutation service and provide an example of a dynamic dictionary that can be loaded from other files and iterated over."),(0,a.kt)("h2",{id:"protoconf-mutation-service-definition"},"Protoconf Mutation Service Definition"),(0,a.kt)("p",null,"The Protoconf mutation service is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage v1;\n\noption java_package = "com.protoconf.server.api.v1";\n\nimport "datatypes/proto/v1/protoconf_value.proto";\n\nmessage ConfigMutationRequest {\n  string path = 1;\n  ProtoconfValue value = 2;\n  string script_metadata = 3;\n}\n\nmessage ConfigMutationResponse {}\n\nservice ProtoconfMutationService {\n  rpc MutateConfig(ConfigMutationRequest) returns (ConfigMutationResponse);\n}\n')),(0,a.kt)("h2",{id:"protoconf-value-definition"},"Protoconf Value Definition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtoconfValue")," message is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ProtoconfValue {\n    string proto_file = 1;\n    google.protobuf.Any value = 2;\n    repeated SecretMetadata secrets = 3;\n}\n")),(0,a.kt)("h2",{id:"mutation-server"},"Mutation Server"),(0,a.kt)("p",null,"The mutation server writes the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtoconfValue")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"./mutable_configs/<path from ConfigMutationRequest>"),"."),(0,a.kt)("p",null,"These files can be loaded into the Starlark files as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-starlark"},'load("mutable:<path>", "value")\n')),(0,a.kt)("h2",{id:"dynamic-dictionary-example"},"Dynamic Dictionary Example"),(0,a.kt)("p",null,"Assume the following template is stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/demo/inputs.pinc.template"),". It will iterate through all the files under ",(0,a.kt)("inlineCode",{parentName:"p"},"./mutable_configs/demo/inputs"),", and the outcome will be written to ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/demo/inputs.pinc")," before compilation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-starlark"},'"""\nGenerated from {{ .TemplateFilename }}\n"""\n{{ range .Files -}}\nload(\n    "mutable:{{.MutableName}}",\n    {{.VariableName}}="value",\n)\n{{ end }}\n\ninputs = {\n{{- range .Files }}\n    "{{.MutableName}}": {{.VariableName}},\n{{- end }}\n')),(0,a.kt)("p",null,"In this example, we made a dynamic dictionary that can be loaded from other files and be iterated over:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-starlark"},'load("//demo/inputs.pinc", "inputs")\n')),(0,a.kt)("h2",{id:"mutation-server-flags"},"Mutation Server Flags"),(0,a.kt)("p",null,"The Protoconf mutation server runs via the ",(0,a.kt)("inlineCode",{parentName:"p"},"protoconf serve")," command, with the following flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Usage: [OPTION]... protoconfRoot\n  -grpc-address string\n        Server gRPC address (default ":4301")\n  -post string\n        Post mutation script\n  -pre string\n        Pre mutation script\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-pre")," flag receives a path to a script to run before writing any file to the local filesystem. This allows for validating that the local directory is clean and ready to receive the change (for example, ensuring synchronization with the head of your git repository, acquiring a lock, or any other preparatory steps)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-post")," flag receives a path to a script to run after the file is written to the local directory. This script should initiate the protoconf compile -process-templates . command, and then either sync the outcome back to git or run the protoconf insert command to write the outcomes to the key-value store."),(0,a.kt)("p",null,"With these tools, Protoconf offers a powerful and flexible way to manage dynamic configuration changes in your application, with the ability to customize the process to match your specific needs."))}d.isMDXComponent=!0}}]);
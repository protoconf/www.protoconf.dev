"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[5991],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||a;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>P,default:()=>x,frontMatter:()=>j,metadata:()=>T,toc:()=>E});var o=t(7462),r=t(7294),a=t(3905),i=t(6010),c=t(2466),u=t(6550),l=t(1980),s=t(7392),p=t(12);function f(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??f(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,u.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=g(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[u,l]=m({queryString:t,groupId:o}),[s,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,p.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=u??s;return d({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),l(e),f(e)}),[l,f,a]),tabValues:a}}var v=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:a,selectValue:u,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,c.o5)(),f=e=>{const n=e.currentTarget,t=s.indexOf(n),o=l[t].value;o!==a&&(p(n),u(o))},g=e=>{let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:c}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,key:n,ref:e=>s.push(e),onKeyDown:g,onClick:f},c,{className:(0,i.Z)("tabs__item",h.tabItem,c?.className,{"tabs__item--active":a===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function C(e){const n=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(y,(0,o.Z)({},e,n)),r.createElement(k,(0,o.Z)({},e,n)))}function S(e){const n=(0,v.Z)();return r.createElement(C,(0,o.Z)({key:String(n)},e))}const w={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(w.tabItem,o),hidden:t},n)}const j={id:"consume-config-updates",title:"Consuming Configuration Updates",sidebar_position:4},P="Consuming Configuration Updates",T={unversionedId:"consume-config-updates",id:"consume-config-updates",title:"Consuming Configuration Updates",description:"protoconf provides a gRPC service that allows your application to subscribe to configuration updates. This service is provided by the protoconf agent, which can run in development mode and listen on 0.0.0.0:4300.",source:"@site/docs/consume-config-updates.mdx",sourceDirName:".",slug:"/consume-config-updates",permalink:"/docs/0.1.7/consume-config-updates",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/consume-config-updates.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"consume-config-updates",title:"Consuming Configuration Updates",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration Validation",permalink:"/docs/0.1.7/validation"},next:{title:"Advanced Usage",permalink:"/docs/0.1.7/category/advanced-usage"}},_={},E=[{value:"protoconf Agent",id:"protoconf-agent",level:2},{value:"Code Generation",id:"code-generation",level:2}],I={toc:E},O="wrapper";function x(e){let{components:n,...t}=e;return(0,a.kt)(O,(0,o.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consuming-configuration-updates"},"Consuming Configuration Updates"),(0,a.kt)("p",null,"protoconf provides a gRPC service that allows your application to subscribe to configuration updates. This service is provided by the protoconf agent, which can run in development mode and listen on ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0:4300"),"."),(0,a.kt)("p",null,"This guide will walk you through how to subscribe to configuration updates using the protoconf agent in various languages: Go, Python, Node.js, Rust, and Java."),(0,a.kt)("h2",{id:"protoconf-agent"},"protoconf Agent"),(0,a.kt)("p",null,"To start the protoconf agent in development mode, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"protoconf agent -dev .\n")),(0,a.kt)("p",null,"The protoconf agent implements the following gRPC service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage v1;\n\noption java_package = "com.protoconf.agent.api.v1";\n\nimport "google/protobuf/any.proto";\n\nmessage ConfigSubscriptionRequest {\n    string path = 1;\n}\n\nmessage ConfigUpdate {\n    google.protobuf.Any value = 1;\n}\n\nservice ProtoconfService{\n    rpc SubscribeForConfig(ConfigSubscriptionRequest) returns (stream ConfigUpdate);\n}\n')),(0,a.kt)("p",null,"You can use it as a dependency from buf: ",(0,a.kt)("inlineCode",{parentName:"p"},"buf.build/protoconf/protoconf"),"."),(0,a.kt)("h2",{id:"code-generation"},"Code Generation"),(0,a.kt)("p",null,"Before consuming the configuration updates, you need to generate code from the proto file. A simple solution for this is using ",(0,a.kt)("inlineCode",{parentName:"p"},"buf"),". Here is the content for ",(0,a.kt)("inlineCode",{parentName:"p"},"buf.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"buf.gen.yaml"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"buf.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1\nname: buf.build/myusername/myrepository\ndeps:\n  - buf.build/protoconf/protoconf\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"buf.gen.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1\nplugins:\n  - name: go\n    out: gen/go\n  - name: java\n    out: gen/java\n  - name: node\n    out: gen/js\n  - name: python\n    out: gen/python\n")),(0,a.kt)("p",null,"With the above configurations, run ",(0,a.kt)("inlineCode",{parentName:"p"},"buf generate")," to generate the code for your protobuf files. Now you can consume the configuration updates in your preferred language."),(0,a.kt)(S,{mdxType:"Tabs"},(0,a.kt)(N,{value:"golang",label:"Go",mdxType:"TabItem"},(0,a.kt)("p",null,"In Go, use the grpc package to create a client and subscribe to configuration updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "log"\n\n    "google.golang.org/grpc"\n    "github.com/golang/protobuf/ptypes"\n    pb "gen/go/protoconf/v1"\n    mypb "gen/go/myproject/v1"\n)\n\nfunc main() {\n    conn, err := grpc.Dial("localhost:4300", grpc.WithInsecure())\n    if err != nil {\n        log.Fatalf("Failed to connect: %v", err)\n    }\n    defer conn.Close()\n\n    client := pb.NewProtoconfServiceClient(conn)\n\n    stream, err := client.SubscribeForConfig(context.Background(), &pb.ConfigSubscriptionRequest{\n        Path: "myproject/server_config",\n    })\n    if err != nil {\n        log.Fatalf("Failed to subscribe for config: %v", err)\n    }\n\n    for {\n        configUpdate, err := stream.Recv()\n        if err != nil {\n            log.Fatalf("Error receiving config update: %v", err)\n        }\n\n        var config mypb.ServerConfiguration\n        if err := ptypes.UnmarshalAny(configUpdate.Value, &config); err != nil {\n            log.Fatalf("Failed to unmarshal config update: %v", err)\n        }\n\n        log.Printf("Received config update: %+v", config)\n    }\n}\n'))),(0,a.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("p",null,"In Python, use the grpc package to create a client and subscribe to configuration updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from google.protobuf import any_pb2\nfrom grpc import insecure_channel\n\nimport protoconf.v1.protoconf_pb2 as pb\nimport myproject.v1.server_config_pb2 as mypb\n\nwith insecure_channel(\'localhost:4300\') as channel:\n    client = pb.ProtoconfServiceStub(channel)\n    request = pb.ConfigSubscriptionRequest(path="myproject/server_config")\n    for config_update in client.SubscribeForConfig(request):\n        config = mypb.ServerConfiguration()\n        if config_update.value.Is(config.DESCRIPTOR):\n            config_update.value.Unpack(config)\n            print(f"Received config update: {config}")\n'))),(0,a.kt)(N,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("p",null,"In Node.js, use the grpc-js package to create a client and subscribe to configuration updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const grpc = require("@grpc/grpc-js");\nconst protoLoader = require("@grpc/proto-loader");\nconst mypb = require("./gen/js/myproject/v1/server_config_pb.js");\n\nconst PROTO_PATH = __dirname + "/gen/js/protoconf/v1/protoconf.proto";\nconst packageDefinition = protoLoader.loadSync(PROTO_PATH, {\n  keepCase: true,\n  longs: String,\n  enums: String,\n  defaults: true,\n  oneofs: true,\n});\n\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\nconst client = new protoDescriptor.v1.ProtoconfService(\n  "localhost:4300",\n  grpc.credentials.createInsecure()\n);\n\nconst call = client.SubscribeForConfig({ path: "myproject/server_config" });\n\ncall.on("data", (configUpdate) => {\n  const config = mypb.ServerConfiguration.deserializeBinary(\n    configUpdate.value.value\n  );\n  console.log(`Received config update: ${JSON.stringify(config.toObject())}`);\n});\n\ncall.on("error", (error) => {\n  console.error(`Error receiving config update: ${error}`);\n});\n\ncall.on("end", () => {\n  console.log("End of config updates");\n});\n'))),(0,a.kt)(N,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)("p",null,"In Rust, use the tonic crate to create a client and subscribe to configuration updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use tonic::transport::Channel;\nuse futures::StreamExt;\nuse prost::Message;\n\nuse protoconf::v1::protoconf_service_client::ProtoconfServiceClient;\nuse protoconf::v1::ConfigSubscriptionRequest;\nuse myproject::v1::ServerConfiguration;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let channel = Channel::from_static("http://localhost:4300").connect().await?;\n    let mut client = ProtoconfServiceClient::new(channel);\n\n    let request = tonic::Request::new(ConfigSubscriptionRequest {\n        path: "myproject/server_config".to_string(),\n    });\n\n    let mut stream = client.subscribe_for_config(request).await?.into_inner();\n\n    while let Some(config_update) = stream.message().await? {\n        let config = ServerConfiguration::decode(config_update.value.value.as_slice())?;\n        println!("Received config update: {:?}", config);\n    }\n\n    Ok(())\n}\n'))),(0,a.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("p",null,"In Java, use the grpc package to create a client and subscribe to configuration updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.grpc.ManagedChannel;\nimport io.grpc.ManagedChannelBuilder;\nimport com.google.protobuf.Any;\nimport com.google.protobuf.InvalidProtocolBufferException;\nimport com.protoconf.agent.api.v1.ProtoconfServiceGrpc;\nimport com.protoconf.agent.api.v1.ConfigUpdate;\nimport com.protoconf.agent.api.v1.ConfigSubscriptionRequest;\nimport myproject.v1.ServerConfiguration;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 4300)\n                .usePlaintext()\n                .build();\n\n        ProtoconfServiceGrpc.ProtoconfServiceBlockingStub stub = ProtoconfServiceGrpc.newBlockingStub(channel);\n\n        stub.subscribeForConfig(ConfigSubscriptionRequest.newBuilder().setPath("myproject/server_config").build())\n                .forEachRemaining(configUpdate -> {\n                    try {\n                        ServerConfiguration config = configUpdate.getValue().unpack(ServerConfiguration.class);\n                        System.out.println("Received config update: " + config);\n                    } catch (InvalidProtocolBufferException e) {\n                        System.err.println("Failed to unpack config update: " + e);\n                    }\n                });\n\n        channel.shutdown();\n    }\n}\n')))),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscribeForConfig")," RPC is used to subscribe for updates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"myproject/server_config")," configuration. The received ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigUpdate")," messages are unpacked into ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerConfiguration")," objects which can then be used by your application."),(0,a.kt)("p",null,"These examples provide a starting point for integrating protoconf into your applications. As you adapt these examples to your specific needs, you may find additional resources on the gRPC, protobuf, and protoconf libraries helpful."))}x.isMDXComponent=!0}}]);
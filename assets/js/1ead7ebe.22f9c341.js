"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[4882],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>v});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(o),g=r,v=u["".concat(p,".").concat(g)]||u[g]||f[g]||a;return o?t.createElement(v,i(i({ref:n},s),{},{components:o})):t.createElement(v,i({ref:n},s))}));function v(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2773:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2},i="Using gRPC",c={unversionedId:"advanced-usage/mutation-service/grpc",id:"advanced-usage/mutation-service/grpc",title:"Using gRPC",description:"1. Go",source:"@site/docs/advanced-usage/mutation-service/grpc.mdx",sourceDirName:"advanced-usage/mutation-service",slug:"/advanced-usage/mutation-service/grpc",permalink:"/docs/0.1.7/advanced-usage/mutation-service/grpc",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/advanced-usage/mutation-service/grpc.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Protoconf Mutation CLI",permalink:"/docs/0.1.7/advanced-usage/mutation-service/mutation-cli"},next:{title:"Using google.protobuf.Any",permalink:"/docs/0.1.7/advanced-usage/protobuf-any"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-grpc"},"Using gRPC"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Go"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "context"\n    protoconf_server "github.com/protoconf/protoconf/server/api/proto/v1"\n    protoconf_value "github.com/protoconf/protoconf/datatypes/proto/v1"\n    server_config "myproject/v1" // replace with your actual import path\n    "google.golang.org/grpc"\n    "google.golang.org/protobuf/types/known/anypb"\n)\n\nfunc main() {\n    cc, err := grpc.Dial(":4301", grpc.WithInsecure())\n    if err != nil {\n        log.Fatalf("failed to connect: %v", err)\n    }\n    defer cc.Close()\n\n    client := protoconf_server.NewProtoconfMutationServiceClient(cc)\n\n    myconfig := &server_config.ServerConfiguration{MaxConnections: 1000, EnableLogging: false}\n    valueToSend, err := anypb.New(myconfig)\n    if err != nil {\n        log.Fatalf("failed to create anypb.New: %v", err)\n    }\n\n    request := &protoconf_server.ConfigMutationRequest{Path: "demo/inputs/server_config", Value: &protoconf_value.ProtoconfValue{ProtoFile: "myproject/v1/server_config.proto", Value:valueToSend}}\n\n    if _, err := client.MutateConfig(context.Background(), request); err != nil {\n        log.Fatalf("failed to call MutateConfig: %v", err)\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Python"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import grpc\nimport server_config_pb2\nimport protoconf_service_v1_pb2\nimport protoconf_service_v1_pb2_grpc\nimport protoconf_value_v1_pb2\nfrom google.protobuf import any_pb2\n\ndef run():\n    with grpc.insecure_channel(\'localhost:4301\') as channel:\n        stub = protoconf_service_v1_pb2_grpc.ProtoconfMutationServiceStub(channel)\n\n        myconfig = server_config_pb2.ServerConfiguration(max_connections=1000, enable_logging=False)\n        value = any_pb2.Any()\n        value.Pack(myconfig)\n        protoconf_value = protoconf_value_v1_pb2.ProtoconfValue(proto_file="myproject/v1/server_config.proto", value=value)\n\n        response = stub.MutateConfig(protoconf_service_v1_pb2.ConfigMutationRequest(path="demo/inputs/server_config", value=protoconf_value))\n        print("Config updated")\n\nif __name__ == \'__main__\':\n    run()\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Node.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const grpc = require("@grpc/grpc-js");\nconst protoLoader = require("@grpc/proto-loader");\nconst serverConfig = require("myproject/v1/server_config_pb.js"); // replace with your actual import path\n\nconst PROTO_PATH = __dirname + "/protoconf_service_v1.proto";\nconst packageDefinition = protoLoader.loadSync(PROTO_PATH, {\n  keepCase: true,\n  longs: String,\n  enums: String,\n  defaults: true,\n  oneofs: true,\n});\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\nconst protoconfService =\n  protoDescriptor.protoconf_service_v1.ProtoconfMutationService;\n\nconst client = new protoconfService(\n  "localhost:4301",\n  grpc.credentials.createInsecure()\n);\n\nconst serverConfiguration = new serverConfig.ServerConfiguration();\nserverConfiguration.setMaxConnections(1000);\nserverConfiguration.setEnableLogging(false);\n\nconst protoconfValue = new protoDescriptor.ProtoconfValue();\nprotoconfValue.setProtoFile("myproject/v1/server_config.proto");\nprotoconfValue.setValue(serverConfiguration);\n\nconst request = new protoDescriptor.ConfigMutationRequest();\nrequest.setPath("demo/inputs/server_config");\nrequest.setValue(protoconfValue);\n\nclient.MutateConfig(request, (err, response) => {\n  if (err) {\n    console.error;\n    console.error("Error: ", err);\n  } else {\n    console.log("Config updated");\n  }\n});\n')),(0,r.kt)("p",null,"Now for the Rust and Java examples."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Rust"))),(0,r.kt)("p",null,"Please note that in Rust, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tonic")," crate for gRPC and ",(0,r.kt)("inlineCode",{parentName:"p"},"prost")," crate for Protocol Buffers. Here's a simplified example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use tonic::transport::Channel;\nuse protoconf::server::api::v1::protoconf_mutation_service_client::ProtoconfMutationServiceClient;\nuse protoconf::server::api::v1::ConfigMutationRequest;\nuse protoconf::datatypes::proto::v1::ProtoconfValue;\nuse myproject::v1::server_config::ServerConfiguration;\nuse prost_types::Any;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let channel = Channel::from_static("http://[::1]:4301")\n        .connect()\n        .await?;\n\n    let mut client = ProtoconfMutationServiceClient::new(channel);\n\n    let myconfig = ServerConfiguration {\n        max_connections: 1000,\n        enable_logging: false,\n        ..Default::default()\n    };\n\n    let value = Any {\n        type_url: "type.googleapis.com/myproject.v1.ServerConfiguration".into(),\n        value: myconfig.encode_to_vec(),\n    };\n\n    let protoconf_value = ProtoconfValue {\n        proto_file: "myproject/v1/server_config.proto".into(),\n        value: Some(value),\n        secrets: vec![],\n    };\n\n    let request = ConfigMutationRequest {\n        path: "demo/inputs/server_config".into(),\n        value: Some(protoconf_value),\n        script_metadata: "".into(),\n    };\n\n    let response = client.mutate_config(request).await?;\n\n    println!("Response: {:?}", response);\n\n    Ok(())\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Java"))),(0,r.kt)("p",null,"In Java, you would use the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc-java")," library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.grpc.ManagedChannel;\nimport io.grpc.ManagedChannelBuilder;\nimport com.protoconf.server.api.v1.ProtoconfMutationServiceGrpc;\nimport com.protoconf.server.api.v1.ConfigMutationRequest;\nimport com.protoconf.datatypes.proto.v1.ProtoconfValue;\nimport com.google.protobuf.Any;\nimport myproject.v1.ServerConfiguration; // replace with your actual import path\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 4301)\n                .usePlaintext()\n                .build();\n\n        ProtoconfMutationServiceGrpc.ProtoconfMutationServiceBlockingStub stub = ProtoconfMutationServiceGrpc.newBlockingStub(channel);\n\n        ServerConfiguration myconfig = ServerConfiguration.newBuilder()\n                .setMaxConnections(1000)\n                .setEnableLogging(false)\n                .build();\n\n        Any any = Any.pack(myconfig);\n\n        ProtoconfValue protoconfValue = ProtoconfValue.newBuilder()\n                .setProtoFile("myproject/v1/server_config.proto")\n                .setValue(any)\n                .build();\n\n        ConfigMutationRequest request = ConfigMutationRequest.newBuilder()\n                .setPath("demo/inputs/server_config")\n                .setValue(protoconfValue)\n                .build();\n\n        stub.mutateConfig(request);\n\n        channel.shutdown();\n    }\n}\n')))}f.isMDXComponent=!0}}]);
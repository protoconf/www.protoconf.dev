"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[8709],{679:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(4848),t=o(5680);const i={sidebar_position:2},c="Using gRPC",a={id:"advanced-usage/mutation-service/grpc",title:"Using gRPC",description:"1. Go",source:"@site/docs/advanced-usage/mutation-service/grpc.mdx",sourceDirName:"advanced-usage/mutation-service",slug:"/advanced-usage/mutation-service/grpc",permalink:"/docs/0.1.7/advanced-usage/mutation-service/grpc",draft:!1,unlisted:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/advanced-usage/mutation-service/grpc.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Protoconf Mutation CLI",permalink:"/docs/0.1.7/advanced-usage/mutation-service/mutation-cli"},next:{title:"Using google.protobuf.Any",permalink:"/docs/0.1.7/advanced-usage/protobuf-any"}},s={},l=[];function p(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.RP)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"using-grpc",children:"Using gRPC"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Go"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t"context"\n\tprotoconf_server "github.com/protoconf/protoconf/server/api/proto/v1"\n\tprotoconf_value "github.com/protoconf/protoconf/datatypes/proto/v1"\n\tserver_config "myproject/v1" // replace with your actual import path\n\t"google.golang.org/grpc"\n  "google.golang.org/grpc/credentials/insecure"\n\t"google.golang.org/protobuf/types/known/anypb"\n)\n\nfunc main() {\n\tcc, err := grpc.Dial(":4301", grpc.WithTransportCredentials(insecure.NewCredentials()))\n\tif err != nil {\n\t\tlog.Fatalf("failed to connect: %v", err)\n\t}\n\tdefer cc.Close()\n\n\tclient := protoconf_server.NewProtoconfMutationServiceClient(cc)\n\n\tmyconfig := &server_config.ServerConfiguration{MaxConnections: 1000, EnableLogging: false}\n\tvalueToSend, err := anypb.New(myconfig)\n\tif err != nil {\n\t\tlog.Fatalf("failed to create anypb.New: %v", err)\n\t}\n\n\trequest := &protoconf_server.ConfigMutationRequest{Path: "demo/inputs/server_config", Value: &protoconf_value.ProtoconfValue{ProtoFile: "myproject/v1/server_config.proto", Value:valueToSend}}\n\n\tif _, err := client.MutateConfig(context.Background(), request); err != nil {\n\t\tlog.Fatalf("failed to call MutateConfig: %v", err)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Python"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'import grpc\nimport server_config_pb2\nimport protoconf_service_v1_pb2\nimport protoconf_service_v1_pb2_grpc\nimport protoconf_value_v1_pb2\nfrom google.protobuf import any_pb2\n\ndef run():\n    with grpc.insecure_channel(\'localhost:4301\') as channel:\n        stub = protoconf_service_v1_pb2_grpc.ProtoconfMutationServiceStub(channel)\n\n        myconfig = server_config_pb2.ServerConfiguration(max_connections=1000, enable_logging=False)\n        value = any_pb2.Any()\n        value.Pack(myconfig)\n        protoconf_value = protoconf_value_v1_pb2.ProtoconfValue(proto_file="myproject/v1/server_config.proto", value=value)\n\n        response = stub.MutateConfig(protoconf_service_v1_pb2.ConfigMutationRequest(path="demo/inputs/server_config", value=protoconf_value))\n        print("Config updated")\n\nif __name__ == \'__main__\':\n    run()\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Node.js"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'const grpc = require("@grpc/grpc-js");\nconst protoLoader = require("@grpc/proto-loader");\nconst serverConfig = require("myproject/v1/server_config_pb.js"); // replace with your actual import path\n\nconst PROTO_PATH = __dirname + "/protoconf_service_v1.proto";\nconst packageDefinition = protoLoader.loadSync(PROTO_PATH, {\n  keepCase: true,\n  longs: String,\n  enums: String,\n  defaults: true,\n  oneofs: true,\n});\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\nconst protoconfService =\n  protoDescriptor.protoconf_service_v1.ProtoconfMutationService;\n\nconst client = new protoconfService(\n  "localhost:4301",\n  grpc.credentials.createInsecure()\n);\n\nconst serverConfiguration = new serverConfig.ServerConfiguration();\nserverConfiguration.setMaxConnections(1000);\nserverConfiguration.setEnableLogging(false);\n\nconst protoconfValue = new protoDescriptor.ProtoconfValue();\nprotoconfValue.setProtoFile("myproject/v1/server_config.proto");\nprotoconfValue.setValue(serverConfiguration);\n\nconst request = new protoDescriptor.ConfigMutationRequest();\nrequest.setPath("demo/inputs/server_config");\nrequest.setValue(protoconfValue);\n\nclient.MutateConfig(request, (err, response) => {\n  if (err) {\n    console.error;\n    console.error("Error: ", err);\n  } else {\n    console.log("Config updated");\n  }\n});\n'})}),"\n",(0,r.jsx)(e.p,{children:"Now for the Rust and Java examples."}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Rust"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Please note that in Rust, you need to use the ",(0,r.jsx)(e.code,{children:"tonic"})," crate for gRPC and ",(0,r.jsx)(e.code,{children:"prost"})," crate for Protocol Buffers. Here's a simplified example:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use tonic::transport::Channel;\nuse protoconf::server::api::v1::protoconf_mutation_service_client::ProtoconfMutationServiceClient;\nuse protoconf::server::api::v1::ConfigMutationRequest;\nuse protoconf::datatypes::proto::v1::ProtoconfValue;\nuse myproject::v1::server_config::ServerConfiguration;\nuse prost_types::Any;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let channel = Channel::from_static("http://[::1]:4301")\n        .connect()\n        .await?;\n\n    let mut client = ProtoconfMutationServiceClient::new(channel);\n\n    let myconfig = ServerConfiguration {\n        max_connections: 1000,\n        enable_logging: false,\n        ..Default::default()\n    };\n\n    let value = Any {\n        type_url: "type.googleapis.com/myproject.v1.ServerConfiguration".into(),\n        value: myconfig.encode_to_vec(),\n    };\n\n    let protoconf_value = ProtoconfValue {\n        proto_file: "myproject/v1/server_config.proto".into(),\n        value: Some(value),\n        secrets: vec![],\n    };\n\n    let request = ConfigMutationRequest {\n        path: "demo/inputs/server_config".into(),\n        value: Some(protoconf_value),\n        script_metadata: "".into(),\n    };\n\n    let response = client.mutate_config(request).await?;\n\n    println!("Response: {:?}", response);\n\n    Ok(())\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Java"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["In Java, you would use the ",(0,r.jsx)(e.code,{children:"grpc-java"})," library:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'import io.grpc.ManagedChannel;\nimport io.grpc.ManagedChannelBuilder;\nimport com.protoconf.server.api.v1.ProtoconfMutationServiceGrpc;\nimport com.protoconf.server.api.v1.ConfigMutationRequest;\nimport com.protoconf.datatypes.proto.v1.ProtoconfValue;\nimport com.google.protobuf.Any;\nimport myproject.v1.ServerConfiguration; // replace with your actual import path\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 4301)\n                .usePlaintext()\n                .build();\n\n        ProtoconfMutationServiceGrpc.ProtoconfMutationServiceBlockingStub stub = ProtoconfMutationServiceGrpc.newBlockingStub(channel);\n\n        ServerConfiguration myconfig = ServerConfiguration.newBuilder()\n                .setMaxConnections(1000)\n                .setEnableLogging(false)\n                .build();\n\n        Any any = Any.pack(myconfig);\n\n        ProtoconfValue protoconfValue = ProtoconfValue.newBuilder()\n                .setProtoFile("myproject/v1/server_config.proto")\n                .setValue(any)\n                .build();\n\n        ConfigMutationRequest request = ConfigMutationRequest.newBuilder()\n                .setPath("demo/inputs/server_config")\n                .setValue(protoconfValue)\n                .build();\n\n        stub.mutateConfig(request);\n\n        channel.shutdown();\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.RP)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},5680:(n,e,o)=>{o.d(e,{RP:()=>l});var r=o(6540);function t(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,r)}return o}function c(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function a(n,e){if(null==n)return{};var o,r,t=function(n,e){if(null==n)return{};var o,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var s=r.createContext({}),l=function(n){var e=r.useContext(s),o=e;return n&&(o="function"==typeof n?n(e):c(c({},e),n)),o},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var o=n.components,t=n.mdxType,i=n.originalType,s=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),f=l(o),g=t,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return o?r.createElement(d,c(c({ref:e},u),{},{components:o})):r.createElement(d,c({ref:e},u))}));u.displayName="MDXCreateElement"}}]);
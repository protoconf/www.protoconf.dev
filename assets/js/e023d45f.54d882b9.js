"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[3661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),y=o,m=c["".concat(p,".").concat(y)]||c[y]||d[y]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Using google.protobuf.Any",s={unversionedId:"advanced-usage/protobuf-any",id:"advanced-usage/protobuf-any",title:"Using google.protobuf.Any",description:"The google.protobuf.Any type is a powerful feature in Protocol Buffers that allows you to store arbitrary messages in your protobufs. It works by wrapping the message and embedding the name of the message's type. This allows the actual type of the embedded message to be discovered and the message to be correctly deserialized at runtime.",source:"@site/docs/advanced-usage/protobuf-any.mdx",sourceDirName:"advanced-usage",slug:"/advanced-usage/protobuf-any",permalink:"/docs/advanced-usage/protobuf-any",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/advanced-usage/protobuf-any.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using gRPC",permalink:"/docs/advanced-usage/mutation-service/grpc"},next:{title:"Standard Libraries",permalink:"/docs/advanced-usage/starlib"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-googleprotobufany"},"Using google.protobuf.Any"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"google.protobuf.Any")," type is a powerful feature in Protocol Buffers that allows you to store arbitrary messages in your protobufs. It works by wrapping the message and embedding the name of the message's type. This allows the actual type of the embedded message to be discovered and the message to be correctly deserialized at runtime."),(0,o.kt)("p",null,"In Protocol Buffers, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," type in your message definitions like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'import "google/protobuf/any.proto";\n\nmessage MyMessage {\n  google.protobuf.Any data = 1;\n}\n')),(0,o.kt)("p",null,"You can then store any kind of message in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field. When you serialize ",(0,o.kt)("inlineCode",{parentName:"p"},"MyMessage"),", Protocol Buffers will also serialize the embedded message and store its type name alongside it. When you later deserialize ",(0,o.kt)("inlineCode",{parentName:"p"},"MyMessage"),", you can discover the type of the embedded message by inspecting the type name, and then deserialize the embedded message as that type."),(0,o.kt)("p",null,"In Protoconf Starlark code, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," type with the help of the ",(0,o.kt)("inlineCode",{parentName:"p"},"any.star")," module. First, you have to load the module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'load("any.star", "any")\n')),(0,o.kt)("p",null,"Then, you can pack any message into an ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"myconfig = ServerConfiguration()\nmyany = any.pack(myconfig)\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"myconfig")," is an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerConfiguration")," message. The ",(0,o.kt)("inlineCode",{parentName:"p"},"any.pack()")," function takes this message and wraps it in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," type. You can then use ",(0,o.kt)("inlineCode",{parentName:"p"},"myany")," in your Protoconf code as a standard message."),(0,o.kt)("p",null,"It's important to note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," type is a powerful tool for creating flexible APIs and configuration schemas, but it also comes with its complexities. The main complexity is that you must know the type of the embedded message to correctly unpack it. Therefore, you should be cautious when using ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," and ensure that the type information is always available when needed."))}d.isMDXComponent=!0}}]);
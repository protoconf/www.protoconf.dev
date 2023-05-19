"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[7805],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={id:"code-reuse",title:"Code Reuse",sidebar_position:1},i=void 0,s={unversionedId:"advanced-usage/code-reuse",id:"advanced-usage/code-reuse",title:"Code Reuse",description:"Reusing Functions and Variables Across Files",source:"@site/docs/advanced-usage/code-reuse.mdx",sourceDirName:"advanced-usage",slug:"/advanced-usage/code-reuse",permalink:"/docs/0.1.7/advanced-usage/code-reuse",draft:!1,editUrl:"https://github.com/protoconf/protoconf/tree/main/website/protoconf/docs/advanced-usage/code-reuse.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"code-reuse",title:"Code Reuse",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/0.1.7/category/advanced-usage"},next:{title:"Multiple Outputs",permalink:"/docs/0.1.7/advanced-usage/multiple-outputs"}},c={},l=[{value:"Reusing Functions and Variables Across Files",id:"reusing-functions-and-variables-across-files",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reusing-functions-and-variables-across-files"},"Reusing Functions and Variables Across Files"),(0,a.kt)("p",null,"In addition to defining helper functions within a single starlark file, protoconf also allows you to define functions and global variables in separate starlark files with the ",(0,a.kt)("inlineCode",{parentName:"p"},".pinc")," extension. You can then load these functions and variables into your other starlark files."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./src/myproject/helpers.pinc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'load("//myproject/v1/server_config.proto", "ServerConfiguration")\n\n# A global variable\ndefault_request_timeout = Duration(seconds=10)\n\n# A helper function\ndef create_default_config():\n    return ServerConfiguration(\n        max_connections=500,\n        request_timeout=default_request_timeout,\n        is_debug_enabled=True,\n        server_rating=4.8,\n    )\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./src/myproject/server_config.pconf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'load("//myproject/helpers.pinc", "create_default_config", "default_request_timeout")\n\ndef main():\n    config = create_default_config()\n    config.request_timeout = Duration(seconds=5)  # Override default_request_timeout for this config\n    return config\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"helpers.pinc")," file defines a global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"default_request_timeout")," and a helper function ",(0,a.kt)("inlineCode",{parentName:"p"},"create_default_config"),". These are then loaded into ",(0,a.kt)("inlineCode",{parentName:"p"},"server_config.pconf")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," function, allowing you to reuse the same variable and function across multiple configuration files."),(0,a.kt)("p",null,"This technique can help keep your configuration code DRY (Don't Repeat Yourself), making it easier to understand and maintain."))}d.isMDXComponent=!0}}]);
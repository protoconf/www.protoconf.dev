"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[3062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Standard Libraries",i={unversionedId:"advanced-usage/starlib",id:"advanced-usage/starlib",title:"Standard Libraries",description:"Starlib is a collection of modules for Starlark, the Python-like language used in Protoconf, Bazel, and other tools. These modules provide a standard library of useful functions that can be used in your Protoconf scripts.",source:"@site/docs/advanced-usage/starlib.mdx",sourceDirName:"advanced-usage",slug:"/advanced-usage/starlib",permalink:"/docs/advanced-usage/starlib",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced-usage/starlib.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using google.protobuf.Any",permalink:"/docs/advanced-usage/protobuf-any"},next:{title:"Production Architecture",permalink:"/docs/production/production-architecture"}},s={},u=[{value:"Math Module",id:"math-module",level:2},{value:"Time Module",id:"time-module",level:2},{value:"JSON Module",id:"json-module",level:2},{value:"RE Module",id:"re-module",level:2},{value:"YAML Module",id:"yaml-module",level:2},{value:"Hashlib Module",id:"hashlib-module",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standard-libraries"},"Standard Libraries"),(0,r.kt)("p",null,"Starlib is a collection of modules for Starlark, the Python-like language used in Protoconf, Bazel, and other tools. These modules provide a standard library of useful functions that can be used in your Protoconf scripts."),(0,r.kt)("h2",{id:"math-module"},"Math Module"),(0,r.kt)("p",null,"This module provides mathematical constants and functions."),(0,r.kt)("p",null,"First, import the math module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("math.star", "math")\n')),(0,r.kt)("p",null,"Then you can use various math functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(math.pi)  # Prints the value of pi\nprint(math.sqrt(16))  # Prints the square root of 16, which is 4\n")),(0,r.kt)("h2",{id:"time-module"},"Time Module"),(0,r.kt)("p",null,"This module provides time operations."),(0,r.kt)("p",null,"First, import the time module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("time.star", "time")\n')),(0,r.kt)("p",null,"Then you can use various time functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(time.now())  # Prints the current date and time\nprint(time.parse("2006-01-02", "2023-05-16"))  # Parses a time string and returns a time object\n')),(0,r.kt)("h2",{id:"json-module"},"JSON Module"),(0,r.kt)("p",null,"This module provides functions to work with JSON data."),(0,r.kt)("p",null,"First, import the json module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("encoding/json.star", "json")\n')),(0,r.kt)("p",null,"Then you can use various json functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(json.dumps({"name": "John", "age": 30}))  # Converts a dict to a JSON string\nprint(json.loads(\'{"name": "John", "age": 30}\'))  # Converts a JSON string to a dict\n')),(0,r.kt)("h2",{id:"re-module"},"RE Module"),(0,r.kt)("p",null,"This module provides regular expression functions."),(0,r.kt)("p",null,"First, import the re module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("re.star", "re")\n')),(0,r.kt)("p",null,"Then you can use various regular expression functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pattern = re.compile(r"\\d+")\nmatches = pattern.findall("Hello 1234 World 5678")\nprint(matches)  # Prints ["1234", "5678"]\n')),(0,r.kt)("h2",{id:"yaml-module"},"YAML Module"),(0,r.kt)("p",null,"This module provides functions to work with YAML data."),(0,r.kt)("p",null,"First, import the yaml module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("encoding/yaml.star", "yaml")\n')),(0,r.kt)("p",null,"Then you can use various yaml functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(yaml.encode({"name": "John", "age": 30}))  # Converts a dict to a YAML string\nprint(yaml.decode(\'name: John\\nage: 30\\n\'))  # Converts a YAML string to a dict\n')),(0,r.kt)("h2",{id:"hashlib-module"},"Hashlib Module"),(0,r.kt)("p",null,"This module provides functions to work with hashing."),(0,r.kt)("p",null,"First, import the hashlib module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'load("hashlib.star", "hashlib")\n')),(0,r.kt)("p",null,"Then you can use various hashlib functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(hashlib.sha256("Hello World"))  # Prints the SHA256 hash of "Hello World"\n')))}c.isMDXComponent=!0}}]);
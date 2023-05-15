"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[2],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>u});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=t.createContext({}),l=function(e){var r=t.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(m.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,u=c["".concat(m,".").concat(f)]||c[f]||d[f]||a;return n?t.createElement(u,s(s({ref:r},p),{},{components:n})):t.createElement(u,s({ref:r},p))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4870:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const a={},s="Protoconf integration with Terraform",i={unversionedId:"integrations/terraform",id:"integrations/terraform",title:"Protoconf integration with Terraform",description:"Prerequists",source:"@site/docs/integrations/terraform.md",sourceDirName:"integrations",slug:"/integrations/terraform",permalink:"/docs/integrations/terraform",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integrations/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/docs/category/integrations"},next:{title:"Protoconf integration with Terraform for managing Kubernetes resources",permalink:"/docs/integrations/terraform_kubernetes"}},m={},l=[{value:"Prerequists",id:"prerequists",level:3},{value:"Prepare",id:"prepare",level:3},{value:"Initialize Terraform",id:"initialize-terraform",level:3},{value:"Generate the terraform protos",id:"generate-the-terraform-protos",level:3},{value:"Create a <code>.tf.pconf</code> file",id:"create-a-tfpconf-file",level:3},{value:"compile the config",id:"compile-the-config",level:3},{value:"prepare to run terraform",id:"prepare-to-run-terraform",level:3}],p={toc:l},c="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(c,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protoconf-integration-with-terraform"},"Protoconf integration with Terraform"),(0,o.kt)("h3",{id:"prerequists"},"Prerequists"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform")," binray in your ",(0,o.kt)("inlineCode",{parentName:"li"},"$PATH")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"protoconf")," binary in your ",(0,o.kt)("inlineCode",{parentName:"li"},"$PATH"))),(0,o.kt)("h3",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"providers.tf")," file containing the providers declarations you need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "random" {}\nprovider "tls" {}\n')),(0,o.kt)("h3",{id:"initialize-terraform"},"Initialize Terraform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ terraform init\n")),(0,o.kt)("h3",{id:"generate-the-terraform-protos"},"Generate the terraform protos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoconf import terraform\n")),(0,o.kt)("p",null,"Validate the outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ find src/terraform\nsrc/terraform\nsrc/terraform/v1\nsrc/terraform/v1/terraform.proto\nsrc/terraform/v1/meta.proto\nsrc/terraform/tls\nsrc/terraform/tls/datasources\nsrc/terraform/tls/datasources/v3\nsrc/terraform/tls/datasources/v3/public.proto\nsrc/terraform/tls/datasources/v3/certificate.proto\nsrc/terraform/tls/resources\nsrc/terraform/tls/resources/v3\nsrc/terraform/tls/resources/v3/private.proto\nsrc/terraform/tls/resources/v3/self.proto\nsrc/terraform/tls/resources/v3/cert.proto\nsrc/terraform/tls/resources/v3/locally.proto\nsrc/terraform/tls/provider\nsrc/terraform/tls/provider/v3\nsrc/terraform/tls/provider/v3/tls.proto\nsrc/terraform/random\nsrc/terraform/random/resources\nsrc/terraform/random/resources/v3\nsrc/terraform/random/resources/v3/password.proto\nsrc/terraform/random/resources/v3/integer.proto\nsrc/terraform/random/resources/v3/string.proto\nsrc/terraform/random/resources/v3/pet.proto\nsrc/terraform/random/resources/v3/shuffle.proto\nsrc/terraform/random/resources/v3/id.proto\nsrc/terraform/random/resources/v3/uuid.proto\nsrc/terraform/random/provider\nsrc/terraform/random/provider/v3\nsrc/terraform/random/provider/v3/random.proto\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src/terraform/terraform.proto")," should looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage terraform.v1;\n\nimport "terraform/random/provider/v3/random.proto";\n\nimport "terraform/random/resources/v3/id.proto";\n\nimport "terraform/random/resources/v3/integer.proto";\n\nimport "terraform/random/resources/v3/password.proto";\n\nimport "terraform/random/resources/v3/pet.proto";\n\nimport "terraform/random/resources/v3/shuffle.proto";\n\nimport "terraform/random/resources/v3/string.proto";\n\nimport "terraform/random/resources/v3/uuid.proto";\n\nimport "terraform/tls/datasources/v3/certificate.proto";\n\nimport "terraform/tls/datasources/v3/public.proto";\n\nimport "terraform/tls/provider/v3/tls.proto";\n\nimport "terraform/tls/resources/v3/cert.proto";\n\nimport "terraform/tls/resources/v3/locally.proto";\n\nimport "terraform/tls/resources/v3/private.proto";\n\nimport "terraform/tls/resources/v3/self.proto";\n\nmessage Terraform {\n  Resources resource = 1;\n\n  Datasources data = 2;\n\n  Providers provider = 3;\n\n  map<string, Variable> variable = 4;\n\n  map<string, Output> output = 5;\n\n  map<string, string> locals = 6;\n\n  Module module = 7;\n\n  TerraformSettings terraform = 8;\n\n  message Resources {\n    map<string, terraform.random.resources.v3.RandomId> random_id = 1 [json_name = "random_id"];\n\n    map<string, terraform.random.resources.v3.RandomInteger> random_integer = 2 [json_name = "random_integer"];\n\n    map<string, terraform.random.resources.v3.RandomPassword> random_password = 3 [json_name = "random_password"];\n\n    map<string, terraform.random.resources.v3.RandomPet> random_pet = 4 [json_name = "random_pet"];\n\n    map<string, terraform.random.resources.v3.RandomShuffle> random_shuffle = 5 [json_name = "random_shuffle"];\n\n    map<string, terraform.random.resources.v3.RandomString> random_string = 6 [json_name = "random_string"];\n\n    map<string, terraform.random.resources.v3.RandomUuid> random_uuid = 7 [json_name = "random_uuid"];\n\n    map<string, terraform.tls.resources.v3.TlsCertRequest> tls_cert_request = 8 [json_name = "tls_cert_request"];\n\n    map<string, terraform.tls.resources.v3.TlsLocallySignedCert> tls_locally_signed_cert = 9 [json_name = "tls_locally_signed_cert"];\n\n    map<string, terraform.tls.resources.v3.TlsPrivateKey> tls_private_key = 10 [json_name = "tls_private_key"];\n\n    map<string, terraform.tls.resources.v3.TlsSelfSignedCert> tls_self_signed_cert = 11 [json_name = "tls_self_signed_cert"];\n  }\n\n  message Datasources {\n    map<string, terraform.tls.datasources.v3.TlsCertificate> tls_certificate = 1 [json_name = "tls_certificate"];\n\n    map<string, terraform.tls.datasources.v3.TlsPublicKey> tls_public_key = 2 [json_name = "tls_public_key"];\n  }\n\n  message Providers {\n    repeated terraform.random.provider.v3.Random random = 1;\n\n    repeated terraform.tls.provider.v3.Tls tls = 2;\n  }\n\n  message Variable {\n    string type = 1;\n\n    string description = 2;\n\n    string default = 3;\n  }\n\n  message Output {\n    string value = 1;\n  }\n\n  message Module {\n  }\n\n  message TerraformSettings {\n    string required_version = 1 [json_name = "required_version"];\n\n    map<string, Provider> required_providers = 2 [json_name = "required_providers"];\n\n    Backend backend = 3;\n\n    message Provider {\n      string source = 1;\n\n      string version = 2;\n    }\n\n    message Backend {\n      oneof config {\n        BackendLocal local = 1;\n\n        BackendRemote remote = 2;\n\n        BackendS3 s3 = 3;\n      }\n\n      message BackendLocal {\n        string path = 1;\n\n        string workspace_dir = 2 [json_name = "workspace_dir"];\n      }\n\n      message BackendRemote {\n        //(Optional) The remote backend hostname to connect to. Defaults to app.terraform.io.\n        string hostname = 1;\n\n        //(Required) The name of the organization containing the targeted workspace(s).\n        string organization = 2;\n\n        //(Optional) The token used to authenticate with the remote backend. We recommend omitting the token from the configuration, and instead using `terraform login` or manually configuring `credentials` in the CLI config file.\n        string token = 3;\n\n        //(Required) A block specifying which remote workspace(s) to use. The workspaces block supports the following keys\n        Workspace workspaces = 4;\n\n        message Workspace {\n          //(Optional) The full name of one remote workspace. When configured, only the default workspace can be used. This option conflicts with prefix.\n          string name = 1;\n\n          //(Optional) A prefix used in the names of one or more remote workspaces, all of which can be used with this configuration. The full workspace names are used in Terraform Cloud, and the short names (minus the prefix) are used on the command line for Terraform CLI workspaces. If omitted, only the default workspace can be used. This option conflicts with name.\n          string prefix = 2;\n        }\n      }\n\n      message BackendS3 {\n        string region = 1;\n\n        string access_key = 2 [json_name = "access_key"];\n\n        string secret_key = 3 [json_name = "secret_key"];\n\n        string iam_endpoint = 4 [json_name = "iam_endpoint"];\n\n        string max_retries = 5 [json_name = "max_retries"];\n\n        string profile = 6;\n\n        string shared_credentials_file = 7 [json_name = "shared_credentials_file"];\n\n        string skip_credentials_validation = 8 [json_name = "skip_credentials_validation"];\n\n        string skip_region_validation = 9 [json_name = "skip_region_validation"];\n\n        string skip_metadata_api_check = 10 [json_name = "skip_metadata_api_check"];\n\n        string sts_endpoint = 11 [json_name = "sts_endpoint"];\n\n        string token = 12;\n\n        string assume_role_duration_seconds = 13 [json_name = "assume_role_duration_seconds"];\n\n        string assume_role_policy = 14 [json_name = "assume_role_policy"];\n\n        string assume_role_policy_arns = 15 [json_name = "assume_role_policy_arns"];\n\n        string assume_role_tags = 16 [json_name = "assume_role_tags"];\n\n        string assume_role_transitive_tag_keys = 17 [json_name = "assume_role_transitive_tag_keys"];\n\n        string external_id = 18 [json_name = "external_id"];\n\n        string role_arn = 19 [json_name = "role_arn"];\n\n        string session_name = 20 [json_name = "session_name"];\n\n        string bucket = 21;\n\n        string key = 22;\n\n        string acl = 23;\n\n        string encrypt = 24;\n\n        string endpoint = 25;\n\n        string force_path_style = 26 [json_name = "force_path_style"];\n\n        string kms_key_id = 27 [json_name = "kms_key_id"];\n\n        string sse_customer_key = 28 [json_name = "sse_customer_key"];\n\n        string workspace_key_prefix = 29 [json_name = "workspace_key_prefix"];\n\n        string dynamodb_endpoint = 30 [json_name = "dynamodb_endpoint"];\n\n        string dynamodb_table = 31 [json_name = "dynamodb_table"];\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"create-a-tfpconf-file"},"Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},".tf.pconf")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# vim: filetype=python\n# ./src/tfdemo/tfdemo.tf.pconf\nload("//terraform/v1/terraform.proto", "Terraform")\nload("//terraform/random/provider/v3/random.proto", "Random")\nload("//terraform/random/resources/v3/pet.proto", "RandomPet")\n\ntf = Terraform(\n    provider=Terraform.Providers(random=[Random()]),\n    resource=Terraform.Resources(),\n    output={},\n)\n\ntf.resource.random_pet["my_dog_name"] = RandomPet()\ntf.output["my_dog_name"] = Terraform.Output(value="${random_pet.my_dog_name.id}")\n\n\ndef main():\n    return tf\n')),(0,o.kt)("h3",{id:"compile-the-config"},"compile the config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoconf compile .\n")),(0,o.kt)("p",null,"Check the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat materialized_config/tfdemo/tfdemo.tf.materialized_JSON\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protoFile": "terraform/terraform.proto",\n  "value": {\n    "@type": "type.googleapis.com/terraform.Terraform",\n    "output": {\n      "my_dog_name": {\n        "value": "${random_pet.my_dog_name.id}"\n      }\n    },\n    "provider": {\n      "random": [{}]\n    },\n    "resource": {\n      "random_pet": {\n        "my_dog_name": {}\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"prepare-to-run-terraform"},"prepare to run terraform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir tf\n$ cat materialized_config/tfdemo/tfdemo.tf.materialized_JSON | jq '.value | del(.[\"@type\"])' > tf/test.tf.json\n$ terraform -chdir=tf init\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ terraform -chdir=tf plan\n\nAn execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # random_pet.my_dog_name will be created\n  + resource "random_pet" "my_dog_name" {\n      + id        = (known after apply)\n      + length    = 2\n      + separator = "-"\n    }\n\nPlan: 1 to add, 0 to change, 0 to destroy.\n\nChanges to Outputs:\n  + my_dog_name = (known after apply)\n\n------------------------------------------------------------------------\n\nNote: You didn\'t specify an "-out" parameter to save this plan, so Terraform\ncan\'t guarantee that exactly these actions will be performed if\n"terraform apply" is subsequently run.\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ terraform -chdir=tf apply -auto-approve\nrandom_pet.my_dog_name: Creating...\nrandom_pet.my_dog_name: Creation complete after 0s [id=key-zebra]\n\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nmy_dog_name = "key-zebra"\n')))}d.isMDXComponent=!0}}]);
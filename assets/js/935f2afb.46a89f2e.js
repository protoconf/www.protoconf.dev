"use strict";(self.webpackChunkprotoconf=self.webpackChunkprotoconf||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"link","label":"Configuration Validation","href":"/docs/validation","docId":"validation"},{"type":"link","label":"Consuming Configuration Updates","href":"/docs/consume-config-updates","docId":"consume-config-updates"},{"type":"category","label":"Advanced Usage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Code Reuse","href":"/docs/advanced-usage/code-reuse","docId":"advanced-usage/code-reuse"},{"type":"link","label":"Multiple Outputs","href":"/docs/advanced-usage/multiple-outputs","docId":"advanced-usage/multiple-outputs"},{"type":"link","label":"Pipelining","href":"/docs/advanced-usage/pipelining","docId":"advanced-usage/pipelining"},{"type":"link","label":"Generating YAML, JSON and TOML","href":"/docs/advanced-usage/output-formats","docId":"advanced-usage/output-formats"},{"type":"category","label":"Protoconf Mutation Service","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Protoconf Mutation CLI","href":"/docs/advanced-usage/mutation-service/mutation-cli","docId":"advanced-usage/mutation-service/mutation-cli"},{"type":"link","label":"Using gRPC","href":"/docs/advanced-usage/mutation-service/grpc","docId":"advanced-usage/mutation-service/grpc"}],"href":"/docs/advanced-usage/mutation-service/"},{"type":"link","label":"Using google.protobuf.Any","href":"/docs/advanced-usage/protobuf-any","docId":"advanced-usage/protobuf-any"},{"type":"link","label":"Standard Libraries","href":"/docs/advanced-usage/starlib","docId":"advanced-usage/starlib"}],"href":"/docs/category/advanced-usage"},{"type":"category","label":"Running in Production","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Production Architecture","href":"/docs/production/production-architecture","docId":"production/production-architecture"},{"type":"link","label":"Inserting Configurations","href":"/docs/production/inserting-configurations","docId":"production/inserting-configurations"},{"type":"link","label":"Running the protoconf agent","href":"/docs/production/running-in-production","docId":"production/running-in-production"}]},{"type":"category","label":"Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Terraform","href":"/docs/integrations/terraform","docId":"integrations/terraform"}],"href":"/docs/category/integrations"},{"type":"category","label":"Use Cases","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Employee Directory as Code","href":"/docs/use-cases/employee-directory","docId":"use-cases/employee-directory"},{"type":"link","label":"Protoconf for Platform Engineering","href":"/docs/use-cases/platform-engineering","docId":"use-cases/platform-engineering"}],"href":"/docs/category/use-cases"}]},"docs":{"advanced-usage/code-reuse":{"id":"advanced-usage/code-reuse","title":"Code Reuse","description":"Reusing Functions and Variables Across Files","sidebar":"tutorialSidebar"},"advanced-usage/multiple-outputs":{"id":"advanced-usage/multiple-outputs","title":"Multiple Outputs","description":"Generating Multiple Config Outputs","sidebar":"tutorialSidebar"},"advanced-usage/mutation-service/grpc":{"id":"advanced-usage/mutation-service/grpc","title":"Using gRPC","description":"1. Go","sidebar":"tutorialSidebar"},"advanced-usage/mutation-service/mutation-cli":{"id":"advanced-usage/mutation-service/mutation-cli","title":"Protoconf Mutation CLI","description":"The protoconf mutate command is a CLI utility that simplifies communication with the mutation server.","sidebar":"tutorialSidebar"},"advanced-usage/mutation-service/mutation-service":{"id":"advanced-usage/mutation-service/mutation-service","title":"Protoconf Mutation Service","description":"Protoconf offers an RPC service for programmatically mutating configurations, which is particularly useful for applications that need to adjust configurations dynamically.","sidebar":"tutorialSidebar"},"advanced-usage/output-formats":{"id":"advanced-usage/output-formats","title":"Generating YAML, JSON and TOML","description":"Protoconf has built-in support for generating YAML, JSON, and TOML configurations. This allows you to use Protoconf in environments that expect configurations in these formats, and to take advantage of the different strengths of each format.","sidebar":"tutorialSidebar"},"advanced-usage/pipelining":{"id":"advanced-usage/pipelining","title":"Pipelining","description":"Implementing Config Manipulation Pipelining","sidebar":"tutorialSidebar"},"advanced-usage/protobuf-any":{"id":"advanced-usage/protobuf-any","title":"Using google.protobuf.Any","description":"The google.protobuf.Any type is a powerful feature in Protocol Buffers that allows you to store arbitrary messages in your protobufs. It works by wrapping the message and embedding the name of the message\'s type. This allows the actual type of the embedded message to be discovered and the message to be correctly deserialized at runtime.","sidebar":"tutorialSidebar"},"advanced-usage/starlib":{"id":"advanced-usage/starlib","title":"Standard Libraries","description":"Starlib is a collection of modules for Starlark, the Python-like language used in Protoconf, Bazel, and other tools. These modules provide a standard library of useful functions that can be used in your Protoconf scripts.","sidebar":"tutorialSidebar"},"consume-config-updates":{"id":"consume-config-updates","title":"Consuming Configuration Updates","description":"protoconf provides a gRPC service that allows your application to subscribe to configuration updates. This service is provided by the protoconf agent, which can run in development mode and listen on 0.0.0.0:4300.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"This guide will walk you through the installation of protoconf, creating a basic configuration, and running the protoconf compiler to generate the final configuration.","sidebar":"tutorialSidebar"},"integrations/terraform":{"id":"integrations/terraform","title":"Terraform","description":"Installation and Initialization","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"protoconf is a configuration service based on Google\'s Protocol Buffers (Protobuf). It provides a structured, robust, and scalable solution for managing configurations across different services in a microservices environment.","sidebar":"tutorialSidebar"},"production/inserting-configurations":{"id":"production/inserting-configurations","title":"Inserting Configurations","description":"Once you have your configurations defined and validated, you can insert them into your key-value store using the protoconf insert command. This command enables protoconf to manage your configurations in a distributed manner, making them available to your applications wherever they are running.","sidebar":"tutorialSidebar"},"production/production-architecture":{"id":"production/production-architecture","title":"Production Architecture","description":"The production architecture of protoconf involves several components working together to provide dynamic, event-driven configuration management. This architecture is designed to support high availability, scalability, and real-time updates.","sidebar":"tutorialSidebar"},"production/running-in-production":{"id":"production/running-in-production","title":"Running the protoconf agent","description":"Running protoconf in a production environment requires careful consideration to ensure reliability, security, and ease of maintenance. This guide provides some best practices and recommendations for running protoconf in production.","sidebar":"tutorialSidebar"},"use-cases/employee-directory":{"id":"use-cases/employee-directory","title":"Employee Directory as Code","description":"Use Case: Centralized Employee Management","sidebar":"tutorialSidebar"},"use-cases/platform-engineering":{"id":"use-cases/platform-engineering","title":"Protoconf for Platform Engineering","description":"One of the challenges of platform engineering is coordinating between different stakeholders, each with their own concerns and requirements. Protoconf can help streamline this process by serving as a single source of truth that all stakeholders can agree upon.","sidebar":"tutorialSidebar"},"validation":{"id":"validation","title":"Configuration Validation","description":"protoconf provides a way to add validation rules to your configuration. These rules allow you to ensure that the configuration values meet certain criteria before they are used by your application. Validation rules are written in separate Starlark files with the -validator suffix, and they are associated with your configuration using the add_validator function.","sidebar":"tutorialSidebar"}}}')}}]);
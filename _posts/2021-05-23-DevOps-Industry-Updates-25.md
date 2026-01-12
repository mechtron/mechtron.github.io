---
layout: post
title: "DevOps Industry Updates #25"
permalink: /devops-industry-updates-25/
---

25 issues just like that! What started as an update segment at [my Meetup](https://corey.tech/wlad/){:target="_blank"} has turned into something bigger. Thanks to all my loyal readers out there, I've heard you loud and clear: you love the rich technical content and lack of vendor spam. True to that brand, issue #25 is loaded with only the most impactful stories and has a theme of debugging systems at scale, including gPRC, JVM and PostgreSQL. Ready to open a bunch of new tabs? Here we go:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Why load balancing gRPC is tricky?](https://majidfn.com/blog/20201222-grpc-load-balancing/){:target="_blank"}
1. [Tricks of the Trade: Tuning JVM Memory for Large-scale Services](https://eng.uber.com/jvm-tuning-garbage-collection/){:target="_blank"}
1. [Debugging random slow writes in PostgreSQL](https://iamsafts.com/posts/postgres-gin-performance/){:target="_blank"}
1. [The Full Story of the Stunning RSA Hack Can Finally Be Told](https://www.wired.com/story/the-full-story-of-the-stunning-rsa-hack-can-finally-be-told/){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-25/long-working-hours.jpg" width="600"></p>
- [Long working hours are a killer, WHO study shows](https://www.reuters.com/world/long-working-hours-are-killer-who-study-shows-2021-05-17/){:target="_blank"}: working long hours is killing hundreds of thousands of people a year in a worsening trend that may accelerate further due to the COVID-19 pandemic, the World Health Organization said.

<p align="center"><img src="{{ site.url }}/images/diu-25/vamp-circleci.png" width="600"></p>
- [Vamp is joining CircleCI!](https://blog.vamp.io/vamp-is-joining-circleci/){:target="_blank"}: "together we will combine continuous integration, continuous deployment, release orchestration and continuous validation, and bring it to the next level. Our unified platform will enable software developers, engineers, DevOps teams, and business stakeholders alike to “shift-right”, and deliver better software even faster and more frequently."

- [The Next Step after DevOps and GitOps Is Cloud Engineering, Pulumi Says](https://thenewstack.io/the-next-step-after-devops-and-gitops-is-cloud-engineering-pulumi-says/){:target="_blank"}: if we are going to treat infrastructure as code, shouldn’t infrastructure engineers have access to the same tools that make software engineers productive and even the same languages? That’s the theory behind Pulumi, which has just released version 3 of its open source platform.

- [My thoughts about the Principal role](https://www.galiglobal.com/blog/2021/20210313-The-principal-role.html){:target="_blank"}


## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-25/uber-jvm-tuning.png" width="600"></p>
- [Tricks of the Trade: Tuning JVM Memory for Large-scale Services](https://eng.uber.com/jvm-tuning-garbage-collection/){:target="_blank"}: Uber’s growth over the last few years exponentially increased both the volume of data and the associated access loads required to process it, resulting in much more memory consumption from services. Increased memory consumption exposed a variety of issues, including long garbage collection (GC) pauses, memory corruption, out-of-memory (OOM) exceptions, and memory leaks.

<p align="center"><img src="{{ site.url }}/images/diu-25/insights-daily-load.webp" width="600"></p>
- [Debugging random slow writes in PostgreSQL](https://iamsafts.com/posts/postgres-gin-performance/){:target="_blank"}: takes you through the journey and shows some tools & processes that can help you dig into SQL performance issues.

- [Extreme HTTP Performance Tuning](https://talawah.io/blog/extreme-http-performance-tuning-one-point-two-million/){:target="_blank"}: "this post will walk you through the performance tuning steps that I took to serve 1.2 million JSON "API" requests per second from a 4 vCPU AWS EC2 instance."

<p align="center"><img src="{{ site.url }}/images/diu-25/ansible.png" width="400"></p>
- [Ansible 4.0.0 final has been released!](https://groups.google.com/g/ansible-devel/c/AeF2En1RGI8){:target="_blank"}: this version of Ansible is based on Ansible Core 2.11 which is a new major update of the `ansible-core` package. It may contain backwards incompatible changes to the playbook language and command line programs - see the porting guide for more information.

- [Thundering herds, noisy neighbours, and retry storms](https://mads-hartmann.com/sre/2021/05/14/thundering-herd.html){:target="_blank"}: a list of operational patterns that every DevOps engineer should know.

- [GitOps Con 2021 recordings](https://www.youtube.com/playlist?list=PLXOML2VBdIo7xEp8Bo9kFB-d6tTlHK5Fk){:target="_blank"}: learn about GitOps until you're blue in the face.


## 🛠️ DevOps Tools 

- [Security keys are now supported for SSH Git operations](https://github.blog/2021-05-10-security-keys-supported-ssh-git-operations/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-25/sublime-text-4.png" width="600"></p>
- [Sublime Text 4](https://www.sublimetext.com/blog/articles/sublime-text-4){:target="_blank"}: new features include a redesigned UI, Apple Silicon support, tab multi-select, context-aware auto complete, GPU rendering and much more!

- [terraform-docs](https://terraform-docs.io/user-guide/introduction/){:target="_blank"}: generate documentation from Terraform modules in various output formats.


## ☸️ Kubernetes 

- [Implementing Kubernetes: The Hidden Part of the Iceberg](https://medium.com/gumgum-tech/implementing-kubernetes-the-hidden-part-of-the-iceberg-part-1-76c3e9684d49){:target="_blank"}: a story about personal and team challenges when implementing a production-grade fleet of Kubernetes clusters at GumGum.

<p align="center"><img src="{{ site.url }}/images/diu-25/k8s-capacity-planning.png" width="600"></p>
- [Kubernetes capacity planning: How to rightsize your cluster](https://sysdig.com/blog/kubernetes-capacity-planning/){:target="_blank"}: don't be greedy! Learn how to identify unused resources and how to rightsize the capacity of your Kubernetes clusters.

- [Service Mesh Wars, Goodbye Istio](https://medium.com/polymatic-systems/service-mesh-wars-goodbye-istio-b047d9e533c7){:target="_blank"}: after using Istio in production for almost 2 years, we’re saying goodbye to it. Learn why, as well as the current state of the Service Mesh Wars.

- [Introducing `PodTopologySpread`](https://kubernetes.io/blog/2020/05/introducing-podtopologyspread/){:target="_blank"}: managing Pods distribution across a cluster is hard. There is a common need to distribute Pods evenly across topologies, so as to achieve better cluster utilization and high availability of applications. The `PodTopologySpread` scheduling plugin (originally proposed as `EvenPodsSpread`) was designed to fill that need.

<p align="center"><img src="{{ site.url }}/images/diu-25/helm-db-migrations.png" width="600"></p>
- [Database migrations on Kubernetes using Helm hooks](https://itnext.io/database-migrations-on-kubernetes-using-helm-hooks-fb80c0d97805){:target="_blank"}: leverage the `pre-install` and `pre-upgrade` Helm hooks to run database migrations before your application is installed or updated. Keep reading to understand why simpler solutions might not be the best idea and a couple of gotchas when using Helm hooks.

- [Using Finalizers to Control Deletion](https://kubernetes.io/blog/2021/05/14/using-finalizers-to-control-deletion/){:target="_blank"}: deleting objects in Kubernetes can be challenging. You may think you’ve deleted something, only to find it still persists. While issuing a `kubectl delete` command and hoping for the best might work for day-to-day operations, understanding how Kubernetes delete commands operate will help you understand why some objects linger after deletion.


## 🔐 Security 

- [The Full Story of the Stunning RSA Hack Can Finally Be Told](https://www.wired.com/story/the-full-story-of-the-stunning-rsa-hack-can-finally-be-told/){:target="_blank"}: in 2011, Chinese spies stole the crown jewels of cybersecurity—stripping protections from firms and government agencies worldwide. Here’s how it happened.

<p align="center"><img src="{{ site.url }}/images/diu-25/dns-injection.jpg" width="600"></p>
- [Vulnerabilities in billions of Wi-Fi devices let hackers bypass firewalls](https://arstechnica.com/gadgets/2021/05/farewell-to-firewalls-wi-fi-bugs-open-network-devices-to-remote-hacks/){:target="_blank"}: dubbed the FragAttacks, they allow people within radio range to inject frames of their choice into networks protected by WPA-based encryption.

<p align="center"><img src="{{ site.url }}/images/diu-25/aws-app-keys-sad.jpg" width="600"></p>
- [Over 40 Apps With More Than 100 Million Installs Found Leaking AWS Keys](https://thehackernews.com/2021/05/over-40-apps-with-more-than-100-million.html){:target="_blank"}: most mobile app users tend to blindly trust that the apps they download from app stores are safe and secure. But that isn't always the case.


## 💻 Programming 

- [An early look at Postgres 14: Performance and Monitoring Improvements](https://pganalyze.com/blog/postgres-14-performance-monitoring){:target="_blank"}

- [encode/httpx](https://github.com/encode/httpx/){:target="_blank"}: next generation HTTP client for Python.


## 📖 Machine Learning 

- [MUM: A new AI milestone for understanding information](https://blog.google/products/search/introducing-mum/){:target="_blank"}: Google's Multitask Unified Model is trained across 75 different languages and can understand many different tasks at once, allowing it to develop a more comprehensive understanding of information and world knowledge than previous models. MUM is multimodal, so it understands information across text and images and, in the future, can expand to more modalities like video and audio.


## 🐧 Linux 

- [Error handling in Bash scripts](https://www.redhat.com/sysadmin/error-handling-bash-scripting){:target="_blank"}: let your Bash script help you find its errors with error handling.


## 🚢 Leadership 

- [Naming names in incident writeups](https://surfingcomplexity.blog/2021/05/22/naming-names-in-incident-writeups/){:target="_blank"}: an interesting challenge to blameless postmortems.


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-25/grpc-load-balancing.png" width="600"></p>
- [Why load balancing gRPC is tricky?](https://majidfn.com/blog/20201222-grpc-load-balancing/){:target="_blank"}: using a binary protocol with structured data as the communication medium among services is indeed attractive, but there are some considerations when using gRPC, most important of all is how to handle load balancing.

- [Service-Oriented vs. Monolith](https://p99th.substack.com/p/microservices-vs-monolith){:target="_blank"}: most teams do choose the microservices path since that’s the “industry standard” these days. However, monolithic designs still have their use and space, especially at an early stage of an idea or a product.


<p align="center"><img src="{{ site.url }}/images/diu-25/uber-request-lifecycle.png" width="600"></p>
- [The Architecture of Uber’s API gateway](https://eng.uber.com/architecture-api-gateway/){:target="_blank"}: Uber developed a feature-rich API gateway that is capable of complex operations on the incoming and outgoing data payload across multiple protocols. This article takes a deeper dive into the technical components of Uber's custom API gateway system.


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-25/cloudfront-functions.png" width="600"></p>
- [Introducing CloudFront Functions](https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/){:target="_blank"}: built for lightweight HTTP(S) transformations and manipulations, allowing you to deliver richer, more personalized content with low latency to your customers.

- [Amazon VPC Announces Pricing Change for VPC Peering](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-vpc-announces-pricing-change-for-vpc-peering/){:target="_blank"}: starting May 1st 2021, all data transfer over a VPC Peering connection that stays within an Availability Zone (AZ) is now free. All data transfer over a VPC Peering connection that crosses Availability Zones will continue to be charged at the standard in-region data transfer rates.

- [Amazon EKS managed node groups adds support for Kubernetes node taints](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-eks-managed-node-groups-adds-support-kubernetes-node-taints/){:target="_blank"}

- [Introducing Incident Manager from AWS Systems Manager](https://aws.amazon.com/about-aws/whats-new/2021/05/introducing-incident-manager-aws-systems-manager/){:target="_blank"}: a new capability of AWS Systems Manager that enables faster resolution of critical application availability and performance issues. Incident Manager helps you prepare for incidents with automated response plans that bring the right people and information together.

- [Amazon EC2 Auto Scaling Introduces Predictive Scaling as a Native Scaling Policy](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-ec2-auto-scaling-introduces-predictive-scaling-native-scaling-policy/){:target="_blank"}: proactively scale out your ASG to be ready for upcoming demand, avoiding the need to over-provision capacity, resulting in lower EC2 cost while ensuring your application’s responsiveness.

- [Amazon EKS and EKS Distro now support Kubernetes version 1.20](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-eks-eks-distro-supports-kubernetes-version-1-20/){:target="_blank"}: the 1.20 release includes `RuntimeClass` and Process ID Limits reaching stable status, API Priority and Fairness being enabled by default, and `kubectl` debug reaching beta status.


## Azure 

- [Azure Static Web Apps goes GA](https://www.infoq.com/news/2021/05/azure-static-web-apps-ga/){:target="_blank"}: a serverless web app hosting service for static web apps.



*Article version: 1.0.1*

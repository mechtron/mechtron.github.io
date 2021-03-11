---
layout: post
title: "DevOps Industry Updates #21"
---

Welcome back! If your week has been anything like mine, you've been a little busier than usual and you probably didn't have a lot of time to read the latest DevOps news. Well fear not, DevOps Industry Updates has you covered! Standouts in this issue include GKE who launched two impressive new features (AutoPilot and Multidimensional Pod Autoscaler aka MPA) and some [stellar](https://tailscale.com/blog/modules-monoliths-and-microservices/){:target="_blank"} [essays](https://ably.com/blog/engineering-dependability-and-fault-tolerance-in-a-distributed-system){:target="_blank"} on system design. Player ready? Let's go:

## 🔥 Top Cream

This issue's top 5 stories:

1. [Top 20 Dockerfile best practices](https://sysdig.com/blog/dockerfile-best-practices/){:target="_blank"}
1. [Despite the Pandemic, DevOps Salaries Rose in 2020](https://devops.com/despite-pandemic-devops-salaries-rose-in-2020/){:target="_blank"}
1. [Splitting the ping](https://blog.benjojo.co.uk/post/ping-with-loss-latency-split){:target="_blank"}
1. [Modules, monoliths, and microservices](https://tailscale.com/blog/modules-monoliths-and-microservices/){:target="_blank"}
1. [Engineering dependability and fault tolerance in a distributed system](https://ably.com/blog/engineering-dependability-and-fault-tolerance-in-a-distributed-system){:target="_blank"}

## 🌎 Society 

- [Recap: Gene Kim’s Thoughts on DevOps in 2021](https://launchdarkly.com/blog/gene-kim-devops-in-2020-and-2021){:target="_blank"}: perspective on the biggest changes that sprung from 2020 and areas of focus for the rest of this year.

<p align="center"><img src="{{ site.url }}/images/diu-21/ipo.png" width="600"></p>
- [DigitalOcean Files For IPO Among A Sea Of SPACs](https://news.crunchbase.com/news/digitalocean-files-for-ipo-among-a-sea-of-spacs/){:target="_blank"}

- [Despite the Pandemic, DevOps Salaries Rose in 2020](https://devops.com/despite-pandemic-devops-salaries-rose-in-2020/){:target="_blank"}: Puppet's survey got 2,243 responses and noted that organizations with highly evolved DevOps practices pay better than those that are less evolved.

- [4 Times I Felt Discriminated Against for Being a Female Developer](https://betterprogramming.pub/4-times-i-felt-discriminated-against-for-being-a-female-developer-b9579f696a5){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-21/okta.jpg" width="600"></p>
- [Okta acquires cloud identity startup Auth0 for $6.5B](https://techcrunch.com/2021/03/03/okta-acquires-cloud-identity-startup-auth0-for-6-5b/){:target="_blank"}: the company had a valuation of $1.92 billion when it raised $120 million led by Salesforce Ventures last July.


## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-21/Dockerfile-best-practices.png" width="600"></p>
- [Top 20 Dockerfile best practices](https://sysdig.com/blog/dockerfile-best-practices/){:target="_blank"}: learn how to prevent security issues and optimize containerized applications by applying a quick set of Dockerfile best practices in your image builds.

- [Elasticsearch Optimizations at Lyft](https://eng.lyft.com/elasticsearch-optimizations-at-lyft-b555dc020932){:target="_blank"}: in this article, Lyft shares the different ways they measured and altered our interactions with Elasticsearch to ultimately decrease latency and costs.

- [Modules, monoliths, and microservices](https://tailscale.com/blog/modules-monoliths-and-microservices/){:target="_blank"}


## 🛠️ DevOps Tools 

- [sift](http://sift-tool.org){:target="_blank"}: a fast and powerful alternative to grep.

<p align="center"><img src="{{ site.url }}/images/diu-21/console-me.png" width="200"></p>
- [ConsoleMe](https://netflixtechblog.com/consoleme-a-central-control-plane-for-aws-permissions-and-access-fd09afdd60a8){:target="_blank"}: a Central Control Plane for AWS Permissions and Access

<p align="center"><img src="{{ site.url }}/images/diu-21/cockpit.png" width="600"></p>
- [Cockpit](https://cockpit-project.org){:target="_blank"}: an easy-to-use, integrated, glanceable, and open web-based interface for your servers.

- [a simple DNS lookup tool](https://dns-lookup.jvns.ca){:target="_blank"}


## ☸️ Kubernetes 

- [Watch Kubernetes Experts Fix Broken Kubernetes Clusters Live](https://www.youtube.com/watch?v=teB22ZuV_z8){:target="_blank"}: we break them, they fix em, live!

<p align="center"><img src="{{ site.url }}/images/diu-21/flux.png" width="300"></p>
- [Introduction to GitOps on Kubernetes with Flux v2](https://blog.sldk.de/2021/02/introduction-to-gitops-on-kubernetes-with-flux-v2/){:target="_blank"}: how to set up a GitOps pipeline for your Kubernetes cluster with Flux v2.

- [Kubernetes examples](https://k8s-examples.container-solutions.com){:target="_blank"}: a series of YAML references with canonical and as-simple-as-possible demonstrations of kubernetes functionality and features.

- [How We Minimized the Overhead of Kubernetes in our Job System](https://www.datadoghq.com/blog/engineering/moving-a-jobsystem-to-kubernetes/){:target="_blank"}


## 🔐 Security 

- [The CNAME of the Game](https://arxiv.org/abs/2102.09301){:target="_blank"}: a large-scale analysis of a DNS-based tracking evasion scheme that leverages CNAME records to include tracker resources, effectively bypassing anti-tracking measures that use hostname-based block lists.

- [Former SolarWinds CEO blames intern for 'solarwinds123' password leak](https://www.cnn.com/2021/02/26/politics/solarwinds123-password-intern/index.html){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-21/chriskrebstweet.png" width="600"></p>
- [At Least 30,000 U.S. Organizations Newly Hacked Via Holes in Microsoft’s Email Software](https://krebsonsecurity.com/2021/03/at-least-30000-u-s-organizations-newly-hacked-via-holes-in-microsofts-email-software/){:target="_blank"}

- [Does your VPC endpoint allow access to half of the Internet?](https://cloudonaut.io/does-your-vpc-endpoint-allow-access-to-half-of-the-internet/){:target="_blank"}


## 💻 Programming 

- [Development on Windows is Painful](https://christine.website/blog/windows-pain-2021-03-03){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-21/rust-go.png" width="500"></p>
- [Learning Rust and Go](https://fettblog.eu/learning-rust-and-go/){:target="_blank"}: it’s interesting how both Go and Rust fall into the same category but are so fundamentally different in design, philosophy, and execution.Here are some insights from using both for quite a while.


## 🐧 Linux 

- [Building a Linux container by hand using namespaces](https://www.redhat.com/sysadmin/building-container-namespaces){:target="_blank"}: How user namespaces in Linux relate to container security.


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-21/sping.png" width="600"></p>
- [Splitting the ping](https://blog.benjojo.co.uk/post/ping-with-loss-latency-split){:target="_blank"}: `ping` is one of the fundamental pillars of networking. It’s simple, universally supported, and is normally one of the few things that is shipped with all network stack.

- [Engineering dependability and fault tolerance in a distributed system](https://ably.com/blog/engineering-dependability-and-fault-tolerance-in-a-distributed-system){:target="_blank"}: in this article, we discuss the concepts of dependability and fault tolerance in detail and explain how the Ably platform is designed with fault tolerant approaches to uphold its dependability guarantees.


## AWS 

- [Amazon Elasticsearch Service now supports rollups](https://aws.amazon.com/about-aws/whats-new/2021/02/amazon-elasticsearch-service-supports-rollups-reducing-storage-costs-extended-retention/){:target="_blank"}: index rollups let you summarize high granularity data and preserve feature-rich aggregations over large data sets for analytics while reducing the storage costs.

<p align="center"><img src="{{ site.url }}/images/diu-21/amazon-detective.png" width="600"></p>
- [Analyze and understand IAM role usage with Amazon Detective](https://aws.amazon.com/blogs/security/analyze-and-understand-iam-role-usage-with-amazon-detective/){:target="_blank"}: quickly attribute activity performed under a role to a specific resource in your environment, understand cross-account role assumptions, determine role chaining behavior, and quickly see called APIs.

- [EKS and EKS Distro now support Kubernetes 1.19](https://aws.amazon.com/about-aws/whats-new/2021/02/amazon-eks-supports-kubernetes-version-1-19/){:target="_blank"}: highlights of the 1.19 release include Ingress API and Pod Topology Spread reaching stable status, EndpointSlices being enabled by default, and immutable Secrets and ConfigMaps. As of May 3rd, 2021, Kubernetes version 1.15 will no longer be supported.

- [EKS clusters now support user authentication with OIDC](https://aws.amazon.com/about-aws/whats-new/2021/02/amazon-eks-clusters-support-user-authentication-oidc-compatible-identity-providers/){:target="_blank"}

- [Big Sur EC2 Mac instances now support EFS](https://aws.amazon.com/about-aws/whats-new/2021/02/access-amazon-efs-file-systems-from-ec2-mac-instances-running-macos-big-sur/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-21/aws-sourcemaps.png" width="600"></p>
- [How to use source maps in AWS Lambda with Node.js](https://serverless.pub/aws-lambda-node-sourcemaps/){:target="_blank"}: if you ever opened your CloudWatch logs and saw that the error happened in the `/var/task/index.js:1:2345`, this post is for you. Learn how to transform this meaningless stack trace into something that matches your source code and you understand.

<p align="center"><img src="{{ site.url }}/images/diu-21/param-store-vs-secrets-manager.png" width="600"></p>
- [Parameter Store vs Secrets Manager](https://www.davehall.com.au/blog/2021/02/22/parameter-store-vs-secrets-manager/){:target="_blank"}


## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-21/gcp-kubernetes.jpg" width="600"></p>
- [Scaling workloads across multiple dimensions in GKE](https://cloud.google.com/blog/topics/developers-practitioners/scaling-workloads-across-multiple-dimensions-gke){:target="_blank"}: application owners can now define multiple autoscaling behaviors for a workload using a single Kubernetes resource: Multidimensional Pod Autoscaler (MPA).

- [Introducing GKE Autopilot: a revolution in managed Kubernetes](https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot){:target="_blank"}

- [Google Cloud products in 4 words or less (2021 edition)](https://cloud.google.com/blog/topics/developers-practitioners/back-popular-demand-google-cloud-products-4-words-or-less-2021-edition){:target="_blank"}: Google Cloud offers lots of products to support a wide variety of use cases. But how do you even know where to start?! Don’t worry, we’ve got you covered!



*Article version: 1.0.0*

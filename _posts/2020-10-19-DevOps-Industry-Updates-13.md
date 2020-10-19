---
layout: post
title: "DevOps Industry Updates #13"
---

Welcome back to DevOps Industry updates! WFH remains a hot topic in big tech and for the first time in 5 years, HashiCorp introduces not one but two new open-source projects: Boundary and Waypoint. Amazon also released their new time-series database called Timestream and most importantly, we finally now have a way to kill Kubernetes pods with a Doom-like interface. It's all right here in issue #13:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Announcing HashiCorp Waypoint](https://www.hashicorp.com/blog/announcing-waypoint){:target="_blank"}
1. [Announcing HashiCorp Boundary](https://www.hashicorp.com/blog/hashicorp-boundary){:target="_blank"}
1. [Amazon Timestream is now Generally Available](https://aws.amazon.com/timestream/){:target="_blank"}
1. [Dockerfile Security Best Practices](https://cloudberry.engineering/article/dockerfile-security-best-practices/){:target="_blank"}

## 🌎 Society 

- [Dropbox will let all employees WFH permanently](https://www.businessinsider.com/dropbox-letting-all-employees-work-from-home-permanently-2020-10){:target="_blank"} by Allana Akhtar: the company turns its offices into WeWork-like 'collaborative spaces' to aid in team building and collaboration. "While we know we may not get it 100% right immediately, we wanted to take this opportunity to fundamentally redesign how we work, and be more intentional and prescriptive with the guidance we're giving to our employees," a Dropbox spokesperson said.

- [Why the Serverless Revolution Has Stalled](https://www.infoq.com/articles/serverless-stalled/){:target="_blank"} by Bernard Brode: this article takes a look at why, despite serverless models finding great utility in specific, well-defined circumstances, it seems that the lack of agility and flexibility of these systems is still a barrier to their more widespread adoption.

<p align="center"><img src="{{ site.url }}/images/diu-13/wfh.jpg" width="600"></p>
- [Is Silicon Valley Ready for WFH?](https://www.indiehackers.com/post/is-silicon-valley-ready-for-wfh-6197877429){:target="_blank"} by Ullekh Niraula: while the vast majority of Microsoft employees are still working from home during the ongoing pandemic, the software maker has unveiled a "hybrid workplace" guidance internally to allow for far greater flexibility once US offices eventually reopen.

- [IBM to spin off new company, will focus on $1 trillion cloud opportunity](https://www.wraltechwire.com/2020/10/08/ibm-to-spin-off-new-company-will-focus-on-1-trillion-cloud-opportunity/){:target="_blank"}

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-13/waypoint-up.png" width="600"></p>
- [Announcing HashiCorp Waypoint](https://www.hashicorp.com/blog/announcing-waypoint){:target="_blank"} by Mitchell Hashimoto: a new open source project that provides developers a consistent workflow to build, deploy, and release applications across any platform. Waypoint enables developers to get their applications from development to production in a single file and deploy using a single command: `waypoint up`.

<p align="center"><img src="{{ site.url }}/images/diu-13/boundary.png" width="600"></p>
- [Announcing HashiCorp Boundary](https://www.hashicorp.com/blog/hashicorp-boundary){:target="_blank"} by Jeff Mitchell: Boundary enables simple and secure access to hosts and services with fine-grained authorization without having to manage credentials or expose your network.

<p align="center"><img src="{{ site.url }}/images/diu-13/terraform.png" width="600"></p>
- [HashiCorp Terraform 0.13 Beta](https://www.hashicorp.com/blog/announcing-the-terraform-0-13-beta){:target="_blank"} by Petros Kolyvas: as HashiCorp Terraform continues to take important steps toward a 1.0 release, this newest version includes new features such as sensitive input variables and provider dependency pinning.

<p align="center"><img src="{{ site.url }}/images/diu-13/jfrog-devops.png" width="600"></p>
- [JFrog Adds Free DevOps Tier in the Cloud](https://devops.com/jfrog-adds-free-devops-tier-in-the-cloud/){:target="_blank"} by Mike Vizard: JFrog announced a new free tier of its namesake DevOps platform available on all three major public cloud service providers. The free tier includes 2GB of storage, 10GB of monthly data transfer and 2,000 CI/CD pipeline minutes per month.

- [Terraform at Scale: Modualized Hierachical Layout and Continuous Delivery](https://medium.com/faun/terraform-at-scale-modualized-hierachical-layout-cb5dbe5a368d){:target="_blank"} by Tianchen Wu: this article describes a systematic way of applying Terraform at scale.

<p align="center"><img src="{{ site.url }}/images/diu-13/terraform-repository-structure.svg" width="600"></p>
- [On Terraform code structure for scale](https://sysdogs.com/on-terraform-code-structure-for-scale/){:target="_blank"} by Kamil Szczygiel: this article discusses different ways to structure your Terraform code with version control and the pros and cons of each approach.

- [A Hitchhiker's Guide to Containerizing (Spring Boot) Java Apps](https://blog.frankel.ch/hitchhiker-guide-containerizing-java-apps/){:target="_blank"} by Nicolas Fränkel: containerizing an application based on a "scripting" language is straightforward. Add the sources, download the dependencies, and you’re good to go. With compiled languages in general and Java in particular, things are a bit different. In this post, I’d like to list some alternatives to achieve that.

- [It's Time to Forget About Docker](https://martinheinz.dev/blog/35){:target="_blank"} by Martin Heinz: in the ancient times of containers, Docker was the only player in the container game. That's not the case anymore though and Docker is not the only, but rather just another container engine on the landscape. Docker allows us to build, run, pull, push or inspect container images, but for each of these tasks there are other alternative tools, which might just do a better job at it than Docker. So, let's explore the landscape and (just maybe) uninstall and forget about Docker altogether...

## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-13/duf.png" width="600"></p>
- [muesli/duf](https://github.com/muesli/duf){:target="_blank"} by Christian Muehlhaeuser: Disk Usage/Free Utility (Linux, BSD, macOS & Windows)

<p align="center"><img src="{{ site.url }}/images/diu-13/doom.jpg" width="600"></p>
- [storax/kubedoom](https://github.com/storax/kubedoom){:target="_blank"} by David Zuber: kill Kubernetes pods by playing Id's DOOM!

- [thanos-io/kube-thanos](https://github.com/thanos-io/kube-thanos){:target="_blank"}: this repository collects Kubernetes manifests combined with documentation and scripts to provide easy to deploy experience for Thanos on Kubernetes.

- [TimeToogo/tunshell](https://tunshell.com){:target="_blank"} by Elliot Levin: Tunshell is a simple and secure method to remote shell into ephemeral environments such as deployment pipelines or serverless functions.

## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-13/cloud-code-completion.gif" width="600"></p>
- [Cloud Code makes YAML easy for hundreds of popular Kubernetes CRDs](https://cloud.google.com/blog/products/containers-kubernetes/cloud-code-features-expanded-support-for-kubernetes-crds){:target="_blank"} by Russell Wolf: inline documentation, code-completion and schema validation, a.k.a. "linting", for popular Kubernetes CRDs.

- [Why Everyone Builds Internal Kubernetes Platforms](https://itnext.io/why-everyone-builds-internal-kubernetes-platforms-284c2cf76226){:target="_blank"} by Daniel Thiry: several factors drive more and more companies to develop and adopt internal Kubernetes platforms for their engineers.

<p align="center"><img src="{{ site.url }}/images/diu-13/k8s-tools.jpg" width="600"></p>
- [Kubernetes: Curated List of Tools and Resources](https://devopsunlocked.com/kubernetes-curated-list-of-tools-and-resources/){:target="_blank"} by Aaron Griffith: "a large, curated list of Kubernetes tools and resources. This is an active post which means as new tools are identified I will add to this and provide the update here."

<p align="center"><img src="{{ site.url }}/images/diu-13/dof-k8s.jpg" width="600"></p>
- [U-2 Federal Lab achieves flight with Kubernetes](https://www.af.mil/News/Article-Display/Article/2375297/u-2-federal-lab-achieves-flight-with-kubernetes/){:target="_blank"} by Air Combat Command Public Affairs: the U-2 Federal Laboratory successfully leveraged Kubernetes during a local training sortie on a U-2 Dragon Lady assigned to the 9th Reconnaissance Wing at Beale Air Force Base on September 22. This represents the first time Kubernetes has flown on an operational major weapon system in the Department of Defense.

<p align="center"><img src="{{ site.url }}/images/diu-13/alibaba-cloud-cilium.png" width="600"></p>
- [How Alibaba Cloud uses Cilium for High-Performance Cloud-Native Networking](https://cilium.io/blog/2020/10/09/cilium-in-alibaba-cloud/){:target="_blank"} by Thomas Graf: what is unique to Alibaba's setup is the use of IPVLAN. In this blog post, we will dive into the details of the Terway CNI, the CNI plugin of Alibaba Cloud, and review some of the statements made in the Alibaba team's original blog post.

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-13/cloudflare-one.png" width="600"></p>
- [Introducing Cloudflare One](https://blog.cloudflare.com/introducing-cloudflare-one/){:target="_blank"} by Matthew Prince: Cloudflare One is a comprehensive, cloud-based network-as-a-service solution that is designed to be secure, fast, reliable and define the future of the corporate network. It replaces a patchwork of appliances and WAN technologies with a single network that provides cloud-based security, performance, and control through one user interface.

- [Dockerfile Security Best Practices](https://cloudberry.engineering/article/dockerfile-security-best-practices/){:target="_blank"} by Gianluca Brindisi: a list of common security issues and how to avoid them. For every issue I’ve also written an Open Policy Agent (OPA) rule ready to be used to statically analyze your Dockerfiles with `conftest`. You can’t shift more left than this!

- [CVE-2020-15157 ContainerDrip](https://darkbit.io/blog/cve-2020-15157-containerdrip){:target="_blank"} by Brad Geesaman: if an attacker publishes a public image with a crafted manifest that directs one of the image layers to be fetched from a web server they control and they trick a user or system into pulling the image, they can obtain the credentials used by ctr/containerd to access that registry. In some cases, this may be the user’s username and password for the registry.

## 💻 Programming 

- [Ask HN: What are the pros / cons of using monorepos?](https://news.ycombinator.com/item?id=24719525){:target="_blank"}: or in other words, when would you recommend using them, and when would you avoid them?

<p align="center"><img src="{{ site.url }}/images/diu-13/python-3.9.jpg" width="600"></p>
- [Python 3.9: Cool New Features for You to Try](https://realpython.com/python39-new-features/){:target="_blank"} by Geir Arne Hjelle: every release of Python includes new, improved, and deprecated features, and Python 3.9 is no different. In this tutorial, you’ll take an in-depth look at the coolest features that the latest version of Python brings to the table.

## 🐧 Linux 

- [Linux permissions: SUID, SGID, and sticky bit](https://www.redhat.com/sysadmin/suid-sgid-sticky-bit){:target="_blank"} by Tyler Carrigan: getting permissions in Linux can sometimes be a 'sticky' situation. Learn how to set the appropriate permissions, even in special circumstances.

<p align="center"><img src="{{ site.url }}/images/diu-13/bash-errors.png" width="600"></p>
- [Bash Errors](https://wizardzines.com/comics/bash-errors/){:target="_blank"} by Julia Evans

## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-13/success-of-devops.png" width="600"></p>
- [How to Ensure the Success of DevOps in Your Organization](https://codersociety.com/blog/articles/devops-success-in-organization){:target="_blank"} by Kentaro Wakayama: in this article, you will learn about the business value DevOps provides. We explain the 5 most important KPIs which helps you measure the success of DevOps in your organization.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-13/digitalocean-app-platform.png" width="600"></p>
- [Introducing DigitalOcean App Platform](https://www.digitalocean.com/blog/introducing-digitalocean-app-platform-reimagining-paas-to-make-it-simpler-for-you-to-build-deploy-and-scale-apps){:target="_blank"} by Apurva Joshi: reimagining PaaS to make it simpler for you to build, deploy, and scale apps

## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-13/timestream-devops.png" width="600"></p>
- [Amazon Timestream is now Generally Available](https://aws.amazon.com/timestream/){:target="_blank"}: Timestream is a new time series database that can scale to process trillions of time series events per day up to 1,000 times faster than relational databases, and at as low as 1/10th the cost. Timestream saves effort and expense by keeping recent data in memory and moving historical data to a cost-optimized storage tier based upon user-defined policies.

<p align="center"><img src="{{ site.url }}/images/diu-13/lambda-idempotent.png" width="600"></p>
- [Your Lambda function might execute twice. Be prepared!](https://cloudonaut.io/your-lambda-function-might-execute-twice-deal-with-it/){:target="_blank"} by Michael Wittig: are you confused when scheduled Lambdas execute twice, SNS messages trigger an invocation three times, your handmade S3 inventory is out of date because events occurred twice? Bad news: Sooner or later, your Lambda function will be invoked multiple times. You have to be prepared!

- [AWS Lambda Extensions: a new way to integrate Lambda with operational tools](https://aws.amazon.com/about-aws/whats-new/2020/10/aws-lambda-extensions-integrate-operational-tools/){:target="_blank"}: you can now use AWS Lambda with extensions for your favorite operational tools for monitoring, observability, security, and governance. Today, you can use extensions for the following tools: AppDynamics, Check Point, Datadog, Dynatrace, Epsagon, HashiCorp, Lumigo, New Relic, Thundra, Splunk, AWS AppConfig, and Amazon CloudWatch Lambda Insights.

- [Introducing Distributed Load Testing v1.1](https://aws.amazon.com/about-aws/whats-new/2020/10/introducing-distributed-load-testing-v1-1/){:target="_blank"}: Distributed Load Testing on AWS helps you easily simulate thousands of users connecting to your application so that you can better understand your application performance under load. The solution launches and configures containers on AWS Fargate to generate a specified number of transactions per second without having to provision servers. 

- [Amazon MSK can now automatically expand cluster storage](https://aws.amazon.com/about-aws/whats-new/2020/09/amazon-msk-can-now-automatically-expand-cluster-storage/){:target="_blank"}

## Azure 

<p align="center"><img src="{{ site.url }}/images/diu-13/azure-openshift.png" width="600"></p>
- [Lower prices and more flexible purchase options for Azure Red Hat OpenShift](https://azure.microsoft.com/en-us/blog/lower-prices-and-more-flexible-purchase-options-for-azure-red-hat-openshift/){:target="_blank"} by Ahmed Sabbour: Microsoft is dropping the price of OpenShift licenses on Azure OpenShift worker nodes by up to 77 percent. They are also expanding their reserved instances offerings by reducing the minimum number of virtual machines required for existing 1 year RIs and by adding a brand new 3 year RI option for further savings.

*Article version: 1.0.0*

---
layout: post
title: "DevOps Industry Updates #16"
permalink: /devops-industry-updates-16/
---

AWS re:Invent 2020 is officially underway and we've already seen some alluring new products like Mac EC2 instances, gp3 EBS volumes, public ECR Docker registries (sorry, DockerHub) and a crazy database translation layer called BabelFish.

But if you thought the drama ended there, well, you might be new to DevOps! We also learned that the next version of Kubernetes (v1.20) will be the last to include the (gasp!) Docker container runtime. Should you be worried? Well, no. But you can read all about that saga (and so much more) in this action-packed issue of DevOps Industry Updates:

## 🔥 Top Cream

This issue's top 5 stories:

1. [Introducing gp3 EBS volumes](https://aws.amazon.com/about-aws/whats-new/2020/12/introducing-new-amazon-ebs-general-purpose-volumes-gp3/){:target="_blank"}
1. [AWS Lambda now supports container images](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-now-supports-container-images-as-a-packaging-format/){:target="_blank"}
1. [The ReadME Project](https://github.blog/2020-12-01-devops-success-readme/){:target="_blank"}
1. [Why Is Apple’s M1 Chip So Fast?](https://debugger.medium.com/why-is-apples-m1-chip-so-fast-3262b158cba2){:target="_blank"}
1. [AWS just went multi-cloud … and it’s only the beginning](https://acloudguru.com/blog/business/aws-just-went-multi-cloud-and-its-only-the-beginning){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-16/google.jpg" width="600"></p>
- [Google's 3-Word Plan to Help Employees Avoid Burnout](https://www.inc.com/jason-aten/googles-3-word-plan-to-help-employees-avoid-burnout-is-so-simple-you-should-steal-it.html){:target="_blank"} by Jason Aten: sometimes the easiest way to help your team get more done is to stop interrupting them with meetings.

- [How do you write simple explanations without sounding condescending?](https://jvns.ca/blog/2020/11/15/simple-explanations-without-sounding-condescending/){:target="_blank"} by Julia Evans


## 📟 DevOps 

- [How To Automate Jenkins Job Configuration Using Job DSL](https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-job-configuration-using-job-dsl){:target="_blank"} by Daniel Li: in this tutorial, you’ll use Job DSL to configure two demo jobs: one that prints a 'Hello World' message in the console, and one that runs a pipeline from a Git repository.

- [Terraform 0.14 is now GA](https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-14-general-availability){:target="_blank"} by Petros Kolyvas: new features include a more concise diff, sensitive input variables and a provider dependency lockfile.

- [How COVID-19 pushed us to reduce our AWS cost by half](https://lambda.grofers.com/response-to-covid-19-lessons-learned-in-aws-cost-optimization-b466f354b123){:target="_blank"} by Vishesh Jindal

- [Getting started with Ansible](https://steampunk.si/blog/getting-started-with-ansible/){:target="_blank"} by Tadej Borovšak: if you want to learn what Ansible is, what it does, and how it works, this is the post for you!


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-16/k6.svg" width="200"></p>
- [loadimpact/k6](https://github.com/loadimpact/k6){:target="_blank"}: a modern load testing tool for developers and testers in the DevOps era, using Go and JavaScript.

- [charmbracelet/glow](https://github.com/charmbracelet/glow){:target="_blank"}: render markdown on the CLI, with pizzazz

<p align="center"><img src="{{ site.url }}/images/diu-16/rga-demo.png" width="600"></p>
- [rga](https://phiresky.github.io/blog/2019/rga--ripgrep-for-zip-targz-docx-odt-epub-jpg/){:target="_blank"}: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-16/kubecon-na-2020.png" width="600"></p>
- [KubeCon NA 2020 Key Takeaways](https://blog.getambassador.io/kubecon-na-2020-key-takeaways-platforms-safety-and-end-users-cb6df12082e6){:target="_blank"} by Daniel Bryant: highlights and interesting stories from the CNCF flagship event.

- [Understanding Kubernetes Operators](https://caylent.com/understanding-kubernetes-operators){:target="_blank"} by Agustin Romano: despite the many tools available on Kubernetes, the effort to make cloud infrastructure management more scalable and automated is ongoing. Kubernetes operator is one of the tools designed to push automation past its limits.

<p align="center"><img src="{{ site.url }}/images/diu-16/karpenter.png" width="600"></p>
- [awslabs/karpenter](https://github.com/awslabs/karpenter){:target="_blank"}: Karpenter is a metrics-driven autoscaler built for Kubernetes and can run in any Kubernetes cluster anywhere. It's performant, extensible, and can autoscale anything that implements the Kubernetes scale subresource.

- [What’s new in Kubernetes 1.20?](https://sysdig.com/blog/whats-new-kubernetes-1-20/){:target="_blank"} by Víctor Cerrada: Kubernetes 1.20 is about to be released, and it comes packed with novelties! This release brings 43 enhancements, up from 34 in 1.19. Of those 43 enhancements, 11 are graduating to stable, 15 are completely new, and 17 are existing features that keep improving.

- [Don't Panic: Kubernetes and Docker](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/){:target="_blank"} by Jorge Castro: Kubernetes is deprecating Docker as a container runtime after v1.20. You do not need to panic, though. It’s not as dramatic as it sounds.

<p align="center"><img src="{{ site.url }}/images/diu-16/gitops-kubernetes.svg" width="600"></p>
- [Announcing the GitOps Working Group](https://www.weave.works/blog/announcing-gitops-working-group){:target="_blank"} by Daniel Lizio-Katzen: Amazon, Codefresh, GitHub, Microsoft, and Weaveworks are announcing the creation of the GitOps Working Group. Their goal is to "provide companies and individuals with the skills, knowledge and competency to implement GitOps tooling and methodologies".


## 🔐 Security 

- [An iOS zero-click radio proximity exploit odyssey](https://googleprojectzero.blogspot.com/2020/12/an-ios-zero-click-radio-proximity.html){:target="_blank"} by Ian Beer: a wormable, radio-proximity exploit which allows complete control of any iPhone in its vicinity. View all photos, read emails, copy all the private messages and monitor everything which happens on the phone in real-time.

- [Achieving 100Gbps intrusion prevention on a single server](https://blog.acolyer.org/2020/11/16/pigasus/){:target="_blank"}


## 💻 Programming 

- [Advent Of Code 2020](https://adventofcode.com/2020){:target="_blank"}


## 📖 Machine Learning 

- [replicate/replicate](https://github.com/replicate/replicate){:target="_blank"}: version control for machine learning.

<p align="center"><img src="{{ site.url }}/images/diu-16/ms-ml.jpg" width="600"></p>
- [Microsoft: Machine Learning Models Can Be Easily Reverse Engineered](https://thenewstack.io/microsoft-machine-learning-models-can-be-easily-reverse-engineered/){:target="_blank"} by Joab Jackson: machine learning models, which can cost up to millions to produce, can be easily copied through surreptitious means, warned David Aronchick, partner and product manager for the Azure Innovations Group at Microsoft.


## 🐧 Linux 

- [Linux Command Basics: 7 commands for process management    ](https://www.redhat.com/sysadmin/linux-command-basics-7-commands-process-management){:target="_blank"} by Tyler Carrigan: if you're new to Linux and need help managing your processes, these basic commands are for you.


## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-16/apple-m1-board.jpg" width="600"></p>
- [Why Is Apple’s M1 Chip So Fast?](https://debugger.medium.com/why-is-apples-m1-chip-so-fast-3262b158cba2){:target="_blank"} by Erik Engheim: real-world experience with the new M1 Macs has started ticking in. They are fast. Real fast. But why? What is the magic?


## 🚢 Leadership 

- [What Inclusive Leaders Sound Like](https://hbr.org/2020/11/what-inclusive-leaders-sounds-like){:target="_blank"} by Noah Zandan & Lisa Shalett: leaders across virtually every industry are pledging to be more inclusive; but if their actions and behaviors don’t support those values, the progress stops there.

<p align="center"><img src="{{ site.url }}/images/diu-16/github-readme-project.png" width="600"></p>
- [The ReadME Project](https://github.blog/2020-12-01-devops-success-readme/){:target="_blank"} by Sasha Rosenbaum: to give our community a space to share lessons learned and DevOps best practices, GitHub is featuring articles from leaders in our community in The ReadME Project. Each talks through one of their end-to-end engineering processes, including toolchains, best practices and key performance indicators (KPIs).


## ☁️ Cloud 

- [Introducing Stardust instances](https://www.scaleway.com/en/stardust-instances-b/){:target="_blank"}: Scaleway has introduced the world's cheapest 1GB instances at €0.0025/hour ($2.22 USD/month). These Stardust instances include 1 vCPU, 1 IPv4 address, 10GB of local storage and up-to 100 Mbps of bandwidth.


## AWS 

- [Introducing gp3 EBS volumes](https://aws.amazon.com/about-aws/whats-new/2020/12/introducing-new-amazon-ebs-general-purpose-volumes-gp3/){:target="_blank"}: gp3, the next-generation of EBS SSD volumes, enables customers to provision performance independent of storage capacity and provides up to 20% lower price-point per GB than existing gp2 volumes. Finally, customers can scale IOPS (input/output operations per second) and throughput without needing to provision additional block storage capacity.

- [AWS Lambda now supports container images](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-now-supports-container-images-as-a-packaging-format/){:target="_blank"}: you can now package and deploy AWS Lambda functions using Docker images up to 10 GB in size. This makes it easy to build Lambda based applications using familiar container tooling, workflows, and dependencies.

- [Announcing Amazon EC2 Mac instances for macOS](https://aws.amazon.com/about-aws/whats-new/2020/11/announcing-amazon-ec2-mac-instances-for-macos/){:target="_blank"}: built on Apple Mac mini computers, EC2 Mac instances enable customers to run on-demand macOS workloads in the AWS cloud for the first time.

<p align="center"><img src="{{ site.url }}/images/diu-16/aws-proton.png" width="600"></p>
- [AWS Proton: A first look](https://aws.amazon.com/blogs/containers/intro-to-aws-proton/){:target="_blank"} by Brent Langston: Proton is a service designed for the platform engineering teams who want to offer their own self-service interface that provides opinionated methods for running serverless and container-based applications on AWS.

<p align="center"><img src="{{ site.url }}/images/diu-16/aws-ecr-public.jpg" width="600"></p>
- [Amazon launches their own public Docker registry](https://aws.amazon.com/blogs/aws/amazon-ecr-public-a-new-public-container-registry/){:target="_blank"} by Martin Beeby: ECR Public allows you to store, manage, share, and deploy container images for anyone to discover and download globally (no AWS account required).

<p align="center"><img src="{{ site.url }}/images/diu-16/aws-devops-guru.png" width="600"></p>
- [AWS announces Amazon DevOps Guru](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-announces-amazon-devops-guru-in-preview-an-ml-powered-cloud-operations-service-to-improve-application-availability-for-aws-workloads/){:target="_blank"}: Amazon DevOps Guru is a new machine learning powered service that gives you a simpler way to measure and improve an application’s operational performance and availability.

- [Announcing Babelfish for Aurora PostgreSQL](https://aws.amazon.com/about-aws/whats-new/2020/12/babelfish-amazon-aurora-postgresql-available-preview/){:target="_blank"}: with Babelfish, applications currently running on SQL Server can now run directly on Aurora PostgreSQL with little to no code changes.

- [us-east-1 Kinesis outage RCA](https://aws.amazon.com/message/11201/){:target="_blank"}: additional information about the service disruption that occurred in the Northern Virginia region on November 25th, 2020.

- [Secrets of AWS Contract Negotiation](https://www.lastweekinaws.com/blog/secrets-of-aws-contract-negotiation/){:target="_blank"} by Corey Quinn: "something that’s become very clear to us as we’ve gone through our client engagements is that companies shouldn’t let AWS contracts dictate their architectural decisions—and yet, most of them do on some level."

- [AWS just went multi-cloud … and it’s only the beginning](https://acloudguru.com/blog/business/aws-just-went-multi-cloud-and-its-only-the-beginning){:target="_blank"} by Forrest Brazeal: EKS Anywhere (and technically ECS Anywhere) will support workloads running on Azure and GCP as well as private data centers. AWS is now providing a single pane of glass that will let you roll out config updates, instrument monitoring, and connect other app services to container workloads on your cloud of choice.


*Article version: 1.0.0*

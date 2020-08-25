---
layout: post
title: "DevOps Industry Updates #9"
---

It's been a busy couple of weeks in Containerland! The remote edition of KubeCon Europe was a smashing success, AWS released Controllers for Kubernetes, Kubernetes v1.19 is hot off the presses and Docker Hub surprised us with new rate limits for free users. Grab your coffee, issue #9 of DevOps Industry Updates is here:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Thinking of Skipping Vacation? Don’t!](https://hbr.org/2020/08/thinking-of-skipping-vacation-dont){:target="_blank"}
1. [Docker Hub to rate-limit free users](https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/){:target="_blank"}
1. [Announcing Terraform 0.13](https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-13/){:target="_blank"}
1. [Become an Expert At Picking Quality Python Libraries](https://realpython.com/products/managing-python-dependencies/){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-9/thinking-of-skipping-vacation-dont.jpg" width="600"></p>
- [Thinking of Skipping Vacation? Don’t!](https://hbr.org/2020/08/thinking-of-skipping-vacation-dont){:target="_blank"} by Rebecca Zucker: many of us have had our summer vacation plans cancelled due to the pandemic. Whatever your thwarted plans entailed, you might be thinking of skipping a vacation altogether. And given that productivity has been hampered for many of us over the last few months, it’s easy to think, “I should keep working, so I can get more done,” or “What’s the point?”. Don't give into that thinking!

<p align="center"><img src="{{ site.url }}/images/diu-9/io-diego-garcia.jpg" width="600"></p>
- [The dark side of .io domains](https://gigaom.com/2014/06/30/the-dark-side-of-io-how-the-u-k-is-making-web-domain-profits-from-a-shady-cold-war-land-deal/){:target="_blank"} by David Meyer: the .io country code top-level domain is pretty popular right now, particularly among tech startups that want to take advantage of the snappy input/output reference and the relative availability of names. But who benefits from the sale of .io domains?

<p align="center"><img src="{{ site.url }}/images/diu-9/tweet.png" width="600"></p>
- [Hot take on a new AWS region](https://mobile.twitter.com/cperciva/status/1292260921893457920){:target="_blank"} by Colin Percival

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-9/docker.png" width="400"></p>
- [Docker Hub to rate-limit free users](https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/){:target="_blank"} by Jean-Laurent De Morlhon: effective November 1, 2020, anonymous Docker Hub users will be limited to 100 pulls per 6 hours and authenticated users will get 200 pulls in the same time-span. Users on the free plan will also be exposed to a new image retention policy which purges images after 6 months of inactivity. "We are making this move to optimize operations and make the Docker Hub service even stronger for developers and development teams around the world", Docker said. Approximately 4.5PB of images are expected to be purged when the new retention policy is enacted.

- [Why managing dev environments is a full time job at Eventbrite](https://kelda.io/blog/eventbrite-interview/){:target="_blank"} by Kevin Lin: how do you decide that it’s worth investing in a large change to your development workflow before development has ground to a halt? In this post, we’ll dig into how Eventbrite Principal Engineer Remy DeWolf made this tough decision and how he got buy-in from the rest of the company.

<p align="center"><img src="{{ site.url }}/images/diu-9/terraform.svg" width="600"></p>
- [Announcing Terraform 0.13](https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-13/){:target="_blank"} by Petros Kolyvas: the 0.13 release of Terraform builds on the powerful language improvements made with 0.12, with a focus on improved usability for module-specific workflows and enhancements to our vibrant and growing provider ecosystem. Features include automatic installation of 3rd-party providers, custom variable validation and `terraform login` for interacting with Terraform Cloud.

<p align="center"><img src="{{ site.url }}/images/diu-9/tektonhub.png" width="600"></p>
- [Introducing Tekton Hub](https://cd.foundation/blog/2020/08/10/introducing-tekton-hub/){:target="_blank"}: Tekton Pipelines, a flexible Kubernetes-native CI/CD framework for building application delivery pipelines, reached the beta milestone a few months ago. Tekton Hub provides a central hub for searching and sharing Tekton resources across many distributed Tekton catalogs hosted by various organizations and teams.

## 🛠️ DevOps Tools 

- [lambci/docker-lambda](https://github.com/lambci/docker-lambda){:target="_blank"} by Michael Hart: Docker images and test runners that replicate the live AWS Lambda environment.

- [pomerium/pomerium](https://github.com/pomerium/pomerium){:target="_blank"}: Pomerium is an identity-aware proxy that enables secure access to internal applications. Pomerium provides a standardized interface to add access control to applications regardless of whether the application itself has authorization or authentication baked-in. Pomerium gateways both internal and external requests, and can be used in situations where you'd typically reach for a VPN.

- [Diagram as Code](https://diagrams.mingrammer.com){:target="_blank"} by MinJae Kwon: Diagrams lets you draw the cloud system architecture in Python code. Diagram as Code allows you to track the architecture diagram changes in any version control system.

## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-9/kubernetes-1.19.png" width="600"></p>
- [What’s New in Kubernetes 1.19? New Features and Updates](https://www.stackrox.com/post/2020/08/whats-new-in-kubernetes-1-19/){:target="_blank"} by Wei Lien Dang: version 1.19 of Kubernetes incorporates a number of changes and enhancements that emphasize the maturity and production readiness of Kubernetes, including several notable feature promotions to general availability (Ingress and seccomp), security enhancements (TLS 1.3 support) and improvements to address technical debt.

- [From Zero to Kubernetes Operator](https://medium.com/@victorpaulo/from-zero-to-kubernetes-operator-dd06436b9d89){:target="_blank"} by Victor Paulo: this post explains the creation of a simple Kubernetes Operator so that you can understand the main concepts and trade-off of the Operator pattern.

<p align="center"><img src="{{ site.url }}/images/diu-9/gemini.png" width="400"></p>
- [Gemini: Automate Backups of PersistentVolumes in Kubernetes](https://www.fairwinds.com/blog/gemini-automate-backups-of-persistentvolumes-in-kubernetes){:target="_blank"} by Robert Brennan: automate the backup and restoration of PersistentVolumes. Gemini consists of a new CRD (the SnapshotGroup) as well as an operator that creates, deletes, and restores snapshots.

- [Introducing Hierarchical Namespaces](https://kubernetes.io/blog/2020/08/14/introducing-hierarchical-namespaces/){:target="_blank"} by Adrian Ludwin: hierarchical namespaces are a new concept developed to address complexities with multi-tenancy. In its simplest form, a hierarchical namespace is a regular Kubernetes namespace that contains a small custom resource that identifies a single, optional, parent namespace. This establishes the concept of ownership across namespaces, not just within them.

- [Kubecon Europe: we learned a lot from self-hosting Kubernetes, but we wouldn't do it again](https://www.computing.co.uk/news/4019233/monzo-learned-lot-self-hosting-kubernetes-wouldn’){:target="_blank"} by John Leonard

- [Kubecon Europe: GitOps gains momentum among Kubernetes deployment tools](https://searchitoperations.techtarget.com/news/252487865/GitOps-gains-momentum-among-Kubernetes-deployment-tools){:target="_blank"} by Beth Pariseau: the growing popularity of Kubernetes GitOps tools reflects increasing cloud-native maturity and complexity among enterprise shops such as American Express.

- [How the Cortex and Thanos projects collaborate to make scaling Prometheus better for all](https://grafana.com/blog/2020/07/16/how-the-cortex-and-thanos-projects-collaborate-to-make-scaling-prometheus-better-for-all/){:target="_blank"} by Marco Pracucci

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-9/gsuite_spf_bypass.png" width="300"></p>
- [The Confused Mailman: Sending SPF and DMARC passing mail as any Gmail or G Suite customer](https://ezh.es/blog/2020/08/the-confused-mailman-sending-spf-and-dmarc-passing-mail-as-any-gmail-or-g-suite-customer/){:target="_blank"} by Allison Husain: due to missing verification when configuring mail routes, both Gmail’s and any G Suite customer’s strict DMARC/SPF policy may be subverted by using G Suite’s mail routing rules to relay and grant authenticity to fraudulent messages.

<p align="center"><img src="{{ site.url }}/images/diu-9/canon.jpg" width="400"></p>
- [Canon's cloud platform has lost users' files – and it CAN'T restore them](https://www.digitalcameraworld.com/news/canon-websites-held-to-ransom-by-hackers){:target="_blank"} by Louise Carey: after losing users' photo & video files, Canon has admitted that it can only restore photos – but not at their original resolution.

## 💻 Programming 

- [How Shopify Reduced Storefront Response Times with a Rewrite](https://engineering.shopify.com/blogs/engineering/how-shopify-reduced-storefront-response-times-rewrite){:target="_blank"} by Maxime Vaillancourt: in January 2019, we set out to rewrite the critical software that powers all online storefronts on Shopify’s platform to offer the fastest online shopping experience possible, entirely from scratch and without downtime. Here's how we did it.

<p align="center"><img src="{{ site.url }}/images/diu-9/python-questions-annotated.png" width="600"></p>
- [Become an Expert At Picking Quality Python Libraries](https://realpython.com/products/managing-python-dependencies/){:target="_blank"} by Dan Bader: master pip, get to know `requirements.txt` files, virtual environments and most importantly, learn how to pick quality Python libraries.

## 🚢 Leadership 

- [4 reasons to invest in entry-level cloud talent](https://www.datadoghq.com/blog/dash-2020-new-feature-roundup/){:target="_blank"} by Kevin Kelly: how does an industry suddenly create a large number of highly-qualified cloud professionals with 15-plus years of experience? It doesn’t. Instead, businesses need to rethink who they hire and how they train and retain them. Rather than chasing and competing for a limited number of highly-experienced professionals, employers should surround their most experienced employees with highly motivated, entry-level talent with strong foundational cloud skills.

## ☁️ Cloud 

- [10 Obstacles for Lift & Shift Architectures](https://cloudonaut.io/10-obstacles-for-lift-and-shift-architectures/){:target="_blank"} by Andreas Wittig: the cloud is not only about greenfield projects. Over the last few years I have accompanied several enterprises in large migration projects from on-premises to the Amazon Web Services (AWS). This blog post gives an overview of typical obstacles for lift & shift architectures and points out possible solutions.

<p align="center"><img src="{{ site.url }}/images/diu-9/kafka-vs-kinesis.jpeg" width="600"></p>
- [Kinesis vs. Kafka](https://medium.com/flo-engineering/kinesis-vs-kafka-6709c968813){:target="_blank"} by Henadz Varantsou: for the past two years, we’ve used AWS Kinesis as our internal message broker. However, the more we’ve worked with it, the more pitfalls we’ve found. The most promising replacement candidate for us was Kafka and during our investigation, one question arose: whether Kafka is better than Kinesis from a latency/throughput perspective. So, we decided to find out the answer through benchmarks.

## AWS 

- [Introducing the AWS Controllers for Kubernetes (ACK)](https://aws.amazon.com/blogs/containers/aws-controllers-for-kubernetes-ack/){:target="_blank"} by Jay Pipes: AWS Controllers for Kubernetes (ACK) is a new tool that lets you directly manage AWS services from Kubernetes. ACK makes it simple to build scalable and highly-available Kubernetes applications that utilize AWS services. This post will give you a brief introduction to the history of the ACK project, show you how ACK works, and how you can start to use the ACK or contribute.

<p align="center"><img src="{{ site.url }}/images/diu-9/arm.jpg" width="600"></p>
- [AWS Graviton2 brings major performance leap to Amazon EKS](https://aws.amazon.com/blogs/containers/eks-on-graviton-generally-available/){:target="_blank"} by Anthony Spadafora: AWS customers can now run containers on EKS more efficiently thanks to Graviton2. The Arm chip designed by AWS provides a number of improvements over its predecessor including two times faster floating point performance per core, optimized instructions for faster machine learning inference, customer hardware acceleration, always-on fully encrypted DDR4 memory and 50 percent faster per core encryption performance for enhanced security.

<p align="center"><img src="{{ site.url }}/images/diu-9/ssm-port-forwarding.png" width="600"></p>
- [Amazon EC2 instance port forwarding with AWS Systems Manager](https://aws.amazon.com/blogs/mt/amazon-ec2-instance-port-forwarding-with-aws-systems-manager/){:target="_blank"} by Sigit Priyanggoro: port forwarding is a useful way to redirect network traffic from one IP address and port number combination to another. In this post, we setup port forwarding to access an EC2 instance located in a private subnet from your workstation, without traversing a NAT gateway or bastion host.

<p align="center"><img src="{{ site.url }}/images/diu-9/aws-braket.png" width="600"></p>
- [Quantum computing is now available on AWS through Amazon Braket](https://aws.amazon.com/braket/){:target="_blank"}: Amazon Braket provides a development environment to design quantum algorithms, test them on simulated quantum computers, and run them on different types of quantum computing hardware.

- [AWS Lambda now supports custom runtimes on Amazon Linux 2](https://aws.amazon.com/about-aws/whats-new/2020/08/aws-lambda-supports-custom-runtimes-amazon-linux-2/){:target="_blank"}: you can now develop your AWS Lambda functions using custom runtimes on Amazon Linux 2, the latest generation of Amazon Linux.

## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-9/gcp-cilium.jpg" width="600"></p>
- [New GKE Dataplane V2 increases security and visibility for containers](https://cloud.google.com/blog/products/containers-kubernetes/bringing-ebpf-and-cilium-to-google-kubernetes-engine){:target="_blank"} by Gobind Johar & Varun Marupadi: Google Kubernetes Engine introduces Dataplane V2, an opinionated dataplane that harnesses the power of eBPF and Cilium, an open source project that makes the Linux kernel Kubernetes-aware using eBPF. Now in beta, Dataplane V2 also brings Kubernetes Network Policy logging to GKE.


*Article version: 1.0.0*

---
layout: post
title: "DevOps Industry Updates #5"
---

Time flies! It's already been a week since my last newsletter and like always, I've been searching the jungles of the internet gathering only the juiciest newsfruit which I've blended together here into what is issue #5 of DevOps Industry Updates:

## 🔥 Top Cream

This issue's top 3 stories:

1. [EKS now supports Kubernetes 1.17!](https://github.com/awsdocs/amazon-eks-user-guide/blob/master/doc_source/kubernetes-versions.md#kubernetes-117){:target="_blank"}
1. [Announcing HAProxy 2.2](https://www.haproxy.com/blog/announcing-haproxy-2-2/){:target="_blank"}
1. [Messaging on AWS](https://cloudonaut.io/messaging-on-aws/){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-5/eff-30.png" width="600"></p>
- [EFF 30th Anniversary](https://www.eff.org/tags/eff30){:target="_blank"} by Cindy Cohn: the leading nonprofit defending digital privacy, free speech, and innovation for 30 years and counting!

<p align="center"><img src="{{ site.url }}/images/diu-5/apple-wwdc.jpg" width="600"></p>
- [Virtual Conferences Mean All-Access—Except When They Don't](https://www.wired.com/story/wwdc-virtual-conferences-inclusion/){:target="_blank"} by Lauren Goode: The end of WWDC marks the end of Big Tech’s conference season. What did this virtual experiment reveal about the meaning of community?

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-5/haproxy.png" width="600"></p>
- [Announcing HAProxy 2.2](https://www.haproxy.com/blog/announcing-haproxy-2-2/){:target="_blank"} by Daniel Corbett: HAProxy Technologies is excited to announce the release of HAProxy 2.2, featuring a fully dynamic SSL certificate storage, a native response generator, an overhaul to its health checking system, and advanced ring logging with syslog over TCP.

<p align="center"><img src="{{ site.url }}/images/diu-5/terraform.png" width="600"></p>
- [Creating Module Dependencies in Terraform 0.13](https://medium.com/hashicorp-engineering/creating-module-dependencies-in-terraform-0-13-4322702dac4a){:target="_blank"} by Roger Berlind: discusses an example of making one module depend on another module with the new `depends_on` meta-argument. This has been one of the most frequently requested enhancements in Terraform for a long time.

<p align="center"><img src="{{ site.url }}/images/diu-5/slack.png" width="450"></p>
- [A Terrible, Horrible, No-Good, Very Bad Day at Slack](https://slack.engineering/a-terrible-horrible-no-good-very-bad-day-at-slack-dfe05b485f82){:target="_blank"} by Laura Nolan: a great story with new technical details of the problems that caused the Slack downtime on May 12th, 2020.

<p align="center"><img src="{{ site.url }}/images/diu-5/cloudfront-invalidation.png" width="600"></p>
- [Hosting your entire web application using S3 + CloudFront](https://www.sankalpjonna.com/posts/hosting-your-entire-web-application-using-s3-cloudfront){:target="_blank"} by Sankalp Jonna: more elegant and cost effective than a VM and has no need for maintenance. This method makes use of AWS S3 and AWS Cloudfront and it’s turned out to be significantly easier to set up, scales infinitely and is cheaper than the alternative.

## 🛠️ DevOps Tool(s)

<p align="center"><img src="{{ site.url }}/images/diu-5/dockle.png" width="500"></p>
- [goodwithtech/dockle](https://github.com/goodwithtech/dockle){:target="_blank"} by Tomoya Amachi: a container image linter for security, helping build best-practice Docker images.

## ☸️ Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-5/k8s.png" width="300"></p>
- [5 Things We Overlooked When Deploying Our First App on Kubernetes](https://medium.com/gumgum-tech/5-things-we-overlooked-when-putting-our-first-app-on-kubernetes-58583c1783e4){:target="_blank"} by Julian Gindi: through our use of Kubernetes at GumGum, we have encountered a number of “gotchas” that we wanted to list here to help you cover your bases before launching your app on Kubernetes.

- [Kubernetes and Networks - why is this so dang hard?](https://speakerdeck.com/thockin/kubernetes-and-networks-why-is-this-so-dang-hard){:target="_blank"} by Tim Hockin: a brief look at models for integrating Kubernetes clusters into existing networks.

<p align="center"><img src="{{ site.url }}/images/diu-5/wireguard.png" width="600"></p>
- [WireGuard on Kubernetes with Adblocking](https://codingcoffee.dev/blog/wireguard_on_kubernetes_with_adblocking/){:target="_blank"} by Ameya Shenoy: being a big fan of Kubernetes and maintaining infrastructure as code, I wanted a way to be able to easily deploy and version control my deployment. After much searching I stumbled upon, kilo, a network overlay built on WireGuard for Kubernetes.

## 🔐 Security

<p align="center"><img src="{{ site.url }}/images/diu-5/gdpr-consent.png" width="600"></p>
- [Only 9% of visitors give GDPR consent to be tracked](https://markosaric.com/gdpr-consent/){:target="_blank"} by Marko Saric: I wanted to find out how many visitors would engage with a GDPR banner if it were implemented properly and how many would grant consent to their information being collected and shared.

## 💻 Programming

- [Moving from TypeScript to Rust / WebAssembly](https://nicolodavis.com/blog/typescript-to-rust/){:target="_blank"} by Nicolo Davis: I recently decided to switch the engine of Boardgame Lab from TypeScript to Rust. Here is a summary of my experience with the transition.

<p align="center"><img src="{{ site.url }}/images/diu-5/rust-playground.png" width="600"></p>
- [The Rust playground is pretty dope](https://mobile.twitter.com/kelseyhightower/status/1281209550717071360){:target="_blank"} by Kelsey Hightower: damn near a full blown IDE running in your browser that lets you kick the tires on Rust with little to no friction. [play.rust-lang.org](https://play.rust-lang.org){:target="_blank"}.

## 📖 Machine Learning 

<p align="center"><img src="{{ site.url }}/images/diu-5/dmt.png" width="600"></p>
- [Classifying 200,000 articles in 7 hours using NLP](https://salt.agency/blog/nlp-and-stuff/){:target="_blank"} by Reza Moaiandin: every now and then, consultancy firms face challenges that are abnormal and create new solutions. We faced that last year, to classify over a quarter of a million articles with a very limited budget.

## 🐧 Linux 

- [SUSE to acquire Rancher Labs](https://www.zdnet.com/article/suse-to-acquire-rancher-labs/){:target="_blank"} by Steven J. Vaughan-Nichols: SUSE takes a big step forward in Kubernetes by acquiring container-management power Rancher Labs.

- [Linux kernel in-tree Rust support](https://lore.kernel.org/lkml/CAKwvOdmuYc8rW_H4aQG4DsJzho=F+djd68fp7mzmBp3-wY--Uw@mail.gmail.com/T/#u){:target="_blank"} by Nick Desaulniers: official thread discussing the merits of including Rust in the Linux kernel.

## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-5/skywater-pdk.png" width="600"></p>
- [Produce your own physical chips. For free. In the Open.](https://fossi-foundation.org/2020/06/30/skywater-pdk){:target="_blank"} By Philipp Wagner: Tim Ansell of Google announced SkyWater PDK, the first manufacturable, open source process design kit. What differentiates this PDK from previous attempts is the fact that it is manufacturable: with this PDK, you can actually produce chips with the SkyWater foundry in the 130nm node.

## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-5/distributed-teams.png" width="600"></p>
- [Distributed Teams, Distributed Applications: Collaboration in a Cloud Native World](https://thenewstack.io/distributed-teams-distributed-applications-collaboration-in-a-cloud-native-world/){:target="_blank"} by Mike Winters: how to improve asynchronous collaboration while considering tools that optimize access and consistency.

<p align="center"><img src="{{ site.url }}/images/diu-5/xkcd-is-it-worth-the-time.png" width="500"></p>
- [Every second matters - the hidden costs of unoptimized developer workflows](https://humanitec.com/blog/hidden-costs-of-unoptimized-developer-workflows){:target="_blank"} by Kaspar von Grünberg: we tend to underestimate how inefficient workflows impact developer productivity and distract from the task at hand. In this article we explain the first- and second-order effects of inefficient developer workflows.

## ☁️ Cloud 

## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-5/kubernetes-1.17.png" width="400"></p>
- [EKS now supports 1.17!](https://github.com/awsdocs/amazon-eks-user-guide/blob/master/doc_source/kubernetes-versions.md#kubernetes-117){:target="_blank"}: Kubernetes 1.17 is now available in Amazon EKS. For more information about Kubernetes 1.17, see the [official release announcement](https://kubernetes.io/blog/2019/12/09/kubernetes-1-17-release-announcement/){:target="_blank"}.

<p align="center"><img src="{{ site.url }}/images/diu-5/aws-messaging-kinesis.png" width="600"></p>
- [Messaging on AWS](https://cloudonaut.io/messaging-on-aws/){:target="_blank"} by Michael Wittig: following a previous post comparing all database options offered by AWS, this post does a great job of providing an overview of the available messaging options.

- [13 lessons learned from taking 8 AWS certification tests in 4 weeks](https://medium.com/@quinn.richard/14-lessons-learned-from-taking-8-aws-certification-tests-in-4-weeks-b10b2c296c14){:target="_blank"} by Richard Quinn: some interesting takeaways from a speed-run of AWS certifications.

<p align="center"><img src="{{ site.url }}/images/diu-5/amazon-codeguru.png" width="600"></p>
- [Amazon CodeGuru now generally available](https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-codeguru-now-generally-available/){:target="_blank"}: Amazon CodeGuru is a developer tool powered by machine learning that provides intelligent recommendations for improving code quality and identifying an applications’ most expensive lines of code.

- [Amazon RDS Proxy is Generally Available](https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-rds-proxy-generally-available/){:target="_blank"}: Amazon RDS Proxy, a fully managed, highly available database proxy for Amazon Relational Database Service (RDS), is now generally available with MySQL and PostgreSQL compatibility. RDS Proxy makes applications more scalable, more resilient to database failures, and more secure.

<p align="center"><img src="{{ site.url }}/images/diu-5/copilot-help.png" width="600"></p>
- [Introducing AWS Copilot](https://aws.amazon.com/blogs/containers/introducing-aws-copilot/){:target="_blank"} by Nathan Peck: Copilot creates modern application deployments by default, based on production-ready patterns that include best practices designed by ECS engineers and customers over the years.

## Azure 

<p align="center"><img src="{{ site.url }}/images/diu-5/azure-scale-sets.png" width="600"></p>
- [Build, distribute, and deploy application updates to Azure virtual machine scale sets](https://azure.microsoft.com/en-us/blog/build-distribute-and-deploy-application-updates-to-azure-virtual-machine-scale-sets/){:target="_blank"} by Mayank Nayar: describes how you can use integrated Azure services to build custom images with your application updates, distribute those images across your organization and automatically deploy the new images to your virtual machine scale sets.

## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-5/gcp-compute.jpg" width="600"></p>
- [New Compute Engine A2 VMs](https://cloud.google.com/blog/products/compute/announcing-google-cloud-a2-vm-family-based-on-nvidia-a100-gpu){:target="_blank"} by Chris Kleban: the A2 VM family was designed to meet today’s most demanding applications. Each A100 GPU offers up to 20x the compute performance compared to the previous generation GPU and comes with 40 GB of high-performance HBM2 GPU memory.

*Article version: 1.0.0*

---
layout: post
title: "DevOps Industry Updates: March 2020"
permalink: /devops-industry-updates-march-2020/
---

The [COVID-19 outbreak](https://www.cdc.gov/coronavirus/2019-ncov/index.html){:target="_blank"} is now a global pandemic and many of us are now in work from home (WFH) mode. While we learn what it’s really like to be a remote member on our team, DevOps continues to move forward at lightning speeds. Here are some of the most recent updates, perfect reading for taking breaks while WFH:

## DevOps

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/linux-features-containers.png" width="600"></p>
- [Notable Tweet ^ by Julia Evans](https://twitter.com/b0rk/status/1237387483987374083){:target="_blank"} (`@b0rk`): the Linux kernel features that make containers work

- [The Case Against Jenkins In 2020](https://medium.com/@shrayk/the-case-against-jenkins-in-2020-310276e39280){:target="_blank"} by Shray Kumar: here are ten reasons DevOps engineers pitching Jenkins provide themselves with job security and don’t want you to know there are better solutions to your problems.

## Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/opi.png" width="500"></p>
- [Open Policy Agent’s Mission to Secure the Cloud](https://thenewstack.io/open-policy-agents-mission-to-secure-the-cloud/){:target="_blank"} by Jevon MacDonald: OPA is an open-source tool that enables the enforcement of a wide range of policies across domains and all layers in the stack.

- [What makes a good Operator?](https://blog.openshift.com/what-makes-a-good-operator/){:target="_blank"} by Chris Short and Daniel Messer: recommendations concerning the design of an Operator as well as behavioral best practices that come into play at runtime.

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/visa.png" width="300"></p>
- [How Visa built its own container security solution](https://www.csoonline.com/article/3529974/how-visa-built-its-own-container-security-solution.html){:target="_blank"} by Lucian Constantin: the homegrown solution takes advantage of the native capabilities that already exist on container orchestration platforms and is primarily built on top of open-source tools and libraries.

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/terraform-operator.png" width="600"></p>
- [Creating Workspaces with the HashiCorp Terraform Operator](https://www.hashicorp.com/blog/creating-workspaces-with-the-hashicorp-terraform-operator-for-kubernetes/){:target="_blank"} by Rosemary Wang: the new Operator lets you define and create infrastructure as code natively in Kubernetes by making calls to Terraform Cloud.

## Security

- [Crafty Web Skimming Domain Spoofs “https”](https://krebsonsecurity.com/2020/03/crafty-web-skimming-domain-spoofs-https/){:target="_blank"} by Brian Krebs: KrebsOnSecurity alerted the 10th largest food distributor in the United States that one of its Web sites had been hacked and retrofitted with code that steals credit card and login data.

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/wireguard.jpg" width="500"></p>
- [WireGuard Gives Linux a Faster, More Secure VPN](https://www.wired.com/story/wireguard-gives-linux-faster-secure-vpn/){:target="_blank"} by Klint Finley: the virtual private network software from security researcher Jason Donenfeld wins fans with its simplicity and ease of auditing.

## Amazon Web Services

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/aws.png" width="400"></p>

#### Tech & Managed Services

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/elasticache-redis.png" width="500"></p>
- [Now Available: Amazon ElastiCache Global Datastore for Redis](https://aws.amazon.com/blogs/aws/now-available-amazon-elasticache-global-datastore-for-redis/){:target="_blank"} by Julien Simon: Global Datastore is a new feature of Amazon ElastiCache for Redis that provides fully managed, fast, reliable and secure cross-region replication.

- [Amazon CloudWatch now allows you to combine multiple alarms](https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-cloudwatch-now-allows-you-to-combine-multiple-alarms/){:target="_blank"}: with Amazon CloudWatch composite alarms, you can now combine multiple alarms to reduce alarm noise.

- [Amazon EKS now supports Kubernetes version 1.15](https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-eks-now-supports-kubernetes-version-1-15/){:target="_blank"}: highlights include support for configuring TLS termination on NLB load balancers, improved support for CustomResourceDefinitions, as well as NodeLocal DNSCache graduating to beta.

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/bottlerocket.png" width="300"></p>
- [Bottlerocket - Open Source OS for Container Hosting](https://aws.amazon.com/blogs/aws/bottlerocket-open-source-os-for-container-hosting/){:target="_blank"} by Jeff Barr: Linux-based operating system purpose-built to run containers on virtual machines or bare metal hosts.

- [Reduce ML inference costs on PyTorch with Amazon Elastic Inference](https://aws.amazon.com/about-aws/whats-new/2020/03/reduce-ml-inference-costs-pytorch-amazon-elastic-inference/){:target="_blank"}: you can now use Amazon Elastic Inference to accelerate inference and reduce inference costs for PyTorch models in Amazon SageMaker, Amazon EC2 and Amazon ECS.

#### Limits

- [CloudWatch now provides more metric data, faster](https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-cloudwatch-now-provides-more-metric-data-faster-with-getmetricdata-quota-increase/){:target="_blank"}: GetMetricData quota increased from 100 to 500 metrics per request.

- [Amazon CloudWatch dashboards metric quotas have increased](https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-cloudwatch-dashboards-metric-quotas-increased/){:target="_blank"}: Amazon CloudWatch now supports up to five times the number of metrics per graph and dashboard than before.

#### Articles

- [AWS Session Manager: less infrastructure, more features](https://github.com/symopsio/terraform-okta-ssm-modules/blob/master/docs/AWSSessionManagerLessInfrastructureMoreFeatures.md){:target="_blank"} by Jon Bass: what we learned implementing Session Manager at Sym and how it can help simplify your infrastructure.

## Google Compute Platform

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/gke.png" width="300"></p>
- [GKE adds Cluster Management Fee](https://cloud.google.com/kubernetes-engine/pricing){:target="_blank"}: starting June 6, 2020, GKE clusters will accrue a management fee of $0.10 per cluster per hour, irrespective of cluster size or topology.

## Programming

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/rust.png" width="250"></p>
- [Rewriting the heart of our sync engine](https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine){:target="_blank"} by Sujay Jayakar: the sync engine is the magic behind the Dropbox folder on your desktop computer, and it's one of the oldest and most important pieces of code at Dropbox.

<p align="center"><img src="{{ site.url }}/images/diu-mar-2020/github-mobile.jpeg" width="600"></p>
- [GitHub’s new mobile app is now available on iOS and Android](https://www.theverge.com/2020/3/17/21184254/github-mobile-app-now-available-download-ios-android-microsoft){:target="_blank"} by Jay Peters: (But you can’t edit code on it) GitHub released its new mobile app on March 17th as a free download for iOS and Android.

*Article version: 1.1.0*

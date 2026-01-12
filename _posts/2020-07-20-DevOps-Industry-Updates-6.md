---
layout: post
title: "DevOps Industry Updates #6"
permalink: /devops-industry-updates-6/
---

Houston, we have production problems! It's been a busy week in Cloud Operations Land - GitHub went down (again), Twitter experienced a massive security breach of their internal tools and Cloudflare had a 27 minute outage, causing issues for millions of users worldwide. Get your coffee ready, issue #6 of DevOps Industry Updates is here!

## 🔥 Top Cream

This issue's top 5 stories:

1. [CDK for Terraform: Enabling Python & TypeScript Support](https://www.hashicorp.com/blog/cdk-for-terraform-enabling-python-and-typescript-support/){:target="_blank"}
1. [Python malware on the rise](https://www.cyborgsecurity.com/python-malware-on-the-rise/){:target="_blank"}
1. [Data Structures & Algorithms I Actually Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/){:target="_blank"}
1. [The Impact of a Major Security Event on an Open Source Project: The Case of OpenSSL](https://arxiv.org/abs/2005.14242){:target="_blank"}
1. [microsoft/ProcMon-for-Linux](https://github.com/microsoft/ProcMon-for-Linux){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-6/github-down.jpg" width="600"></p>
- [GitHub Outage Impacts Millions of Developers](https://www.cbronline.com/news/github-outage-impacts-millions-of-developers-issue-found-fix-coming){:target="_blank"} by Ed Targett: a major GitHub outage has developers starting the week with gritted teeth, after the software development platform went down.

- [When your coworker does great work, tell their manager](https://jvns.ca/blog/2020/07/14/when-your-coworker-does-great-work-tell-their-manager/){:target="_blank"} by Julia Evans: I think telling someone’s manager they’re doing great work is a pretty common practice and it can be really helpful, but it’s easy to forget to do and I wish someone had suggested it to me earlier. So let’s talk about it - what to say, when to do this, and why you should ask first.

<p align="center"><img src="{{ site.url }}/images/diu-6/kubecon-online-passes.jpg" width="600"></p>
- [Register for Virtual KubeCon Europe 2020](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/register/){:target="_blank"} by Linux Foundation: access to the entire immersive event experience, including keynote and breakout sessions, sponsor showcase, and conference activities is $75, access to just keynote sessions and the sponsor showcase is free!

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-6/typescript-aws-autocomplete.png" width="600"></p>
- [CDK for Terraform: Enabling Python & TypeScript Support](https://www.hashicorp.com/blog/cdk-for-terraform-enabling-python-and-typescript-support/){:target="_blank"} by Rosemary Wang & Anubhav Mishra: the Cloud Development Kit for Terraform allows you to define infrastructure using TypeScript and Python while leveraging the hundreds of providers and thousands of module definitions provided by Terraform and the Terraform ecosystem. By leaning on languages like TypeScript, you can use all the IDE features you depend on, such as IntelliSense in Visual Studio Code.

<p align="center"><img src="{{ site.url }}/images/diu-6/fluentbit-1.5.png" width="600"></p>
- [Fluent Bit v1.5: Lightweight and High-performance Log Processor](https://www.cncf.io/blog/2020/07/14/fluent-bit-v1-5-lightweight-and-high-performance-log-processor/){:target="_blank"} by Eduardo Silva: Fluent Bit v1.5 comes with an optimized storage layer and general improvements for memory management and data safety. In addition, the Google Stackdriver plugin has been heavily extended to support Kubernetes resources, operations and labels.

<p align="center"><img src="{{ site.url }}/images/diu-6/python-ip-addresses.jpg" width="600"></p>
- [Learn IP Address Concepts With Python's ipaddress Module](https://realpython.com/python-ipaddress-module/){:target="_blank"} by Brad Solomon: in this tutorial, you’ll get a better grasp of IP addresses by using some of the features of Python’s `ipaddress` module. This knowledge will come in handy if you ever need to programmatically calculate things like remaining IP counts or CIDR masks.

<p align="center"><img src="{{ site.url }}/images/diu-6/secrets-shh.jpg" width="600"></p>
- [Dynamic Secret Generation with Vault and Flask](https://testdriven.io/blog/dynamic-secret-generation-with-vault-and-flask/){:target="_blank"} by Michael Herman: in this tutorial, we'll look at a quick, real-world example of using Hashicorp's Vault and Consul to create dynamic Postgres credentials for a Flask web app.

<p align="center"><img src="{{ site.url }}/images/diu-6/terraform.svg" width="600"></p>
- [Learn How to Import Infrastructure Into Terraform](https://www.hashicorp.com/blog/import-infrastructure-into-terraform/){:target="_blank"} by Robin Norwood: Terraform not only allows you to create and manage greenfield infrastructure, but also to manage existing resources for a variety of popular infrastructure providers. You can migrate manually created infrastructure to Terraform in order to use its powerful configuration language and workflow over the entire lifecycle of your project.

- [How Many Database Joins Are Too Many?](https://thenewstack.io/the-new-stack-context-how-many-database-joins-are-too-many/){:target="_blank"} by Joab Jackson: why graph databases are gaining traction in the enterprise. “When you look at the full end-to-end complexity for using it in an application or maintaining your code, or updating edges, graph databases are going to make that a lot easier for the full lifecycle and maintenance of that application,” Denise Gosnell said.

## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-6/procmon.jpg" width="600"></p>
- [microsoft/ProcMon-for-Linux](https://github.com/microsoft/ProcMon-for-Linux){:target="_blank"} by Microsoft: Procmon is a Linux reimagining of the classic Procmon tool from the Sysinternals suite of tools for Windows. Procmon provides a convenient and efficient way for Linux developers to trace the syscall activity on the system.

<p align="center"><img src="{{ site.url }}/images/diu-6/cycloid.png" width="300"></p>
- [cycloidio/inframap](https://github.com/cycloidio/inframap){:target="_blank"} by Cycloid: read your tfstate or HCL to generate a graph specific for each provider, showing only the resources that are most important/relevant.

## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-6/kubeproxy.png" width="600"></p>
- [Explaining Kubernetes in 10 minutes using an analogy](https://opensource.com/article/20/7/kubernetes-analogy){:target="_blank"} by Satyajit Das: Having trouble understanding Kubernetes? Try this analogy of using a rental house to explain how it works.

- [Minimum Viable Kubernetes](https://eevans.co/blog/minimum-viable-kubernetes/){:target="_blank"}: just for fun, let's see what the absolute bare minimum "Kubernetes cluster" actually looks like (it's going to be a lot more minimal than setting up Kubernetes [the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way){:target="_blank"}).

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-6/python-malware-growth.jpg" width="600"></p>
- [Python malware on the rise](https://www.cyborgsecurity.com/python-malware-on-the-rise/){:target="_blank"} by Austin Jackson: as Python continues to grow radically in popularity and the C malware monoculture continues to be challenged, it would seem only certain that Python will be increasingly utilized as malware in cyber attacks.

- [The Impact of a Major Security Event on an Open Source Project: The Case of OpenSSL](https://arxiv.org/abs/2005.14242){:target="_blank"} by James Walden: the goal of this study is to determine how the Heartbleed vulnerability changed the software evolution of OpenSSL. We study changes in vulnerabilities, code quality, project activity, and software engineering practices.

<p align="center"><img src="{{ site.url }}/images/diu-6/twitter-hacked.jpg" width="600"></p>
- [Who’s Behind Wednesday’s Epic Twitter Hack?](https://krebsonsecurity.com/2020/07/whos-behind-wednesdays-epic-twitter-hack/){:target="_blank"} by Brian Krebs: Twitter was thrown into chaos on Wednesday after accounts for some of the world’s most recognizable public figures, executives and celebrities started tweeting out links to bitcoin scams. Twitter says the attack happened because someone tricked or coerced an employee into providing access to internal Twitter administrative tools. This post is an attempt to lay out some of the timeline of the attack, and point to clues about who may have been behind it.

- [Hacking with environment variables](https://www.elttam.com/blog/env/#content){:target="_blank"} by Luke Jahnke: this blog post discusses how arbitrary commands can be executed by a range of scripting language interpreters when supplied with malicious environment variables.

<p align="center"><img src="{{ site.url }}/images/diu-6/oauth.png" width="600"></p>
- [Everything You Need to Know About OAuth (2.0)](https://gravitational.com/blog/everything-you-need-to-know-about-oauth/){:target="_blank"} by Virag Mody: boiling down to its core purpose, OAuth exists to provide third party applications limited access to secure resources without compromising the user’s data. This one-stop-shop article provides you with all the basic concepts of the OAuth flow.

- [How SHA-2 Works Step-By-Step](https://qvault.io/2020/07/08/how-sha-2-works-step-by-step-sha-256/){:target="_blank"} by Lane Wagner: SHA-2 (Secure Hash Algorithm 2), of which SHA-256 is a part, is one of the most popular hashing algorithms out there. In this article, we are going to break down each step of the algorithm as simple as we can and work through a real-life example by hand.

## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-6/rust.jpg" width="500"></p>
- [Announcing Rust 1.45.0](https://blog.rust-lang.org/2020/07/16/Rust-1.45.0.html){:target="_blank"} by The Rust Release Team: there are two big changes to be aware of in Rust 1.45.0: a fix for some long-standing unsoundness when casting between integers and floats, and the stabilization of the final feature needed for one of the more popular web frameworks to work on stable Rust.

<p align="center"><img src="{{ site.url }}/images/diu-6/rust-cpu-graph.png" width="600"></p>
- [Rust is Surprisingly Good as a Server Language](https://stu2b50.dev/posts/rust-is-surpris76171){:target="_blank"} by stu2b50: testing out Rust by building a small scope blog, where a few, already trusted users can make, edit, and post new pages in markdown.

<p align="center"><img src="{{ site.url }}/images/diu-6/algorithms.jpg" width="600"></p>
- [Data Structures & Algorithms I Actually Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/){:target="_blank"} by Gergely Orosz: this article is a set of real-world examples where data structures like trees, graphs, and various algorithms were used in production. I hope to illustrate that a generic data structures and algorithms knowledge is not "just for the interview" - but something that you'd likely find yourself reaching for when working at fast-growing, innovative tech companies.

- [Continuations by example](http://matt.might.net/articles/programming-with-continuations--exceptions-backtracking-search-threads-generators-coroutines/){:target="_blank"} by Matt Might: I think part of the problem with continuations is that they're always explained with quasi-metaphysical phrases: "time travel," "parallel universes," "the future of the computation." I wrote this article so that my advanced compilers students could piece together how continuations worked by example.

## 🐧 Linux 

- [LXD 4.3 has been released](https://discuss.linuxcontainers.org/t/lxd-4-3-has-been-released/8303){:target="_blank"} by Stéphane Graber: this release comes with a lot of improvements especially for those using virtual machines. It also comes with quite a few bugfixes for our cluster users and general performance improvements.

## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-6/dd5.jpg" width="600"></p>
- [DDR5 Memory Specification Released](https://www.anandtech.com/show/15912/ddr5-specification-released-setting-the-stage-for-ddr56400-and-beyond){:target="_blank"} by Ryan Smith: the latest iteration of the DDR standard that has been driving PCs, servers, and everything in-between since the late 90s, DDR5 once again extends the capabilities of DDR memory, doubling the peak memory speeds while greatly increasing memory sizes as well. Hardware based on the new standard is expected in 2021.

## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-6/interview-anxiety.jpg" width="600"></p>
- [Tech Sector Job Interviews Assess Anxiety, Not Software Skills](https://news.ncsu.edu/2020/07/tech-job-interviews-anxiety/){:target="_blank"} by Chris Parnin & Matt Shipman: a new study from North Carolina State University and Microsoft finds that the technical interviews currently used in hiring for many software engineering positions test whether a job candidate has performance anxiety rather than whether the candidate is competent at coding.

- [Why Companies Lose Their Best Innovators](https://www.forbes.com/sites/kmehta/2019/07/11/why-companies-lose-their-best-innovators/){:target="_blank"} by Kumar Mehta: corporations fail to innovate because they lose their most innovative talent. This value could have been retained by the original corporation if it learned to recognize innovation and create environments where creative talent can thrive.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-6/cloudflare-outage.png" width="600"></p>
- [Cloudflare outage on July 17, 2020](https://blog.cloudflare.com/cloudflare-outage-on-july-17-2020/){:target="_blank"} by John Graham-Cumming: while working on an unrelated issue, our network engineering team updated configuration on a router in Atlanta to alleviate congestion. This configuration contained an error that caused all traffic across our backbone to be sent to Atlanta, which quickly overwhelmed the Atlanta router and caused Cloudflare network locations connected to the backbone to fail.

## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-6/aws-google-sso.png" width="600"></p>
- [How to use G Suite as an external identity provider for AWS SSO](https://aws.amazon.com/blogs/security/how-to-use-g-suite-as-external-identity-provider-aws-sso/){:target="_blank"} by Yegor Tokmakov and Sebastian Doell: Do you want to control access to your Amazon Web Services (AWS) accounts with G Suite? In this post, we show you how to set up G Suite as an external identity provider in AWS Single Sign-On (SSO). We also show you how to configure permissions for your users, and how they can access different accounts.

- [EC2 now supports tagging EC2 Spot Instance requests](https://aws.amazon.com/about-aws/whats-new/2020/07/amazon-ec2-now-supports-tagging-ec2-spot-instance-requests/){:target="_blank"}: you can (finally!) use a single API call or AWS CLI command to simultaneously create a Spot Instance request and specify its tags.

- [EC2 Image Builder can now produce and distribute encrypted AMIs](https://aws.amazon.com/about-aws/whats-new/2020/07/ec2-image-builder-produce-distribute-encrypted-amis/){:target="_blank"}: EC2 Image Builder is now integrated with AWS Key Management Service (KMS) and enables customers to build and distribute Amazon Machine Images (AMIs) that are encrypted with Amazon Elastic Block Store (EBS) encryption. 

- [Amazon ECS announces increased service quotas](https://aws.amazon.com/about-aws/whats-new/2020/07/amazon-ecs-announces-increase-service-quota-limits/){:target="_blank"}: Amazon Elastic Container Service (ECS) today increased the default service quotas for ECS tasks per service and services per cluster. You can now launch up to 2,000 tasks per service and 2,000 services per cluster, up from 1,000 each.

<p align="center"><img src="{{ site.url }}/images/diu-6/aws-firewall-manager.png" width="600"></p>
- [AWS Firewall Manager launches managed rules to audit VPC security groups](https://aws.amazon.com/about-aws/whats-new/2020/07/aws-firewall-manager-launches-managed-rules-audit-vpc-security-groups/){:target="_blank"}: AWS Firewall Manager has introduced new pre-configured rules to help customers audit their VPC security groups and get detailed reports of non-compliance from a central administrator account.

## GCP

<p align="center"><img src="{{ site.url }}/images/diu-6/gcp-security.jpg" width="600"></p>
- [Introducing Google Cloud Confidential Computing with Confidential VMs](https://cloud.google.com/blog/products/identity-security/introducing-google-cloud-confidential-computing-with-confidential-vms){:target="_blank"} by Nelly Porter: Confidential Computing is a breakthrough technology which encrypts data in-use—while it is being processed. Confidential Computing environments keep data encrypted in memory and elsewhere outside the central processing unit (CPU). 

*Article version: 1.0.0*

---
layout: post
title: "DevOps Industry Updates #10"
permalink: /devops-industry-updates-10/
---

In this IaC-packed issue of DevOps Industry Updates, we discuss the importance of the 1x Engineer, GitHub's new Container Registry (TL;DR: it could be the new DockerHub) and a whole lot of recent developments in the Terraform community. Grab your coffee, we have some great nuggets to cover:

## 🔥 Top Cream

This issue's top 3 stories:

1. [The 1x Engineer](https://1x.engineer){:target="_blank"}
1. [Introducing GitHub Container Registry](https://github.blog/2020-09-01-introducing-github-container-registry/){:target="_blank"}
1. [Managing multi-region, multi-account Terraform IaC](https://lowess.github.io/ops-talks/cheatsheet/ops-talks-01/){:target="_blank"}

## 🌎 Society 

- [The 1x Engineer](https://1x.engineer){:target="_blank"}: you might have already heard of a 10x engineer. Probably too often, actually. If there's such a thing as a 10x engineer, surely there must be a 1x engineer, too?

<p align="center"><img src="{{ site.url }}/images/diu-10/cio-devops-working.png" width="600"></p>
- [DevOps engineer: IT's most in-demand title for the future](https://enterprisersproject.com/article/2020/8/devops-engineer-in-demand-it-title){:target="_blank"} by Eveline Oehrlich: does the title “DevOps engineer” have staying power? Will it be the must-have title within IT in years to come? Should technology organizations be planning to add this role to their roster in 2021? And why is a job title in technology worth debating anyway?

<p align="center"><img src="{{ site.url }}/images/diu-10/nyse.jpg" width="600"></p>
- [Snowflake Leads Software IPO Filing Bonanza Including Asana, JFrog, Sumo Logic, Unity Software](https://techcrunch.com/2020/08/25/unity-jfrog-asana-snowflake-and-sumo-logic-file-for-ipos-in-rapid-fire-fashion/){:target="_blank"} by Alex Wilhelm: wholly IPOs Batman! After far too few startups appeared ready to take advantage of warm public market conditions and ecstatic IPO receptions, a deluge of Cloud companies have filed to go public.

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-10/github-container-registry.png" width="600"></p>
- [Introducing GitHub Container Registry](https://github.blog/2020-09-01-introducing-github-container-registry/){:target="_blank"} by Kayla Ngan: an addition to the GitHub Packages feature, the GitHub Container Registry will also provide anonymous access for public container images, which it says it will provide free of charge. RIP DockerHub.

<p align="center"><img src="{{ site.url }}/images/diu-10/terraform-secrets.png" width="500"></p>
- [A comprehensive guide to managing secrets in your Terraform code](https://blog.gruntwork.io/a-comprehensive-guide-to-managing-secrets-in-your-terraform-code-1d586955ace1){:target="_blank"} by Yevgeniy Brikman: in this blog post, we’ll go over the most common techniques you can use to safely and securely manage secrets such as env vars, encrypted files and secret stores.

- [A Guide to Cloud Cost Optimization with HashiCorp Terraform](https://www.hashicorp.com/blog/a-guide-to-cloud-cost-optimization-with-hashicorp-terraform/){:target="_blank"} by Michael Fonseca: a great overview of how to integrate and use cloud-vendor and third-party cost optimization tools in Terraform workflows. Includes examples of Terraform’s policy as code framework, Sentinel, which can automatically block overspending with rules around cost, instance types, and tags.

<p align="center"><img src="{{ site.url }}/images/diu-10/tweet-aws-iac.png" width="450"></p>
- [CloudFormation, Terraform, or CDK? A guide to IaC on AWS](https://acloudguru.com/blog/engineering/cloudformation-terraform-or-cdk-guide-to-iac-on-aws){:target="_blank"} by Jared Short: an answer to the age-old question: what IAC tools are available to you in AWS, and how do you choose between them?

## 🛠️ DevOps Tools 

- [Managing multi-region, multi-account Terraform IaC](https://lowess.github.io/ops-talks/cheatsheet/ops-talks-01/){:target="_blank"} by Florian Dambrine: an excellent talk that describes the practices, code patterns, as well as some tips and tricks from an old timer at GumGum. Includes a handy cheat sheet that summarizes all the technical  aspects covered in the talk.

- [5 Linux network troubleshooting commands](https://www.redhat.com/sysadmin/five-network-commands){:target="_blank"} by Ricardo Gerardi: Linux provides many command-line tools to help sysadmins manage, configure, and troubleshoot network settings.

## ☸️ Kubernetes 

- [The Runaway Problem of Kubernetes Operators and Dependency Lifecycles](https://thenewstack.io/the-runaway-problem-of-kubernetes-operators-and-dependency-lifecycles/){:target="_blank"} by Mary Branscombe: the idea of the Kubernetes operator pattern is to package up the deep knowledge about running a specific application and codify it. But operators have quickly become popular and the sheer proliferation means that ironically, teams are needing to gain deeper knowledge about operators themselves, from choosing the right operator frameworks to the operators themselves.

- [ContainerSolutions/kubernetes-examples](https://github.com/ContainerSolutions/kubernetes-examples){:target="_blank"} by Ian Miell: minimal self-contained examples of standard Kubernetes features and patterns in YAML.

- [Do I Need Kubernetes?](https://mbird.biz/writing/do-i-need-kubernetes.html){:target="_blank"} by Alex Hewson: as most things in life, it depends. This post reviews where Kubernetes shines, where it doesn't and most importantly (IMO): cost of ownership.

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-10/comparing-ssh-keys-header.png" width="600"></p>
- [Comparing SSH Keys - RSA, DSA, ECDSA, or EdDSA?](https://gravitational.com/blog/comparing-ssh-keys/){:target="_blank"} by Virag Mody: as of 2020, the most widely adopted asymmetric crypto algorithms in the PKI world are RSA, DSA, ECDSA, and EdDSA. So which one is best? Well, it depends.

- [Engineer admits he wiped 456 Cisco WebEx VMs from AWS after leaving](https://www.theregister.com/2020/08/26/former_cisco_engineer_aws_webex_teams/){:target="_blank"} by Thomas Claburn: Sudhish Kasaba Ramesh, who worked at Cisco from 2016 to 2018, admitted to deliberately deleting virtual machines powering Cisco's WebEx video-conferencing service in Cisco's AWS account.. 5 months after leaving the company.

<p align="center"><img src="{{ site.url }}/images/diu-10/sendgrid.png" width="600"></p>
- [Sendgrid Under Siege from Hacked Accounts](https://krebsonsecurity.com/2020/08/sendgrid-under-siege-from-hacked-accounts/){:target="_blank"} by Brian Krebs: e-mail service provider Sendgrid is grappling with an unusually large number of customer accounts whose passwords have been cracked, sold to spammers, and abused for sending phishing and email malware attacks. Sendgrid’s parent company Twilio says it is working on a plan to require multi-factor authentication for all of its customers, but that solution may not come fast enough for organizations having trouble dealing with the fallout in the meantime.

## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-10/nmap.jpg" width="600"></p>
- [Python `mmap`: Improved File I/O With Memory Mapping](https://realpython.com/python-mmap/?/){:target="_blank"} by Luke Lee: using `nmap` can provide significant performance improvements in code that requires a lot of file I/O. This tutorial, you will learn how to use memory mapping to read large files faster, how to change a portion of a file without rewriting the entire file and how to use `mmap` to share information between multiple processes.

## 🐧 Linux 

<p align="center"><img src="{{ site.url }}/images/diu-10/tld-zone-file.png" width="600"></p>
- [Understanding DNS: anatomy of a BIND zone file](https://arstechnica.com/gadgets/2020/08/understanding-dns-anatomy-of-a-bind-zone-file/){:target="_blank"} by Jim Salter: need a clear, thorough guide to understanding how DNS records work? We got you.

<p align="center"><img src="{{ site.url }}/images/diu-10/linux-rust.jpg" width="600"></p>
- [Supporting Linux kernel development in Rust](https://lwn.net/SubscriberLink/829858/281103f9c6fd0dc2/){:target="_blank"}: the Rust programming language has long aimed to be a suitable replacement for C in operating-system kernel development. As Rust has matured, many developers have expressed growing interest in using it in the Linux kernel. At the 2020 (virtual) Linux Plumbers Conference, the LLVM microconference track hosted a session on open questions about and obstacles to accepting Rust upstream in the Linux kernel - this article captures the main points of that discussion.

## 🚢 Leadership 

- [Camille Fournier on Effectively Managing Internal Platform Teams](https://www.infoq.com/news/2020/08/fournier-internal-platform/){:target="_blank"} by Matt Campbell: Camille Fournier, managing director, head of platform engineering at Two Sigma, recently shared her learnings from managing internal platform engineering teams. Two of the key challenges she shared are the smaller size of the customer base and the challenge in understanding how your customers will use your product. She also stressed the importance of ensuring invested development work is aligned to the best interests of the product and the end user.

<p align="center"><img src="{{ site.url }}/images/diu-10/remote-management.jpg" width="600"></p>
- [Managing Remotely: 6 Ways to Support Engineers](https://devops.com/managing-remotely-6-ways-to-support-engineers/){:target="_blank"} by Ravs Kaur: our shift to remote work in 2020 moved the majority of face-to-face interactions into screens. Although initially we assumed this shift was a temporary adjustment, most of us now realize it’s just the opposite. As a result, managers—the forgotten middle of the workforce—are emerging as quiet heroes fighting to protect team effectiveness.

## ☁️ Cloud 

- [Reserved Instances: The Complete Guide](https://spot.io/blog/reserved-instances-the-complete-guide/){:target="_blank"} by Zev Schonberg: reserved instance strategies compared across the big 3 cloud providers (AWS, Azure, GCP).

## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-10/ebs-io2.png" width="400"></p>
- [New EBS Volume Type (io2)](https://aws.amazon.com/blogs/aws/new-ebs-volume-type-io2-more-iops-gib-higher-durability/){:target="_blank"} by Jeff Barr: 100x higher durability and 10x more IOPS/GiB at the same price as the existing io1 volumes.

- [SNS launches client library supporting message payloads of up to 2 GB](https://aws.amazon.com/about-aws/whats-new/2020/08/amazon-sns-launches-client-library-supporting-message-payloads-of-up-to-2-gb/){:target="_blank"}: Simple Notification Service (SNS) now has launched an open-source Extended Client Library for Java that enables you to publish and deliver messages with payloads up to 2GB. Previously, message payloads were supported up to 256KB.

- [Amazon EKS managed node groups now support EC2 launch templates and custom AMIs](https://aws.amazon.com/about-aws/whats-new/2020/08/amazon-eks-managed-node-groups-now-support-ec2-launch-templates-custom-amis/){:target="_blank"}: until now, you could only provide a limited set of instance level customization options through the managed node groups API. With the launch template integration, you can customize a wide range of EC2 instance settings to meet compliance and application requirements, while offloading the operational tasks of node provisioning, draining, and upgrading to EKS.

- [Bottlerocket goes GA](https://aws.amazon.com/blogs/opensource/announcing-the-general-availability-of-bottlerocket-an-open-source-linux-distribution-purpose-built-to-run-containers/){:target="_blank"}: AWS announced the General Availability of Bottlerocket, a new open source Linux-based Operating System (OS) purpose-built to run containers that only includes the software needed to run containers and comes with a transactional update mechanism. These properties enable customers to use container orchestrators to manage OS updates with minimal disruptions, enabling improved security and lower operational costs for containerized applications.

<p align="center"><img src="{{ site.url }}/images/diu-10/aws-tags-part-2.jpg" width="600"></p>
- [AWS Tagging Best Practices Guide: Part 2 (Enforcement)](https://cloudforecast.io/blog/aws-tagging-best-practices-guide-part-2/){:target="_blank"} by Karl Hughes: once you have adopted an AWS tagging strategy, you’ll need to make sure that all your existing AWS resources and any new ones you create abide by it. Consistency is the key - if you don’t proactively enforce your AWS tagging strategy, you’ll always be playing catch up and chasing down team members to make sure they add the right tags to their resources.


*Article version: 1.0.0*

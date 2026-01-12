---
layout: post
title: "DevOps Industry Updates #11"
permalink: /devops-industry-updates-11/
---

Are your IAM policies overly permissive? Will future data centers be under water? Does the mythical DevOps Engineer really exist? We cover those questions and many other key developments in this issue of DevOps Industry Updates:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Introducing security groups for EKS pods](https://aws.amazon.com/blogs/containers/introducing-security-groups-for-pods/){:target="_blank"}
1. [Security by Obscurity is Underrated](https://utkusen.com/blog/security-by-obscurity-is-underrated.html){:target="_blank"}
1. [Things I Learned to Become a Senior Software Engineer](https://neilkakkar.com/things-I-learned-to-become-a-senior-software-engineer.html){:target="_blank"}
1. [GitHub CLI 1.0 is now available](https://github.blog/2020-09-17-github-cli-1-0-is-now-available/){:target="_blank"}

## 🌎 Society 

- [The Mythical DevOps Engineer](https://alediaferia.com/2020/07/27/the-mythical-devops-engineer/){:target="_blank"} by Alessandro Diaferia: it feels like the DevOps Engineer is a mythical figure that certain organizations pursue in the hope of finding the holy grail of a Software Engineer capable of doing anything. But does such a thing really exist?

- [Announcing the Full HashiConf Digital Schedule](https://hashiconf.com/digital-october/schedule/){:target="_blank"}: discover all of the speakers, sessions, and workshops taking place October 12-15. Only one month to go so register for your free pass now!

<p align="center"><img src="{{ site.url }}/images/diu-11/offer-from-fb-cover.png" width="600"></p>
- [How I Got An Offer At Facebook, Turned It Down, And Moved On](https://iuliangulea.com/blog/how-i-got-an-offer-at-facebook-turned-it-down-and-went-on/){:target="_blank"} by Iulian Gulea: there are lots of questions and answers online about how to get into one of the FAANG (Facebook, Amazon, Apple, Netflix, Google) companies. This article is my experience and some recommendations.

- [Things I Learned to Become a Senior Software Engineer](https://neilkakkar.com/things-I-learned-to-become-a-senior-software-engineer.html){:target="_blank"} by Neil Kakkar: since 2018, Neil Kakkar has worked at Bloomberg where he's mentored quite a few new engineers. This post discusses how mentorship allowed him to observe others, absorb their best practices, and figure out the things he was unconsciously doing pretty well.

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-11/postgres-chef.png" width="600"></p>
- [The Fourth Chapter of Chef: Progress to Purchase Chef](https://blog.chef.io/the-fourth-chapter-of-chef-has-arrived-progress-to-purchase-chef/){:target="_blank"} by Barry Crist: by acquiring Chef, a market leader in DevOps and DevSecOps, Postgres will further strengthen their position as a trusted provider of products to develop, deploy and manage high-impact applications.

<p align="center"><img src="{{ site.url }}/images/diu-11/event-queue.png" width="600"></p>
- [Why RudderStack Used Postgres Over Apache Kafka for Streaming Engine](https://rudderstack.com/blog/why-rudderstack-used-postgres-over-apache-kafka-for-streaming-engine/){:target="_blank"}: this post answers the all-important question – “Why we did not prefer Apache Kafka over PostgreSQL for building RudderStack”. It discusses some of the challenges with using Apache Kafka over their implemented solution that uses PostgreSQL.

## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-11/github-cli.png" width="600"></p>
- [GitHub CLI 1.0 is now available](https://github.blog/2020-09-17-github-cli-1-0-is-now-available/){:target="_blank"} by Amanda Pinsker: GitHub CLI brings GitHub to your terminal. It reduces context switching, helps you focus, and enables you to more easily script and create your own workflows. With GitHub CLI 1.0, you can run your entire GitHub workflow from the terminal and call the GitHub API to script nearly any action.

- [The honest AWS Service Health dashboard](https://stop.lying.cloud){:target="_blank"}: have you lost trust in AWS's status page? You're not alone!

- [dutchcoders/cloudman](https://github.com/dutchcoders/cloudman){:target="_blank"} by Remco Verhoef: cloudman is a textual user interface (heavily inspired by `htop`) to manage your Amazon EC2 fleet instantly. By using Cloudman you'll find an overview of your instances, navigate through regions, retrieve instance details, show console outputs and connect to the instance terminal using SSM.

## ☸️ Kubernetes 

- [What we learned after a year of GitLab.com on Kubernetes](https://about.gitlab.com/blog/2020/09/16/year-of-kubernetes/){:target="_blank"} by John Jarvis: it's been one year since we moved GitLab.com to Kubernetes. We unpack the challenges and learnings from this major migration.

<p align="center"><img src="{{ site.url }}/images/diu-11/terraform-agents.png" width="600"></p>
- [Terraform Cloud Agents in a Kubernetes Cluster](https://www.itwonderlab.com/en/terraform-agents-kubernetes/){:target="_blank"}: Terraform Cloud Agents are small binaries that can be installed in private clouds or on-premises that execute Terraform runs (plan, apply, and destroy) on behalf of the Terraform Cloud.

<p align="center"><img src="{{ site.url }}/images/diu-11/five-essential-workflows.png" width="600"></p>
- [Seven Kubernetes monitoring best practices every monitoring solution should enable](https://sysdig.com/blog/kubernetes-monitoring-best-practices/){:target="_blank"} by Aaron Newcomb: running containers in Kubernetes brings a number of advantages in terms of automation, segmentation, and efficiency. However, the ability to monitor performance and availability in an ever-changing infrastructure like Kubernetes can be a challenge. A way to address this early is by adopting a Secure DevOps workflow.

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-11/swiss-cheese-model.svg" width="600"></p>
- [Security by Obscurity is Underrated](https://utkusen.com/blog/security-by-obscurity-is-underrated.html){:target="_blank"} by Utku Sen: this article discusses why security by obscurity shouldn't be overlooked as an “additional” layer of defense. For something with such a low implementation cost, it can actually make a big difference.

<p align="center"><img src="{{ site.url }}/images/diu-11/tls-raccoon-attack.png" width="600"></p>
- [Raccoon Attack](https://raccoon-attack.com){:target="_blank"} by Robert Merget: Raccoon is a timing vulnerability in the TLS specification that affects HTTPS and other services that rely on SSL and TLS. Raccoon allows attackers under certain conditions to break the encryption and read sensitive communications. 

<p align="center"><img src="{{ site.url }}/images/diu-11/github-threat-model.png" width="600"></p>
- [How we threat model](https://github.blog/2020-09-02-how-we-threat-model/){:target="_blank"} by Robert Reichel: at GitHub, we spend a lot of time thinking about and building secure products—and one key facet of that is threat modeling. This practice involves bringing security and engineering teams together to discuss systems, ultimately generating action items that improve the security of the system. Threat modeling has helped us better communicate between security and engineering teams, has shifted the security review process to be more proactive, and has led to more reliable and more secure system designs.

## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-11/eol.jpg" width="300"></p>
- [All Python versions less than 3.6 are now EOL ](https://devguide.python.org/#status-of-python-branches){:target="_blank"}: as of 2020-09-13, only security fixes are accepted and no more binaries are released, but new source-only versions can be released.

## 🐧 Linux 

<p align="center"><img src="{{ site.url }}/images/diu-11/bash-logo.png" width="400"></p>
- [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls){:target="_blank"}: a compilation of common mistakes made by bash users. Each example is flawed in some way.


## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-11/nvidia-arm.jpg" width="600"></p>
- [NVIDIA to Acquire Arm for $40 Billion](https://nvidianews.nvidia.com/news/nvidia-to-acquire-arm-for-40-billion-creating-worlds-premier-computing-company-for-the-age-of-ai){:target="_blank"}: the combination brings together NVIDIA’s leading AI computing platform with Arm’s vast ecosystem to create the premier computing company for the age of artificial intelligence, accelerating innovation while expanding into large, high-growth markets.

## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-11/zoom-call.jpg" width="600"></p>
- [The surprising traits of good remote leaders](https://www.bbc.com/worklife/article/20200827-why-in-person-leaders-may-not-be-the-best-virtual-ones){:target="_blank"} by Arianne Cohen: strong in-person leadership skills don’t necessarily translate to being a good virtual leader. Instead, organisation and competency reign supreme.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-11/ms-underwater-datacenters.jpg" width="600"></p>
- [Microsoft finds underwater datacenters are reliable and practical](https://news.microsoft.com/innovation-stories/project-natick-underwater-datacenter/){:target="_blank"} by John Roach: earlier this summer, marine specialists reeled up a shipping-container-size datacenter coated in algae, barnacles and sea anemones from the seafloor off Scotland’s Orkney Islands. The retrieval launched the final phase of a years-long effort that proved the concept of underwater datacenters is feasible, as well as logistically, environmentally and economically practical.

## AWS 

- [Introducing security groups for EKS pods](https://aws.amazon.com/blogs/containers/introducing-security-groups-for-pods/){:target="_blank"} by Mike Stefaniak and Sri Saran Balaji: FINALLY! AWS has introduced the ability to assign specific security groups directly to pods running in Amazon EKS clusters. This post covers common use cases, explains how the feature is implemented, and finishes with a step-by-step tutorial of how to implement pod security groups in your EKS cluster.

<p align="center"><img src="{{ site.url }}/images/diu-11/aws-nitro.png" width="600"></p>
- [Reinventing virtualization with the AWS Nitro System](https://www.allthingsdistributed.com/2020/09/reinventing-virtualization-with-aws-nitro.html){:target="_blank"} by Werner Vogels: after years of optimizing traditional virtualization systems to the limit, AWS knew they had to make a dramatic change in architecture if they were going to continue to increase performance and security for their customers. This realization forced AWS to rethink everything and became the spark for our creating the Nitro System, the first infrastructure platform to offload virtualization functions to dedicated hardware and software.

- [Record AWS API calls to improve IAM Policies](https://cloudonaut.io/record-aws-api-calls-to-improve-iam-policies/){:target="_blank"} by Michael Wittig: have you ever looked at an IAM policy and wondered: is it really necessary to grant access to this specific action? Or do you need to know which API calls a legacy or 3rd party application is actually sending to come up with a secure IAM policy? CloudTrail can help here, but there is something better: Record API calls with the AWS SDKs and CLI (including the stuff that is not visible in CloudTrail).

- [New EC2 T4g Instances – Burstable Performance Powered by AWS Graviton2](https://aws.amazon.com/blogs/aws/new-t4g-instances-burstable-performance-powered-by-aws-graviton2/){:target="_blank"} by Danilo Poccia: by using T4g instances you can enjoy a performance benefit of up to 40% at a 20% lower cost in comparison to T3 instances, providing the best price/performance for a broader spectrum of workloads.

- [Amazon CloudWatch now monitors Prometheus metrics ](https://aws.amazon.com/about-aws/whats-new/2020/09/amazon-cloudwatch-monitors-prometheus-metrics-container-environments/){:target="_blank"}

- [Amazon Detective introduces IAM Role Session Analysis](https://aws.amazon.com/about-aws/whats-new/2020/09/amazon-detective-introduces-iam-role-session-analysis/){:target="_blank"}: detective’s new role session analysis capability will help you attribute API calls to specific principals during security investigations and will help in understanding how IAM roles are being used across enabled accounts.

## Azure 

- [Microsoft challenges Twilio with the launch of Azure Communication Services](https://techcrunch.com/2020/09/22/microsoft-challenges-twilio-with-the-launch-of-azure-communication-services/){:target="_blank"} by Frederic Lardinois: Microsoft today announced the launch of Azure Communication Services, a new set of features in its cloud that enable developers to add voice and video calling, chat and text messages to their apps, as well as old-school telephony.

## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-11/gcp-security.jpg" width="600"></p>
- [gVisor: Protecting GKE and serverless users in the real world](https://cloud.google.com/blog/products/containers-kubernetes/how-gvisor-protects-google-cloud-services-from-cve-2020-14386){:target="_blank"} by Eric Brewer: Googlers created some of the fundamental components of containers, like cgroups, and were an early adopter of containers for our internal systems. This led to a need to increase the security of this technology, and this led to the development of gVisor, a container security sandbox. When a recent Linux kernel vulnerability was disclosed, users of these products were not affected because they were protected by gVisor.


*Article version: 1.0.0*

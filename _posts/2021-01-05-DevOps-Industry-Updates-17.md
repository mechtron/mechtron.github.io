---
layout: post
title: "DevOps Industry Updates #17"
permalink: /devops-industry-updates-17/
---

Welcome back everyone! After a brief holiday break, DevOps Industry Updates is hot off the presses with yet another action-packed issue. From AWS managed Prometheus & Grafana to what is becoming one of the largest security breaches in history (#solarwinds123), be sure to read this one until the end!

## 🔥 Top Cream

This issue's top 4 stories:

1. [AWS announces Amazon Managed Service for Prometheus](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-announces-amazon-managed-service-for-prometheus/){:target="_blank"}
1. [Why are my tests so slow?](https://charity.wtf/2020/12/31/why-are-my-tests-so-slow-a-list-of-likely-suspects-anti-patterns-and-unresolved-personal-trauma/){:target="_blank"}
1. [The Big Little Guide to Message Queues](https://sudhir.io/the-big-little-guide-to-message-queues/){:target="_blank"}
1. [Russia’s SolarWinds Attack](https://www.schneier.com/blog/archives/2020/12/russias-solarwinds-attack.html){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-17/wfh.jpg" width="600"></p>
- [After embracing remote work in 2020, companies face conflicts making it permanent](https://venturebeat.com/2021/01/01/after-embracing-remote-work-in-2020-companies-face-conflicts-making-it-permanent/){:target="_blank"} by Paul Sawers

- [The State of Women in Tech and Startups](https://womenwhotech.com/data-and-resources/state-women-tech-and-startups){:target="_blank"}: Women Who Tech retained polling firm Lincoln Park Strategies to anonymously survey 1,003 tech employees, founders, and investors globally on their experiences in the tech sector.

- [The ethics of Pull Requests, being the “Reviewer"](https://werner-dijkerman.nl/2020/12/10/the-ethics-of-pull-requests-being-the-reviewer/){:target="_blank"} by Werner Dijkerman: this is the second of a three part blogpost series about Pull Request reviewing. I am writing this so I can give you my personal view on each side of the Pull Request saga, something I explain to every member joining my team.

<p align="center"><img src="{{ site.url }}/images/diu-17/cda-230.png" width="600"></p>
- [Jason Kelley](https://www.eff.org/deeplinks/2020/12/section-230-good-actually){:target="_blank"} by Section 230 is Good, Actually: why Section 230 matters, and how it helps the users of Internet services both big and small.


## 📟 DevOps 

- [Why are my tests so slow?](https://charity.wtf/2020/12/31/why-are-my-tests-so-slow-a-list-of-likely-suspects-anti-patterns-and-unresolved-personal-trauma/){:target="_blank"} by Charity: a list of likely suspects, anti-patterns and unresolved personal trauma.

<p align="center"><img src="{{ site.url }}/images/diu-17/uber-ramen.png" width="600"></p>
- [Uber’s Real-Time Push Platform](https://eng.uber.com/real-time-push-platform/){:target="_blank"}: this article describes how Uber went from polling for refreshing the app to a gRPC-based bi-directional streaming protocol to build our app experience.

- [Dockerfile best practices](https://github.com/hexops/dockerfile){:target="_blank"} by Stephen Gutekanst: best practices for writing production-worthy Docker images. Includes a base Dockerfile to start with.

<p align="center"><img src="{{ site.url }}/images/diu-17/traffic-jam.jpg" width="600"></p>
- [The Big Little Guide to Message Queues](https://sudhir.io/the-big-little-guide-to-message-queues/){:target="_blank"} by Sudhir Jonathan: a guide to the fundamental concepts that underlie message queues, and how they apply to popular queueing systems available today.

- [Feature Flags in DevOps: How These Concepts Relate](https://launchdarkly.com/blog/feature-flags-toggles-in-devops-how-these-concepts-relate/){:target="_blank"}: feature flagging is a software development technique that has been growing and gaining popularity in recent times. However, some development teams still aren’t quite familiar with it. This post offers an introductory guide on feature flags and explains how feature flagging supports DevOps.

<p align="center"><img src="{{ site.url }}/images/diu-17/nomad-2mcc.png" width="600"></p>
- [HashiCorp Nomad Meets the 2 Million Container Challenge](https://www.hashicorp.com/blog/hashicorp-nomad-meets-the-2-million-container-challenge){:target="_blank"} by Chang Li: HashiCorp Nomad scheduled 2,000,000 Docker containers on 6,100 hosts in 10 AWS regions in 22 minutes.


## 🛠️ DevOps Tools 

- [cloudquery](https://github.com/cloudquery/cloudquery){:target="_blank"} by Yevgeny Pats: Cloudquery transforms your cloud infrastructure into queryable SQL tables for easy monitoring, governance and security.

- [getmeli/meli](https://github.com/getmeli/meli){:target="_blank"}: platform for deploying static sites and frontend applications easily. Automatic SSL, deploy previews, reverse proxy, and more.

- [Netflix/consoleme](https://github.com/Netflix/consoleme){:target="_blank"}: consolidates the management of multiple AWS accounts into a single interface. It allows your end-users and administrators to get credentials for your different accounts, and allows your users/administrators to manage or request cloud permissions.

<p align="center"><img src="{{ site.url }}/images/diu-17/git-cheat.gif" width="600"></p>
- [Fakerr/git-cheat](https://github.com/Fakerr/git-cheat){:target="_blank"} by Walid Berrahal: beautiful, easy to reach Git cheat sheet in your terminal.

- [so-fancy/diff-so-fancy](https://github.com/so-fancy/diff-so-fancy){:target="_blank"}: `diff-so-fancy` strives to make your diffs human readable instead of machine readable. This helps improve code quality and helps you spot defects faster.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-17/k8spin.png" width="400"></p>
- [k8spin/k8spin-operator](https://github.com/k8spin/k8spin-operator){:target="_blank"}: Kubernetes multi-tenant operator. Enables multi-tenant capabilities in your Kubernetes cluster.



## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-17/cia.jpg" width="600"></p>
- [Russia’s SolarWinds Attack](https://www.schneier.com/blog/archives/2020/12/russias-solarwinds-attack.html){:target="_blank"} by Bruce Schneier: while you've been distracted by the holidays, coronavirus, and politics, the more we learn about the SolarWinds security fiasco, the worse it looks.

- [Stealing your private documents through a bug in Google Docs](https://savebreach.com/stealing-private-documents-through-a-google-docs-bug/){:target="_blank"} by KL Sreeram: a security vulnerability in Google Docs could have let attackers steal screenshots of your sensitive documents. The cause of this was a `postMessage` security misconfiguration.

<p align="center"><img src="{{ site.url }}/images/diu-17/netflix-container-security.jpg" width="600"></p>
- [Evolving Container Security With Linux User Namespaces](https://netflixtechblog.com/evolving-container-security-with-linux-user-namespaces-afbe3308c082){:target="_blank"} by Netflix: one of Netflix's biggest concerns with multi-tenancy is security isolation. Despite the risks, we’ve chosen to leverage containers as part of our security boundary. To offset the risks brought about by the container security boundary, Netflix employs some additional protections which are described in detail in yet another great blog post.


## 💻 Programming 

- [Top 10 Python libraries of 2020](https://tryolabs.com/blog/2020/12/21/top-10-python-libraries-of-2020/){:target="_blank"} by Alan Descoins

<p align="center"><img src="{{ site.url }}/images/diu-17/nodejs-installer-poll.png" width="600"></p>
- [5 Ways to install Node.js](https://www.nodejsdesignpatterns.com/blog/5-ways-to-install-node-js/){:target="_blank"} by Luciano Mammino: this article explores the most common ways to install Node.js in your development system, along with the pros and cons of each method.

## 🐧 Linux 

<p align="center"><img src="{{ site.url }}/images/diu-17/git-logo.png" width="250"></p>
- [Git stash doesn't have to be scary](https://jemma.dev/blog/git-stash){:target="_blank"} by Jemma Issroff: what `git stash`es are, how to use them and when not to use them.

<p align="center"><img src="{{ site.url }}/images/diu-17/vim_coffee.webp" width="600"></p>
- [A Vim Guide for Intermediate Users](https://thevaluable.dev/vim-intermediate/){:target="_blank"}: in this article, I’ll explain many more advanced concepts, some of them making Vim truly special compared to other editors. Who wasn’t blown away discovering Vim’s macros?


## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-17/aws-ec2-mac-mini.jpg" width="600"></p>
- [How AWS Added Apple Mac Mini Nodes to EC2](https://www.servethehome.com/how-aws-added-apple-mac-mini-nodes-to-ec2/){:target="_blank"} by Patrick Kennedy


## 🚢 Leadership 

- [Research: Women Are Better Leaders During a Crisis](https://hbr.org/2020/12/research-women-are-better-leaders-during-a-crisis){:target="_blank"} by Jack Zenger and Joseph Folkman: according to an analysis of 360-degree assessments conducted between March and June of this year, women were rated by those who work with them as more effective. The gap between men and women in the pandemic is even larger than previously measured, possibly indicating that women tend to perform better in a crisis


## ☁️ Cloud 

- [Introduction to Cloud Computing](https://www.digitalocean.com/community/curriculums/introduction-to-the-cloud){:target="_blank"}: if you or someone you know is new to cloud computing, Digital Ocean has a full self-guided course with a full picture of what cloud has to offer. It starts with a conceptual framework, moves through Linux commands through setting up your first cloud servers.

- [Ex-product manager at Google about why GCP lost to AWS](https://www.twitter.com/mohapatrahemant/status/1343969802080030720){:target="_blank"} by Hemant Mohapatra


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-17/amazon-managed-service-for-prometheus.png" width="400"></p>
- [AWS announces Amazon Managed Service for Prometheus](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-announces-amazon-managed-service-for-prometheus/){:target="_blank"}

- [AWS announces Amazon Managed Service for Grafana](https://aws.amazon.com/about-aws/whats-new/2020/12/aws-announces-amazon-managed-service-for-grafana-in-preview/){:target="_blank"}: developed in partnership with Grafana Labs, Amazon Managed Service for Grafana manages the provisioning, setup, scaling, and maintenance of Grafana servers.

- [Announcing General Availability of AWS Cost Anomaly Detection](https://aws.amazon.com/blogs/aws-cost-management/announcing-general-availability-of-aws-cost-anomaly-detection/){:target="_blank"} by Bowen Wang and Lutong Yang: AWS Cost Anomaly Detection uses a multi-layered machine learning model that learns your unique, historic spend patterns to detect one-time cost spike and/or continuous cost increases, without you having to define your thresholds.

<p align="center"><img src="{{ site.url }}/images/diu-17/aws-cloudshell.png" width="600"></p>
- [Introducing AWS CloudShell](https://aws.amazon.com/about-aws/whats-new/2020/12/introducing-aws-cloudshell/){:target="_blank"}: AWS CloudShell is a browser-based shell available within the AWS console. Starting a CloudShell session provides immediate access to an Amazon Linux 2 environment with the AWS CLI pre-installed and pre-authenticated using the same credentials used to login to the console.

- [Amazon VPC Reachability Analyzer announced](https://aws.amazon.com/about-aws/whats-new/2020/12/amazon-vpc-announces-reachability-analyzer-to-simplify-connectivity-testing-and-troubleshooting/){:target="_blank"}: VPC Reachability Analyzer is a new feature that enables you to perform connectivity testing between resources in your virtual private clouds (VPC). With Reachability Analyzer, you can quickly troubleshoot connectivity issues caused by misconfiguration, and proactively verify that your configuration matches your network connectivity intent.

- [Amazon EC2 announces new network performance metrics](https://aws.amazon.com/about-aws/whats-new/2020/12/amazon-ec2-announces-new-network-performance-metrics-for-ec2-instances/){:target="_blank"}: Amazon EC2 now provides additional network performance metrics to help customers gain more insights into instance network performance. Five new metrics provide customers visibility when their instances exceed network allowances defined by AWS.

- [Amazon Aurora PostgreSQL Integrates with AWS Lambda](https://aws.amazon.com/about-aws/whats-new/2020/12/amazon-aurora-postgresql-integrates-with-aws-lambda/){:target="_blank"}: Amazon Aurora with PostgreSQL compatibility can now make calls to AWS Lambda functions. This allows you to extend the capabilities of the database and invoke external applications to act upon data changes. For example, you can create a Lambda function that sends emails to customers whenever their address in the database is updated.

- [AWS Session Manager: A better way to SSH](http://sawers.com/blog/aws-session-manager-a-better-way-to-ssh/){:target="_blank"} by Mark Sawer: this article describes an AWS innovation introduced in 2019 called Session Manager. The Session Manager adds to SSH a layer of authentication and authorization based on IAM and only requires HTTPS outbound on the server end.


*Article version: 1.0.0*

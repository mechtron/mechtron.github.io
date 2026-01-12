---
layout: post
title: "DevOps Industry Updates #24"
permalink: /devops-industry-updates-24/
---

Welcome back! It's been a whole Jira sprint since the last newsletter and Mother's Day is right around the corner (this Sunday). If you still haven't obtained anything for your Mom, you can always consider getting her what I got my mom this year: a [Unix Magic Poster](https://jpmens.net/2021/04/09/the-unix-magic-poster/){:target="_blank"} (flowers could work, too). In what might be our most process focused issue yet, we look at release testing, SLIs vs. SLAs vs SLOs, how to ship code faster with feature flags and much more. So grab a seat and get ready to open a bunch of new tabs, it's all here:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Release Testing Explained](https://launchdarkly.com/blog/get-a-detailed-explanation-of-release-testing-several/){:target="_blank"}
1. [My Comprehensive Guide to AWS Cost Control](https://corey.tech/aws-cost/){:target="_blank"}
1. [Hosting SQLite databases on Github Pages](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/){:target="_blank"}
1. [CSRF, CORS, and HTTP Security headers Demystified](https://blog.vnaik.com/posts/web-attacks.html){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-24/dockercon21.png" width="600"></p>
- [DockerCon LIVE 2021](https://www.docker.com/dockercon-live/2021/){:target="_blank"}: this one day, virtual event on May 27th will be jam-packed with 45+ breakout sessions, interactive community rooms, compelling keynotes and sponsors, live panels and interviews, and more.

- [GitLab's 2021 Survey uncovers a new DevOps maturity model](https://about.gitlab.com/blog/2021/05/04/gitlabs-2021-survey-uncovers-a-new-devops-maturity-model/){:target="_blank"}: GitLab’s  just-released 2021 Global DevSecOps Survey found sharp increases in automation, release cadences, continuous deployments, and security postures, as well as a growing reliance on cutting edge technologies, including artificial intelligence and machine learning.


## 📟 DevOps 

- [Nine Pillars of DevOps Best Practices](https://devops.com/nine-pillars-of-devops-best-practices/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-24/99-99-update.png" width="600"></p>
- [Lessons I learned from achieving a 99.99% platform uptime](https://dev.to/germangonzo/lessons-i-learned-from-achieving-a-99-99-platform-uptime-1c9o){:target="_blank"}

- [SRE fundamentals 2021: SLIs vs. SLAs. vs SLOs](https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-sli-vs-slo-vs-sla){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-24/release-testing.jpg" width="600"></p>
- [Release Testing Explained](https://launchdarkly.com/blog/get-a-detailed-explanation-of-release-testing-several/){:target="_blank"}: great overview that explores several methods used to perform release testing. If you don't know what TDD is, you should probably read this article.

- [SRE at Google: Our complete list of CRE life lessons](https://cloud.google.com/blog/products/devops-sre/sre-at-google-our-complete-list-of-cre-life-lessons){:target="_blank"}: a complete list of CRE life lessons posts we’ve published in the past five years in one convenient location.

- [Hosting SQLite databases on Github Pages](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/){:target="_blank"}: a sqlite wrapper that enables you to query a statically-hosted sqlite DB file.


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-24/signoz.png" width="600"></p>
- [SigNoz: Open-source Observability platform](https://signoz.io){:target="_blank"}: monitor your applications and troubleshoot problems in your deployed applications, an open-source alternative to DataDog, New Relic, etc.

- [Use Google like a pro](https://markodenic.com/use-google-like-a-pro/){:target="_blank"}: Googling is one of the most important skills for every developer. This post shows you how to get better at Googling.

- [Tips for productive DevOps workflows](https://about.gitlab.com/blog/2021/04/21/devops-workflows-json-format-jq-ci-cd-lint/){:target="_blank"}: JSON formatting with `jq` and CI/CD linting automation.

<p align="center"><img src="{{ site.url }}/images/diu-24/fzf.png" width="600"></p>
- [junegunn/fzf](https://github.com/junegunn/fzf){:target="_blank"}: a command-line fuzzy finder.


## ☸️ Kubernetes 

- [Optimizing Prometheus and Grafana with the Prometheus Operator](https://caylent.com/optimizing-prometheus-and-grafana-with-the-prometheus-operator){:target="_blank"}: this article discusses cluster monitoring fundamentals and how to use the Prometheus Operator to deploy Prometheus and Grafana to monitor a Kubernetes cluster.

<p align="center"><img src="{{ site.url }}/images/diu-24/kubernetes-localdev.png" width="600"></p>
- [unfor19/kubernetes-localdev](https://github.com/unfor19/kubernetes-localdev){:target="_blank"}: great tutorial that shows how to create a local Kubernetes development environment on macOS or Windows and WSL2, including HTTPS/TLS and OAuth2/OIDC authentication.

- [A brief overview of the Container Network Interface (CNI) in Kubernetes](https://www.redhat.com/sysadmin/cni-kubernetes){:target="_blank"}: understand where the CNI fits into the Kubernetes architecture.

<p align="center"><img src="{{ site.url }}/images/diu-24/k8s-gateway-api-resources.png" width="600"></p>
- [Evolving Kubernetes networking with the Gateway API](https://kubernetes.io/blog/2021/04/22/evolving-kubernetes-networking-with-the-gateway-api/){:target="_blank"}: it was at Kubecon 2019 San Diego when a passionate group of contributors gathered to discuss the evolution of Ingress. The discussion overflowed to the hotel lobby across the street and what came out of it would later be known as the Gateway API. 

<p align="center"><img src="{{ site.url }}/images/diu-24/kubernetes-release-1.21-metrics-stability-ga.png" width="600"></p>
- [Kubernetes 1.21: Metrics Stability hits GA](https://kubernetes.io/blog/2021/04/23/kubernetes-release-1.21-metrics-stability-ga/){:target="_blank"}: Kubernetes 1.21 marks the graduation of the metrics stability framework and along with it, the first officially supported stable metrics. Not only do stable metrics come with supportability guarantees, the metrics stability framework brings escape hatches that you can use if you encounter problematic metrics.


## 🔐 Security 

- [Making the Internet more secure one signed container at a time](https://security.googleblog.com/2021/05/making-internet-more-secure-one-signed.html){:target="_blank"}: until now, there just hasn’t been an easy way to verify that images are what they claim to be. Introducing Cosign!


## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-24/github-feature-flags.png" width="600"></p>
- [How we ship code faster and safer with feature flags](https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/){:target="_blank"}

- [CSRF, CORS, and HTTP Security headers Demystified](https://blog.vnaik.com/posts/web-attacks.html){:target="_blank"}: programmers often do not have a strong grasp of how attacks work and how to mitigate them. This post attempts to close that gap a little.

<p align="center"><img src="{{ site.url }}/images/diu-24/rust-facebook.png" width="600"></p>
- [A brief history of Rust at Facebook](https://engineering.fb.com/2021/04/29/developer-tools/rust/){:target="_blank"}


## 🐧 Linux 

- [Building containers by hand: The PID namespace](https://www.redhat.com/sysadmin/pid-namespace){:target="_blank"}: the PID namespace is an important one when it comes to building isolated environments. Find out why and how to use it.

<p align="center"><img src="{{ site.url }}/images/diu-24/linux-minnesota.jpg" width="600"></p>
- [Linux bans University of Minnesota for sending buggy patches on purpose](https://www.neowin.net/news/linux-bans-university-of-minnesota-for-sending-buggy-patches-in-the-name-of-research/){:target="_blank"}

- [Understanding Sockets](https://www.digitalocean.com/community/tutorials/understanding-sockets){:target="_blank"}: learn about the different types of sockets that are used for inter-process communication.

- [“Shared libraries are not a good thing in general”](https://lore.kernel.org/lkml/CAHk-=whs8QZf3YnifdLv57+FhBi5_WeNTG1B-suOES=RcUSmQg@mail.gmail.com/){:target="_blank"} by Linus Torvalds


## 🚢 Leadership 

- [How to Successfully Hand Over Systems](https://developers.soundcloud.com/blog/how-to-successfully-hand-over-systems){:target="_blank"}: "who will take ownership of the systems that were owned by a team that doesn’t exist anymore or that are better suited to be owned by another team? It’s in everyone’s interest that the ownership be given to a team familiar with the system’s domain, so that they can continue the maintenance and evolution."

- [OKRs v KPIs - How they work together](https://www.outcomesthinking.com/okr-blog/kr-v-kpis-a-helpful-primer){:target="_blank"}

- [Manageable On-Call for Companies without Money Printers](https://www.softwareatscale.dev/p/manageable-on-call-for-companies){:target="_blank"}: Google SRE-style on-call, but for all sorts and sizes of software teams.


## ☁️ Cloud 

- [Why We Built Our Own DNS Infrastructure](https://blog.replit.com/dns){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-24/fb-video-encoding.jpg" width="600"></p>
- [How Facebook encodes your videos](https://engineering.fb.com/2021/04/05/video-engineering/how-facebook-encodes-your-videos/){:target="_blank"}: people upload hundreds of millions of videos to Facebook every day. Making sure every video is delivered at the best quality means optimizing not only when and how our video codecs compress and decompress videos for viewing, but also which codecs are used for which videos.


## AWS 

- [AWS announces a price reduction for Amazon Managed Service for Prometheus](https://aws.amazon.com/about-aws/whats-new/2021/05/aws-announces-a-price-reduction-for-amazon-managed-service-for-prometheus-amp/){:target="_blank"}: pricing for metric samples ingested has been reduced by up to 84%.

<p align="center"><img src="{{ site.url }}/images/diu-24/aws-toolkit-sso.png" width="600"></p>
- [Introducing AWS Toolkit for Visual Studio support for AWS SSO and Assume Role with MFA](https://aws.amazon.com/blogs/developer/introducing-aws-toolkit-for-visual-studio-support-for-aws-sso-and-assume-role-with-mfa/){:target="_blank"}

- [Amazon EBS Container Storage Interface (CSI) driver is now GA](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-ebs-container-storage-interface-driver-is-now-generally-available/){:target="_blank"}

- [EC2 enables replacing root volumes](https://aws.amazon.com/about-aws/whats-new/2021/04/ec2-enables-replacing-root-volumes-for-quick-restoration-and-troubleshooting/){:target="_blank"}: the Replace Root Volume feature enables customers to replace the root volume for a running instance. The feature restores the root volume of an instance to its launch state, or to a specific snapshot, without stopping the instance.

<p align="center"><img src="{{ site.url }}/images/diu-24/aws-cost-control-article.png" width="600"></p>
- [My Comprehensive Guide to AWS Cost Control](https://corey.tech/aws-cost/){:target="_blank"}: in this article I’m going to walk you through my experience managing AWS costs at GumGum. It has three distinct stages: tracking and understanding costs, using those insights to reduce costs and the risk of making cost-saving changes, and then integrating these cost insights into our processes.

- [DevOps Guru is now GA with additional capabilities](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-devops-guru-now-generally-available-with-additional-capabilities/){:target="_blank"}: for the sake of our jobs, let's all agree to never speak about this service again.

- [A serverless email server on AWS using S3 and SES](https://github.com/0x4447/0x4447_product_s3_email){:target="_blank"}: necessity is the mother of invention: "this stack was created out of frustration due to the fact that to this day there's no easy way to have a full email server without the overhead of installing and configuring all servers needed to handle incoming and outgoing messages. We wanted something simple, with no interface and no server management, so we came up with S3-Email."

- [AWS Latency Monitoring](https://www.cloudping.co/grid#){:target="_blank"}: round trip ping times between all AWS regions.



*Article version: 1.0.0*

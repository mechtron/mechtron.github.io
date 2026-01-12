---
layout: post
title: "DevOps Industry Updates #23"
permalink: /devops-industry-updates-23/
---

It has already been three weeks since the last issue and a lot has happened! Good news for you, I have been tuned in and I've curated the greatest hits into this, issue #23 of DevOps Industry Updates. Get ready to groove, this one's got bop after bop:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Terraform 0.15 General Availability](https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-15-general-availability){:target="_blank"}
1. [Docker without Docker](https://fly.io/blog/docker-without-docker/){:target="_blank"}
1. [Our Journey Towards Cloud Efficiency](https://medium.com/airbnb-engineering/our-journey-towards-cloud-efficiency-9c02ba04ade8){:target="_blank"}
1. [A Kubernetes Service Mesh Comparison](https://www.toptal.com/kubernetes/service-mesh-comparison){:target="_blank"}

## 🌎 Society 

- [Thanks for the Bonus, I Quit!](https://madned.substack.com/p/thanks-for-the-bonus-i-quit){:target="_blank"}: a tech tale of greed, desperation, and the power of expectations.

<p align="center"><img src="{{ site.url }}/images/diu-23/working-dads.jpg" width="600"></p>
- [What Working Dads Can Do When a High-Pressure Job Asks Too Much](https://hbr.org/2021/04/what-working-dads-can-do-when-a-high-pressure-job-asks-too-much){:target="_blank"}


## 📟 DevOps 

- [Terraform 0.15 General Availability](https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-15-general-availability){:target="_blank"}: this release marks the beginning of the pre-release period leading up to Terraform 1.0. Terraform 0.15 includes a number of improvements that solidify Terraform workflows and ensure the stability of Terraform’s feature set for the long term.

<p align="center"><img src="{{ site.url }}/images/diu-23/verizon-5g-edge.jpeg" width="600"></p>
- [Deploying our first 5G application at the edge](https://verizon5gedgeblog.medium.com/deploying-our-first-5g-application-at-the-edge-c956c2caf7aa){:target="_blank"}: Verizon Location Technology deployed Kubernetes and a location-based application to Verizon 5G Edge with AWS Wavelength. The application powerfully illustrates the difference 5G Edge makes in application latency and location-based service interaction. **SPONSORED**

- [Grafana, Loki, and Tempo will be relicensed to AGPLv3](https://grafana.com/blog/2021/04/20/grafana-loki-tempo-relicensing-to-agplv3/){:target="_blank"}

- [How we scaled the GitHub API with a sharded, replicated rate limiter in Redis](https://github.blog/2021-04-05-how-we-scaled-github-api-sharded-replicated-rate-limiter-redis/){:target="_blank"}

- [Docker without Docker](https://fly.io/blog/docker-without-docker/){:target="_blank"}: Docker is great, but for high-density multitenant environments, Docker’s isolation isn’t strong enough. To cope with this Fly.io has migrated towards Firecracker micro-VMs.

- [DevOps Trends to Watch in 2021](https://devops.com/devops-trends-to-watch-in-2021/){:target="_blank"}


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-23/kubectl-cost.png" width="600"></p>
- [kubectl cost](https://medium.com/kubecost/hello-kubectl-cost-monitoring-kubernetes-from-the-command-line-a2147da083b7){:target="_blank"}: monitor Kubernetes spend from the command line.

<p align="center"><img src="{{ site.url }}/images/diu-23/internet-monitoring-dashboard.png" width="600"></p>
- [geerlingguy/internet-monitoring](https://github.com/geerlingguy/internet-monitoring){:target="_blank"}: monitor your network and internet speed with Docker & Prometheus.

- [a simple DNS lookup tool](https://dns-lookup.jvns.ca/trace.html){:target="_blank"}: shows you exactly what happens behind the scenes when you make a DNS query.

<p align="center"><img src="{{ site.url }}/images/diu-23/github-story-3d.png" width="600"></p>
- [Your GitHub story in 3D](https://skyline.github.com/){:target="_blank"}: view a 3D model of your GitHub contribution graph. Share it, print it, and more!

<p align="center"><img src="{{ site.url }}/images/diu-23/gitui.gif" width="600"></p>
- [extrawurst/gitui](https://github.com/extrawurst/gitui){:target="_blank"}: blazing fast terminal client for `git` written in Rust.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-23/microk8s-v1.21.png" width="500"></p>
- [What’s new in MicroK8s v1.21?](https://itnext.io/whats-new-in-microk8s-v1-21-5b84c27d85db){:target="_blank"}

- [maddevsio/aws-eks-base](https://github.com/maddevsio/aws-eks-base){:target="_blank"}: this boilerplate contains the know-how of the Mad Devs team for the rapid deployment of a Kubernetes cluster, supporting services, and the underlying infrastructure in the Amazon cloud.

- [A Kubernetes Service Mesh Comparison](https://www.toptal.com/kubernetes/service-mesh-comparison){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-23/flant-kubernetes-1.16-upgrade.png" width="600"></p>
- [How we enjoyed upgrading a bunch of Kubernetes clusters from v1.16 to v1.19](https://blog.flant.com/how-we-enjoyed-upgrading-kubernetes-clusters-from-v1-16-to-v1-19/){:target="_blank"}

- [Why you need a platform team for Kubernetes](https://polarsquad.com/blog/why-you-need-a-platform-team-for-kubernetes){:target="_blank"}: setting up a Kubernetes cluster can be deceptively simple, however that’s only the start of the actual work. Kubernetes moves fast; when it’s a critical part of your infrastructure, there’s a host of things you need to look out for to maintain a healthy cluster. More often than not, it’s wise to have a dedicated team to run Kubernetes.


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-23/codecov.png" width="600"></p>
- [Codecov breach impacts GoDaddy, Atlassian, P&G](https://www.reuters.com/technology/us-investigators-probing-breach-san-francisco-code-testing-company-firm-2021-04-16/){:target="_blank"}: U.S. federal investigators are probing an intrusion at software auditing company Codecov that affected an unknown number of its 29,000 customers, the firm said, raising the specter of knock-on breaches at companies elsewhere.

- [Behind GitHub’s new authentication token formats](https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/){:target="_blank"}

- [Universal “netmask” npm package is vulnerable to octal input data](https://sick.codes/universal-netmask-npm-package-used-by-270000-projects-vulnerable-to-octal-input-data-server-side-request-forgery-remote-file-inclusion-local-file-inclusion-and-more-cve-2021-28918/){:target="_blank"}: the package is depended on by 270,000 projects.


## 💻 Programming 

- [Gradle 7.0 Release Notes](https://docs.gradle.org/7.0/release-notes.html){:target="_blank"}: this release enables file system watching by default to make your incremental builds faster, expands support for building projects with Java 16, and adds support for building on Macs using Apple Silicon processors (such as M1).

- [You can't afford to run Java 8](https://mikemybytes.com/2021/03/16/you-cant-afford-to-run-java-8/){:target="_blank"}: TL;DR: switching just a runtime to the newer version should result in reduced startup time, better garbage collection & higher performance.

<p align="center"><img src="{{ site.url }}/images/diu-23/container-for-ants.png" width="600"></p>
- [Building a 6kB Containerized HTTP Server](https://devopsdirective.com/posts/2021/04/tiny-container-image/){:target="_blank"}

- [SQLite the only database you will ever need in most cases](https://unixsheikh.com/articles/sqlite-the-only-database-you-will-ever-need-in-most-cases.html){:target="_blank"}: the name SQLite is a nice name, but the "lite" part is misleading, it sounds like it is only useful for tiny things - which is very wrong. SQLite should be named AwesomeSQL, because that is what it is. SQLite is probably the only database you will ever need in most cases.

- [Visual Studio 2022](https://devblogs.microsoft.com/visualstudio/visual-studio-2022/){:target="_blank"}: the first public preview of Visual Studio 2022 will be released this summer.


## 🐧 Linux 

- [FTP is 50 years old](https://www.filestash.app/2021/04/16/ftp-is-50-years-old/){:target="_blank"}: the 16th of April 1971 is not only the date when the Rolling Stone first released Brown Sugar, it is also marked with the publication of RFC 114 marking the birthday of FTP.

- [6 tcpdump network traffic filter options](https://www.redhat.com/sysadmin/tcpdump-part-one){:target="_blank"}: the first six of eighteen common `tcpdump` options that you should use for network troubleshooting and analysis.


## 🚢 Leadership 

- [A Business Perspective on CI/CD Pipelines](https://thenewstack.io/a-business-perspective-on-ci-cd-pipelines/){:target="_blank"}


## ☁️ Cloud 

- [Deep dive in CORS: History, how it works, and best practices](https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/){:target="_blank"}: learn the history and evolution of same-origin policy and CORS, understand CORS and the different types of cross-origin access in depth, and learn (some) best practices.

- [Hunting down the stuck BGP routes](https://blog.benjojo.co.uk/post/bgp-stuck-routes-tcp-zero-window){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-23/airbnb-cost-efficiency.png" width="600"></p>
- [Our Journey Towards Cloud Efficiency](https://medium.com/airbnb-engineering/our-journey-towards-cloud-efficiency-9c02ba04ade8){:target="_blank"}: AirBnB describes how the business value of the cloud can quickly be offset by ballooning costs, unless the organizational capability to efficiently use these resources is developed.


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-23/hashicorp-vault.png" width="600"></p>
- [Announcing HCP Vault General Availability](https://www.hashicorp.com/blog/vault-on-the-hashicorp-cloud-platform-ga){:target="_blank"}: HCP Vault is now generally available on AWS. HCP Vault gives you the power and security of HashiCorp Vault, without the complexity and overhead of managing it yourself.

- [Introducing OpenSearch](https://aws.amazon.com/blogs/opensource/introducing-opensearch/){:target="_blank"}: OpenSearch is a community-driven, open source fork of Elasticsearch and Kibana. The OpenSearch project is the new home for AWS's previous distribution of Elasticsearch (Open Distro for Elasticsearch), which includes features such as enterprise security, alerting, machine learning, SQL and index state management.

- [IAM Access Analyzer makes it easier to implement least privilege permissions by generating IAM policies based on access activity](https://aws.amazon.com/blogs/security/iam-access-analyzer-makes-it-easier-to-implement-least-privilege-permissions-by-generating-iam-policies-based-on-access-activity/){:target="_blank"}

- [Amazon RDS for PostgreSQL Integrates with AWS Lambda](https://aws.amazon.com/about-aws/whats-new/2021/04/amazon-rds-postgresql-integrates-aws-lambda/){:target="_blank"}: you can now invoke Lambda functions directly from within an Amazon RDS for PostgreSQL database via stored procedures or user-defined functions.

- [Amazon VPC Flow Logs announces out-of-the-box integration with Amazon Athena](https://aws.amazon.com/about-aws/whats-new/2021/04/amazon-vpc-flow-logs-announces-out-of-box-integration-with-amazon-athena/){:target="_blank"}

- [Amazon Athena now presents query execution plans to aid tuning](https://aws.amazon.com/about-aws/whats-new/2021/04/amazon-athena-now-presents-query-execution-plans-to-aid-tuning/){:target="_blank"}

- [DynamoDB Visual Query Builder](https://dynobase.dev/dynamodb-query-builder/){:target="_blank"}: construct complex DynamoDB queries without having to learn DynamoDB's query syntax.

- [Amazon EC2 Auto Scaling introduces Warm Pools to accelerate scale out while saving money](https://aws.amazon.com/about-aws/whats-new/2021/04/amazon-ec2-auto-scaling-introduces-warm-pools-accelerate-scale-out-while-saving-money/){:target="_blank"}



*Article version: 1.0.0*

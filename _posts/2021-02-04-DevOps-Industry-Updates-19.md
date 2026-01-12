---
layout: post
title: "DevOps Industry Updates #19"
permalink: /devops-industry-updates-19/
---

 Welcome back! Much like your favorite memestock, the world of DevOps has been moving at breakneck speeds. While the InfoSec community is [still realizing the true depths](https://www.wired.com/story/solarwinds-hack-china-usda/){:target="_blank"} of the SolarWinds hack, a new vulnerability with a different attack vector appears: NAT slipstreaming 2.0. We cover those hot topics and other key developments right here in DevOps Industry Updates - all you need to do is scroll ⬇️

## 🔥 Top Cream

This issue's top 5 stories:

1. [The career-changing art of reading the docs](https://acloudguru.com/blog/engineering/the-career-changing-art-of-reading-the-docs){:target="_blank"}
1. [Firecracker: start a VM in less than a second](https://jvns.ca/blog/2021/01/23/firecracker--start-a-vm-in-less-than-a-second/){:target="_blank"}
1. [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/){:target="_blank"}
1. [Federated Kubernetes Clusters Using Amazon EKS and KubeFed](https://aws.amazon.com/solutions/implementations/federated-amazon-eks-clusters-on-aws/){:target="_blank"}
1. [NAT Slipstreaming v2.0](https://www.armis.com/resources/iot-security-blog/nat-slipstreaming-v2-0-new-attack-variant-can-expose-all-internal-network-devices-to-the-internet/){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-19/debugging-tactics.png" width="600"></p>
- [The career-changing art of reading the docs](https://acloudguru.com/blog/engineering/the-career-changing-art-of-reading-the-docs){:target="_blank"}: don’t wait for knowledge to find you through years of inefficient trial and error. Go get it. And the most convenient, comprehensive place to grab it was there in front of you all along.

- [Software development topics I've changed my mind on after 6 years in the industry](https://chriskiehl.com/article/thoughts-after-6-years){:target="_blank"}

- [Whitehouse.gov Chooses WordPress, Again](https://pagely.com/blog/whitehouse-gov-chooses-wordpress-again/){:target="_blank"}: the all-new Whitehouse.gov debuted and like its predecessor, the site is powered by WordPress - but this version carries many differences and modern out-of-the-box features that we’re glad to see used on a site of this magnitude.

<p align="center"><img src="{{ site.url }}/images/diu-19/aws-elastic.jpg" width="600"></p>
- [AWS announces forks of Elasticsearch and Kibana](https://aws.amazon.com/blogs/opensource/stepping-up-for-a-truly-open-source-elasticsearch/){:target="_blank"}: in order to ensure open source versions of both packages will remain available and well supported, AWS announced they will step up to create and maintain a ALv2-licensed fork of open-source Elasticsearch and Kibana.

- [How hard should I push myself?](https://every.to/superorganizers/how-hard-should-i-push-myself){:target="_blank"}: what the science of stress tells us about peak performance.


## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-19/jfrog-dockerhub.png" width="500"></p>
- [JFrog users excluded from DockerHub rate limits](https://jfrog.com/blog/jfrog-docker-partnership-for-dockerhub/){:target="_blank"}: JFrog and Docker have partnered to support unlimited pulls from DockerHub using the JFrog Platform in the cloud. JFrog cloud customers will automatically be excluded from Docker Hub’s image rate limit.

- [Monitoring as Code: What It Is and Why You Need It](https://thenewstack.io/monitoring-as-code-what-it-is-and-why-you-need-it/){:target="_blank"}: monitoring as code is not just automated installation and configuration of agents, plugins, and exporters - it encompasses the entire observability lifecycle, including automated diagnosis, alerting and incident management, and even automated remediation.

<p align="center"><img src="{{ site.url }}/images/diu-19/postgres.jpeg" width="600"></p>
- [Our Journey to PostgreSQL 12](https://tech.coffeemeetsbagel.com/our-journey-to-postgresql-12-3d6ee15d305a){:target="_blank"}: this post walks through the steps Coffee Meets Bagel took to upgrade their PostgreSQL cluster from version 9.6 to 12.4 with less than 30 minutes of cumulative downtime, including some lessons learned along the way.

- [Load balancing and its different types](https://www.wisdomgeek.com/development/software-architecture/load-balancing-and-its-different-types/){:target="_blank"}

- [GitLab is moving to a three-tier product subscription model](https://about.gitlab.com/blog/2021/01/26/new-gitlab-product-subscription-model/){:target="_blank"}: Bronze/Starter is being phased out and current customers have a year to transition.


- [Announcing Version 2.0 of the Kubernetes and Helm Providers for Terraform](https://www.hashicorp.com/blog/announcing-version-2-0-kubernetes-and-helm-providers-for-hashicorp-terraform){:target="_blank"}: includes a more declarative authentication flow, alignment of resource behaviors and attributes with upstream APIs, normalized wait conditions across several resources, and removes support for Helm v2.

- [Postgres Scaling Advice for 2021](https://www.cybertec-postgresql.com/en/postgres-scaling-advice-for-2021/){:target="_blank"}

- [Building Alerts for Observability’s 4 Golden Signals](https://www.hashicorp.com/blog/building-alerts-observability-4-golden-signals-with-terraform-cloud-new-relic){:target="_blank"}: learn how to build observability as code infrastructure automation using New Relic, Terraform Cloud, and Google’s 4 Golden Signals of SRE.


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-19/pomerium.png" width="300"></p>
- [pomerium/pomerium](https://github.com/pomerium/pomerium){:target="_blank"}: a great alternative to a VPN, Pomerium is an identity-aware proxy that enables secure access to internal applications. Pomerium also provides a standardized interface to add access control to applications regardless of whether the application itself has authorization or authentication baked-in.

- [Firecracker: start a VM in less than a second](https://jvns.ca/blog/2021/01/23/firecracker--start-a-vm-in-less-than-a-second/){:target="_blank"}: it turns out that Firecracker is relatively straightforward to use (or at least as straightforward as anything else that’s for running VMs), the documentation and examples are pretty clear, you definitely don’t need to be a cloud provider to use it, and as advertised, it starts VMs really fast.

- [generalui/s3p](https://github.com/generalui/s3p){:target="_blank"}: list/copy/sync/compare S3 buckets 5x-50x faster than AWS's CLI


## ☸️ Kubernetes 

- [Building a Kubernetes CI/CD Pipeline with GitLab and Helm](https://nextlinklabs.com/insights/kubernetes-ci-cd-gitlab-with-helm){:target="_blank"}: explains how to assemble the Continuous Delivery (CD) piece of the puzzle to create a CI/CD pipeline to continuously deploy your applications to Kubernetes (EKS) using Helm and AWS's Load Balancer Controller.

- [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/){:target="_blank"}: "since our last post on Scaling to 2,500 Nodes we’ve continued to grow our infrastructure to meet researcher needs, in the process learning many additional lessons. This post summarizes those lessons so that others in the Kubernetes community can benefit from them, and ends with problems we still face that we’ll be tackling next."

- [Argo Workflows v3.0](https://blog.argoproj.io/argo-workflows-v3-0-4d0b69f15a6e){:target="_blank"}: changes include new APIs for Argo Events and a major UI upgrade (20k new lines of code) with many new features.


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-19/nat-slipstreaming.png" width="600"></p>
- [NAT Slipstreaming v2.0](https://www.armis.com/resources/iot-security-blog/nat-slipstreaming-v2-0-new-attack-variant-can-expose-all-internal-network-devices-to-the-internet/){:target="_blank"}: ruh-roh: a new attack variant could allow attackers to bypass NATs & Firewalls and reach any unmanaged device within the internal network from the Internet.

- [Intentionally leaking AWS keys](https://brokenco.de/2021/01/15/leaking-aws-keys.html){:target="_blank"}


## 💻 Programming 

- [`pip` has dropped support for Python 2 ](https://pip.pypa.io/en/stable/news/#id4){:target="_blank"}

- [A Tour of Go 1.16's io/fs package](https://benjamincongdon.me/blog/2021/01/21/A-Tour-of-Go-116s-iofs-package/){:target="_blank"}: the upcoming Go 1.16 release has a lot of exciting updates in it, but my most anticipated addition to the Go standard library is the new `io`/`fs` and `testing`/`testfs` packages.

- [Would Rust secure cURL?](https://timmmm.github.io/curl-vulnerabilities-rust/){:target="_blank"}: is this true? Are the majority of cURL’s security vulnerabilities logic mistakes? This article takes a data-driven approach to answer that question.

- [A Framework for Writing Better Documentation](https://documentation.divio.com){:target="_blank"}

## 🐧 Linux 

- [Five ways to use redirect operators in bash](https://www.redhat.com/sysadmin/redirect-operators-bash){:target="_blank"}: redirect operators are a basic but essential part of working at the bash command line. See how to safely redirect input and output to make your Linux sysadmin life easier.

- [`nq`](https://github.com/leahneukirchen/nq){:target="_blank"}: small utilities that allow creation of very lightweight job queue systems which require no setup, maintenance, supervision, or any long-running processes.

## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-19/lets-encrypt-db-server.jpg" width="600"></p>
- [The database servers powering Let's Encrypt](https://letsencrypt.org/2021/01/21/next-gen-database-servers.html){:target="_blank"}: database performance is the single most critical factor in Let's Encrypt's ability to scale while meeting service level objectives. In late 2020, we upgraded our database servers and we’ve been very happy with the results.

## 🚢 Leadership 

- [Ideal Days vs. Story Points: Which Is Better and Why?](https://www.7pace.com/blog/ideal-days-vs-story-points){:target="_blank"}: "when will it be done?"If you’ve been working in software development for more than a month, you know this question is a trap. This article explains how to create timelines that stakeholders will accept and won’t lead to unrealistic deadlines for you and your team.

- [Understanding the Imposter Syndrome](https://thevaluable.dev/understand-overcome-imposter-syndrome/){:target="_blank"}

- [Engineering Productivity Can Be Measured - Just Not How You'd Expect](https://www.okayhq.com/blog/engineering-productivity-can-be-measured){:target="_blank"}


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-19/network-latency-chart.png" width="600"></p>
- [Comparing AWS vs Azure vs GCP](https://www.cockroachlabs.com/guides/2021-cloud-report){:target="_blank"}: in an effort to help others understand the performance and cost tradeoffs of each cloud and its machines, Cockroach Labs' 2021 Cloud Report runs over 1,000 microbenchmark tests to evaluate CPU, network, storage, and TPC-C performance.


## AWS 

- [Amazon MSK now supports the ability to change the size or family of your Apache Kafka brokers](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-msk-now-supports-the-ability-to-change-the-size-or-family/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-19/aws-auto-complete.png" width="600"></p>
- [EOL for Python 2.7 in the AWS SDK and AWS CLI v1](https://aws.amazon.com/blogs/developer/announcing-end-of-support-for-python-2-7-in-aws-sdk-for-python-and-aws-cli-v1/){:target="_blank"}

- [Federated Kubernetes Clusters Using Amazon EKS and KubeFed](https://aws.amazon.com/solutions/implementations/federated-amazon-eks-clusters-on-aws/){:target="_blank"}: this solution automates the deployment and federation of two Amazon Elastic Kubernetes Service (Amazon EKS) clusters across multiple AWS Regions, configuring highly available, low latency, and easily scalable applications.

- [Amazon Elastic File System triples read throughput](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-elastic-file-system-triples-read-throughput/){:target="_blank"}: no application or configuration changes required!

<p align="center"><img src="{{ site.url }}/images/diu-19/aws-s3-costoptimization.png" width="600"></p>
- [AWS S3 Pricing and Cost Optimization Guide](https://www.cloudforecast.io/blog/aws-s3-pricing-and-optimization-guide/){:target="_blank"}

- [Amazon EBS announces CloudWatch metrics with 1-minute granularity on all EBS volume types](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-ebs-announces-cloudwatch-metrics-with-1-minute-granularity-on-all-ebs-volume-types/){:target="_blank"}


## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-19/gcp-dunant.jpg" width="600"></p>
- [The Dunant subsea cable, connecting the US and mainland Europe, is ready for service](https://cloud.google.com/blog/products/infrastructure/googles-dunant-subsea-cable-is-now-ready-for-service){:target="_blank"}: Dunant is the first long-haul subsea cable to feature a 12 fiber pair space-division multiplexing (SDM) design, and will deliver record-breaking capacity of 250 terabits per second (Tbps) across the ocean, enough to transmit the entire digitized Library of Congress three times every second!


*Article version: 1.0.0*

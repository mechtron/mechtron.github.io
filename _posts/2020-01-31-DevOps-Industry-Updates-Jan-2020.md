---
layout: post
title: "DevOps Industry Updates: January 2020"
permalink: /devops-industry-updates-january-2020/
---

Welcome to 2020! Here are some of the latest industry rumblings:

## DevOps

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/alpine.png" width="400"></p>
- [Using Alpine can make Python Docker builds 50× slower](https://pythonspeed.com/articles/alpine-docker-python/){:target="_blank"} by Itamar Turner-Trauring: why Alpine is recommended, and why you probably shouldn’t use it for your Python application.

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/jenkins-k8s.png" width="300"></p>
- [Jenkins Pros & Cons (2020)](https://cloudposse.com/devops/jenkins-pros-cons-2020/){:target="_blank"} by Erik Osterman: the pros and cons of Jenkins when following “Infrastructure as Code” best practices on Kubernetes using Helm.

- [Data Migrations Don’t Have to Come with Downtime](https://engblog.nextdoor.com/data-migrations-dont-have-to-come-with-downtime-eabc15893700){:target="_blank"} by Sameer Suresh: migration strategies for Redis that don't require maintenance windows.

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/lets-encrypt.png" width="600"></p>
- [Let's Encrypt APIs go down](https://community.letsencrypt.org/t/2019-11-17-autoincrement-maxed-out/106563){:target="_blank"}: great RCA showing us why we need to monitor our database pointers.

- [Writing Runbook Documentation When You’re An SRE](https://www.transposit.com/blog/2020.01.30-writing-runbook-documentation-when-youre-an-sre/){:target="_blank"} by Taylor Barnett: tips and tricks for writing effective runbook documentation when you aren’t a technical writer.

- [4 trends that will shape the cloud-native world in 2020](https://venturebeat.com/2020/01/26/4-trends-that-will-shape-the-cloud-native-world-in-2020/){:target="_blank"} by Malo Marrec: deep enterprise integrations, hybrid cloud, security and "the edge".

## Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/k8s-gatling.png" width="600"></p>
- [Distributed load testing with Gatling and Kubernetes](https://movile.blog/distributed-load-testing-with-gatling-and-kubernetes/){:target="_blank"} by Movile: fabulous overview of load testing an application running on Kubernetes.

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/kubectl-exec.png" width="600"></p>
- [How It Works — kubectl exec](https://itnext.io/how-it-works-kubectl-exec-e31325daa910){:target="_blank"} by Ivan Sim: looks into how the command works by examining the relevant code in kubectl, K8s API Server, Kubelet and the Container Runtime Interface (CRI) Docker API

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/kube-networking.svg" width="600"></p>
- [Kubernetes Networking Demystified: A Brief Guide](hhttps://www.stackrox.com/post/2020/01/kubernetes-networking-demystified/){:target="_blank"} by Karen Bruner: in this post, we will present an introduction into the complexities of Kubernetes networking by following the journey of an HTTP request to a service running on a basic Kubernetes cluster.

## Architecture

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/monolith.jpg" width="600"></p>
- [Monoliths are the future](https://changelog.com/posts/monoliths-are-the-future){:target="_blank"} by Kelsey Hightower: monoliths are the future because the problem people are trying to solve with microservices doesn’t really line up with reality.

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/infra-layers.png" width="600"></p>
- [Do I Need an API Gateway if I Use a Service Mesh?](https://blog.christianposta.com/microservices/do-i-need-an-api-gateway-if-i-have-a-service-mesh/){:target="_blank"} by Christian Posta: concrete explanation to help clarify differences, overlap, and when to use API Gateways and Service Meshes.

- [Deterministic Aperture: A distributed, load balancing algorithm](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/daperture-load-balancer.html?utm_campaign=Up%20%26%20Running%20Weekly&utm_medium=email&utm_source=Revue%20newsletter){:target="_blank"} by Bryce Anderson: a new client-side load balancing technique we’ve developed and deployed widely at Twitter which has allowed our microservice architecture to efficiently scale clusters to thousands of instances

## Security

- [Lawmakers Prod FCC to Act on SIM Swapping](https://krebsonsecurity.com/2020/01/senators-prod-fcc-to-act-on-sim-swapping/){:target="_blank"} by Brian Krebs: lawmakers are demanding to know what, if anything, the agency might be doing to track and combat SIM swapping.

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/brokenwindows.png" width="200"></p>
- [Patch Tuesday, January 2020 Edition](https://krebsonsecurity.com/2020/01/patch-tuesday-january-2020-edition/){:target="_blank"} by Brian Krebs: Microsoft addressed a severe bug (CVE-2020-0601) in Windows 10 and Windows Server 2016/19 reported by the NSA that allows an attacker to spoof digital signatures.

## Amazon Web Services

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/aws.png" width="400"></p>

- [Amazon EKS Announces a 50% Price Reduction](https://aws.amazon.com/about-aws/whats-new/2020/01/amazon-eks-announces-price-reduction/){:target="_blank"}: EKS clusters now cost $0.10 per hour per cluster that you operate.

- [RDS Snapshots to S3](https://aws.amazon.com/about-aws/whats-new/2020/01/announcing-amazon-relational-database-service-snapshot-export-to-s3/){:target="_blank"}: you can now export Amazon Relational Database Service (Amazon RDS) or Amazon Aurora snapshots to Amazon S3 as Apache Parquet, an efficient open columnar storage format for analytics.

- [AWS IAM policy simulator](https://aws.amazon.com/about-aws/whats-new/2020/01/aws-iam-policy-simulator-now-simulates-permissions-boundary-policies/){:target="_blank"}: administrators can now simulate permissions boundary policies along with other permissions policies to better understand the effective permissions for IAM principals.

- [Amazon SQS Now Supports 1-Minute CloudWatch Metrics](https://aws.amazon.com/about-aws/whats-new/2020/01/amazon-sqs-now-supports-1-minute-cloudwatch-metrics-in-all-commercial-regions/){:target="_blank"}: you can now set up Amazon CloudWatch metrics that update at 1-minute intervals at no additional cost in all commercial regions (data was previously limited to 5-minute intervals).

## Programming

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/pandas-1.0.png" width="500"></p>
- [Python Pandas hits 1.0](https://devclass.com/2020/01/30/pandas-hits-1-0-opening-up-to-new-engines-and-dtype-experiments/){:target="_blank"} by Julia Schmidt: the Python pandas data analysis and manipulation library has finally achieved version 1.0 after more than a decade of development.

- [Ready Or Not, It's Goodbye Python 2](https://www.i-programmer.info/news/216-python/13431-ready-or-not-its-goodbye-python-2.html){:target="_blank"} by Janet Swift: results of a survey by Active State measuring Python 3 adoption rates.

*Article version: 1.0.0*

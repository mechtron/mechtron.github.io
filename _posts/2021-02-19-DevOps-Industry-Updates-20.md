---
layout: post
title: "DevOps Industry Updates #20"
---

In this linux-heavy edition of DevOps Industry Updates, we visit some more advanced `git` features, SSH tunnels, a 24 year old kernel bug and, and on a non-linux note, the earth-shattering emergence of Databricks. It's been an especially busy couple of weeks in the wonderful world of DevOps, but lucky for you, I have all of the best parts right here:


 

## 🔥 Top Cream

This issue's top 5 stories:

1. [5 habits of successful DevOps leaders](https://enterprisersproject.com/article/2021/2/devops-5-habits-successful-leaders){:target="_blank"}
1. [A visual guide to SSH tunnels](https://robotmoon.com/ssh-tunnels/){:target="_blank"}
1. [Hildegard: New Malware Targeting Kubernetes](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/){:target="_blank"}
1. [How .NET container images are maintained ](https://devblogs.microsoft.com/dotnet/staying-safe-with-dotnet-containers/){:target="_blank"}
1. [A visual guide on troubleshooting Kubernetes deployments](https://learnk8s.io/troubleshooting-deployments){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-20/databricks.png" width="400"></p>
- [Why Databricks Is Winning In The Data & Analytics Market](https://cloudnativeenterprise.substack.com/p/why-databricks-winning-market){:target="_blank"}: as evidenced by a recent $1 billion funding raise, Databricks is growing rapidly and deservedly.

- [Email from Jeff Bezos to employees](https://www.aboutamazon.com/news/company-news/email-from-jeff-bezos-to-employees){:target="_blank"}: Andy Jassy will become the new CEO of Amazon.

<p align="center"><img src="{{ site.url }}/images/diu-20/lastpass.jpg" width="600"></p>
- [Changes to LastPass Free](https://blog.lastpass.com/2021/02/changes-to-lastpass-free/){:target="_blank"}: starting March 16th, you will need to pay $27/year if you want to use LastPass on your mobile device and computer.


## 📟 DevOps 

- [Engineering dependability and fault tolerance in a distributed system](https://www.ably.io/blog/engineering-dependability-and-fault-tolerance-in-a-distributed-system){:target="_blank"}: discusses the concepts of dependability and fault tolerance and explains how the Ably platform is designed with fault tolerant approaches to uphold its dependability guarantees.

- [Drawbacks of developing in containers](https://ntietz.com/tech-blog/drawbacks-of-developing-in-containers/){:target="_blank"}: everything involves tradeoffs, and today we're going to focus on what some of the drawbacks of containers are.

<p align="center"><img src="{{ site.url }}/images/diu-20/terraform.png" width="400"></p>
- [Terraform Mono Repo vs. Multi Repo: The Great Debate](https://www.hashicorp.com/blog/terraform-mono-repo-vs-multi-repo-the-great-debate){:target="_blank"}: learn about the pros and cons of using mono repositories and multi repositories along with the most logical use case for each.

- [Dynamically Loaded Terraform Providers](https://www.phillipsj.net/posts/dynamically-loaded-terraform-providers/){:target="_blank"}: there are some situations where you need information from your Terraform execution to configure a provider. This can be a challenge and not super obvious if you need to do it. Let’s dive into a scenario where this exists.


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-20/iamlive.gif" width="600"></p>
- [iann0036/iamlive](https://github.com/iann0036/iamlive){:target="_blank"}: generate a basic IAM policy from AWS client-side monitoring (CSM).

- [spulec/moto](https://github.com/spulec/moto){:target="_blank"}: a library that allows you to easily mock out tests based on AWS infrastructure.

- [conwnet/github1s](https://github.com/conwnet/github1s){:target="_blank"}: one second to read GitHub code with VS Code.

<p align="center"><img src="{{ site.url }}/images/diu-20/homebrew-3.0.0.jpg" width="500"></p>
- [Homebrew 3.0.0](https://brew.sh/2021/02/05/homebrew-3.0.0/){:target="_blank"}: adds official Apple Silicon support and a new bottle format in formulae.


## ☸️ Kubernetes 

- [Hildegard: New Malware Targeting Kubernetes](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/){:target="_blank"}: Unit 42 researchers detected a new malware campaign targeting Kubernetes clusters. Once getting a foothold, the malware attempted to spread over as many containers as possible and eventually launched cryptojacking operation.

<p align="center"><img src="{{ site.url }}/images/diu-20/kube-control-loop.png" width="600"></p>
- [Exploring Kubernetes Operator Pattern](https://iximiuz.com/en/posts/kubernetes-operator-pattern/){:target="_blank"}: "in this article, I'll try to take a closer look at the Operators pattern, see which Kubernetes parts are involved in operators implementation, and what makes operators feel like first-class Kubernetes citizens. Of course, with as many pictures as possible."

<p align="center"><img src="{{ site.url }}/images/diu-20/k8s-troubleshooting-deployments.svg" width="600"></p>
- [A visual guide on troubleshooting Kubernetes deployments](https://learnk8s.io/troubleshooting-deployments){:target="_blank"}: a diagram to help you debug your deployments in Kubernetes.


## 🔐 Security 

- [What's an SPF Record? Ultimate Guide to Email](https://blog.ohmysmtp.com/blog/whats-an-spf-record/){:target="_blank"}: spam has been sloshing around on the internet since forever and so have methods to fight it. SPF is a neat way to help prevent your domain name from being abused for appearing to send spam or forged emails.

- [How .NET container images are maintained ](https://devblogs.microsoft.com/dotnet/staying-safe-with-dotnet-containers/){:target="_blank"}: staying safe and up-to-date with containers can be challenging and not always intuitive. This post describes Microsoft's approach to helping you with that — largely via their container image publishing system — and with associated guidance of the images Microsoft publishes.

<p align="center"><img src="{{ site.url }}/images/diu-20/elliptic-curve.jpg" width="600"></p>
- [Basic Intro to Elliptic Curve Cryptography](https://qvault.io/2020/09/17/very-basic-intro-to-elliptic-curve-cryptography/){:target="_blank"}

- [Normalizing AWS IAM Policies for Automation](https://steampipe.io/blog/normalizing-aws-iam-policies-for-automated-analysis){:target="_blank"}: uncovering the power of SQL to analyze IAM policies via normalization of the AWS IAM policy syntax.


## 💻 Programming 

- [Python strings are immutable, but only sometimes](https://web.eecs.utk.edu/~azh/blog/pythonstringsaremutable.html){:target="_blank"}

- [Python 2to3: What’s New in 3.0](http://www.andy-pearce.com/blog/posts/2021/Jan/python-2to3-whats-new-in-30/){:target="_blank"}: features added in Python 3.0 beyond those already in 2.6, including Unicode by default, type annotations, and exception chaining.


## 🐧 Linux 

- [A visual guide to SSH tunnels](https://robotmoon.com/ssh-tunnels/){:target="_blank"}: this article does a great job explaining common use cases and examples of SSH tunnels while visually presenting the traffic flows.

<p align="center"><img src="{{ site.url }}/images/diu-20/git-logo.png" width="250"></p>
- [Advanced Git Features You Didn’t Know You Needed](https://martinheinz.dev/blog/43){:target="_blank"}: `git` is a very powerful tool which almost every developer needs to use on a daily basis, but for most us it's usage is reduced to just a few commands such as pull, commit and push. To be efficient, productive and wield the full power of `git` however, one needs to know a few more commands and tricks.

- [Alternative Shells](https://github.com/oilshell/oil/wiki/Alternative-Shells){:target="_blank"}: this is a big list of alternative shells (as opposed to the common POSIX-ish shells like bash and zsh).

- [Uncovering a 24-year-old bug in the Linux Kernel](https://engineering.skroutz.gr/blog/uncovering-a-24-year-old-bug-in-the-linux-kernel/){:target="_blank"}

- [8 tips for reliable Linux system automation](https://www.redhat.com/sysadmin/8-tips-automation){:target="_blank"}: reducing complexity can streamline and smooth the automation pipeline.


## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-20/cio-devops-working.png" width="600"></p>
- [5 habits of successful DevOps leaders](https://enterprisersproject.com/article/2021/2/devops-5-habits-successful-leaders){:target="_blank"}: building and improving a DevOps culture requires a special kind of leader. The most successful DevOps leaders model habits including consensus-building and continuous learning.

- [How Managers Can Support Employees with Chronic Illnesses](https://hbr.org/2021/02/how-managers-can-support-employees-with-chronic-illnesses){:target="_blank"}: chronic illness is extremely common, and the Covid-19 pandemic has helped normalize talking about it in the workplace. It can be hard to know what to say to an employee with a chronic illness — it’s an emotional topic, but there are three steps managers can take to ensure they approach these conversations with empathy and confidence.


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-20/cloud-shell.png" width="600"></p>
- [Comparing Cloud Shells: AWS, Azure, and GCP](https://seroter.com/2021/02/03/lets-compare-the-cloud-shells-offered-by-aws-microsoft-azure-and-google-cloud-platform/){:target="_blank"}: "in this blog post, I’m going to look at the cloud shells from AWS, Microsoft Azure, and Google Cloud, and see what they really have to offer."


## AWS 

- [AWS Innovate: AI/ML Edition](https://aws.amazon.com/events/innovate-online-conference/americas/){:target="_blank"}: learn about AWS's latest technologies and innovations in AI/ML, share core concepts, and dive deep into architectural and deployment best practices across 30+ sessions at this free online event.

<p align="center"><img src="{{ site.url }}/images/diu-20/how-they-aws.png" width="300"></p>
- [How they AWS](https://github.com/upgundecha/howtheyaws){:target="_blank"}: a curated collection of publicly available resources on how technology and tech-savvy organizations around the world use AWS.

- [AWS Lambda now supports Node.js 14](https://aws.amazon.com/about-aws/whats-new/2021/02/aws-lambda-now-supports-node-js-14/){:target="_blank"}: new features include top-level-await, enhanced diagnostics, modifications of the streams APIs, and a revised JavaScript engine for better performance.

<p align="center"><img src="{{ site.url }}/images/diu-20/s3-private-link.png" width="600"></p>
- [PrivateLink for Amazon S3 is Now Generally Available](https://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/){:target="_blank"}: eliminates the need to use public IPs, configure firewall rules, or configure an Internet Gateway to access S3 from on-prem.

- [VPC Traffic Mirroring is now supported on select non-Nitro instance types](https://aws.amazon.com/about-aws/whats-new/2021/02/amazon-vpc-traffic-mirroring-supported-select-non-nitro-instance-types/){:target="_blank"}: replicate network traffic from EC2 instances within your VPC to security and monitoring appliances for use cases such as content inspection, threat monitoring, and troubleshooting.

- [Introducing Amazon EC2 M5n, M5dn, R5n, and R5dn Bare Metal Instances](https://aws.amazon.com/about-aws/whats-new/2021/02/introducing-amazon-ec2-m5n-m5dn-r5n-and-r5dn-bare-metal-instances/){:target="_blank"}: utilize up to 100 Gbps of network bandwidth and use Elastic Fabric Adapter (EFA) for HPC/ML workloads. Like all Amazon EC2 bare metal instances, you also get direct access to the Intel Xeon Scalable processor and memory resources of the underlying server.

- [ALB now supports Application Cookie Stickiness](https://aws.amazon.com/about-aws/whats-new/2021/02/application-load-balancer-supports-application-cookie-stickiness/){:target="_blank"}: this new feature helps customers ensure that clients connect to the same load balancer target for the duration of their session using application cookies.

- [Amazon Aurora supports PostgreSQL 12](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-aurora-supports-postgresql-12/){:target="_blank"}: PostgreSQL 12 includes better index management, improved partitioning capabilities, and the ability to execute JSON path queries per SQL/JSON specifications.

- [Introducing Amazon CloudFront Security Savings Bundle](https://aws.amazon.com/about-aws/whats-new/2021/02/introducing-amazon-cloudfront-security-savings-bundle/){:target="_blank"}: a flexible self-service pricing plan that helps you save up to 30% on your CloudFront bill in exchange for a monthly spend commitment for a 1-year term.



*Article version: 1.0.0*

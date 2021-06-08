---
layout: post
title: "DevOps Industry Updates #26"
---

Depending where in the world you might be, a return to the office might be right around the corner. Here in Southern California, tech companies are welcoming employees back Labor Day or sooner, which means I have about 3 months to figure out how to fit back into my signature Levi chinos. Do they make shoehorns for pants? I'm starting to sound like my Product team!

## 🔥 Top Cream

This issue's top 5 stories:

1. [Architecting Kubernetes clusters: choosing the best autoscaling strategy](https://learnk8s.io/kubernetes-autoscaling-strategies){:target="_blank"}
1. [How Netflix uses eBPF flow logs at scale for network insight](https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96){:target="_blank"}
1. [New container feature: Volatile overlay mounts](https://www.redhat.com/sysadmin/container-volatile-overlay-mounts){:target="_blank"}
1. [12 Common Misconceptions about AWS DynamoDB](https://dev.to/rafalwilinski/12-common-misconceptions-about-aws-dynamodb-e1d){:target="_blank"}
1. [Kubernetes and the challenges of continuous software delivery](https://cloud.google.com/architecture/addressing-continuous-delivery-challenges-in-a-kubernetes-world){:target="_blank"}

## 🌎 Society 

- [Blog about what you've struggled with](https://jvns.ca/blog/2021/05/24/blog-about-what-you-ve-struggled-with/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-26/apple-back-to-work.jpg" width="600"></p>
- [Apple employees push back against returning to the office in internal letter](https://www.theverge.com/2021/6/4/22491629/apple-employees-push-back-return-office-internal-letter-tim-cook){:target="_blank"}: “over the last year we often felt not just unheard, but at times actively ignored.”

- [Reddit Drunk Post: Things I've learned as a Sr. Engineer](https://old.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/){:target="_blank"}

- [Stack Overflow Sold to Tech Giant Prosus for $1.8 Billion](https://www.wsj.com/articles/software-developer-community-stack-overflow-sold-to-tech-giant-prosus-for-1-8-billion-11622648400){:target="_blank"}: this deal is Prosus’ biggest investment in online learning and comes weeks after it sold a chunk of its massive Tencent holding.


## 📟 DevOps 

- [The Mysterious Gotcha of gRPC Stream Performance](https://ably.com/blog/grpc-stream-performance){:target="_blank"}: "recently, we spent longer than planned trying to work out why the performance of a gRPC streaming server was worse than expected. So we rolled up our sleeves and went sleuthing in-house."

- [How To Write Ansible Playbooks](https://www.digitalocean.com/community/tutorial_series/how-to-write-ansible-playbooks){:target="_blank"}: this series will walk you through some of Ansible’s main features which you can use to write playbooks for server automation. At the end, you’ll create a playbook to automate setting up a remote Nginx web server and deploy a static HTML website to it.

<p align="center"><img src="{{ site.url }}/images/diu-26/opentelemetry.png" width="500"></p>
- [Why (and how) GitHub is adopting OpenTelemetry](https://github.blog/2021-05-26-why-and-how-github-is-adopting-opentelemetry/){:target="_blank"}: GitHub needed a solution that would allow them to standardize telemetry usage, while also making it easy for developers around the organization to instrument their code. The OpenTelemetry project provided us with exactly that!

- [Continuous Infrastructure Deployment with Terraform Cloud](https://itnext.io/continuous-infrastructure-deployment-with-terraform-cloud-2853cbbb920){:target="_blank"}: "today I will be exploring Terraform Cloud to automate infrastructure changes via GitHub Actions and promote those changes from one environment to the next."

- [How a Jenkins Job Broke our Jenkins UI](https://slack.engineering/how-a-jenkins-job-broke-our-jenkins-ui/){:target="_blank"}: troubleshooting plugin upgrades and debugging Jenkins.

<p align="center"><img src="{{ site.url }}/images/diu-26/docker-best-practices.jpg" width="600"></p>
- [Best Practices Around Production Ready Web Apps with Docker Compose](https://nickjanetakis.com/blog/best-practices-around-production-ready-web-apps-with-docker-compose){:target="_blank"}: "here's a few patterns I've picked up based on using Docker since 2014. I've extracted these from doing a bunch of freelance work."

- [The need for slimmer containers](https://iximiuz.com/en/posts/thick-container-vulnerabilities/){:target="_blank"}

- [How Netflix uses eBPF flow logs at scale for network insight](https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96){:target="_blank"}: Netflix has developed a network observability sidecar called Flow Exporter that uses eBPF tracepoints to capture TCP flows at near real time.

- [New container feature: Volatile overlay mounts](https://www.redhat.com/sysadmin/container-volatile-overlay-mounts){:target="_blank"}: with containers, we don't always care about data being retained after a crash. See how volatile overlay mounts can help increase performance in these situations.


## 🛠️ DevOps Tools 

- [A new future for icanhazip](https://major.io/2021/06/06/a-new-future-for-icanhazip/){:target="_blank"}: the history of how `icanhazip.com` was born, and its future as the infamous domain exchanges ownership.

- [Dockerfile ENTRYPOINT vs CMD vs RUN](https://www.youtube.com/watch?v=NIB6nS5JEDw){:target="_blank"}

- [ElectricEye](https://github.com/jonrau1/ElectricEye){:target="_blank"}: continuously monitor your AWS services for configurations that can lead to degradation of confidentiality, integrity or availability.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-26/k8s-autoscaling-strategies.svg" width="600"></p>
- [Architecting Kubernetes clusters: choosing the best autoscaling strategy](https://learnk8s.io/kubernetes-autoscaling-strategies){:target="_blank"}: scaling pods and nodes in a Kubernetes cluster could take several minutes with the default settings. Learn how to size your cluster nodes, configure the Horizontal and Cluster Autoscaler, and overprovision your cluster for faster scaling.

- [GitOps Demystified](https://testingclouds.wordpress.com/2021/06/02/gitops-demystified/){:target="_blank"}: my view of what GitOps is and my take on some of its pros and cons. I’ll also try to give a bit more insight into what it looks like to Implement GitOps and use a GitOps pattern.

- [CKS, CKA and CKAD Simulator](https://killer.sh){:target="_blank"}: 22 scenarios to verify your K8s security skills and prepare for the CKS exam.

- [Top 10 PromQL examples for monitoring Kubernetes](https://sysdig.com/blog/prometheus-query-examples/){:target="_blank"}

- [Kubernetes and the challenges of continuous software delivery](https://cloud.google.com/architecture/addressing-continuous-delivery-challenges-in-a-kubernetes-world){:target="_blank"}

- [GitOps is a placebo](https://www.stevesmith.tech/blog/gitops-is-a-placebo/){:target="_blank"}: oh no he didn't!

- [Failure stories: How to destroy Elasticsearch while migrating it within Kubernetes](https://blog.flant.com/failure-stories-elasticsearch-migration-within-kubernetes/){:target="_blank"}


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-26/amazon-sidewalk.jpeg" width="600"></p>
- [Amazon devices will soon automatically share your Internet with neighbors](https://arstechnica.com/gadgets/2021/05/amazon-devices-will-soon-automatically-share-your-internet-with-neighbors/){:target="_blank"}: Amazon's experimental wireless mesh networking turns users into guinea pigs.

- [Have I been Pwned goes open source](https://www.zdnet.com/article/have-i-been-pwned-goes-open-source/){:target="_blank"}: want to find out if someone's stolen your user IDs and passwords? The"Have I Been Pwned" service can help and now the code behind it is being open sourced. They are also [collaborating with the FBI](https://github.com/dineshsonachalam/Lucid-Dynamodb){:target="_blank"}.

<p align="center"><img src="{{ site.url }}/images/diu-26/m1racles.png" width="600"></p>
- [M1RACLES](https://m1racles.com){:target="_blank"}: a covert channel vulnerability in the Apple Silicon “M1” chip.


## 💻 Programming 

- [In praise of `--dry-run`](https://www.gresearch.co.uk/article/in-praise-of-dry-run/){:target="_blank"}: something I always want to see in a tool which does anything non-trivial is a `--dry-run` mode. To be able to know what you’re about to do, before you do it, is a great and wondrous thing, helpful to the novice and the experienced user alike.

- [PostgreSQL `EXPLAIN` Output Explained](https://www.cybertec-postgresql.com/en/how-to-interpret-postgresql-explain-analyze-output/){:target="_blank"}: `EXPLAIN ANALYZE` is the key to optimizing SQL statements in PostgreSQL. This article does not attempt to explain everything there is to it. Rather, it will provide a brief introduction, explain what to look for and show you some helpful tools to visualize the output.

<p align="center"><img src="{{ site.url }}/images/diu-26/python-context-managers.jpg" width="600"></p>
- [Context Managers and Python's `with` Statement](https://realpython.com/python-with-statement/){:target="_blank"}: in this tutorial, you’ll learn what the Python `with` statement is for, how to use it and how to implement your own context managers.


## 🐧 Linux 

- [A Guide to the Zsh Completion With Examples](https://thevaluable.dev/zsh-completion-guide-examples/){:target="_blank"}: the Zsh module "zstyle" and an introduction to Zsh's completion system.

- [7 Linux networking commands that every sysadmin should know](https://www.redhat.com/sysadmin/7-great-network-commands){:target="_blank"}: there are a few commands that should always be in your sysadmin toolbox. Get to know these 7 essential networking commands.

- [Anatomy of a Linux DNS Lookup: Part 1](https://zwischenzugs.com/2018/06/08/anatomy-of-a-linux-dns-lookup-part-i/){:target="_blank"}: these posts are intended to break down how a program decides how it gets an IP address on a Linux host, and the components that can get involved.


## 🔩 Hardware 

- [USB-C levels up and powers up to deliver 240W in upgraded power delivery spec](https://www.theregister.com/2021/05/27/usb_pd_240w_upgrade/){:target="_blank"}


## 🚢 Leadership 

- [Building an SRE Team? How to Hire, Assess, & Manage SREs](https://www.blameless.com/blog/sre-team){:target="_blank"}: "considering adopting SRE? We will explain the roles and responsibilities of a SRE team within your organization, and how to start building one."


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-26/aws-data-transfer.png" width="600"></p>
- [AWS Data Transfer Cost Explorer](https://github.com/c1982/awsdtc){:target="_blank"}: analyzes the billed Data Transfer items in your AWS account and presents them visualized on a map.

- [The 17 Ways to Run Containers on AWS](https://www.lastweekinaws.com/blog/the-17-ways-to-run-containers-on-aws/){:target="_blank"}: 17 container options, along with guidance and commentary as to which you should choose for a given task.

- [SQS Now Supports a High Throughput Mode for FIFO Queues](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-sqs-now-supports-a-high-throughput-mode-for-fifo-queues/){:target="_blank"}: Amazon SQS announces the general availability of high throughput mode for FIFO queues, allowing you to process up to 3000 messages per second per API action. This is a tenfold increase compared to current SQS FIFO queue throughput quota.

- [AWS Lambda Extensions are now GA](https://aws.amazon.com/blogs/compute/performance-and-functionality-improvements-for-aws-lambda-extensions/){:target="_blank"}: Lambda Extensions are a new way to integrate your favorite operational tools for monitoring, observability, security, and governance with AWS Lambda.

<p align="center"><img src="{{ site.url }}/images/diu-26/dynamodb-vs-traditional-dbs.png" width="600"></p>
- [12 Common Misconceptions about AWS DynamoDB](https://dev.to/rafalwilinski/12-common-misconceptions-about-aws-dynamodb-e1d){:target="_blank"}

- [Amazon CloudWatch adds Control Plane API Usage Metrics across AWS Services](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-cloudwatch-adds-control-plane-api-usage-metrics-across-aws-services/){:target="_blank"}: AWS API call count metrics organized by AWS service in the CloudWatch console.

- [CloudWatch Logs announces Dimension support for Metric Filters](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-cloudwatch-logs-announces-dimension-support-for-metric-filters/){:target="_blank"}: allows you to create filter patterns to search for and match terms, phrases, or values in your CloudWatch Logs log events, and turn these into metrics that you can graph in CloudWatch Metrics or use to create a CloudWatch Alarm.

- [Amazon Aurora MySQL Improves Availability of Read Replicas](https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-aurora-mysql-improves-availability-read-replicas/){:target="_blank"}: read availability is now maintained through writer node restarts.



*Article version: 1.0.0*

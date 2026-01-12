---
layout: post
title: "DevOps Industry Updates #28: Q3 Hits Edition"
permalink: /devops-industry-updates-28/
---

Welcome back! It's already been nearly 10 weeks since the last edition. As it turns out, having a baby is pretty demanding time-wise, but in between all the play times and diaper changes came this beautiful part of the day called naps. That's when I would catch-up on tech, and I'm glad to present to you a special edition of DevOps Industry Updates that I've been curating. It includes just the most important updates from Q3, so grab your coffee, we have a lot of big hits to cover:

## 🔥 Top Cream

This issue's top 6 stories:

1. [ChaosDB: How we hacked thousands of Azure customers’ databases](https://www.wiz.io/blog/chaosdb-how-we-hacked-thousands-of-azure-customers-databases){:target="_blank"}
1. [Managing the Risk of Cascading Failure](https://www.infoq.com/presentations/cascading-failure-risk/){:target="_blank"}
1. [Industry leaders launch eBPF Foundation](https://www.linuxfoundation.org/press-release/facebook-google-isovalent-microsoft-and-netflix-launch-ebpf-foundation-as-part-of-the-linux-foundation/){:target="_blank"}
1. [Docker Desktop no longer free for large companies](https://www.theregister.com/2021/08/31/docker_desktop_no_longer_free/){:target="_blank"}
1. [Computers are the easy part](https://mailchimp.com/developer/blog/computers-are-the-easy-part/){:target="_blank"}
1. [AWS’s Egregious Egress](https://blog.cloudflare.com/aws-egregious-egress/){:target="_blank"}

## 🌎 Society 

- [An Old Hacker's Tips On Staying Employed](https://madned.substack.com/p/an-old-hackers-tips-on-staying-employed){:target="_blank"}: some real words of wisdom in here.

- [Industry leaders launch eBPF Foundation](https://www.linuxfoundation.org/press-release/facebook-google-isovalent-microsoft-and-netflix-launch-ebpf-foundation-as-part-of-the-linux-foundation/){:target="_blank"}: "eBPF is a revolutionary technology that allows us to modify operating system behavior in real time without risky or expensive kernel code changes."

- [Computers are the easy part](https://mailchimp.com/developer/blog/computers-are-the-easy-part/){:target="_blank"}: software systems are complex, and so are their human operators.


## 📟 DevOps 

- [How to learn PromQL with Prometheus Playground](https://iximiuz.com/en/posts/prometheus-learning-promql/){:target="_blank"}: excellent hands-on blog post series on Prometheus.

- [Managing the Risk of Cascading Failure](https://www.infoq.com/presentations/cascading-failure-risk/){:target="_blank"}: Laura Nolan discusses some of the mechanisms that cause cascading failures, what can be done to reduce the risk, and what to do if there is a cascading failure situation.

- [RabbitMQ adds support for Streams](https://blog.rabbitmq.com/posts/2021/07/rabbitmq-streams-overview/){:target="_blank"}: RabbitMQ 3.9 introduces a new type of data structure: streams. Streams unlock a set of use cases that could have been tedious to implement with “traditional” queues.

<p align="center"><img src="{{ site.url }}/images/diu-28/noops.png" width="600"></p>
- [NoOps: What Does the Future Hold for DevOps Engineers?](https://codersociety.com/blog/articles/noops){:target="_blank"}: Does NoOps mean the end of the DevOps era? Or is it simply the next step in the progression of DevOps? In this article, we’ll explore this question in detail.

- [Docker Desktop no longer free for large companies](https://www.theregister.com/2021/08/31/docker_desktop_no_longer_free/){:target="_blank"}: Docker will restrict use of the free version of its Docker Desktop utility to individuals or small businesses, and has introduced a new more expensive subscription, as it searches for a sustainable business model.

- [Terraform is not currently reviewing Community Pull Requests](https://github.com/hashicorp/terraform/commit/6562466c32a8750d7a71a6cc6232e6b5a28fe13a){:target="_blank"}: HashiCorp has acknowledged that it is currently understaffed and is unable to review public PRs.


## 🛠️ DevOps Tools 

- [sift: grep on steroids](http://sift-tool.org){:target="_blank"}: a fast and powerful alternative to grep.

<p align="center"><img src="{{ site.url }}/images/diu-28/grafana-8.png" width="600"></p>
- [Grafana 8.0](https://grafana.com/blog/2021/06/08/grafana-8.0-unified-grafana-and-prometheus-alerts-live-streaming-new-visualizations-and-more/){:target="_blank"}: unified Grafana and Prometheus alerts, live streaming, new visualizations, and more.

- [Five Ansible Techniques I Wish I’d Known Earlier](https://zwischenzugs.com/2021/08/27/five-ansible-techniques-i-wish-id-known-earlier/){:target="_blank"}: if you’ve ever spent ages waiting for an Ansible playbook to get through a bunch of tasks so yours can be tested, then this article is for you.

- [AWS Lambda Power Tuning](https://github.com/alexcasalboni/aws-lambda-power-tuning){:target="_blank"}: visualize and fine-tune the memory/power configuration of Lambda functions.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-28/kubernetes-1.22.png" width="600"></p>
- [Kubernetes 1.22 – What’s new?](https://sysdig.com/blog/kubernetes-1-22-whats-new/){:target="_blank"}: this release brings 56 enhancements, an increase from 50 in Kubernetes 1.21. Of those 56 enhancements, 13 are graduating to Stable, a whopping 24 are existing features that keep improving, and 16 are completely new.

- [How etcd works and 6 tips to keep in mind](https://blog.px.dev/etcd-6-tips/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-28/nsa-k8s.jpg" width="600"></p>
- [NSA, CISA release Kubernetes Hardening Guidance](https://www.nsa.gov/News-Features/Feature-Stories/Article-View/Article/2716980/nsa-cisa-release-kubernetes-hardening-guidance/){:target="_blank"}: the report details threats to Kubernetes environments and provides configuration guidance to minimize risk.

- [Automatic Remediation of Kubernetes Nodes](https://blog.cloudflare.com/automatic-remediation-of-kubernetes-nodes/){:target="_blank"}


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-28/chaosdb.svg" width="400"></p>
- [ChaosDB: How we hacked thousands of Azure customers’ databases](https://www.wiz.io/blog/chaosdb-how-we-hacked-thousands-of-azure-customers-databases){:target="_blank"}: data breach alert: Wiz's research team was able to gain complete unrestricted access to the accounts and databases of several thousand Microsoft Azure customers, including many Fortune 500 companies.

- [Email Authenticity 101: DKIM, DMARC, and SPF](https://www.alexblackie.com/articles/email-authenticity-dkim-spf-dmarc/){:target="_blank"}: "password resets, two factor codes, business secrets, private conversations… Email is at the centre of most of life and business, and so we must ensure it is trustworthy and authentic."


## 🐧 Linux 

- [New in Git: `switch` and `restore`](https://www.banterly.net/2021/07/31/new-in-git-switch-and-restore/){:target="_blank"}: "to my surprise, I recently found out about 2 new additions to the list of high-level commands: `git restore` and `git switch`".

<p align="center"><img src="{{ site.url }}/images/diu-28/netcat.png" width="600"></p>
- [All you need to know about `netcat`](https://blog.ikuamike.io/posts/2021/netcat/){:target="_blank"}: "`netcat` has been referred to as the TCP/IP / networking swiss army knife. In this article we’ll look at different applications of `netcat` and how it can be useful in day to day activities of a pentester, security professional and sysadmin."

- [Gentle Guide to Get Started With `tmux`](https://pragmaticpineapple.com/gentle-guide-to-get-started-with-tmux/){:target="_blank"}

- [Learn to think in `sed`, `awk`, and `grep`](https://arstechnica.com/gadgets/2021/08/linux-bsd-command-line-101-using-awk-sed-and-grep-in-the-terminal/){:target="_blank"}: "Do people really write these long, convoluted commands?" In a word: yes.


## 🚢 Leadership 

- [4 ways to improve your influence as an SRE](https://www.cortex.io/post/4-ways-to-improve-your-influence-as-an-sre){:target="_blank"}


## ☁️ Cloud 

- [Containers in the Cloud: What Are Your Options?](https://codersociety.com/blog/articles/container-workloads-aws-azure-gcp){:target="_blank"}: AWS, Azure and Google Cloud Platform all offer services to run containerized workloads securely at scale, but which one is the best?


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-28/aws-egregious-egress.png" width="600"></p>
- [AWS’s Egregious Egress](https://blog.cloudflare.com/aws-egregious-egress/){:target="_blank"}

- [Firecracker internals](https://www.talhoffman.com/2021/07/18/firecracker-internals/){:target="_blank"}: a deep dive inside the technology powering AWS Lambda.

- [Announcing custom widgets for CloudWatch dashboards](https://aws.amazon.com/about-aws/whats-new/2021/08/custom-widgets-amazon-cloudwatch-dashboards/){:target="_blank"}

- [Amazon ElastiCache for Redis now supports auto scaling](https://aws.amazon.com/about-aws/whats-new/2021/08/amazon-elasticache-redis/){:target="_blank"}

- [AWS CloudFormation: Quickly Retry Stack Operations from the Point of Failure](https://aws.amazon.com/blogs/aws/new-for-aws-cloudformation-quickly-retry-stack-operations-from-the-point-of-failure/){:target="_blank"}

- [Amazon EC2 Auto Scaling now lets you control which instances to terminate on scale-in](https://aws.amazon.com/about-aws/whats-new/2021/07/amazon-ec2-auto-scaling-now-lets-you-control-which-instances-to-terminate-on-scale-in/){:target="_blank"}

- [Search all AWS IAM actions](https://www.awsiam.info){:target="_blank"}


## GCP 

- [Google Cloud products in 4 words or less (2021 edition) ](https://cloud.google.com/blog/topics/developers-practitioners/back-popular-demand-google-cloud-products-4-words-or-less-2021-edition){:target="_blank"}



*Article version: 1.0.0*

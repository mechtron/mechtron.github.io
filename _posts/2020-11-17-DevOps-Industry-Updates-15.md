---
layout: post
title: "DevOps Industry Updates #15"
---

The future is here! Apple's new M1 SoC outperforms everything in its class with half the power, Alibaba's robots can replace faulty hard drives in 4 minutes and Amazon has finally released their long-awaited RabbitMQ service. So sit back and get scrolling, DevOps Industry Updates #15 is here:

## 🔥 Top Cream

This issue's top 5 stories:

1. [Apple Announces M1 Chip for the Mac](https://www.macrumors.com/2020/11/10/apple-announces-m1-chip-for-the-mac/){:target="_blank"}
1. [Announcing Amazon MQ for RabbitMQ](https://aws.amazon.com/blogs/aws/amazon-mq-update-new-rabbitmq-message-broker-service/){:target="_blank"}
1. [eBPF - The Future of Networking & Security](https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/){:target="_blank"}
1. [Keeping Netflix Reliable Using Prioritized Load Shedding](https://netflixtechblog.com/keeping-netflix-reliable-using-prioritized-load-shedding-6cc827b02f94){:target="_blank"}
1. [Ok Google: please publish your DKIM secret keys](https://blog.cryptographyengineering.com/2020/11/16/ok-google-please-publish-your-dkim-secret-keys/){:target="_blank"}

## 🌎 Society 

- [Tech Debt: The Bill Comes Due](https://adamcoster.medium.com/tech-debt-the-bill-comes-due-fdcef2cecf05){:target="_blank"} by Adam Coster: if we don’t solve the problems of our past, the futures that we want become ever more difficult to obtain. That’s true in life, and it’s true in software. In life, the past comes in the form of baggage. In software, we call that “technical debt”. For both life and software, how do you deal with the past? Do you ignore it and hope for the best? Do you continuously make your future better, via therapy and code refactoring? Do you cut ties with the past completely, via moving to another city and starting a new git repository?

- [The RIAA, GitHub, and youtube-dl](https://lwn.net/SubscriberLink/836830/b7289803a0c6820f/){:target="_blank"} by Jake Edge: toward the end of October, GitHub removed the repository for the youtube-dl utility, which provides a means to download video content from various streaming sites, such as YouTube. The repository was replaced with a cheery notice that it had been removed due to a DMCA takedown.

<p align="center"><img src="{{ site.url }}/images/diu-15/covid-workforce.jpg" width="600"></p>
- [CircleCI Report Finds DevOps Teams Adjusting to New COVID-19 Normal](https://devops.com/circleci-report-finds-devops-teams-adjusting-to-new-covid-19-normal/){:target="_blank"} by Mike Vizard: an annual State of Software Delivery report published today by CircleCI suggests that after a spike in developer activity last spring at the beginning of the COVID-19 pandemic, the pace at which code is moving through a continuous integration/continuous delivery (CI/CD) platform has returned to normal levels even as developers continue to work from home.

- [What I Learned From Bombing a Technical Interview](https://www.ceoraford.com/posts/what-i-learned-from-bombing-a-technical-interview/){:target="_blank"} by Ceora Ford: so... I embarrassingly bombed a technical interview yesterday. It was... BAD. But, I want to look back on this experience and point out some of the things I could have done better and will do better next time. So if you have a technical interview coming up, this one's for you!

- [The world needs women who code](https://www.redhat.com/sysadmin/women-who-code){:target="_blank"} by Seema Saharan: how can we motivate more women to get into the technology field?

- [Millions of Remote Workers Are Now Thinking About Moving](https://thenewstack.io/millions-of-remote-workers-are-now-thinking-about-moving/){:target="_blank"} by David Cassel: because of remote working, millions of teleworkers are now thinking about moving, according to a new survey by the freelancing platform Upwork. They suggest it could be “the biggest, fastest transformation of the labor market since the World World II mobilization."


## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-15/consul-envoy.png" width="600"></p>
- [The Life of a Packet Through Consul Service Mesh](https://www.hashicorp.com/on-demand/the-life-of-a-packet-through-consul-service-mesh){:target="_blank"}: this white paper covers all aspects around Consul service mesh including: service registration and sidecar proxies, Envoy sidecar proxy bootstrapping and how Mesh Gateways interconnect federated Consul datacenters on the service mesh level.

- [Travis CI's new pricing plan threw a wrench in my open source works](https://www.jeffgeerling.com/blog/2020/travis-cis-new-pricing-plan-threw-wrench-my-open-source-works){:target="_blank"} by Jeff Geerling: I just spent the past 6 hours migrating some of my open source projects from Travis CI to GitHub Actions, and I thought I'd pause for a bit (12 hours into this project, probably 15-20 more to go) to jot down a few thoughts.

<p align="center"><img src="{{ site.url }}/images/diu-15/hashicorp-vault.png" width="500"></p>
- [Announcing HashiCorp Vault 1.6](https://www.hashicorp.com/blog/vault-1-6){:target="_blank"}: in this release, we added enhancements to Integrated Storage, added the ability of tokenizing sensitive data to the Transform Secrets Engine, made web UI improvements and added a new Key Management Secret Engine.

<p align="center"><img src="{{ site.url }}/images/diu-15/netflix-load-shedding.png" width="600"></p>
- [Keeping Netflix Reliable Using Prioritized Load Shedding](https://netflixtechblog.com/keeping-netflix-reliable-using-prioritized-load-shedding-6cc827b02f94){:target="_blank"} by Manuel Correa: in Netflix engineering, we’re driven by ensuring Netflix is there when you need it to be. Yet, as recent as last year, our systems were susceptible to metaphorical traffic jams; we had on/off circuit breakers, but no progressive way to shed load. Motivated by improving the lives of our members, we’ve introduced priority-based progressive load shedding.


## 🛠️ DevOps Tools 

- [Terraform 0.14 Adds a New Concise Diff Format to Terraform Plans](https://www.hashicorp.com/blog/terraform-0-14-adds-a-new-concise-diff-format-to-terraform-plans){:target="_blank"} by Alisdair McDiarmid: the upcoming HashiCorp Terraform 0.14 release includes a new, experimental, on-by-default, concise diff renderer. This small but significant new behavior is designed to help practitioners quickly understand what changes Terraform is about to make to existing infrastructure.

- [`psql` tutorial and cheat sheet](https://tomcam.github.io/postgres/){:target="_blank"} by Tom Campbell: this is both a brief tutorial and a quick reference for the absolute least you need to know about psql. I assume you’re familiar with the command line and have a rough idea about what database administration tasks, but aren’t familiar with how to use psql to do the basics.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-15/k8s-history.png" width="600"></p>
- [eBPF - The Future of Networking & Security](https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/){:target="_blank"} by Thomas Graf: this article looks at the growing motivations to use eBPF for networking. What are all these users seeing in Cilium? What is so special about eBPF?


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-15/slipstream.png" width="600"></p>
- [NAT Slipstreaming](https://samy.pl/slipstream/){:target="_blank"} by Samy Kamkar: NAT Slipstreaming allows an attacker to remotely access any TCP/UDP service bound to a victim machine, bypassing the victim's NAT/firewall (arbitrary firewall pinhole control), just by the victim visiting a website.

<p align="center"><img src="{{ site.url }}/images/diu-15/ransomware.png" width="600"></p>
- [Why Paying to Delete Stolen Data is Bonkers](https://krebsonsecurity.com/2020/11/why-paying-to-delete-stolen-data-is-bonkers/){:target="_blank"} by Brian Krebs: companies hit by ransomware often face a dual threat: Even if they avoid paying the ransom and can restore things from scratch, about half the time the attackers also threaten to release sensitive stolen data unless the victim pays for a promise to have the data deleted. Well, new research suggests a fair number of victims who do pay up may see some or all of the stolen data published anyway.

<p align="center"><img src="{{ site.url }}/images/diu-15/cartography.png" width="600"></p>
- [IAM whatever you say IAM](https://eng.lyft.com/iam-whatever-you-say-iam-febce59d1e3b){:target="_blank"} by Alex Chantavy: using graphs helps us visualize and reason about security problems in a very powerful way. One such problem is understanding cloud permissions relationships: we needed an answer to the question “who has permission to read and write to my sensitive data resources?" In the cloud, this is not always a straightforward problem!

<p align="center"><img src="{{ site.url }}/images/diu-15/npm.png" width="600"></p>
- [Malicious npm package opens backdoors on programmers' computers](https://www.zdnet.com/article/malicious-npm-package-opens-backdoors-on-programmers-computers/){:target="_blank"} by Catalin Cimpanu: JavaScript library posing as a Twilio-related library (`twilio-npm`) opens backdoors to let attackers access infected workstations.

- [Ok Google: please publish your DKIM secret keys](https://blog.cryptographyengineering.com/2020/11/16/ok-google-please-publish-your-dkim-secret-keys/){:target="_blank"} by Matthew Green: every now and then, however, a major Internet company finds a solution that actually makes the situation worse for just about everyone. This post is about the situation with Domain Keys Identified Mail (DKIM), a harmless little spam protocol that has somehow become a monster.


## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-15/pypy.jpg" width="600"></p>
- [PyPy: Faster Python With Minimal Effort](https://realpython.com/pypy-faster-python/?__s=ehzw6fj3t7gwon6gn3f7){:target="_blank"} by Jahongir Rahmonov: Python is one of the most popular programming languages among developers, but it has certain limitations. For example, depending on the application, it can be up to 100 times as slow as some lower-level languages. That’s why many companies rewrite their applications in another language once Python’s speed becomes a bottleneck for users. But what if there was a way to keep Python’s awesome features and improve its speed? Enter PyPy.

<p align="center"><img src="{{ site.url }}/images/diu-15/contract-testing-nodejs-pact.png" width="600"></p>
- [Contract Testing for Node.js Microservices with Pact](https://codersociety.com/blog/articles/contract-testing-pact){:target="_blank"} by Kentaro Wakayama: contract testing helps ensure the compatibility of microservices and decouples the development and deployment processes of software teams. In this article, you'll learn more about contract testing and how to use Pact to verify and ensure your Node.js microservices' API compatibility.


## 🐧 Linux 

- [Deprecating `scp`](https://lwn.net/SubscriberLink/835962/ae41b27bc20699ad/){:target="_blank"} by Jonathan Corbet: the `scp` command, which uses the SSH protocol to copy files between machines, is deeply wired into the fingers of many Linux users and developers. Many users may be surprised to learn, though, that the resemblance to `rcp` goes beyond the name; much of the underlying protocol is the same as well. That protocol is showing its age, and the OpenSSH community has considered it deprecated for a while.

<p align="center"><img src="{{ site.url }}/images/diu-15/cgroups.png" width="600"></p>
- [A Linux sysadmin's introduction to cgroups](https://www.redhat.com/sysadmin/cgroups-part-one){:target="_blank"} by Steve Ovens: defining cgroups and how they help with resource management and performance tuning in this first article kicking off a four-part series covering cgroups and resource management.


## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-15/apple-m1.jpg" width="600"></p>
- [Apple Announces M1 Chip for the Mac](https://www.macrumors.com/2020/11/10/apple-announces-m1-chip-for-the-mac/){:target="_blank"} by Hartley Charlton: The M1 chip has an eight-core CPU, with four high-performance cores, in what Apple calls "the world's fastest CPU core." The other four cores are high-efficiency cores that use one-tenth of the power while still delivering high performance. Apple says that M1 delivers the best CPU performance per watt.


## 🚢 Leadership 

<p align="center"><img src="{{ site.url }}/images/diu-15/micromanagement.png" width="600"></p>
- [6 Signs You’re a Micromanager](https://unito.io/blog/micromanagement-signs/){:target="_blank"} by Dara Fontein: does this sound familiar? You’re more involved with your employees than ever, yet they seem disgruntled, unhappy, and less productive than usual. Your check-ins seem to go unappreciated. And no one seems receptive to all of your great feedback on their work. What’s going on? Well, we hate to break it to you, but you might be a micromanager.


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-15/alibaba-cloud-robots.jpg" width="600"></p>
- [Alibaba Cloud says it has robot sysadmins that swap faulty disks in four minutes](https://www.theregister.com/2020/11/12/alibaba_singles_day/){:target="_blank"} by Simon Sharwood: in preparation for this year's Double11, the inspection robots in AlibabaCloud ’s data centers have been upgraded to the third generation. The robots can complete an inspection & automatically replace any faulty hard disks in just 4 minutes.


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-15/aws-mq-rabbitmq.png" width="600"></p>
- [Announcing Amazon MQ for RabbitMQ](https://aws.amazon.com/blogs/aws/amazon-mq-update-new-rabbitmq-message-broker-service/){:target="_blank"} by Channy Yun: Amazon MQ now supports RabbitMQ, a popular open source message broker. This enables you to migrate your existing RabbitMQ message brokers to AWS without having to rewrite code. Amazon MQ for RabbitMQ manages both individual and clustered message brokers and handles tasks like provisioning the infrastructure, setting up the broker, and updating the software.

- [AWS Lambda now supports Amazon MQ for Apache ActiveMQ as an event source](https://aws.amazon.com/about-aws/whats-new/2020/11/aws-lambda-supports-amazon-mq-apache-activemq-event-source/){:target="_blank"}

- [Introducing MongoDB 4.0 compatibility and Transactions in Amazon DocumentDB](https://aws.amazon.com/blogs/database/introducing-amazon-documentdb-with-mongodb-compatibility-4-0/){:target="_blank"} by Joseph Idziorek: with this launch, you can now use atomic, consistent, isolated, and durable (ACID) transactions, open a change stream cursor for a database or cluster, and much more.

- [CloudFormation adds support for arbitrary bash commands](https://aws.amazon.com/blogs/mt/running-bash-commands-in-aws-cloudformation-templates/){:target="_blank"} by Craig Lefkowitz and Shantanu Gupta: oftentimes we find customers who want to extend their AWS CloudFormation templates by running a few lines of code during template execution. For example, to call an external API. In these cases, customers were directed to use either custom resources, resource types, or macros to accomplish the task. This is such a common pattern that we decided to write the CommandRunner resource type that helped customers to quickly develop bash scripts that run during the execution of AWS CloudFormation templates.

- [Advice for customers dealing with Docker Hub rate limits, and a Coming Soon announcement](https://aws.amazon.com/blogs/containers/advice-for-customers-dealing-with-docker-hub-rate-limits-and-a-coming-soon-announcement/){:target="_blank"} by Omar Paul & Michael Hausenblas: with the introduction of Docker Hub's new rate limits, our customers should expect some of their applications and tools that use public images from Docker Hub to face throttling errors, such as when they build from a parent public image or pull a public image to run. Many of our customers have expressed concern about possible impact, so we are sharing some practical advice for managing Docker Hub’s rate limits, and announcing an upcoming AWS solution.

- [Amazon S3 Intelligent-Tiering adds Archive Access Tiers ](https://aws.amazon.com/about-aws/whats-new/2020/11/amazon-s3-intelligent-tiering-adds-archive-access-tiers/){:target="_blank"}: Amazon S3 Intelligent-Tiering now supports automatic data archiving to further reduce storage costs by up to 95% when objects become rarely accessed over long periods of time.

- [Amazon CloudWatch launches Metrics Explorer](https://aws.amazon.com/about-aws/whats-new/2020/11/amazon-cloudwatch-launches-metrics-explorer/){:target="_blank"}: Amazon CloudWatch launches Metrics Explorer – a tag-based dashboard tool that enables customers to filter, aggregate, and visualize operational health and performance metrics by tags.


## GCP 

- [Cloud SQL now supports PostgreSQL 13](https://cloud.google.com/blog/products/databases/cloud-sql-database-service-adds-postgresql-13){:target="_blank"} by Maayan Rossmann: with PostgreSQL 13 available shortly after its community GA, you get access to the latest features of PostgreSQL while letting Cloud SQL handle the heavy operational lifting. PostgreSQL 13 introduces performance improvements across the board, including enhanced partitioning capabilities, increased index and vacuum efficiency and better extended monitoring.


*Article version: 1.0.0*

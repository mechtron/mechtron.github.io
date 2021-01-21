---
layout: post
title: "DevOps Industry Updates #18"
---

It's been a busy couple of weeks in DevOps Land! Elastic announced that Elasticsearch and Kibana will be dropping the Apache v2 license, HashiCorp unveiled CDK for Terraform 0.1 (which adds Java and C# support) and LinkedIn showed us just how insane their developer tool metrics are. Great news for you: it's all right here in issue #18 of DevOps Industry Updates:

## 🔥 Top Cream

This issue's top 4 stories:

1. [What I’ve Learned in 45 Years in the Software Industry](https://www.bti360.com/what-ive-learned-in-45-years-in-the-software-industry/){:target="_blank"}
1. [Maximizing Developer Effectiveness](https://martinfowler.com/articles/developer-effectiveness.html){:target="_blank"}
1. [How LinkedIn turned to real-time feedback for developer tooling](https://engineering.linkedin.com/blog/2021/real-time-feedback-for-developer-tooling){:target="_blank"}
1. [Elasticsearch and Kibana are now business risks](https://anonymoushash.vmbrasseur.com/2021/01/14/elasticsearch-and-kibana-are-now-business-risks){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-18/zoom-leak.jpg" width="600"></p>
- [What you should know before leaking a Zoom meeting](https://theintercept.com/2021/01/18/leak-zoom-meeting/){:target="_blank"}: at least one leaker has already been exposed. Here’s how to protect yourself or your sources.

- [Why the Canadian Tech Scene Doesn’t Work](https://alexdanco.com/2021/01/11/why-the-canadian-tech-scene-doesnt-work/){:target="_blank"}

- [Context switching costs more than we give it credit for](https://thinkingthrough.substack.com/p/context-switching-cost-more-than){:target="_blank"}: batching things by function can skyrocket your productivity

- [How To Become a Data Engineer](https://khashtamov.com/en/how-to-become-a-data-engineer/){:target="_blank"}: thinking about expanding your horizons into the world of big data? Check this article out!

<p align="center"><img src="{{ site.url }}/images/diu-18/net-neutrality.jpg" width="600"></p>
- [Georgia's runoff may have saved net neutrality](https://www.theverge.com/2021/1/6/22216843/georgia-runoff-net-neutrality-fcc-jon-ossoff-raphael-warnock-democrats-senate){:target="_blank"}: throttling could be much harder under a Democratic Senate


## 📟 DevOps 

- [Load testing is hard, and the tools are... not great. But why?](https://ntietz.com/tech-blog/load-testing-is-hard-but-why/){:target="_blank"}

- [Docker Compose: a nice way to set up a dev environment](https://jvns.ca/blog/2021/01/04/docker-compose-is-nice/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-18/dev-tool-feedback.svg" width="600"></p>
- [How LinkedIn turned to real-time feedback for developer tooling](https://engineering.linkedin.com/blog/2021/real-time-feedback-for-developer-tooling){:target="_blank"}: over the last year, LinkedIn has been using real-time feedback to evolve their tooling and provide a more productive experience for their developers. It’s helped them double feedback participation, and more importantly, better tailor their recommendations and tooling improvements.

- [Announcing CDK for Terraform 0.1](https://www.hashicorp.com/blog/announcing-cdk-for-terraform-0-1){:target="_blank"}: CDK for Terraform now supports Java and C# and has new collaboration features on Terraform Cloud.

- [Elasticsearch and Kibana are now business risks](https://anonymoushash.vmbrasseur.com/2021/01/14/elasticsearch-and-kibana-are-now-business-risks){:target="_blank"}: Elastic announced that they are changing the license of both Elasticsearch and Kibana from the open source Apache v2 license to the much more restrictive Server Side Public License.

- [Awesome limits](https://github.com/lorin/awesome-limits){:target="_blank"}: everything has limits, including software systems. When you hit these limits, bad things can happen.


## 🛠️ DevOps Tools 

- [hasura/graphqurl](https://github.com/hasura/graphqurl){:target="_blank"}: `curl` for GraphQL with autocomplete

- [My ISP Is Killing My Idle SSH Sessions](https://anderstrier.dk/2021/01/11/my-isp-is-killing-my-idle-ssh-sessions-yours-might-be-too/){:target="_blank"}: is your ISP's CGNAT session timeout too short, causing TCP keepalives to get dropped? A great read that includes [a tool](https://github.com/AndersTrier/NAT-TCP-test) to see if your own NAT, or your ISP’s CGN, suffers from this issue too.

- [`psql` command line tutorial and cheat sheet](https://tomcam.github.io/postgres/){:target="_blank"}: both a brief tutorial and a quick reference for the absolute least you need to know about `psql`.

<p align="center"><img src="{{ site.url }}/images/diu-18/gping.gif" width="600"></p>
- [`gping`](https://github.com/orf/gping){:target="_blank"}: `ping`, but with a graph.

- [lyft/clutch](https://github.com/lyft/clutch){:target="_blank"}: an extensible platform for infrastructure management, Clutch provides everything you need to simplify operations and in turn improve your developer experience and operational capabilities

<p align="center"><img src="{{ site.url }}/images/diu-18/chisel.png" width="600"></p>
- [jpillora/chisel](https://github.com/jpillora/chisel){:target="_blank"}: a fast TCP/UDP tunnel over HTTP


## ☸️ Kubernetes 

- [Red Hat to Acquire Kubernetes-Native Security Leader StackRox](https://www.redhat.com/en/about/press-releases/red-hat-acquire-kubernetes-native-security-leader-stackrox){:target="_blank"}: with StackRox, Red Hat strengthens customers’ ability to build, deploy and run applications more securely across the open hybrid cloud

<p align="center"><img src="{{ site.url }}/images/diu-18/k8s-images.png" width="600"></p>
- [Kubernetes image policy webhook explained](https://itnext.io/kubernetes-image-policy-webhook-explained-ac1063d3ea97){:target="_blank"}


## 🔐 Security 

- [The Great iPwn](https://citizenlab.ca/2020/12/the-great-ipwn-journalists-hacked-with-suspected-nso-group-imessage-zero-click-exploit/){:target="_blank"}: journalists hacked with suspected NSO group iMessage ‘Zero-Click’ exploit


## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-18/ruby-3.jpg" width="600"></p>
- [Ruby 3, concurrency and the ecosystem](https://kirshatrov.com/2021/01/06/ruby-concurrency-and-ecosystem/){:target="_blank"}: with the Ruby 3.0 release, there’s been a lot of chatter about concurrency, parallelism, and async IO.

- [Top Developer Trends for 2021](https://www.docker.com/blog/top-developer-trends-for-2021/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-18/rust-2021.png" width="500"></p>
- [Rust 2021 Roadmap](https://github.com/rust-lang/rfcs/blob/5211f1d86b419e7e65febf67917ca55d7d3ceb5d/text/0000-roadmap-2021.md){:target="_blank"}

- [Rust is a hard way to make a web API](https://macwright.com/2021/01/15/rust.html){:target="_blank"}


## 🐧 Linux 

- [How to use whiptail to create more user-friendly interactive scripts](https://www.redhat.com/sysadmin/use-whiptail){:target="_blank"}: do you script in bash? If so, you can provide your users with a more robust and simple TUI for entering information into scripts.


## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-18/wrt54g.jpg" width="450"></p>
- [WRT54G: The Router That Accidentally Went Open Source](https://tedium.co/2021/01/13/linksys-wrt54g-router-history/){:target="_blank"}: how Linksys’ most famous router, the WRT54G, tripped into legendary status because of an undocumented feature that slipped through during a merger.


## 🚢 Leadership 

- [What I’ve Learned in 45 Years in the Software Industry](https://www.bti360.com/what-ive-learned-in-45-years-in-the-software-industry/){:target="_blank"}

- [Algorithms for Decision Making](https://algorithmsbook.com/){:target="_blank"}: this book provides a broad introduction to algorithms for decision making under uncertainty. It covers a wide variety of topics related to decision making, introducing the underlying mathematical problem formulations and the algorithms for solving them.

- [Maximizing Developer Effectiveness](https://martinfowler.com/articles/developer-effectiveness.html){:target="_blank"}: examines how some organizations have used feedback loops to improve overall effectiveness and productivity, including micro-feedback loops that developers do 200 times a day.


## ☁️ Cloud 

- [A Distributed Systems Reading List](https://dancres.github.io/Pages/){:target="_blank"}: "I often argue that the toughest thing about distributed systems is changing the way you think. The below is a collection of material I've found useful for motivating these changes." Enough said!

<p align="center"><img src="{{ site.url }}/images/diu-18/juicefs-logo.png" width="400"></p>
- [JuiceFS](https://github.com/juicedata/juicefs){:target="_blank"}: a distributed POSIX file system built on top of Redis and S3

- [Are B2B cloud service agreements safe?](https://cloudpundit.com/2021/01/13/are-b2b-cloud-service-agreements-safe/){:target="_blank"}: "you don’t have to be a “bad guy” to occasionally run afoul of the policies. But if your business is permanently unwilling or unable to comply with a particular provider’s policies, you cannot use that provider."


## AWS 

- [How AWS is helping to secure internet routing](https://aws.amazon.com/blogs/networking-and-content-delivery/how-aws-is-helping-to-secure-internet-routing/){:target="_blank"}: to help put an end to BGP hijacking, AWS has been working closely with other industry leaders to make an industry-wide standard practice the use of Resource Public Key Infrastructure (RPKI) to digitally sign route announcements.

- [Cheap, Durable, Fast. How to choose an EBS volume type?](https://cloudonaut.io/cheap-durable-fast-how-to-choose-an-ebs-volume-type/){:target="_blank"}: this post compares gp2, gp3, and io2 volumes and explains how to choose the volume type that best fits certain scenarios.

- [Amazon ECS vs. Amazon EKS: The Ultimate Showdown](https://thenewstack.io/amazon-ecs-vs-amazon-eks-the-ultimate-showdown/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-18/covid-alert.jpg" width="600"></p>
- [Canada's Exposure Notification runs on AWS infrastructure](https://aws.amazon.com/blogs/publicsector/keeping-canadians-safe-protecting-privacy-covid-alert-app/){:target="_blank"}

- [Looking back on four years at AWS as a developer advocate](https://nathanpeck.com/looking-back-on-four-years-at-aws-as-developer-advocate/){:target="_blank"}

- [Amazon SQS announces tiered pricing](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-sqs-announces-tiered-pricing/){:target="_blank"}: customers using more than 500 billion requests a month could save 29% on their monthly Amazon SQS bill compared to the previous flat pricing.

- [Amazon API Gateway now supports data mapping in HTTP APIs](https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-api-gateway-supports-data-mapping-http-apis/){:target="_blank"}


*Article version: 1.0.0*

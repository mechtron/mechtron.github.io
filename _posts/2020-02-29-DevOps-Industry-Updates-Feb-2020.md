---
layout: post
title: "DevOps Industry Updates: February 2020"
---

It's only been a month but we have so many exciting updates to cover:

## DevOps

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/coreos.svg" width="400"></p>
- [Say Goodbye to CoreOS](https://thenewstack.io/say-goodbye-to-coreos/){:target="_blank"} by Jack Wallen: mark May 26, 2020 on your calendar, as that is the day this Linux distribution will reach its end of life and will no longer receive updates.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/metrics.jpeg" width="600"></p>
- [Creating cron job vitals with Prometheus Pushgateway](https://deezer.io/creating-cron-job-vitals-with-prometheus-pushgateway-7111d0c4658e){:target="_blank"} by Laura Roudge: how to monitor ephemeral tasks.

- [Docker Images : Part I - Reducing Image Size](https://www.ardanlabs.com/blog/2020/02/docker-images-part1-reducing-image-size.html){:target="_blank"} by Jérôme Petazzoni: review a number of techniques to reduce image size, without sacrificing developers’ and ops’ convenience.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/etherlink.jpeg" width="500"></p>
- [How 1500 bytes became the MTU of the internet](https://blog.benjojo.co.uk/post/why-is-ethernet-mtu-1500){:target="_blank"} by Dmitry Nosachev: Ethernet is everywhere, tens of thousands of hardware vendors speak and implement it. However almost every ethernet link has one number in common: the MTU.

## Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/k8s-cpu-request.png" width="700"></p>
- [CPU limits and aggressive throttling in Kubernetes](https://medium.com/omio-engineering/cpu-limits-and-aggressive-throttling-in-kubernetes-c5b20bd8a718){:target="_blank"} by Fayiz Musthafa: have you seen your application get stuck or fail to respond to health check requests, and you can’t find any explanation? It might be because of the CPU quota limit.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/k8s-connections.svg" width="600"></p>
- [Load balancing and scaling long-lived connections in Kubernetes](https://learnk8s.io/kubernetes-long-lived-connections){:target="_blank"} by Daniele Polencic: Kubernetes doesn't load balance long-lived connections, and some Pods might receive more requests than others. If you're using long-lived connections such as a database connection, you might want to consider client-side load balancing.

- [Helm 3 in real life](https://itnext.io/helm-3-in-real-life-dfdc1522dd04){:target="_blank"} by Dawid Ziolkowski: some issues you will face when using Helm 3.

- [Kubernetes in production: Five challenges you’re likely to face and how to approach them](https://medium.com/faun/kubernetes-in-production-five-challenges-youre-likely-to-face-and-how-to-approach-them-99a601e9d762){:target="_blank"} by Team Hyscale: discusses the challenges you are likely to face using Kubernetes across different environments.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/jenkins-x-tekton.png" width="500"></p>
- [K8s-native Jenkins-X and Tekton Pipelines](https://itnext.io/k8s-native-jenkins-x-and-tekton-pipelines-e2b5a61a1d22){:target="_blank"} by Kim Wuestkamp: what is Jenkins X, is it the future of CI/CD and can it live up to Jenkins?

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/k8s-vault.png" width="500"></p>
- [Hitchhiker’s Guide to HashiCorp Vault in Kubernetes
Part 1: System integration](https://blog.picnic.nl/hitchhikers-guide-to-hashicorp-vault-in-kubernetes-part-1-system-integration-ce17800049da){:target="_blank"} by Anh Dat: a practical guide to the concepts, implementation details and best practices to get Vault up and running in Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/nola.jpg" width="600"></p>
- [Deploying Orleans to Kubernetes](https://blog.ulriksen.net/deploying-orleans-to-kubernetes/){:target="_blank"} by Harald Ulriksen: An overview of how we do continuous delivery of a stateful system based on the actor model

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/desired-state-cap-theorem-triangle.png" width="500"></p>
- [Desired State versus Actual State in Distributed Systems](https://downey.io/blog/desired-state-vs-actual-state-in-kubernetes/){:target="_blank"} by Tim Downey: eventual consistency in Kubernetes and the real world

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/reddit.jpg" width="400"></p>
- Reddit thread: [What is your favorite Kubernetes feature that nobody seems to know about?](https://www.reddit.com/r/kubernetes/comments/f9fque/what_is_your_favorite_kubernetes_feature_that/){:target="_blank"}: a good conversation with some lesser-known but still very useful `kubectl` commands.

## Architecture

- [Scaling to 100k Users](https://alexpareto.com/scalability/systems/2020/02/03/scaling-100k.html){:target="_blank"} by Alex Pareto: how we scaled our new photo sharing website, Graminsta, from 1 to 100k users.

- [The Serverless Supremacy](https://blog.webiny.com/the-serverless-supremacy-204fbf5add75){:target="_blank"} by Sven Al Hamad: the Fall of the Monolith.

## Security

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/paypal.jpg" width="600"></p>
- [We found 6 critical PayPal vulnerabilities – and PayPal punished us for it](https://cybernews.com/security/we-found-6-critical-paypal-vulnerabilities-and-paypal-punished-us/){:target="_blank"} by Bernard Meyer: "When our analysts discovered six vulnerabilities in PayPal, we were met with non-stop delays, unresponsive staff, and lack of appreciation."

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/ms-teams-down.png" width="600"></p>
- [Microsoft’s failures to renew: Teams, Hotmail, and Hotmail.co.uk](https://arstechnica.com/gadgets/2020/02/yesterdays-multi-hour-teams-outage-was-due-to-an-expired-ssl-certificate/){:target="_blank"} by Jim Salter: SSL certificates aren't optional anymore - no cert, no authentication, no service.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/citrix-hacked.jpg" width="500"></p>
- [Hackers Were Inside Citrix for Five Months](https://krebsonsecurity.com/2020/02/hackers-were-inside-citrix-for-five-months/){:target="_blank"} by Brian Krebs: Citrix Systems says malicious hackers were inside its networks for five months between 2018 and 2019, making off with personal and financial data on company employees, contractors, interns, job candidates and their dependents.

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/corpcomtoxic.png" width="400"></p>
- [Dangerous Domain Corp.com Goes Up for Sale](https://krebsonsecurity.com/2020/02/dangerous-domain-corp-com-goes-up-for-sale/){:target="_blank"} by Brian Krebs: facing 70 and seeking to simplify his estate, Mike O’Connor is finally selling `corp.com`.

## Amazon Web Services

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/aws.png" width="400"></p>

#### New products

- [Desktop Client for AWS Client VPN](https://aws.amazon.com/about-aws/whats-new/2020/02/introducing-the-desktop-client-for-aws-client-vpn/){:target="_blank"}: an application which runs on Mac and Windows devices and provides access to Amazon Virtual Private Cloud (VPC) and on premise networks through AWS Client VPN endpoints.

#### New features

- [Amazon EC2 Auto Scaling Now Supports Enabling and Disabling Scaling Policies](https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-ec2-auto-scaling-now-supports-enabling-and-disabling-scaling-policies/){:target="_blank"}: Amazon EC2 Auto Scaling now lets you enable and disable target tracking, step, and simple scaling policies.

- [ECS adds support for canary deployments](https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-elastic-container-service-support-canary-deployments/){:target="_blank"}: updates to your containers orchestrated by Amazon Elastic Container Service (ECS) can now be performed using canary or linear deployment strategies by using AWS CodeDeploy.

- [Amazon RDS Performance Insights Supports SQL-level Metrics](https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-rds-performance-insights-supports-sql-level-metrics-on-amazon-rds-for-mysql/){:target="_blank"}: supports SQL-level metrics on Amazon RDS for MySQL databases so you can identify high-frequency, long-running, and stuck SQL queries in seconds.

- [Elasticsearch Service adds fine-grained data access controls](https://aws.amazon.com/about-aws/whats-new/2020/02/configure-fine-grained-data-access-with-amazon-elasticsearch-service/){:target="_blank"}: use roles to define granular permissions for indices, documents, or fields and to extend Kibana with read-only views and secure multi-tenant support.

#### Articles

- [How we use Kubernetes and spot instances to reduce EC2 billing up to 80%](https://tuananh.net/2020/02/20/the-story-behind-my-talk-cloud-cost-optimization-at-scale/){:target="_blank"} by Tuan Anh: the story behind my talk "Cloud Cost Optimization at Scale".

## Programming

<p align="center"><img src="{{ site.url }}/images/diu-feb-2020/rust.png" width="300"></p>
- [Why Discord is switching from Go to Rust](https://blog.discordapp.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f){:target="_blank"} by Jesse Howarth: explains why it made sense for us to reimplement a service from Go to Rust, how it was done, and the resulting performance improvements.

- [Reflections on software performance](https://blog.nelhage.com/post/reflections-on-performance/){:target="_blank"} by Nelson Elhage: in this post, Nelson reflects on some of the lessons he learned while writing performant and not-so-performant software.

- [Git Rebase Explained and (eventually) Illustrated](https://dev.to/joemsak/git-rebase-explained-and-eventually-illustrated-5hlb){:target="_blank"} by Joe Sak: how Git rebase works for a typical development scenario and tips for making your rebase life easier.

- [Top 25 most recommended programming books of all-time](https://threadreaderapp.com/thread/1229731043332231169.html){:target="_blank"} by Pierre de Wulf: compiled and analyzed articles from Google search results for queries like "Best programming books" and many of its variations.

- [Under Discussion: The Maintenance of Large Open-Source Projects](https://www.welcometothejungle.com/en/articles/btc-discussion-open-source-maintenance){:target="_blank"} by Anne-Laure Civeyrac: while attending dotJS Behind the Code, former Node.js core team members sit down and outline what it takes to maintain large open-source projects.

## Business

- [Debt is Coming](https://alexdanco.com/2020/02/07/debt-is-coming/){:target="_blank"} by Alex Danco: Ten years from now, what seismic change will we reflect back on and think, “well that was pretty obvious, in retrospect”?

*Article version: 1.0.0*
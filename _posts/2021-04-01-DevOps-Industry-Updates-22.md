---
layout: post
title: "DevOps Industry Updates #22"
---

Welcome back! The world echoed a sigh of relief this week as the Suez Canal was finally unblocked, which I can only imagine feels like purging a thousand message queues at once. With that crisis over, we move on to the next - whether it be upgrading to [Kubernetes 1.21](https://sysdig.com/blog/whats-new-kubernetes-1-21/){:target="_blank"} (yay pod affinities) or [patching your git packages](https://www.openwall.com/lists/oss-security/2021/03/09/3){:target="_blank"} against remote code execution. We have those worries and more - they're all right here in DevOps Industry Updates #22:

## 🔥 Top Cream

This issue's top 5 stories:

1. [What’s new in Kubernetes 1.21?](https://sysdig.com/blog/whats-new-kubernetes-1-21/){:target="_blank"}
1. [Balancing act: the current limits of AWS network load balancers](https://ably.com/blog/limits-aws-network-load-balancers){:target="_blank"}
1. [Introducing Amazon S3 Object Lambda](https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/){:target="_blank"}
1. [The actual OSI model](https://computer.rip/2021-03-27-the-actual-osi-model.html){:target="_blank"}
1. [REST vs. GraphQL vs. gRPC](https://www.danhacks.com/software/grpc-rest-graphql.html){:target="_blank"}

## 🌎 Society 

- [Moving from the US to India - My Story](https://www.linkedin.com/pulse/moving-from-us-india-my-story-karan-desai){:target="_blank"}: an AWS SA moved from New York to India and wrote a fascinating post on the experience.

<p align="center"><img src="{{ site.url }}/images/diu-22/digitalocean-ipo.jpg" width="600"></p>
- [DigitalOcean becomes a public company](https://www.digitalocean.com/blog/digitalocean-becomes-a-public-company/){:target="_blank"}: DigitalOcean is officially listed on the New York Stock Exchange as a publicly traded company (NYSE: DOCN).

- [Things your manager might not know](https://jvns.ca/blog/things-your-manager-might-not-know/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-22/remote-work.jpg" width="600"></p>
- [What Remote Work Really Does To Your Engineering Productivity](https://www.okayhq.com/blog/what-remote-work-really-does-to-your-engineering-productivity){:target="_blank"}


## 📟 DevOps 

- [Running Atlantis at Lyft](https://eng.lyft.com/running-atlantis-at-lyft-b95c7fa51db1){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-22/kubernetes-elmo.jpg" width="600"></p>
- [Why you should take a look at Nomad before jumping on Kubernetes](https://atodorov.me/2021/02/27/why-you-should-take-a-look-at-nomad-before-jumping-on-kubernetes/){:target="_blank"}: overall, Nomad is a pretty great, simple, opinionated and flexible orchestrator.

- [A First Glimpse of a Kafka Without ZooKeeper](https://www.confluent.io/blog/kafka-without-zookeeper-a-sneak-peek/){:target="_blank"}: we call this the Kafka Raft Metadata mode. If you opt to run Kafka using the new quorum controller, all metadata responsibilities previously undertaken by the Kafka controller and ZooKeeper are merged into this one new service, running inside the Kafka cluster itself.

<p align="center"><img src="{{ site.url }}/images/diu-22/sockets-by-region.png" width="600"></p>
- [Migrating Millions of Concurrent Websockets to Envoy](https://slack.engineering/migrating-millions-of-concurrent-websockets-to-envoy/){:target="_blank"}: for much of Slack’s history, we’ve used HAProxy as a load balancer for all incoming traffic. Today, we’ll talk about problems we faced with HAProxy, how we solved them with Envoy Proxy, the steps involved in the migration, and what the outcome was.


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-22/kubie.svg" width="200"></p>
- [sbstp/kubie](https://github.com/sbstp/kubie){:target="_blank"}: a more powerful alternative to kubectx and kubens

- [Great SaaS Demos Enabled by DevOps Tools ](https://releasehub.com/blog/great-saas-sales-demos){:target="_blank"}

- [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html){:target="_blank"}

- [How to Deal with Difficult People on Software Projects](https://www.howtodeal.dev){:target="_blank"}


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-22/kubernetes-1.21.png" width="600"></p>
- [What’s new in Kubernetes 1.21?](https://sysdig.com/blog/whats-new-kubernetes-1-21/){:target="_blank"}: this release brings 50 enhancements, including a new memory manager, pod affinity selector and ReplicaSet downscaling. It also deprecates Pod Security Policies.

- [Moving k8s communication to gRPC](https://blog.cloudflare.com/moving-k8s-communication-to-grpc/){:target="_blank"}

- [Flux GitOps program becomes a CNCF incubator program](https://www.zdnet.com/article/flux-gitops-program-becomes-a-cncf-incubator-program/){:target="_blank"}: Flux, the Kubernetes-based Continuous Delivery (CD) program, continues to mature.

<p align="center"><img src="{{ site.url }}/images/diu-22/kubernetes-comic.png" width="600"></p>
- [Smooth sailing with Kubernetes](https://cloud.google.com/kubernetes-engine/kubernetes-comic){:target="_blank"}: learn about Kubernetes and how you can use it for continuous integration and delivery.


## 🔐 Security 

- [Hackers are exploiting a F5 vulnerability](https://arstechnica.com/gadgets/2021/03/to-security-pros-dread-another-critical-server-vulnerability-is-under-exploit/){:target="_blank"}: F5's BIG IP appliances have a 9.8 severity vulnerability that is now actively being exploited according to researchers at NCC Group. Have you waited to patch?

- [TLS 1.0 and 1.1 are officially deprecated](https://datatracker.ietf.org/doc/rfc8996/){:target="_blank"}: these versions lack support for current and recommended cryptographic algorithms and mechanisms.

- [A new type of supply-chain attack is flourishing](https://arstechnica.com/gadgets/2021/03/more-top-tier-companies-targeted-by-new-type-of-potentially-serious-attack/){:target="_blank"} by New dependency confusion attacks take aim at Microsoft, Amazon, Slack, Lyft, and Zillow.


## 💻 Programming 

- [Get better at programming by learning how things work](https://jvns.ca/blog/learn-how-things-work/){:target="_blank"}: in this blog post, I want to talk about a different way to get better at programming: learning how the systems you’re using work! This is the main way I approach getting better at programming.

- [How we found and fixed a rare race condition in our session handling](https://github.blog/2021-03-18-how-we-found-and-fixed-a-rare-race-condition-in-our-session-handling/){:target="_blank"}: on March 8, we logged all users out of GitHub.com due to a rare security vulnerability. In this post we will share the technical details of this vulnerability and how it happened, what we did to respond to it, and the steps we are taking to ensure this does not happen again.


## 🐧 Linux 

- [Linus Torvalds on where Rust will fit into Linux](https://www.zdnet.com/article/linus-torvalds-on-where-rust-will-fit-into-linux/){:target="_blank"}: slowly but surely the Rust language is making its way into Linux.

<p align="center"><img src="{{ site.url }}/images/diu-22/tuxturns30.png" width="400"></p>
- [Linux is 30 years old](https://linuxfoundation.org/linux30th/){:target="_blank"}

- [The actual OSI model](https://computer.rip/2021-03-27-the-actual-osi-model.html){:target="_blank"}: the OSI model is not some "ideal" model of networking, it is not a "gold standard" or even a "useful reference." It's the architecture of a specific network stack that failed to gain significant real-world adoption.

- [Why I use exa instead of ls on Linux](https://opensource.com/article/21/3/replace-ls-exa){:target="_blank"}: `exa` is a modern-day replacement for the Linux `ls` command.


## 🚢 Leadership 

- [How to Measure Burnout Accurately and Ethically](https://hbr.org/2021/03/how-to-measure-burnout-accurately-and-ethically){:target="_blank"}


## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-22/aws-2008.jpg" width="600"></p>
- [How Amazon’s S3 jumpstarted the cloud revolution](https://www.protocol.com/enterprise/amazon-aws-s3-15-years){:target="_blank"}: Amazon's first real web service brought us everything from Pinterest to coronavirus vaccines. Fifteen years later, insiders tell Protocol how it grew to store more than 100 trillion objects.

- [REST vs. GraphQL vs. gRPC](https://www.danhacks.com/software/grpc-rest-graphql.html){:target="_blank"}: REST, GraphQL, and gRPC are 3 popular forms of client-server and server-to-server communication. Choosing can be difficult, and this concise guide can help.


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-22/ably-load-balancing.png" width="600"></p>
- [Balancing act: the current limits of AWS network load balancers](https://ably.com/blog/limits-aws-network-load-balancers){:target="_blank"}: "in our experience anything over 200,000 connections per NLB begins to be a challenge.  This is unfortunately substantially below the advertised understanding of what the load balancers can currently do."

- [Amazon EKS reduces control plane creation time for EKS clusters by 40%](https://aws.amazon.com/about-aws/whats-new/2021/03/amazon-eks-reduces-cluster-creation-time-40-percent/){:target="_blank"}: enabling you to create a new EKS cluster control plane in 9 minutes or less, on average.

<p align="center"><img src="{{ site.url }}/images/diu-22/s3-object-lambda-architecture.png" width="600"></p>
- [Introducing Amazon S3 Object Lambda](https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/){:target="_blank"}: use your code to process data as it is being retrieved from S3.

- [Amazon S3 Glacier Price Reduction](https://aws.amazon.com/blogs/aws/amazon-s3-glacier-price-reduction/){:target="_blank"}: effective March 1, 2021, AWS is lowering the cost for PUT and Lifecycle requests to S3 Glacier by 40%.

- [AWS AZs: Not all are Equal](https://wolfman.dev/posts/exclude-use1-az3/){:target="_blank"}

<p align="center"><img src="{{ site.url }}/images/diu-22/aws-openshit.jpg" width="600"></p>
- [Red Hat OpenShift Service on AWS Now GA](https://aws.amazon.com/blogs/aws/red-hat-openshift-service-on-aws-now-generally-availably/){:target="_blank"}

- [Amazon VPC Flow Logs now reflects AWS Service name, Traffic Path and Flow Direction](https://aws.amazon.com/about-aws/whats-new/2021/03/amazon-vpc-flow-logs-now-reflects-aws-service-name-traffic-path-and-flow-direction/){:target="_blank"}



*Article version: 1.0.0*

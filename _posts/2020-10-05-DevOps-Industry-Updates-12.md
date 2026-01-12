---
layout: post
title: "DevOps Industry Updates #12"
permalink: /devops-industry-updates-12/
---

Kubernetes adds structured logs, GCP introduces an ordered message queue (woot) and HashiCorp releases an official Homebrew Tap. The world of DevOps continues to deliver! It has barely been 10 days since the last issue, and we have many new developments to cover:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Kubernetes Introduces Structured Logs](https://kubernetes.io/blog/2020/09/04/kubernetes-1-19-introducing-structured-logs/){:target="_blank"}
1. [HashiCorp’s New Homebrew Tap](https://www.hashicorp.com/blog/announcing-hashicorp-homebrew-tap){:target="_blank"}
1. [Google Cloud Pub/Sub released an ordering feature ](https://cloud.google.com/pubsub/docs/ordering){:target="_blank"}
1. [Use Terraform to Create and Manage a HA AKS Kubernetes Cluster in Azure](https://codersociety.com/blog/articles/terraform-azure-kubernetes){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-12/chicken-fox-faces.jpg" width="600"></p>
- [To Succeed in a Negotiation, Help Your Counterpart Save Face](https://hbr.org/2020/10/to-succeed-in-a-negotiation-help-your-counterpart-save-face){:target="_blank"} by Joshua N. Weiss: as we dig deeper into high-stakes negotiations, there is a common thread that connects them all: the concept of face.


## 📟 DevOps 

- [Amazon ECR vs. Docker Hub vs. GitHub Container Registry](https://cloudonaut.io/amazon-ecr-vs-docker-hub-vs-github-container-registry/){:target="_blank"} by Andreas Wittig: a container registry is a crucial aspect of a containerized workflow and infrastructure. This blog post compares three different container registries: Amazon ECR, Docker Hub, and GitHub Container Registry.

<p align="center"><img src="{{ site.url }}/images/diu-12/traefik-2-3.jpg" width="600"></p>
- [Houston, we have Plugins! Traefik 2.3](https://traefik.io/blog/houston-we-have-plugins-traefik-2-3-announcement/){:target="_blank"} by Manuel Zapf: Traefik 2.3 brings in new capabilities, including the Traefik Plugin system, integration with Traefik Pilot, support for Amazon ECS, and support for the Kubernetes IngressClass API resource launched in Kubernetes 1.18.

- [Rebuilding Linkerd's CI with Kubernetes in Docker (kind) and GitHub Actions](https://buoyant.io/2020/09/16/linkerds-ci-kubernetes-in-docker-github-actions/){:target="_blank"} by Andrew Seigner: in mid-2019, the Linkerd project’s continuous integration (CI) took 45 minutes, all tests were serialized on a single Kubernetes cluster, and multi-hour backups were common. A migration onto one-off Kubernetes in Docker (kind) clusters and GitHub Actions got CI below 10 minutes, and made it parallelizable.


## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-12/homebrew-tap.png" width="600"></p>
- [HashiCorp’s New Homebrew Tap](https://www.hashicorp.com/blog/announcing-hashicorp-homebrew-tap){:target="_blank"} by Chloe Cota: get Terraform, Packer, Vault, Consul, and Nomad up and running even faster on macOS with HashiCorp's new official Homebrew Tap.

- [duo-labs/cloudmapper](https://github.com/duo-labs/cloudmapper){:target="_blank"}: CloudMapper helps you analyze your Amazon Web Services (AWS) environments. The original purpose was to generate network diagrams and display them in your browser. It now contains much more functionality, including auditing for security issues.


## ☸️ Kubernetes 

- [Resilient Kubernetes Deployments with Readiness Probes](https://rotemtam.com/2020/09/24/kubernetes-readiness-probes/){:target="_blank"} by Rotem Tamir: today I want to discuss one feature in the Kubernetes API which I have found to be particularly important to make our applications more resilient in production: readiness probes.

<p align="center"><img src="{{ site.url }}/images/diu-12/github-flux-kubernetes.png" width="600"></p>
- [Apache Kafka DevOps with Kubernetes and GitOps](https://www.confluent.io/blog/kafka-devops-with-confluent-kubernetes-and-gitops/){:target="_blank"} by Rick Spurgeon: operating critical Apache Kafka event streaming applications in production requires sound automation and engineering practices. Streaming applications are often at the center of your transaction processing and data systems, requiring them to be accurate and highly available. To do just that that, this blog post weaves together Kubernetes, GitOps, and Confluent Cloud.

<p align="center"><img src="{{ site.url }}/images/diu-12/ha-aks-kubernetes.png" width="600"></p>
- [Use Terraform to Create and Manage a HA AKS Kubernetes Cluster in Azure](https://codersociety.com/blog/articles/terraform-azure-kubernetes){:target="_blank"} by Kentaro Wakayama: learn how to use Terraform to manage a highly-available Azure AKS Kubernetes cluster with Azure AD integration and Calico network policies enabled.

<p align="center"><img src="{{ site.url }}/images/diu-12/chaos-mesh.png" width="600"></p>
- [Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier](https://chaos-mesh.org/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier/){:target="_blank"}: after 10 months of effort within the open-source community, Chaos Mesh is now ready in terms of functionality, scalability, and ease of use. Highlights include powerful chaos support, a UI for visual chaos orchestration and a Grafana plug-in for enhanced observability.


## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-12/ssh-key-management.png" width="600"></p>
- [How to properly manage SSH keys for server access](https://www.paepper.com/blog/posts/how-to-properly-manage-ssh-keys-for-server-access/){:target="_blank"} by Marc Päpper: a nice overview of how to use certificate authorities for SSH authentication.

<p align="center"><img src="{{ site.url }}/images/diu-12/grindr-copy-paste.png" width="600"></p>
- [Hacking Grindr Accounts with Copy and Paste](https://www.troyhunt.com/hacking-grindr-accounts-with-copy-and-paste/){:target="_blank"} by Troy Hunt: a massive oversight that enabled complete account takeover using a very trivial attack (and Grindr's very delayed response).

<p align="center"><img src="{{ site.url }}/images/diu-12/microsoft.jpg" width="600"></p>
- [Microsoft leaks 6.5TB in Bing search data via unsecured Elastic server](https://www.theregister.com/2020/09/23/microsoft_leaks_over_65tb_bing/){:target="_blank"} by Tim Anderson: no personal info, but there are worries over deanonymization.


## 💻 Programming 

- [Big O, little n](https://adamzerner.bearblog.dev/big-o-little-n/){:target="_blank"} by Adam Zerner: this post explains why when you have a little n, big-O doesn't matter.

<p align="center"><img src="{{ site.url }}/images/diu-12/python-return-statement.jpg" width="600"></p>
- [The Python return Statement: Usage and Best Practices](https://realpython.com/python-return-statement/){:target="_blank"} by  Leodanis Pozo Ramos: using the `return` statement effectively is a core skill if you want to code custom functions that are Pythonic and robust. In this tutorial, you’ll learn how to use the Python `return` statement in your functions, how to return single or multiple values from your functions and general best practices.


## 📖 Machine Learning 

<p align="center"><img src="{{ site.url }}/images/diu-12/neural-nets.png" width="600"></p>
- [A Brief History of Neural Nets and Deep Learning](https://www.skynettoday.com/overviews/neural-net-history){:target="_blank"} by Andrey Kurenkov: the story of how neural nets evolved from the earliest days of AI to now.

## 🐧 Linux 

- [A beginner's guide to gawk](https://www.redhat.com/sysadmin/beginners-guide-gawk){:target="_blank"} by Ricardo Gerardi: the `gawk` command is a standard sysadmin tool. Learn to use it to extract information from files and your system and you'll never look cat to `cat | grep` again.

## ☁️ Cloud 

- [Scaling the Root of the DNS](https://www.potaroo.net/ispcol/2020-09/root.html){:target="_blank"} by Geoff Huston: DNS is simple in the same way that Chess or Go are simple. They are all constrained environments governed by a small set of rigid rules, but they all possess astonishing complexity when being scaled.

<p align="center"><img src="{{ site.url }}/images/diu-12/actual-aws-pipeline.jpg" width="600"></p>
- [AWS needs to step up its DevOps game](https://www.sentiatechblog.com/aws-needs-to-step-up-its-devops-game-and-a-few-other-takeaways-from-the-new){:target="_blank"} by Luc Van Donkersgoed: on September 1st, Gartner released the first edition of the Magic Quadrant for Cloud Infrastructure and Platform Services. This Magic Quadrant contained many interesting analyses, but one stood out to me - not in the least because I’ve experienced it firsthand. AWS needs to step up its DevOps game.


## AWS 

- [My mental model of AWS](https://cloudonaut.io/my-mental-model-of-aws/){:target="_blank"} by Michael Wittig: AWS is a complex system that no one can understand end-to-end? As AWS professionals we still have to deal with the AWS system daily. We design for AWS, and we debug our applications running in AWS. How can we deal with a system that is too complex to understand in detail? A good mental model can help us.

- [AVC Website](https://awsvideocatalog.com){:target="_blank"}: AWS Video Catalog is a website that collects all the official Amazon videos related to each individual AWS Service and categorizes them in a way that makes it easy to find what you are looking for. No more fighting YouTube search or relying on an algorithm to find what you are looking for.

- [Introducing AWS Perspective](https://aws.amazon.com/about-aws/whats-new/2020/09/introducing-aws-perspective/){:target="_blank"}: AWS Perspective is a new AWS Solutions Implementation that helps you build detailed architecture diagrams of your workloads from live data in your account, that you can customize and share.

- [Anomaly Detection and alerting now available in AWS Cost Management](https://aws.amazon.com/blogs/aws-cost-management/preview-anomaly-detection-and-alerting-now-available-in-aws-cost-management/){:target="_blank"}

- [Amazon CloudWatch Dashboards now supports sharing](https://aws.amazon.com/about-aws/whats-new/2020/09/amazon-cloudwatch-dashboards-supports-sharing/){:target="_blank"}

- [Amazon Elasticsearch Service now offers T3 Instances](https://aws.amazon.com/about-aws/whats-new/2020/09/amazon-elasticsearch-service-offers-t3-instances/){:target="_blank"}


## Azure 

<p align="center"><img src="{{ site.url }}/images/diu-12/spot-azure.png" width="600"></p>
- [Spot.io adds support for Azure Spot VMS](https://spot.io/blog/azure-spot-vms/){:target="_blank"} by Zev Schonberg: back in May Azure introduced a new pricing model, called Azure Spot VMs, which provide up to 90% in cost savings. However, Azure can take back these VMs with limited notice, making them a challenge to productionize. To remedy this, Spot has released a new version of Elastigroup that allows its users to run mission-critical workloads on Azure Spot VMs with enterprise-level SLAs.


## GCP 

- [Google Cloud pub/sub released an ordering feature ](https://cloud.google.com/pubsub/docs/ordering){:target="_blank"}: finally! If messages have the same ordering key and are in the same region, you can enable message ordering and receive the messages in the order that the Pub/Sub service receives them.


*Article version: 1.0.0*

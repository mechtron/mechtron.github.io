---
layout: post
title: "DevOps Industry Updates #14"
permalink: /devops-industry-updates-14/
---

Grab your concentrated cold brew, DevOps Industry Updates #14 is here! As always, I've been scouring the internet for the finest DevOps news which I then filter, brew and deliver right to your inbox. In this week's blend: re:Invent 2020 goes virtual, Microsoft expands Azure into space and if you're reading this, then DockerHub's new rate-limits are already in effect. Take a sip, sit back and enjoy the scroll:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Docker extends deadline for inactive image purge](https://www.docker.com/blog/docker-hub-image-retention-policy-delayed-and-subscription-updates/){:target="_blank"}
1. [Failover Theater and Achieving True Continuous Resilience](https://thenewstack.io/adrian-cockcroft-on-failover-theater-and-achieving-true-continuous-resilience/){:target="_blank"}
1. [Loki 2.0 released](https://grafana.com/blog/2020/10/28/loki-2.0-released-transform-logs-as-youre-querying-them-and-set-up-alerts-within-loki/){:target="_blank"}
1. [Introducing pvc-autoresizer](https://blog.kintone.io/entry/pvc-autoresizer){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-14/pdf.jpg" width="600"></p>
- [Why the PDF Is Secretly the World's Most Important File Format](https://www.vice.com/en/article/pam43n/why-the-pdf-is-secretly-the-worlds-most-important-file-format){:target="_blank"} by Ernie Smith: the story of the PDF, the file format that’s become one of the internet’s defining information tools. It’ll be with us after we’re long gone.

<p align="center"><img src="{{ site.url }}/images/diu-14/microsoft.jpg" width="600"></p>
- [Microsoft makes WFH permanent for more employees](https://blogs.microsoft.com/blog/2020/10/09/embracing-a-flexible-workplace/){:target="_blank"} by Kathleen Hogan: Microsoft is allowing more of its employees to work from home permanently, the company announced. While most Microsoft employees are still working from home during the ongoing pandemic, the software maker has launched an in-house “hybrid workplace” guide to allow for much greater flexibility once US offices finally reopen.

<p align="center"><img src="{{ site.url }}/images/diu-14/chaosconf.jpg" width="600"></p>
- [Failover Theater and Achieving True Continuous Resilience](https://thenewstack.io/adrian-cockcroft-on-failover-theater-and-achieving-true-continuous-resilience/){:target="_blank"} by Jennifer Riggins: at this year’s virtual ChaosConf, Adrian Cockcroft, vice president of cloud architecture strategy at Amazon Web Services, talked about the dangers of “availability theater” and how to better ground your system’s reliability in reality.


## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-14/cloud-native.png" width="600"></p>
- [How to Become Cloud Native - And the Tools to Get You There](https://codersociety.com/blog/articles/cloud-native-tools){:target="_blank"} by Kentaro Wakayama: cloud native technologies help you deliver software products faster while reducing operational IT costs. This article explains how to become cloud native and recommends specific projects you can start using today.

- [HashiConf Attendee Resources](https://hashiconf.com/digital-october/resources/for-attendees/){:target="_blank"}: did you miss HashiConf? No worries, here are all of the speaker slides in one place.

<p align="center"><img src="{{ site.url }}/images/diu-14/dockerhub-stale-images.jpg" width="600"></p>
- [Docker extends deadline for inactive image purge](https://www.docker.com/blog/docker-hub-image-retention-policy-delayed-and-subscription-updates/){:target="_blank"} by Jean-Laurent De Morlhon: previously, DockerHub was going to start purging inactive images on November 1, 2020. That deadline has now been pushed to "mid-2021". The new rate-limits on Docker pulls for unauthenticated/free users, however, still come into effect November 1st.

<p align="center"><img src="{{ site.url }}/images/diu-14/loki-2.0.png" width="600"></p>
- [Loki 2.0 released](https://grafana.com/blog/2020/10/28/loki-2.0-released-transform-logs-as-youre-querying-them-and-set-up-alerts-within-loki/){:target="_blank"} by Ed Welch: the newly released version 2.0 of Grafana’s Loki log aggregation tool features an improved query language and the ability to generate alerts directly from the logs themselves.

<p align="center"><img src="{{ site.url }}/images/diu-14/grafana-tempo.png" width="600"></p>
- [Announcing Grafana Tempo, a massively scalable distributed tracing system](https://grafana.com/blog/2020/10/27/announcing-grafana-tempo-a-massively-scalable-distributed-tracing-system/){:target="_blank"} by Joe Elliot: an easy-to-operate, high-scale, and cost-effective distributed tracing system. Tempo is designed to be a robust trace id lookup store whose only dependency is object storage (GCS/S3).

- [How a one line change decreased our clone times by 99%](https://medium.com/pinterest-engineering/how-a-one-line-change-decreased-our-build-times-by-99-b98453265370){:target="_blank"} by Urvashi Reddy: the Engineering Productivity team at Pinterest came across a small change that had a large impact in reducing build times across pipelines. We found that setting the refspec option during git fetch reduced our cloning step by 99%.

<p align="center"><img src="{{ site.url }}/images/diu-14/nginx-service-mesh.png" width="600"></p>
- [Introducing NGINX Service Mesh](https://www.nginx.com/blog/introducing-nginx-service-mesh/){:target="_blank"} by Amir Rawdat: NGINX has released a development release of NGINX Service Mesh (NSM), a fully integrated lightweight service mesh that leverages a data plane powered by NGINX Plus to manage container traffic in Kubernetes environments.


## 🛠️ DevOps Tools 

- [Comparing containerization methods: Buildpacks, Jib, and Dockerfile](https://cloud.google.com/blog/topics/developers-practitioners/comparing-containerization-methods-buildpacks-jib-and-dockerfile){:target="_blank"} by James Ward: a great deep-dive outlining the pros and cons of different application packaging methods, with a focus on Java apps.

- [Mitmproxy 5.3](https://mitmproxy.org/posts/releases/mitmproxy53/){:target="_blank"} by Thomas Kriechbaumer: this release comes with a long list of improvements and bugfixes – 137 commits by 20 contributors, resulting in 72 closed issues and 69 closed PRs. Highlights include Python 3.9 support, a new MsgPack content viewer and more support for HTTP trailers.

- [duo-labs/cloudtracker](https://github.com/duo-labs/cloudtracker){:target="_blank"}: CloudTracker helps you find over-privileged IAM users and roles by comparing CloudTrail logs with current IAM policies.


## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-14/opa-vs-gatekeeper.png" width="600"></p>
- [OPA and Gatekeeper: which one do I use?](https://www.infracloud.io/blogs/opa-and-gatekeeper/){:target="_blank"} by Gaurav Chaware: what's the difference between OPA and Gatekeeper when it comes to Kubernetes admission control? Should I use Gatekeeper instead of OPA? In this blog post, I will clarify the difference between OPA and Gatekeeper. Or, to be precise,  how Gatekeeper extends OPA.

<p align="center"><img src="{{ site.url }}/images/diu-14/pvc-autoresizer.png" width="600"></p>
- [Introducing pvc-autoresizer](https://blog.kintone.io/entry/pvc-autoresizer){:target="_blank"} by Akihiro Ikezoe: we are excited to announce `pvc-autoresizer`, which is new, Kubernetes-native, open-source software to provide the ability to expand the size of Persistent Volume Claims (PVCs) on Kubernetes cluster automatically.

<p align="center"><img src="{{ site.url }}/images/diu-14/kube-secret-syncer.png" width="600"></p>
- [kube-secret-syncer: A Kubernetes operator to sync secrets from AWS Secrets Manager](https://www.contentful.com/blog/2020/10/20/open-source-kube-secret-syncer/){:target="_blank"} by Yann Hamon: we’re releasing the open source code for Kube-secret-syncer, a Kubernetes operator that syncs secrets from AWS Secrets Manager. This operator improves on existing projects by delivering sophisticated access control, templated fields and caching to reduce costs.

<p align="center"><img src="{{ site.url }}/images/diu-14/werf.png" width="600"></p>
- [Werf: CLI for automating Kubernetes-based GitOps](https://thenewstack.io/werf-automates-kubernetes-based-gitops-workflows-from-the-command-line/){:target="_blank"} by Joab Jackson: a new project from infrastructure service provider Flant, called Werf, promises an easy way to set up GitOps-styled deployment pipelines, where code changes in a git repository trigger the appropriate containers to be rebuilt and pushed into a Kubernetes deployment — all automatically.

<p align="center"><img src="{{ site.url }}/images/diu-14/opentelemetry.png" width="600"></p>
- [OpenTelemetry's First Release Candidates](https://opensource.googleblog.com/2020/10/opentelemetrys-first-release-candidates.html){:target="_blank"}: OpenTelemetry has hit another milestone with the tracing specification reaching release candidate status. The specification includes all tracing related dependencies, including Trace, Baggage, Resource, Context Propagation, Environment Variables and Exporters (for traces).


## 🔐 Security 

- [DevOps’ Role in Fixing Software Vulnerabilities](https://devops.com/devops-role-in-fixing-software-vulnerabilities/){:target="_blank"} by Gary Stevens: by leveraging the DevOps model to make security part of the corporate culture, software development teams can deliver safe products quickly. The DevSecOps model is one in which security is purposefully implemented at each stage of the software development process, not simply a value-added component.


## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-14/time-zones.png" width="600"></p>
- [Falsehoods programmers believe about time zones](https://www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/){:target="_blank"} by Zain Rizvi: I knew trying to manage time is a fool's errand, but that's what datetime libraries are for. Surely it can't be that complicated ... right? Wrong.


## 🐧 Linux 

- [Linux interface analytics on-demand with iftop](https://www.redhat.com/sysadmin/linux-interface-iftop){:target="_blank"} by Tyler Carrigan: got network bandwidth? Are you sure? Find out with `iftop`.

- [~/.bashrc VS ~/.profile VS ~/.bash_profile](https://leimao.github.io/blog/bashrc-VS-profile-VS-bash_profile/){:target="_blank"} by Lei Mao: the shell is an executable and it is configured by special shell scripts such as `~/.bashrc`, `~/.profile`, `~/.bash_profile`. In this blog post, I would like to briefly discuss the differences between these scripts.

## 🚢 Leadership 

- [Write Down Your Team’s Unwritten Rules](https://hbr.org/2020/10/write-down-your-teams-unwritten-rules){:target="_blank"} by Liz Fosslien & Mollie West Duffy: the act of making a list is a simple exercise that has positive benefits for new, tenured, and future employees — and allows you to reinforce your culture even when the nature of work changes.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-14/azure-space.png" width="600"></p>
- [Microsoft partners with SpaceX to connect Azure cloud to Musk’s Starlink satellite internet](https://www.cnbc.com/2020/10/20/microsoft-expands-its-space-business-pairing-its-azure-cloud-with-spacexs-starlink-internet.html){:target="_blank"} by Michael Sheetz: the partnership comes as Microsoft expands into the space industry, with the company a few weeks ago unveiling a new service called Azure Orbital to connect satellites directly to the cloud.


## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-14/reinvent20-keynotes.jpg" width="600"></p>
- [re:Invent 2020 is going virtual](https://reinvent.awsevents.com){:target="_blank"}: this year, re:Invent is available as a free 3-week virtual event starting November 30th. Stream hundreds of sessions with live Q&A by AWS Experts, hear from cloud leaders, and be the first to learn what's new and next from AWS.

- [Introducing the AWS Load Balancer Controller](https://aws.amazon.com/blogs/containers/introducing-aws-load-balancer-controller/){:target="_blank"} by Justin Garrison: the ALB Ingress Controller is now the AWS Load Balancer Controller and includes support for both Application Load Balancers and Network Load Balancers. The new controller enables you to simplify operations and save costs by sharing an Application Load Balancer across multiple applications in your Kubernetes cluster, as well as using a Network Load Balancer to target pods running on AWS Fargate.

- [Achieve up to 52% better price/performance with Amazon RDS using new Graviton2 instances](https://aws.amazon.com/about-aws/whats-new/2020/10/achieve-up-to-52-percent-better-price-performance-with-amazon-rds-using-new-graviton2-instances/){:target="_blank"}

- [Amazon EKS now supports Kubernetes version 1.18](https://aws.amazon.com/about-aws/whats-new/2020/10/amazon-eks-supports-kubernetes-version-1-18/){:target="_blank"}: highlights of the Kubernetes 1.18 release include Topology Manager reaching beta status, a new beta of Server-side Apply, and a new IngressClass resource for the Ingress specification which makes it simpler to customize Ingress configuration. Additionally, you can now configure the behavior of horizontal pod autoscaling.

- [Application Load Balancers now support gRPC workloads](https://aws.amazon.com/about-aws/whats-new/2020/10/application-load-balancers-enable-grpc-workloads-end-to-end-http-2-support/){:target="_blank"}

- [Announcing SSL/TLS certificates for Amazon EC2 instances](https://aws.amazon.com/about-aws/whats-new/2020/10/announcing-aws-certificate-manager-for-nitro-enclaves/){:target="_blank"}: ACM for Nitro Enclaves is an enclave application that allows you to use public and private SSL/TLS certificates with your web applications and servers running on Amazon EC2 instances with AWS Nitro Enclaves. Nitro Enclaves is an EC2 capability that enables creation of isolated compute environments to protect and securely process highly sensitive data, such as SSL/TLS private keys.

- [EC2 Image Builder now supports AMI distribution across AWS accounts](https://aws.amazon.com/about-aws/whats-new/2020/10/ec2-image-builder-now-supports-ami-distribution-across-aws-accounts/){:target="_blank"}: you can now share AMIs built with EC2 Image Builder with AWS accounts in a manner that gives the receiver account all of the permissions to modify the AMI. This removes the need to manually copy AMIs across multiple accounts and AWS regions.


*Article version: 1.0.0*

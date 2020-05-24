---
layout: post
title: "DevOps Industry Updates #1"
---

It's been only two weeks since the last issue and there's already so much to cover! Besides the usual tech updates, we've seen some [increased M&A activity](https://www.computerworld.com/article/3513439/biggest-technology-acquisitions-2020.html){:target="_blank"} and a growing trend of companies doubling-down/going all-in on their remote working cultures. Without a doubt, our industry is currently undergoing a major transformation and I personally can't wait to see what type of efficiencies can be enacted with the new societal norms that form.

## 🔥 Top Cream

This issue's top 3 stories:

1. [WeChat Surveillance Explained](https://citizenlab.ca/2020/05/wechat-surveillance-explained/){:target="_blank"}
1. [FairwindsOps/goldilocks](https://github.com/FairwindsOps/goldilocks){:target="_blank"}: get your Kubernetes resource requests "Just Right"
1. [EC2 Price Reduction – For EC2 Instance Saving Plans and Standard Reserved Instances](https://aws.amazon.com/blogs/aws/ec2-price-reduction-for-ec2-instance-saving-plans-and-standard-reserved-instances/){:target="_blank"}

## 🌎 Society

<p align="center"><img src="{{ site.url }}/images/diu-1/zoom-keybase.png" width="500"></p>
- [Zoom Acquires Keybase](https://keybase.io/blog/keybase-joins-zoom){:target="_blank"} by Keybase: our single top priority is helping to make Zoom even more secure. There are no specific plans for the Keybase app yet, but ultimately Keybase's future is in Zoom's hands.

<p align="center"><img src="{{ site.url }}/images/diu-1/fb-giphy.jpg" width="500"></p>
- [Facebook to buy Giphy for $400 million](https://www.axios.com/scoop-facebook-to-buy-giphy-for-400-million-4a75a359-833b-484d-b15b-87e94d3de017.html){:target="_blank"} by Dan Primack, Kia Kokalitcheva & Sara Fischer: Facebook has agreed to buy Giphy, the popular platform of sharable animated images, Axios has learned from multiple sources.

- [Scott Forstall tells story about Steve Jobs, Microsoft, and a dead fish](https://www.loopinsight.com/2020/05/21/scott-forstall-tells-story-about-steve-jobs-microsoft-and-a-dead-fish/){:target="_blank"} by Dave Mark: Scott Forstall, via Zoom, tells audience at Code Break about meeting Steve Jobs for the first time.

<p align="center"><img src="{{ site.url }}/images/diu-1/robot-deliveries.jpg" width="500"></p>
- [The pandemic is bringing us closer to our robot takeout future](https://arstechnica.com/tech-policy/2020/04/the-pandemic-is-bringing-us-closer-to-our-robot-takeout-future/){:target="_blank"} by Timothy Lee: “We saw that business double overnight,” startup says of UK grocery deliveries.

### 🏠 The permanence of WFH

<p align="center"><img src="{{ site.url }}/images/diu-0/wfh.jpeg" width="400"></p>

- [Google Will Let Employees Work From Home Until The End Of 2020](https://www.forbes.com/sites/rachelsandler/2020/05/08/google-will-let-employees-work-from-home-until-the-end-of-2020/){:target="_blank"}
- [Facebook Starts Planning for Permanent Remote Workers](https://www.nytimes.com/2020/05/21/technology/facebook-remote-work-coronavirus.html){:target="_blank"}
- [Twitter Will Allow Employees To Work At Home Forever](https://www.buzzfeednews.com/article/alexkantrowitz/twitter-will-allow-employees-to-work-at-home-forever){:target="_blank"}
- [Square announces permanent work-from-home policy](https://www.theverge.com/2020/5/18/21261798/square-employees-work-from-home-remote-premanent-policy-ceo){:target="_blank"}
- [Shopify permanently moves to work-from-home model](https://www.cbc.ca/news/canada/ottawa/shopify-pandemic-staff-ottawa-1.5578614){:target="_blank"}
- [Box embraces a remote/office hybrid culture](https://mobile.twitter.com/levie/status/1263952850935181312){:target="_blank"}

## 📟 DevOps

<p align="center"><img src="{{ site.url }}/images/diu-1/grafana-panel-edit-export-raw-data.png" width="600"></p>
- [What’s new in Grafana v7.0](https://grafana.com/docs/grafana/latest/guides/whats-new-in-v7-0/){:target="_blank"} by Grafana Labs: this release is “the most monumental release for us in the company’s history,” said Raj Dutt, co-founder and CEO of Grafana Labs. Grafana 7.0 brings tracing to the observability platform, rounding out support for the three pillars of observability — logging, metrics, and tracing. The update also allows users to transform data on the fly and create plugins for new data sources in any language.

<p align="center"><img src="{{ site.url }}/images/diu-1/consulnetes.png" width="200"></p>
- [Announcing HashiCorp Consul 1.8](https://www.hashicorp.com/blog/announcing-hashicorp-consul-1-8/){:target="_blank"} by Neena Pemmaraju: Consul 1.8 adds features that lower the barrier to entry for adopting a service mesh in heterogeneous environments. These include 3 new Gateways: Ingress, Terminating and WAN Federation over Mesh.

<p align="center"><img src="{{ site.url }}/images/diu-1/redhat-quay.png" width="300"></p>
- [Quay.io's outage](https://status.quay.io/incidents/kw2627bsdwd9){:target="_blank"} [was so bad, Ambassador switched to Docker Hub](https://blog.getambassador.io/quay-io-outage-and-switching-to-the-docker-hub-container-registry-300a796b571){:target="_blank"} by Richard Li: given the mission critical nature of Ambassador for our customers, we’ve switched our container registry from Quay to Docker Hub, effective immediately.

<p align="center"><img src="{{ site.url }}/images/diu-1/kafka-no-keeper.png" width="500"></p>
- [Apache Kafka Needs No Keeper: Removing the Apache ZooKeeper Dependency](https://www.confluent.io/blog/removing-zookeeper-dependency-in-kafka/){:target="_blank"} by Colin McCabe: currently, Apache Kafka uses Apache ZooKeeper to store its metadata. Data such as the location of partitions and the configuration of topics are stored outside of Kafka itself, in a separate ZooKeeper cluster. This initiative will break this dependency and bring metadata management into Kafka itself.

Speaking of Kafka:

- [What Every Software Engineer Should Know about Apache Kafka: Events, Streams, Tables, Storage, Processing, And More](https://www.michael-noll.com/blog/2020/01/16/what-every-software-engineer-should-know-about-apache-kafka-fundamentals/){:target="_blank"} by Michael Noll: to help fellow engineers wrap their head around Apache Kafka and event streaming, I wrote a 4-part series on the Confluent blog on Kafka’s core fundamentals. In the series, we explore Kafka’s storage and processing layers and how they interrelate, featuring Kafka Streams and ksqlDB.

- [Jepsen Disputes MongoDB’s Data Consistency Claims](https://www.infoq.com/news/2020/05/Jepsen-MongoDB-4-2-6/){:target="_blank"} by Jonathan Allen: MongoDB claimed that their database passed “the industry’s toughest data safety, correctness, and consistency Tests”. In response, Jepsen published an article stating that MongoDB 3.6.4 had in fact failed their tests and that the newer MongoDB 4.2.6 has even more problems.

<p align="center"><img src="{{ site.url }}/images/diu-1/timescale-insert-performance.png" width="600"></p>
- [A multi-node, elastic, petabyte scale, time-series database on Postgres for free](https://blog.timescale.com/blog/multi-node-petabyte-scale-time-series-database-postgresql-free-tsdb/){:target="_blank"} by Ajay Kulkarni: we’re officially making multi-node TimescaleDB, a petabyte-scale distributed time-series database on PostgreSQL available for free.

<p align="center"><img src="{{ site.url }}/images/diu-1/hashicorp-learn.png" width="300"></p>
- [Hashicorp Learn](https://learn.hashicorp.com){:target="_blank"}: Learn how to provision, secure, connect, and run any infrastructure for any application.

### 🛠️ DevOps Tools

<p align="center"><img src="{{ site.url }}/images/diu-1/goldilocks.png" width="500"></p>
- [goldilocks](https://github.com/FairwindsOps/goldilocks){:target="_blank"} by FairwindOps: get your resource requests "Just Right". By using the kubernetes `vertical-pod-autoscaler` in recommendation mode, we can see a suggestion for resource requests on each of our apps. This tool creates a VPA for each deployment in a namespace and then queries them for information.

<p align="center"><img src="{{ site.url }}/images/diu-1/subspace.png" width="600"></p>
- [subspacecommunity/subspace](https://github.com/subspacecommunity/subspace){:target="_blank"}: A simple WireGuard VPN server GUI.

<p align="center"><img src="{{ site.url }}/images/diu-1/cloudsplaining-report.png" width="600"></p>
- [salesforce/cloudsplaining](https://github.com/salesforce/cloudsplaining){:target="_blank"} by Salesforce: Cloudsplaining is an AWS IAM Security Assessment tool that identifies violations of least privilege and generates a risk-prioritized HTML report with a triage worksheet.

- [Supporting the HashiCorp Terraform Extension for Visual Studio Code](https://www.hashicorp.com/blog/supporting-the-hashicorp-terraform-extension-for-visual-studio-code/){:target="_blank"} by Paul Tyng: the original creator (Mikael Olenfalk) of the VS Code extension has transferred ownership of the extension to HashiCorp. HashiCorp is working internally to update the VS Code extension to fully support the 0.12 syntax and use the HashiCorp Language Server by default.

## ☸️ Kubernetes

<p align="center"><img src="{{ site.url }}/images/diu-1/k8s-windows.png" width="400"></p>
- [WSL+Docker: Kubernetes on the Windows Desktop](https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/){:target="_blank"} by Nuno do Carmo Docker & Ihor Dvoretskyi: new to Windows 10 and WSL2, or new to Docker and Kubernetes? Welcome to this blog post where we will install from scratch Kubernetes in Docker KinD and Minikube.

## 💻 Programming

- [6 Ways Salesforce Gets Things Done with Python](http://pyfound.blogspot.com/2020/05/6-ways-salesforce-gets-things-done-with.html){:target="_blank"} by Laura Lindeman: Salesforce Engineering puts Python to work across many areas of their business, including machine learning, security, internal DevOps teams and more.

- [Electron 9.0.0 Released](https://www.electronjs.org/blog/electron-9-0){:target="_blank"} by Verte Dinde: the popular cross platform desktop app framework gets more dependency bumps and is now running on Chromium 83, V8 8.3 and Node.js 12.14.

<p align="center"><img src="{{ site.url }}/images/diu-1/rust.png" width="400"></p>
- [State of routing in Rust](https://pksunkara.com/posts/state-of-routing-in-rust/){:target="_blank"} by Pavan Kumar Sunkara: there are many micro frameworks in Rust and we have seen many blog posts comparing their performances and middleware capabilities. But what we haven't seen is an article comparing their routing functionality and capabilities - until now.

- [Learning Rust in 2020](https://github.com/pretzelhammer/rust-blog/blob/master/posts/learning-rust-in-2020.md 
){:target="_blank"} by pretzelhammer: reviews of free online resources a rust beginner can use to practice writing small simple Rust programs.

- [Five Years of Rust](https://blog.rust-lang.org/2020/05/15/five-years-of-rust.html){:target="_blank"} by The Rust Core Team: it has been five years since we released 1.0! Rust has changed a lot these past five years, so we wanted to reflect back on all of our contributors' work since the stabilization of the language.

(sorry for all the Rust articles!)

## 🐧 Linux

<p align="center"><img src="{{ site.url }}/images/diu-1/ssh-agent-forwarding-in-action.png" width="500"></p>
- [SSH Agent Explained](https://smallstep.com/blog/ssh-agent-explained/){:target="_blank"} by Carl Tashian: the SSH agent is a central part of OpenSSH. In this post, I'll explain what the agent is, how to use it, and how it works to keep your keys safe. I'll also describe agent forwarding and how it works.

- [What Is Nix](https://engineering.shopify.com/blogs/engineering/what-is-nix){:target="_blank"} by Burke Libbey: a crash course in what Nix is, how to think about it, and why it's such a valuable and paradigm-shifting piece of technology.

<p align="center"><img src="{{ site.url }}/images/diu-1/systemd.png" width="400"></p>
- [systemd, 10 years later: a historical and technical retrospective](https://blog.darknedgy.net/technology/2020/05/02/0/index.html){:target="_blank"} by V.R.: 10 years ago, systemd was announced and swiftly rose to become one of the most persistently controversial and polarizing pieces of software in recent history, especially in the GNU/Linux world.

<p align="center"><img src="{{ site.url }}/images/diu-1/linux-containers-deep-dive.png" width="600"></p>
- [Not every container has an operating system inside](https://iximiuz.com/en/posts/not-every-container-has-an-operating-system-inside/){:target="_blank"} by Ivan Velichko: ...but every one of them needs your Linux kernel. At great deep-dive into process isolation with Linux containers and their virtualization capabilities.

## 🔩 Hardware

<p align="center"><img src="{{ site.url }}/images/diu-1/n64.png" width="400"></p>
- [Nintendo 64 Architecture](https://copetti.org/projects/consoles/nintendo-64/){:target="_blank"} by Rodrigo Copetti: a fantastic overview of how Nintendo implemented 3D graphics, audio and anti-piracy/region-lock features for the N64 console.

## 🔐 Security

<p align="center"><img src="{{ site.url }}/images/diu-1/websocket-secrets.png" width="600"></p>
- [Stealing Secrets from Developers using Websockets](https://medium.com/@stestagg/stealing-secrets-from-developers-using-websockets-254f98d577a0){:target="_blank"} by Steve Stagg: this is a story of a convoluted, not-very-useful method for extracting codez from unwitting JavaScript developers working on top secret projects.

<p align="center"><img src="{{ site.url }}/images/diu-1/dot-org-starburst.jpeg" width="500"></p>
- [Victory! ICANN Rejects .ORG Sale to Private Equity Firm Ethos Capital](https://www.eff.org/deeplinks/2020/04/victory-icann-rejects-org-sale-private-equity-firm-ethos-capital){:target="_blank"} by Karen Gullo and Mitch Stoltz: in a stunning victory for nonprofits and NGOs around the world working in the public interest, ICANN roundly rejected Ethos Capital’s plan to transform the .ORG domain registry into a for-profit entity.

<p align="center"><img src="{{ site.url }}/images/diu-1/100mask.jpg" width="400"></p>
- [U.S. Secret Service: “Massive Fraud” Against State Unemployment Insurance Programs](https://krebsonsecurity.com/2020/05/u-s-secret-service-massive-fraud-against-state-unemployment-insurance-programs/){:target="_blank"} by Brian Krebs: a well-organized Nigerian crime ring is exploiting the COVID-19 crisis by committing large-scale fraud against multiple state unemployment insurance programs, with potential losses in the hundreds of millions of dollars, according to a new alert issued by the U.S. Secret Service.

<p align="center"><img src="{{ site.url }}/images/diu-1/wechat-surveillance.png" width="600"></p>
- [WeChat Surveillance Explained](https://citizenlab.ca/2020/05/wechat-surveillance-explained/){:target="_blank"} by Miles Kenyon: how WeChat (the most popular social app in China) conducts surveillance of images and files shared on the platform and uses the monitored content to train censorship algorithms.

- [The Confessions of Marcus Hutchins, the Hacker Who Saved the Internet](https://www.wired.com/story/confessions-marcus-hutchins-hacker-who-saved-the-internet/){:target="_blank"} by Andy Greeenberg: At 22, he single-handedly put a stop to the worst cyberattack the world had ever seen. Then he was arrested by the FBI. This is his untold story.

<p align="center"><img src="{{ site.url }}/images/diu-1/fleming.jpg" width="600"></p>
- [A passwordless server run by spyware maker NSO sparks contact-tracing privacy concerns](https://techcrunch.com/2020/05/07/nso-group-fleming-contact-tracing/){:target="_blank"} by Zack Whittaker: security researcher Bob Diachenko discovered one of NSO’s contact-tracing systems on the internet, unprotected and without a password, for anyone to access.

- [Unmaintained Dependencies and Other Ways to Measure CI/CD Security](https://thenewstack.io/unmaintained-dependencies-and-other-ways-to-measure-ci-cd-security/){:target="_blank"} by Lawrence E Hecht: looks at five recent studies on software supply chain security, with a focus on CI/CD and open source code.

<p align="center"><img src="{{ site.url }}/images/diu-1/high-sev-bugs-piechart.png" width="600"></p>
- [Memory safety](https://www.chromium.org/Home/chromium-security/memory-safety){:target="_blank"} by Chromium Security: the Chromium project finds that around 70% of our serious security bugs are memory safety problems.

## ☁️ Cloud

### Amazon Web Services

<p align="center"><img src="{{ site.url }}/images/diu-jan-2020/aws.png" width="300"></p>

- [Scaling FTP and NFS in AWS to handle millions of files](https://www.rea-group.com/blog/scaling-ftp-and-nfs-in-aws-to-handle-millions-of-files/){:target="_blank"} by David Christ: how a ops team migrated their legacy on-prem FTP service to AWS. That was not exactly straightforward and many lessons were learnt - this article shares those key take-aways.

<p align="center"><img src="{{ site.url }}/images/diu-1/vpc-peering.png" width="500"></p>
- [AWS Networking 101](https://blog.ipspace.net/2020/05/aws-networking-101.html){:target="_blank"} by Ivan Pepelnjak: a high-level overview of AWS VPC and a look at VPC Packet Forwarding.

<p align="center"><img src="{{ site.url }}/images/diu-1/cdk.png" width="500"></p>
- [Introducing CDK for Kubernetes](https://aws.amazon.com/blogs/containers/introducing-cdk-for-kubernetes/){:target="_blank"} by Elad Ben-Israel and Nathan Taber: `cdk8s` is a new [open-source project](https://github.com/awslabs/cdk8s){:target="_blank"} that lets you define Kubernetes applications and reusable components using familiar programming languages. cdk8s (pronounced “cd kates“) lets you use programming languages like TypeScript or Python to generate standard Kubernetes YAML – which means that you can use it to define applications for any Kubernetes cluster running anywhere, both on-premises and the cloud.

#### AWS service updates

- [Easily control the naming of individual IAM role sessions](https://aws.amazon.com/blogs/security/easily-control-naming-individual-iam-role-sessions/){:target="_blank"} by Derrick Oigiagbe: AWS Identity and Access Management (IAM) now has a new sts:RoleSessionName condition element for the AWS Security Token Service (AWS STS), that makes it easy for AWS account administrators to control the naming of individual IAM role sessions.

<p align="center"><img src="{{ site.url }}/images/diu-1/aws-cf.png" width="450"></p>
- [AWS CloudFormation now supports blue/green deployments for Amazon ECS](https://aws.amazon.com/about-aws/whats-new/2020/05/aws-cloudformation-now-supports-blue-green-deployments-for-amazon-ecs/){:target="_blank"}: AWS CloudFormation is now integrated with AWS CodeDeploy to allow ECS customers with application or network load balancers to invoke blue/green and canary style deployments when performing application updates.

- [EC2 Price Reduction – For EC2 Instance Saving Plans and Standard Reserved Instances](https://aws.amazon.com/blogs/aws/ec2-price-reduction-for-ec2-instance-saving-plans-and-standard-reserved-instances/){:target="_blank"} by Martin Beeby: a price reduction for EC2 customers who plan to use Standard Reserved Instances or EC2 Instance Saving Plans. The price changes are already in effect, and so anyone buying new RIs or a new EC2 Instance Saving Plan will be able to take advantage of the lower prices.

<p align="center"><img src="{{ site.url }}/images/diu-1/iot-pricedrop.png" width="600"></p>
- [90%+ price reduction for AWS IoT Jobs](https://aws.amazon.com/blogs/aws/new-price-reduction-for-aws-iot-jobs-globally-available/ ){:target="_blank"} by Alejandra Quetzalli: I have good news for AWS customers using the AWS IoT Device Management service. There has been a 90%+ price reduction for AWS IoT Device Jobs!

<p align="center"><img src="{{ site.url }}/images/diu-1/ultrawarm.jpg" width="600"></p>
- [General Availability of UltraWarm for Amazon Elasticsearch Service](https://aws.amazon.com/blogs/aws/general-availability-of-ultrawarm-for-amazon-elasticsearch-service/){:target="_blank"} by Martin Beeby: this new low-cost storage tier provides fast, interactive analytics on up to three petabytes of log data at one-tenth of the cost of the current Amazon Elasticsearch Service storage tier.

<p align="center"><img src="{{ site.url }}/images/diu-1/aws-trusted-advisor.png" width="400"></p>
- [AWS Trusted Advisor adds 5 Cost Optimization checks](https://aws.amazon.com/about-aws/whats-new/2020/05/aws-trusted-advisor-adds-5-cost-optimization-checks/){:target="_blank"}: AWS Trusted Advisor has launched 5 new Cost Optimization checks in Trusted Advisor, including a check for Savings Plan recommendations and 4 checks that provide cost savings recommendations for ElastiCache, RedShift, ElasticSearch and RDS.

- [Amazon EC2 now supports aliases for Amazon Machine Images (AMIs)](https://aws.amazon.com/about-aws/whats-new/2020/05/amazon-ec2-now-supports-aliases-for-amis/){:target="_blank"}: Amazon Elastic Compute Cloud (EC2) now supports the use of custom identifiers to reference Amazon Machine Images (AMIs) during instance launch.

<p align="center"><img src="{{ site.url }}/images/diu-1/redshift-query-monitor.png" width="600"></p>
- [New query monitoring capabilities in the Amazon Redshift console](https://aws.amazon.com/about-aws/whats-new/2020/05/announcing-new-query-monitoring-capabilities-in-the-amazon-redshift-console/){:target="_blank"}: the Amazon Redshift console simplifies isolating and fixing expensive queries with a newly-redesigned query monitoring page. For a deeper dive, checkout [this article](https://idk.dev/monitor-and-optimize-queries-on-the-new-amazon-redshift-console/){:target="_blank"}.

- [Amazon CloudWatch now monitors Prometheus metrics](https://aws.amazon.com/about-aws/whats-new/2020/05/amazon-cloudwatch-now-monitors-prometheus-metrics-now-in-beta/){:target="_blank"}: you can now use Amazon CloudWatch to monitor Prometheus metrics from Amazon Elastic Kubernetes Service (EKS) and Kubernetes clusters, available now in beta.

<p align="center"><img src="{{ site.url }}/images/diu-1/graviton2.png" width="200"></p>
- [Amazon EC2 M6g instances powered by AWS Graviton2 processors are now generally available](https://aws.amazon.com/about-aws/whats-new/2020/05/amazon-ec2-m6g-instances-powered-by-aws-graviton2-processors-generally-available/){:target="_blank"}: Amazon EC2 [M6g instances](https://aws.amazon.com/blogs/aws/new-m6g-ec2-instances-powered-by-arm-based-aws-graviton2/){:target="_blank"} powered by Arm-based AWS Graviton2 processors are generally available. Amazon EC2 M6g instances deliver up to 40% better price performance over the current generation x86-based Amazon EC2 M5 instances for a broad set of general-purpose workloads.

### Azure

<p align="center"><img src="{{ site.url }}/images/diu-1/azure-problems.png" width="600"></p>
- ['Azure appears to be full': UK punters complain of capacity issues on Microsoft's cloud](https://www.theregister.co.uk/2020/03/24/azure_seems_to_be_full/){:target="_blank"} by Tim Anderson: customers are reporting capacity issues such as the inability to create resources and associated reliability issues.

Which ironically brings us to:

<p align="center"><img src="{{ site.url }}/images/diu-1/azure-spot.png" width="400"></p>
- [Announcing the general availability of Azure Spot Virtual Machines](https://azure.microsoft.com/en-us/blog/announcing-the-general-availability-of-azure-spot-virtual-machines/){:target="_blank"} by Varun Shandilya: similar to AWS's EC2 spot instances, Azure Spot VMs provide access to unused Azure compute capacity at deep discounts. Spot pricing is available on single VMs in addition to VM scale sets (VMSS).

## 🚢 Leadership

<p align="center"><img src="{{ site.url }}/images/diu-1/remote-culture.png" width="500"></p>
- [9 commandments of building a strong remote team culture](https://dribbble.com/stories/2020/04/21/9-commandments-remote-team-culture){:target="_blank"} by Renee Fleck: remote is the new normal. Or is it? Four years into building a remote company, Indiez, has taught me a lot.

- [I Led Companies Through 2 Downturns. Here's What I Learned](https://www.inc.com/david-cancel/i-led-companies-through-2-downturns-heres-what-i-learned.html){:target="_blank"} by David Cancel: In times of uncertainty, you must rapidly move from the mindset of a peacetime CEO to that of a wartime CEO.

- [3 Guiding Principles for Building New SaaS Products on AWS](https://www.trek10.com/blog/guiding-priciples-for-building-saas-on-aws){:target="_blank"} by Jared Short: based on what I have seen and learned over the years, I want to talk about how I would (and in fact have) set up new organizations from day one for future success.

*Article version: 1.0.0*

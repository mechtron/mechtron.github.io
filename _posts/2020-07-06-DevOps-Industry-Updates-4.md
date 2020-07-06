---
layout: post
title: "DevOps Industry Updates #4"
---

Grab your coffee: the 4th edition of DevOps Industry Updates is here! As always, I've been tracking the latest and greatest developments in DevOps and big software and we have some great nuggets to cover:

## 🔥 Top Cream

This issue's top 5 stories:

1. [Attack of the mutant tags! Or why tag mutability is a real security threat](https://sysdig.com/blog/toctou-tag-mutability/){:target="_blank"}
1. [Engineering Dropbox Transfer: Making simple even simpler](https://dropbox.tech/application/engineering-dropbox-transfer--making-simple-even-simpler){:target="_blank"}
1. [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/){:target="_blank"}
1. [How to save a lot of money with a Baker in the spot market?](https://tech.nextroll.com/blog/dev/2020/06/16/how-we-saved-with-spot-market.html){:target="_blank"}
1. [dowjones/hammer](https://github.com/dowjones/hammer){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-4/osx-big-sur.jpg" width="600"></p>
- [macOS Big Sur Preview](https://www.apple.com/macos/big-sur-preview/){:target="_blank"}: macOS Big Sur includes the biggest Safari update ever and powerful enhancements to Messages, Maps, and privacy.

- [Wrongfully Accused by an Algorithm](https://www.nytimes.com/2020/06/24/technology/facial-recognition-arrest.html){:target="_blank"} by Kashmir Hill: in what may be the first known case of its kind, a faulty facial recognition match led to a Michigan man’s arrest for a crime he did not commit.

<p align="center"><img src="{{ site.url }}/images/diu-4/kubecon-europe-2020.jpg" width="400"></p>
- [KubeCon Europe 2020 goes virtual (Aug 17-20)](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/){:target="_blank"}: join dozens of companies leading the charge on Kubernetes development as the community gathers for four days to further the education and advancement of cloud native computing.

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-4/mutant-tags.png" width="600"></p>
- [Attack of the mutant tags! Or why tag mutability is a real security threat](https://sysdig.com/blog/toctou-tag-mutability/){:target="_blank"} by Álvaro Iradier: tag mutability can introduce multiple functional and security issues. Tags can change unexpectedly, and at any moment. In this article, we’ll learn about the risk of tag mutability and how we can prevent it.

<p align="center"><img src="{{ site.url }}/images/diu-4/consul.svg" width="500"></p>
- [HashiCorp Consul 1.8 now General Available](https://www.hashicorp.com/blog/announcing-hashicorp-consul-1-8/){:target="_blank"} by Neena Pemmaraju: Consul 1.8 adds features that lower the barrier to entry for adopting a service mesh in heterogeneous environments. These include a new ingress and terminating gateways, which allow applications inside and outside the service mesh to communicate.

<p align="center"><img src="{{ site.url }}/images/diu-4/terraform.svg" width="500"></p>
- [Announcing HashiCorp Terraform 0.13 Beta](https://www.hashicorp.com/blog/announcing-the-terraform-0-13-beta/){:target="_blank"} by Petros Kolyvas: the 0.13 release of Terraform builds on the powerful language improvements made with 0.12, with a focus on improved usability for module-specific workflows and enhancements to our vibrant and growing provider ecosystem.

<p align="center"><img src="{{ site.url }}/images/diu-4/hashicorp-cloud-platform.jpg" width="600"></p>
- [HashiCorp Cloud Platform Announcement](https://www.hashicorp.com/resources/hashiconf-digital-keynote-hashicorp-cloud-platform-announcement/){:target="_blank"} by Mitchell Hashimoto & Matthew Irish: new flagship cloud offering HashiCorp Cloud Platform (HCP) is a fully managed platform offering HashiCorp products as a service to automate infrastructure on any cloud.

<p align="center"><img src="{{ site.url }}/images/diu-4/http_api.png" width="600"></p>
- [API Gateway HTTP APIs - Cheaper and Faster REST APIs?](https://cloudonaut.io/review-api-gateway-http-apis/){:target="_blank"} by Andreas Wittig: this review takes a closer look at the new service API Gateway HTTP APIs which promised faster HTTP APIs that are cheaper than its predecessor, with a focus on hard numbers over marketing fluff.

<p align="center"><img src="{{ site.url }}/images/diu-4/omfg_troubles.png" width="600"></p>
- [How to save a lot of money with a Baker in the spot market?](https://tech.nextroll.com/blog/dev/2020/06/16/how-we-saved-with-spot-market.html){:target="_blank"} by Tommaso Visconti: how NextRoll replaced their one-minute file generator Apache Storm service with Baker, their in-house data processing software (written in Go), deployed across all AWS regions using spot instances only.

<p align="center"><img src="{{ site.url }}/images/diu-4/amazon-hands-off-deployments.png" width="600"></p>
- [Automating safe, hands-off deployments](https://aws.amazon.com/builders-library/automating-safe-hands-off-deployments/){:target="_blank"} by Clare Liguori: a fantastic overview of how Amazon adopted continuous delivery across the company as a way to automate and standardize how they deployed software and to reduce the time it took for changes to reach production.

<p align="center"><img src="{{ site.url }}/images/diu-4/docker-caddy.png" width="600"></p>
- [How To Remotely Access GUI Applications Using Docker and Caddy on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-remotely-access-gui-applications-using-docker-and-caddy-on-ubuntu-20-04){:target="_blank"} by Patrick Gaskin: even with the growing popularity of cloud services, the need for running native applications still exists.By using noVNC and TigerVNC, you can run native applications inside a Docker container and access them remotely using a web browser.

## 🛠️ DevOps Tools 

<p align="center"><img src="{{ site.url }}/images/diu-4/dow-jones-hammer.png" width="600"></p>
- [dowjones/hammer](https://github.com/dowjones/hammer){:target="_blank"} by Dow Jones: Dow Jones Hammer is a multi-account cloud security tool for AWS. It identifies misconfigurations and insecure data exposures within most popular AWS resources, across all regions and accounts. It has near real-time reporting capabilities to provide quick feedback to engineers and can perform auto-remediation of some misconfigurations.

<p align="center"><img src="{{ site.url }}/images/diu-4/aws-snow-family.jpg" width="600"></p>
- [AWS Snow Family Infographic](https://www.awsgeek.com/AWS-Snow-Family/){:target="_blank"} by Jerry Hargrove: another great infographic from @awsgeek!

<p align="center"><img src="{{ site.url }}/images/diu-4/secretive.png" width="600"></p>
- [maxgoedjen/secretive](https://github.com/maxgoedjen/secretive){:target="_blank"} by Max Goedjen: Secretive is an app for storing and managing SSH keys in the Secure Enclave. It is inspired by the sekey project, but rewritten in Swift with no external dependencies and with a handy native management app.

<p align="center"><img src="{{ site.url }}/images/diu-4/nginx-ui.png" width="600"></p>
- [schenkd/nginx-ui](https://github.com/schenkd/nginx-ui){:target="_blank"} by David Schenk: Nginx UI allows you to access and modify the nginx configurations files without cli.

<p align="center"><img src="{{ site.url }}/images/diu-4/aws-lambda-power-tuning.png" width="600"></p>
- [alexcasalboni/aws-lambda-power-tuning](https://github.com/alexcasalboni/aws-lambda-power-tuning){:target="_blank"} by Alex Casalboni: tool to help you visualize and fine-tune the memory/power configuration of Lambda functions. It runs in your own AWS account and it supports three optimization strategies: cost, speed, and balanced.

## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-4/k8s-vault.png" width="600"></p>
- [Vault & Kubernetes: Better Together](https://www.hashicorp.com/resources/vault-and-kubernetes-better-together/?utm_source=twitter){:target="_blank"} by Jason O'Donnell: Watch Jason O'Donnell from the HashiCorp Vault Ecosystem team demo the Vault Agent Injector using static secrets, dynamic secrets, and encryption-as-a-service.

<p align="center"><img src="{{ site.url }}/images/diu-4/containerized-apps.jpg" width="600"></p>
- [Docker and Kubernetes — root vs. privileged](https://itnext.io/docker-and-kubernetes-root-vs-privileged-9d2a37453dec){:target="_blank"} by Bryant Hagadorn: New to containers? Here are some considerations for running container processes with the `root` user and using the `--privileged` flag, as well as their relation to the host OS.

## 🔐 Security 

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/){:target="_blank"} by Vasilii Ermilov: using static analysis tooling, Vasilii Ermilov examined 2,000 npm modules for security weaknesses and vulnerabilities. This post summarizes some common mistakes that were found during his research.

<p align="center"><img src="{{ site.url }}/images/diu-4/stingray.jpg" width="600"></p>
- [Journalist’s phone hacked by new ‘invisible’ technique](https://www.thestar.com/news/canada/2020/06/21/journalists-phone-hacked-by-new-invisible-technique-all-he-had-to-do-was-visit-one-website-any-website.html){:target="_blank"} by Marco Chown Oved: a report published by Amnesty International shows Omar Radi was targeted by a new and frighteningly stealthy technique. All he had to do was visit one website. Any website.

- [Dating Apps Exposed 845 GB of Explicit Photos, Chats, and More](https://www.wired.com/story/dating-apps-leak-explicit-photos-screenshots/){:target="_blank"} by Lily Newman: security researchers Noam Rotem and Ran Locar were scanning the open internet on May 24 when they stumbled upon a collection of publicly accessible AWS S3 buckets. Each contained a trove of data from nine different specialized dating apps from hundreds of thousands of users.

- [Domestic Abuse Prevention App Exposes Victims in Massive Data Breach](https://www.vpnmentor.com/blog/report-aspire-news-app-breach/){:target="_blank"} by vpnMentor research team: back at it again, renowned analysts Noam Rotem and Ran Locar also discovered an incredibly sensitive data breach originating from the domestic violence prevention app Aspire News App.

<p align="center"><img src="{{ site.url }}/images/diu-4/apple-idfa.jpg" width="600"></p>
- [Applause for Apple’s IDFA Decision](https://foundation.mozilla.org/en/blog/applause-for-apples-idfa-decision/){:target="_blank"} by Ashley Boyd: Apple is giving consumers the option to opt-out of tracking in each app, essentially turning off IDFA (a unique ID that lets advertisers track the actions users take when they use apps).

- [Logging a User into Your App with Face ID or Touch ID](https://developer.apple.com/documentation/localauthentication/logging_a_user_into_your_app_with_face_id_or_touch_id){:target="_blank"}: Face ID and Touch ID provide a frictionless experience when logging in — and now you can use them on your websites in Safari with the Web Authentication API.

- [Apple adds support for encrypted DNS](https://www.zdnet.com/article/apple-adds-support-for-encrypted-dns-doh-and-dot/){:target="_blank"} by Catalin Cimpanu: Apple said that iOS 14 and macOS 11 will support the DNS-over-HTTPS and DNS-over-TLS protocols.

## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-4/rust-hearts.jpg" width="600"></p>
- [3K, 60fps, 130ms: achieving it with Rust](https://blog.tonari.no/why-we-love-rust){:target="_blank"} by Jake McGinty: how we chose the Rust programming language to advance the state-of-the-art in real-time communication.

- [Speeding up function calls with just one line in Python](https://hackeregg.github.io/2020/06/03/Speeding-up-function-calls-with-just-one-line-in-Python.html){:target="_blank"}: if we’re calling expensive functions in the program very frequently, it’s best to save the result of a function call and use it for future purposes rather than calling the function every time.

<p align="center"><img src="{{ site.url }}/images/diu-4/npm-packages.svg" width="600"></p>
- [Worrying about the NPM ecosystem](https://sambleckley.com/writing/npm.html){:target="_blank"} by Sam Bleckley: there are too many packages and too many dependencies, too deeply nested. Can we measure the problem? And what do we do about it?

<p align="center"><img src="{{ site.url }}/images/diu-4/github.png" width="500"></p>
- [Launching docs.github.com](https://github.blog/2020-07-01-launching-docs-github-com/){:target="_blank"} by Jenn Leaver: the new site combines the product content that was on help.github.com and developer.github.com into a unified experience.

- [The Wrong Abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction){:target="_blank"} by Sandi Metz: why "duplication is far cheaper than the wrong abstraction" and the consequences of the "wrong abstraction."

<p align="center"><img src="{{ site.url }}/images/diu-4/pont.png" width="600"></p>
- [A multiplayer board game in Rust and WebAssembly](http://www.mattkeeter.com/projects/pont/){:target="_blank"} by Matt Keeter: Pont is an online implementation of Qwirkle, a board game by Mindware Games. It was written for my parents, so they could play with friends and family during the COVID-19 stay-at-home era.

<p align="center"><img src="{{ site.url }}/images/diu-4/pearl-7.jpg" width="600"></p>
- [Announcing Perl 7](https://www.perl.com/article/announcing-perl-7/){:target="_blank"} by Brian Foy: Perl has a new plan moving forward. While work on Perl 7 is already underway, it’s not going to be a huge change in code or syntax. Long story short - it’s Perl 5 with modern defaults and it sets the stage for bigger changes later. 

## 📖 Machine Learning 

- [MIT apologizes, permanently pulls offline huge dataset that taught AI systems to use offensive terms](https://www.theregister.com/2020/07/01/mit_dataset_removed/){:target="_blank"} by Katyanna Quach: MIT has taken offline its highly cited dataset that trained AI systems to potentially describe people using racist, misogynistic, and other problematic terms.

## 🐧 Linux 

<p align="center"><img src="{{ site.url }}/images/diu-4/vi.png" width="600"></p>
- [How Did Vim Become So Popular](https://pragmaticpineapple.com/how-did-vim-become-so-popular/){:target="_blank"} by Nikola Đuza: How did Vim take over the world?

<p align="center"><img src="{{ site.url }}/images/diu-4/dynamic-linking.svg" width="600"></p>
- [Dynamic linking](https://drewdevault.com/dynlib.html){:target="_blank"} by Drew DeVault: Do your installed programs share dynamic libraries? A look at how dynamic linking can make your programs faster and improve security.

## 🔩 Hardware 

<p align="center"><img src="{{ site.url }}/images/diu-4/apple-silicon.jpg" width="600"></p>
- [Apple is switching Macs to its own processors starting later this year](https://www.theverge.com/2020/6/22/21295475/apple-mac-processors-arm-silicon-chips-wwdc-2020){:target="_blank"} by Tom Warren: Apple is officially moving to its own silicon chips for some of its Mac hardware. Calling it a “historic day for the Mac,” Apple CEO Tim Cook detailed the transition plan for Apple to adopt their own ARM-powered silicon in Macs later this year.

<p align="center"><img src="{{ site.url }}/images/diu-4/xbox.jpg" width="500"></p>
- [Xbox Architecture: A Practical Analysis](https://www.copetti.org/projects/consoles/xbox/){:target="_blank"} by Rodrigo Copetti: the latest article in the Architecture of Consoles series, Rodrigo Copetti delivers another great in-depth console hardware analysis, this time for the original Xbox.

<p align="center"><img src="{{ site.url }}/images/diu-4/8086.jpg" width="600"></p>
- [Die shrink: How Intel scaled down the 8086 processor](http://www.righto.com/2020/06/die-shrink-how-intel-scaled-down-8086.html){:target="_blank"} by Ken Shirriff: a die shrink provides a way to improve the performance of a processor and reduce its cost without the effort of a complete redesign. By comparing two similar 8086 chips, Ken Shirriff shows that a die shrink is more complex than uniformly shrinking the whole die.

## 🚢 Leadership 

- [Engineering Dropbox Transfer: Making simple even simpler](https://dropbox.tech/application/engineering-dropbox-transfer--making-simple-even-simpler){:target="_blank"} by Nick Sundin: one of the challenges of application engineering within an established company like Dropbox is to break out of the cycle of incremental improvements and look at a problem fresh.

- [7 things in your DevOps workflow that kill your developer productivity](https://humanitec.com/blog/7-things-that-kill-your-developer-productivity){:target="_blank"} by Kaspar von Grünberg: a look into one of the biggest killers in developer productivity: the way you configure and setup your DevOps workflow. In almost all situations, the author has come across some quick-wins that help you avoid most of the problems.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-4/dns.png" width="600"></p>
- [What happens when you update your DNS?](https://jvns.ca/blog/how-updating-dns-works/){:target="_blank"} by Julia Evans: a quick exploration of what’s happening behind the scenes when you update a DNS record.

- [How CDNs Generate Certificates](https://fly.io/blog/how-cdns-generate-certificates/){:target="_blank"} by Thomas Ptacek: it's time to talk about certificate infrastructure.

## AWS 

- [AWS Lambda support for Amazon Elastic File System now GA](https://aws.amazon.com/about-aws/whats-new/2020/06/aws-lambda-support-for-amazon-elastic-file-system-now-generally-/){:target="_blank"}: you can now use AWS Lambda and EFS together to build data-intensive applications that can process larger amounts of data in a highly distributed manner, sharing data across functions, containers and instances. 

- [Announcing Amazon Aurora Serverless with MySQL 5.7 compatibility](https://aws.amazon.com/about-aws/whats-new/2020/06/announcing-aurora-serverless-with-mysql-5-7-compatibility/){:target="_blank"}: Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora, where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs. It's a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.

- [Amazon EC2 Auto Scaling now supports Instance Refresh within Auto Scaling Groups](https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-ec2-auto-scaling-now-supports-instance-refresh-within-auto-scaling-groups/){:target="_blank"}: EC2 Auto Scaling now lets you automatically update the instances in your Auto Scaling Groups to simplify releasing new application versions and/or roll-out infrastructure changes.

<p align="center"><img src="{{ site.url }}/images/diu-4/aws-inf.png" width="600"></p>
- [Amazon EKS now Supports EC2 Inf1 Instances](https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-eks-now-supports-ec2-inf1-instances/){:target="_blank"}: EC2 Inf1 instances deliver high performance and the lowest cost machine learning inference in the cloud. With EKS and the AWS Neuron Kubernetes device plugin, it’s easy to combine multiple Inferentia devices in your cluster to run high performance and cost-effective inference workloads at scale.  

<p align="center"><img src="{{ site.url }}/images/diu-4/acm.png" width="500"></p>
- [AWS Certificate Manager Extends Automation of Certificate Issuance Via CloudFormation](https://aws.amazon.com/about-aws/whats-new/2020/06/aws-certificate-manager-extends-automation-certificate-issuance-via-cloudformation/){:target="_blank"}: Finally! AWS Certificate Manager (ACM) now supports CloudFormation templates for automating SSL/TLS certificate issuance for DNS-validated certificates with domains managed in Route 53.

- [Introducing AWS CloudFormation Guard (Preview)](https://aws.amazon.com/about-aws/whats-new/2020/06/introducing-aws-cloudformation-guard-preview/){:target="_blank"}: CloudFormation announces the preview of CloudFormation Guard (`cfn-guard`), an open-source command line interface that helps enterprises keep their AWS infrastructure and application resources in compliance with their company policy guidelines.

- [Detailed Cost Management Data is now available on AWS Console Mobile Application](https://aws.amazon.com/about-aws/whats-new/2020/06/detailed-cost-management-data-is-now-available-on-aws-console-mobile-application/){:target="_blank"}: allows you to see your detailed costs on-the-go with your mobile device, including your current month-to-date data, forecasted month end costs, and daily costs.

<p align="center"><img src="{{ site.url }}/images/diu-4/aws-multi-region-application-architecture-diagram.png" width="600"></p>
- [Multi-Region Application Architecture](https://aws.amazon.com/solutions/implementations/multi-region-application-architecture/){:target="_blank"}: helps demonstrate a fault-tolerant application with easy failover to a backup region. This solution leverages Amazon Simple Storage Service (Amazon S3) Cross-Region replication and Amazon DynamoDB Global Tables to asynchronously replicate application data between the primary and secondary AWS Region.

<p align="center"><img src="{{ site.url }}/images/diu-4/aws-honeycode.png" width="600"></p>
- [Introducing Amazon Honeycode – Build Web & Mobile Apps Without Writing Code](https://aws.amazon.com/blogs/aws/introducing-amazon-honeycode-build-web-mobile-apps-without-writing-code/){:target="_blank"} by Jeff Barr: this new fully-managed AWS service gives you the power to build powerful mobile & web applications without writing any code.

<p align="center"><img src="{{ site.url }}/images/diu-4/app2container.png" width="600"></p>
- [AWS App2Container](https://aws.amazon.com/app2container/){:target="_blank"}: AWS App2Container is a command-line tool for modernizing .NET and Java applications into containerized applications, automagically!

## Azure 

<p align="center"><img src="{{ site.url }}/images/diu-4/azure-firewall.png" width="450"></p>
- [Azure Firewall Manager is now generally available](https://azure.microsoft.com/en-us/blog/azure-firewall-manager-is-now-generally-available/){:target="_blank"} by Gopikrishna Kannan: Azure Firewall Manager is now generally available and includes Azure Firewall Policy, Azure Firewall in a Virtual WAN Hub (Secure Virtual Hub), and Hub Virtual Network.

*Article version: 1.1.0*

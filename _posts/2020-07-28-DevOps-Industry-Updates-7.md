---
layout: post
title: "DevOps Industry Updates #7"
permalink: /devops-industry-updates-7/
---

Did somebody say "auto-remediation of configuration drift"? Read all about that and other hot topics (like the miracles of GPT-3 and the woes of DoH) in the 7th issue of DevOps Industry Updates:

## 🔥 Top Cream

This issue's top 4 stories:

1. [Google to Keep Employees Home Until Summer 2021](https://www.wsj.com/articles/google-to-keep-employees-home-until-summer-2021-amid-coronavirus-pandemic-11595854201){:target="_blank"}
1. [OpenAI’s new language generator GPT-3 is shockingly good](https://www.technologyreview.com/2020/07/20/1005454/openai-machine-learning-language-generator-gpt-3-nlp/){:target="_blank"}
1. [State of Software Delivery Management Report 2020](https://www.cloudbees.com/analyst-report/software-delivery-management-strategy){:target="_blank"}
1. [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/){:target="_blank"}

## 🌎 Society 

<p align="center"><img src="{{ site.url }}/images/diu-7/google.jpg" width="600"></p>
- [Google to Keep Employees Home Until Summer 2021](https://www.wsj.com/articles/google-to-keep-employees-home-until-summer-2021-amid-coronavirus-pandemic-11595854201){:target="_blank"} by Rob Copeland & Peter Grant: Google will keep its employees home until at least next July, making the search-engine giant the first major U.S. corporation to formalize such an extended timetable in the face of the coronavirus pandemic.

- [25 In-Demand Tech Jobs and Skills at Amazon](https://insights.dice.com/2020/07/16/25-in-demand-tech-jobs-and-skills-at-amazon/){:target="_blank"} by Nick Kolakowski: in early June, we used Broken Glass (which collects and analyzes millions of job postings from across the country) to analyze the skill-sets and roles that the company is hiring for. Now we’re back with an update, and things have slightly changed.

- [AWS Container Day at KubeCon](https://awscontainerday.splashthat.com){:target="_blank"}: join AWS for a day of technical deep dives, product demos, and product announcements. The AWS Kubernetes team will be streaming on Twitch all day, ready to answer your questions.

## 📟 DevOps 

<p align="center"><img src="{{ site.url }}/images/diu-7/state-of-software-delivery-report.jpg" width="600"></p>
- [State of Software Delivery Management Report 2020](https://www.cloudbees.com/analyst-report/software-delivery-management-strategy){:target="_blank"} by Sanjeev Sharma: Accelerated Strategies Group conducted the State of Software Delivery Management 2020, surveying software delivery practitioners and key industry leaders to assess the current state of software delivery management (SDM) and examine the impact of SDM adoption as a capability.

<p align="center"><img src="{{ site.url }}/images/diu-7/grafana-fluxdb-collectd.jpg" width="600"></p>
- [Monitoring your own infrastructure using Grafana, InfluxDB, and CollectD](https://serhack.me/articles/monitoring-infrastructure-grafana-influxdb-connectd/){:target="_blank"} by SerHack: it is essential for a company to monitor its infrastructure nodes, especially if the company does not have on-site access to intervene when issues arise. Here's a great stack to get you started with minimal overhead while keeping all data in your cloud.

- [Use multiple AWS accounts, but keep it simple!](https://cloudonaut.io/use-multiple-aws-accounts-but-keep-it-simple/){:target="_blank"} by Michael Wittig: some great ideas and things to consider when getting started with AWS is a challenge.

<p align="center"><img src="{{ site.url }}/images/diu-7/linkerd.png" width="500"></p>
- [Under the hood of Linkerd's state-of-the-art Rust proxy, Linkerd2-proxy](https://linkerd.io/2020/07/23/under-the-hood-of-linkerds-state-of-the-art-rust-proxy-linkerd2-proxy/){:target="_blank"} by Eliza Weisman: there's been a recent surge of interest in Linkerd2-proxy, the underlying proxy used by Linkerd. I've been working on Linkerd2-proxy for the majority of my time as a Linkerd maintainer so this topic is near and dear to my heart. In this article, I'm going to shed a little more light on what Linkerd2-proxy is and how it works.

<p align="center"><img src="{{ site.url }}/images/diu-7/uber-doma.png" width="600"></p>
- [Introducing Domain-Oriented Microservice Architecture](https://eng.uber.com/microservice-architecture/){:target="_blank"} by Adam Gluck: our (Uber's) goal with DOMA is to provide a way forward for organizations that want to reduce overall system complexity while maintaining the flexibility associated with microservice architectures.

<p align="center"><img src="{{ site.url }}/images/diu-7/docker.png" width="500"></p>
- [Docker Releases Plugin for Simplified Deployments into AWS ECS and Fargate](https://www.infoq.com/news/2020/07/docker-ecs-plugin/){:target="_blank"} by Matt Campbell: Docker has announced the public beta of their enhanced integration of Docker with AWS Elastic Container Service and AWS Fargate. The release of the ECS plugin allows for developers to work within the Docker experience to create the necessary infrastructure to operate within AWS.

<p align="center"><img src="{{ site.url }}/images/diu-7/stupid-actions.png" width="600"></p>
- [Doing Stupid Stuff with GitHub Actions](https://devopsdirective.com/posts/2020/07/stupid-github-actions/){:target="_blank"} by Sid Palas: DevOps doesn’t have to be all work and no play. I built 5 stupid (but fun!) GitHub actions… because why not?

## 🛠️ DevOps Tools 

- [iann0036/cfn-remediate-drift](https://github.com/iann0036/cfn-remediate-drift){:target="_blank"} by Ian Mckay: automated CloudFormation drift remediation using Import functionality.

<p align="center"><img src="{{ site.url }}/images/diu-7/infracost.png" width="600"></p>
- [GitHub Action: Run infracost](https://github.com/marketplace/actions/run-infracost){:target="_blank"} by Ali Khajeh-Hosseini: automatically adds a pull request comment showing the cost estimate diff if a percentage threshold is crossed.

## ☸️ Kubernetes 

<p align="center"><img src="{{ site.url }}/images/diu-7/multi-cloud-multi-cluster.png" width="600"></p>
- [Multi-Cloud and Multi-Cluster Declarative Kubernetes Cluster Creation and Management](https://itnext.io/multi-cloud-and-multi-cluster-declarative-kubernetes-cluster-creation-and-management-with-cluster-6df8efdc2a89){:target="_blank"} by Gokul Chandra: the Cluster API (CAPI) is a Kubernetes project that brings declarative, Kubernetes-style APIs to cluster creation. CAPI does this by using Custom Resource Definitions to extend the API exposed by the Kubernetes API Server, allowing users to create new resources.

## 🔐 Security 

<p align="center"><img src="{{ site.url }}/images/diu-7/codepeople.png" width="600"></p>
- [Thinking of a Cybersecurity Career? Read This](https://krebsonsecurity.com/2020/07/thinking-of-a-cybersecurity-career-read-this/){:target="_blank"} by Brian Krebs: thousands of people graduate from colleges and universities each year with cybersecurity or computer science degrees only to find employers are less than thrilled about their hands-on, foundational skills. Here’s a look at a recent survey that identified some of the bigger skills gaps, and some thoughts about how those seeking a career in these fields can better stand out from the crowd.

<p align="center"><img src="{{ site.url }}/images/diu-7/twilio.jpg" width="600"></p>
- [Twilio had an unsecured AWS S3 bucket breached](https://www.theregister.com/2020/07/21/twilio_javascript_sdk_code_injection/){:target="_blank"} by Shaun Nichols: Ruh-roh! Twilio confirmed one or more miscreants sneaked into its unsecured cloud storage systems and modified a copy of the JavaScript SDK it shares with its customers.

<p align="center"><img src="{{ site.url }}/images/diu-7/meow.jpg" width="600"></p>
- [New ‘Meow’ attack has deleted almost 4,000 unsecured databases](https://www.bleepingcomputer.com/news/security/new-meow-attack-has-deleted-almost-4-000-unsecured-databases/){:target="_blank"} by Ionut Ilascu: hundreds of unsecured databases exposed on the public web are the target of an automated 'meow' attack that destroys data without any explanation. The activity started recently by hitting Elasticsearch and MongoDB instances without leaving any explanation, or even a ransom note.

<p align="center"><img src="{{ site.url }}/images/diu-7/DoT-or-DoH.png" width="600"></p>
- [DoH Isn’t Better, It’s Just What Google Likes](https://www.dnsfilter.com/blog/dns-over-tls/){:target="_blank"} by Mike Schroll: as the need for DNS encryption evolves, there seems to be a growing debate between DNS-over-TLS (DoT) and DNS-over-HTTPS (DoH). With Google (and Firefox) adopting DoH as their DNS encryption method for their browsers, there seems to be a belief that DoH is superior to DoT.

## 💻 Programming 

<p align="center"><img src="{{ site.url }}/images/diu-7/python-packages.jpg" width="600"></p>
- [Python Packages: Five Real Python Favorites](https://realpython.com/python-packages/){:target="_blank"} by Real Python: in this tutorial, you’ll meet some of the authors at Real Python and learn about packages they like to use in place of more common packages in the standard library, including `pudb`, `requests`, `parse`, `dateutil` and `typer`.

<p align="center"><img src="{{ site.url }}/images/diu-7/owl.jpg" width="500"></p>
- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/){:target="_blank"} by Malte Ubl: one of the key elements of Google's software engineering culture is the use of defining software designs through design docs, which document the high level implementation strategy and key design decisions with emphasis on the trade-offs that were considered during those decisions.

## 📖 Machine Learning 

<p align="center"><img src="{{ site.url }}/images/diu-7/letters.jpg" width="600"></p>
- [OpenAI’s new language generator GPT-3 is shockingly good](https://www.technologyreview.com/2020/07/20/1005454/openai-machine-learning-language-generator-gpt-3-nlp/){:target="_blank"} by Will Douglas Heaven archive page: The AI is the largest language model ever created and can generate amazing human-like text on demand but won't bring us closer to true intelligence.

<p align="center"><img src="{{ site.url }}/images/diu-7/gpt3-generate-tokens-output.gif" width="600"></p>
- [How GPT3 Works - Visualizations and Animations](https://jalammar.github.io/how-gpt3-works-visualizations-animations/){:target="_blank"} by Jay Alammar: another great blog post from Jay explaining how GPT3 works, complete with a myriad of visualizations to help things really sink in.

## 🐧 Linux 

<p align="center"><img src="{{ site.url }}/images/diu-7/git.28.0.png" width="600"></p>
- [Highlights from Git 2.28](https://github.blog/2020-07-27-highlights-from-git-2-28/){:target="_blank"} by Taylor Blau: the open source Git project just released Git 2.28 with features and bug fixes from over 58 contributors, including a new configuration option `init.defaultBranch` which allows branches other than `master` to be cloned by default.

<p align="center"><img src="{{ site.url }}/images/diu-7/colorize-your-cli.png" width="600"></p>
- [Colorize Your CLI](https://danyspin97.org/blog/colorize-your-cli/){:target="_blank"} by Danilo Spinella: in this post, we will setup a colourised CLI. This will be a comprehensive guide and there will be (almost) no need to read any documentation.

## ☁️ Cloud 

<p align="center"><img src="{{ site.url }}/images/diu-7/iaas2020-historic.png" width="600"></p>
- [IaaS Pricing Patterns and Trends 2020](https://redmonk.com/rstephens/2020/07/10/iaas-pricing-patterns-and-trends-2020/){:target="_blank"} by Rachel Stephens: it can be difficult to properly assess how competitive cloud providers are with one another because their non-standardized packaging makes it effectively impossible to compare services on an equal footing. To this end we offer the following deconstruction of cloud pricing for base on-demand infrastructure.

## AWS 

<p align="center"><img src="{{ site.url }}/images/diu-7/cloudformation-drift.png" width="600"></p>
- [Implement automatic drift remediation for AWS CloudFormation](https://aws.amazon.com/blogs/mt/implement-automatic-drift-remediation-for-aws-cloudformation-using-amazon-cloudwatch-and-aws-lambda/){:target="_blank"} by Bryant Bost: AWS CloudFormation now offers a “drift detection” feature to automatically detect unmanaged configuration changes to stacks and resources. With this feature, CloudFormation analyzes the current specifications of resources in a stack against the specifications defined in the stack template, and reports the difference.

- [Announcing CDK Pipelines Preview](https://aws.amazon.com/about-aws/whats-new/2020/07/announcing-cdk-pipelines-preview/){:target="_blank"}: CDK Pipelines is a library for the AWS Cloud Development Kit (CDK) that makes it easy to set up simple or complex continuous delivery pipelines with AWS CodePipelines.

<p align="center"><img src="{{ site.url }}/images/diu-7/aws-spot.png" width="600"></p>
- [Designing scalable API on AWS spot instances](https://blog.adapty.io/designing-scalable-api-on-aws-stop-instance/){:target="_blank"} by Kirill Potekhin: how we had cut costs three times for the servers by using spot instances on the production environment. I’ll also walk you through configuring auto scaling. Firstly, you will see the overview of how it works and then we provide the instruction to launch it.

## GCP 

<p align="center"><img src="{{ site.url }}/images/diu-7/gcp-networking.jpg" width="600"></p>
- [Using new traffic control features in External HTTP(S) load balancer](https://cloud.google.com/blog/products/networking/how-to-use-new-traffic-control-features-in-cloud-load-balancing){:target="_blank"} by Jeff Piazza & Gautam Nirodi: in April, we announced two new actions supported by the URL map: redirects and rewrites. With URL redirects the load balancer redirects incoming requests from one URL to another. With rewrites, you can present external users with different URLs than those used by the backend service.


*Article version: 1.0.0*

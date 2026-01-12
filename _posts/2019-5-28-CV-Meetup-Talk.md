---
layout: post
title: "How GumGum serves its CV at scale"
permalink: /cv-meetup-talk/
---

I had the pleasure of speaking with [Greg Chu](https://www.linkedin.com/in/greghchu/){:target="_blank"} today at the [Los Angeles Computer Vision Meetup](https://www.meetup.com/Los-Angeles-Computer-Vision-Meetup/){:target="_blank"} hosted at GumGum HQ in Santa Monica. We had a great turn-out and I really enjoyed explaining how GumGum auto-scales our CV ML inference systems.

[Meetup event link](https://www.meetup.com/Los-Angeles-Computer-Vision-Meetup/events/261362669/){:target="_blank"}

### Tech talk overview

Given the rapidly growing utility of computer vision applications, how do we deploy these services in high-traffic production environments to generate business value? Here we present GumGum’s approach to building infrastructure for serving computer vision models in the cloud. We’ll also demo code for building a car make-model detection server.

##### Topics
- [Multivitamin](https://github.com/gumgum/multivitamin){:target="_blank"}: an open-sourced Python framework for serving library-agnostic machine learning models
- Containerization: packaging everything you need into a single portable artifact
- CI/CD: automating builds and releases with Drone CI
- Custom auto-scaling: using AWS Lambda to scale our infrastructure based on business metrics

##### Speakers
Greg Chu is a Senior Computer Vision Scientist at GumGum, where he works on both the training and large-scale deployment of object detection and recognition models. These models are applied within GumGum's products for contextual advertising and sports sponsorship analytics. Greg has a background in biomedical physics. In his Ph.D research he developed tumor segmentation models to assess the clinical progression of patients in FDA clinical drug trials.

Corey Gale is a Senior DevOps Engineer at GumGum. He works on automating cloud infrastructure for highly-scalable systems using open-source technologies. With his background in Robotics Engineering, Corey is a believer that through automation, anything is possible. He is also obsessed with process (measure all the things!), cost-reduction and entrepreneurship (Corey actually created a food delivery app in 2012, well before they became mainstream).

### Slides

You can view our Meetup slides [here](https://docs.google.com/presentation/d/17_DKAC5aoz_nzda11cLWS0o0835BHKtW2okgK0xA_Rc/edit?usp=sharing){:target="_blank"}

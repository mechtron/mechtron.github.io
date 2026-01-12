---
layout: post
title: "Corey's Image Classifier"
permalink: /coreys-image-classifier/
---

As DevOps Engineers, it's absolutely vital that we understand the perspective of the developers we support and the technology they use to implement business solutions. To accomplish things like improved monitoring or finely-tuned auto-scaling, we need to discern the limits and trade-offs of different technologies and the best way to do that, in my opinion, is to build something with them. And that is precisely why I built "Corey's Image Classifier". This project utilizes a wide variety of technology that we use at [GumGum](https://gumgum.com){:target="_blank"} that I personally wanted to gain more hands-on experience with. And today, I am happy to announce that I have [open-sourced it](https://github.com/mechtron/coreys-image-classifier){:target="_blank"}!

For those that are unaware, GumGum is a tech company headquartered in Santa Monica that specializes in visual intelligence. Over the years we have become experts in building systems that can analyze and understand the contents of images, videos and text. We have applied this expertise to a variety of problems and verticals, including advertising, brand safety, professional sports and even dentistry. Our machine learning teams now have heavy investments in tech including Python, TensorFlow and Keras, all of which you will see applied in this project. As we continue to scale to new heights in a completely containerized world, we've also seen the rise of DevOps technologies like Docker, Kubernetes and Helm, which are proving to be vital parts of a foundation that is supporting our most critical systems at GumGum. You will also see those technologies utilized in this project.

### Features

- Classification of 1000 different objects
- API with user management
- SPA-style web client
- Top 10 classifications page
- Classification caching

### Production Environment

[Try it out!](https://classifier.k8s.prod.sandbox.ggops.com){:target="_blank"}

### Tech Stack

#### Frontend

- [Bootstrap](https://getbootstrap.com){:target="_blank"}
- [VueJS](https://vuejs.org){:target="_blank"}

#### Backend

- [Python](https://www.python.org){:target="_blank"}
- [Django REST Framework](https://www.django-rest-framework.org){:target="_blank"}
- [Djoser](https://github.com/sunscrapers/djoser){:target="_blank"}
- [TensorFlow](https://www.tensorflow.org){:target="_blank"}
- [Keras](https://keras.io){:target="_blank"}
- [ImageNet](http://www.image-net.org){:target="_blank"}
- [MySQL](https://www.mysql.com){:target="_blank"}
- [Redis](https://redis.io){:target="_blank"}

#### DevOps

- [Docker](https://www.docker.com){:target="_blank"}
- [Kubernetes](https://kubernetes.io){:target="_blank"}
- [EKS](https://aws.amazon.com/eks/){:target="_blank"}
- [Helm](https://helm.sh){:target="_blank"}
- [Ambassador](https://www.getambassador.io){:target="_blank"}
- [Envoy](https://www.envoyproxy.io){:target="_blank"}

[Stack visualized](https://classifier.k8s.prod.sandbox.ggops.com/#/about){:target="_blank"}

### Classification Page

<img src="{{ site.url }}/images/image-classifier/classification-page.png" width="600">

### Example Classification

<img src="{{ site.url }}/images/image-classifier/example-classification.png" width="600">

### Top 10 Page

<img src="{{ site.url }}/images/image-classifier/top10-page.png" width="600">

### Project Documentation

For more information on other functionality provided by my project, please refer to the official [README.md](https://github.com/mechtron/coreys-image-classifier/blob/master/README.md){:target="_blank"}.

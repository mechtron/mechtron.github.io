---
layout: post
title: "Presenting my ami-bakery tool"
permalink: /ami-bakery/
---

I'm happy to announce that I have open-sourced my tool for building idempotent AMIs in a CI setting. TL;DR: Packer + checksums = 👍

### GitHub repo

[mechtron/ami-bakery](https://github.com/mechtron/ami-bakery){:target="_blank"}

### Project goals

1. Automated, idempotent AMI builds with [Packer](https://www.packer.io/){:target="_blank"}
    AMIs are only re-built when their definition changes
1. CI-friendly solution

### Project overview

To learn more about the GumGum AMI Bakery, checkout [my slideshow](https://slides.com/coreygale/ami-bakery/){:target="_blank"}!

### Usage

Docker image: `docker pull mechtron/ami-bakery`

To use the GumGum AMI Bakery in your CI environment, see the following configuration options:

#### Environment variables

To specify where the ephemeral Packer instance is launched:

- `AWS_DEFAULT_REGION`
- `AWS_SUBNET_ID`

To specify the AMI configuration files:

- `PACKER_JSON_PATH`: path to the Packer JSON file
- `AMI_DEFINITION_DIRS`: comma-separated list of directories containing the AMI's configuration code

#### Example

```
docker run --rm -t \
    -e AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION \
    -e AWS_SUBNET_ID=$AWS_SUBNET_ID \
    -e PACKER_JSON_PATH=`pwd`/example-app/ami/packer/ami.json \
    -e AMI_DEFINITION_DIRS=`pwd`/example-app/ami/ \
    --mount type=bind,source=`pwd`,target=`pwd` \
    --mount type=bind,source=$HOME/.aws/,target=/root/.aws \
    mechtron/ami-bakery:latest
```

#### Getting the AMI ID

In addition to the build's `stdout`, the new AMI ID is also outputted to the file `.ami_id.json`. Here's an example of the contents of that file:

    {"ami_id": "ami-0d8ebf1e938f7f16e"}

##### Grab the AMI ID from Bash

    cat .ami_id.json | jq .ami_id

### Offical readme

For more information on the specific usage of `ami-bakery`, see the project's [README.md](https://github.com/mechtron/ami-bakery/blob/master/README.md){:target="_blank"}.

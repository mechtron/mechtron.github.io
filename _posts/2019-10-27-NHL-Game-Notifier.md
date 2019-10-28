---
layout: post
title: "NHL Game Notifier"
---

A couple weeks ago my wife asked me "how can I get notified of my Leaf games before they start, without installing an app?" Like most Software Engineers, my brain immediately started thinking of different solutions and the end result was my latest project: the NHL Game Notifier. This was an especially fun project for me as it combined three of my favourite things in life: hockey (Go Red Wings!), programming and putting a smile on my wife's face.

### Project Goals

1. Get notified of new NHL games via SMS
1. 100% serverless solution
1. All provisioned infrastructure should fit within AWS's Free Tier
1. IaC written in Terraform v0.12
1. Simple user-management using a CLI tool

### Example Notification

<img src="{{ site.url }}/images/nhl-notifier/nhl-game-notifier-example-notification.jpg" width="300">

### GitHub Repo

[mechtron/nhl-game-notifier](https://github.com/mechtron/nhl-game-notifier){:target="_blank"}

This repo includes everything needed to deploy the NHL Game Notifier to your own AWS account:

- Application code written in Python 3 (`/notifier`)
- Terraform code for provisioning AWS resources (`/terraform`)
- User management CLI script (`manage_users.py`)

For more information, see the project's [README.md](https://github.com/mechtron/nhl-game-notifier/blob/master/README.md){:target="_blank"}.

### AWS Infrastructure

All of the AWS resources provisioned for this project fit within [AWS's always-free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free){:target="_blank"}:

- Lambda function triggered by CloudWatch Events
- DynamoDB table for user data
- SNS topic for SMS notifications
- CloudWatch Log Stream for Lambda function output

### User Management

To make user management easier I included a CLI tool for creating, listing and deleting users. Here are some example commands:

#### Create a new user

	./manage_users.py --action create --sms 13231234567 --team DET --notify-before-minutes 15

Where `--sms` is the user's SMS phone number, `--team` is the [3-letter abbreviation](https://en.wikipedia.org/wiki/Template:NHL_team_abbreviations){:target="_blank"} for the user's favourite NHL team and `--notify-before-minutes` is the number of minutes prior to game start time that the user would like to be notified at.

#### List users

	./manage_users.py --action list
	
Example output:

```	
Retrieving user list from DynamoDB..
2 users successfully loaded
+----------+-------------+-----------------------+------+--------------------------------+---------------------+
|    Id    |  SmsNumber  | SmsNumberIsSubscribed | Team | MinutesToNotifyBeforeGameStart |     LastNotified    |
+----------+-------------+-----------------------+------+--------------------------------+---------------------+
| 769d1308 | 13231234567 |          True         | DET  |               15               | 2019-10-23 16:15:00 |
| a2334dbd | 19051234567 |          True         | TOR  |               10               | 2019-10-26 15:50:00 |
+----------+-------------+-----------------------+------+--------------------------------+---------------------+
```

### Project Documentation

For more information on deploying the NHL Game Notifier to your AWS account and the specific usage of user management CLI, please refer to the project's [README.md](https://github.com/mechtron/nhl-game-notifier/blob/master/README.md){:target="_blank"}.

---
layout: post
title: "SSL Certificate Checker"
permalink: /ssl-certificate-checker/
---

The year is 2020 and we're still forgetting to renew our SSL certificates. Just last week, [Microsoft's failure](https://arstechnica.com/gadgets/2020/02/yesterdays-multi-hour-teams-outage-was-due-to-an-expired-ssl-certificate/){:target="_blank"} to renew a SSL certificate caused 3 hours of downtime for their Teams and Hotmail applications, an oversight that affected 20 million users.

But I must be honest, I've worked in the DevOps space for nearly 7 years now and regardless of the company, this seemed to be a common problem. I've personally made conscious efforts to migrate towards managed services like [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/){:target="_blank"} for auto-rotating my system's certificates, but in many situations (like with legacy or 3rd-party systems) migrating to such a service might not be feasible. For those types of systems it's crucial that we have a well-defined process to ensure all certificates get renewed and rotated before they expire. I know this sounds obvious but as companies and their systems grow, they tend to amass a heterogeneous collection of SSL certificates, many of which expire at different times and may even be signed by different CAs.

This is why I created [ssl-cert-checker](https://github.com/mechtron/ssl-cert-checker){:target="_blank"}, a Lambda function that checks a list of hostnames for broken SSL connectivity. It is currently able to identify 20 different failure modes including cert expiry, invalid hostnames and broken cert chains ([full list here](https://github.com/mechtron/ssl-cert-checker#detected-failure-modes){:target="_blank"}). Should any check fail, alerts with failure information are sent via email.

### Project Goals

1. Get notified of expiring certificates in advance (configurable duration)
1. 100% serverless solution
1. Detection of many SSL failure modes including cert expiry, improper hostnames and broken cert chains
1. CLI tool for managing the inventory of hostnames to monitor
1. Per-hostname configurable check frequency and alert recipients
1. Audit trail for failed checks
1. IaC written in Terraform v0.12
1. All provisioned infrastructure should fit within AWS's free tier

### Example Notification

<img src="{{ site.url }}/images/ssl-cert-checker/example_email_notification.png" width="600">

### GitHub Repo

[mechtron/ssl-cert-checker](https://github.com/mechtron/ssl-cert-checker){:target="_blank"}

This repo includes everything needed to deploy my SSL Certificate Checker to your own AWS account:

- Application code written in Python 3 (`/checker`)
- Terraform code for provisioning AWS resources (`/terraform`)
- User management CLI script (`manage.py`)

For more information, see the project's [README.md](https://github.com/mechtron/ssl-cert-checker/blob/master/README.md){:target="_blank"}.

### AWS Infrastructure

#### Resources

All of the AWS resources provisioned for this project fit within [AWS's always-free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free){:target="_blank"}:

- Lambda function triggered by CloudWatch Events (fires every 5 minutes)
- DynamoDB table for hostname list and persisting failed checks
- CloudWatch Log Stream for Lambda function output
- SES for email notifications

#### Infrastructure diagram

<img src="{{ site.url }}/images/ssl-cert-checker/cloudcraft.jpg" width="500">

### Managing Checks

Managing the list of hostnames to continually check for SSL issues is easy using the included CLI tool:

#### Create a new check

To create a new SSL check, use the `create` action:

	ssl-cert-checker --action create --hostname example.com --notification-target admin@example.com

Example output:
	
	New on-going SSL check for example.com successfully created

#### List all checks

You can list all hostnames to check for SSL issues using the `list` action:

	ssl-cert-checker --action list

Example output:

```
Retrieving list of ongoing SSL checks from DynamoDB..
2 SSL check(s) successfully loaded
+----------+-------------+------+----------------------+--------------------+-----------------------+------------------------------------+----------------------------+---------------------+---------------------+-------------------------+---------------------------+---------------------+
|    Id    |   Hostname  | Port | CheckIntervalMinutes | NotificationTarget | SubscriptionEmailSent | NotificationMinutesBeforeResending | CertExpiryNotifyBeforeDays |     LastChecked     |     LastFailure     | LastFailureNotification | FailedChecksRetentionDays |       Created       |
+----------+-------------+------+----------------------+--------------------+-----------------------+------------------------------------+----------------------------+---------------------+---------------------+-------------------------+---------------------------+---------------------+
| 45068762 | example.com | 443  |          15          | admin@example.com  |         True          |                 30                 |             30             | 2019-11-13 00:46:23 | 2019-11-13 00:46:23 |   2019-11-13 00:18:12   |            120            | 2019-11-12 01:29:03 |
| cfde538c |  example.ca | 443  |          15          | admin@example.com  |         True          |                 30                 |             30             | 2019-11-13 00:46:24 | 2019-11-13 00:46:24 |   2019-11-13 00:18:15   |            120            | 2019-11-12 01:29:06 |
+----------+-------------+------+----------------------+--------------------+-----------------------+------------------------------------+----------------------------+---------------------+---------------------+-------------------------+---------------------------+---------------------+
```

#### List all check failures

You can list all failures for all hostnames using the `list-failures` action:

	ssl-cert-checker --action list-failures

Example output:

```
Retrieving list of failed SSL checks from DynamoDB..
5 failed checks loaded
+----------+----------+---------------------+-------------------------+---------------------+
|    Id    | CheckId  |   FailureTimestamp  |       FailureMode       |      CertExpiry     |
+----------+----------+---------------------+-------------------------+---------------------+
| 4d35475d | 45068762 | 2019-11-13 00:46:23 | SSL_CERTIFICATE_EXPIRED | 1969-12-31 15:59:59 |
| 9b7b1b7a | cfde538c | 2019-11-13 00:46:24 |     INVALID_HOSTNAME    | 1969-12-31 15:59:59 |
+----------+----------+---------------------+-------------------------+---------------------+
```

### Project Documentation

For more information on deploying `ssl-cert-checker` to your AWS account and the specific usage of the `ssl-cert-checker` CLI tool, please refer to the project's [README.md](https://github.com/mechtron/ssl-cert-checker/blob/master/README.md){:target="_blank"}.

### Similar Projects

Already use Nagios? Check out the [check_ssl_cert](https://matteocorti.github.io/check_ssl_cert/){:target="_blank"} plugin.

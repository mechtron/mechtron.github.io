---
layout: post
title: "Jira to Google Sheets Exporter"
---

About a month ago, the engineering managers at GumGum were tasked with coming up with ways to visualize our Jira sprint data to answer questions related to things like development velocity and defect rates over time. It soon became obvious that Jira's built-in tools wouldn't cut it and some managers opted to integrate external tools like [Looker](https://looker.com/partner-network/atlassian){:target="_blank"} and [Redash](https://redash.io/help/data-sources/querying/jira){:target="_blank"}. While those tools do have their merits (like user familiarity and beautiful UIs), I wanted a solution that was simpler and *free*.

I decided to use plain old spreadsheets to process my Jira project's data. I know, that's not very cool but in my opinion, simple is cool and I personally love working with Google Spreadsheets. Also I knew I could easily capture the necessary insights if I had all the data. After a bit of Googling, I quickly learned that there was no easy way to sync Jira project data to Google Sheets without using advanced reporting tools or building ETL pipelines. This is why I created [`jira-gsheets-exporter`](https://github.com/mechtron/jira-gsheets-exporter){:target="_blank"}, a Lambda function that runs every hour and syncs a specific Google Sheet with your Jira project data in a table format that is customizable via a yaml configuration file.

After setting up `jira-gsheets-exporter`, I found it easy to create additional spreadsheets to answer questions about velocity, bugs and key initiatives over time. All of these were automatically derived from the always up-to-date Jira Data tab.

### Example

Suppose you wanted to:

1. Sync data from the Jira instance `your-company.jira.com`
1. From the Jira project `DEV`
1. To a Google Sheet called `DEV Project Analyzer`
1. Under the Google Sheet tab called `Jira Data`
1. With columns `Issue ID`, `Summary`, `Issue Type` and `Status`

You could specify the following config yaml:

```
jira:
  base_url: your-company.jira.com
  project_name: DEV
  max_issues_to_fetch: 10000

google_sheets:
  sheet_name: DEV Project Analyzer
  tab_name: Jira Data

report_columns: 
  - column_name: Issue ID
	type: key
	key: key
  - column_name: Summary
	type: field
	field_name: summary
  - column_name: Issue Type
	type: field
	field_name: issuetype.name
  - column_name: Status
	type: field
	field_name: status.statusCategory.name
```

(all field names follow the Jira API [Issue response shape](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-rest-api-3-issue-issueIdOrKey-get){:target="_blank"})

Once deployed with the built-in [GitHub Actions workflow](https://github.com/mechtron/jira-gsheets-exporter/blob/master/.github/workflows/main.yml){:target="_blank"}, you get the following always up-to-date table in Google Sheets:

<img src="{{ site.url }}/images/jira-gsheets-exporter/gsheet-example.png" width="800">

From there you can add additional columns like:

##### `Assignee`

```
- column_name: Assignee
  type: field
  field_name: assignee.displayName
```

##### `Creator`

```
- column_name: Creator
  type: field
  field_name: creator.displayName
```

##### `Story Points`

```
- column_name: Story Points
  type: field
  field_name: customfield_10013
```

NOTE: your `customfield` ID will differ

##### `Date Created`

```
- column_name: Date Created
  type: field
  field_name: created
  date_formatter: google_sheets
```

##### `Date Last Status Change`

```
- column_name: Date Last Status Change
  type: field
  field_name: statuscategorychangedate
  date_formatter: google_sheets
```

##### `Issue Link`

```
- column_name: Link
  type: issue_link
```

### Project Goals

1. Easily export Jira project data to a single Google Sheet
1. Scalable: process Jira projects with large issue counts (10k+)
1. Define Google Sheet columns using a single simple yaml config file
1. 100% serverless
1. Solution deployed by GitHub Actions (includes a `test` environment)

### GitHub Repo

[`mechtron/jira-gsheets-exporter`](https://github.com/mechtron/jira-gsheets-exporter){:target="_blank"}

This repo includes step-by-step instructions to deploy `jira-gsheets-exporter` to your own AWS account. At a high-level, the process is:

1. Fork the repo
1. Populate the required secrets
1. Update the `prod` environment's config

For more detail, see the project's [README](https://github.com/mechtron/jira-gsheets-exporter/blob/master/README.md){:target="_blank"}.

#### Config yaml

Here are the supported configuration parameters:

- **`jira.base_url`** (`String`): Your Jira project's base URL. Example: `your-company.jira.com`.
- **`jira.project_name`** (`String`): The project key of the Jira project to fetch issues for
- **`jira.max_issues_to_fetch`** (`Integer`): Max Jira project issues to fetch
- **`google_sheets.sheet_name`** (`String`): Name of the Google Sheet document
- **`google_sheets.tab_name`** (`String`): Name of the tab within the Google sheet to sync data to
- **`report_columns[].column_name`** (`String`): Name of the Google Sheet column
- **`report_columns[].type`**: The type of Jira issue data to export. Allowed values: `key`, `field` or `issue_link`. Also required if specified: If `type=key`: `key`, if `type=field`: `field_name`.
- **`report_columns[].regex_capture`**: *Advanced*: select a substring of a field's value. Allowed values: Regex `String` with capture group.
- **`report_columns[].date_formatter`**: *Advanced*: convert a selected field's value to a Google-sheet friendly date format. If specified, value also required: `google_sheets`.

### Infrastructure

#### Resources

All of the AWS resources provisioned for this project fit within [AWS's always-free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free){:target="_blank"}:

- Lambda function triggered by CloudWatch Events (fires every 1 hour)
- CloudWatch Log Stream for Lambda function output
- SES for email notifications

#### Infrastructure diagram

<img src="{{ site.url }}/images/jira-gsheets-exporter/drawio.jpg" width="600">

### Project Documentation

For more information on deploying `jira-gsheets-exporter` to your AWS account please refer to the project's [README](https://github.com/mechtron/jira-gsheets-exporter/blob/master/README.md){:target="_blank"}.

# Overview #

 * Go to cf.example.com

# Security #

## Auditing & Compliance ##

1. Security Hub https://console.aws.amazon.com/securityhub
1. GuardDuty https://ap-southeast-2.console.aws.amazon.com/guardduty
1. Config https://ap-southeast-2.console.aws.amazon.com/config

Come back to review:
 * CIS best practices - fixing IAM policy
 * Config auto-remediation

## Encryption ##

1. DynamoDB https://console.aws.amazon.com/dynamodb
1. S3 https://console.aws.amazon.com/s3
1. ACM

# Developer Experience #

## CI/CD + ZDT ##

Run `date`
Run `availability-test.sh`
 * Go to CodeCommit and edit index.html
 * Uncomment line 76, then:
 * Go to https://ap-southeast-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/acorn-pipeline/view
 * Click `Details` to look at logs
 * Go to http://cf.example.com/ to view updated page

Run `date` again!

## Infracocde ##

 * CloudFormation https://ap-southeast-2.console.aws.amazon.com/cloudformation
 * CodeCommit https://ap-southeast-2.console.aws.amazon.com/codesuite/codecommit

## Demonstrate API Usage ##

1. Go to Postman
1. Run `add report`
1. Go to https://cf.example.com/reports.html

## Throttling/Metering ##

1. Go to API Gateway https://ap-southeast-2.console.aws.amazon.com/apigateway/home?region=ap-southeast-2#/
1. Usage Plans -> Acorn -> Quota
1. Go to Postman
1. Run `add report (with API key)`
1. For API-wide throttling, go to API -> Stages -> Settings -> Default Throttling

## Local API deployment ##

1. `cd backend`
1. `sam local start-api`
1. Go to Postman and get `localhost:3000/get`

# Load Testing #

## Serverless ##

1. CloudFront, API Gateway, Lambda, DynamoDB

## DDoS Protection
1. Route53
1. CloudFront
1. WAF - OWASP Top 10 https://console.aws.amazon.com/wafv2

## Demonstration ##

 * 96 CPUs, 768G RAM, 25Gbps

```
aws ec2 --profile sap start-instances --instance-id i-0ded00433e3a04bc1
IP=`aws ec2 --profile sap describe-instances --instance-id i-0ded00433e3a04bc1 | jq --raw-output .Reservations[].Instances[].PublicIpAddress`
ssh ubuntu@$IP -i ~/.ssh/sap.pem
cd vegeta && ./run.sh &
sudo iftop
exit
aws ec2 --profile sap stop-instances --instance-id i-0ded00433e3a04bc1
```

## Monitoring ##

 * Head to CloudWatch https://ap-southeast-2.console.aws.amazon.com/cloudwatch

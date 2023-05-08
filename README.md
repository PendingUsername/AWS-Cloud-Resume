# AWS-Cloud-Resume
cloud resume challenge

This repository contains the code for my Cloud Resume Challenge project, which is an initiative to showcase my skills in developing and deploying a modern web application using AWS services.

---
Check out my blog post on what the technologies used and how I completed the challenge: https://pendingusername.github.io/
---

The architecture of the project is as follows:

The frontend of the web application is built using HTML, CSS, and JavaScript and is hosted on Amazon S3.
Amazon CloudFront is used to distribute the web application and improve its performance.
The web application interacts with a RESTful API built using AWS Lambda and Amazon API Gateway. The API is responsible for handling user requests and retrieving and storing data in Amazon DynamoDB.
IAM is used to manage access to AWS resources for users and services.
ACM is used to manage SSL/TLS certificates for secure communication between the web application and the API.
DynamoDB is used to store and retrieve data for the web application.
Github Actions is used to automatically build and deploy the web application to S3 and the API to Lambda.
Route 53 is used to route user requests to the CloudFront distribution.
AWS Firewall Manager is used to manage security rules for the web application.

---

Deployment
The deployment process for the project is fully automated using Github Actions and Terraform. When changes are pushed to the Github repository, Github Actions builds and deploys the web application to S3 and the API to Lambda. Terraform is used to manage the AWS resources and automate the infrastructure deployment process. Lean more here: (https://www.terraform.io/)

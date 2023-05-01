# aws-cloud-resume
cloud resume challenge

This repository contains the code for my Cloud Resume Challenge project, which is an initiative to showcase my skills in developing and deploying a modern web application using AWS services.

Technologies Used
The following technologies were used in this project:

Amazon S3 - A highly scalable object storage service that allows you to store and retrieve data from anywhere on the web.
AWS CloudFront - A fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.
AWS Identity and Access Management (IAM) - A web service that helps you securely control access to AWS resources for your users. You use IAM to control who can use your AWS resources (authentication) and what resources they can use and in what ways (authorization).
AWS Certificate Manager (ACM) - A service that lets you easily provision, manage, and deploy SSL/TLS certificates for use with AWS services and your internal connected resources.
AWS Lambda - A compute service that runs your code in response to events and automatically manages the compute resources for you, making it easy to build applications that respond quickly to new information.
Amazon DynamoDB - A fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.
Github Actions - An automation platform that allows you to build, test, and deploy your code right from Github.
Python - An interpreted, high-level, general-purpose programming language that is widely used in web development, scientific computing, data analysis, artificial intelligence, and more.
Java - A popular programming language used for building enterprise applications, web applications, and Android apps.
CSS - A style sheet language used for describing the presentation of a document written in HTML.
HTML - A markup language used for creating web pages.
Amazon Route 53 - A highly available and scalable cloud Domain Name System (DNS) web service that connects user requests to infrastructure running in AWS.
AWS Firewall Manager - A security management service that allows you to centrally configure and manage AWS WAF rules across your accounts and applications.
Terraform - An open-source infrastructure as code (IaC) tool that allows you to create, modify, and manage infrastructure resources declaratively.
Architecture
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
Deployment
The deployment process for the project is fully automated using Github Actions and Terraform. When changes are pushed to the Github repository, Github Actions builds and deploys the web application to S3 and the API to Lambda. Terraform is used to manage the AWS resources and automate the infrastructure deployment process.

To deploy the project, follow these steps:

Clone the Github repository to your local machine.
Install Terraform on your machine.
Create an AWS

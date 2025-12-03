📦 Details Web Service — Node.js + Docker + CI/CD

A complete Web + Backend demo service built using HTML, CSS, JavaScript, Node.js, Express, fully containerized with Docker, and automated using GitHub Actions CI/CD to build and push the image to Docker Hub.

This project demonstrates modern DevOps practices including:

Docker containerization

Node.js backend service

Static web frontend

Automated CI/CD pipeline

GitHub Actions workflow configuration

Docker Hub registry integration

🚀 Features
Frontend

Responsive static website

Clean professional UI

Footer, animations, and JS interactions

Image assets included

Backend

Built with Node.js + Express

Serves the frontend files

Basic API structure ready for extension

Runs fully inside Docker

DevOps

Dockerfile for packaging the entire application

.dockerignore to optimize build size

Automated build & push using GitHub Actions

CI/CD pipeline triggered on every push to main

🐳 Docker Support
Build Docker Image
docker build -t am7soft/details-service .

Run Container
docker run -p 3000:3000 am7soft/details-service


App is available on:

http://localhost:3000

⚙️ CI/CD Pipeline (GitHub Actions)

This repository contains a complete CI/CD workflow:

🛠 Pipeline Steps

Checkout code

Install Node.js dependencies

Login to Docker Hub (using encrypted secrets)

Build Docker image

Push image automatically to Docker Hub

📂 Workflow File

Located at:

.github/workflows/ci.yml

Triggers

Runs automatically on each push to the main branch

Builds and updates the latest Docker image

🔐 Secrets Used
Secret Name	Description
DOCKER_USERNAME	Docker Hub username
DOCKER_PASSWORD	Docker Hub password/token

These are securely stored in:
Repo → Settings → Secrets → Actions

📁 Project Structure
├── .github/workflows/ci.yml   # CI/CD pipeline
├── Dockerfile                  # Docker build instructions
├── .dockerignore               # Excluded files during build
├── server.js                   # Node.js backend
├── index.html                  # Frontend page
├── styles.css                  # Frontend styling
├── script.js                   # Frontend logic
├── images/                     # Static assets
└── package.json                # Node.js config

🌐 Future Enhancements

Deploy to AWS EC2 using CD

Add API endpoints

Add database integration (MongoDB / PostgreSQL)

Add Nginx reverse proxy

HTTPS support using Certbot

👨‍💻 Author

Amro Housam Aldeen

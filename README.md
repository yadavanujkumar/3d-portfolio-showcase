# 3D Portfolio Showcase

## Overview
The 3D Portfolio Showcase is a web application that allows users to display their portfolio in an interactive 3D environment. The backend is built with Python (Flask), and the frontend uses JavaScript with Three.js for rendering 3D models.

## Features
- Interactive 3D portfolio display.
- Backend API for managing portfolio items.
- Dockerized for easy deployment.

## Tech Stack
- Python (Flask) for the backend.
- JavaScript (Three.js) for the frontend.
- Docker for containerization.

## Setup Instructions

### Prerequisites
- Docker installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 3d-portfolio-showcase
   ```
2. Build and run the Docker container:
   ```bash
   docker-compose up --build
   ```
3. Access the application at `http://localhost:5000`.

## Directory Structure
```
.
├── README.md
├── backend
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── requirements.txt
├── frontend
│   ├── index.html
│   ├── app.js
│   ├── styles.css
├── docker-compose.yml
├── Dockerfile
```

## License
MIT License
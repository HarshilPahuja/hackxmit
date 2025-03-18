Deepfake Detection Application

Demo Video - https://drive.google.com/file/d/1C1Ar2aGq2w6EIfZMIi6jOnf6yGQ3GzMR/view?usp=sharing


Deepfake Detection Web App

This repository contains a deepfake detection web application built using Flask. The project allows users to upload media files and analyze them for deepfake content.

Project Structure
Deepfake-Detection/
│-- static/
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│   │   ├── script.js
│-- templates/
│   ├── index.html
│   ├── result.html
│-- deepfakedetection.py  # Pre-trained deepfake detection model (cannot be run directly)
│-- app.py  # Flask application (requires Flask to run)

Notes

deepfakedetection.py is a pre-trained model script and cannot be executed directly.

app.py is the main Flask file that handles routing and file uploads. Ensure Flask is installed before running it.


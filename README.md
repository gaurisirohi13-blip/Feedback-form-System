# Feedback Form System

A full-stack web application developed as part of the **Spectent Services – Build, Break & Explain Internship Assignment**.

This project demonstrates:

* Frontend development
* Backend API integration
* Input validation
* Error handling
* Testing mindset
* Full project deployment

## Live Demo

**Deployed Application:** https://feedback-form-system-lilac.vercel.app

## Project Overview

The Feedback Form System is designed to collect user feedback through a clean and responsive interface. The application validates user inputs, processes requests through a backend API, and stores submitted feedback in memory.

The main goal of this project was to build a working solution while also thinking about possible failures, improvements, and scalability.

## Features

### Frontend

* Responsive feedback form UI
* Full Name input field
* Email Address field
* Subject dropdown
* Rating selection
* Feedback message textarea
* Submit button
* Success / Error response message

### Backend

* REST API endpoint: `POST /feedback`
* Required field validation
* Email format validation
* Error response handling
* In-memory feedback storage
* CORS support

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Deployment

* Vercel

## Project Structure

Feedback-form-System/
│── index.html
│── style.css
│── server.js
│── package.json
│── vercel.json
│── README.md

## API Endpoint

### POST /feedback

Sample Request:

```json
{
  "name": "Gauri",
  "email": "gauri@example.com",
  "feedback": "This is sample feedback."
}
```

Sample Response:

```json
{
  "message": "Feedback submitted successfully!"
}
```

## Testing & Failure Analysis

During development, several possible failure scenarios were identified:

1. Empty input fields
2. Invalid email format
3. Duplicate submissions
4. Long feedback messages
5. Network interruption during submission
6. Backend unavailability
7. Unexpected API errors
8. Invalid user input
9. Browser compatibility issues
10. High traffic load

## Improvements Implemented

* Added required field validation
* Added email format verification
* Improved UI for better usability
* Added proper success / error response handling

## Trade-offs

To keep the project simple and lightweight:

* In-memory storage was used instead of a database
* Authentication was not added
* Dashboard/analytics features were excluded

## Future Enhancements

* Database integration
* Admin dashboard
* Feedback analytics
* User authentication
* Rate limiting
* Email notifications
* Cloud scaling support

## Deployment

This project is deployed on Vercel and accessible at:

https://feedback-form-system-lilac.vercel.app

## Author

**Gauri**


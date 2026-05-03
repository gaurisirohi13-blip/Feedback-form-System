# Feedback-form-System
## Project Overview

This project is developed as part of the **Spectent Services Internship Assignment**.
The objective of this assignment is to build a simple **Feedback Form System** with both frontend and backend functionality, test the system for possible failures, improve major issues, and explain the development approach.

---

## Features

* User-friendly feedback form interface
* Input fields for:

  * Full Name
  * Email Address
  * Subject
  * Rating
  * Feedback Message
* Submit button for sending feedback
* Success / Error message display
* Backend API for processing feedback
* Email format validation
* Required field validation
* In-memory data storage

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

---

## Project Structure

```text
Feedback-form-System/
│── index.html
│── style.css
│── server.js
│── package.json
│── README.md
```

---

## How to Run the Project

### 1) Install dependencies

```bash
npm install
```

### 2) Start server

```bash
node server.js
```

### 3) Run frontend

Open `index.html` in browser.

---

## API Endpoint

### POST /feedback

This endpoint receives feedback data from users and validates:

* Required fields
* Valid email format

After validation, feedback is stored in memory and a success message is returned.

---

## Possible Failure Cases Identified

1. Empty input fields
2. Invalid email format
3. Duplicate submissions
4. Server connection failure
5. Very long feedback message
6. Invalid characters in input
7. Slow network response
8. High traffic load
9. Browser compatibility issues
10. Unexpected server crash

---

## Improvements Made

### 1. Input Validation

Added required field validation to prevent empty submissions.

### 2. Email Verification

Added email format checking for accurate data.

### 3. Improved UI Design

Created a clean and responsive interface for better user experience.

---

## Development Approach

The system was designed with simplicity and functionality in mind.
A clean frontend was developed for collecting user feedback, while a lightweight backend API handles validation and data storage.

### Trade-offs

* Used in-memory storage instead of a database for simplicity
* Basic backend structure without authentication

### Future Improvements

* Database integration
* Admin dashboard
* Feedback analytics
* User authentication
* Cloud deployment support

---

## Scalability Consideration

If 10,000 users use the system at the same time:

* Server load may increase
* Memory storage may become inefficient
* Response time may slow down

Possible solutions:

* Database storage
* Load balancing
* Cloud hosting
* Caching mechanism

---

## Author

**Gauri**

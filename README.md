# DevOpsCA2
# Student Feedback Registration Form (DevOps CA2)

## Overview

This project is a complete Student Feedback Registration Form developed using HTML, CSS, and JavaScript with proper form validation. The project also includes automated testing using Selenium and execution through Jenkins to demonstrate basic DevOps practices.

The main goal of this project is to design a user-friendly form, validate inputs effectively, and automate testing and execution.

---

## Features

* Clean and responsive UI design
* Input validation using JavaScript
* Real-time error messages for user inputs
* Mandatory field checking
* Regex-based validation (email, mobile number)
* Minimum word validation for feedback comments
* Automated form testing using Selenium
* Jenkins integration for automated execution

---

## Technologies Used

* HTML – for structure of the form
* CSS – for styling and layout
* JavaScript – for validation and event handling
* Selenium (Python) – for automation testing
* Jenkins – for running automated test cases
* GitHub – for version control and project hosting

---

## Form Fields

The form includes the following fields:

* Student Name
* Email ID
* Mobile Number
* Department (Dropdown)
* Gender (Radio Buttons)
* Feedback Comments
* Submit Button
* Reset Button

---

## Validation Implemented

* Student Name must not be empty
* Email must follow proper format (using regex)
* Mobile Number must contain exactly 10 digits
* Department must be selected
* At least one gender must be selected
* Feedback must contain minimum 10 words

All validations are handled using JavaScript with events like:

* oninput
* onchange
* onsubmit

---

## Selenium Automation

Selenium is used to automate the following:

* Opening the form in browser
* Entering valid data in all fields
* Selecting dropdown and radio buttons
* Submitting the form

This ensures the form works correctly without manual testing.

---

## Jenkins Integration

Jenkins is used to automate execution of the Selenium script.

Steps performed:

* Created a Jenkins job
* Configured build step to run Python script
* Executed test automatically
* Verified build success

This demonstrates basic Continuous Integration (CI).

---

## Project Structure

```
DevOpsCA2/
│
├── feedback.html
├── style.css
├── script.js
├── test_feedback.py
├── Jenkinsfile (optional)
└── README.md
```

---

## How to Run the Project

### Run Form

1. Open `feedback.html` in browser

### Run Selenium Test

```bash
python3 test_feedback.py
```

### Run with Jenkins

* Create job
* Add build step
* Execute Python script

---

## Conclusion

This project successfully demonstrates:

* Frontend form design
* JavaScript validation
* Automated testing using Selenium
* CI automation using Jenkins

It combines both development and DevOps concepts in a single practical implementation.

---

## Author

Shlok Vij
B.Tech CSE

---

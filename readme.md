# Google Forms Auto-Submission Script

This project automates the submission of Google Forms using Selenium WebDriver and form data provided in a JSON file. The script takes each submission from the JSON, constructs a Google Forms URL with pre-filled values, and submits the form programmatically.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/google-forms-submission.git
cd google-forms-submission

```

### 2. Install Dependencies

```bash
    npm install
```

### Get the Google Form URL and construct the pre-filled URL

1. Open the Google Forms and click on the three dots on the top right corner.
2. Click on the "Get pre-filled link" option.
3. Fill the form with the data you want to submit and click on the "Get link" button.
4. Replace the form URL in the script.js file with the pre-filled URL.
5. Collect the data as a json array and load it, see the sample_submissions.json file for reference
6. Replace the `entry_xxxx` with the actual entry id in the URL.

### 3. Run the Script

```bash
    node script.js
```

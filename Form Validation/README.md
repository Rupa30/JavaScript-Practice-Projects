# Form Validation Page

This is a simple web page featuring a form with validation for name, phone number, email, and message fields.

## Features

- Name Validation: Validates if the name field is not empty and contains a full name (first and last).
- Phone Number Validation: Validates if the phone number field is not empty, contains 10 digits, and only digits.
- Email Validation: Validates if the email field is not empty and follows the standard email format.
- Message Validation: Validates if the message field contains at least 30 characters.

## How it Works

1. **Input Validation**: Each input field is validated as the user types.
2. **Validation Icons**: Validation status is indicated with icons (checkmark or error symbol).
3. **Error Messages**: Error messages are displayed below each input field for invalid input.
4. **Form Submission**: The form is submitted only if all fields are validated successfully.
5. **Submit Error Handling**: If there are validation errors upon submission, a message prompts the user to fix them.

## Usage

1. Open the `index.html` file in your web browser.
2. Enter your details in the form fields.
3. The form will validate your input as you type.
4. If there are any errors, correct them according to the provided error messages.
5. Once all fields are filled correctly, click the "Submit" button to submit the form.

## Dependencies

- Font Awesome: Used for the paper plane icon in the form. The library is included via CDN.

## Customization

- Styles: Modify the CSS styles in `style.css` to adjust the appearance of the form.
- Validation Logic: Customize the validation rules in `script.js` to suit your specific requirements.


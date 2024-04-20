// Selecting the input element and button
const inputDate = document.getElementById('date');
const calculateButton = document.querySelector('.input-box button');
const ageDisplay = document.getElementById('ageDisplay');

// Adding click event listener to the button
calculateButton.addEventListener('click', () => {
    // Getting the selected date from the input
    const selectedDate = new Date(inputDate.value);

    // Calculating the current date
    const currentDate = new Date();

    // Check if selected date is in the future
    if (selectedDate > currentDate) {
        ageDisplay.textContent = "Please select a date in the past.";
        return; // Stop execution if date is in the future
    }

    // Calculating the age
    let years = currentDate.getFullYear() - selectedDate.getFullYear();
    let months = currentDate.getMonth() - selectedDate.getMonth();
    let days = currentDate.getDate() - selectedDate.getDate();

    // Adjusting months and days if necessary
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
    }

    // Creating a string to display the age
    const ageDisplayText = `You are ${years} years, ${months} months, and ${days} days old.`;

    // Displaying the age
    ageDisplay.textContent = ageDisplayText;
});

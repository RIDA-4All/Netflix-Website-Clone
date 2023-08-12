// JavaScript for the Netflix Website Clone

// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion li');
accordionItems.forEach(item => {
    const label = item.querySelector('label');
    label.addEventListener('click', () => {
        const content = item.querySelector('.content');
        content.classList.toggle('open');
    });
});

// Email signup form submission
const emailForm = document.querySelector('.email-signup');
emailForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailInput = emailForm.querySelector('input[type="email"]');
    const enteredEmail = emailInput.value;
    // Perform further actions like sending the email to the server or showing a confirmation message
    // For now, let's log the entered email to the console
    console.log(`Email submitted: ${enteredEmail}`);
    // Clear the input field
    emailInput.value = '';
});

// Get references to the subject buttons
const subjectButtons = document.querySelectorAll('.subject-button');

// Add a click event listener to each subject button
subjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.textContent.toLowerCase();
        // Assuming you have separate HTML pages for each subject
        window.location.href = `${subject}.html`;
    });
});

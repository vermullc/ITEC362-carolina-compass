document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const checkboxes = document.querySelectorAll("input[name='feedback']");

    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];

        // Validate Name
        if (nameInput.value.trim() === "") {
            errors.push("Name is required.");
        }

        // Validate Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            errors.push("Message is required.");
        }

        // Validate at least one checkbox selected
        const atLeastOneChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (!atLeastOneChecked) {
            errors.push("Please select at least one feedback category.");
        }

        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            alert(errors.join("\n")); // Display error messages in an alert
        }
    });
});

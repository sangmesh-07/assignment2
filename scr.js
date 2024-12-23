document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const resultCard = document.getElementById("result");
    const displayData = document.getElementById("displayData");

    // Initially hide the result card
    resultCard.style.display = "none";

    // Form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("address").value;

        // Display data dynamically
        displayData.innerHTML = `
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;

        // Show the result card
        resultCard.style.display = "block";

        // Reset the form
        form.reset();
    });
});

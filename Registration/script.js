document.getElementById("myForm").addEventListener("submit", function(event) {

    // Prevent form submission
    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let password = document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let terms =
        document.getElementById("terms").checked;


    // Email validation pattern
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Phone validation pattern
    // Exactly 10 digits
    let phonePattern =
        /^[0-9]{10}$/;


    // Clear old messages
    document.getElementById("error").innerText = "";

    document.getElementById("success").innerText = "";


    // Check all details
    if (
        name === "" ||
        !emailPattern.test(email) ||
        !phonePattern.test(phone) ||
        password.length < 6 ||
        password !== confirmPassword ||
        !terms
    ) {

        // If details are incorrect
        document.getElementById("error").innerText =
            "Enter correct details. Registration cannot be done.";

    }

    else {

        // If details are correct
        document.getElementById("success").innerText =
            "Registration Successful!";

    }

});
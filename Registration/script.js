document.getElementById("myForm").addEventListener("submit", function(event) {

    // Stop form from submitting
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


    // Email pattern
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Phone pattern
    let phonePattern =
        /^[0-9]{10}$/;


    // Name validation
    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    // Email validation
    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // Phone validation
    if (phone === "") {

        alert("Please enter your phone number.");

        return;
    }


    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10 digit phone number.");

        return;
    }


    // Password validation
    if (password === "") {

        alert("Please enter your password.");

        return;
    }


    if (password.length < 6) {

        alert("Password must be at least 6 characters.");

        return;
    }


    // Confirm password validation
    if (confirmPassword === "") {

        alert("Please confirm your password.");

        return;
    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    // Terms validation
    if (!terms) {

        alert("Please accept the terms and conditions.");

        return;
    }


    // Everything is correct
    alert("Registration Successful!");

});
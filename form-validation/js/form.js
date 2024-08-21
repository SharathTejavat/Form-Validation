function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function setValidationImage(elementId, isValid) {
    var elem = document.getElementById(elementId);
    if (isValid) {
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    } else {
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }
}

function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    var password = document.Form.password.value;
    var confirmPassword = document.Form['confirm-password'].value;
    var terms = document.Form.terms.checked;

    var nameErr = emailErr = mobileErr = countryErr = genderErr = passwordErr = confirmPasswordErr = termsErr = true;

    // Name validation
    if (name == "") {
        printError("nameErr", "Please enter your name");
        setValidationImage("name", false);
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (name.length < 5) {
            printError("nameErr", "Name must be at least 5 characters long");
            setValidationImage("name", false);
        } else if (!regex.test(name)) {
            printError("nameErr", "Please enter a valid name");
            setValidationImage("name", false);
        } else {
            printError("nameErr", "");
            nameErr = false;
            setValidationImage("name", true);
        }
    }

    // Email validation
    if (email == "") {
        printError("emailErr", "Please enter your email address");
        setValidationImage("email", false);
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email)) {
            printError("emailErr", "Please enter a valid email address");
            setValidationImage("email", false);
        } else {
            printError("emailErr", "");
            emailErr = false;
            setValidationImage("email", true);
        }
    }

    // Mobile number validation
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        setValidationImage("mobile", false);
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (!regex.test(mobile)) {
            printError("mobileErr", "Please enter a valid 10-digit mobile number");
            setValidationImage("mobile", false);
        } else {
            printError("mobileErr", "");
            mobileErr = false;
            setValidationImage("mobile", true);
        }
    }

    // Country validation
    if (country == "Select") {
        printError("countryErr", "Please select your country");
        document.getElementById("country").classList.add("input-4");
        document.getElementById("country").classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        document.getElementById("country").classList.add("input-3");
        document.getElementById("country").classList.remove("input-4");
    }

    // Gender validation
    if (!document.Form.gender.value) {
        printError("genderErr", "Please select your gender");
        document.getElementById("gender").classList.add("input-4");
        document.getElementById("gender").classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        document.getElementById("gender").classList.add("input-3");
        document.getElementById("gender").classList.remove("input-4");
    }

    // Password validation
    if (password == "") {
        printError("passwordErr", "Please enter your password");
        document.getElementById("password").classList.add("input-2");
        document.getElementById("password").classList.remove("input-1");
    } else if (password.length < 8) {
        printError("passwordErr", "Password must be at least 8 characters long");
        document.getElementById("password").classList.add("input-2");
        document.getElementById("password").classList.remove("input-1");
    } else if (password.toLowerCase() == "password" || password.toLowerCase() == name.toLowerCase()) {
        printError("passwordErr", "Password cannot be 'password' or your name");
        document.getElementById("password").classList.add("input-2");
        document.getElementById("password").classList.remove("input-1");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
        document.getElementById("password").classList.add("input-1");
        document.getElementById("password").classList.remove("input-2");
    }

    // Confirm Password validation
    if (confirmPassword == "") {
        printError("confirmPasswordErr", "Please confirm your password");
        document.getElementById("confirm-password").classList.add("input-2");
        document.getElementById("confirm-password").classList.remove("input-1");
    } else if (confirmPassword !== password) {
        printError("confirmPasswordErr", "Passwords do not match");
        document.getElementById("confirm-password").classList.add("input-2");
        document.getElementById("confirm-password").classList.remove("input-1");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
        document.getElementById("confirm-password").classList.add("input-1");
        document.getElementById("confirm-password").classList.remove("input-2");
    }

    // Terms and Conditions validation
    if (!terms) {
        printError("termsErr", "You must agree to the terms and conditions");
        document.getElementById("terms").classList.add("input-2");
        document.getElementById("terms").classList.remove("input-1");
    } else {
        printError("termsErr", "");
        termsErr = false;
        document.getElementById("terms").classList.add("input-1");
        document.getElementById("terms").classList.remove("input-2");
    }

    // Prevent form submission if there are errors
    if (nameErr || emailErr || mobileErr || countryErr || genderErr || passwordErr || confirmPasswordErr || termsErr) {
        return false;
    }

    return true; // Allow form submission if no errors
}

function validateName() {
    let x = document.getElementById("fullName").value;
    if (x.trim() === "") {
        throw "Error: Full name is required.";
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
        throw "Error: Invalid Email Address.";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        throw "Error: Password must be at least 8 characters.";
    }
}

function ConfirmPassword() {
    let x = document.getElementById("password").value;
    let y = document.getElementById("confirmPassword").value;
    if (x !== y) {
        throw "Error: Passwords do not match.";
    }
}

function validateForm() {
  
    try {
        validateName();
        
        validatePassword();
      
      ConfirmPassword();
        

        let elements = document.getElementById("hello").elements;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value.trim() === "" && elements[i].type !== "button") {
                throw "Error: All fields are required.";
            }
        }
      validateEmail();
        

        document.getElementById("feedback").innerHTML = '<span style="color:green">Registration successful!</span>';
    } catch (error) {
        document.getElementById("feedback").innerHTML = '<span style="color:red">' + error + '</span>';
    }
}
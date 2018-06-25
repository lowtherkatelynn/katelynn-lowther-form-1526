let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("submit-button");

let errFeedback = "Please submit your information correctly.";

function checkForm() {
    
    let errors = [];

    let formData = {};
    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (fullName.value) {
        formData.fullNameValue = fullName.value;
    } else {
        errors.push("Name is empty!");
    }
    if (email.value) {
        formData.emailValue = email.value;
        if(validateEmail(email.value === true)){
            
        } else {
            console.log("Email format is incorrect.")
        }
    } else {
        errors.push("Email is empty!");
    }
    if (message.value) {
        formData.messageValue = message.value;
    } else {
        errors.push("Message is empty!");
    }
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(formData);
    }
}

button.addEventListener("click", checkForm)
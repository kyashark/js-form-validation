
document.getElementById('signupForm').addEventListener('submit',(e)=>{
    if(!validateForm()){
        e.preventDefault();
    }
});


function validateForm(){

    const validations = [
        validateUsername,
        validateEmail,
        validatePassword,
        validateConfirmPassword
    ];

    let valid = true;
    for (const validate of validations) {
        valid = validate() && valid;
    }
    return valid;
}

function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');

    usernameError.textContent = "";

    if (username === "") {
        usernameError.textContent = "Username must be fill out";
        return false;
    } else {
        
        return true;
    }
}

function validateEmail(){
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    emailError.textContent = "";

    if(email === ""){
        emailError.textContent="Email must be fill out";
        return false;
    }
    else if(!email.match(emailPattern)){
        emailError.textContent = "Please enter a valid email address";
    }
    else{
        
        return true;
    }
}

function validatePassword(){
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');

    passwordError.textContent = "";

    if(password === ""){
        passwordError.textContent = "Password must be fill out";
        return false;
    }
    else if(password.length < 8){
        passwordError.textContent = "Password must be at least 8 characters long";
    }
    else if(!/[A-Z]/.test(password)){
        passwordError.textContent = "Password must contain at least one uppercase letter";
    }
    else if(!/\d/.test(password)){
        passwordError.textContent = "Password must contain at least one number";
    }
    else if(!/[!@#$%^&*]/.test(password)){
        passwordError.textContent = "Password must contain at least one symbol";
    }
    else{
       
        return true;
    }
}

function validateConfirmPassword(){
    const confirmPassword = document.getElementById('confirm-password').value;
    const password = document.getElementById('password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');

    confirmPasswordError.textContent = "";

    if(confirmPassword === ""){
        confirmPasswordError.textContent = "Confirm password must be fill out";
        return false;
    }
    else if(password !== confirmPassword){
        confirmPasswordError.textContent = "Confirm password do not match";
    }
    else{
        
        return true;
    }
}



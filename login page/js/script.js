const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    let errors = [];

    if(firstNameInput){
        errors = getSignUpErrors(firstNameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
    }else{
        errors = getLoginErrors(email.value, password.value);
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.innerText = errors.join(". ");
    }
});

function getSignUpErrors(firstname, email, password, confirmpassword){
    let errors = [];

    if(firstname === '' || firstname === null){
        errors.push('First name is required');
        firstNameInput.parentElement.classList.add('incorrect');
    }
    if(email === '' || email === null){
        errors.push('Email is required');
        emailInput.parentElement.classList.add('incorrect');
    }
    if(password === '' || password === null){
        errors.push('Password is required');
        passwordInput.parentElement.classList.add('incorrect');
    }
    if(password.length < 8){
        errors.push('password must have 8 or more characters');
        passwordInput.parentElement.classList.add('incorrect');
    }
    if(password !== confirmpassword){
        errors.push('password does not match confirm password');
        passwordInput.parentElement.classList.add('incorrect');
        confirmPasswordInput.parentElement.classList.add('incorrect')

    }

    return errors;
}

function getLoginErrors(email, password){
    let errors = [];

      if(email === '' || email === null){
        errors.push('Email is required');
        emailInput.parentElement.classList.add('incorrect');
    }
    if(password === '' || password === null){
        errors.push('Password is required');
        passwordInput.parentElement.classList.add('incorrect');
    }

    return errors;
}


const allInputs = [firstNameInput, emailInput, passwordInput].filter(input => input != null);

allInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            errorMessage.innerText = '';
        }
    })
})
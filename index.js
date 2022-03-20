


function validate(){
    // Cache the DOM
    var first_name = document.forms['form']['first-name'];
    var last_name =document.forms['form']['last-name'];
    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
    var first_name_error = document.getElementById('first-name-error');
    var last_name_error = document.getElementById('last-name-error');
    var email_error = document.getElementById('email-error');
    var password_error = document.getElementById('password-error');
    var first_name_icon = document.getElementById('first-name-icon');
    var last_name_icon = document.getElementById('last-name-icon');
    var email_icon = document.getElementById('email-icon');
    var password_icon = document.getElementById('password-icon');
    // validate first name
    if (first_name.value.trim().length > 2 && first_name.value.trim.length < 26){
        first_name.style.border = '2px solid hsl(154, 59%, 51%)';
        first_name_error.style.visibility = 'hidden';
        first_name_icon.style.visibility = 'hidden';
        first_name.focus();
    }
    else if(first_name.value.trim().length == 0){
        first_name.style.border = '2px solid hsl(0, 100%, 74%)';
        first_name_error.style.visibility = 'visible';
        first_name_icon.style.visibility = 'visible';
        first_name.focus();
        return false;
    }
    else if(first_name.value.trim().length < 3){
        first_name.style.border = '2px solid hsl(0, 100%, 74%)';
        first_name_error.style.visibility = 'visible';
        first_name_error.innerHTML = 'First Name too short';
        first_name_icon.style.visibility = 'visible';
        first_name.focus();
        return false;
    }
    else if(first_name.value.trim().length > 25){
        first_name.style.border = '2px solid hsl(0, 100%, 74%)';
        first_name_error.style.visibility = 'visible';
        first_name_error.innerHTML = 'First Name too long';
        first_name_icon.style.visibility = 'visible';
        first_name.focus();
        return false;
    }

    // validate last name
    if (last_name.value.trim().length > 2 && last_name.value.trim().length < 26){
        last_name.style.border = '2px solid hsl(154, 59%, 51%)';
        last_name_error.style.visibility = 'hidden';
        last_name_icon.style.visibility = 'hidden';
        last_name.focus();
    }
    else if(last_name.value.trim().length == 0){
        last_name.style.border = '2px solid hsl(0, 100%, 74%)';
        last_name_error.style.visibility = 'visible';
        last_name_icon.style.visibility = 'visible';
        last_name.focus();
        return false;
    }
    else if(last_name.value.trim().length < 3){
        last_name.style.border = '2px solid hsl(0, 100%, 74%)';
        last_name_error.style.visibility = 'visible';
        last_name_error.innerHTML = 'Last Name too short';
        last_name_icon.style.visibility = 'visible';
        last_name.focus();
        return false;
    }
    else if(last_name.value.trim().length > 25){
        last_name.style.border = '2px solid hsl(0, 100%, 74%)';
        last_name_error.style.visibility = 'visible';
        last_name_error.innerHTML = 'Last Name too long';
        last_name_icon.style.visibility = 'visible';
        last_name.focus();
        return false;
    }

    // validate email
    if(email.value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border = '2px solid hsl(154, 59%, 51%)';
        email_error.style.visibility = 'hidden';
        email_icon.style.visibility = 'hidden';
        email.focus();
    }
    else {
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email_error.style.visibility = 'visible';
        email_icon.style.visibility = 'visible';
        email.focus();
        return false;
    }
    // validate password
    if(password.value.trim().length >6 && password.value.trim().length < 17){
        password.style.border = '2px solid hsl(154, 59%, 51%)';
        password_error.style.visibility = 'hidden';
        password_icon.style.visibility = 'hidden';
        password.focus();
    }
    else if(password.value.trim().length == 0){
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password_error.style.visibility = 'visible';
        password_icon.style.visibility = 'visible';
        password.focus();
        return false;
    }
    else if(password.value.trim().length < 7){
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password_error.style.visibility = 'visible';
        password_error.innerHTML = 'Password too short';
        password_icon.style.visibility = 'visible';
        password.focus();
        return false;
    }
    else if(password.value.trim().length > 16){
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password_error.style.visibility = 'visible';
        password_error.innerHTML = 'Password too long';
        password_icon.style.visibility = 'visible';
        password.focus();
        return false;
    }
}

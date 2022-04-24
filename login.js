// login form client side validation

let email = document.getElementById("inputEmail");
let pswd = document.getElementById("inputPassword");
let email_flag, pswd_flag;
function callBack() {
    return true;
}

function validation(username, password, callback) {
    if (username.value == "admin" && password.value == 12345) {
        callback();
    }
    else {
        alert("invalid username or password");
        return false;
    }
}

// Step-1
document.getElementById("btn-submit").addEventListener("click",function(){
    let emailField = document.getElementById("email");
    let email = emailField.value;
    let passwordField = document.getElementById("password");
    let password = passwordField.value;

    if(email === 'mdshojib922@gmail.com' && password === '190103'){
        window.location.href="bank.html";
    }
    else{
        document.getElementById("fall").innerText = "Please Enter Valid Email and Password";

    }
});
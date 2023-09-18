document.addEventListener("DOMContentLoaded", function() {

    const correctUsername = "myusername";
    const correctPassword = "mypassword";

    const loginButton = document.getElementById("loginButton");
    const loginMessage = document.getElementById("loginMessage");

    loginButton.addEventListener("click", function() {

        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;


        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            loginMessage.textContent = "Your username and password are correct! You are logged in.";

            loginButton.removeEventListener("click", checkLogin);
        } else {
            loginMessage.textContent = "Your username or password is incorrect! Please try again.";
        }
    });
});

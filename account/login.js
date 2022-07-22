document.querySelector("form").addEventListener("submit", myFunction);
var userDataArr = JSON.parse(localStorage.getItem("userData")) || [];


function myFunction(event) {

    event.preventDefault();
    var flag = false;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    userDataArr.forEach(function (ele) {
        if (ele.email == email && ele.password == password) {
            storeUserData(ele);
            flag = true;
            name=ele.name

        }
    })


    function storeUserData(ele) {
        localStorage.setItem("login", JSON.stringify(ele));
    }

    if (flag) {
        alert("Successfully logged in!");
        var token = Math.random();
        localStorage.setItem("token", token);
        window.location.href = "index.html"

    }
    else {
        alert("Please enter correct email or password!");
    }
    
    form.reset();
}


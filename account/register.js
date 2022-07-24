
    var userDataArr = JSON.parse(localStorage.getItem("userData")) || [];

    var form = document.querySelector("#form");
    document.querySelector("#form").addEventListener("submit", storeData);
    function storeData(event) {
        event.preventDefault()

        var dataObj = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }
     alert("Registration completed successfully");
        userDataArr.push(dataObj)

        localStorage.setItem("userData", JSON.stringify(userDataArr))
        window.location.href = "login.html"
        form.reset();
    }
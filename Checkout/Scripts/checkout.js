
let open_manual=()=>{
        document.getElementById("manual").style.display="block";
}
document.getElementById("open_manual").addEventListener("click",open_manual);



let submit=()=>{
        if(
                document.getElementById("full_name").value!="" &&
                document.getElementById("address").value!="" &&
                document.getElementById("apartment").value!="" &&
                document.getElementById("town_city").value!="" &&
                document.getElementById("state").value!="" &&
                document.getElementById("zipcode").value!="" &&
                document.getElementById("contact").value!="" &&
                document.getElementById("name_on_card").value!="" &&
                document.getElementById("card_number").value!="" &&
                document.getElementById("cvv_i").value!=""
        ){
                alert("Order Placed Successfully!");
                window.location.href = "../index.html";
                localStorage.setItem("Cart_data", JSON.stringify([]));
        } else {
                alert("Please fill all the required information");
              }
          
}


document.getElementById("button").addEventListener("click",submit)
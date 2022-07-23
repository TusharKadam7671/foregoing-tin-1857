
let user_details=JSON.parse(localStorage.getItem("user_details")) || []

let open_manual=()=>{
        document.getElementById("manual").style.display="block";
}
document.getElementById("open_manual").addEventListener("click",open_manual);



let submit=()=>{

        // if(document.getElementById("cvv_i").value!="123"){
        //         alert("Please fill correct details");
        // }else{

       

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
                let user_obj={
                        name:document.getElementById("name_on_card").value,
                        contact:document.getElementById("contact").value,
                        card_number:document.getElementById("card_number").value,
                        cvv:document.getElementById("cvv_i").value
                }

                user_details[0]=user_obj;

                localStorage.setItem("user_details",JSON.stringify(user_details));
                
                window.location.href = "otp.html";
               
        } else {
                alert("Please fill all the required information");
              }


        // }
          
}


document.getElementById("button").addEventListener("click",submit)
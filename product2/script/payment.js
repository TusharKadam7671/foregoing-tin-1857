document.querySelector("#signupForm").addEventListener("submit",paymentDetails);

function paymentDetails()
{
   event.preventDefault();
    var form=document.querySelector("#signupForm");
    var name=form.name.value;
    var cardNumber=form.accNum.value;
    var number=form.phone.value;
    var cvv=form.password.value;
    console.log(name,cardNumber)
     if(name==""){
        alert("enter holder name")
       
    }
    else  if(cardNumber==""){
        alert("enter your card number")
    }
    else if(number==""){
        alert("enter your mobile number")
    }

    else if(cvv==""){
        alert("enter your cvv pin")
        
    } 
    
    else if(cardNumber.length==10)
    {
        alert("accept your card")
        window.location.href="otp.html"
    
    }
    
    else{
    alert("Invailed Card Number")
    }
}
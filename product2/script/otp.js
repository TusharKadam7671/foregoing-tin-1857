document.querySelector("#otpForm").addEventListener("submit",paymentDetails);

function paymentDetails()
{
   event.preventDefault();
    var form=document.querySelector("#otpForm");
    var otp=form.otp.value;
    console.log(otp)
    if(otp==""){
        alert("enter your 6 digit otp")
    }
    else if(otp.length==6)
    {
        alert("payment successful") ;
        window.location.href="sucessful.html"
    }
    else{
    alert("Invailed OTP Number")
    }
}
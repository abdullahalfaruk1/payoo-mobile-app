// login button funtionality
document.getElementById("loginButton")
.addEventListener("click",function(e){
    e.preventDefault();
    const mobileNumber = 01729530632
    const pinNumber = 1234
    const mobileNumberValue =document.getElementById("mobile-number").value
    const mobileNumberValueCoverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumberValueCoverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href = "./home.html"
    }
else{
    alert("Invalid Credentials")
}
})
function validateForm(){
    //alert("GM");
   


let email=document.getElementById('email').value;
if(email==""){
    //alert('Please enter Email Id')
    document.getElementById('emailMsg').innerHTML="Please Enter Email Id"
}
else{
    alert(email)
}
return false;
}
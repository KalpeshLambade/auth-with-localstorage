function register(event){
    event.preventDefault();

    var userName= document.getElementById("userName").value;
    var userEmail =document.getElementById("userEmail").value;
    var userPassword =document.getElementById("userPassword").value;
    var userData = { name:userName, email:userEmail, password:userPassword };

    var dataFromLs =JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLs,"dataFromLs");

    var flag =false;
    for(var i=0; i<dataFromLs.length;i++){
        if(dataFromLs[i].email === userEmail){
            flag =true;
        }
    }

    if (flag === true){
        alert("Email already Present");
    }
    else if(userName.length < 1 && userEmail.length <1){
        alert("must filled all fields");
    }
    else if(userPassword.length < 8){
        alert("Password Must be more than 8 digit");
        // reset();
    }
    else{
        dataFromLs.push(userData);
        localStorage.setItem("userData",JSON.stringify(dataFromLs));
        document.getElementById("userName").value ='';
        document.getElementById("userEmail").value ='';
        document.getElementById("userPassword").value ="";
        window.location.href ="/login.html";
        alert("registration Done");
    }
}
function login(){
    let number = document.getElementById("accnum").value;
    console.log(number);
     let pass = document.getElementById("accpass").value;
     console.log(pass);
     
    

    let numberr=localStorage.getItem("accnum")
    console.log(numberr);
    let pas=localStorage.getItem("accpass")
    console.log(pas);
    if(number == "" && pass == ""){
        alert('Please fill the form')
    }
    else if(number == numberr && pass == pas){
        alert('Login Successfull')
        window.location='/acc.html'
    }else{
        alert('Invalid Account number or Password')
    }
    
}
function reset(){
    window.location='/index.html'
}
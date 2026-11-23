//
function register() {

    let number = document.getElementById("accnum").value;
    let user = document.getElementById("accuser").value;
    let pass = document.getElementById("accpass").value;

    if ( user == "" || number == "" || pass == "") {
        alert("Fill all fields");
    }
    else {
        alert('Registration Successfull')


        console.log(user);
        console.log(number);
        console.log(pass);

        localStorage.setItem("accuser", user);
        localStorage.setItem("accnum", number);
        localStorage.setItem("accpass", pass);

        window.location='/login.html'
    }

    

}

function reset(){
    localStorage.clear()
}


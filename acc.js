function deposit(){ 
    let damnt=Number(document.getElementById('damount').value); 
    console.log(damnt); 
 
    let daccnum=document.getElementById('daccount').value; 
    console.log(daccnum); 
 
    let dbalance=damnt 
 
    let acnum=localStorage.getItem("accnum") 
    console.log(acnum); 
     
    if(daccnum==acnum){ 
        alert('Account verified') 
        alert('Transaction Successfull')
        let balance = Number(localStorage.getItem("balance") || 0); 
 
        balance = balance + damnt; 
 
        localStorage.setItem("balance", balance); 
 
        document.getElementById("result1").innerHTML = 
             damnt + " was credited to your account.<br>" + 
            "Your balance is " + balance; 
 
    }else{ 
        alert('Invalid Account Number') 
    } 
     
}

function withdraw(){ 
    let wamnt=Number(document.getElementById('wamount').value); 
    console.log(wamnt); 
 
    let waccnum=document.getElementById('waccount').value; 
    console.log(waccnum); 
 
    let wbalance=wamnt 
 
    let acnum=localStorage.getItem("accnum") 
    console.log(acnum); 
     
    if(waccnum==acnum){ 
        alert('Account verified') 
        alert('Trancsaction Successfull')

        let balance = Number(localStorage.getItem("balance") || 0); 

        if(wamnt <= balance){

            balance = balance - wamnt; 
 
            localStorage.setItem("balance", balance); 
 
            document.getElementById("result2").innerHTML = 
                wamnt + " was withdrawn from your account.<br>" + 
                "Your balance is " + balance; 

        }else{

            document.getElementById("result2").innerHTML = 
                "Insufficient balance";

        }

    }else{ 
        alert('Invalid Account Number') 
    } 
     
}

function logout(){
    localStorage.clear()
    window.location='/index.html'
}
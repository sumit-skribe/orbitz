var signData = JSON.parse(localStorage.getItem("userlocal")); 


document.querySelector(".ak_btn").addEventListener("click",myfunction);

function myfunction(){
    var em1 = document.querySelector("#email8").value
     var pas1 = document.querySelector("#pass8").value

    for(var i = 0;i<signData.length;i++){
        if(signData[i].userEmail==em1 && signData[i].userPass==pas1){
            alert("Login Successful")
            // window.location.href="./index.html"
            break;
            
        }
        else{
            alert("login Failed")
            break;
            
        }
    }


    }
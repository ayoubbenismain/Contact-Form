window.onload = function(){
    document.getElementById("leftside").style.left = "0px";
    document.getElementById("rightside").style.right = "0px";
}

inputBox = function(id){
    document.getElementById(id).style.top = "-35px";
    document.getElementById(id).style.left = "-";
}

verify = function(){
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    if (name == "" || email == ""){
        return false;
    } else {
        return true;
    }
}



document.getElementById("submit").addEventListener("click" , function(){
    if (verify() == true){
        document.getElementById("main").style.opacity = "0.2";
        document.getElementById("done").style.left = "40%";
        document.getElementById("done").style.top = "35%";
        document.getElementById("inputName").style.border = "green solid 1px";
        document.getElementById("inputEmail").style.border = "green solid 1px";
        setTimeout(function(){
            location.reload();
        },2000)
    }else {
        document.getElementById("inputName").style.border = "red solid 1px";
        document.getElementById("inputEmail").style.border = "red solid 1px";
    }
    
})

 
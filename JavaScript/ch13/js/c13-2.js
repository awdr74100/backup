(function(){

    var pwd = document.getElementById("userpassword");
    var chk = document.getElementById("check");

    addEvent(chk,"change",function(e){
        var target = e.target || e.srcElement;
        try{
            if(target.checked){
                pwd.type = "text";
            }else{
                pwd.type = "password";
            }
        }catch(error){
            alert("error")
        }
    })


}())
$(document).ready(function () {
    $(".showmenu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
});

var signUp = document.getElementById("sign-up");
signUp.addEventListener("click",Toregister,false)

function Toregister (){
    window.open("register.html");
}


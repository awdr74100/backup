/*if(window.localStorage){  //適合較長時間才會更改(時程表)、(偏好)、(個人設定)
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");

    t1.value = localStorage.getItem("name");
    t2.value = localStorage.getItem("input");

    t1.addEventListener("input",function(){
        localStorage.setItem("name",t1.value);
    },false);

    t2.addEventListener("input",function(){
        localStorage.setItem("input",t2.value);
    },false)
}*/


if(window.sessionStorage){  //適合較短時間就會更改(位置)、(登入狀態)
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");

    t1.value = sessionStorage.getItem("name");
    t2.value = sessionStorage.getItem("input");

    t1.addEventListener("input",function(){
        sessionStorage.setItem("name",t1.value);
    },false);

    t2.addEventListener("input",function(){
        sessionStorage.setItem("input",t2.value);
    },false)
}
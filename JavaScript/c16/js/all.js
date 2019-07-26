// var xhr = new XMLHttpRequest();

// xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);

// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// xhr.send("email=abcd@gmail.com&password=1234");

// OR

// var account = {
//     email:"asd@gmail.com",
//     password:"asd",
// }

// var xhr = new XMLHttpRequest();
// xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
// xhr.setRequestHeader("Content-type","application/json");
// xhr.send(JSON.stringify(account));

var btn = document.querySelector(".btn");
btn.addEventListener("click",send,false);

function send(e){
    var account = document.querySelector(".account").value;
    var password = document.querySelector(".password").value;
    var object = {
        email:account,
        password:password,
    }
    // 創建Ajax
    var xhr = new XMLHttpRequest();
    xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
    xhr.setRequestHeader("Content-type","application/json");
    var data = JSON.stringify(object);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var str = callbackData.message;
        if(str == "帳號註冊成功"){
            alert("註冊成功");
        }else{
            alert("失敗");
        }
    }
    


}




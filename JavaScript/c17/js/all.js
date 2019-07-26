// register註冊
var regBtn = document.querySelector(".regBtn");
regBtn.addEventListener("click", register, false);

function register(e) {
    var account = document.querySelector(".register__acc").value;
    var password = document.querySelector(".register__pas").value;
    var object = {
        email: account,
        password: password,
    }
    // 創建Ajax
    var xhr = new XMLHttpRequest();
    var href = "https://hexschool-tutorial.herokuapp.com/api/signup";
    xhr.open("post", href, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(object));
    // 捕捉回傳物件
    xhr.onload = function () {
        var msg = document.querySelector(".regMsg");
        var callbackData = JSON.parse(xhr.responseText);
        msg.textContent = callbackData.message;
    }

}

// login登入
var logBtn = document.querySelector(".logBtn");
logBtn.addEventListener("click", login, false);

function login(e) {
    var account = document.querySelector(".login__acc").value;
    var password = document.querySelector(".login__pas").value;
    var object = {
        email: account,
        password: password,
    }
    // 創建Ajax
    var xhr = new XMLHttpRequest();
    var href = "https://hexschool-tutorial.herokuapp.com/api/signin";
    xhr.open("post", href, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(object));
    // 捕捉回傳物件
    xhr.onload = function () {
        var msg = document.querySelector(".logMsg");
        var callbackData = JSON.parse(xhr.responseText);
        msg.textContent = callbackData.message;
    }
}
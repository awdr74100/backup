var xhr = new XMLHttpRequest();
var href = "https://hexschool.github.io/ajaxHomework/data.json";

xhr.open("get",href,true);
xhr.send(null);

var data;

xhr.onload = function(){
    data = JSON.parse(xhr.responseText);
    console.log(data);
    document.querySelector(".h2").textContent = data[0].name;
}


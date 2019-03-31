

var a = function (width,heith){
    return width*heith;
}

console.log(a(4,3));

var area = (function(width,height){
    var a = width*height;
    console.log(a)
}(10,60));

var hotel = {
    room : 30,
    number : 40,
    name : "blue",
    checknumber : function(){
        return this.room - this.number;
    }
};

console.log(hotel.checknumber());

var width = document.getElementsByClassName("wid")[0];
var height = document.getElementsByClassName("hei")[0];

height.textContent = screen.height

var a = "Hello Taiwan";
var ans = a.indexOf(" ");
console.log(ans);
var ans1 = 60.6564;

console.log(ans1.toFixed(1));

var ra = Math.floor((Math.random()*10)+1);
console.log(ra);

var date = new Date();
console.log(date);
var output = date.toString();
console.log(output);

var t1 = "3";
var t2 = 3;

if(t1 === t2){
    console.log("一樣");
}else{
    console.log("不一樣");
}

var a = 75;
var msg;
switch(a){
    case(0-60):
    msg = "不及格";
}



var ss = document.querySelectorAll(".a1")[0];
ss.textContent = "448";

var z1 = document.querySelectorAll(".hot")[0].parentNode;
z1.className = "father-change";



var z2 = document.getElementById("one");
var z3 = z2.innerHTML;
//z3.innerHTML ="<em>5df4</em>" ;
z2.innerHTML = '<a href=\"https://www.google.com.tw/?gws_rd=ssl\">'+z3+'</a>';
console.log(z2);

var new1 = document.createElement("li");
var newtext = document.createTextNode("我好帥");
new1.appendChild(newtext);
var position = document.getElementById("four");
position.appendChild(new1);

var aa = document.querySelector("#ff");
var bb = document.getElementById("one");
console.log(aa);
console.log(bb);

var cc = document.getElementById("p2");
if(cc.hasAttribute("class")){
    console.log("成功");
    var df = cc.getAttribute('class');
    console.log(df)
    cc.setAttribute("class","ccc54");
}else{
    console.log("失敗");
}

function check (number){
    window.alert("歡迎光臨"+number);
}

function cc1 (e){
    e.preventDefault();
    var target = e.cancelable;
    console.log(target);
}

var btn = document.getElementsByClassName("btn")[0];



btn.addEventListener("click",cc1,false);
var dc = document.getElementsByClassName("fff")[0];

function al (){
    window.alert("歡迎光臨");
    
}

dc.addEventListener("focus",al,false);

var btn1 = document.getElementsByClassName("btn1")[0];
btn1.addEventListener("mousemove",event,false);




function event (e){
    var a = e.clientX;
    var b = e.clientY
    console.log(a,b);
}

function event1 (){
    console.log("成功囉");
}

var area = document.getElementById("area");
area.addEventListener("keydown",areafu,false);

function areafu(){
    console.log(area.value);
}

var form = document.getElementById("form");
console.log(form);
var check = document.getElementById("check");
var mass = document.getElementsByClassName("mass")[0];
console.log(mass);
form.addEventListener("submit",cccc,false);
check.addEventListener("change",checkchange,false);

function cccc(e){
    if(!check.checked){
        mass.innerHTML = "<p>請勾選同意</p>";
        e.preventDefault();
    }
}

function checkchange(){
    if(check.checked){
        console.log("以勾選");
    }else{
        console.log("取消勾選");
    }
}

window.addEventListener("DOMContentLoaded",setup,false);

function setup(){
    console.log("載入完成");
}

window.addEventListener("beforeunload",function(e){
    console.log("確定離開?");
},false)






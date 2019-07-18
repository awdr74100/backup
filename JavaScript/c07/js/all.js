var el = document.querySelectorAll(".p");
var ellen = el.length;
for (var i = 0; i < ellen; i++) {
    el[i].textContent = "更改成功";
}
// 增加HTML屬性
var title = document.querySelector(".title");
// title.setAttribute("id","asd");

var a = document.querySelector("#text");
var btn = document.querySelector(".btn");

btn.onclick = function () {
    var b = a.getAttribute("type");
    console.log(b)
}

var main = document.querySelector(".main");
main.innerHTML = "<h1 class='logo'>asdad</h1>";

var list = document.querySelector(".list");
var name = "藍帥哥";
var link = "http://yahoo.com.tw";
list.innerHTML = '<li class="list__item"><a href="' + link + '">' + name + '</a></li>';

var farms = [{
    farmer: "卡斯柏",
    dogs: ["張姆士", "龐德"],
}, {
    farmer: "查理",
    dogs: ["皮皮"],
}]

var header = document.querySelector(".header");
var farmsLen = farms.length;
var str = "";
for (var i = 0; i < farmsLen; i++) {
    var content = "<li>" + farms[i].farmer + "</li>";
    str += content;
}

var newDom = document.createElement("em");
newDom.textContent = "嘿嘿喔";
newDom.setAttribute("class", "blue");

document.querySelector(".minor").appendChild(newDom);

var list = document.querySelector(".menu");
for (var i = 0; i < farmsLen; i++) {
    var str = document.createElement("li");
    str.textContent = farms[i].farmer;
    list.appendChild(str);
}


var firstId = document.querySelector("#first");
var secondClass = document.querySelector(".second");
var allClass = document.querySelectorAll(".all");

var googleSite = document.querySelector("#google");
googleSite.setAttribute("href", "www.google.com");

var hexSchoolSite = document.querySelector("#hexSchool");
hexSchoolSite.innerHTML = "<a href='http://www.hexschool.com/'>Go to Hexschool</a>";

var sonElement = document.createElement("a");
sonElement.setAttribute("href", "www.facebook.com");
sonElement.textContent = "前往Facebook";
var fatherElement = document.querySelector("#link");
fatherElement.appendChild(sonElement);

var students = [{
        name: "小明",
        age: "18",
        phone: "0912345678"
    },
    {
        name: "小美",
        age: "17",
        phone: "0923456789"
    },
    {
        name: "小菜",
        age: "19",
        phone: "0934567891"
    }
];
var studentsLen = students.length;
var stuList = document.querySelector("#studentList");
for(var i = 0;i<studentsLen;i++){
    var student = document.createElement("li");
    student.textContent = students[i].name+"，"+students[i].age+"歲，手機號碼是"+students[i].phone
    stuList.appendChild(student);
}
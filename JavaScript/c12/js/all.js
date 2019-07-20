var btn = document.querySelector(".btn");
var btnGet = document.querySelector(".btnGet");
btn.addEventListener("click", saveName, false);
btnGet.addEventListener("click", getName, false);

function saveName(e) {
    var str = document.querySelector(".textClass").value;
    localStorage.setItem("userName", str);
}

function getName(e) {
    var str = localStorage.getItem("userName");
    alert(str);
}

// 以上為基本local Storage應用

var data = [{
    farmer: "blue",
    count: 14,
}, {
    farmer: "roya",
    count: 14,
}]

var dataStr = JSON.stringify(data);

localStorage.setItem("test", dataStr);

var a = JSON.parse(localStorage.getItem("test"));
console.log(a);
console.log(a[1].farmer);

// 以上為local Storage物件存取應用

var list = document.querySelector(".list li");
list.addEventListener("click", checkList, false);

function checkList(e) {
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log(num, dog)
}

// 以上為dataset基本應用

var country = [{
    farmer: "卡斯柏",
}, {
    farmer: "捷克",
}, {
    farmer: "羅雅",
}];

var menu = document.querySelector(".menu");

function updateList(e) {
    var str = "";
    var countryLen = country.length;
    for (var i = 0; i < countryLen; i++) {
        str += "<li data-num='" + i + "'>" + country[i].farmer + "</li>";
    }
    menu.innerHTML = str;
}
updateList();

menu.addEventListener("click", checkList, false);

function checkList(e) {
    var str = e.target.nodeName;
    if (str !== "LI") {
        return;
    }
    var getData = e.target.dataset.num;
    console.log("你現在選擇的農夫是" + country[getData].farmer);
    // 刪除所選item
    country.splice(getData,1);
    updateList();
}

// 以上為dataset搭配array與物件做溝通 + 刪除所選項目
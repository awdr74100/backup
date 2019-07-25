// 宣告DOM Element
var select = document.querySelector(".js-select");
var list = document.querySelector(".js-list");
var popularList = document.querySelector(".js-popularList");
var title = document.querySelector(".title");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var toggle = document.querySelector(".toggleList");
var toggleBar = document.querySelector(".toggleBar");
var goTop = document.querySelector(".goTop");

// 初始化 - 隱藏toggleBar
toggleBar.style.display = "none";

// 宣告空陣列
var data = [];

// 宣告目前頁數
var pageIndex;

// 宣告監聽事件
select.addEventListener("change", checkSelectValue, false);
popularList.addEventListener("click", checkClickValue, false);
toggle.addEventListener("click", thisPage, false);
prev.addEventListener("click", prevPage, false);
next.addEventListener("click", nextPage, false);

// 檢查選擇項目 - select
function checkSelectValue(e) {
    var selectValue = e.target.value;
    data = [];
    if (selectValue == "parset") {
        return;
    }
    toggleBar.style.display = "flex";
    addToObject(selectValue);
}

// 檢查選擇項目 - click
function checkClickValue(e) {
    var clickValue = e.target.nodeName;
    data = [];
    if (clickValue !== "LI") {
        return;
    }
    var value = e.target.textContent;
    toggleBar.style.display = "flex";
    addToObject(value);
}

// 新增物件到陣列
function addToObject(value) {
    var openDataLen = openData.result.records.length;
    title.textContent = value;
    for (var i = 0; i < openDataLen; i++) {
        if (value == openData.result.records[i].Zone) {
            var object = {
                img: openData.result.records[i].Picture1,
                name: openData.result.records[i].Name,
                location: openData.result.records[i].Zone,
                clock: openData.result.records[i].Opentime,
                address: openData.result.records[i].Add,
                tel: openData.result.records[i].Tel,
                price: openData.result.records[i].Ticketinfo,
            }
            data.push(object);
        }
    }
    createToggleList();
}

// 創建切換列表
function createToggleList() {
    var dataLen = data.length;
    var count = (dataLen / 8) + 1;
    var str = "";
    for (var i = 1; i <= count; i++) {
        str += '<li data-index="' + i + '">' + i + '</li>'
    }
    toggle.innerHTML = str;
    startPage();
}

// 初始化頁面
function startPage(e) {
    pageIndex = 1;
    rmAllStyle();
}

// 下一頁
function nextPage() {
    if (pageIndex == toggle.childElementCount) {
        return
    }
    pageIndex++;
    rmAllStyle();
}

// 上一頁
function prevPage() {
    if (pageIndex == 1) {
        return;
    }
    pageIndex--;
    rmAllStyle();
}

// 指定頁面
function thisPage(e) {
    if (e.target.nodeName !== "LI") {
        return;
    }
    pageIndex = parseInt(e.target.dataset.index);
    rmAllStyle();
}

// 重製索引值效果
function rmAllStyle(e) {
    var allIndex = document.querySelectorAll(".toggleList li");
    var allIndexLen = allIndex.length;
    for (var i = 0; i < allIndexLen; i++) {
        allIndex[i].classList.remove("active");
    }
    getPageIndex();
}

// 判斷目前頁數
function getPageIndex() {
    var startValue = (pageIndex - 1) * 8;;
    var endValue = pageIndex * 8;
    var nowList = data.slice(startValue, endValue);
    var a = document.querySelectorAll(".toggleList li");
    var b = a[pageIndex - 1];
    b.classList = "active";
    updateList(nowList);
}

// 更新列表
function updateList(nowList) {
    var str = "";
    var nowListLen = nowList.length;
    for (var i = 0; i < nowListLen; i++) {
        str += '<li class="list__item">' +
            '<div class="img" style="background-image: url(' + "'" + nowList[i].img + "'" + ')">' +
            '<h3 class="name">' + nowList[i].name + '</h3>' +
            '<p class="location">' + nowList[i].location + '</p>' +
            '</div>' +
            '<div class="content">' +
            '<p class="clock">' + nowList[i].clock + '</p>' +
            '<p class="address">' + nowList[i].address + '</p>' +
            '<p class="tel">' + nowList[i].tel + '</p>' +
            '<p class="price">' + nowList[i].price + '</p>';
    }
    list.innerHTML = str;
}
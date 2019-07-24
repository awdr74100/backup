// 宣告DOM Element
var select = document.querySelector(".js-select");
var list = document.querySelector(".js-list");
var popularList = document.querySelector(".js-popularList");
var title = document.querySelector(".title");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var toggle = document.querySelector(".toggleList");
var toggleBar = document.querySelector(".toggleBar");

// 初始化 - 隱藏toggleBar
toggleBar.style.display = "none";

// 宣告空陣列
var data = [];

// 宣告目前頁數
var pageIndex;

// 宣告監聽事件
select.addEventListener("change", checkSelectValue, false);
popularList.addEventListener("click", checkClickValue, false);
toggle.addEventListener("click", getListValue, false);
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
    getRange();
}

// 判斷列表長度
function getRange() {
    var dataLen = data.length;
    pageIndex = 1;
    var endValue;
    if (dataLen < 9) {
        endValue = dataLen;
    } else if (9 <= dataLen < 17) {
        endValue = 8;
    }
    updateList(0, endValue);
}

function getListValue(e) {
    var dataLen = data.length;
    if (e.target.nodeName !== "LI") {
        return;
    }
    if (dataLen <= 8) {
        return;
    }
    pageIndex = parseInt(e.target.textContent);
    if (pageIndex == 1) {
        updateList(0, 8)
    } else if (pageIndex == 2) {
        updateList(8, dataLen);
    }
}

function nextPage() {
    var dataLen = data.length;
    if (pageIndex == 2) {
        return;
    }
    if (dataLen <= 8) {
        return;
    }
    pageIndex = 2;
    updateList(8, dataLen);
}

function prevPage() {
    if (pageIndex == 1) {
        return;
    }
    pageIndex = 1;
    updateList(0, 8)
}


// 更新列表
function updateList(start, end) {
    var str = "";
    for (start; start < end; start++) {
        str += '<li class="list__item">' +
            '<div class="img" style="background-image: url(' + "'" + data[start].img + "'" + ')">' +
            '<h3 class="name">' + data[start].name + '</h3>' +
            '<p class="location">' + data[start].location + '</p>' +
            '</div>' +
            '<div class="content">' +
            '<p class="clock">' + data[start].clock + '</p>' +
            '<p class="address">' + data[start].address + '</p>' +
            '<p class="tel">' + data[start].tel + '</p>' +
            '<p class="price">' + data[start].price + '</p>';
    }
    list.innerHTML = str;
}
// Ajax載入JSON資料
const xhr = new XMLHttpRequest();
const href = "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97";
xhr.open("get", href, true);
xhr.send(null);
xhr.onload = function (e) {
    // 宣告DOM Element
    const select = document.querySelector(".js-select");
    const list = document.querySelector(".js-list");
    const popularList = document.querySelector(".js-popularList");
    const title = document.querySelector(".title");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const toggle = document.querySelector(".toggleList");
    const toggleBar = document.querySelector(".toggleBar");
    const goTop = document.querySelector(".goTop");

    // 宣告獲取回傳資料的物件
    const jsondata = JSON.parse(xhr.responseText);
    const jsondataLen = jsondata.result.records.length;

    // 宣告監聽事件
    select.addEventListener("change", checkSelectValue, false);
    popularList.addEventListener("click", checkClickValue, false);
    toggle.addEventListener("click", thisPage, false);
    prev.addEventListener("click", prevPage, false);
    next.addEventListener("click", nextPage, false);

    // 初始化 - 隱藏toggleBar
    toggleBar.style.display = "none";

    // 宣告空陣列
    let data = [];

    // 宣告目前頁數
    let pageIndex;

    // 創建slect清單
    (function createSlectList() {
        let str = `<option value="parset" selected>- - 請選擇行政區 - -</option>`;
        let areaList = [];
        let area = [];
        for (let i = 0; i < jsondataLen; i++) {
            areaList.push(jsondata.result.records[i].Zone);
        }
        areaList.forEach(function (value) {
            if (area.indexOf(value) == -1) {
                area.push(value);
            }
        })
        for (let i = 0; i < area.length; i++) {
            str += `<option value="${area[i]}">${area[i]}</option>`
        }
        select.innerHTML = str;
    })()

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
        title.textContent = value;
        for (var i = 0; i < jsondataLen; i++) {
            if (value == jsondata.result.records[i].Zone) {
                var object = {
                    img: jsondata.result.records[i].Picture1,
                    name: jsondata.result.records[i].Name,
                    location: jsondata.result.records[i].Zone,
                    clock: jsondata.result.records[i].Opentime,
                    address: jsondata.result.records[i].Add,
                    tel: jsondata.result.records[i].Tel,
                    price: jsondata.result.records[i].Ticketinfo,
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

    // 初始化列表
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

}
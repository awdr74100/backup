// 抓取DOM Element
var btn = document.querySelector(".btn");
var list = document.querySelector(".list");
var btnClear = document.querySelector(".btnClear");

// 創建待存取項目空物件
var data = [];

// 增加事件監聽
btn.addEventListener("click", addList, false);
list.addEventListener("click", rmList);
btnClear.addEventListener("click", clear, false);


// 增加listitem與上傳
function addList(e) {
    var str = document.querySelector(".textId").value;
    var object = {
        content: str,
    }
    data.push(object);
    updateList();
    localStorage.setItem("listData", JSON.stringify(data));
}

// 更新列表資料
function updateList(e) {
    var str = "";
    var dataLen = data.length;
    for (var i = 0; i < dataLen; i++) {
        str += "<li><a href='#' data-index='" + i + "'>刪除</a>" + data[i].content + "</li>";
    }
    list.innerHTML = str;
}

// 刪除列表項目
function rmList(e) {
    if (e.target.nodeName !== "A") {
        return;
    }
    var index = e.target.dataset.index;
    data.splice(index, 1)
    updateList();
    localStorage.setItem("listData", JSON.stringify(data));
}

// 刪除所有項目
function clear(e) {
    e.preventDefault();
    data = [];
    localStorage.removeItem("listData");
    updateList();
}
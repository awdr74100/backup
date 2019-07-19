var hamNumId = document.querySelector("#hamNumId");
var cokeNumId = document.querySelector("#cokeNumId");
var total = document.querySelector(".total");
var btn = document.querySelector(".btn");

btn.addEventListener("click", checkTotal, false);
hamNumId.addEventListener("blur", checkCount, false);
cokeNumId.addEventListener("blur", checkCount, false);

function checkCount(e) {
    if (e.target.value == "") {
        alert("請輸入正確數值");
    }
}

function checkTotal(e) {
    if (hamNumId.value == "" || cokeNumId.value == "") {
        alert("你還有未填寫欄位");
    } else {
        count();
    }
}

function count(e) {
    // 宣告價格
    var hamPrice = 50;
    var cokePrice = 20;
    // 取出餐點數目
    var hamNum = parseInt(hamNumId.value);
    var cokeNum = parseInt(cokeNumId.value);
    // 計算餐點價格
    var hamTotal = hamPrice * hamNum;
    var cokeTotal = cokePrice * cokeNum;
    var outputTotal = hamTotal + cokeTotal;
    console.log(outputTotal);
    // 輸出餐點總價
    total.textContent = outputTotal;
}
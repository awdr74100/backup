var btn = document.getElementById("countId");
btn.onclick = function () {
    // 餐點價格
    var hamPrice = 50;
    var cokePrice = 20;
    // 取得餐點數目
    var hamNum = parseInt(document.getElementById("hamNumId").value);
    var cokeNum = parseInt(document.getElementById("cokeNumId").value);
    // 計算餐點價格
    var hamTotal = hamPrice * hamNum;
    var cokeTotal = cokePrice * cokeNum;
    var total = hamTotal + cokeTotal;
    // 輸出
    document.querySelector(".total").textContent = total;
}



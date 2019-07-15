// 基本迴圈
for (var a = 1; a <= 10; a++) {
    for (var b = 1; b <= 10; b++) {
        // console.log(a + " * " + b + " = " + a * b);
    }
}

// 迴圈與陣列
var farms = [{
    farmer: "卡斯柏",
    field: 6,
    chick: 80,
    banana: 5000,
}, {
    farmer: "查理",
    field: 10,
    chick: 120,
    banana: 1000,
}, {
    farmer: "捷克",
    field: 3,
    chick: 120,
    banana: 3215,
}]

for (var i = 0; i < farms.length; i++) {
    // console.log("第" + (i + 1) + "個農場主人是" + farms[i].farmer);
}

for (var v = 0; v < farms.length; v++) {
    if (farms[v].chick > 100) {
        // console.log(farms[v].farmer+"的小雞超過100隻以上");
    }
    // console.log(farms[v].chick);
}

// i++寫法
var f = 10;
f++;
console.log(f);

// 迴圈 - 物件加總
var bananaTotal = 0;
for (var z = 0; z < farms.length; z++) {
    bananaTotal += farms[z].banana;
}
console.log("今年村子的香蕉採收量：" + bananaTotal);

// for迴圈 - break的應用
var w;
for (w = 0; w < farms.length; w++) {
    if (farms[w].chick > 100) {
        console.log(farms[w].farmer);
        break;
    }
}
console.log(w);
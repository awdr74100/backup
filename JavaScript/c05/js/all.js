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
    chick: 200,
}, {
    farmer: "查理",
    field: 10,
    chick: 50,
}, {
    farmer: "捷克",
    field: 3,
    chick: 120,
}]

for (var i = 0; i < farms.length; i++) {
    // console.log("第" + (i + 1) + "個農場主人是" + farms[i].farmer);
}

for (var v = 0; v < farms.length; v++) {
    if (farms[v].chick > 100) {
        console.log(farms[v].farmer+"的小雞超過100隻以上");
    }
    // console.log(farms[v].chick);
}
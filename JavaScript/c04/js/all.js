var myMonth = 5;
var thisMonth = 12;
var checkMonth = (myMonth == thisMonth);
console.log(checkMonth);

var nowPeople = 1;
var totalPelple = 2;
var allPeople = (nowPeople !== totalPelple);
console.log(allPeople);

var a = 1;
var b = "1";
// true = 1 , false = 0 在js世界裡
console.log(a === b);
var aa = true;
var bb = false;
var cc = false;
var age = 16;
var vv = (age < 18) ? "太小" : "符合";
console.log(vv);
console.log(aa || bb || cc);
// 以上為邏輯運算子、比較運算子、條件運算子
// 以下為條件判斷式 -- if 
var apple = 8;
var grap = 8;

function a1() {
    console.log("成功");
}

function a2() {
    console.log("失敗");
}
if (apple == grap) {
    a1();
} else {
    a2();
}
// 以下為條件判斷式 -- else if
var hungry = 3;
if (hungry > 7) {
    console.log("好飽，不想吃");
} else if (hungry >= 4) {
    console.log("吃沙拉");
} else {
    console.log("吃牛肉");
}
// 以下為條件判斷式 -- switch
var roya = "SDㄑ";
switch (roya) {
    case "帥哥":
        console.log("1");
        break;

    case "醜八怪":
        console.log("2");
        break;
        // default可以擺放在任一位置上
    default:
        console.log("3");
        break;
}
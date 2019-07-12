// ---------------基本陣列宣告
var cornField = [8, 5, 6];
console.log(typeof (cornField));
var cornField3 = cornField[2];
console.log(cornField3);
console.log("--------------------------");
// ----------------陣列基本用法
var box = [];
box.push(5);
box.push(8); //push最後面新增
box.push(6);
console.log(box);
box[0] = 9;
box[3] = 10; //另類新增
box.splice(2, 2);
console.log(box);
console.log(box.length);
console.log("--------------------------");
// -----------------物件宣告
var farm = {
    farmer: "藍奕濡",
    dog: ["阿喵", "阿威"],
    chick: 8,
    count: 5,
    warring: function () {
        console.log(farm.farmer + " 該回家吃飯囉");
    },

}
farm.count = 10;
farm.farmer = "roya";
farm.box = [5, 6, 1];
farm.godinner = function () {
    var a = farm.chick + farm.count;
    return a;
};
console.log(farm.dog[0]); //物件-陣列-取值
console.log(farm.warring());
console.log(farm.godinner());
console.log(farm);
console.log("--------------------------");
// -----------------大型物件
var farms = [{
    farmer: "卡斯柏",
    dogs: ["詹姆士", "龐德"],
    chick: 15,
    cornField: [8, 5, 6],
    broccoliField: [6, 6, 6, 6],
    scarecrow: 9,
}, {
    farmer: "查理",
    dogs: ["皮皮"],
    chick: 30,
    cornField: [18, 612],
    broccoliField: [8, 8, 8],
    scarecrow: 6,
}]

console.log(farms);
console.log(farms[1].dogs[0]);


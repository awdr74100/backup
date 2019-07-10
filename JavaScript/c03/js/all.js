var cornField = [8,5,6];
console.log(typeof(cornField));
var cornField3 = cornField[2];
console.log(cornField3);
// ----------------
var box = [];
box.push(5);
box.push(8); //push最後面新增
box.push(6);
console.log(box);
box[0] = 9;
box[3] = 10; //另類新增
box.splice(2,2);

console.log(box);
console.log(box.length);
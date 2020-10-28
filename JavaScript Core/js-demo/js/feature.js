// function Person() {}
// Person.prototype.name = '人類';
// // Object.defineProperty(Person.prototype, 'name', {
// //   value: '人類',
// //   enumerable: false,
// // });

// const YiRu = new Person();
// YiRu.age = undefined;

// for (const key in YiRu) {
//   if (YiRu.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(YiRu);
// console.log(Object.getOwnPropertyDescriptors(YiRu.__proto__));

Array.prototype.getLastValue = function () {
  return this[this.keys.length - 1];
};

Array.prototype.a = 'dw';
Object.prototype.b = 'qwd';
Object.defineProperty(Object.prototype, 'b', {
  enumerable: false,
});
console.dir(Array);

const obj = {
  name: 'Roya',
  age: 21,
};

Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});
Object.values(obj).forEach((value) => {
  console.log(value);
});
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
for (let key in obj) {
  console.log(key);
}
console.log(obj);

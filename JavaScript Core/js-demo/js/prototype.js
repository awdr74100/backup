// // function Animal(family) {
// //   this.family = family;
// // }

// // Animal.prototype.move = function () {
// //   console.log(this.name + '移動');
// // };

// // function Dog(name, color, size) {
// //   Animal.call(this, '犬科');
// //   this.name = name;
// //   this.color = color;
// //   this.size = size;
// // }

// // Dog.prototype = Object.create(Animal.prototype);
// // Dog.prototype.constructor = Dog;
// // Dog.prototype.bark = function () {
// //   console.log(this.name + '汪汪');
// // };

// // const Bibi = new Dog('Bibi', 'brown', 'md');
// // console.log(Bibi);
// // console.dir(Dog);
// // Bibi.bark();
// // Bibi.move();

// // function Cat(name, color, size) {
// //   Animal.call(this, '貓科');
// //   this.name = name;
// //   this.color = color;
// //   this.size = size;
// // }

// // Cat.prototype = Object.create(Animal.prototype);
// // Cat.prototype.constructor = Cat;
// // Cat.prototype.meow = function () {
// //   console.log(this.name + '喵喵');
// // };

// // const Weiwei = new Cat('Weiwei', 'black', 'sm');
// // console.log(Weiwei);
// // console.dir(Cat);
// // Weiwei.meow();
// // Weiwei.move();
// // console.dir(String);

// function Animal(family) {
//   this.family = family;
// }

// Animal.prototype.move = function () {
//   console.log(this);
//   console.log(`${this.name} 移動中`);
// };

// function Dog(name, color, size) {
//   Animal.call(this, '稀有種');
//   this.name = name;
//   this.color = color;
//   this.size = size;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
//   console.log(`${this.name} 吼叫`);
// };

// const husky = new Dog('Husky', 'black', 'md');
// const corgi = new Dog('Corgi', 'brown', 'sm');
// console.log(husky);
// console.log(husky.__proto__ === Dog.prototype);
// console.log(husky.__proto__.__proto__ === Animal.prototype);
// console.log(husky.__proto__.__proto__.__proto__ === Object.prototype);
// console.log(husky.__proto__.__proto__.__proto__.__proto__ === null);

// console.log(Dog.__proto__ === Function.prototype);
// console.log(Animal.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.prototype);
// console.log(Array.__proto__ === Function.prototype);
// console.log(Function.__proto__.__proto__ === Object.prototype);

function Family(rank) {
  this.rank = rank;
}

Family.prototype.getRank = function () {
  return this.rank;
};

function Person(name, age, weight, height) {
  Family.call(this, "2");
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
}

Person.prototype = Object.create(Family.prototype);
Person.prototype.constructor = Person;
Person.prototype.getBmi = function () {
  return Math.round((this.weight / Math.pow(this.height / 100, 2)) * 10) / 10;
};

const YiRu = new Person("YiRu", "21", "64", "170");
const Owen = new Person("Owen", "21", "96", "172");
console.log(YiRu);
console.log(Owen);
console.log(YiRu.getBmi());
console.log(Owen.getBmi());
console.log(YiRu.getRank());
console.log(YiRu.__proto__ === Person.prototype);
console.log(YiRu.__proto__.__proto__ === Family.prototype);
console.log(YiRu.__proto__.__proto__.__proto__ === Object.prototype);
console.log(YiRu.__proto__.__proto__.__proto__.__proto__ === null);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.__proto__.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);

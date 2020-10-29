/*
  - 沒有 arguments 參數
  - this 始終參考外圍 (本身沒有 this)
  - addEventListener 的 this 指向全域 (因為沒有 this，所以參考外圍)
  - 無法使用 call、apply、bind 額外綁定
  - 不存在 prototype (constructor)，表示無法做為建構函式使用
*/
// const fun = () => console.log(arguments);
// fun(); // arguments is not defined

// const obj = {
//   name: "myName",
//   fun() {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//     }, 0);
//   },
// };
// obj.fun();

// const dom = document.querySelector("h1");
// dom.addEventListener("click", () => {
//   console.log(this);
// });

// const obj = {};
// const fun = () => console.log(this);
// fun.call(obj);

// const fn = function () {};
// const arrowFn = () => {};
// console.log(fn.prototype);
// console.log(arrowFn.prototype);

// const arrFn = () => ({ name: "YiRu" });
// console.log(arrFn());

// const fun = function () {
//   const list = [...arguments];
//   const total = list.reduce((arr, cur) => (arr += cur), 0);
//   return total / list.length;
// };
// console.log(fun(1, 5, 4, 8, 7));

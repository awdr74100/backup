"use strict";

var _person$first, _person$first2, _person$first3, _person$first3$func;

/* 空值合併運算符 (Nullish coalescing operator)

1. 如同短路操作，左邊如為 null、undefined 即回傳右邊
ex:
  const res1 = (num) => num ?? 'default value';
  console.log(res1(0)); // 0

*/
var person = {
  first: {
    second: 'bang',
    func: function func() {
      return 123;
    }
  }
};
console.log(person.first && person.first.second); // old

console.log(person === null || person === void 0 ? void 0 : (_person$first = person.first) === null || _person$first === void 0 ? void 0 : _person$first.second); // new

console.log(person === null || person === void 0 ? void 0 : (_person$first2 = person['first']) === null || _person$first2 === void 0 ? void 0 : _person$first2['second']); // new

console.log(person === null || person === void 0 ? void 0 : (_person$first3 = person.first) === null || _person$first3 === void 0 ? void 0 : (_person$first3$func = _person$first3.func) === null || _person$first3$func === void 0 ? void 0 : _person$first3$func.call(_person$first3));
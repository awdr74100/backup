/* 空值合併運算符 (Nullish coalescing operator)

1. 如同短路操作，左邊如為 null、undefined 即回傳右邊
ex:
  const res1 = (num) => num ?? 'default value';
  console.log(res1(0)); // 0

*/

/* 可選串連 (Optional chaining operator)

1. 參照不存在時，即回傳 undefined
ex:
  const person = { first: { second: 'bang', func() {return 123} } };
  console.log(person.first && person.first.second); // custom
  console.log(person?.first?.second); // call property
  console.log(person?.['first']?.['second']); // call property
  console.log(person?.first?.func?.()); // call function
*/
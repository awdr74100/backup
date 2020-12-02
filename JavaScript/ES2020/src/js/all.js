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

/* Promise.allSettled

1. 回傳 Promise 各決議狀態，只包含 fulfilled、rejected 兩種狀態
ex:
  const promise = (bool) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => (bool ? resolve({ bool }) : reject({ bool })), 1000);
    });
  };

  (async () => {
    const res = await Promise.allSettled([promise(true), promise(false)]);
    console.log(res);
  })();

*/

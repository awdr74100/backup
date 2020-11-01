function promise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

// Promise.all([promise(1000), promise(2000), promise(3000)]).then((res) => {
//   console.log(res);
// });

// Promise.race([promise(1000), promise(2000), promise(3000)]).then((res) => {
//   console.log(res);
// });

// (async () => {
//   const res1 = await Promise.all([promise(1000), promise(2000), promise(3000)]);
//   const res2 = await Promise.race([
//     promise(1000),
//     promise(2000),
//     promise(3000),
//   ]);
//   console.log(res1, res2);
// })();

// xhr method
// const xhr = new XMLHttpRequest();
// const url = "https://randomuser.me/api/";
// xhr.open("GET", url);
// xhr.send(null);
// xhr.addEventListener("load", function () {
//   const data = JSON.parse(xhr.response);
//   console.log(data);
// });

function xhr(method, url) {
  console.log(123);
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send(null);
    ajax.addEventListener("load", () => {
      ajax.status === 200
        ? resolve(JSON.parse(ajax.response))
        : reject("error");
    });
  });
}

xhr("GET", "https://randomuser.me/api/").then((res) => {
  console.log(res);
});

Promise.resolve(14).then((res) => {
  console.log(res);
});

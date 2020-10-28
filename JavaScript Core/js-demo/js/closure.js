// const buttons = [...document.querySelectorAll('button')];
// for (var i = 0; i < buttons.length; i++) {
//   ((j) => {
//     buttons[j].addEventListener('click', () => {
//       console.log(j);
//     });
//   })(i);
// }

// for(var i = 0; i < 5; i++) {
//   setTimeout(function(i) {
//     console.log(i); // 因為 setTimeout 關係 i 無法被釋放記憶體。
//   }, 1000, i)
//  }

// for (var i = 0; i < 3; i += 1) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// for (var i = 0; i < 5; i += 1) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// for (var i = 0; i < 5; i++) {
//   console.log('i: ' + i);
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// const btns = document.querySelectorAll('button');
// for (var i = 0; i < btns.length; i++) {
//   ((j) => {
//     btns[i].addEventListener('click', () => {
//       console.log(j);
//     });
//   })(i);
// }

// [...btns].forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     console.log(index);
//   });
// });

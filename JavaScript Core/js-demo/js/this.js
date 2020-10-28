// const doms = document.querySelectorAll('.list__item');
// [...doms].forEach((item) => {
//   item.addEventListener('click', callback);
//   // item.addEventListener('click', function () {
//   //   console.log(this);
//   //   const classList = this.classList;
//   //   classList.contains('text-red')
//   //     ? classList.remove('text-red')
//   //     : classList.add('text-red');
//   // });
// });

// function callback() {
//   console.log(this);
//   function aa() {
//     console.log(this);
//   }
//   aa();
// }

let num = 0;
function a1(a) {
  console.log(++num, 'a Active');
  // a();
  console.log(a);
}

function b1(b) {
  console.log(++num, 'b Active');
  console.log(b);
  b();
}

function c1(c) {
  console.log(++num, 'c Active');
  console.log('casper');
  console.log(c);
}

a1(b1(c1));

const wallet = {
  total: 300,
  get save() {
    return (this.total -= 20);
  },
  set save(price) {
    this.total += price;
  },
};
// Object.defineProperty(wallet, 'saveA', {
//   enumerable: false,
// });
// Object.defineProperty(wallet, 'saveB', {
//   enumerable: false,
// });
// Object.defineProperties(wallet, {
//   saveA: {
//     enumerable: false,
//   },
//   saveB: {
//     enumerable: false,
//   },
// });
Object.freeze()
Object.defineProperty(wallet, 'save', {
  enumerable: false,
});

wallet.save = 20;
console.log(Object.getOwnPropertyDescriptors(wallet));
console.log(wallet.save);
console.log(wallet);
for (let i in wallet) {
  console.log(i);
}

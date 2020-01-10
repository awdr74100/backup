import 'core-js'

let promise = Promise.resolve();

let obj = {
  name: "Roya",
  height: 170
};

for (const item of Object.entries(obj)) {
  console.log(item);
}

let arr = [1,2,3]

let cc = arr.filter((item)=> item >= 2)
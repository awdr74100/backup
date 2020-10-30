const obj = [
  {
    name: "YiRy",
    age: 20,
  },
  {
    name: "Owen",
    age: 21,
  },
  {
    name: "Rebecca",
    age: 18,
  },
];
const str = `<ul>${obj.reduce(
  (arr, cur) => arr + `<li>${cur.name}</li>`,
  ""
)}</ul>`;
const dom = document.querySelector("#app");
dom.innerHTML = `${str}`;

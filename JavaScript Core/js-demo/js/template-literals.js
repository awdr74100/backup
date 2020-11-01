const obj = [
  {
    name: "YiRa",
    age: 20,
  },
  {
    name: "Owen",
    age: 21,
  },
  {
    name: "LiRu",
    age: 18,
  },
];
// const str = `<ul>${obj.reduce(
//   (arr, cur) => arr + `<li>${cur.name}</li>`,
//   ""
// )}</ul>`;

// const str = `<ul>
// ${obj
//   .map((item) => `<li>你好，我叫 ${item.name}，年齡為 ${item.age}</li>`)
//   .join("")}
// </ul>`;
// const dom = document.querySelector("#app");
// dom.innerHTML = `${str}`;

function convertString(strings, ...argv) {
  console.log(strings);
  console.log(argv);
  return strings
    .map(
      (item, index) =>
        `${item}${argv[index] ? `<span>${argv[index]}</span>` : ""}`
    )
    .join("");
}

const str = `<ul>${obj.reduce((arr, cur) => {
  return (
    arr + convertString`<li>你好我的名子是 ${cur.name}，年齡為 ${cur.age}</li>`
  );
}, "")}</ul>`;
const dom = document.querySelector("#app");
dom.innerHTML = `${str}`;

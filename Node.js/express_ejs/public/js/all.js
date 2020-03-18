const btn = document.querySelector("#btn");
const content = document.querySelector("#content");

btn.addEventListener("click", e => {
  e.preventDefault();
  let str = content.value;
  fetch("/searchAjax", {
    method: "POST",
    headers: {
      //   "Content-Type": "application/x-www-form-urlencoede",
      "Content-Type": "application/json"
    },
    // body: `content=${str}`
    body: JSON.stringify({
      content: str,
      list: ['red', 2, 3]
    })
  })
    .then(res => {
      return res.text();
    })
    .then(res => {
      console.log(res);
    });
});

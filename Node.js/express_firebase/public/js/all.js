const content = document.querySelector("#content");
const sendBtn = document.querySelector("#sendBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const list = document.querySelector("#list");

sendBtn.addEventListener("click", e => {
  e.preventDefault();
  fetch("/addTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: content.value
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      if (!res.success) {
        alert(res.message);
        return;
      }
      const data = res.result;
      let str = "";
      for (const [key, value] of Object.entries(data)) {
        str += `<li>${value.content}
          <button id="deleteBtn" class="ml-3" data-key=${key}>刪除</button>
          </li>`;
      }
      list.innerHTML = str;
    });
});

list.addEventListener("click", e => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const key = e.target.dataset.key;
  fetch("/deleteTodo", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: key
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      if (!res.success) {
        alert(res.message);
        return;
      }
      const data = res.result;
      let str = "";
      for (const [key, value] of Object.entries(data)) {
        str += `<li>${value.content}
              <button id="deleteBtn" class="ml-3" data-key=${key}>刪除</button>
              </li>`;
      }
      list.innerHTML = str;
    });
});

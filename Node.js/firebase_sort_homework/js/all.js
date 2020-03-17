//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCogIo5FzoCSUc24qPN3Vp4AASdDYwHkM0",
  authDomain: "node-demo-33747.firebaseapp.com",
  databaseURL: "https://node-demo-33747.firebaseio.com",
  projectId: "node-demo-33747",
  storageBucket: "node-demo-33747.appspot.com",
  messagingSenderId: "203978508599",
  appId: "1:203978508599:web:d6f4fdb1687aaf413632b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// push data
// firebase
//   .database()
//   .ref("family")
//   .set({
//     father: {
//       title: "father",
//       age: 44,
//       weight: 88,
//       height: 178
//     },
//     mom: {
//       title: "mom",
//       age: 42,
//       weight: 66,
//       height: 166
//     },
//     son: {
//       title: "son",
//       age: 13,
//       weight: 40,
//       height: 133
//     },
//     daughter: {
//       title: "daughter",
//       age: 8,
//       weight: 35,
//       height: 110
//     }
//   });

// dom
const selectMode = document.querySelector("#selectMode");
const selectSort = document.querySelector("#selectSort");
const tableContent = document.querySelector("#tableContent");

selectMode.addEventListener("change", () => {
  processData(selectMode.value, selectSort.value);
});

selectSort.addEventListener("change", () => {
  processData(selectMode.value, selectSort.value);
});

function processData(mode = "default", sort = "toHigh") {
  const data = [];
  const databaseRef = firebase.database().ref("family");
  if (mode === "default") {
    databaseRef.once("value", res => {
      res.forEach(item => {
        data.push(item.val());
      });
      sort === "toHigh" ? renderView(data) : renderView(data.reverse());
    });
  } else {
    databaseRef.orderByChild(mode).once("value", res => {
      res.forEach(item => {
        data.push(item.val());
      });
      sort === "toHigh" ? renderView(data) : renderView(data.reverse());
    });
  }
}

function renderView(renderData) {
  let str = "";
  renderData.forEach(item => {
    str += `<tr>
          <td>${item.title}</td>
          <td>${item.age}</td>
          <td>${item.weight}</td>
          <td>${item.height}</td>
        </tr>`;
  });
  tableContent.innerHTML = str;
}

processData();

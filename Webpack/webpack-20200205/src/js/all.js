let a = [1, 2, 3, 4, 5];
const b = a.filter(item => item >= 2);
console.log(b);

const url = "https://randomuser.me/api/";
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  });
// import axios from 'axios';

axios.get("https://randomuser.me/api/").then(res => {
  console.log(res.data);
});

// $(document).ready(function() {
//   $(".align-self-start").text("更改成功");
// });

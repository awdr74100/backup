var a = document.getElementById("one");
console.log(a);
a.textContent = "第一行更改成功";
a.className = "change";

var b = document.getElementsByClassName("hot");
console.log(b);

var c = document.getElementsByTagName("li");
console.log(c);

var d = document.querySelector(".hot");
console.log(d);

var e = document.querySelectorAll(".hot");
console.log(e);
var el = document.querySelector(".btn");
var body = document.querySelector(".body");
var title = document.querySelector(".title a");

// el.onclick = function(e){
//     console.log(e);
// }

el.addEventListener("click", function (e) {
    alert("el");
    e.stopPropagation();

}, false)

// body.addEventListener("click",function(e){
//     alert("body");

// },false);

title.addEventListener("click", function (e) {
    e.preventDefault();
})
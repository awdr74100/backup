var el = document.querySelector(".btn");
var body = document.querySelector(".body");

// el.onclick = function(e){
//     console.log(e);
// }

el.addEventListener("click",function(e){
    alert("el");
    e.stopPropagation();
},false)

body.addEventListener("click",function(e){
    alert("body");
    
},true);


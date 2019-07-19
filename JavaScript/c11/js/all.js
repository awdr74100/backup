// var body = document.body;
// body.addEventListener("mousemove",function(e){
//     console.log(e.screenX);
//     console.log(e.screenY);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.pageX);
//     console.log(e.pageY);
// },false);

var el = document.querySelector(".list");
el.addEventListener("click", foo, false);
el.classList.toggle
function foo(e) {
    if(e.target.nodeName !== "LI"){
        return;
    }else{
        console.log(e.target.textContent);
    }
    
}
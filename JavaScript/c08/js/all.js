var el = document.querySelector(".btn");
var body = document.querySelector(".body");
var title = document.querySelector(".title");

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
    console.log(e.target.nodeName);
})

var area = document.querySelector(".areaId");
var list = document.querySelector(".list");
var country = [{
    farmer: "查理",
    place: "大里區",
}, {
    farmer: "傑森",
    place: "霧峰區",
}, {
    farmer: "亞克",
    place: "大里區",
}]
var countryLen = country.length;
area.addEventListener("change", updateList, false);
function updateList(e) {   
    var select = e.target.value;
    var str = "";
    for(var i = 0;i<countryLen;i++){
        if(select == country[i].place){
            str += "<li>"+country[i].farmer+"</li>";
        }
    }
    list.innerHTML = str;
}


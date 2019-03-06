var a = document.getElementById("one");
console.log(a);
a.textContent = "第一行更改成功";
//a.className = "change";

var b = document.getElementsByClassName("hot");

console.log(b);

var c = document.getElementsByTagName("li");
console.log(c);

var d = document.querySelector(".hot");
console.log(d);

var e = document.querySelectorAll(".hot");
console.log(e);

var aa = document.getElementsByClassName("hot");
if(aa.length >=1){
    var aaa = aa[1];
    console.log(aaa);
    //aaa.className = "change";
}

var bb = document.querySelector("#one");
//bb.className = "change";

var cc = document.querySelectorAll(".hot");
for(var i =0;i<cc.length;i++){
    console.log(i);
}

var dd = document.getElementById("one");
//dd.nextSibling.textContent = "更改成功";

var ee = document.getElementById("zero");
var test =  ee.firstChild.nextSibling.nodeValue ;
console.log(test);

var ff = document.getElementById("one").innerHTML;
console.log(ff);

var add = document.createElement("li");
var addtext = document.createTextNode("加入成功囉");
add.appendChild(addtext);
var addnode = document.getElementsByClassName("hot")[3];
addnode.appendChild(add);

var remove = document.getElementById("two");
var dade = remove.parentNode;
dade.removeChild(remove);





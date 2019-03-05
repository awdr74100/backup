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





var el = document.getElementById("username");
var msg = document.getElementById("msgg");
var dd = document.getElementsByClassName("dd")[0];
//el.addEventListener('blur',a,false);
el.addEventListener('blur',function(){a(2);},false);
/*
function a(number){
    
    if(el.value.length<number){
        msg.textContent = "請輸入小於5的字元";
        
    }else{
        msg.textContent = "";
        //el.focus();
    }

} */
function setup(){
    var textinput = document.getElementById("password");
    textinput.focus();
}
window.addEventListener('load',setup,false);


/*焦點顏色更改 (聚焦or失焦)
el.addEventListener("focus",change,false);
el.addEventListener("blur",change2,false);
function change(){
    dd.className = "sd";
}
function change2(){
    dd.className = "dd";
} */


/* 警告視窗建構 (click) Mouse事件
var war = '<div class =\"header\"><a id = \"close\" href = #>close X</a></div>';
war = war+ '<div><h2>警告</h2><div>';
var elnote = document.createElement("div");
elnote.setAttribute('id','note');
elnote.innerHTML = war;
document.body.append(elnote);

function close(){
    document.body.replaceChild(elnote);
}

var elclose = document.getElementById('close');
elclose.addEventListener('click',close,false);
*/




/* (click、dblclick、mousedown、mouseup、mouseover、mouseout、mousemove) Mouse事件
var c = document.getElementById('push');
var d = document.getElementsByClassName("name")[0];
function sdd(){
    d.textContent = "以點擊";
}
c.addEventListener('mouseover',sdd,false);
*/


/* (input、keydown、keypress、keyup)  Keyboard事件
var dfdf = document.getElementById('aera');
var area = document.getElementsByClassName('area')[0];
function aree(){
    area.textContent = "已更改"
}
dfdf.addEventListener('input',aree,false);
*/







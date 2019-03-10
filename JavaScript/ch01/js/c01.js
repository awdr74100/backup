var today = new Date();
var hourNow = today.getHours();
var ss = today.getMilliseconds();
var greeting;

console.log(ss);

if (hourNow > 18) 
{
    greeting = "晚安";    
}else if (hourNow > 12) 
{
    greeting = "午安";
}else if (hourNow > 0)
{
    greeting = '早安';
}else
{
    greeting = "歡迎";
}

//document.write('<h3>' + greeting + '</h3>');

//直接顯示頁面
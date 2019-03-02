var score = 60;
var english = 60;
var t1 = 10;
var t2 = 20;
var t3 = 30;
var t4 = 40;
var sd = ["a",'b','c']
console.log(sd.length);

// ==  &&  >=  <= 

if(score >= 60){
    console.log("及格");
}else{
    console.log("不及格");
}



switch(t2){
    case 10:
    console.log("不正確");
    break;

    case 20:
    console.log("正確");
    break;
    
    case 30:
    console.log("不正確");
    break;

    case 40:
    console.log("不正確");
    break;

    default:
    console.log("都不正確");
    break;
}

for(var i = 0;i<=10;i++){
    console.log(i);
}



var i = 1
while(i<10){
    console.log(i+' × 5'+' = '+(i*5));
    i++
}

var a = 1
do{
    console.log(a+' × 5'+' = '+(a*5));
    a++;
}while(a<3);




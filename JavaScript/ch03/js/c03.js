function back (width,height) {
    var total = width*height;
    return total;
}

var c = back(6,9);


console.log(c);

function git (){
    console.log("測試正常");
}

git();

var room = {
    number:40,
    people:12,
    git_totle:function(){
        return (this.number - this.people);
    }
    
}

var number = room.number;
//delete room.number;
console.log(number);
console.log(room.git_totle());


var a = new Object();
a.name = "blue";
a.number = 45;
a.total = function(){
    return this.name + this.number;
};

console.log(a.total());

function test3 (number,name){
    this.number = number;
    this.name = name;
    this.total = function tt() {
        return (number+name);
    }
}

var t1 = new test3(14,"帥哥");
var t2 = t1.name;
    t2 += t1.total();

console.log(t2);

var size = document.getElementById('size');
var time = new Date();
size.textContent = time;


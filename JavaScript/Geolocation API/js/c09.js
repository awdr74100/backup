var msg = "ERROR";
var output = document.getElementsByClassName("a")[0];






if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    output.textContent = "Checking location.....";
} else {
    output.textContent = msg;
}

function success(position) {
    msg = "<h3>緯度：</h3>" + position.coords.latitude;
    msg = msg + "</br>";
    msg = msg + "<h3>經度</h3>" + position.coords.longitude;
    output.innerHTML = msg;
}

function fail(error) {
    output.textContent = msg;
    switch (error.code) {
        case 1:
            console.log("拒絕存取");
            break;

        case 2:
            console.log("不存在");
            break;

        case 3:
            console.log("等待逾時");
            break;

    }
}
(function () {
    var form = document.getElementsByClassName("sd")[0];

  


    addEvent(form, "submit", function (e) {
        e.preventDefault();
        var elements = this.elements;
        var username = elements.username.value;
        window.alert(username + "歡迎");
        console.log(username + "歡迎");
    });
}());
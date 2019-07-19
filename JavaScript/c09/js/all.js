var body = document.body;
body.addEventListener("keydown", goRocket, false);

function goRocket(e) {
    console.log(e.key);
    switch (e.key) {
        case "1":
            // document.querySelector(".rocket-1").style.bottom = "2000px";
            document.querySelector(".rocket-1").classList.add("a");
            
            break;
        case "2":
            document.querySelector(".rocket-2").style.bottom = "2000px";
            break;
        case "3":
            document.querySelector(".rocket-3").style.bottom = "2000px";
            break;
    }
}
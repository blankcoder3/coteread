let menu = document.getElementById("myButton");
menu.onclick = function myMenu() {
    let a = document.getElementById('myNav');
    if (a.style.display == "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block"
    }
};
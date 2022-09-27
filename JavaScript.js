function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("content").style.marginLeft = "15%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
}
window.onload = function() {
    closeNav();
}


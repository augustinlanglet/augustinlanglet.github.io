document.body.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    var green = 100 + (x / window.innerWidth) * 155;
    var red = 55 + (y / window.innerHeight) * 150;
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", 255)";
});
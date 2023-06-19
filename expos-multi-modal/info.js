var info = document.getElementById('info');
var overlay = document.getElementById('overlay');

info.addEventListener('mouseover', function () {
    // var computedStyle = getComputedStyle(overlay); // otherwise js doesn't know the inital state on first click
    overlay.style.display = 'block';
    // if (computedStyle.display === 'none') {
    // } else {
    //     overlay.style.display = 'none';
    // }
});

info.addEventListener('mouseleave', function () {
    overlay.style.display = 'none';
});


info.addEventListener("click", function (event) {
    var computedStyle = getComputedStyle(image); // otherwise js doesn't know the inital state on first click

    if (computedStyle.display === 'none') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
});
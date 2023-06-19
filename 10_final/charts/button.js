var pins = document.getElementsByClassName('pin');

for (var i = 0; i < pins.length; i++) {
    pins[i].addEventListener("click", function (event) {
        var num = this.id.slice(3)
        var image = document.getElementById('img0' + num)
        console.log('clicked ' + num)
        var computedStyle = getComputedStyle(image); // otherwise js doesn't know the inital state on first click

        if (computedStyle.display === 'none') {
            image.style.display = 'block';
            this.style.boxShadow = "0px 0px 20px rgb(165, 242, 255)";
            this.classList.remove('pulse')
        } else {
            image.style.display = 'none';
            this.style.boxShadow = "none";
            this.classList.add('pulse')
        }
    });
}
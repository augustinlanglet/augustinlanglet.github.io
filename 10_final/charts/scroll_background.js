const page = document.getElementById('page')
page.style.backgroundColor = 'darkorange';

const threshold = 1000

document.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var new_opactiy = (1 - 0.6*((scrollPosition-350)/1000))
    console.log(scrollPosition)
    console.log(new_opactiy)

    if (350 > scrollPosition > 0) {
        page.style.backgroundColor = 'rgb(' + (255-(scrollPosition/350)*255) +', ' + (140-(scrollPosition/350)*140) + ', 0)'
        page.style.opacity = "1";
    }
    else if (threshold > (scrollPosition - 350) > 0) {
        // page.style.opacity = 0.8 - ((scrollPosition-350)/400);
        page.style.backgroundColor = 'rgba(0,0,0,' + new_opactiy + ')';
    } else {
        page.style.backgroundColor = 'rgba(0,0,0,0.4)';
    }
});
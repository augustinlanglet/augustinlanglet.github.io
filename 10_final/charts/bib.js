const bibNumber = document.getElementById('bib_number');
// const bibContainer = document.getElementById('bib');
const body = document.body
let imageCount = 1;
let intervalId;

bibNumber.addEventListener('mouseover', function () {
    intervalId = setInterval(function () {
        imageCount++;
        console.log('iterating...')
        if (imageCount > 8) {
            imageCount = 1;
        }
        body.style.backgroundImage = 'url(../images/bibs/' + imageCount + '.jpeg)';
        // ../images/bibs/1.jpeg
    }, 100);
});

bibNumber.addEventListener('mouseout', function () {
    clearInterval(intervalId);
    body.style.backgroundImage = 'none';
});
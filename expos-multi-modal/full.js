function startSite() {
    const info = document.getElementById('info');
    const overlay = document.getElementById('overlay');
    const designed = document.getElementById('designed');
    const audio = document.querySelector('audio');
    const madeIn = document.getElementById('made-in');
    const page = document.getElementById('page');
    const ytvideo = document.getElementById('video');

    ytvideo.src = "https://www.youtube.com/embed/KXLBAlx5AHo?autoplay=1&mute=1";

    page.style.display = 'block';
    startButton.style.display = 'none';
    audio.play()
    // video.play()
    designed.classList.add('animation')

    info.addEventListener("click", function () {
        var computedStyle = getComputedStyle(overlay); // otherwise js doesn't know the inital state on first click

        if (computedStyle.display === 'none') {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    });

    setTimeout(() => {
        fetch("country_list.csv")
            .then(response => response.text())
            .then(text => {
                const countries = text.split("\n");
                let i = 0;
                let res = 'Made In ';

                setInterval(() => {
                    res += countries[i] + "      ";
                    madeIn.innerText = res;
                    // i = (i + 1) % countries.length;
                    i += 1
                    if (i == countries.length) {
                        i = 0
                        res = 'Made In '
                    };
                }, 4000); //4000
            })
            .catch(error => console.error(error));
    }, 45000); //45000
}

// function onYouTubeIframeAPIReady() {
//               // Create the YouTube player
//               var player = new YT.Player('myvideo', {
//                 videoId: 'DBJm_HFufeU',
//                 playerVars: {
//                   autoplay: 1, // Autoplay the video
//                   controls: 0, // Hide player controls
//                 },
//               });
//             }

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startSite);
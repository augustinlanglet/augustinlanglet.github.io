document.addEventListener("DOMContentLoaded", function() {
    var title = document.createElement("h1");
    var container = document.getElementById("container");
    var paragraphs = document.getElementById("paragraphs");
    var titleDiv = document.getElementById("title");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var audio = document.querySelector("audio")
    let fontVar = 0;
    var interval;

    title.innerText = "THIS IS HTML";
    p1.innerText = "In 'The Medium is the Massage,' Marshall McLuhan provides a framework to analyze the impact of mass media and technology on human consciousness and communication. One of the key concepts he introduces is the idea of hot and cool media, which he defines based on the level of participation required from the viewer.";
    p2.innerText = "Hot media are those that provide a high degree of information (he gives examples of printed news or radio) and require little active participation from the viewer. Cool media, on the other hand, require more participation from the viewer to complete the message(his examples include television or comics). McLuhan argues that hot media can be overwhelming and tend to create a passive audience, while cool media encourage more active engagement and participation from the viewer.";
    p3.innerText = "I feel like the framework works well to explain any given media will generally affect us by giving a relative spectrum of engagement. But actually assigning each medium on this spectrum nowadays is virtually impossible. A meme image might be a passive and hot media when you first see it, but when you then make modifications to it or spread it yourself and use it as a reference, it takes on a new participatory side.";

    document.body.style.backgroundImage = "url('2001.jpg')";
    document.body.style.height = "100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    title.style.color = "red";
    container.style.textAlign = "center";
    container.style.margin = "20vh";
    container.style.marginRight = "15vw";
    paragraphs.style.display = "none";
    paragraphs.style.marginTop = "50vh";
    title.style.whiteSpace = "nowrap";

    titleDiv.append(title);
    paragraphs.append(p1);
    paragraphs.append(p2);
    paragraphs.append(p3);
    audio.currentTime = 14;

    title.addEventListener("click", function() {
        if (paragraphs.style.display === "none") {
            interval = setInterval(increaseFont, 24);

            paragraphs.style.display = "block";
            audio.play();
        } else {
            title.style.fontSize = "24px";
            paragraphs.style.display = "none";
            audio.pause();
            clearInterval(interval);
        }
    });

    function increaseFont() {
        fontVar++;
        title.style.fontSize = (fontVar/200)**2 + "px";
        if (interval === 100) {
            clearInterval(interval);
        }
    }

    document.body.addEventListener("mousemove", function(event) {
        var x = event.clientX;
        var y = event.clientY;

        var hue = (x / window.innerWidth) * 360;
        var sat = (y / window.innerHeight) * 100;
        // document.body.style.backgroundColor = "hsl(" + hue + ", 50%, 50%)";
        document.body.style.color = "hsl(" + hue + ", " + sat + "%, 50%)";
    });
});
let button = document.getElementById("magic");
let value = 1;

button.addEventListener("click", number);

button.style.border = "none";
button.style.fontSize = "";

function number() {
    button.innerText = "Button";
    
    value = Math.floor(Math.random() * 4);
    if (value == 1) {
        button.style.backgroundColor = "";
        button.style.color = "black";
        button.innerText = "Button";
    } else if (value == 0) {
        button.style.backgroundColor = "blue";
        button.innerText = "Bouton";
        button.style.color = "white";
    } else if (value == 2) {
        button.style.backgroundColor = "red";
        button.style.color = "yellow";
        button.innerText = "按鈕";
    } else if (value == 3) {
        button.style.backgroundColor = "yellow";
        button.style.color = "black";
        button.innerText = "Botón";
    }
    console.log("clicked" + value)
}
const gridContainer = document.getElementById("grid-container");

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function populateGrid() {
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 9; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener("mouseover", () => {
                const randomIndex = getRandomIndex(9) + 1; // Generate a random number between 1 and 9
                gridItem.style.backgroundImage = `url(img/${randomIndex}.png)`;
            });
        }
    }
}

populateGrid();
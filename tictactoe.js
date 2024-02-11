const tile = document.querySelectorAll(".tile");
let playerChoice = "X";
let options = ["", "", "", "", "", "", "", "", ""];
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

tile.forEach(tile => {
    tile.addEventListener("click", clickTile);
});

button.addEventListener('click', () => {
            tile.forEach(tile => {
                tile.textContent = "";
            })
        options = ["", "", "", "", "", "", "", "", ""];
        disableTiles("auto");
        })


function clickTile() {
    let cellIndex = parseInt(this.getAttribute('cellIndex'));

    if (this.textContent == "") {
        this.textContent = playerChoice;
        options[cellIndex] = this.textContent;
        playerChoice = playerChoice == "X" ? "O" : "X";
        h2.innerText = `${playerChoice}'s turn`;

        
        condition(cellIndex);
    }
}

function condition(cellIndex) {

    if ((options[0] === options[1] && options[1] === options[2] && options[0] !== "") ||
        (options[3] === options[4] && options[4] === options[5] && options[3] !== "") ||
        (options[6] === options[7] && options[7] === options[8] && options[6] !== "") ||
        (options[0] === options[3] && options[3] === options[6] && options[0] !== "") ||
        (options[1] === options[4] && options[4] === options[7] && options[1] !== "") ||
        (options[2] === options[5] && options[5] === options[8] && options[2] !== "") ||
        (options[0] === options[4] && options[4] === options[8] && options[0] !== "") ||
        (options[2] === options[4] && options[4] === options[6] && options[2] !== "")
    ) {
        h2.innerText = `${options[cellIndex]} wins`;
        disableTiles("none");
        
    } else if (!options.includes("")) {
        h2.innerText = `Draw`;
    }
}

function disableTiles(value) {
    tile.forEach(tileElement => {
        tileElement.style.pointerEvents = value;
    });
}
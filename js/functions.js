function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceImg = document.getElementById('diceImg')

    diceImg.src = "./images/" + rollResult + ".png";
}

document.getElementById("dice").addEventListener('click', rollDice)



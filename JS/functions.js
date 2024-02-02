document.querySelector('button').addEventListener('click',()=> {
    const randomized_number = getRandomIntNumberInRange(1,6)
    const input = document.querySelector('input')
    
})

function heitaNoppaa() {
    var randomNumber = getRndInteger(1, 7);
    var diceElement = document.getElementById("dice");
    var newDiceImageSrc = "./img/d" + randomNumber + ".png";
    document.getElementById("diceImage").src = newDiceImageSrc;
    var inputElement = document.querySelector('input');
    if (inputElement) {
        inputElement.value = randomNumber;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
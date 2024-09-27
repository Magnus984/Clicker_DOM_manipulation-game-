const squares = document.querySelectorAll('.colorBtn')
const clearDiv = document.getElementById("clear")

let timesClicked = {
    red: 0,
    blue: 0,
    yellow: 0
}

squares.forEach((square) => {
    square.addEventListener("click", () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    })
});

const clear = () => {
    squares.forEach(square => timesClicked[square.value] = 0)
    squares.forEach(square => square.innerText = "")
}

clearDiv.addEventListener("click", clear)
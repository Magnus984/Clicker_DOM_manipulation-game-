let redDiv = document.getElementById(red)
let yellowDiv = document.getElementById(yellow)
let blueDiv = document.getElementById(blue)

const squares = document.querySelectorAll('.colorBtn')

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
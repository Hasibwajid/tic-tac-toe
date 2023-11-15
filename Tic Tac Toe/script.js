let turn = "X";
let boxes = document.getElementsByClassName("box");


// CHANGE TURN OF 0 AND X
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}



// HANDLE WIN 
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 88, 86, 0],
        [3, 4, 5, 88, 260, 0],
        [6, 7, 8, 88, 440, 0],
        [0, 3, 6, -88, 253, 90],
        [1, 4, 7, 89, 253, 90],
        [2, 5, 8, 366, 253, 90],
        [0, 4, 8, 88, 260, 45],
        [2, 4, 6, 88, 260, 135],
    ]
    wins.forEach(e => {
        if (boxText[e[0]].innerText === boxText[e[1]].innerText && boxText[e[2]].innerText === boxText[e[1]].innerText && boxText[e[0]].innerText !== '') {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " WON";
            boxText[e[0]].parentElement.style.background = "gray";
            boxText[e[1]].parentElement.style.background = "gray";
            boxText[e[2]].parentElement.style.background = "gray";

            boxText[e[0]].parentElement.style.color = "white";
            boxText[e[1]].parentElement.style.color = "white";
            boxText[e[2]].parentElement.style.color = "white";

            boxText[e[0]].innerText = "W";
            boxText[e[1]].innerText = "O";
            boxText[e[2]].innerText = "N";


        }

    });
}


// main logic

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");

    element.addEventListener('click', () => {
        if (boxText.innerText == '') {
            boxText.innerText = turn;
            turn = changeTurn();
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            checkWin();
        }
    })
});





// RESET BUTTON
let reset = document.getElementById("reset");

reset.addEventListener('click', () => {
    let boxs = document.getElementsByClassName("boxText");
    Array.from(boxs).forEach(e => {
        e.innerText = "";
        document.getElementsByClassName("info")[0].innerText = "Turn For X";
        document.querySelector(".finish").style.width = "0"


        for (let i = 0; i < boxs.length; i++) {
            boxs[i].parentElement.style.background = "white"
            boxs[i].parentElement.style.color = "black"
        }
    })
});
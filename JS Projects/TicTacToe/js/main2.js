var origBoard;
const huPlayer = 'X';
const aiPlayer = 'O';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const boxs = document.querySelectorAll('.box');


let startGame = () =>{
    // document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    // console.log(origBoard);

    for (let i = 0; i < boxs.length; i++) {
        boxs[i].innerText = '';
        boxs[i].style.removeProperty('background-color');
        boxs[i].addEventListener('click',turnClick,false);
    }
}

let turnClick = (square) =>{
    // console.log(square.target.id);
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id,huPlayer);
        if (!checkWin(origBoard, huPlayer) && !checkTie()) {
            turn(bestSpot(),aiPlayer);
        }
    }
}
function turn(squareId,player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if(gameWon) gameOver(gameWon);
}

let checkWin = (board, player) =>{
    let plays = board.reduce((a, e, i) =>
    (e === player)? a.concat(i) :a,[]);
    let gameWon = null;
    for(let [index, win] of winCombos.entries()){
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index:index, player: player};
            break;
        }
    }
    return gameWon;
}

let gameOver = (gameWon) =>{
    for (const index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor=
            gameWon.player == huPlayer ? "blue" : "red";
    }
    for(var i=0;i<boxs.length;i++){
        boxs[i].removeEventListener('click',turnClick,false);
    }
}
let emptySquare = () =>{
    return origBoard.filter(s => typeof s == 'number');
}
let bestSpot = () =>{
    // return emptySquare()[0];
    return minimax(origBoard,aiPlayer).index;
}

let checkTie = () =>{
    if (emptySquare().length == 0) {
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].style.backgroundColor = "green";
            boxs[i].removeEventListener('click',turnClick,false);
        }
        console.log("Tie");
        return true;
    }
    console.log("Not Tie");
    return false;
}
// Minimax 
let minimax = (newBoard, player) =>{
    var availSpots = emptySquare(newBoard);
    if (checkWin(newBoard,huPlayer)) {
        return{score:-20};
    }else if (checkWin(newBoard, aiPlayer)){
        return {score: 20};
    }else if (availSpots.length === 0){
        return {score: 0};
    }
    var moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;
        if (player == aiPlayer) {
            var result = minimax(newBoard,huPlayer);
            move.score = result.score;
        }else{
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;
        moves.push(move);
    }
    var bestMove;
    if(player === aiPlayer){
        var bestScore = -1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }else{
        var bestScore = 1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

reset.addEventListener('click',()=>{
    origBoard = Array.from(Array(9).keys());
    // console.log(origBoard);

    for (let i = 0; i < boxs.length; i++) {
        boxs[i].innerText = '';
        boxs[i].style.removeProperty('background-color');
        boxs[i].addEventListener('click',turnClick,false);
    }
})

startGame();
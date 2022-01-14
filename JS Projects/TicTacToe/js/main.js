console.log("Welcome to MyTicTacToe Game");
let turn ="X";
let gameOver = false;
let NumCount =0;
// Function to change the turn
const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

// Function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText +=' Won';
            gameOver=true;
            document.getElementsByClassName('imgbox')[0].getElementsByTagName('img')[0].style.width = '300px';
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' && !gameOver){
            boxtext.innerText = turn;
            NumCount++;
            turn=changeTurn();
            checkWin();
            if (!gameOver) {
                console.log(checkTie());
                document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
            }
        }
    })
})

// Add on click listner to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameOver=false;
    NumCount=0;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.getElementsByClassName('imgbox')[0].getElementsByTagName('img')[0].style.width = '0px';
})

// Checking Tie
let checkTie = () =>{
    if (NumCount == 9) {
        return true;
    }
    return false;
}

// Adding AI for Computer Move
let emptySquares = ()=>{
    return origBoard.filter(s => typeof s == 'number');
}

let bestSpot = () =>{
    return emptySquares()[0];
}



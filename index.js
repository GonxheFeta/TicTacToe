
var squares = document.getElementsByClassName("square");
var board = document.getElementById("board");
var xScoreDiv = document.getElementById("xScoreDiv");
var oScoreDiv =document.getElementById("oScoreDiv");
var players = ["X","O"];
let currentPlayer = players[0];
var player1 = "" ;
var player2 = "";
var firstplayer = players[0];

let xScore = 0;
let oScore = 0;

const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.color = '#e62e00'
endMessage.style.textAlign='center'
board.after(endMessage);

const winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if( squares[i].textContent !== "") {
      return;
    }
    squares[i].textContent = currentPlayer;

    if(checkWin(currentPlayer)) {
      
      if(currentPlayer === players[0]) {
         xScore++;
         xScoreDiv.textContent = player1 + " = " + xScore;
         endMessage.textContent = "Game over ! " + player1 + " wins.";
        
      } else {
       oScore++;
       oScoreDiv.textContent = player2 +  " = " + oScore;
       endMessage.textContent = "Game over ! " + player2 + " wins.";
      }
      return
      
    } 
    

    if(checkTie()) {
      endMessage.textContent = "Game is tied" 
      return
    }
    

    if(currentPlayer === players[0]){
      currentPlayer = players[1];
      endMessage.textContent = `O's turn!`;
    } else {
      currentPlayer = players[0];
      endMessage.textContent = `X's turn!`
    }
    // currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]

  })
}

function checkWin(currentPlayer) {
  for(let i =0; i < winning_combinations.length; i++ ){
    const [a, b, c] = winning_combinations[i];

    if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
      return true
    }

  }

  return false;
}

function checkTie() {
  for(let i = 0; i < squares.length; i++) {
    if(squares[i].textContent === "") {
      return false;
    } 
  }

  return true;
}

function restartButton() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";

  }
  if (firstplayer === players[0]) {
    firstplayer = players[1]
  } else {
    firstplayer = players[0];
    
  }
  currentPlayer = firstplayer;
  endMessage.textContent = currentPlayer + `'s turn!`;
  

}

function saveButton () {
   player1 = document.getElementById("xinput").value;
   player2 = document.getElementById("oinput").value;
   document.getElementById( 'modal' ).style.display = 'none';
   xScoreDiv.textContent = player1 + " = " + xScore;
   oScoreDiv.textContent = player2 +  " = " + oScore;
}

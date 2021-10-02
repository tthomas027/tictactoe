const createPlayer = (name, piece) => {
  return {name, piece};
}

const playerOne = createPlayer('Player X', 'X');
const playerTwo = createPlayer('Player O', 'O');

const gameController = (() => {
  let playerOneTurn = true;
  let movesPlayed = 0;

  const winningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  const selectSquare = index => {
    if (gameBoard.board[index] != '') {
      return;
    }
    if (movesPlayed >= 8) {
      return;
    }
    if (playerOneTurn) {
      gameBoard.board[index]= playerOne.piece;
      playerOneTurn = false;
    } else {
      gameBoard.board[index] = playerTwo.piece;
      playerOneTurn = true;
    }
    movesPlayed++;
    checkWinner();
  };
  const update = () => {
    const boardDisplay = document.querySelector('#boardDisplay');

    Array.from(boardDisplay.children).forEach((square, index) => {
      square.textContent = gameBoard.board[index];
    })
  };
  const checkWinner = () => {
    winningMoves.forEach((combination) => {
      if (gameBoard.board[combination[0]] == playerOne.piece && 
        gameBoard.board[combination[1]] == playerOne.piece &&
        gameBoard.board[combination[2]] == playerOne.piece) {
            console.log('Player One wins!')
      } else if (gameBoard.board[combination[0]] == playerTwo.piece && 
        gameBoard.board[combination[1]] == playerTwo.piece &&
        gameBoard.board[combination[2]] == playerTwo.piece) {
          console.log('Player Two wins!')
      }
    });
  };
  return {
    selectSquare,
    update
  }
})();

const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push('');
  }

  const boardDisplay = document.querySelector('#boardDisplay');

  board.forEach((element, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    boardDisplay.appendChild(square);
    square.addEventListener('click', () => {
      gameController.selectSquare(index);
      gameController.update();
    });
  })
  
  return {
    board
  };
})();

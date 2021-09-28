const createPlayer = (name, piece) => {
  return {name, piece};
}

const playerOne = createPlayer('Player X', 'X');
const playerTwo = createPlayer('Player O', 'O');

const gameController = (() => {
  let playerOneTurn = true;
  
  const selectSquare = square => {
    if (square.textContent != '') {
      return;
    }
    if (playerOneTurn) {
      square.textContent = playerOne.piece;
      playerOneTurn = false;
    } else {
      square.textContent = playerTwo.piece;
      playerOneTurn = true;
    }

  };
  return {
    selectSquare
  }
})();

const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push('');
  }

  const boardDisplay = document.querySelector('#boardDisplay');

  board.forEach(element => {
    const square = document.createElement('div');
    square.classList.add('square');
    boardDisplay.appendChild(square);
    square.addEventListener('click', () => {
      gameController.selectSquare(square);
    });
  })
  
  return {
    board
  };
})();

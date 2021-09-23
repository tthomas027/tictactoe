const createPlayer = (name, piece) => {
  return {name, piece};
}

const playerX = createPlayer('Player X', 'X');
const playerO = createPlayer('Player O', 'O');

const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push(i); // fill board with temp data
  }

  const boardDisplay = document.querySelector('#boardDisplay');

  board.forEach(element => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = element; // display temp data
    boardDisplay.appendChild(square);
  })
  
  return {
    board
  };
})();

const displayController = (() => {

})();
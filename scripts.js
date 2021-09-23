const createPlayer = (name, piece) => {
  return {name, piece};
}

const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push('');
  }
  
  return {
    board
  };
})();

const displayController = (() => {

})();
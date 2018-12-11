const board = document.querySelector("#board");
const rows = document.querySelector("tr");
const cells = [...document.getElementsByTagName('td')];
const statusBar = document.querySelector("#statusBar");

const game = {
  turn: 'O',
  board: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
  }
};

// console.log(board);
// console.log(rows);
// console.log(cells);

cells.forEach(cell => {
  cell.addEventListener("click", addMark);
});

function addMark(event) {
  if (this.innerHTML === '') {
    this.innerHTML = game.turn;
    updateBoard(game, event)
    takeTurn(game);
    updateStatus(statusBar);
    console.log(game)
  }
}

function updateStatus(statusBar) {
  const oldStatus = statusBar.childNodes[3];
  const newStatus = document.createElement('p');
  newStatus.innerHTML = game.turn;
  statusBar.replaceChild(newStatus, oldStatus)
}

function takeTurn(game) {
  if (game.turn === 'O') {
    game.turn = 'X';
  } else {
    game.turn = 'O';
  }
}

function updateBoard(game, event) {
  console.log(game)
  console.log(event)
  const cell = event.target.id;
  game.board[cell] = game.turn;
}
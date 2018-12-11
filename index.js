const board = document.querySelector("#board");
const rows = document.querySelector("tr");
const cells = [...document.getElementsByTagName('td')];
const statusBar = document.querySelector("#statusBar");

const game = { turn: 'O' };

console.log(board);
console.log(rows);
console.log(cells);

cells.forEach(cell => {
  cell.addEventListener("click", addMark);

});

function addMark(event) {
  if (this.innerHTML === '') {
    this.innerHTML = game.turn;
    takeTurn(game);
    updateStatus(statusBar);
  }
}

function updateStatus(statusBar) {
  const newStatus = document.createElement('p');
  newStatus.innerHTML = game.turn;
  statusBar.appendChild(newStatus)
}

function takeTurn(game) {
  if (game.turn === 'O') {
    game.turn = 'X';
  } else {
    game.turn = 'O';
  }
}


const board = document.querySelector("#board")
const rows = document.querySelector("tr")
const cells = [...document.getElementsByTagName('td')]

const game = { turn: 'O' }

console.log(board)
console.log(rows)
console.log(cells)

cells.forEach(cell => {
  cell.addEventListener("click", addMark)
})

function addMark(event) {
  if (this.innerHTML === '') {
    this.innerHTML = game.turn;
    takeTurn(game);
  }

}

function takeTurn(game) {
  if (game.turn === 'O') {
    game.turn = 'X';
  } else {
    game.turn = 'O';
  }
}


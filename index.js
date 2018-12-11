const board = document.querySelector("#board")
const rows = document.querySelector("tr")
const cells = [...document.getElementsByTagName('td')]

console.log(board)
console.log(rows)
console.log(cells)

cells.forEach(cell => {
  cell.addEventListener("click", addMark)
})

function addMark(event) {
  console.log(this)
  this.innerText = "X"
}
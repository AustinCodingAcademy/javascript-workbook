const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn =
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, {once: true})

})

function handleClick(e) {
  //place the mark
  //CHeck for win
  //check for a draw
  //switch turns

}
//Find number of blocks
$(document).ready(function () {
  $('[data-stack]').click(function () {
    console.log($('.block').length)
    })
})

if ($('.block').length === 0){
  console.log ('There are no blocks');
}

//Check for win
// function checkForWin(guess, soluton)
// if (data.length !== solution.length){
//   return ('That is not a valid guess');
// }

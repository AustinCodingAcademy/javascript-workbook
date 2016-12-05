
$(document).ready(function() {
  // Put app logic here
  var $dataStack = $("[data-stack]");
  var $clickedStack;
  var $block = null;
  var block = null;

  function isLegal($start, $end) {
    
    if (Number($start.attr('data-block')) < Number($end.attr('data-block'))) {
      return true;
    } else if ($clickedStack.children().length === 0 ) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin(){
    $dataStack.each(function(e){

      $winStack = $(this).attr('data-stack');

      if ($(this).children().length === 4) {
        return $('#announce-game-won').text("You Won!");
      }

    })
  }

  $dataStack.click(function(e){

    $clickedStack = $(this);
    
    // check to see if block is clicked and isn't null and if so detach the last child of the stack.
    if (!$block) {
      $block = $clickedStack.children().last().detach();
    } else if (isLegal($block, $clickedStack.children().last())){
      $clickedStack.append($block);
      $block = null;
      checkForWin();
    }
  });

  function resetGame() {
    $("#clear-button").click(function() {
      console.log('Clicked');
      setTimeout(window.location.reload.bind(window.location), 150);
    })
  }
  resetGame()
});




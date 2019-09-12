'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  function movePiece(Hanoi, moveDisk, Hanoi)
  {
    if (n==0) return;
  
    Hanoi(n-1, from, via , to);
  
    moveDisk(from,to);
  // Test  
    Hanoi(n-1, via, to , from);
  }
  function animateMove()
  {  var elem = moveInfo.elem;
     var dir = moveInfo.dir;
     var styleInfo = window.getComputedStyle(elem);
     var pos = parseInt(styleInfo[moveInfo.whichPos]);
     
     if (((dir==1) && (pos >= moveInfo.endPos)) || 
               ((dir==-1) && (pos <= moveInfo.endPos)))
     {  // alert(moveInfo.state); 
       if (moveInfo.state == "up")
       {  moveInfo.state = "hor";
          moveInfo.whichPos ="left";
          moveInfo.dir = 1;
          if ( moveInfo.fromBar >  moveInfo.toBar) moveInfo.dir = -1;
          //alert("toBar:" + moveInfo.toBar);
          var toBar = document.getElementById("bar"+ moveInfo.toBar);
          // alert(toBar.offsetLeft); 
   
          moveInfo.endPos = toBar.offsetLeft - 
                 Math.floor(elem.offsetWidth/2)+15; // 15 is half of tower width
          return;
       }
  
       else if (moveInfo.state  == "hor" ) // move down
       {  // alert("here");
          moveInfo.state = "down";
          moveInfo.whichPos ="top";
          moveInfo.dir = 1; 
          //alert(elem.offsetHeight);
          moveInfo.endPos = document.getElementById("bottombar").offsetTop - 
                 (barsInfo[moveInfo.toBar].disks.length+1)*elem.offsetHeight;
          return; 
       }
  
       else // end of current call to moveDisk, issue next call
       {  clearInterval(myTimer);  // cancel timer
          barsInfo[moveInfo.toBar].disks.push(elem.id);
          moveDisk();
          return; 
       }
     }
  
     pos = pos + dir*moveInc;
     elem.style[moveInfo.whichPos] = pos+ "px"; 
  }
}

function isLegal(startStack, endStack) {
// array[array.length-1]
let start=stacks[startStack]
let startLastIndex=start.length-1
// start[startLastIndex]
let end=stacks[endStack]
let endLastIndex=end.length-1
// end [endLastIndex]
if(end.length === 0 || start[startLastIndex]< end[endLastIndex]){
return true
} else {return false}
}

function checkForWin() {
    // lost

}


function towersOfHanoi(startStack, endStack) {
if (isLegal(startStack, endStack)) {
  // console.log("I'll take this out later")
movePiece() 
checkForWin()
		if (moves > minMoves - 1) {
			if ($tower.eq(1).children().length === disksNum || $tower.eq(2).children().length === disksNum) {
				swal({
					allowEscapeKey: false,
					allowOutsideClick: false,
					title: 'Congratulations! You Won!',
					text: "Boom Shaka Lak",
					type: 'success',
					confirmButtonColor: '#8bc34a',
					confirmButtonText: 'Play again!'
				}).then(function(isConfirm) {
					if (isConfirm) {
						initGame($tower.eq(0));
					}
				})
			}
		}
		
		setRating(moves);
	}

	function tower(tower) {
		var $disks = tower.children(),
			$topDisk = tower.find(':last-child'),
			topDiskValue = $topDisk.data('value'),
			$holdingDisk = $canves.find('.hold');

		if ($holdingDisk.length !== 0) {
			if (topDiskValue === holding[0]) {
				$holdingDisk.removeClass('hold');
			} else if (topDiskValue === undefined || topDiskValue > holding[0]) {
				$holdingDisk.remove();
				tower.append($('<li class="disk disk-' + holding[0] + '" data-value="' + holding[0] + '"></li>'));
				countMove();
			}
		} else if ($topDisk.length !== 0) {
			$topDisk.addClass('hold');
			holding[0] = topDiskValue;
		}
	}
	
	initGame($tower.eq(0));
	
	// Event Handlers
	$canves.on('click', '.tower', function() {
		var $this = $(this);
		tower($this);
	});
	
	$restart.on('click', function() {
		swal({
				allowEscapeKey: false,
				allowOutsideClick: false,
				title: 'Are you sure?',
				text: "Your progress will be Lost!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#8bc34a',
				cancelButtonColor: '#e91e63',
				confirmButtonText: 'Yes, Restart Game!'
		}).then(function(isConfirm) {
				if (isConfirm) {
					initGame($tower.eq(0));
				}
			})
	});
});
}

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}

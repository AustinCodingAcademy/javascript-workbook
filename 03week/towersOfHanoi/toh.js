function checkForWin() {
    let stackA = stacks.a
    let stackB = stacks.b
    let stackC = stacks.c
    if (stackA.length == 0 
        && (stackB.length == 4 || stackC.length == 4)) {
        console.log("YOU WON!");
        gameStatus = false;
        return true;
    } else {
        return false;
    }
}
  
function towersOfHanoi(startStack, endStack) {
    let movedFrom = stacks[startStack];
    let movedTo = stacks[endStack];
    if (movedFrom.length > 0) {
            let movedPiece = movedFrom[movedFrom.length-1];
            if (movedTo.length == 0 || movedPiece < movedTo[movedTo.length-1]) {
                movedTo.push(movedPiece);
                movedFrom.pop(movedPiece);
                checkForWin();
                return true;
        } else {
            console.log("You cant move a bigger piece on a smaller piece");
            return false;
        }
    } else {
        console.log("There's nothing to move on that stack!");
    }
}

function buildBlocks() {
    const startTowerBottomBlock = document.getElementById('bc14');
    const startTowerBottomMidBlock = document.getElementById('bc13');
    const startTowerTopMidBlock = document.getElementById('bc12');
    const startTowerTopBlock = document.getElementById('bc11');

    // Block 1 creation, position and styling
    const block1 = document.createElement('p');
    block1.classList.add('blocks');
    block1.style.width = '25%';
    block1.style.height = '50px';
    block1.style.backgroundColor = '#00f9ff';
    startTowerTopBlock.appendChild(block1);

    // Block 2 creation, position and styling
    const block2 = document.createElement('p');
    block2.classList.add('blocks');
    block2.style.width = '50%';
    block2.style.height = '50px';
    block2.style.backgroundColor = '#FFFF00';
    startTowerTopMidBlock.appendChild(block2);

    // Block 3 creation, position and styling
    const block3 = document.createElement('p');
    block3.classList.add('blocks');
    block3.style.width = '75%';
    block3.style.height = '50px';
    block3.style.backgroundColor = '#00FF00';
    startTowerBottomMidBlock.appendChild(block3);

    // Block 4 creation, position and styling
    let block4 = document.createElement('p');
    block4.classList.add('blocks');
    block4.style.width = '100%';
    block4.style.height = '50px';
    block4.style.backgroundColor = '#FF0066';
    startTowerBottomBlock.appendChild(block4);
}

buildBlocks();
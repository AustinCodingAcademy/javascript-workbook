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
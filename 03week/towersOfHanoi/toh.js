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

class BuildBlocks {
    constructor(params) {
        Object.assign(this, params)
        this.addToDom();
    }
    addToDom() {
        const block = document.createElement('p');
        block.classList.add('blocks');
        block.style.width = this.width+'%';
        block.style.height = '50px';
        block.style.backgroundColor = this.backgroundColor;
        const parent = document.getElementById(this.parentId)
        parent.appendChild(block);
    }
}
const block1 = new BuildBlocks({
      backgroundColor: '#00f9ff',
      width: 25, 
      parentId: 'bc11'
});
const block2 = new BuildBlocks({
      backgroundColor: '#FFFF00',
      width: 50, 
      parentId: 'bc12'
});
const block3 = new BuildBlocks({
      backgroundColor: '#00FF00', 
      width: 75, 
      parentId: 'bc13'
});
const block4 = new BuildBlocks({
      backgroundColor: '#FF0066', 
      width: 100, 
      parentId: 'bc14'
});

// Same code as the class above
// function BuildBlocks(backgroundColor, width, id) {
//     this.color = backgroundColor;
//     this.width = width;
//     this.parentId = id;
//     this.addToDom = function(){
//         const block = document.createElement('p');
//         block.classList.add('blocks');
//         block.style.width = this.width+'%';
//         block.style.height = '50px';
//         block.style.backgroundColor = this.color;
//         const parent = document.getElementById(this.parentId)
//         parent.appendChild(block);
//     }
//     this.addToDom();
// }
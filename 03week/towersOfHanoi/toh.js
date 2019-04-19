let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
}
let startStack = false;
let gameStatus = true;
let clickStack = false;

function checkForWin() {
    let stackA = stacks.a
    let stackB = stacks.b
    let stackC = stacks.c
    if (stackA.length == 0 
        && (stackB.length == 4 || stackC.length == 4)) {
        console.log("YOU WON!");
        gameStatus = false;
    } else {
        console.log("You haven't won yet")
    }
}

function towersOfHanoi(clickedStack) {
    if (startStack) {
        let movedFrom = stacks[startStack];
        let movedTo = stacks[clickedStack];
        startStack = false;
        if (movedFrom.length > 0) {
            let movedPiece = movedFrom[movedFrom.length-1];
            if (movedTo.length == 0 || movedPiece < movedTo[movedTo.length-1]) {
                movedTo.push(movedPiece);
                movedFrom.pop(movedPiece);
                switch(movedTo) {
                    case stacks.a:
                        switch(movedPiece) {
                            case 1:
                                block_bc1.style.visibility = 'visible';
                                break;
                            case 2:
                                block_bc2.style.visibility = 'visible';
                                break;
                            case 3:
                                block_bc3.style.visibility = 'visible';
                                break;
                            case 4:
                                block_bc4.style.visibility = 'visible';
                                break;
                        }
                        break;
                    case stacks.b:
                        switch(movedPiece) {
                            case 1:
                                block_bc1.style.visibility = 'visible';
                                break;
                            case 2:
                                block_bc2.style.visibility = 'visible';
                                break;
                            case 3:
                                block_bc3.style.visibility = 'visible';
                                break;
                            case 4:
                                block_bc4.style.visibility = 'visible';
                                break;
                        }
                        break;
                    case stacks.c:
                        switch(movedPiece) {
                            case 1:
                                block_bc1.style.visibility = 'visible';
                                break;
                            case 2:
                                block_bc2.style.visibility = 'visible';
                                break;
                            case 3:
                                block_bc3.style.visibility = 'visible';
                                break;
                            case 4:
                                block_bc4.style.visibility = 'visible';
                                break;
                        }
                        break;
                }
                checkForWin();
            } else {
                console.log("You cant move a bigger piece on a smaller piece");
            }
        } else {
            console.log("There's nothing to move on that stack!");
        }
    } else {
        startStack = clickedStack;
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
        block.id = 'block_'+this.parentId;
        block.style.width = this.width+'%';
        block.style.height = '50px';
        block.style.backgroundColor = this.backgroundColor;
        const parent = document.getElementById(this.parentId);
        parent.appendChild(block);
    }
}
const block1 = new BuildBlocks({
      backgroundColor: '#00f9ff',
      width: 25,
      parentId: 'bc1'
});
const block2 = new BuildBlocks({
      backgroundColor: '#FFFF00',
      width: 50,
      parentId: 'bc2'
});
const block3 = new BuildBlocks({
      backgroundColor: '#00FF00',
      width: 75,
      parentId: 'bc3'
});
const block4 = new BuildBlocks({
      backgroundColor: '#FF0066',
      width: 100,
      parentId: 'bc4'
});

const button = document.querySelector('button');
button.addEventListener('click', function(){
    location.reload();
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
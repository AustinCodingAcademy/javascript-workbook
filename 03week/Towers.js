let board = {
    towerA: [],
    towerB: [],
    towerC: []
}


board.towerA.push(7);
board.towerC.push(4);
board.towerC.push(1);

let fromTower = board.towerA;
let toTower = board.towerC;

// get the last value of the object
let lastFrom = fromTower[fromTower.length-1];
let lastTo = toTower[toTower.length-1];

// move pieces
let poped = fromTower.pop();
toTower.push(poped);

console.log(board);
# Rules for Towers of Hanoi
1. Move only one block at a time.
2. A larger block may not be placed ontop of a smaller block.
3. All blocks, except the one being moved, must be on a peg (array).
**Note:** Block in this case says digits in the array. The greater and smaller logic should follow mathematica logic

## Start to play
1. Navigate directory to 03week folder and type `node towersOfHanoi.js` in terminal.
2. Select desired letter (array name) on `start stack:` and `end stack:` 
3. follow the game rule and move number between pegs (arrays).


## JavaScript Note:
1. stacks[endStack].push(stacks[startStack].pop());
    - Using push() method to a value to a array in first index position
    - Using pop() method to delete last index value from array
2. stacks[startStack][stacks[startStack].length - 1]; `Example let stacks = {a: [4, 3, 2, 1], b: [5, 6, 7, 8]};`
    - In order to get desire value (Not length of array)
    1. follow structure stacks[`a or b`][`index of a b`]
    2. In order to find out index of desire array in a object, follow steps below.
        - object name
        - array name from object
        - index of selected array
        - syntax examples: *tableName[ArrayName][IndexNumber]*
        - IndexNumber = [stacks[startStack].length - 1]



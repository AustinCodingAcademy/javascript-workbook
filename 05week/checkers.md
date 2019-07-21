## Spec 0 - Building our classes
### Spec 0.1 - Our classes will consist of a `Checker`, `Board`, and a `Game` class.
```javascript
class Checker {
  constructor(){
    //...
  }
}

class Board {
  constructor(){
    //...
  }
}

class Game {
  constructor(){
    //...
  }
}
```

### Spec 0.2 - Separating our concerns
The [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) refers to deciding what each class will be responsible for.

* The `Checker` class will be concerned about
  * *attributes*
    * a symbol `this.symbol = ...`

* The `Board` class will be concerned about
  * *attributes*
    * A grid layout `this.grid = ...`.
    * "In play" checkers `this.checkers = ...`.
  * *methods*
    * Creating the grid `this.createGrid = function() { ...`.
    * Viewing the grid `this.viewGrid = function() { ...`.
    * Creating the checker instances `this.createCheckers = function() { ...`
    * Selecting a particular checker `this.selectChecker (position) { ...`
    * Killing a checker `this.killChecker = function(position) {...`

* `Game` class will be concerned about
  * *attributes*
    * A game board `this.board = new Board();`.
  * *methods*
    * Starting a game `this.start = function() { ...`.

## Spec 1 - Build the `Checker` class
A `Checker` piece has one concern, its symbol. We can use [unicode characters](http://jrgraphix.net/r/Unicode/25A0-25FF) with the JavaScript `String.fromCharCode(0x1<unicode>)` method. The symbol that is assigned is based on what color (`'white'` or `'black'`) the checker will be. Let's pass in the `color` as an argument, `function Checker(color) { ... ` and set the `Checker` instance's `this.symbol`. `if` the `color` is `'white`, set `this.symbol` equal to `String.fromCharCode(0x125CB)`, otherwise set it equal to `String.fromCharCode(0x125CF)`.

## Spec 2 - Build the `Board` class
Your `Board` class should already have a few methods and an attribute. The attribute `this.grid` will hold our `Checker` instances (pieces) in a two dimensional array making up rows and columns. We could manually build the array which would look something like this:
```javascript
[
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
]
```
but we would rather programmatically build it, as you can see in `this.createGrid()`. `this.viewGrid()` will print out a graphical representation of the board with or without checkers on it.

Our board so far:
```
  0 1 2 3 4 5 6 7
0
1
2
3
4
5
6
7
```

### Spec 2.1 - Let's create some checkers put them on the board
In your `Board` class, create an attribute called `this.checkers` and assign it to an empty array. This will be your repository of checker pieces. Now create a method called `this.createCheckers`. In it, let's define our starting positions of the checkers on the grid. In local `var`iables, define `whitePositions` and `blackPositions` as array of `[row, column]` coordinates:
```
White positions:
[0, 1], [0, 3], [0, 5], [0, 7],
[1, 0], [1, 2], [1, 4], [1, 6],
[2, 1], [2, 3], [2, 5], [2, 7]

Black Positions:
[5, 0], [5, 2], [5, 4], [5, 6],
[6, 1], [6, 3], [6, 5], [6, 7],
[7, 0], [7, 2], [7, 4], [7, 6]
```
In a `for` loop, iterate over the range from 0 - 11, with each index you want to:

1. Instantiate a `'white'` `Checker`

2. Place that checker on the grid at the position corresponding with the index in the positions array

3. Push the checker into your `this.checkers` array

4. Do all three steps above for a `'black'` checker

In your `Game` class, in the `this.start` method, add `this.board.createCheckers()`.

If done correctly, you should see your board populated with checkers!
```
  0 1 2 3 4 5 6 7
0   ○   ○   ○   ○
1 ○   ○   ○   ○
2   ○   ○   ○   ○
3
4
5 ●   ●   ●   ●
6   ●   ●   ●   ●
7 ●   ●   ●   ●
```

### Spec 2.2 - Moving a checker
In your `Board` class, write a method `this.selectChecker` that takes two arguments `row`, `column`. All this does is `return` the checker at that particular spot on `this.grid`. This will be a handy "helper" function.

Next, in your `Game` class, create a `this.moveChecker` method that takes two parameters `start`, `end`. These two arguments will each contain a `row` and a `column`, eg. `50`, `41`. Inside the method, use your board helper method `selectChecker` to select the checker at your `start`ing `rowcolumn`coordinates and set it to a local `var`iable `checker`. Then set that spot on the grid to `null` and set the spot at the `end` `rowcolumn` coordinate to the `checker`.

You should be able to move checkers around on the board now!
```
prompt: which piece?:  50
prompt: to where?:  41

  0 1 2 3 4 5 6 7
0   ○   ○   ○   ○
1 ○   ○   ○   ○
2   ○   ○   ○   ○
3
4   ●
5     ●   ●   ●
6   ●   ●   ●   ●
7 ●   ●   ●   ●
```

## Spec 3 - Killing a checker
In your `Board` class, write a method `killChecker` that take a single argument `position` which is a coordinate pair, eg. `[0, 5]`. In it, use `this.selectChecker` to grab the checker at the position given. Find the index of that checker in the `this.checkers` array. then remove it by [`.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)ing it out.
Then assign the position on `this.grid` to `null`. That checker is dead.

In the `Game` class, in the `moveChecker` method, after you have moved the checker, check to see if the distance of the `start` row and the `end` row is `2` by finding the [absolute value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) of the difference between the rows. If so, which means you must have jumped a checker, find the `killPostition` by finding the [midpoint](https://www.youtube.com/watch?v=bcp9pJxaAOk) between the `start` and `end` positions. Then `killChecker`.

Go play yourself some Checkers!

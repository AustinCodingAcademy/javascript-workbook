"use strict";

const assert = require("assert");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(symbol, color, row, column) {
    this.symbol = symbol,
      this.color = color,
      this.row = row,
      this.column = column,
      this.king = false
  }
}
class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  creatGrid() {
    for
  }
}
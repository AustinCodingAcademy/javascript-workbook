# The Towers Of Hanoi
## Overview:
###### Towers of Hanoi is a simple logic game involving three stacks. The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block.

## Checklist:
## Given:
1. Three stacks are given to user. These stacks are also known as Towers.
2. Each stack is represented as an array.
3. First stack array has four blocks/items.
4. Other two stacks are empty arrays.

## Rules:
1. Only one block/disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3. No block/disk may be placed on top of a smaller block/disk.

## Code Plan:
1. Get user input (startStack, endstack) and then check the rules of the game based on the current stack object
2. Whenever we want to move a number, we need to check that number and make sure that it is less than the number you are trying to place it on

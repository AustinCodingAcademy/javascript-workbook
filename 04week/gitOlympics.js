'use strict'

const listOfOlympians = ['Bob', 'Joe', 'Tina', 'Sarah', 'Jim'];

function printListOfOlympians = (list) => {
  list.foreach(printListOfOlympians(element) {
    console.log(element);
  });
} printListOfOlympians(listOfOlympians)

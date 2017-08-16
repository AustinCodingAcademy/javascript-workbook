'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // YOUR CODE HERE
  let toggle = true;

  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        toggle = !toggle;
      } else {
      alert('One Attempt Per Square!');
      }
    });
  });
// CLEAR BOARD
  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
  });
});

// CHECK FOR WIN
//function checkWinner () {
     //if((datacell0.text() != '') && (datacell0.text () == datacell1.text())
      //&& (datacell1.text() == datacell2.text())){
       //return true;
     //} else if((datacell3.text() != '') && (datacell3.text () == datacell4.text())
        //&& (datacell4.text() == datacell5.text())){
         //return true;
       //} else if((datacell6.text() != '') && (datacell6.text () == datacell7.text())
        //&& (datacell7.text() == datacell8.text())){
         //return true;
       //} else if((datacell0.text() != '') && (datacell0.text () == datacell3.text())
        //&& (datacell3.text() == datacell6.text())){
         //return true;
       //} else if((datacell1.text() != '') && (datacell1.text () == datacell4.text())
        //&& (datacell4.text() == datacell7.text())){
         //return true;
      //} else if((datacell2.text() != '') && (datacell2.text () == datacell5.text())
        //&& (datacell5.text() == datacell8.text())){
         //return true;
       //} else if((datacell0.text() != '') && (datacell0.text () == datacell4.text())
        //&& (datacell4.text() == datacell8.text())){
         //return true;
       //} else if((datacell2.text() != '') && (datacell2.text () == datacell4.text())
        //&& (datacell4.text() == datacell6.text())){
         //return true;
       //} else {
         //return false;
       //}
     //};

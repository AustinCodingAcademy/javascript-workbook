'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let blockheld = null;

    document.querySelectorAll('[data-stack]').forEach(cell => {
      cell.onclick = function(event) {
        event.preventDefault();

        // on click of data-stack get: 1)all data-blocks 2)value of last block
        // 3)value of blockheld if holding block
        let blocks = this.querySelectorAll('[data-block]');
console.log(blocks);

        let lastBlockValue = null;
console.log('blocks length:');
console.log(blocks.length);
        if (blocks.length > 1) {
          lastBlockValue = blocks[blocks.length - 1].attributes[0].value;
console.log('lastBlockValue:');
console.log(lastBlockValue);
        }
        // console.log(lastBlockValue);
console.log(blockheld);
        if (blockheld !== null) {
          let blockheldValue = blockheld.attribute[0].value;
        }

        let message = "";

        //if no block in hand, pick it up
        if (blockheld === null) {
console.log(this);
          blockheld = blocks[blocks.length - 1];
console.log('blockheld:');
console.log(blockheld);
          let lastBlockRemove = blocks[blocks.length - 1].remove();

                    console.log(lastBlockValue);
                    // console.log((blocks[0]).attributes[0].value);

          //    } else if ("smaller()"), then append block, and check for win {
        } else if (blockheldValue < lastBlockValue || lastBlockValue === null) {
            this.append(blockheld);
            blockheld = null;
            document.getElementById('#announce-game-won').innerText(message);
            if (checkWin()) {
              document.getElementById('#announce-game-won').innerText("You won!");
            }
          } else {
            message = "Can't place " + blockheld.data('blockheld') + " on top of " +
              this.lastChild.data('blockheld') + " ";
              document.getElementById('#announce-game-won').innerText(message);
          }
        }
      });

// STILL NEED TO CHANGE checkWin() OVER TO JS
    function checkWin() {
      let $total1 = $('[data-stack="1"]').children().length;
      let $total2 = $('[data-stack="2"]').children().length;
      let $total3 = $('[data-stack="3"]').children().length;
      if ($total1 === 4 || $total2 === 4 || $total3 === 4) {
        return true;
      }
    }
});










// document.addEventListener('DOMContentLoaded', () => {
//   // Your code here sdgsdfgsdfgdsg
//
//   $(document).ready(function() {
//     let blockheld = null;
//     $('[data-stack]').on('click', function(event) {
//       event.preventDefault();
//   //check to see if you have blockheld in hand
//       let message = "";
//       if (blockheld === null) {
//         blockheld = ($(this).children().last().detach());
//         //    } else if (smaller()) {
//       } else if (blockheld.data('block') < $(this).children().last().data('block') ||
//           typeof($(this).children().last().data('block')) === 'undefined') {
//         $(this).append(blockheld);
//         blockheld = null;
//         $('#announce-game-won').text(message);
//         if (checkWin()) {
//           $('#announce-game-won').text("You won!");
//         }
//         } else {
//           message = "Can't place " + blockheld.data('blockheld') + " on top of " +
//             $(this).children().last().data('blockheld') + " ";
//           $('#announce-game-won').text(message);
//         }
//     })
//   /*
//   function smaller() {
//   console.log("current blockheld placing on: "
//       + $(this).children().last().data('blockheld'));
//   // don't allow blockheld to be set on smaller blockheld
//       if (blockheld.data('blockheld') < $(this).children().last().data('blockheld') ||
//           typeof($(this).children().last().data('blockheld')) === 'undefined') {
//   console.log("blockheld set: " + blockheld.data('blockheld'))
//   console.log("blockheld set on: " + $(this).children().last().data('blockheld'));
//         return true;
//       } else {
//         return false;
//       }
//   }
//   */
//     function checkWin() {
//       let $total1 = $('[data-stack="1"]').children().length;
//       let $total2 = $('[data-stack="2"]').children().length;
//       let $total3 = $('[data-stack="3"]').children().length;
//       if ($total1 === 4 || $total2 === 4 || $total3 === 4) {
//         return true;
//       }
//     }
//   });
//
//
//
//
//
//
// });

'use strict';

let coloredMana;
let clearMana;
let cost;
let pointsLeft;
let clearCost;
let coloredCost;
let ccost;

//think about split method
function canCast(mana, cost, option) {
//evaluating the mana
  if(!isNaN(mana.charAt())){
    clearMana = (mana.slice(0,1));
    coloredMana = mana.slice(1).split('');
    console.log(clearMana);
    console.log(coloredMana);
    if(!isNaN(mana.charAt(1))){
      clearMana = mana.slice(0,2);
      coloredMana = mana.slice(3).split('');
      console.log(coloredMana);
      console.log(clearMana);
    }

 }
 else{coloredMana = mana.split('');}
  console.log(coloredMana);

// evaluating the cost
  if(!isNaN(cost.charAt())){
      clearCost = (cost.slice(0,1));
      coloredCost = cost.slice(1).split('');
      console.log(clearCost);
      console.log(coloredCost);
      if(!isNaN(cost.charAt(1))){
        clearCost = cost.slice(0,2);
        coloredCost = cost.slice(3).split('');
        console.log(coloredCost);
        console.log(clearCost);
      }

   }
  else{
    console.log(cost);
    console.log(coloredCost = cost.split(''));
    console.log(coloredCost[0]);

  }
   ccost = coloredCost.length;
   console.log(ccost);
  // (pointsLeft = coloredMana.length);


    for(let i = 0; i <= coloredCost.length; i ++){
     console.log(coloredMana);
     console.log(coloredMana.indexOf(coloredCost[i]));

      if(!coloredMana.includes(coloredCost[i])){
       console.log(coloredMana.indexOf(coloredCost[i])+'blah');
       console.log(coloredMana, coloredCost);
      }

      else{
        ccost --;
        (coloredMana.splice(coloredMana.indexOf(coloredCost[i]), 1));
        // coloredCost.splice(0, 1);
        // console.log(coloredCost+'Cost');
        console.log(coloredMana,'Mana');


      }

      // console.log(coloredMana.length);
    }
    console.log(coloredMana.length);
         if(coloredMana.length > 0){
          clearMana = coloredMana.length + parseInt(clearMana);
          console.log(clearMana);
            if(clearMana >= clearCost){
          console.log(true);
            }
            else{
              // console.log(coloredMana, coloredCost);
              console.log(false);
            }

           }


  // let coloredMana = mana.slice(1);
  // console.log(coloredMana);

}


canCast('W', 'W');

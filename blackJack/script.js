'use strict'

let connect = new XMLHttpRequest();
connect.open("GET", "./cards.xml", false);
connect.send(null);
let theDocument = connect.responseXML;
let wholeDocument = theDocument.children;



function clickButton() {
  let newSvg = document.createElement('SVG');
  let newUse = document.createElement('USE')
  newSvg.appendChild(newUse);
  newSvg.setAttribute('viewBox', '-.2 -236 2178.99 1216.19')
  newSvg.setAttribute('class', 'icon');
  newUse.setAttribute('xlink:href', 'cards.xml#1_club');
  document.body.appendChild(newSvg);
  console.log(newSvg);

}

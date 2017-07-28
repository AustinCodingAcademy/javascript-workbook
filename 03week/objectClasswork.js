const partnerObj = new Object();
partnerObj.name = 'Hotel';
partnerObj.rooms = 120;
partnerObj.pool = true;
partnerObj.roomsbooked = 20;
partnerObj.roomsavail = () => partnerObj.rooms - partnerObj.roomsbooked;

partnerObj.name = 'Cars';

console.log(partnerObj.name, partnerObj.rooms);
console.log(partnerObj.roomsavail(), 'Rooms');
console.log(partnerObj);

const partnerArr = Object.keys(partnerObj);
console.log(partnerArr);

for(let i = 0; i < partnerArr.length; i++) {
  console.log(partnerArr[i]);
  console.log(partnerObj[partnerArr[i]]);
}

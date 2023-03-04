// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  //}
  //return gifts;
//}
//wrapGifts(gifts);
const names = ["Guadalupe", "Ollie", "Aki"];
//const event = [...names, "suprise"];


function writeCards(names, event) {
  const newArray = [];
  for (let i = 0; i < names.length; i++) {
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)}
  return newArray;
}
writeCards();
function countDown(){
  let countDown = 10
  while (countDown >= 0) {
    console.log(countDown --);
  }
}

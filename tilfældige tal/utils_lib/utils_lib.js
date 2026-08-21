  //retunere et tilfældigt tal mellem 0 - 100 
 
 export function generateRandomNumberBetween0And100(max) {
  return Math.floor(Math.random() * max)
 };


 export function $(elementByName) {
  return document.querySelector(elementName);
 }


//helper function
const populateLetterPool = (letterPool) => {
for (let i = letterPool.length - 1; i >= 0; i -= 1) {

  let randomIndex = Math.floor(Math.random() * (i + 1 ));
  let itemAtIndex = letterPool[randomIndex];

  letterPool[randomIndex] = letterPool[i];
  letterPool[i] = itemAtIndex;
}
return letterPool.slice(0, 10);
};
/* Another implementation of above: */
// function randOrd(){
//   return (Math.round(Math.random())-0.5);
// }
// letterPool.sort(randOrd);
// return letterPool.slice(0, 10);


//Adagrams object starts here
const Adagrams = {

  letterArray: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z" ],
  drawLetters () {
    return populateLetterPool(this.letterArray);
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

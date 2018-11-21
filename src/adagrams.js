
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

/* Another implementation of helper method: */
// function randOrd(){
//   return (Math.round(Math.random())-0.5);
// }
// letterPool.sort(randOrd);
// return letterPool.slice(0, 10);


//Adagrams object starts here
const Adagrams = {

  letterArray: ["A", "A", "A", "A", "A", "A", "A", "A",
  "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E",
  "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F",
  "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I",
  "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M",
  "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O",
  "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R",
  "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T",
  "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z" ],
  drawLetters () {
    return populateLetterPool(this.letterArray);
  },
  usesAvailableLetters (input, lettersInHand) {

    const inputArray = input.toUpperCase().split("");
    let letterObj = {};

    lettersInHand.forEach( (char) => {
      console.log(`Array: ${lettersInHand}`);
      console.log(`Char: ${char}`);
      letterObj[char] ? letterObj[char] += 1 : letterObj[char] = 1;

    });

    // for (let letter of lettersInHand){
    //   if (letterObj[letter]) {
    //     letterObj[letter] += 1;
    //   }
    //   else {
    //     letterObj[letter] = 1;
    //   }
    // }

    let bool = true;

    inputArray.forEach( elem => {

      if (bool === false) {
        return false;
      }

      if(letterObj[elem] < 1) {
        bool = false;
        // return false;
      }
      else if (letterObj[elem] >= 1) {
        letterObj[elem] -=1;
      }
      else {
        bool = false;
        // return false;
      }
    });
    return bool;

    // for (let elem of inputArray) {
    //   if(letterObj[elem] < 1) {
    //     return false;
    //   }
    //   else if (letterObj[elem] >= 1) {
    //     letterObj[elem] -= 1;
    //   }
    //   else {
    //     return false;
    //   }
    // }
    // return true;
  },
  scoreWord(input){

    const letterScores = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
    };

    // total_score = 0
    //
    // letters = input.upcase.split('')
    //
    // letters.each do |letter|
    // total_score += letter_scores[letter]
    // end
    //
    // total_score += letters.length > 6 ? 8 : 0
    //
    // total_score

    let totalScore= 0;
    const letters = input.toUpperCase().split('');

    for (let letter of letters) {
      totalScore += letterScores[letter]
    }

    return totalScore += letters.length > 6 ? 8 : 0;
  },

  highestScoreFrom(words) {

    let highestScoringWord = {
      word: '',
      score: 0,
    };

    for (const word of words) {

      let currentScore = this.scoreWord(word);
      let currentWord = word;

      if (currentScore > highestScoringWord["score"]){
        highestScoringWord["score"] = currentScore;
        highestScoringWord["word"] = currentWord;
      }
      // tie score cases
      else if (currentScore === highestScoringWord["score"]) {

        if (highestScoringWord["word"].length !== 10 && currentWord.length === 10) {
          highestScoringWord["score"] = currentScore;
          highestScoringWord["word"] = currentWord;
        }
        else if (currentWord.length < highestScoringWord["word"].length && highestScoringWord["word"].length !== 10) {
          highestScoringWord["score"] = currentScore;
          highestScoringWord["word"] = currentWord;
        }
      }
    }
    return highestScoringWord;
  },

};


// Do not remove this line or your tests will break!
export default Adagrams;

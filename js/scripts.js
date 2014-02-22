var numberTranslator = function(number) {

  var parsedNumber = parseInt(number);
  var stringInputNumbers = parsedNumber.toLocaleString();
  var arrayOfThreeNumbers = stringInputNumbers.split(',');
  var numberAsWord = '';

  var largeNumberPlace = new Object();
      largeNumberPlace[1] = '';
      largeNumberPlace[2] = 'thousand';
      largeNumberPlace[3] = 'million';
      largeNumberPlace[4] = 'billion';
      largeNumberPlace[5] = 'trillion';
  
  for(var j = arrayOfThreeNumbers.length; j > 0; j--){
    var threeNumbers = arrayOfThreeNumbers[arrayOfThreeNumbers.length-j];
    numberAsWord += setsOfThreeNumbers(threeNumbers);
    numberAsWord += largeNumberPlace[j];
    }
  /*if(numberAsWord.charAt(numberAsWord.length-1 === ' ')){
    numberAsWord = numberAsWord.slice(0, numberAsWord.length-1);
  }  */
  return numberAsWord;
}



var setsOfThreeNumbers = function(threeNumbers) {

  var theseThreeNumbers = '';

  var onesPlace = {0:'', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
  var teensPlace = {0: 'ten', 1:'eleven', 2:'twelve', 3:'thirteen', 4:'fourteen', 5:'fifteen', 6:'sixteen', 7:'seventeen', 8:'eighteen', 9:'nineteen'}
  var tensPlace = {0:'', 1:'teen', 2:'twenty ', 3:'thirty ', 4:'forty ', 5:'fifty ', 6:'sixty ', 7:'seventy ', 8:'eighty ', 9:'ninety '};
  var hundredsPlace = {0:'', 1:'one hundred ', 2:'two hundred ', 3:'three hundred ', 4:'four hundred ', 5:'five hundred ', 6:'six hundred ', 7:'seven hundred ', 8:'eight hundred ', 9:'nine hundred '};

  var placeAddress = new Object();
    placeAddress[1] = onesPlace;
    placeAddress[2] = tensPlace;
    placeAddress[3] = hundredsPlace;

  for(var i = threeNumbers.length; i > 0; i--){
      var whichPlace = placeAddress[i];
      if(whichPlace[threeNumbers[threeNumbers.length - i]] === 'teen') {
          theseThreeNumbers += teensPlace[threeNumbers[threeNumbers.length-1]];
          break;
      } else {
      theseThreeNumbers += whichPlace[threeNumbers[threeNumbers.length - i]];
    }
  }  

  return theseThreeNumbers;
}

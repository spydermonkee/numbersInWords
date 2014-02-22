var numberTranslator = function(number) {

  var stringInputNumbers = number.split('');
  var numberAsWord = '';

  numberAsWord += setsOfThreeNumbers(stringInputNumbers);

  return numberAsWord;
}

var setsOfThreeNumbers = function(stringInputNumbers) {

  var theseThreeNumbers = '';

  var onesPlace = {0:'', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
  var teensPlace = {0: 'ten', 1:'eleven', 2:'twelve', 3:'thirteen', 4:'fourteen', 5:'fifteen', 6:'sixteen', 7:'seventeen', 8:'eighteen', 9:'nineteen'}
  var tensPlace = {0:'', 1:'teen', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'};
  var hundredsPlace = {0:'', 1:'one hundred', 2:'two hundred', 3:'three hundred', 4:'four hundred', 5:'five hundred', 6:'six hundred', 7:'seven hundred', 8:'eight hundred', 9:'nine hundred'};


  var placeAddress = new Object();
    placeAddress[1] = onesPlace;
    placeAddress[2] = tensPlace;
    placeAddress[3] = hundredsPlace;

  for(var i = stringInputNumbers.length; i > 0; i--){
      var whichPlace = placeAddress[i];
      if(whichPlace[stringInputNumbers[stringInputNumbers.length - i]] === 'teen') {
          theseThreeNumbers += teensPlace[stringInputNumbers[stringInputNumbers.length-1]];
          break;
      } else {
      theseThreeNumbers += whichPlace[stringInputNumbers[stringInputNumbers.length - i]];
    }
  }  

  return theseThreeNumbers;
}

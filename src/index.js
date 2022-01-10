module.exports = function toReadable (num) {

  let nString = num.toString();
  let result = "";
  let units = [["0", "zero"], ["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"], ["5", "five"], ["6", "six"], ["7", "seven"], ["8", "eight"], ["9", "nine"], ["10", "ten"], ["11", "eleven"], ["12", "twelve"], ["13", "thirteen"], ["14", "fourteen"], ["15", "fifteen"], ["16", "sixteen"], 
["17", "seventeen"], ["18", "eighteen"], ["19", "nineteen"], ["20", "twenty"], ["30", "thirty"], ["40", "forty"], ["50", "fifty"], ["60", "sixty"], ["70", "seventy"], ["80", "eighty"], ["90", "ninety"]];
  
  let dozens = [["2", "twenty"], ["3", "thirty"], ["4", "forty"], ["5", "fifty"], ["6", "sixty"], ["7", "seventy"], ["8", "eighty"], ["9", "ninety"]];
 
    for (let i = 0; i < units.length; i++) {
    if (units[i][0] === nString) {console.log(units[i][1]); }
  }
  
 if(nString.length === 1) {
   result = checkUnits(nString)
 }
  
  function checkUnits(str) {
    for (let i = 0; i < units.length; i++) {
    if (units[i][0] === str) {console.log(units[i][1]); return units[i][1]}
  }
    
  }
  
  checkUnits(nString)
    
  
  if (nString.length === 2) {
    if(nString[1] === "0" || nString[0] === "1") {result = checkUnits(nString)}
    else {
    result = convertDozens(nString);
    
    }
    
  }
  
  if (nString.length > 2) {
    let nStringFirstPart = nString[0];
    let nStringSecondPart = nString.slice(1,3);
    
    if(nStringSecondPart === "00") {
      result = checkUnits(nStringFirstPart) + " hundred"
    } else if(nStringSecondPart[0] === "1") {
       result = checkUnits(nStringFirstPart) + " hundred " + checkUnits(nStringSecondPart);
    } else if (nStringSecondPart[0] === "0") {
      result = checkUnits(nStringFirstPart) + " hundred " + checkUnits(nStringSecondPart[1]);
    }   else if (nStringSecondPart[1] === "0" ) {
      result = checkUnits(nStringFirstPart) + " hundred " + checkUnits(nStringSecondPart); 
    }
    
    
    else {
     
    result = checkUnits(nStringFirstPart) + " hundred " + convertDozens(nStringSecondPart);
    }
    
  } 
  
        
  function convertDozens (str) {
    
    for (let i = 0; i < dozens.length; i++) {
      if (dozens[i][0] === str[0]) {
        
        return dozens[i][1] + " " + checkUnits(str[1])
        
      } 
      
    }
    
  }
    
    return result;
    
  
}
  

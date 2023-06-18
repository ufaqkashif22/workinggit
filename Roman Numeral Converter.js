function convertToRoman(num) {
    let romanToNum ={
      M	:1000,
      CM:	900,
      D:500,
      CD:400,
      C	:100,
      XC:	90,
      L:	50,
      XL:	40,
      X:	10,
      IX:	9,
      V	:5,
      IV:4,
      I:1
    }
    let roman="";
    for(let prop in romanToNum){
      console.log(prop) //this is a key//
      //onsole.log(romanToNum[prop]) //this is a value//
      while(num >= romanToNum[prop]){
          //
        roman +=prop
        num -= romanToNum[prop]
      console.log(num)
      }
    }
   return roman;
  }
  
  console.log(convertToRoman(36));
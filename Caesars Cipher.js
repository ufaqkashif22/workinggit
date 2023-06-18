function rot13(str) {
    let solved ="";
    for(let i=0 ;i<str.length;i++){
      let asciCode = str[i].charCodeAt();
      if(asciCode >=65 && asciCode<= 77) {
        solved += String.fromCharCode(asciCode + 13)
      } else if  (asciCode >=78 && asciCode<= 90){
         solved += String.fromCharCode(asciCode - 13)
      }else{
        solved += str[i]
      }
      console.log(asciCode)
    }
    return solved;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
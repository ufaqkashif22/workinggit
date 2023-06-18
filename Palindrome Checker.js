function palindrome(str) {
  let polishString= str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString= polishString.split("").reverse().join("")
  console.log(reversedString,polishString)
  return (reversedString===polishString) ?true: false
  return true;
}

let result=palindrome("A man, a plan, a canal. Panama");
console.log(result)
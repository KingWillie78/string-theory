/******************
 * YOUR CODE HERE *
 ******************/

function xify(str){
  let string = '';
  for (i = 0; i < str.length; i++){
    string = string + 'x';
  }
  return string;
}

function yellingChars(str){
  let shout = '';
  for (const value of str) {
    shout = shout + value + '!';
  }
  return shout;
}

function indexedChars(str){
  let indexStr = '';
  let indexedValue = 0;
  for (const value of str) {
    indexStr = indexStr + indexedValue + value;
    indexedValue++;
  } 
  return indexStr;
}

function numberedChars(str){
  let counting = '';
  let count = 1;
  for (const value of str) {
    counting = counting + '(' + count + ')' + value;
    count++;
  }
  return counting;
}

function exclaim(str) {
  let change = "";
  for (const value of str) {
    if (value === "." || value === "?") {
      change = change + "!";
    } else change = change + value;
  }
  return change;
}

function repeatIt(str, num) {
  let repeatStr = "";
  let countNum = 0;
  while (countNum < num) {
    repeatStr = repeatStr + str;
    countNum++;
  }
  return repeatStr;
}

function truncate(str) {
  let shortStr = "";
  if (str.length <= 18) {
    return str;
  } else
    for (let i = 0; i < 15; i++) {
      shortStr = shortStr + str[i];
    }
  return shortStr + "...";
}

function ciEmailify(str) {
  let email = "";
  let website = "@codeimmersives.com";
  let period = ".";
  for (let value of str) {
    if (value !== " ") {
      email = email + value.toLowerCase();
    }
    if (value === " ") {
      email = email + period;
    }
  }
  return email + website;
}

function reverse(str) {
  let backward = "";
  for (let i = str.length - 1; i >= 0; i--) {
    backward = backward + str[i];
  }
  return backward;
}

function onlyVowels(str){
  let newStr = '';
  for (const letter of str){
    let vowel = (
      letter ==='e' || 
      letter ==='i' || 
      letter ==='o' || 
      letter ==='u' || 
      letter ==='a' ||
      letter ==='E' || 
      letter ==='I' || 
      letter ==='O' || 
      letter ==='U' || 
      letter ==='A'
    );
    if (vowel){
      newStr = newStr + letter;
    }
  }
  return newStr;
  }

  function crazyCase(str){
    let newStr = '';
    for (let i = 0;i < str.length; i++){
      if (i % 2 === 0){
        let letter = str[i].toLowerCase()
        newStr = newStr + letter
      } else {
        let letter1 = str[i].toUpperCase()
        newStr = newStr + letter1
      }
    }
    return newStr;
  }

  function titleCase(str){
    let newStr = '';
    let rep = false;
    for (let i = 0; i < str.length; i++){
      if (i === 0){
        rep = true
      }
      if (rep === true) {
        rep = false;
      } else if (rep === false){
        newStr = newStr + str[i].toLowerCase();
      }
      if (str[i] === ' '){
        newStr = newStr + str[i +1 ].toUpperCase();
        rep = true;
      } else if (i === 0){
        newStr = newStr + str[i].toUpperCase();
      } 
    }
    return newStr;
    }

    function camelCase(str){
      let newStr = '';
      let rep = false;
      for (let i = 0; i < str.length; i++){
          if (rep === true) {
            rep = false;
          } else{
        if (str[i] === ' '){
          newStr = newStr + str[i+1].toUpperCase();
          rep = true;
        } else {
          newStr = newStr + str[i].toLowerCase();
        }
      }
    }
      return newStr;
    }

    function crazyCase2ReturnOfCrazyCase(str){
      let newStr = '';
      let space = 0;
      for (let i = 0;i < str.length; i++){
        if (space % 2 === 0){
          if (i % 2 === 0){
            let letter = str[i].toLowerCase()
            newStr = newStr + letter
          } else {
            let letter1 = str[i].toUpperCase()
            newStr=newStr+letter1
          }
          if (str[i] === ' '){
            space++
          }
         } else if (space % 2 === 1){
           if ((i - 1)%2 === 0){
          let letter2 = str[i].toLowerCase()
            newStr = newStr + letter2
          } else {
            let letter3 = str[i].toUpperCase()
            newStr = newStr+letter3
          }
          if (str[i] === ' '){
            space++
          }
        }
      }
      return newStr;
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}

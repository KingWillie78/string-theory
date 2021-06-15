function xify(str){
  let string = '';
  for (i = 0; i < str.length; i++){
    string = string + 'x';
  }
  return string;
}

console.log(xify("Strings are fun!"))

function yellingChars(str){
  let shout = '';
  for (const value of str) {
    shout = shout + value + '!';
  }
  return shout;
}

console.log(yellingChars("Wait"))

function indexedChars(str){
  let indexStr = '';
  let indexedValue = 0;
  for (const value of str) {
    indexStr = indexStr + indexedValue + value;
    indexedValue++;
  } 
  return indexStr;
}

console.log(indexedChars("Awesome"))

function numberedChars(str){
  let counting = '';
  let count = 1;
  for (const value of str) {
    counting = counting + '(' + count + ')' + value;
    count++;
  }
  return counting;
}

console.log(numberedChars("Numbers"))

function exclaim(str) {
  let change = "";
  for (const value of str) {
    if (value === "." || value === "?") {
      change = change + "!";
    } else change = change + value;
  }
  return change;
}

console.log(exclaim("Whatsup?"))

function repeatIt(str, num) {
  let repeatStr = "";
  let countNum = 0;
  while (countNum < num) {
    repeatStr = repeatStr + str;
    countNum++;
  }
  return repeatStr;
}

console.log(repeatIt("Repeat ",3))

function turncate(str) {
  let shortStr = "";
  if (str.length <= 18) {
    return str;
  } else
    for (let i = 0; i < 15; i++) {
      shortStr = shortStr + str[i];
    }
  return shortStr + "...";
}

console.log(turncate("this is my love letter to myself"))

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

console.log(ciEmailify("willie.williams"))

function reverse(str) {
  let backward = "";
  for (let i = str.length - 1; i >= 0; i--) {
    backward = backward + str[i];
  }
  return backward;
}

console.log(reverse("nevaeh"))


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

  console.log(onlyVowels("Give me a vowel"))

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

  console.log(crazyCase("I know when the hotline ring"))

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

    console.log(titleCase("I am...batman!!"))

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

    console.log(camelCase("All you had to do was follow the train C.J"))

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

console.log(crazyCase2ReturnOfCrazyCase("I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda."))
const prompt = require('prompt-sync')({ sigint : true });

function xify(str){
  let output = '';
  for (i = 0; i < str.length; i++){
    string = string + 'x';
  }
  return string;
}
console.log(xify('hello'));
console.log(xify('hi there'));

function yellingChars(str){
  let output = '';
  for (let i = 0; i , str.length; i++) {
    output = output + str[i] + "!";
}
return output;
}

console.log(yellingChars("goodness"));
console.log(yellingChars('oh hello'));


function indexedChars(str){
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output = output + [i] + str[i];
  } 
  return output;
}

console.log(indexedChars("Awesome"));

function numberedChars(str){
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output = output + '(' + (i+1) + ')' + str[i]
  }
  return output;
}

console.log(numberedChars('hello'));
console.log(numberedChars('bye'));

function exclaim(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "." || str[i] === "?") {
      output = output + "!";
    } else output += str[i];
  }
  return output;
}

console.log(exclaim("Whatsup? How are you doing? I'm fine."));

function repeatIt(str, num) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output = output + str;
  }
  return output;
}

console.log(repeatIt("bettlejuice", 3));
console.log(repeatIt('oh hi!', 8));

function truncate(str) {
  if (str.length > 15) {
    let output = '';
    for (let i = 0; i < 15; i++) {
      output = output + str[i];
  } 
    output = output + '...';
    return output;
    } else {
  return str;
    }
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));

function ciEmailify(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
          output = output + '.';
      } else {
          output = output + str[i];
      }
  }
  output = output + '@codeimmersives.com'
  return output;
}

console.log(ciEmailify('Willie Williams'));

function reverse(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output = output + str[i];
  }
  return output;
}

console.log(reverse('nevaeh'));


function onlyVowels(str){
  let output = '';
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
      output = output + letter;
    }
  }
  return output;
  }

  console.log(onlyVowels('Knuckles'));
  console.log(onlyVowels('Sonic'));
  console.log(onlyVowels('Tails'));

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
           if ((i - 1) % 2 === 0){
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
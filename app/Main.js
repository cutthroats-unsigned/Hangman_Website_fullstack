//this js file is where the main game function happens
function PrepWord(word)
{
  word = word.toUpperCase();
  word = word.replace(/ +(?= )/g,'');
  if(/^[a-z A-Z]+$/.test(word))
  {
    return word;
  }
  else
  {
    return false;
  }
}
function MakeArray(word)
{
  word = PrepWord(word);
  if(word !== false)
  {
    word = word.split("");
    return word;
  }
  else
  {
    return false;
  }
}
function letterCount(word)
{
  let num = 0;
  for(let i = 0; i<word.length; i++)
  {
    if(word[i] != ' ')
    {
      num++;
    }
  }
  return num;
}
function makeUnderscoreArray(word)
{
  let temp = word;
  for(let i = 0; i<word.length; i++)
  {
    if(temp[i] != ' ')
    {
      temp[i] = '_'
    }
  }
  return temp;
}
function cleanWordArray(word)
{
  let temp = word;
  for(let i = 0; i<word.length; i++)
  {
    temp = temp.replace(',','');
  }
  return temp;
}
function cleanWordString(aString){
  aString = aString.toString();
  aString = cleanWordArray(aString);
  aString = aString.split('').join(' ');
  return aString;
}
function returnPrintableString(){

}
function getWord(){
  var word = prompt("Please enter your name", "<name goes here>");
  document.getElementById('exampleFormControlTextarea1').innerHTML = word;
  return word;
}
let strike = 6;
let wordcCopy;
let worduCopy;
let MainWord;
// the input of the first parameter should be the variable MainWord above ^^
// the input of the second parameter should be the character that the person guesses
let underscoreArray;
let count;
let flag = false;

function MainGame(mainWord, guessedChar)
{
  let indexArray = [];
  let temp;
  if (mainWord === false)
  {
    console.log('ERROR: NO NON-ALPHA CHARATERS ALLOWED');
    return false;
  }
  else
  {
    for(let i = 0; i <= mainWord.length; i++)
    {
      if(mainWord[i] == guessedChar)
      {
        indexArray.push(i);
        count--;
      }
    }
  }
  if(indexArray.length == 0)
  {
    strike--;
    if(strike == 0)
    {
      console.log('you lost!')
      return 0;
    }
    console.log('empty');
    return false
  }
  else
  {
    for(let i = 0; i < indexArray.length; i++)
    {
      underscoreArray[indexArray[i]] = guessedChar;
    }
    temp = underscoreArray.slice(0);
    temp = temp.toString();
    temp = cleanWordArray(temp);
    if(count == 0)
    {
      console.log('you win!')
      return 1;
    }
    return temp.split('').join(' ');
  }
}
let v = " ";
function initWord(){
  flag = true;
   MainWord = MakeArray(PrepWord(getWord()));
   wordcCopy = MainWord.slice(0);
   worduCopy = MainWord.slice(0);
   underscoreArray = makeUnderscoreArray(worduCopy);
   count = letterCount(wordcCopy);
  let  printVar = underscoreArray.slice(0);
   printVar = cleanWordString(printVar);
   v = printVar;
  document.getElementById('exampleFormControlTextarea1').innerHTML = printVar;
  document.getElementById('exampleFormControlTextarea2').innerHTML = "<br/>";

}

function gameLoop(idOfButton){
  if(flag) {
    let x = MainGame(MainWord, $('#' + idOfButton).text());
    console.log(x);
    document.getElementById('exampleFormControlTextarea1').innerHTML = v;
    if (x === false) {
      document.getElementById('exampleFormControlTextarea2').innerHTML = "Letter not in word!";
    } else
      if (x === 0) {
        document.getElementById('exampleFormControlTextarea1').innerHTML = MainWord;
        document.getElementById('exampleFormControlTextarea2').innerHTML = "You Lost!";
        flag = false;
      } else
        if (x === 1) {
          document.getElementById('exampleFormControlTextarea1').innerHTML = cleanWordString(MainWord);
          document.getElementById('exampleFormControlTextarea2').innerHTML = "You Win!";
          flag = false;
        } else {
          document.getElementById('exampleFormControlTextarea2').innerHTML = "<br\>";
          document.getElementById('exampleFormControlTextarea1').innerHTML = x;
          v = x;
        }
  } else {
    document.getElementById('exampleFormControlTextarea1').innerHTML = "<br/>";
    document.getElementById('exampleFormControlTextarea2').innerHTML = "Press the Play Button to Play Again!";
  }
}
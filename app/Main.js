//this js file is where the main game function happens
let maindata = [
  {
    "index":1,
    "word":"bob",
    "hint":"common name",
  }
  ,
  {
    "index":2,
    "word":"hello",
    "hint":"common name",
  }
  , {
    "index":3,
    "word":"program",
    "hint":"common name",
  }
  , {
    "index":4,
    "word":"ice cream",
    "hint":"common name",
  }
]
let mainytest=["ice cream","hello world","testing","i love programming","winter break"];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let finalChoice;
let line;
let str2;

function getRandomLine(line)
{
  line = line.replace(/\r/g, '');
  let indexArray = line.split('\n');
  for(let i = 0; i<indexArray.length; i++)
  {
    count++;
  }
  count--;
  randNum = getRandomInt(0,count);
  finalChoice = indexArray[randNum];
  return finalChoice;
}
function PrepWord(word)
{

  if(/^[a-z A-Z]+$/.test(word))
  {
    word = word.toUpperCase();
    word = word.replace(/ +(?= )/g,'');
    return word;
  }
  else
  {
    return false;
  }
}
function MakeArray(word)
{
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
      temp[i] = '_';
    } else{
      temp[i] = '\n';
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
    temp = temp.replace(/\s/g, "-");
  }
  return temp;
}
function cleanWordString(aString){
  aString = aString.toString();
  aString = cleanWordArray(aString);
 // aString = aString.replace(/\s/g, '');
  aString = aString.split('').join(' ');
  return aString;
}
function getWord(){
  var word = prompt("Please enter your name", "<name goes here>");
  document.getElementById('exampleFormControlTextarea1').innerHTML = word;
  return word;
}
let strike;
let wordcCopy;
let worduCopy;
let MainWord;
// the input of the first parameter should be the variable MainWord above ^^
// the input of the second parameter should be the character that the person guesses
let underscoreArray;
let count;
let gamePlayingFlag = false;
let gamePlayedFlag = false;

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

    temp= temp.replace(/\s/g, '&nbsp;');
    return temp.split('').join(' ');
  }
}
let v = " ";
function initWord(playId){
   document.getElementById('hangImages').src = "images\\h0.png";
   gamePlayingFlag = true;
   gamePlayedFlag = true;
   strike = 6;
   if(playId === "playMulti") {
     MainWord = MakeArray(PrepWord(getWord()));
     console.log("multi");
   } else if(playId === "playSingle"){
     MainWord = MakeArray(PrepWord(mainytest[getRandomInt(0,mainytest.length-1)]));
     console.log("single");
   }else{
     alert("oops! Something went wrong!");
   }
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
  if(gamePlayingFlag) {

    let x = MainGame(MainWord, $('#' + idOfButton).text());
    console.log(x);
    document.getElementById('exampleFormControlTextarea1').innerHTML = v;
    if (x === false) {
      document.getElementById('exampleFormControlTextarea2').innerHTML = "Letter not in word!";
      document.getElementById('hangImages').src = "images\\h" +(6-strike) + ".jpg";
      $('#' + idOfButton).css("background-color", "#F1433F");
    } else
      if (x === 0) {
        document.getElementById('exampleFormControlTextarea1').innerHTML = cleanWordString(MainWord);
        document.getElementById('exampleFormControlTextarea2').innerHTML = "You Lost!";
        document.getElementById('hangImages').src = "images\\h" +(6-strike) + ".jpg";
        $('.alphaBtnMargin').css("background-color", "#007BFF");
        gamePlayingFlag = false;
      } else
        if (x === 1) {
          document.getElementById('exampleFormControlTextarea1').innerHTML = cleanWordString(MainWord);
          document.getElementById('exampleFormControlTextarea2').innerHTML = "You Win!";
          document.getElementById('hangImages').src = "images\\hwin.jpg";
          $('.alphaBtnMargin').css("background-color", "#007BFF");
          gamePlayingFlag = false;
        } else {
          document.getElementById('exampleFormControlTextarea2').innerHTML = " ";
          document.getElementById('exampleFormControlTextarea1').innerHTML = x;
          $('#' + idOfButton).css("background-color", "#87C232");
          v = x;
        }
  } else {
    document.getElementById('exampleFormControlTextarea1').innerHTML = " ";
    if(gamePlayedFlag) {
      document.getElementById('exampleFormControlTextarea2').innerHTML = "Press the Play Button to Play Again!";
    }else{
      document.getElementById('exampleFormControlTextarea2').innerHTML = "Press the Play Button to Play!";
    }
  }
}
//console.log(maindata.length);
console.log(mainytest[getRandomInt(0,mainytest.length-1)]);
/*
function writeToDataBase(word)
{
  let temp;{"index": 20, "word": 'jess', "hint":'its a name'}
  temp = fs.readFileSync('C:\\Users\\danya\\IdeaProjects\\hangman2\\dataBase.txt', 'utf8');
  temp = temp.replace(/\r/g, '');
  let indexArray = temp.split('\n');
  for(let i = 0; i<indexArray.length; i++)
  {
    if(indexArray[i] === word)
    {
      console.log('word exists in dataBase!!!');
      return;
    }
  }

  fs.appendFile('C:\\Users\\danya\\IdeaProjects\\hangman2\\dataBase.txt', '\n'+ word, function (err) {
    if (err) {
      return err;
    } else {
      console.log('EOF now = ' + word);
    }
  });
} */

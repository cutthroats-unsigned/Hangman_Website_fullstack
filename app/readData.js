function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let finalChoice;
let line;

function getRandomLine()
{
    const fs = require('fs') 
    let count = 0;
    let randNum;
    line = fs.readFileSync('D:\\Documents\\GitHub\\cs_320_srs_hangman\\app\\dataBase.txt', 'utf8');
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

function writeToDataBase(word)
{
    var fs = require('fs');
    let temp;
    temp = fs.readFileSync('D:\\Documents\\GitHub\\cs_320_srs_hangman\\app\\dataBase.txt', 'utf8');
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
    
    fs.appendFile('D:\\Documents\\GitHub\\cs_320_srs_hangman\\app\\dataBase.txt', '\n'+ word, function (err) {
      if (err) {
        return err;
      } else {
        console.log('EOF now = ' + word);
      }
    });
}
writeToDataBase('yolo');
console.log(getRandomLine());
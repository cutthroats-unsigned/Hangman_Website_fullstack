//this js file is where the main game function happens
function PrepWord(word)
{
   word = word.toLowerCase();
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
function cleanWord(word)
{
    let temp = word;
    for(let i = 0; i<word.length; i++)
    {
        temp = temp.replace(',','');
    }
    return temp; 
}
let strike = 6;
let MainWord = MakeArray(PrepWord("wYour wString of the word or phrase Gwoes Herew"));
let wordcCopy = MainWord.slice(0);
let worduCopy = MainWord.slice(0);

// the input of the first parameter should be the variable MainWord above ^^
// the input of the second parameter should be the character that the person guesses
let underscoreArray = makeUnderscoreArray(worduCopy);
let count = letterCount(wordcCopy);
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
            }
        }
    }
    if(indexArray.length == 0)
    {
        strike--;
        if(strike == 0)
        {
            console.log('you lost!')
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
       temp = cleanWord(temp);
       return temp;
    }
}
console.log(MainGame(MainWord,'w'));
console.log(MainGame(MainWord,'a'));
console.log(MainGame(MainWord,'e'));

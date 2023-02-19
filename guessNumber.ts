#!/usr/bin/env node
import * as readline from 'readline';

const randomNumber=Math.floor(Math.random()*10)+1;

const r1=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
);

function guessNumberGame(guessedNumber:string)
{
    const numberGuessed:number=parseInt(guessedNumber);
    if(isNaN(numberGuessed))
    {
        console.log("Please enter the number ");
    }
    else{
        if(numberGuessed==randomNumber)
        {
            console.log("Hey you are genius you guess the correct number");
            r1.close();
        }
        else if(numberGuessed<randomNumber)
        {
            console.log("You guess is too low Guess again: ");
        }
        else if(numberGuessed>randomNumber)
        {
            console.log("You guess is too high Guess again: ");
        }
    }
}
console.log("Guess the number between 1 and 10");
r1.prompt();
r1.on('line',guessNumberGame);
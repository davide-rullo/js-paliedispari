/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto.
*/
/*
const userChoice = prompt("pari o dispari?");
const userNumber = Number(prompt("Scegli un numero da 1 a 5"));

function randomNumberFrom1to5() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

console.log("Il numero che hai scelto è " + userNumber);
let CPUNumber = randomNumberFrom1to5();
console.log("La CPU sceglie " + CPUNumber);


let sum = userNumber + CPUNumber;
console.log("Il totale è " + sum);

function evenOrOdd() {
    if (sum % 2 === 0) {
        result = "pari"
    } else {
        result = "dispari"
    }
    return result;
}

let finalResult = evenOrOdd();

if (userChoice %2 === 0 && result === "pari") {
    console.log('Pari, hai vinto');
} else if (userChoice % 2 === 0 && result === "dispari") {
    console.log("Pari, vince la CPU");
} else if (userChoice % 2 !== 0 && result === "pari") {
    console.log("Dispari, vince la CPU");
} else if (userChoice % 2 !== 0 && result === "dispari") {
    console.log("Dispari, hai vinto!");
} 
*/


 /*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire
 se la parola inserita è palindroma*/

const userWord = prompt("scrivi una parola, controllerò se è palindroma");
let wordSum ="";

function isItPalindrome() {
    for (let i = userWord.length - 1; i >= 0; i--) {
        wordSum += userWord[i]
        console.log(wordSum);
    }
    
    if (userWord === wordSum) {
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }    
}

isItPalindrome();

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto.
*/

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

if (sum % 2 === 0 && userChoice === "pari") {
    console.log('Pari, hai vinto');
} else if (sum % 2 === 0 && userChoice === "dispari") {
    console.log("Pari, vince la CPU");
} else if (sum % 2 !== 0 && userChoice === "pari") {
    console.log("Dispari, vince la CPU");
} else if (sum % 2 !== 0 && userChoice === "dispari") {
    console.log("Dispari, hai vinto!");
} 

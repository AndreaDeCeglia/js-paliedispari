
//Pari e Dispari
//L’utente sceglie pari o dispari e 
//inserisce un numero da 1 a 5.
//Generiamo un numero random 
//(sempre da 1 a 5) per il computer 
//(usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri 
//è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//user's choice between even or odd
let choise = prompt(`choose between 'even' or 'odd' !!`);
console.log(choise);

if(choise != 'even' && choise != 'odd'){
    alert(`please, just write 'even' or 'odd' ...`);
    location.reload();
} else {
    let number = parseInt(prompt(`choise a number between 1 and 5`));
    console.log(`your number is ${number}`);
    if(number < 1 || number > 5){
        alert(`please, just write a number between 1 and 5 ...`);
        location.reload();
    } else {
        let resolt = number + randomNumber();
        console.log(`random number is : ${randomNumber()}`);
        console.log(`the resolt is ${resolt}`);        
    }
}

function randomNumber(){
    let randomNumber = Math.round(Math.random() * 5);
    return randomNumber;
 }

if( resolt % 2 == 0 ){
    if( choise == `even`){
        alert(`the resolt is ${resolt}.. it's even, you won !!`);
        console.log(`the resolt is ${resolt}.. it's even, you won !!`);
    } else {
        alert(`the resolt is ${resolt}.. it's odd, you lost !!`);
        console.log(`the resolt is ${resolt}.. it's odd, you lost !!`);
    }
} else {
    if( choise == `odd`){
        alert(`the resolt is ${resolt}.. it's odd, you won !!`);
        console.log(`the resolt is ${resolt}.. it's odd, you won !!`);
    } else {
        alert(`the resolt is ${resolt}.. it's even, you lost !!`);
        console.log(`the resolt is ${resolt}.. it's even, you lost !!`);
    }
}

//**************************************** */
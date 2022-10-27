//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire 
//se la parola inserita è palindroma

// let input = prompt(`write a word to check !!`);
// console.log(input);



// function invert(){

//     let reversed = '';
//     for( let i = input.length -1; i >= 0; i--){
//         reversed = reversed += input[i];
//     }

//     return reversed;
    
// }

// const reversed = invert();

// if( input == reversed){
//     console.log(`your word is palindrome !!`);
//     alert(`your word is palindrome !!`);
// } else {
//     console.log(`your word ain't palindrome`);
//     alert(`your word ain't palindrome !!`);
// }

//********************************************** */
//*************second way ********************** */
//********************************************** */

let input = prompt(`write a word to check !!`);

if( input == input.split('').reverse().join('') ){
    alert(`your word is palindrome !!`);
} else {
    alert(`your word ain't palindrome !!`);
}

//*************************************** */

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



//**************************************** */
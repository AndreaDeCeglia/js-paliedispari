
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

//**********random number function *********** */

function randomNumber(min, max){
    //let cpuNumber = Math.round(Math.random() * (max - min + min)) + min;
    //return cpuNumber;
    return Math.round(Math.random() * (max - min + min)) + min;
}

let cpu = randomNumber(1,5);


//************** let's game ****************** */

// forced choise: odd or even ... or reloading page;
if(choise != 'even' && choise != 'odd'){
    alert(`please, just write 'even' or 'odd' ...`);
    location.reload();
    //if the choise is right, the game just begins;
} else {
    let number = parseInt(prompt(`choise a number between 1 and 5`));
    console.log(`your number is ${number}`);
    //forced choise .. a number between 1 and 5;
    if(number < 1 || number > 5){
        alert(`please, just write a number between 1 and 5 ...`);
        location.reload();
    //if the choise is right, the cpu playes with you;    
    } else {
        let resolt = ( number + cpu );
        console.log(`random number is : ${cpu}`);
        alert(`random number is : ${cpu}`);
        console.log(`the resolt is ${resolt}`);
        alert(`the resolt is ${resolt}`); 
        
        //game resolt's elaboration;
        if( resolt % 2 == 0 ){
            if( choise == `even`){
                alert(`the resolt is ${resolt}.. it's even, you won !!`);
                console.log(`the resolt is ${resolt}.. it's even, you won !!`);
            } else {
                alert(`the resolt is ${resolt}.. it's even, you lost !!`);
                console.log(`the resolt is ${resolt}.. it's even, you lost !!`);
            }
        } else {
            if( choise == `odd`){
                alert(`the resolt is ${resolt}.. it's odd, you won !!`);
                console.log(`the resolt is ${resolt}.. it's odd, you won !!`);
            } else {
                alert(`the resolt is ${resolt}.. it's odd, you lost !!`);
                console.log(`the resolt is ${resolt}.. it's odd, you lost !!`);
            }
        }
    }
}

//***************************************************** */
//******* FUNCTION'S MASTER CLASS ********************* */
//***************************************************** */

let number;

//*******sum function ************ */
function sum(x,y){
    let sum = x + y;
    return sum;
}
//******************************** */


let sumValue = sum(number, cpu);

console.log( sum(number, cpu));

//***evenOrOdd function*********** */
function evenOrOdd(){

    let control = '';

    if (sumValue % 2 == 0){
        control = 'even';
        return control;
    } else {
        control = 'odd';
        return control;
    }
}
//******************************** */


//winner
if( choise == evenOrOdd() ){
    console.log(`you won`);
} else {
    console.log(`you lost`);
}
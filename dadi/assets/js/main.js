/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const giocatore1El = document.querySelector('.giocatore_1');
//console.log(giocatore1El);

const giocatore2El = document.querySelector('.giocatore_2');
//console.log(giocatore2El);

//Generare un numero random da 1 a 6 per il giocatore
const palyer = Math.floor(Math.random() * 6) + 1;
//console.log(palyer);
giocatore1El.innerHTML = `Giocatore 1 (tu): ${palyer}`;

//Generare un numero random da 1 a 6 per il computer
const computer = Math.floor(Math.random() * 6) + 1;
//console.log(computer);
giocatore2El.innerHTML = `Giocatore 2 (computer): ${computer}`;

//tabilire il vincitore, in base a chi fa il punteggio più alto.
let result;
if (palyer > computer ) {
    //console.log('you won');
    result = 'Hai vinto';
}else if (palyer < computer){
    console.log('you lost');
    result = 'Hai perso';
}else{
    //console.log('there are no winners');
    result = 'Non ci sono vincitori';
}
const resultEl = document.querySelector('.risultato');
resultEl.innerHTML = `Il risultato della partita: ${result}`;
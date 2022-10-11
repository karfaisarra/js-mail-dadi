/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo */

//creo una lista di email per che hanno l'accesso
const mail = ['karfaisarra@gmail.com', 'salut@gmail.com', 'ciao@gmail.com', 'hola@gmail.com', 'hello@gmail.com'];
console.log(mail);

//Chiedi all’utente la sua email
const email = prompt('Inserisi la tua e-mail')
//console.log(email);
let valid = false;
for(let i=0; i<mail.length; i++){
    const element = mail[i];
    //console.log(element);
    //controlla che sia nella lista di chi può accedere+ stampa un messaggio appropriato sull’esito del controllo
    if (email == element){
        valid = true;
    }
}
if ( valid == false){
    alert('Siamo spiacenti, non sei tra i partecipanti!');
}else{
    alert('Benvenuto!');
}
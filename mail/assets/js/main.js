/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo */

//creo una lista di email per che hanno l'accesso
const mail = ['karfaisarra@gmail.com', 'aragosap@gmail.com', 'arnulfomarco7@gmail.com', 'barbierimattia.invest@gmail.com', 'pollon.fra@gmail.com'];
//console.log(mail);

//Chiedi all’utente la sua email
const email = prompt('Inserisi la tua mail')
//console.log(email);

for(let i=0; i<mail.length; i++){
    const element = mail[i];
    //console.log(element);
    //controlla che sia nella lista di chi può accedere+ stampa un messaggio appropriato sull’esito del controllo
    if (email == element){
        alert('Benvenuto!');
    } else {
        alert('Siamo spiacenti, non sei tra i partecipanti!');
        break;
    }
}


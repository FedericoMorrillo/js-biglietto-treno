"use strict";

// prezzo al km
const prezzoAlKm = 0.21;

// definiamo le due variabili per chiedere all' utente informazioni convertendo la stringa in valore numerico
const età = parseInt( prompt ('inserisci la tua età'));
const kmDaPercorrere = parseInt( prompt ('quanti Km devi percorrere?'));

// formula per il calcolo del prezzo e impostiamo l importo in 2 decimali
let prezzo = (kmDaPercorrere * prezzoAlKm).toFixed(2);

// messaggio del console.log
let msg= "Il prezzo del biglietto è di: " + prezzo + "€";

// condizioni per inserire gli sconti
if (età < 18){
     prezzo = prezzo - (prezzo / 100 * 20);
     msg = "il prezzo del biglietto è di: " + prezzo + "€ con uno sconto del 20% sul prezzo totale";
}

else if(età >= 65){
     prezzo = prezzo - (prezzo / 100 * 40) ;
     msg = "il prezzo del biglietto è di: " + prezzo + "€ con uno scondo del 40% sul prezzo totale";
}

  alert(msg);  



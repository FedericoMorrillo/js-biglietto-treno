"use strict";

// prezzo al km
const prezzoAlKm = 0.21;

// definiamo le due variabili per chiedere all' utente informazioni convertendo la stringa in valore numerico
let età = parseInt( prompt ('inserisci la tua età'));
let kmDaPercorrere = parseInt( prompt ('quanti Km devi percorrere?'));

// formula per il calcolo del prezzo 
const prezzo = kmDaPercorrere * 0.21;

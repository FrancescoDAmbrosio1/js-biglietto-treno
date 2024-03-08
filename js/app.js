// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)
// BONUS
// provate a stampare il prezzo anche nella pagina html dentro ad un tag p

//CHIEDERE all'utente quanti chilometri deve fare
const distanza = parseInt(prompt('Quanti chilometri vuole percorrere il passeggero?')); //number
//CHIEDERE all'utente quanti anni ha
const eta = parseInt(prompt('Indicare età del passeggero')); //number
const moltiplicatoreCosto = 0.21; //number
let costoBiglietto = distanza * moltiplicatoreCosto;
if (eta < 18){
    costoBiglietto = costoBiglietto - (costoBiglietto * 0.2); //number
    console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€ con applicato uno sconto del 20% per minorenni');
} else if (eta > 65){
    costoBiglietto = costoBiglietto - (costoBiglietto * 0.4); //number
    console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€ con applicato uno sconto del 40% per gli over 65')
} else{
    console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€');
}

//SE eta < 18 anni applicare sconto 20%
//ALTRIMENTI SE  eta > 65 applicare sconto 40%
//ALTRIMENTI applicare prezzo intero
//STAMPARE costo biglietto arrotondato a due cifre (senza però arrontonare il valore di calcolo)
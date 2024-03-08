// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)
// BONUS
// provate a stampare il prezzo anche nella pagina html dentro ad un tag p


const distanza = parseInt(prompt('Quanti chilometri vuole percorrere il passeggero?')); //number

const eta = parseInt(prompt('Indicare età del passeggero')); //number
const moltiplicatoreCosto = 0.21; //number
let costoBiglietto = distanza * moltiplicatoreCosto;
// if (eta < 18){
//     costoBiglietto = costoBiglietto - (costoBiglietto * 0.2); //number
//     console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€ con applicato uno sconto del 20% per minorenni');
// } else if (eta > 65){
//     costoBiglietto = costoBiglietto - (costoBiglietto * 0.4); //number
//     console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€ con applicato uno sconto del 40% per gli over 65')
// } else{
//     console.log('Il costo del biglietto è di:', costoBiglietto.toFixed(2), '€');
// }

if (eta < 18){
    costoBiglietto = costoBiglietto - (costoBiglietto * 0.2); //number
    document.getElementById("costoBiglietto").innerHTML = "Il costo del biglietto è di " + costoBiglietto.toFixed(2) + "€ con applicato uno sconto del 20% per minorenni";
    document.getElementById("riga").style.visibility = "visible";
} else if (eta > 65){
    costoBiglietto = costoBiglietto - (costoBiglietto * 0.4); //number
    document.getElementById("costoBiglietto").innerHTML = "Il costo del biglietto è di " + costoBiglietto.toFixed(2) + "€ con applicato uno sconto del 40% per over 65";
    document.getElementById("riga").style.visibility = "visible";
} else{
    document.getElementById("costoBiglietto").innerHTML = "Il costo del biglietto è di " + costoBiglietto.toFixed(2) + "€";
    document.getElementById("riga").style.visibility = "visible";
}
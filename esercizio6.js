// Definisci una funzione chimata convertitore_tempo con il parametro numeroero
function convertitore_tempo(numero)
 { 
  // Calcola il numero delle ore dividendo numero per 60 
  var ore = Math.floor(numero / 60);  

  // Caloola il rimanente dei minuti Calculate prendendo il resto dividendo numero per 60
  var minuti = numero % 60;

  // Ritorna il risultato in una stringa in un formato
  return ore + ":" + minuti;         
}

// Fai vedere il risultato chiamndo la funzione convertitore_tempo con diversi numeri di input
console.log(convertitore_tempo(71));
console.log(convertitore_tempo(450));
console.log(convertitore_tempo(1441)); 
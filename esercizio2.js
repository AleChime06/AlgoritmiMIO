// Definisci una funzione chiamata multipli che pesca un parametro x
function multipli(x) {
    // Controlla se x e divisibile per 3 o 7
    if (x % 3 == 0 || x % 7 == 0) {
      // Se non e 0 viene scritto il risultato 
      return true;
    } 
    // Se non e divisibile per 3 o 7 dai come risultato falso  
    else {
      return false;
    }
  }
  
  // Salva il risultato della funzione multipli nel argomento 12 della console
  console.log(multipli(12));
  
  // Salva il risultato della funzione multipli nel argomento 14 della console
  console.log(multipli(14));
  
  // Salva il risultato della funzione multipli nel argomento 10 della console
  console.log(multipli(10));
  
  // Salva il risultato della funzione multipli nel argomento 11 della console
  console.log(multipli(11)); 
  
  /* SPIEGAIONE SOLUZIONE 
      La funzione multipli prende un parametro x e controlla che sia divisibile per 3 o 7 nel caso sia divisibile il risultato sarà 'true' se al contrario nn fosse divisibile il risultato sarà 'false' 
  */
  
  /* ESEMPIO OUTPUT
      console.log(multipli(40)); Darà come risultato false non essendo divisibile per 3 o 7 
      console.log(multipli(35)); Darà come risultato true essendo divisibile per 3 o 7 
      console.log(multipli(22)); Darà come risultato false non essendo divisibile per 3 o 7 
      console.log(multipli(21)); Darà come risultato true essendo divisibile per 3 o 7 
  */
// Definisci una funzions chiamata maggiore_di_tre che prende 3 parametri: x, y e z
function maggiore_di_tre(x, y, z) {
    // Inizializza la variabile valore_massimo con il valore 0
    let valore_massimo = 0;
  
    // Controlla se x è più grande di y
    if (x > y) {
      // Se è più grande, assegna al valore x il valore_massimo
      valore_massimo = x;
    } else {
      // Se è falso, assegna al valore y il valore_massimo
      valore_massimo = y;
    }
  
    // Controlla se z è maggiore del valore_massimo
    if (z > valore_massimo) {
      // Se è vero, aggiorna il valore_massimo con il valore z 
      valore_massimo = z;
    }
  
    // Alla fine ti ritona il valore_massimo
    return valore_massimo;
  }
  
  // Registra il risultato della chiamata maggiore_di_tre con gli argomenti 1, 0, 1 sulla console
  console.log(maggiore_di_tre(1, 0, 1));
  
  // Registra il risultato della chiamata maggiore_di_tre con gli argomenti 0, -10, -20 sulla console
  console.log(maggiore_di_tre(0, -10, -20));
  
  // Registra il risultato della chiamata maggiore_di_tre con gli argomenti 1000, 510, 440 sulla console
  console.log(maggiore_di_tre(1000, 510, 440));  
// Funzione per verificare se la riorganizzazione degli elementi di un array può renderlo uguale a un altro array
function verifica_array(array1, array2) {
    // Scorrere gli elementi di array1
    for (var i = 0; i < array1.length; i++) {
      // Ciclo per scambiare elementi e controllare permutazioni
      for (var j = i; j < array1.length; j++) {
        // Inizializza il risultato e la variabile temporanea
        var risultato = true,
          temp = array1[i];
  
        // Scambia gli elementi
        array1[i] = array1[j];
        array1[j] = temp;
  
        // Paragona gli elementi per modificare gli array1 con array2
        for (var k = 0; k < array1.length; k++) {
          if (array1[k] !== array2[k]) {
            risultato = false;
            break;
          }
        }
  
        // Se gli array corrispondono, ritorna un true
        if (risultato) {
          return true;
        }
  
        //Ripristina l'ordine originale scambiando gli elementi
        array1[j] = array1[i];
        array1[i] = temp;
      }
    }
  
    // Se gli array non corrispondo, ritorna un false
    return false;
  }
  
  // Esempi Usati
  console.log(verifica_array([10, 20, 30], [10, 20, 30]));   // true
  console.log(verifica_array([10, 20, 30], [30, 10, 20]));   // true
  console.log(verifica_array([10, 20, 30, 40], [10, 30, 20, 40]));   // false
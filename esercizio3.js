// Definisci una funzione chiamata rimuovi_caratteri prendendo 2 caratter str e posizione_caratteri
function rimuovi_caratteri(str, posizione_caratteri) {
    // Estrai la parte della stringa dall'inizio fino alla posizione_caratteri (senza includere il carattere in posizione_caratteri)
    parte_1 = str.substring(0, posizione_caratteri);
    // Estrai la parte della stringa dalla posizione_caratteri + 1 fino alla fine della stringa
    parte_2 = str.substring(posizione_caratteri + 1, str.length);
    // Restituisce la concatenazione di parte_1 e parte_2, rimuovendo di fatto il carattere in posizione_caratteri
    return (parte_1 + parte_2);
  }
  
  // Salva il risultato della chiamata della funzione rimuovi_caratteri con gli argomenti "Python" e 3 nella console
  console.log(rimuovi_caratteri("Python", 3)); /* Risultato: "Pyton" */
  
  // Salva il risultato della chiamata della funzione rimuovi_caratteri con gli argomenti "Python" e 3 nella console
  console.log(rimuovi_caratteri("Python", 3)); /* Risultato: "Pyton" */
  
  // Salva il risultato della chiamata della funzione rimuovi_caratteri con gli argomenti "Python" e 5 nella console 
  console.log(rimuovi_caratteri("Python", 5)); /* Risultato: "Pythn" */
  
  
  /*
    Questo codice implementa una semplice funzione per rimuovere un singolo carattere da una stringa in base alla posizione specificata e dimostra il suo funzionamento attraverso diverse chiamate di esempio.
  
    Pyton
    Pyton
    Pytho
  */
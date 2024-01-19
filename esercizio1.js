// Definisci una funziona che converte i gradi celsius ai gradi fahrenheit
function gradi_converti(celsius) {
    // Prende l'input dei gradi celsius in una variabile
    var gradi_celsius = celsius;
  
    // Calcola l'equivalente grado fahrenheit dal celisus
    var gradi_convertiahr = gradi_celsius * 9 / 5 + 32;
  
    // Crea un messaggio che mostra io risultato
    var messaggio = gradi_celsius + '\xB0C is ' + gradi_convertiahr + ' \xB0F.';
  
    // Fai vedere il messaggio
    console.log(messaggio);
  }
  
  // Definisci una funziona per convertire dai gradi fahrenheit ai gradi celsius
  function gradi_converti_fahr(fahrenheit) {
    // Prendi l'input dei gradi Fahrenheit in una variabile
    var temperatura_fahrenheit = fahrenheit;
  
    // Calcola l'equivalente grado celsius del fahrenheit
    var gradi_converti_fahrel = (temperatura_fahrenheit - 32) * 5 / 9;
  
    // Crea un messaggio stringa che descrive il risultato della conversione
    var messaggio = temperatura_fahrenheit + '\xB0F is ' + gradi_converti_fahrel + '\xB0C.';
  
    // Fai vedere il messaggio nella console
    console.log(messaggio);
  }
  
  // Chima la funziona gradi_converti con la temperatura celsius a 60
  gradi_converti(70);
  
  // Chiama la funzione gradi_converti_fahr con la temperatura Fahrenheit a 45
  gradi_converti_fahr(35); 

  /*
    Per trafromare i gradi celsius in fahrenherit si prende il valore inserito nella varibile gradi_converti e la si trasforma in gradi_coverti_fahr con la formula * 9 / 5 + 32
    Per trafromare i gradi fahrenherit in celsius si prende il valore inserito nella varibile gradi_converti_fahr e la si trasforma in gradi_coverti con la formula - 32 * 5 / 9


    RISULTATO:
    70°C is 158 °F.
    35°F is 1.6666666666666667°C.
  */

// Definisci una funzione chiamata stringa_invertita con il parametro str
function stringa_invertita(str) {
    // Dividere la stringa in una serie di caratteri, invertire l'ordine e unirli nuovamente in una stringa
    return str.split("").reverse().join("");
}

// Registra il risultato della chiamata stringa_invertita con l'argomento "w3resource" sulla console
console.log(stringa_invertita("w3resource"));

// Registra il risultato della chiamata stringa_invertita con l'argomento "www" sulla console
console.log(stringa_invertita("www"));

// Registra il risultato della chiamata stringa_invertita con l'argomento "Javscript" sulla console
console.log(stringa_invertita("JavaScript")); 
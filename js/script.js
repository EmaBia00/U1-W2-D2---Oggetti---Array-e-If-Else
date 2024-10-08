/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1:");

const num1 = 100;
const num2 = 200;

if (num1 > num2) {
  console.log(`Il più grande tra i numeri ${num1} e ${num2} è: ${num1}`);
} else {
  console.log(`Il più grande tra i numeri ${num1} e ${num2} è: ${num2}`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2:");

if (num1 !== 5) {
  console.log(`I numeri ${num1} e 5 sono: Not Equal`);
} else {
  console.log(`I numeri ${num1} e 5 sono: Equal`);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3:");

if (num1 % 5 === 0) {
  console.log(`Il numero ${num1} è divisibile per 5`);
} else {
  console.log(`Il numero ${num1} non è divisibile per 5`);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4:");

const num3 = 4;
const num4 = 4;

if (num3 === 8 || num4 === 8 || num3 + num4 === 8 || num3 - num4 === 8) {
  console.log(
    "Il valore o il risultato dell'operazione di addizione/sottrazione è uguale a 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5:");

const totalShoppingCart = 40;

if (totalShoppingCart > 50) {
  console.log(
    `Il totale ${totalShoppingCart} è maggiore di 50, quindi l'utente ha diritto a una spedizione gratuita`
  );
} else {
  console.log(
    `Il totale ${totalShoppingCart} non supera 50, quindi l'utente pagherà la spedizione di 10 per un totale di ${
      totalShoppingCart + 10
    }`
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6:");

const totalShoppingCartDiscount =
  totalShoppingCart - (totalShoppingCart * 20) / 100;

if (totalShoppingCartDiscount > 50) {
  console.log(
    `Il totale scontato del 20% per via del BlackFriday ${totalShoppingCartDiscount} è maggiore di 50, quindi l'utente ha diritto a una spedizione gratuita`
  );
} else {
  console.log(
    `Il totale scontato del 20% per via del BlackFriday ${totalShoppingCartDiscount} non supera 50, quindi l'utente pagherà la spedizione di 10 per un totale di ${
      totalShoppingCartDiscount + 10
    }`
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7:");

let var1 = 10;
let var2 = 5;
let var3 = 15;
let tmp = null;

if (var1 < var2) {
  tmp = var1;
  var1 = var2;
  var2 = tmp;
}
if (var1 < var3) {
  tmp = var1;
  var1 = var3;
  var3 = tmp;
}
if (var2 < var3) {
  tmp = var2;
  var2 = var3;
  var3 = tmp;
}

console.log(
  `L'ordine decrescente delle variabili create è il seguente: ${var1} - ${var2} - ${var3}`
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8:");

const typeofNum = 30;

if (typeof typeofNum === "number") {
  console.log(`Il valore ${typeofNum} è di tipo ${typeof typeofNum}`);
} else {
  console.log(
    `Il valore ${typeofNum} è di tipo ${typeof typeofNum} e non number`
  );
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9:");

const numPari = 8;

if (numPari % 2 === 0) {
  console.log(`Il valore ${numPari} è pari`);
} else {
  console.log(`Il valore ${numPari} è dispari`);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10:");

let val = 4;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 11:");

me.city = "Toronto";
console.log(`La nuova proprietà aggiunta ha il valore ${me.city}`);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 12:");

console.log(`Prima di eliminare lastName ha il valore: ${me.lastName}`);
delete me.lastName;
console.log(`Dopo aver eliminato lastName il valore è: ${me.lastName}`);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 13:");

console.log(
  `Prima di eliminare l'ultimo elemento della lista Skills ha il valore: ${me.skills[2]}`
);
me.skills.pop();
console.log(
  `Dopo aver eliminato l'ultimo elemento della lista Skills ha il valore: ${me.skills[2]}`
);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 14:");

const arrayList = [];

console.log(`Lista creata senza valori: ${arrayList}`);
arrayList.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Lista dopo aver inserito i valori: ${arrayList}`);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 15:");

console.log(`Lista con i seguenti valori: ${arrayList}`);
arrayList.splice(9, 1, 100);
console.log(`Lista aver sostituito 10 con il valore 100: ${arrayList}`);

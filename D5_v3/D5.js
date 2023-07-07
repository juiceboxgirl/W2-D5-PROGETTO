/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("----esercizio 1----");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("----esercizio 2----");

let sortPets = pets.sort();
console.log(sortPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("----esercizio 3----");

let reversePets = pets.reverse();
console.log(reversePets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("----esercizio 4----");

const shifted = pets.shift();

console.log(pets);

const pushed = pets.push("dog");

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("----esercizio 5----");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const licensePlateValues = ["CR546TO", "LU298RO", "PE966FI"];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateValues[i];
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("----esercizio 6----");

const Audi = cars.push({ brand: "Audi", model: "A2", color: "silver", trims: ["titanium", "s", "ac"] });

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("----esercizio 7----");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  let firstElement = cars[i].trims[0];
  console.log(firstElement);
  justTrims.push(firstElement);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("----esercizio 8----");

for (i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0).toLowerCase();

  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

console.log(cars);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("----esercizio 9----");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

while (((i = 0), i < numericArray)) {
  numericArray++;

  console.log(numericArray);
}

console.log(numericArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("----esercizio 10----");

const charactersArray = ["g", "n", "u", "z", "d"];

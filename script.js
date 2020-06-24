var listaCognomi = ["Rossi", "Bianchi", "Santoro", "Conte", "Grasso", "Megna"];
var listaCognomiOrd;
var listaItem;
var listaPrec;
var posizione;
console.log(listaCognomi);

// Inserimento cognome e aggiunta alla lista
var cognomeUtente = prompt("Inserisci il tuo cognome: ");

listaCognomi.push(cognomeUtente);

// Inserire il cognome nella lista con ordinamento
listaCognomiOrd = listaCognomi.sort();

console.log(listaCognomiOrd);

for (var i = 0; i < listaCognomiOrd.length; i++) {
  listaItem = listaCognomiOrd[i];
  listaPrec = document.getElementById("lista").innerHTML;
  document.getElementById("lista").innerHTML= listaPrec + "<li>" + listaItem + "</li>" ;
}

// Indicare la rispettiva posizione
posizione = (listaCognomiOrd.indexOf(cognomeUtente)) + 1;
document.getElementById("posizione").innerHTML = "Il cognome inserito è alla posizione numero: " + posizione;

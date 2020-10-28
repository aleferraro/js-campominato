/*
Il computer deve generare 16 numeri casuali tra 1 e 100. -- OK
I numeri non possono essere duplicati -- OK
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/


//definisco le variabili
var userNumberEl = document.getElementById('userNumber');
var bombNumber = [];
var play = document.getElementById('play');
var userNumber = 0;

//funzione per generare numeri random
function numberBetween(min, max){
  max++;
  return Math.floor(Math.random() * (max - min) + min);
}

// genero i 16 'bombNumber'
while(bombNumber.length < 16){
  var num =   numberBetween(1, 100);
  console.log(num, bombNumber.includes(num));
  if(bombNumber.includes(num) == false){
    bombNumber.push(num);
  }
}

console.log('bombNumber', bombNumber);

//definisco una funzione che mi dice se 1 elemento è contenuto in un array
// function isInArray (value, array){
//   var result;
//   if(array.includes(value) == true){
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }


//al click prelevo il numero inserito dall'utente e controllo se è un numero bomba o no
play.addEventListener('click', function(){
  userNumber = userNumberEl.value;
  console.log('userNumber', userNumber);
  console.log('bombs', bombNumber);
  console.log(bombNumber.includes(userNumber));
})

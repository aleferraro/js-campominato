/*
Il computer deve generare 16 numeri casuali tra 1 e 100. -- OK
I numeri non possono essere duplicati -- OK
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. -- OK
L'utente non può inserire più volte lo stesso numero. -- OK
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero. -- OK
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.  -- OK
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito. -- OK
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/


//definisco le variabili
var numbers = 100;

var bombNumber = [];
var userNumber = [];

var userNumberEl = document.getElementById('userNumber');
var play = document.getElementById('play');
var playedNumbers = document.getElementById('playedNumbers')
var message = document.getElementById('message');
var score = document.getElementById('punteggio');

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
console.log('bombs', bombNumber);

play.addEventListener('click', function(){
  //al click prelevo il numero inserito dall'utente
  var inputNumber = userNumberEl.value;


  console.log('userNumber', inputNumber);
  console.log(bombNumber.includes(parseInt(inputNumber)));
  console.log('userNumber', userNumber);

  //se l'utente inserisce un numero che corrisponde a una bomba perde, altrimenti continua a giocare
  if(bombNumber.includes(parseInt(inputNumber))){
    message.innerHTML = 'Hai trovato una bomba! Hai Perso!';
    score.innerHTML = 'Hai totalizzato ' + userNumber.length + ' punti.';
  } else {
    message.innerHTML = 'Inserisci un altro numero';

    //controllo se il numero inserito dall'utente è già stato inserito
    if(userNumber.includes(inputNumber)){
      alert('Il numero ' + inputNumber + ' è già stato inserito!');
    } else {
      userNumber.push(inputNumber);//inserisco i numeri dell'utente in un array

      playedNumbers.innerHTML += inputNumber + ', ';//scrive sull'html i numeri giocati
    }
  }

  //quando l'utente inserisce tutti i numeri senza bomba vince
  if(userNumber.length === (numbers - bombNumber.length)){
    message.innerHTML = 'Complimenti! Hai trovato tutti i numeri senza bomba! Hai Vinto!';
  }
})

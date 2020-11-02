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
var NUMBERS = 100;
var BOMBS = 16;
var MIN_NUM = 1;
var MAX_NUM = 100;

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

// definisco i vari livelli
var difficultyEl = document.getElementById('difficulty')

document.getElementById('level').innerHTML = 'tra ' + MIN_NUM + ' e ' + MAX_NUM;

// genero i 16 'bombNumber'
while(bombNumber.length < BOMBS){
  var num =   numberBetween(MIN_NUM, MAX_NUM);
  console.log(num, bombNumber.includes(num));
  if(bombNumber.includes(num) == false){
    bombNumber.push(num);
  }
}
console.log('bombs', bombNumber);

difficultyEl.addEventListener('change', function(){
  //seleziono il livello di difficoltà
  var difficultyVal = difficultyEl.value;

  switch (difficultyVal) {
    case '0':
    MAX_NUM = 100
    break;
    case '1':
    MAX_NUM = 80
    break;
    case '2':
    MAX_NUM = 50
    break;

  }

  document.getElementById('level').innerHTML = 'tra ' + MIN_NUM + ' e ' + MAX_NUM;

  // genero i 16 'bombNumber'
  bombNumber = [];
  while(bombNumber.length < BOMBS){
    var num =   numberBetween(MIN_NUM, MAX_NUM);
    console.log(num, bombNumber.includes(num));
    if(bombNumber.includes(num) == false){
      bombNumber.push(num);
    }
  }
  console.log('bombs', bombNumber);

})


play.addEventListener('click', function(){
  //al click di 'gioca' prelevo il numero inserito dall'utente
  var inputNumber = parseInt(userNumberEl.value);


  console.log('userNumber', inputNumber);
  console.log(bombNumber.includes(parseInt(inputNumber)));
  console.log('userNumber', userNumber);
  if ((isNaN(inputNumber)) || (inputNumber < MIN_NUM) || (inputNumber > MAX_NUM)){
    alert('Il numero inserito non è valido!')
  } else {
    //se l'utente inserisce un numero che corrisponde a una bomba perde, altrimenti continua a giocare
    if(bombNumber.includes(parseInt(inputNumber))){
      message.innerHTML = 'Hai trovato una bomba! Hai Perso!';
      score.innerHTML = 'Hai totalizzato ' + userNumber.length + ' punti.';
      document.getElementById('retry').classList.add('display-block');
      document.getElementById('play').classList.add('display-none');
    } else {
      message.innerHTML = 'Inserisci un altro numero';

      //controllo se il numero inserito dall'utente è già stato inserito
      if(userNumber.includes(inputNumber)){
        alert('Il numero ' + inputNumber + ' è già stato inserito!');
      } else {
        //inserisco i numeri dell'utente in un array
        userNumber.push(inputNumber);

        //scrivo sull'html i numeri giocati
        playedNumbers.innerHTML += inputNumber + ', ';
      }
  }
  }

  //quando l'utente inserisce tutti i numeri senza bomba vince
  if(userNumber.length === (NUMBERS - BOMBS)){
    message.innerHTML = 'Complimenti! Hai trovato tutti i numeri senza bomba! Hai Vinto!';
    document.getElementById('retry').classList.add('display-block');
    document.getElementById('play').classList.add('display-none');
  }
})

//al click del bottone 'riprova' viene aggiornata la pagina per far ricominciare il gioco
document.getElementById('retry').addEventListener('click', function(){
  window.location.reload();
})

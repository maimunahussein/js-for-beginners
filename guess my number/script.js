'use strict';
// console.log (document.querySelector('.message').textContent)
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.score').textContent = 10;
let score = 20;
let highScore = 0;
//generating the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// handling click event

document.querySelector('.btn-check').addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value); 
    console.log(typeof guess);
    // when there is no guess
    if (!guess) {
    console.log(document.querySelector('.message').textContent='no number');
    }
   // when guess is correct >> compare secretNumber to user's guess
   else if(guess===secretNumber){
    console.log(document.querySelector('.message').textContent='correct number');
    document.querySelector('.number').textContent =secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347'; 
    document.querySelector('.number').style.width= '30rem';
   if(score>highScore){
    highScore = score;
    document.querySelector('.highscore').textContent= highScore;
   }

   }
   else if (guess>secretNumber){
    if(score>1){
    console.log(document.querySelector('.message').textContent='Too high!');
    score --;
    document.querySelector('.score').textContent = score;
    }
    else{
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
    }
   }
   else if (guess<secretNumber){
    if(score>1){
    console.log(document.querySelector('.message').textContent='Too low!');
    score --;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;  
    }
   }
});

document.querySelector('.btn-again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor='#222'; 
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
   document.querySelector('.message').textContent ='Start guessing...';

})
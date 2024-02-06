'use strict';



let randNum = Math.trunc(Math.random()*20)+1;

// const num = document.querySelector('.number');
// num.innerHTML = randNum;
console.log(randNum);


let score = 20; 
let highScore = document.querySelector('.highscore').textContent;
let message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click',function(){
    const inputValue = parseInt(document.querySelector('.guess').value);
 
    if (inputValue !== randNum){            
        score -= 1;
        document.querySelector('.score').textContent = score;
        if(inputValue > randNum){
            message.textContent = 'to high.....';
        }else{
            message.textContent = 'to low.....' ;      
        }
    }else{
        document.body.style.backgroundColor = "green";
        if (score > highScore) {
            highScore = score;
            message.textContent = 'you got it!' ;
            document.querySelector('.number').textContent = randNum;
            document.querySelector('.highscore').textContent = highScore;
        };
    };
})

document.querySelector('.again').addEventListener('click', function () {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    score = 20;
    randNum = Math.trunc(Math.random() * 20) + 1;
    // num.innerHTML = randNum;
    document.querySelector('.score').textContent = '20';
    document.body.style.backgroundColor = '#222';
    message.textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?';
    console.log(randNum);
});
// Iteration 2: Generate 2 random number and display it on the screen
var num1=Math.round(Math.random() * 100);
const number1box = document.getElementById("number1");
number1box.innerHTML = num1;

var num2=Math.round(Math.random() * 100);
const number2box = document.getElementById("number2");
number2box.innerHTML = num2;
// Iteration 3: Make the options button functional
const greaterThan = document.getElementById("greater-than");
const lesserThan = document.getElementById("lesser-than");
const equalTo = document.getElementById("equal-to");

var score = 0;

greaterThan.onclick = () => {
    if(num1 > num2) {
        score++;
        resetTime(timerId);
    }else{
        location.href = "./gameover.html";
    };
    
    num1=Math.round(Math.random() * 100);
    number1box.innerHTML = num1;
    num2=Math.round(Math.random() * 100);
    number2box.innerHTML = num2;
    
};

lesserThan.onclick = () => {
    if(num1 < num2) {
        score++;
        resetTime(timerId);
    }else{
        location.href = "./gameover.html";
    };
    num1=Math.round(Math.random() * 100);
    num2=Math.round(Math.random() * 100);
    number2box.innerHTML = num2;
    number1box.innerHTML = num1;
    
};

equalTo.onclick = () => {
    if (num1 === num2) {
        score++;
        resetTime(timerId);
    }else{
        location.href = "./gameover.html";
    };
    num1=Math.round(Math.random() * 100);
    num2=Math.round(Math.random() * 100);
    number2box.innerHTML = num2;
    number1box.innerHTML = num1;
};

// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById("timer");
var timerId;

function starttimer() {
    time=5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time==0) {
            location.href = './gameover.html';
        }
        timer.innerHTML = time;
    }, 1000);
    localStorage.setItem("score", score);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    starttimer();
}
   
starttimer();

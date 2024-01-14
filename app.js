let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if (started == false) {
    console.log("game is started");
    started = true;
   }

   levelUp();
});

function gameFlash (btn) {
    btn.classList.add("gameflash");
    setTimeout (() => {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash (btn) {
    btn.classList.add("userflash");
    setTimeout (() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp () {
    level++;
    h2.innerText = `Level = ${level}`;
    userSeq = [];

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns (idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press Any Key To Start`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
    }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}
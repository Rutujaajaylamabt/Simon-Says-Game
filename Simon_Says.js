let gameSeq=[];
let userSeq=[];

let btns = ["red", "yellow", "green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started"); //start the game 
        started = true;

        levelUp();
    }
   
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },100);
}

function levelUp(){
    userSeq = [];   //reset the game empty string
    level++;
    h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
//console.log(randInx);
//console.log(randColor);
//console.log(randBtn);
gameFlash(randBtn);  //game generate white color
}

function checkAns(Idx){
    //console.log("curr level :  ", level);

   // let idx = level - 1;
    if(userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 500); 
        }
       // console.log("same value");
    }else{
        h2.innerHTML = `game Over! Your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="aliceblue";
        },200);
        reset();
    }
}

function btnPress (){
   
   let btn = this;  // console.log(this);
   userFlash(btn);  //user generate green color

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   //console.log(userColor);      //it show user click color on console

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);  //btnPress callback
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

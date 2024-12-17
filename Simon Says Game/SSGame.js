let gameSeq = [];
let userSeq = [];
let maxLevel=0;
let started=false;
let level=0;

let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },350);
}

function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx]
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);

    //random btn choose
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        document.querySelector("body").style.backgroundColor="red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } , 150)
        if(maxLevel<=level){
            maxLevel=level;
        }
        h2.innerHTML=`Game Over! <b>Your Score was ${level} </b> <br> Press any key to start`;
        console.log(`Your max Score: ${maxLevel}`)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn)

    userColor=btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    maxLevel=level;
    level=0;
    
}
// Game Constants & Variables
let inputDir={x:0,y:0}
const foodSound=new Audio('music/food.mp3')
const gameOverSound=new Audio('music/gameover.mp3')
const moveSound=new Audio('music/move.mp3')
const bgSound=new Audio('music/music.mp3')
let speed=5;
let lastPaintTime=0;
let snakeArr=[
    {x:13, y:15}
]
food={x:6,y:7}
let score=0;
// Game Functions
function main(ctime ){
    window.requestAnimationFrame(main)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();

}
function isCollide(snake){
    // assuming that snake bump into itself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }
    // assuming that snake bump into wall
    if(snake[0].x >=18 || snake[0].x <=0 || snake[0].x >=18 || snake[0].x <=0){
        return true;
    }
}
function gameEngine(){
    // Part 1 - Updating the snake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        bgSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over! Press any key to Restart")
        snakeArr=[
            {x:13,y:15}
        ]
        bgSound.play();
        score=0;
    }
    // assuming that snake eaten the food then increase the score and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodSound.play();
        score+=1;
        if(score > highScoreVal){
            highScoreVal=score;
            localStorage.setItem('hiscore',JSON.stringify(highScoreVal))
            hiscoreBox.innerHTML="HiScore : "+highScoreVal;
        }
        scoreBox.innerHTML="Score : "+score;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y + inputDir.y})
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }
    // Moving the snake
    for (let i=snakeArr.length-2;i >=0;i--){
        snakeArr[i+1]= {...snakeArr[i]};
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;
    // Part 2 - Display the snake and food
    // Display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('snake');
        if(index==0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // Display the food
        foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}

// Main logic starts from here
bgSound.play();
let hiScore=localStorage.getItem("hiscore");
if(hiScore==null){
    highScoreVal=0;
}
else{
    highScoreVal=JSON.parse(hiScore)
    hiscoreBox.innerHTML="HighScore "+highScoreVal;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};  // start the game
    moveSound.play();
    switch(e.key){
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x= 0;
            inputDir.y= 1;
            break;
        case "ArrowUp":
            console.log("ArrowUP");
            inputDir.x= 0;
            inputDir.y= -1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x= -1;
            inputDir.y= 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x= 1;
            inputDir.y= 0;
            break;
        default:
            break;
    }
})
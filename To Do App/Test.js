// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=bgColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("BG Updated");
// });

// function bgColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`RGB(${red},${green},${blue})`;
//     return color;
// }

//Game Technique
// let inp=document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     let ch=event.key;
//     if(ch=='w' |ch=='u'|ch=='ArrowUp' ){
//         console.log("Go up")
//     }
//     else if(ch=='s'| ch=='ArrowDown'|ch=='k'){
//         console.log("Go down")
//     }
//     else if(ch=='a'|ch=='l'|ch=='ArrowLeft'){
//         console.log("Go left")
//     }
//     else if(ch=='d'|ch=='r'|ch=='ArrowRight'){
//         console.log("Go right")
//     }
//     else{
//         console.log("type again")
//     }
// })

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="lime"
// })

// Print only aphabets on the screen
// let h2=document.querySelector("h2");
// let inp=document.querySelector("input");
// inp.addEventListener("input",function(){
//     let i=inp.value;
//     h2.innerText=i.replace(/[^a-zA-Z ]/g, '');
    
// })

//ToDo Application
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let addTask=document.querySelector("button");

addTask.addEventListener("click",function(){
    let addl=document.createElement("li")
    let delBtn=document.createElement("button");
    delBtn.innerText="x"
    addl.innerText=inp.value;
    ul.appendChild(addl)
    addl.appendChild(delBtn);
    inp.value=""
    delBtn.classList.add("delete");
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted!")
    }
})
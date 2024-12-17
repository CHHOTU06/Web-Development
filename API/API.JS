let url="https://v2.jokeapi.dev/joke/Any?safe-mode";
let h3=document.querySelector("h3")

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let joke1=await getJoke();
    h3.innerText=joke1.setup;
})

async function getJoke() {
    let joke=await axios.get(url);
    return joke.data;
    
}

// let url="http://universities.hipolabs.com/search?name=";

// let button=document.querySelector("button");
// let li=document.querySelector("#result")
// let input=document.querySelector("input")
// button.addEventListener("click",async()=>{
//     let country=input.value;
//     let output=await getCollage(country)
//     collegeName(output.data);
//     input.value=""
// })

// async function collegeName(collegeL){
//     li.innerText=""
//     for(cl of collegeL){
//         let list=document.createElement("li")
//         list.innerText=cl.name;
//         li.appendChild(list);
//     }
// }
// async function getCollage(country){
//     try{
//         let res=await axios.get(url+country);
//         return res;
//     }
//     catch(e){
//         console.log("error",e)
//     }
// }

// let url="https://catfact.ninja/fact";

// let p=document.querySelector("#output")
// let button=document.querySelector("button")
// button.addEventListener("click",async ()=>{
//     let fact= await getFact();
//     p.innerText=fact;
// })

// async function getFact(){
//    try{
//     let res=await axios(url);
//     return res.data.fact;
//    }
//    catch(e){
//     console.log("Fact not found")
//    }
// }

// fetch(url)
// .then((res)=>{
//     console.log(res)
//     res.json().then((data)=>{
//         console.log(data.fact)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// });
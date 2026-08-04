let button=document.querySelector("button")
let body=document.body;
button.addEventListener("click",(e)=>{
    body.classList.toggle("black");
})
// let b1=document.querySelector(".b1");
// let b2=document.querySelector(".b2");
// let b3=document.querySelector(".b3");
// let b4=document.querySelector(".b4");
// let b5=document.querySelector(".b5");
// let arr=["cornflowerblue","hotpink","lightgreen","plum","crimson"];
// function color(){
//    if(Math.random()<0.2){
//     b1.style.backgroundColor=arr[0];
//     b2.style.backgroundColor=arr[1];
//     b3.style.backgroundColor=arr[2];
//     b4.style.backgroundColor=arr[3];
//     b5.style.backgroundColor=arr[4];

// }
// else if(Math.random()<0.4){
//      b1.style.backgroundColor=arr[1];
//     b2.style.backgroundColor=arr[2];
//     b3.style.backgroundColor=arr[3];
//     b4.style.backgroundColor=arr[4];
//     b5.style.backgroundColor=arr[0];


// }
// else if(Math.random()<0.6){
//      b1.style.backgroundColor=arr[2];
//     b2.style.backgroundColor=arr[3];
//     b3.style.backgroundColor=arr[4];
//     b4.style.backgroundColor=arr[0];
//     b5.style.backgroundColor=arr[1];


// }
// else if(Math.random()<0.8){
//      b1.style.backgroundColor=arr[3];
//     b2.style.backgroundColor=arr[4];
//     b3.style.backgroundColor=arr[0];
//     b4.style.backgroundColor=arr[1];
//     b5.style.backgroundColor=arr[2];


// }
// else{
//      b1.style.backgroundColor=arr[4];
//     b2.style.backgroundColor=arr[0];
//     b3.style.backgroundColor=arr[1];
//     b4.style.backgroundColor=arr[2];
//     b5.style.backgroundColor=arr[3];


// }


// }
// setInterval(color,1000)

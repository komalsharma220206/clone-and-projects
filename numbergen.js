let input=document.querySelector("input");
let a=Number(prompt("enter the first number for range:"))
let b=Number(prompt("enter the second number for range:"))
input.value=Math.floor((Math.random()*(b-a+1))+a)
if(isNaN(a) || isNaN(b)){
    input.value="NAN"
}
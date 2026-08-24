let input=document.querySelector("#result");
let a =document.querySelector("#first");
let b=document.querySelector("#second");
let button=document.querySelector("button");
button.addEventListener("click",(e)=>{
    let first=Number(a.value);
    let second=Number(b.value);
    if(isNaN(first) || isNaN(second)){
        input.value="NaN"
        return;
    }
    let low=Math.min(first,second);
    let high=Math.max(first,second)
    input.value=Math.floor(Math.random()*(high-low+1)+low);
})

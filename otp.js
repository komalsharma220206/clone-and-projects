let button=document.querySelector("button")
let input=document.querySelector("input")
button.addEventListener("click",(e)=>{
    
        let num=Math.floor(Math.random()*(9999-1000+1)+1000)
        input.value=num;
})
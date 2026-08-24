let button=document.querySelectorAll("button")
let input=document.querySelector("input")
let arr=Array.from(button);
let str="";
arr.forEach(btn=>{
   btn.addEventListener("click",(e)=>{
     if(e.target.innerHTML=="AC"){
        str="";
        input.value=str;
     }
     else if(e.target.innerHTML=="DEL"){
         str=str.substring(0,str.length-1);
         input.value=str;
     }
     else if(e.target.innerHTML=="="){
        str=eval(str);
        input.value=str;
     }
     else if(e.target.innerHTML=="SQ"){
        str=eval(str);
        m=str*str;
        input.value=m;
     }
     else{
        str=str+e.target.innerHTML;
        input.value=str;
     }

   })
})
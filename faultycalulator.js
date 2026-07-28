let a=10;
let b=9;
let random=Math.random()
let op="+";
if(random<0.1){
    if(op=='+'){
        console.log(a-b);
    }
    else if(op=='-'){
        console.log(a+b);
    }
    else if(op=='*'){
        console.log(a/b);
    }
    else{
        console.log(a*b);
    }
}
else{
    if(op=='+'){
        console.log(a+b);
    }
    else if(op=='-'){
        console.log(a-b);
    }
    else if(op=='*'){
        console.log(a*b);
    }
    else{
        console.log(a/b);
    }
}
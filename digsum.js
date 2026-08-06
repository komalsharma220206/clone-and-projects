let a=1000;
let sum=0;
while(a>0){
    let b=a%10;
    sum=sum+b;
    a=a/10;
}
console.log(sum);
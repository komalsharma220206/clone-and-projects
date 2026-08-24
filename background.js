let arr=["pink","hotpink","cornflowerblue","plum","deeppink","deppskyblue","goldenrod","ivory","lightpink","lightgreen"]
function changeback(){
    if(Math.random()<0.1){
    document.body.style.backgroundColor=arr[0];
}
else if(Math.random()<0.2){
    document.body.style.backgroundColor=arr[1];
}
else if(Math.random()<0.3){
    document.body.style.backgroundColor=arr[2];
}
else if(Math.random()<0.4){
    document.body.style.backgroundColor=arr[3];
}
else if(Math.random()<0.5){
    document.body.style.backgroundColor=arr[4];
}
else if(Math.random()<0.6){
    document.body.style.backgroundColor=arr[5];
}
else if(Math.random()<0.7){
    document.body.style.backgroundColor=arr[6];
}
else if(Math.random()<0.8){
    document.body.style.backgroundColor=arr[7];
}
else if(Math.random()<0.9){
    document.body.style.backgroundColor=arr[8];
}
else {
    document.body.style.backgroundColor=arr[9];
}
}
setInterval(changeback,1000);
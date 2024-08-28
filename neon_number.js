let n=9;
let square=n**2;
let sum=0;
while(square!=0){
    let last=square%10;
    sum=sum+last;
    square=Math.floor(square/10);

}
console.log(sum);
if(sum===n){
    console.log("given number is a peterson number"+n);
}
else{
    console.log("given number is not a neon number"+n)
}
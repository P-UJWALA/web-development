function fact(n){
    let factorial=1;
    for(let i=1;i<=n;i++){
        factorial=factorial*i;
    }
    return factorial;
}
let a=145;
let n=a;
let sum=0;
while(n!==0){
    let last=n%10;
    sum=sum+fact(last);
    n=Math.floor(n/10);
    

}
console.log(sum)
if(sum===a){
    console.log("peterson number");
}
else{
    console.log("not a peterson number");
}

function count(n){

    let c=0;
    while(n!=0){
        let last=n%10;
        c++;
        n=Math.floor(n/10);
    }
    return c;
}
let n=81;
let cn=count(n);
if(cn%2!==0){
    console.log("it is not a tech number");
    

}
let divide=10**(cn/2);
let last=n%divide;
let first=Math.floor(n/divide);
let sum=last+first;

let square=sum**2;

let ans=(square===n)?"it is tech_number":"it is not a tech number";

console.log(ans)

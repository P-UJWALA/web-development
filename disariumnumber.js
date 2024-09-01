// function count(n){
//     let c=0;
//     while(n!==0){
//         let last=n%10;
//         c++;
//         n=Math.floor(n);
//     }
//     console.log(c)
// }
// let n=654
// count(n)





let n=89;
let temp=n;
let count=2;
let sum=0;
while(n!==0){
   let last=n%10;
   sum=sum+last**count--;
   n=Math.floor(n/10);
   console.log(sum)
}
let ans=(sum===temp)?"disariumnumber":"not a disarium number";
console.log(ans)
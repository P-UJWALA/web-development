let arr=[1,2,3,4,5]
let search=6;
let found=0;
for(let i=0;i<=4;i++){
    if(arr[i]===search){
        console.log("element is found at "+i);
        found=1;
        break;
    }
}
if(found===0){
    console.log("element is not found"+-1)
}
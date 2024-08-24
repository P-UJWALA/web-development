
let count=document.querySelector('.container');
let countis=0;
let initalcount=0;
function calculater(click){
    switch(click){
        case 'increment':
            countis++;
            break;
        case 'decrement':
            countis--;
            break;
        case 'reset':
            countis=initalcount;
            break;        
    }
    count.innerHTML=countis;

}
     


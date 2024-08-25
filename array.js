// let arr=[1,2,3,4,5,6]
// let start=0;
// let end=5;
// while(start<=end){
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;
//     start+=2;
//     end-=2;

// }
// console.log(arr)
// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = 4;
// while (start <= end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
//   start += 2;
//   end -= 2; // decrement end by 2
// }
// console.log(arr);
let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

while (start < end) {
  if (start % 2 === 0 && start + 1 <= end) {
    let temp = arr[start];
    arr[start] = arr[start + 1];
    arr[start + 1] = temp;
  }
  start++;
}

console.log(arr); // [2, 1, 4, 3, 5]


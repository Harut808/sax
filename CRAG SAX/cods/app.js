let arr = [ 5,6,9,8,6,]
let k = arr.length
let x = 0
for (let i = 0; i < k-1; i++) {
    console.log(arr[i]);
    arr.splice(0,1)
    if (arr.includes(arr[i])){
          x++
  
    }
      

}
// console.log(x);

// arr.splice(3,1)
// console.log(arr);

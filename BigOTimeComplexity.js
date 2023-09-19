// Big-O Time Complexity
function summation(n){
    let sum = 0;
    for(let i = 0; i < n;i++){
        sum += 1;
        console.log(sum);
    }
    return sum;
}
console.log(summation(10));
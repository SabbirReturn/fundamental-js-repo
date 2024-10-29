// Give me the sum of numbers from 1 to 20 that are divisible by 3.
let sum = 0;
for( let i= 1; i<=20; i++){
    // console.log(i);
    if(i % 3 ===0){
        console.log(i);
        sum = sum + i;
        console.log('Total', sum);
    }
}
console.log('Total number of the divisible number', sum);
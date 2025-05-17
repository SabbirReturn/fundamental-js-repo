// let numbers = [12,13,14,15,16,17,28,19];
// let revers = '';
// for(let number of numbers){
//     // console.log(number);
//     revers = revers + number;
//     console.log(revers);
// }
let numbers = [12,13,14,15,16,17,28,19];
let reverseNumber =[];
// for(let number of numbers){
//     console.log(number);
//     reverseNumber.unshift(number);
//     console.log(reverseNumber);
// }
for( let i = 0; i<numbers.length; i++){
    // console.log(i);
    let num = numbers[i];
    // console.log(num);
    // reverseNumber.unshift(num);
    // console.log(reverseNumber);
}

let i=numbers.length;
while(i>0){
    i--
    let num = numbers[i];
    // console.log(num);
    reverseNumber.push(num);
    console.log(reverseNumber);
    
}

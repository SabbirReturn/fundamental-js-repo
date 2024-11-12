let i = 0;
let evenSum = 0;
let oddSum = 0;
while(i <100){
    // console.log(i);
    if(i % 2 ===0){
        console.log('even:', i);
        evenSum = evenSum + i
        console.log('sum of even number:', evenSum);
    }
    else{
        console.log('odd number:',i);
        oddSum = oddSum + i;
        console.log('sum of odd number:',oddSum);
    }
    i++
}
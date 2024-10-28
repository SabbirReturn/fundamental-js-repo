let num = 1;
let sum = 0;
while(num <=100){
    console.log(num);
    if( num % 2===0){
        console.log('even Number', num);
        sum = sum + num;
        console.log("Total", sum);
    }
  
    num ++
}
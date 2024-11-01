// let pizzaPrice = 500;
// if(pizzaPrice> 700){
//     console.log('Give me a pizza')
// }
// else{
//     console.log('Good bye')
// }

let ticketPrice = 500;
let age = 20;
let isStudent = false;
if(isStudent === true){
    // 15% discount
    let discountPrice = 500 * 15/100;
    let payAmount = ticketPrice - discountPrice;
    console.log(payAmount);
}
else{
    console.log(ticketPrice);
}

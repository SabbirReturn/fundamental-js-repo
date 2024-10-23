const ticketPrice = 650;
const isStudent = false;
const isEid = false;
if(isStudent == true){
    // 50% discount...................
    const discountAmount = ticketPrice * 50/100;
    const payAmount = ticketPrice - discountAmount;
    console.log(payAmount);
}
else if(isEid == true){
    // 5% add..............]
    const addPrice  = ticketPrice * 5/100;
    const payAmount = ticketPrice + addPrice;
    console.log(payAmount)
}
else{
    console.log(ticketPrice);
}
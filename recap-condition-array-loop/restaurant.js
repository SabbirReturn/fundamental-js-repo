let bill = 3000;
let age = 26;
if(age<=12){
    console.log('No need to pay your bill');
}
else if(bill>=4000 && age<=60){
        // 10% discount............
    let discountAmount = bill * 10 /100;
    let payAmount = bill - discountAmount;
    console.log(payAmount)
}
else if (age>=60){
            // 20% discount...............
    let discountAmount = bill * 20 /100;
    let payAmount = bill- discountAmount;
    console.log(payAmount);
 }

else{
   console.log(bill)
}
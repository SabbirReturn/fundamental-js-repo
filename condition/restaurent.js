const age  = 20;
const price = 2500;
if( age<=12){
    console.log('Do not pay your bill')
}
else if(age >=40 || price >2000){
    // 10% discount...............
    const discountPrice = price * 10/100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if(age>=60 && price >=1500){
    // 15% discount.................
    const discountPrice = price * 15 /100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}
const price = 4500;
if(price>=5000){
    // 10% discount ..................
    const discountPrice = price * 10/100;
    const payamount = price - discountPrice;
    console.log(payamount);
}
else if(price >= 4000){
    // 5% discount....................
    const discountPrice = price * 5/100;
    const payamount = price - discountPrice;
    console.log(payamount);
}
else{
    console.log(price);
}
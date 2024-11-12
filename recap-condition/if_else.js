let bill = 500;
let applePrice = 160;
let orangePrice = 300;
let isApple = false;
let isOrange = true;

if( isApple === true){
    // 2% vat
    let extra = applePrice * 2/100;
    let appleBill = bill + extra
    // console.log(appleBill);
}
else if (isOrange === true){
    // 3% vat
    let extra = orangePrice * 2/100;
    let orangeBill = bill + extra
    console.log(orangeBill)
    
}

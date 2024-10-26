const friendName = ['Sabbir','Hasan','Misu','Robin'];
console.log(friendName);

// ........................Shift.........................
friendName.shift();
// console.log(friendName);
const out1 = friendName.shift();
const out2 = friendName.shift();
const out3 = friendName.shift();
console.log(friendName);
console.log(out1,out2,out3);

const add1 = friendName.unshift('Sabbir')
const add2 = friendName.unshift('Hasan')
const add3 = friendName.unshift('Misu')
const add4 = friendName.unshift('Robin')
console.log(friendName);

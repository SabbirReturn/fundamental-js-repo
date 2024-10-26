const numbers = [11,12,13,14,15,16,17,18]
console.log(numbers);
numbers.push(1112);
console.log(numbers);
const numAdd = numbers.push(1234);
console.log(numbers);
console.log(numbers.length);
numbers[2] = 123;
console.log(numbers);
const num1 = numbers[2]
console.log(num1);

// .................POP...................
const out1 = numbers.pop();
const out2 = numbers.pop();
console.log(numbers);
console.log(out1, out2);
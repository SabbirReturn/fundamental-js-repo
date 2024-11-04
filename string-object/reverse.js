let sentense = ' I am Sabbir Hasan';
let reverse = ' ';
for(let letter of sentense){
    // console.log(letter);
    reverse = letter + reverse;
    
}
// console.log(reverse);


for( let i = 0; i<sentense.length; i++){
    // console.log(i);
    let letter = sentense[i];
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = sentense.split('').reverse().join("")
console.log(rev);
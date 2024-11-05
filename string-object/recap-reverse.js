let details = ' I am from Bangladesh';
let reverse = '';
for(let detail of details){
    // console.log(detail);
    reverse = detail + reverse
}
// console.log(reverse);

for( let i= 0; i<details.length; i++){
    // console.log(i);
    let letter = details[i];
    // console.log(letter);
    reverse= letter + reverse;
    
}
// console.log(reverse);]

let rev = details.split('').reverse().join('')
console.log(rev);


let sentence = 'Right now I am learning Java-Script';
let reverse ='';

// how to use for of for reverse;
for(let letter of sentence){
    // console.log(letter);
    // reverse = letter + reverse;
    // console.log(reverse);
}

// how to use for loop for reverse;
for( let i = 0; i<sentence.length;i++){
    // // console.log(i);
    // let letter = sentence[i];
    // // console.log(letter);
    // reverse = letter + reverse;
    // console.log(reverse);
}

// // how to use direct reverse for reverse;

let rev = sentence.split('').reverse().join('')
console.log(rev);
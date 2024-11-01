let fruitsName = ['mango','apple','orange','banana'];
for( const fruit of fruitsName){
    // console.log(fruit);
}
if( fruitsName.includes("apple")){
    // console.log('I want to eat')
}
// console.log(fruitsName.length);
fruitsName[0] = 'Guava';
// console.log(fruitsName);
// console.log(Array.isArray(fruitsName));
fruitsName.pop()
fruitsName.push('Guava')
fruitsName.shift();
fruitsName.unshift('Elephant')
console.log(fruitsName);

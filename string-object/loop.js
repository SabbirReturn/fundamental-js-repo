let mobile = {
    name :'Iphone',
    Storage : '256gb',
    camera :'12mp'
}
console.log(mobile);
const keys = Object.keys(mobile);
console.log(keys);
for( let key of keys){
    // console.log(key);
    console.log( key, ":", mobile[key]);
}
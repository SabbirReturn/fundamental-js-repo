let mobile ={
    brand : 'Iphone',
    price : 31000,
    storage : '256gb',
    camera :'12px'
}
// console.log(mobile);
// for(let prop in mobile){
//     let keys = prop
//     let values = mobile[prop]
//     // console.log(keys, ":" ,values);
//     let total = keys.concat(":").concat(values);
//     console.log(total);
// }


let keys = Object.keys(mobile);
// console.log(keys);
for(let key of keys){
    // console.log(key);
    console.log(key, ":", mobile[key]);
}
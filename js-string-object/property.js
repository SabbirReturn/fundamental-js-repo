let person ={
    name : 'Sabbir Hasan',
    age : 24,
    profession : ' Web developer',
    'Fav Places': ['Kushtia','Bandarban','Cox Bazar']
}
console.log(person);
console.log(person['Fav Places']);
person['Fav Places'] = ['Dhaka']
console.log(person);
// let prop = 'profession';
// person[prop] = ' Devop';
// console.log(person);

let propName = 'profession';
person[propName] = 'Devop';
console.log(person);
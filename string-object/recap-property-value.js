const companyName={
    Name: 'Shopno',
    post : 'sells executive',
    salary :25000,
    location : 'Uttara',
    'Tour place' : ['Ranggamati','Banderban'],
}
console.log(companyName);
// using dot nutation excess property.

const income = companyName.salary;
console.log(income); 

// using bracket nutation excess property.

// const favPlace = companyName['Tour place'];
// console.log(favPlace);

// using bracket nutation change property.
companyName['Tour place'] =['kushtia','coxs Bazar'];
// console.log(companyName['Tour place'])
let place = companyName['Tour place'];
place = ['Kushtia','coxs Bazar'];
console.log(place);

let chngeplace = companyName['location'];
chngeplace = 'Dhanmondi';
console.log(chngeplace);
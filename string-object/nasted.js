let school ={
    name : 'Bheramara Pilot Model High School',
    Location : 'Bheramara',
    studentNumber : 1000,
    eventName : ['26 march','16 december'],
    unique : {
        color : 'White',
        result :{
            GPA5 : 'Almost',
            chatagory : 'Top',
        }   
    }
}
console.log(school.unique.result.chatagory);

let resultPosition = school.unique.result.chatagory;
resultPosition = 'Top top top';
console.log(resultPosition);
// school.eventName = ['21 february'];
// console.log(school);
delete school.studentNumber
school.eventName[1]= '21 february';
console.log(school.eventName);
console.log(school);
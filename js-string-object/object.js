let exam={
    name: 'Biology',
    teacherName : 'Misu',
    date : '20,November',
    chapter : ['first','second','third'],
    type:{
        name : 'Final Exam',
        mark : 100,
    }

}
console.log(exam);
let changeChapter = exam.chapter[1];
changeChapter = 'forth';
console.log(changeChapter);
let changeType = exam.type.name;
changeType = 'mid exam';
console.log(changeType);

class Student{
    constructor(sId, sName){
        this.id =  sId;
        this.name = sName;
        this.school = "Ranigonj High School";
    }

}

const student1 = new Student(12, "Rahat");
const student2 = new Student(34, "Rahi  Ahamed");
console.log(student1, student2);
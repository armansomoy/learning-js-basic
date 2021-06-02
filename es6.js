// CLass(ES6)
// Class is a template creating Objects 


class Person {
    constructor(fname, lname, birthdate) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthdate;
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let difference = Date.now() - birthday.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person1 = new Person("arman", "somoy", "06.18.2000");
let person2 = new Person("arif", "prottoy", "11.22.2006");
let person3 = new Person("arifa", "akter", "07.08.2016");


console.log(person1);
console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


var d = new Date();
document.getElementById("demo").innerHTML =  d;
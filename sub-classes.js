class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }


    greeting() {
        return `Hello ${this.firstName} ${this.lastName}!`
    }
}

class Customers extends Person {
    constructor(fname, lname, phone, idNo) {
        super(fname, lname, )

        this.phone = phone;
        this.idNO = idNo;
    }
}

let person1 = new Person("arman", "somoy");
console.log(person1.greeting());

let customers1 = new Customers("rebeka", "sultana", "017142649960", "123");
console.log(customers1);
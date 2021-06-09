var student = {
    name: "Jhon",
    roll: 12,
    home: "Dahka",
    married: false,
    dob: 2000-02-03,
    test_null: null,
    test_undefined: undefined,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
};


student.greet();

var student_json = JSON.stringify(student);
console.log(student_json);


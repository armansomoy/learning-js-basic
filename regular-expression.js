// regular Expression 

let re;
let str;

re = /Hello/;

console.log(re);
console.log(re.source);

str = "Hello World";


// exec() - Returns result in an array o null
// let result = re.exec(str);

// test() = true/False
// let result = re.test(str);

// Match() = return array/Null
let result = str.match(re);


let newStr = str.replace(re, "baler matha");

console.log(newStr);

// Phone Number 
let num;
let number;
num = /^(\+)?(88)?01[0-9]{9}$/;
number = "+8801714294582";
console.log(num.test(number));

// Email Address
// email = "arman420.jarman@gmail.com.bd";
let ema;
let email;

ema = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
email = "arman420.kola@kola.com.bd";

console.log(ema.test(email));


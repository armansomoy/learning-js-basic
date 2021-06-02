var number = prompt("Write your Number");
var income = prompt("Income");

if (number >= 0 && number <= 32) {
    console.log("Your Result is Failed");
} 
else if (number >= 33 && number <= 39) {
    console.log("Your Result is D");
} 
else if (number >= 40 && number <= 49) {
    console.log("Your Result is C");
}
else if (number >= 50 && number <= 59) {
    console.log("Your Result is B");
}
else if (number >= 60 && number <= 69) {
    console.log("Your Result is A-");
}
else if (number >= 70 && number <= 79) {
    console.log("Your Result is A");
}
else if (number >= 80 && number <= 100) {
    console.log("Your Result is A+");
}
else{
    console.log("Your Grade: Invalid Input");
}
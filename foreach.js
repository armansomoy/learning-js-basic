// Array function using mapping 

var foods = ["cake", "Ice Cream", "banana"];
var numbers = [1, 25, 35, 40];


//  1st parameter: Item
//  second parameter : Index
//  3rd parameter: Whole array



function addSomething(item){
    return `${item} is a food`;
}
var list = foods.map(addSomething);


var numberSquare = numbers.map(function(item){
    return item**2;
});
console.log(numberSquare);


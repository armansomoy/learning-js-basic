// Functions
// Built in Functions
// User define functions


// Normal Functions
function saySomething(name){
    console.log("hello working " + name);
}


// function Expression 
var saySomething2 = function(){
    console.log("hello world");
}



// Arrow Functions
var saySomething3 = name3 => {
    console.log("arrow function in " + name3);
}


saySomething("arman");
saySomething2();
saySomething3("js");

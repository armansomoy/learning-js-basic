let value;


value = document.getElementById("heading-title").style.backgroundColor  = "gray";
value = document.querySelectorAll('li');

value[0].style.backgroundColor = 'gray';

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
    item.style.backgroundColor = "blue";
    item.style.padding = "5px";
    item.style.borderRadius = "5px";
    item.style.color = "white";
    item.style.textAlign = "center";
})

liEven.forEach(function(item){
    item.style.backgroundColor = "gray";
    item.style.padding = "5px";
    item.style.borderRadius = "5px";
    item.style.color = "white";
    item.style.textAlign = "center";
})




console.log(value);
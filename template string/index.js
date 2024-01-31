let fname = 'hirus'
let lname = 'kavi'
let age = prompt("Guess "+ fname +" age ..");


//old way
//let result = fname + ' ' + lname + ' '+ age + ' years old';
//alert(result);


//using template string
let result = `${fname} ${lname} is ${age} years old`;
alert(result);



// normal funtion

/* 
function gretting(message){
    return alert(` ${message} everyone !`)
}   

*/

// arrow function

/*let gretting = (message = " this is null ") => alert (`${message} everyone !`)*/



// add the parameter for function using prompt

/* gretting( prompt(' enter the name '))*/




// multiple parameter for function
/*
let createBlog = ( title ,body) => {
  if(!title){
    throw new Error(' A title is required');
  }

  if(!body){
    throw new Error('Body cant be empty');
  }

  return alert (`${title} - ${body}`)
}


createBlog(' dog ',' dog is barking');  */


//

let gretting = (ag1) => alert( ` ${ag1} Hello everyone !`);

gretting('Good morning')
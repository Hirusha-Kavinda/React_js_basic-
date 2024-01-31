// object destructuring with out function

/*
let thingsToDo = {
    morning: "exercise",
    afternoon : "work",
    evening : "code",
    night: ["sleep" , "Dream"]
}

let {morning, afternoon} = thingsToDo;
morning = 'Run'
console.log(morning , ' - ' , afternoon);   
*/


// object destructuring with function

let uniStudent = ({name, university}) => {
    console.log(`${name} from ${university}`)
};


uniStudent({ name : 'hirusha', 
             university : 'moratuwa'
             });
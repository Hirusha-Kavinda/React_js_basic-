// combine two array in to one

var mountains = ['Everest','Fish Tail','Annapurna'];
var mountainsFormJapan = ['Fuji']

var allMountains = [...mountains, ...mountainsFormJapan];
console.log(allMountains)



// combine two object in to one

var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chiken curry'
}

var night = {
    dinner:'noodle soup'
}

var picnic = {...day, ...night}

console.log(picnic)


// rest

var rivers = ['sunkoshi' , 'Tamakoshi', 'Saptakoshi']
var [first, ...rest] = rivers;

console.log(first);
console.log(rest);
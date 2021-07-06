const students = [
    {id:32, name:'Shakib al hasan'},
    {id:34, name:'Mahmudullah'},
    {id:23, name:'Masrafi'},
    {id:21, name:'Musfiqur Rohim'}
];

// js map use for find all the property given in the array
const nameAndId = students.map( s => s);
console.log("Name and Id",nameAndId);


//  js map use find only the name or only id
const names = students.map( s => s.name);
console.log("Only name", names);


//  js filter  use for finding bigger id number
const bigger = students.filter( s => s.id > 25 );
console.log("Only the biggers", bigger);



// js fing use for findin only a condition fulfil name or id
const biggerOne = students.find ( s => s.id >25 );
console.log("Only the bigger one", biggerOne);
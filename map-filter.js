const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const output = [];

for (let i = 0; i <numbers.length; i++){
    const element = numbers[i];
    const result1 = element * element;
    output.push(result1);

    
}
console.log("This output is given by using for loop", output);

// using javascript map

function squre(element){
    return element * element;
}

const result2 = numbers.map(squre);

console.log("this result is given by using by js map", result2);


// using javascript filter

const isThere = numbers.filter( x => x > 5);
console.log("the bigger numbers is given by js filter", isThere);
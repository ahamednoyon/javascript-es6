const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// js array slice 
const part = nums.slice(4, 8);
console.log(part);
console.log(nums);


// js array splice . 
const removed = nums.splice(4, 8);
console.log(removed); 
console.log(nums);



//  js array join 
const together = nums.join(" ");
console.log(together);
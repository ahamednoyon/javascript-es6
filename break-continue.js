const nums = [1,2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) { 
    if (nums[i] > 6){
        break;
    }
    console.log("the break condition:", nums[i]);
}


const nums2 = [1, 2, 3, -4, 5, -6, -7, 8, 9];

for (let i = 0; i < nums2.length; i++) {
    if(nums2[i] < 0) {
        continue;
    }

    console.log("The continue: ", nums2[i]);
    ff
}
/*Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
*/


var missingNumber = function(nums) {
    sum = 0 
    for (let i=0; i<nums.length; i++){
        sum += nums[i]
    }
    return (1+nums.length) * nums.length / 2 - sum;
};

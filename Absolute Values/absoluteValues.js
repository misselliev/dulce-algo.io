/*Instruction: Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]
*/

function absSort(arr) {

  arr.sort(x = comparision)
  return arr
}

function comparision(a, b) {
  if (Math.abs(a) < Math.abs(b)) return -1;
  if (Math.abs(b) < Math.abs(a)) return 1;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

//Test case example

absSort([2, -7, -2, -2, 0])
//[0, -2, -2, 2, -7]

absSort([-2, 3, 5, -1, 4])
//[-1, -2, 3, 4, 5]

/*
Time Complexity: O(N log N), the complexity of sorting.

Space Complexity: O(N), the space typically used by compilers in their implementation of sorting operations. */
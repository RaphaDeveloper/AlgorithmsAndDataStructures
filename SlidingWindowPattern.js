/*

• The problem: 
  Write a function which accepts an array of integers and a number called num. 
  The function should calculate the maximum sum of num consecutive elements in the array.

• Two solutions to the same problem.

• The first one is solving the problem with a nested loops, what is a thing that should be avoided, 
  it makes an algorithm with a complexity of o(n²) according to big-O notation.

• The second one is solving the problem with a sum and subtract strategy, what is a good option to avoid the nested loops in these situations, 
  it makes an algorithm with a complexity of o(n) according to big-O notation.

*/

//Bad Solution - o(n²)
function calculateMaxSum(arr, num) {
    if (!arr.length || num > arr.length) {
        return null;
    }

    let maxSum = undefined;

    for (let i = 0; i < arr.length - num + 1; i++) {
      let subsequence = arr.slice(i, num + i);
      
      let sum = subsequence.reduce((left, right) => left + right);
      
      if (!maxSum || maxSum < sum) {
          maxSum = sum;
      }
    }
      
    return maxSum;
}

//Good Solution - o(n)
function calculateMaxSum(arr, num) {
    if (!arr.length || num > arr.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    maxSum = tempSum;    

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];

        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
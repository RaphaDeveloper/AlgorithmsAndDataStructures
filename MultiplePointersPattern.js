/*

• The problem: 
  Write a function which accepts a sorted array of integers. 
  The function should find the first pair where the sum is 0. 
  Return an array that includes both values that sum to zero or undefined if a pair does not exist.

• Two solutions to the same problem.

• The first one is solving the problem with a nested loops, what is a thing that should be avoided, 
  it makes an algorithm with a notation of o(n²) according to big-O notation.

• The second one is solving the problem with two pointers, what is a good option to avoid the nested loops, 
  it makes an algorithm with a notation of o(n) according to big-O notation.

*/

//Bad Solution - o(n²)
function sumZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//Good Solution - o(n)
function sumZero(arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        var leftValue = arr[i];
        var rightValue = arr[j];
        var sum = leftValue + rightValue;

        if (sum === 0) {
            return [leftValue, rightValue];
        }

        sum < 0 ? left++ : right--;
    }
}
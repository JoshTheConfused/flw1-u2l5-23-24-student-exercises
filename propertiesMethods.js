// 1. Write a function named arrLength that:
//  - Takes an array as an argument 
//  - Returns its length
function arrLength(arr) {
  return arr.length;
}
  
let myArray1 = [1, 2, 3, 4, 5];
console.log(arrLength(myArray1)); // Should print 5
  
// 2. Write a function name pushElement that:
//  - Takes an array and an element
//  - Adds the element to the end of the array using the push() method
//  - Returns the array
function pushElement(arr, element) {
  arr.push(element);
  return arr;
}
  
let myArray2 = [1, 2, 3];
pushElement(myArray2, 4);
console.log(myArray2); // Should print [1, 2, 3, 4]
  

// 3. Write a function named popElement that:
//  - Takes an array and removes the last element using the pop() method
//  - Returns the array
function popElement(arr) {
  arr.pop();
  return arr;
}
  
let myArray3 = [1, 2, 3, 4];
popElement(myArray3);
console.log(myArray3); // Should print [1, 2, 3]
  

// 4. Write a function named shiftElement that:
//  - Takes an array and removes the first element using the shift() method
//  - Returns the array
function shiftElement(arr) {
  arr.shift();
  return arr;
}

let myArray4 = [1, 2, 3, 4];
shiftElement(myArray4);
console.log(myArray4); // Should print [2, 3, 4]
  

// 5. Write a function named unshiftElement that:
//  - Takes an array and an element
//  - Adds the element to the beginning of the array using the unshift() method
//  - Returns the array
function unshiftElement(arr, element) {
  arr.unshift(element);
  return arr;
}

let myArray5 = [2, 3, 4];
unshiftElement(myArray5, 1);
console.log(myArray5); // Should print [1, 2, 3, 4]


// CHALLENGE
// Look up how a spread operator works.
// Write a function called mergeArrays that:
//  - Takes 3 different arrays as arguments
//  - Uses the spread operator to merge them into a single array
function mergeArrays(arr1, arr2, arr3) {
  let newArray = [...arr1, ...arr2, ...arr3];
  return newArray;
}




let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];
let array3 = [4, 5, 6];
let mergedArray = mergeArrays(array1, array2, array3);
console.log(mergedArray); // Should print [1, 2, 3, 'a', 'b', 'c', 4, 5, 6]

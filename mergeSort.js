/*jshint esversion: 6 */

var {swap, dataType} = require("./helper.js");

module.exports = ()=>{
  //mergerSort Algorithm
  var mergeSort = (arr) => {
    dataType(arr);

    //Base case. Once the array consists of only one element, it is returned.
    if(arr.length < 2)
      return arr;

    //middle give the index splitting the array in two equal parts. Left and Right consists of the two arrays created using th emiddle index.
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    //THe merge consists of the merge functin that will do the sorting and the two arguments consist of recursions of mergeSort on Left and Right arrays. These recursions will happens until each subarrays get to one element.
    return merge(mergeSort(left), mergeSort(right));
  };

  var merge = (left, right) => {
    // initialize an empty array that will be returned at the end with the sorted elements
    let result = [];
    //As long as there elements in both left and right arrays, we need to compare the first element of each array. The smallest element gets pushed.
    while (left.length && right.length) {
      if (left[0] <= right[0]){
        result.push(left.shift());
      } else{
        result.push(right.shift());
      }
    }

    //In case there is only element(s) left in the left array, we push all of them (one by one) in the result array.
    while (left.length)
      result.push(left.shift());
    ////In case there is only element(s) left in the right array, we push all of them (one by one) in the result array.
    while (right.length)
      result.push(right.shift());

    return result;
  };

  return {mergeSort};

};
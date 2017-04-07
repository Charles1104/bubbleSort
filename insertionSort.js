/*jshint esversion: 6 */

var {swap, dataType} = require("./helper.js");

module.exports = ()=>{
  //insertionSort
  var insertionSort = (arr) => {
    dataType(arr);
    // Initializes temp that will be the variable storing at each iteration the index where the current "i" has to be moved to.
    var temp = null;

    for(let i = 1; i < arr.length; i++){
      // In case the previous element is smaller, no need to sort the current element.
      if(arr[i] >= arr[i- 1]){
        continue;
      }
      // Will then loop backwards from i until 0 and find the index where arr[i] should be moved to.
      for (let j = i ; j > 0; j--){
        if(arr[i] < arr[j- 1]){
          temp = j-1;
        }
      }
      // Will carry out the insertion at the accurate index position and will move one place to the right all the other element after index k up to index i
      for (let k = temp; k < i; k++){
        swap(arr, k, i);
      }
      // Another method to carry out the insertion
      // arr.splice(temp, 0, arr[i]);
      // arr.splice(i + 1, 1);
    }
    return arr;
  };

  return {insertionSort};

};
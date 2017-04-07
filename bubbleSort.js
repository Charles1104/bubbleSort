/*jshint esversion: 6 */

var {swap, dataType} = require("./helper.js");

module.exports = ()=>{
//bubbleSort Algorithm
  var bubbleSort = (arr) => {

    // Will check if the data entered is an array
    dataType(arr);

    // Core of the algorithm that will loop to sort
    for (let i=0; i < arr.length-1; i++){
      // creates a boolean variable "swapped" that will check if a change has been carried out during the inner loop
      var swapped = false;
      // The second loop will decrease in length with i as after each iteration of i, the greatest number will be at the end of the array
      for (let j=0; j < arr.length - (1+i) ; j++){
        if(arr[j] > arr[j+1]){
          //in case j is greater than j + 1, then a swap happens and the swapped variable is set to true
          swap(arr,j,j+1);
          swapped = true;
        }
      }
      //In case there was no swap during an entire inner loop, the swapped ariable will be false which means the the array is ordered and we can stop
      if (!swapped) break;
    }
// Return the array
    return arr;
  };

  return {bubbleSort};

};
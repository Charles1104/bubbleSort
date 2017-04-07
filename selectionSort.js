/*jshint esversion: 6 */

var {swap, dataType} = require("./helper.js");

module.exports = ()=>{
  //selectionSort
  var selectionSort = (arr) => {
    dataType(arr);
    //Will loop through all the element of the array starting at index 0
    for(let i = 0; i < arr.length; i++){
      //The variable min will store the index of the min element. It initializes its index to i.
      let min = i;
      //If an element of the array has a smaller value than the element stored at index i, then min changes to the index of this new element. This second j loop does this work of finding the smallest element starting from i + 1.
      for (var j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min]){
          min = j;
        }
      }
      //Will swap the minimum value with the current value at index i. If element at index i is the smallest, no changes are done.
      swap(arr, i, min);
    }
    return arr;
  };

  return {selectionSort};

};
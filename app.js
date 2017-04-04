/*jshint esversion: 6 */

module.exports = ()=>{

  function bubbleSort(arr){

// Will check if the data entered is an array
    dataType(arr);

    var temp;

// Core of the algorithm that will loop to sort
    for (let i=0; i < arr.length-1; i++){
// The second loop will decrease in length with i as after each iteration of i, the greatest number will be at the end of the array
      for (let j=0; j < arr.length - (1+i) ; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
// Return the array
    return arr;
  }

//function for the data type
  function dataType(arr){
    if(!(Array.isArray(arr))){
      throw new Error("Please pass an array");
    }
  }

  return {
    bubbleSort:bubbleSort,
  };

};
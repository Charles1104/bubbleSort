/*jshint esversion: 6 */

module.exports = ()=>{

  function bubbleSort(arr){

    dataType(arr);

    var temp;
    var swap = true;

    for (let i=0; i < arr.length-1; i++){
      for (let j=0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1]= temp;
        }
      }
    }

    return arr;
  }

  function dataType(arr){
    if(!(arr instanceof Array)){
      throw new Error("Please pass an array");
    }
  }

  return {
    bubbleSort:bubbleSort,
  };

};
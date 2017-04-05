/*jshint esversion: 6 */

module.exports = ()=>{

  function bubbleSort(arr){

// Will check if the data entered is an array
    dataType(arr);

    let temp;

// Core of the algorithm that will loop to sort
    for (let i=0; i < arr.length-1; i++){

// The second loop will decrease in length with i as after each iteration of i, the greatest number will be at the end of the array
      for (let j=0; j < arr.length - (1+i) ; j++){
        if(arr[j] > arr[j+1]){
          swap(arr,j,j+1);
        }
      }
    }
// Return the array
    return arr;
  }

  function quickSort(arr, left, right){
    dataType(arr);

    let pivot = null;

    // Need to initialize left and right on the first call of quickSort
    if(typeof left !== 'number'){
      left = 0;
    }
    if(typeof right !== 'number'){
      right = arr.length-1;
    }

    if(left < right){

      pivot = left + Math.ceil((right - left) * 0.5);
      let newPivot = partition(arr, pivot, left, right);

      quickSort(arr, left, newPivot -1);
      quickSort(arr, newPivot + 1, right);

    }

    return arr;
  }


  function partition(arr, pivot, left, right){
    let storeIndex = left;
    let pivotValue = arr[pivot];

    swap(arr, pivot, right);

    for(let i = left; i < right; i++){
      if(arr[i] < pivotValue){
        swap(arr, i, storeIndex);
        storeIndex++;
      }
    }

    swap(arr, right, storeIndex);

    return storeIndex;
  }


  function mergeSort(arr){
    if(arr.length < 2)
      return arr;

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right){
    let result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]){
        result.push(left.shift());
      } else{
        result.push(right.shift());
      }
    }

    while (left.length)
      result.push(left.shift());

    while (right.length)
      result.push(right.shift());

    return result;
  }



//swap position
  function swap(arr,i,j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

//function for the data type
  function dataType(arr){
    if(!(Array.isArray(arr))){
      throw new Error("Please pass an array");
    }
  }

  return {
    bubbleSort:bubbleSort,
    quickSort:quickSort,
    mergeSort:mergeSort
  };

};
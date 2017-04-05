/*jshint esversion: 6 */

module.exports = ()=>{

//bubbleSort Algorithm
  var bubbleSort = (arr) => {

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
  };


//quickSort Algorithm
  var quickSort = (arr, left, right) => {
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
  };


  var partition = (arr, pivot, left, right) => {
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
  };

//mergerSort Algorithm

  var mergeSort = (arr) => {
    if(arr.length < 2)
      return arr;

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  var merge = (left, right) => {
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
  };

//insertionSort
  var insertionSort = (arr) => {

    var temp = null;

    for(let i = 1; i < arr.length; i++){

// In case the previous element is smaller, no need to sort the current element
      if(arr[i] >= arr[i- 1]){
        continue;
      }

// Will then loop backwards from i until 0 and find the index where a
      for (let j = i ; j > 0; j--){
        if(arr[i] < arr[j- 1]){
          temp = j-1;
        }
      }

// Will carry ou the insertion at the acurate index position
      for (let k = temp; k < i; k++){
        swap(arr, k, i);
      }
// Another method to carry out the insertion
      // arr.splice(temp, 0, arr[i]);
      // arr.splice(i + 1, 1);

    }
    return arr;
  };


//selectionSort
  var selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
      let min = i;
      for (var j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min]){
          min = j;
        }
      }
      swap(arr, i, min);
    }
    return arr;
  };

//swap position
  var swap = (arr,i,j) => {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

//function for the data type
  var dataType = (arr) => {
    if(!(Array.isArray(arr))){
      throw new Error("Please pass an array");
    }
  };

  return {
    bubbleSort:bubbleSort,
    quickSort:quickSort,
    mergeSort:mergeSort,
    insertionSort:insertionSort,
    selectionSort:selectionSort
  };

};

//// Another version of the quickSort algorithm

// const quickSort = ( arr ) => {

//   // Base case
//   if( arr.length <= 1 ) {
//     return arr;
//   }

//   // 1) Pick a pivot
//   const pivot = arr[0];

//   // 2) Partition
//   let { left, right } = partition(arr, pivot);

//   // 3) Call quick sort recursively
//   let leftArr = quickSort( left );
//   let rightArr = quickSort( right );

//   // 4) Concat after calling quicksort recursively
//   return leftArr.concat(pivot, rightArr)
// }

// const partition = (arr, pivot) => {
//   let left = [];
//   let right = [];

//   // Loop through the array and split it into left and right arrays
//   for( let i = 1; i < arr.length; i++ ) {

//     // If value is less than the pivot - push into the left array, else push it into the right
//     if( arr[i] < pivot ) {
//       left.push( arr[i] )
//     } else if( arr[i] > pivot ) {
//       right.push( arr[i] )
//     }
//   }

//   return {
//     left,
//     right,
//   }
// }

// const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
// console.log(quickSort(arr));
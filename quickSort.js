/*jshint esversion: 6 */

var {swap, dataType} = require("./helper.js");

module.exports = ()=>{
  //quickSort Algorithm
  var quickSort = (arr, left, right) => {
    dataType(arr);

    let pivot = null;

    // Need to initialize left and right on the first call of quickSort.
    if(typeof left !== 'number'){
      left = 0;
    }
    if(typeof right !== 'number'){
      right = arr.length-1;
    }

    // Base case happens when our partition has splitted the array to a point where left and right are equal. No more sorting in the splitted arrays can happen.
    if(left < right){
      //the pivot is set to the middle of the array
      pivot = left + Math.ceil((right - left) * 0.5);
      //the new pivot is set from the return of the partition. This return will be the index in the mutated array that split this mutated array in  number smaller than the index value to the left and number greater than the index value to the right.
      let newPivot = partition(arr, pivot, left, right);
      //Two recursions happen as we need to sort on left and right arrays until we get to our base case.
      quickSort(arr, left, newPivot -1);
      quickSort(arr, newPivot + 1, right);
    }
    return arr;
  };

  // Helper function. This is the function that will do the sorting.
  var partition = (arr, pivot, left, right) => {
    //The storeIndex variable will increment everytime an array value is smaller than the pivot value. Thiw will then serve to swap our pivot value to this index position and this index position will serve to determine our left and right for the next recursion sortings.
    let storeIndex = left;
    let pivotValue = arr[pivot];
    //Move the pivot to the right. Will help for the next for loop so that we can loop from the left until the right not included and that will cover all the elemnts of this subarray.
    swap(arr, pivot, right);
    //It will loop through this subarray from left ot right and eveyrtime a number is smaller than the pivot value, it will swap it with the storeIndexValue and will then increment the storeIndexValue.
    for(let i = left; i < right; i++){
      if(arr[i] < pivotValue){
        swap(arr, i, storeIndex);
        storeIndex++;
      }
    }
    //this swap will move the pivot value to an index where smaller elements than the pivot value in this subarray are set on the left and greater elements are set on the right.
    swap(arr, right, storeIndex);
    //The storeIndex is returned to the quickSort function. It will determine the new left and right in new subarrays to be constructed.
    return storeIndex;
  };

  return {quickSort};

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
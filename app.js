/*jshint esversion: 6 */

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
      // Will carry ou the insertion at the acurate index position and will move one place to the right all the other element after index k up to index i
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
    dataType(arr);
    //Will loop through all the element of the array starting at index 0
    for(let i = 0; i < arr.length; i++){
      //The variable min will store the index of the min element. It initializes its index to i.
      let min = i;
      //If an element of the array has a smaller value than the element stored at index i, then mn changes to the index of this new element. This second j loop does this work of finindg the smallest element starting from i + 1.
      for (var j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min]){
          min = j;
        }
      }
      //Will swap the minimum value with the current value at index i. If element at index i with the smallest, no changes are done.
      swap(arr, i, min);
    }
    return arr;
  };

  //swap position - HELPER FUNCTION
  var swap = (arr,i,j) => {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  //function for the data type - HELPER FUNCTION
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
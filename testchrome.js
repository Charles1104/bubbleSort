// insertionSort
  var insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){

      if(arr[i] >= arr[i- 1]){
        continue;
      }

      for (let j = i ; j > 0; j--){
        if(arr[i] < arr[j- 1]){
          temporary = j-1;
        }
      }

      arr.splice(temporary, 0, arr[i]);
      arr.splice(i + 1, 1);

    }
    return arr;
  };


//swap position
  // var swap = (arr,i,j) => {
  //   temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  // };


console.log(insertionSort([3,2,8,4,2,1,5]));
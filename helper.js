  /*jshint esversion: 6 */

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

module.exports = {
  swap,
  dataType,
};

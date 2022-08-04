// bubble sort
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let sortedArr = bubbleSort([10, 8, 20, 3, 4, 2, 1, 9]);
//console.log(sortedArr);

//selection sort
// you have to keep track of the index
function selectionSort(array) {
  let min; // keep track of the minimum index
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
let s = selectionSort([10, 8, 20, 3, 4, 2, 1, 9]);
console.log(".......................");
console.log(s);

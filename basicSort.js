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
/* console.log(".......................");
console.log(s); */
/* 

FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, 
but here's the catch, multiple of three should print 
“Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five */

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i === 1) console.log("FizzBuzz", i);
    if (i % 3 === 0) console.log("Fizz", i);
    if (i % 5 === 0) console.log("Buzz", i);
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  }
};

fizzbuzz();

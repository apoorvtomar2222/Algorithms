// function bubbleSort(A) {
//   for (let i = 0; i < A.length; i++) {
//     console.log('i', i);
//     for (let j = 0; j < A.length; j++) {
//       console.log(A, A[j], A[j + 1]);

//       if (A[j] > A[j + 1]) {
//         let temp = A[j];
//         A[j] = A[j + 1];
//         A[j + 1] = temp;
//       }
//     }
//   }
//   }

// optimized version of bubble sort
function bubbleSortOptimized(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    console.log('i', i);
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      console.log(noSwaps);
      }
    if (noSwaps) break
  }
}
bubbleSortOptimized([12, 1, 10, 9, 8, 7, 6, 11]);

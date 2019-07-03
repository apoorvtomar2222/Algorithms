function bubbleSort(A) {
  for (let i = 0; i < A.length; i++) {
    console.log('i', i);
    for (let j = 0; j < A.length; j++) {
      console.log(A, A[j], A[j + 1]);

      if (A[j] > A[j + 1]) {
        let temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
}

// optimized version of bubble sort

bubbleSort([11, 12, 10, 9, 8, 7, 6, 11]);

function selectionSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr)
      }
    }
  }

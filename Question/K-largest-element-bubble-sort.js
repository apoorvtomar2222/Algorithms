function bubbleSortOptimized(arr, k) {
  let noSwaps;
  const limit = k + 1;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    console.log('i', i);
    if (i != arr.length - limit) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      }
    else {
      break;
      }
    if (noSwaps) break;
  }
  console.log(arr);
  return arr[arr.length - k]
}
console.log(bubbleSortOptimized([12, 1, 10, 9, 8, 7, 6, 11], 8));
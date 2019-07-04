function merge(arr1, arr2) {
  const arr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      arr.push(arr1);
      i++;
      }
    else {
      arr.push(arr2[j]);
      j++;
      }

    while (i < arr1.length) {
      arr.push(arr1[i]);
      i++;
      }

    while (j < arr2.length) {
      arr.push(arr2[i]);
      j++;
      }
    return arr;
  }
  }
function mergeSort(arr) {
  const median = Math.float(arr.length / 2);
  const left = arr.splice(0, median);
  const right = arr.splice(median);
  return merge(left, right);
}

mergeSort([10, 24, 76, 73])
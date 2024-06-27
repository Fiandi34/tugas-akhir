const arr = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      const n = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = n;
    }
  }
}
console.log(arr);

function gambar(size) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if ((i == 0 && j == 0) || (i == size - 1 && j == size - 1) || (i == 0 && j == size - 1) || (i == size - 1 && j == 0)) {
        console.log("* ");
      } else if (i == size / 2 && j == size / 2) {
        console.log("# ");
      } else if (i == size / 2 && j == size / 2) {
        console.log("* ");
      } else {
        console.log("# ");
      }
    }
  }
}
console.log(gambar(7));

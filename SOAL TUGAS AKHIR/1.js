function hitungBarang(namaBarang, quantity) {
  var totalHarga = 0;
  if (namaBarang == "A") {
    var harga = 4550;
    if (quantity > 13) {
      harga = 231;
    }
    totalHarga = harga * quantity;
  } else if (namaBarang == "B") {
    var harga = 5330;
    if (quantity > 7) {
      var totalHarga = harga * quantity;
      var discount = totalHarga * (23 / 100);
      totalHarga = totalHarga - discount;
    } else {
      totalHarga = harga * quantity;
    }
  } else if (namaBarang == "C") {
    var harga = 8653;
    totalHarga = harga * quantity;
  }
  return totalHarga;
}
console.log(hitungBarang("A", 10));

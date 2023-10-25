// Fungsi untuk mengurutkan angka dari kecil ke besar
function sortAscending(arr) {
  for (let a = 0; a < arr.length - 1; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] < arr[a]) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
    }
  }
  return arr;
}

// Fungsi untuk mengurutkan angka dari besar ke kecil
function sortDescending(arr) {
  for (let a = 0; a < arr.length - 1; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] > arr[a]) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
    }
  }
  return arr;
}

module.exports = { sortAscending, sortDescending };

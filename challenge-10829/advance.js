/**
 * Happy Number
 *
 * Masalah:
 * Tulislah algoritma untuk menentukan apakah suatu bilangan n adalah bilangan bahagia.
 * Bilangan bahagia didefinisikan oleh proses berikut:
 * • Dimulai dengan bilangan bulat positif apa pun, ganti bilangan tersebut dengan jumlah kuadrat angka-angkanya.
 * • Ulangi proses ini sampai angka tersebut menjadi 1 (di mana angka tersebut akan tetap), atau masuk ke dalam siklus yang tidak menyertakan 1.
 * Angka yang berakhir pada 1 adalah bilangan bahagia.
 *
 * @param {number} n Bilangan bulat yang akan dicek.
 * @returns {boolean} True jika bilangan adalah bahagia, false sebaliknya.
 */

function isHappyNumber(n) {
  const checkedNumbers = [];

  while (n !== 1 && !checkedNumbers.includes(n)) {
    checkedNumbers.push(n);
    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);

    console.log(checkedNumbers);
  }

  return n === 1;
}

// contoh penggunaan
const inputNumber = 19;
console.log(isHappyNumber(inputNumber));

// Time Complexity bergantung pada jumlah digit dalam bilangan n.
// Space Complexity juga bergantung pada jumlah digit dalam bilangan n.

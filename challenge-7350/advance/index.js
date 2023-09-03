const start = 25;
const end = 50;

console.log(`Prime numbers between ${start} and ${end} are:`);

for (let i = start; i <= end; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0 && i != 1 && i > 1) console.log(i);
}

//bisa juga dibuat fungsi. start dan end nya pakai parameter

// function findPrimeNums(start, end) {
//   console.log(`Prime numbers between ${start} and ${end} are:`);

//   for (let i = start; i <= end; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag == 0 && i != 1) console.log(i);
//   }
// }

// findPrimeNums(25, 50);

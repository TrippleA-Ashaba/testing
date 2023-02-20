export default function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 'N must be a positive integer';
  }
}

// export function factorial(number) {
//   let fact = 1;
//   let i = 1;
//   while (i <= number) {
//     fact *= i;
//     i += 1;
//   }
//   return fact;
// }

console.log(factorial(8.5));

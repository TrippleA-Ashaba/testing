// function multiply(a, b) {
//   return a * b;
// }

function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i += 1) {
    result += a;
  }
  return result;
}

export { multiply };

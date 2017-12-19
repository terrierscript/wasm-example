export function hello(): void {
  console.log("Hello!");
}

export function add(x: f64, y: f64): f64 {
  return x + y;
}


// export function fib(n: f64) : f64 {
//   return n < 2 ? n : fib(n - 2) + fib(n - 1);
// }

// function fibjs(n) {
//   console.log(n)
//   return n < 2 ? n : fibjs(n - 2) + fibjs(n - 1);
// }
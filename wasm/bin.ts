export function echo(val: f64): f64 {
  return val;
}

export function ping(): void{
  console.log("pong")
}

function fib2(n: f64) : f64 {
  return n < 2 ? n : fib(n - 1) + fib(n - 2)
}
export function fib(n: f64) : f64 {
  return n < 2 ? n : fib(n-1)// fib2(n - 1) + fib2(n - 2)
}
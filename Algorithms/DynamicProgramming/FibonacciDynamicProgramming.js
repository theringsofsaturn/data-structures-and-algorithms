let calculation = 0;

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoized() {
  let cache = {};

  return function (n) {
    calculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFibonacci = fibonacciMemoized();
console.log(fasterFibonacci(10));
console.log(`We have calculated ${calculation} times`);

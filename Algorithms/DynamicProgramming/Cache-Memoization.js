// Memoization is a specific form of caching that involves caching the returned value. The returned value of the function Memoized below, based on its parameters. If the parameter of this function doesn't change, like in the example below, then it is memoized, it uses the chache. Memoization is a way to rememember a solution so, that you don't have to compute it again.

function add80(n) {
  return n + 80;
}

let cache = {};

function memoizedAdd80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Time");
    cache[n] = add80(n);
    return cache[n];
  }
}

console.log("1", memoizedAdd80(10)); // The first time it calculates
console.log("2", memoizedAdd80(10)); // The second time it returns immediately from the cache. "Time" will be console loged only once.

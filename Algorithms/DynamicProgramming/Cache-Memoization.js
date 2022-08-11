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

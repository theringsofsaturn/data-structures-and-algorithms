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

// Some improvement to the code above is to use a closure to store the cache.

// let cache = {}; // To improve this, we should as best practice not leave the cache as a global scope but put it inside the function.

//! The problem is that is that if we simply move the cache variable inside the function, it will reset every time the function is called. To get around this we can use a closure. We can return another function inside, that will have the code logic inside of it. Because of this closure we will be able to access the cache inside of this function.

function memoizedAdd80WithClosure(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Time");
      cache[n] = add80(n);
      return cache[n];
    }
  };
}

// Lets store the function memoizedAdd80WithClosure that returns a function inside of it in the variable memoized. Every time we call memoized(), we are returning the function inside memoizedAdd80WithClosure.
const memoized = memoizedAdd80WithClosure();
console.log("1", memoized(10)); // The first time it calculates
console.log("2", memoized(10)); // The second time it returns immediately from the cache. "Time" will be console loged only once.

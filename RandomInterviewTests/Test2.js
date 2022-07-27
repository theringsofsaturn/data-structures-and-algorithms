// Codility Toptal Task 2
// A group of friends is going on holiday together. They have come to a meeting point (the start of the journey) using N cars. There are P[K] people and S[K] seats in the K-car for K in range [0.. N-1]. Some of the seats in the cars may be free, so it is possiblefor some of the friends to change the car they are in. The friends have decided that, in order to be ecological, they will leave some cars parked at the meeting point and travel with as few cars as possible.

// Write a function:
// function solution (P, S);

// that given two arrays P and S, consisting of N integers each, returns the minimum number of cars needed to take all of the friends on holiday.

// Examples:
//1. Given P = [1, 4, 1] and S = [1, 5, 1], the function should return 2. A person from the car number 0 can travel in car number 1 instead. This way, car number 0 can be left parked at the meeting point.

//2. Given P = [4, 4, 2, 4] and S [5, 5, 2, 5], the function should return 3. One person from car number 2 can travel in car number 0 and the other person from car number 2 can travel in car number 3.

// 3. Given P = [2, 3, 4, 2] and S = [2, 5, 7, 2], the function should return 2. Passengers from car number 0 can travel in car number 1 and passengers from car number 3 can travel in car number 2.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array P is an integer within the range [1..9];
// every friend had a seat in the car they came in; that is, P[K] < S[K] for each K within the range [0.. N-1].

function solution(P, S) {
  let cars = [];
  for (let i = 0; i < P.length; i++) {
    if (cars[P[i]] === undefined) {
      cars[P[i]] = [];
    }
    cars[P[i]].push(S[i]);
  }
  let car = 0;
  let passengers = 0;
  let max = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i] !== undefined) {
      car++;
      passengers = 0;
      for (let j = 0; j < cars[i].length; j++) {
        passengers += cars[i][j];
      }
      if (passengers > max) {
        max = passengers;
      }
    }
  }
  return car;
}

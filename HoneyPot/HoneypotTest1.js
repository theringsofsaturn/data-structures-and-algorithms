// A programming organization is planning a contest for several progammers, each of which has a certain rating. (The higher the rating the better the programmer.) Each programmer is paired with another programmer, and the difference between their ratings is referred to as the "bias amount". Given the rating of all the programmers in the contest, what is the minimum total bias amount that can be achieved by optimally planning the programmers pairs?

// Example: 
// n = 4
// ratings = [4, 2, 5, 1]

// The optimal solution is:
// Pair the second programmer  (2) with the fourth (1) for a difference of 1.
// Pair the first programmer (4) with the third (5) for a difference of 1. This results in a total bias amount of 1 + 1 = 2

// function description
// Complete the function minimizeBias in the editor below.
// minimizeBias has the following parameter(s):
//     int ratings[n}: the rating of each programmer
// Returns:
//     int: the minimum total bias amount that can be achieved in the contest.

// Constraints
// 1 ≤ n ≤ 10 root square 5
// 1 ≤ ratings[i] ≤ 10 root square 9
// n is even

// Explanation
// The optimal solution is to pair the first programmer (1) with the second (3) for a difference of 2, and the third programmer (6) with the fourth (6) for a difference of 0.  this results in a total bias amount of 2.

// Sample case 2
// STDIN: 6 => ratings[] size n = 6
// => ratings[] = [2, 4, 5, 3, 7, 8]
// the optimal solution is to assign the following pairs: (2, 3), (4,5) and (7,8)

function minimizeBias(ratings) {
    let minBias = 0;
    let sortedRatings = ratings.sort((a, b) => a - b);
    for (let i = 0; i < sortedRatings.length; i += 2) {
        minBias += sortedRatings[i + 1] - sortedRatings[i];
    }
    return minBias;
}
// Toptal task 1
// Crop a message to the maximum length of K characters. If the message is shorter than K characters, return the original message. If the message is longer than K characters, return the first K characters of the message.
//
// Examples:
// 1. Given message = "Hello World" and K = 5, the function should return "Hello".
// 2. Given message = "Hello World" and K = 12, the function should return "Hello World".
//
// Write an efficient algorithm for the following assumptions:
// message is a string, consisting of English letters, digits and punctuation marks.
// K is an integer within the range [1..1,000,000,000].
//
// function solution(message, K) {
//     if (message.length <= K) {
//         return message;
//     }
//     return message.substring(0, K);
// }

// function solution(message, K) {
//     let result = '';
//     let words = message.split('');
//     let i = 0;
//     while(i < words.length){
//         let word = words[i];
//         if(result.length + word.length + 1 <= K){
//             result += word + '';
//         }else{
//             break;
//         }
//         i++
//     }
//     return result.trim();
// }

// solution('codility We test coders', 13)

// Example test:   ('Codility We test coders', 14)
// OK

// Example test:   ('Why not', 100)
// OK

// Example test:   ('The quick brown fox jumps over the lazy dog', 39)
// WRONG ANSWER (got ..n fox jumps over the expected ..n fox jumps over the lazy)

// Example test:   ('To crop or not to crop', 21)
// OK

// function solution(message, K) {
//     let result = '';
//     let words = message.split('');
//     let i = 0;
//     while(i < words.length){
//         let word = words[i];
//         if(result.length + word.length + 1 <= K){
//             result += word + '';
//         }else{
//             break;
//         }
//         i++
//     }
//     return result.trim();
// }

// Example test:   ('Codility We test coders', 14)
// WRONG ANSWER (got Codility We t expected Codility We)

// Example test:   ('Why not', 100)
// OK

// Example test:   ('The quick brown fox jumps over the lazy dog', 39)
// WRONG ANSWER (got ..x jumps over the laz expected ..x jumps over the lazy)

// Example test:   ('To crop or not to crop', 21)
// WRONG ANSWER (got To crop or not to cr expected To crop or not to)

function solution(message, K) {
  let result = "";
  let words = message.split("");
  let i = 0;
  while (i < words.length) {
    let word = words[i];
    if (result.length + word.length + 1 <= K) {
      result += word + "";
    } else {
      break;
    }
    i++;
  }
  return result.trim();
}

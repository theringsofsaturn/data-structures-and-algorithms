// Edge List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
]; // the arrays inside simply states the connections between nodes. the edge list shows the connection like: 0 is connected to 2, 2 is connected to 3, 2 is connected to 1, 1 is connected to 3. They are all like segments in the graph.

// Adjacent List

const graph2 = [[2], [2, 3], [0, 1, 3]]; // The index of the array is the actual value of the node in the graph.
// [2] => the index 0 (node value of 0), is connected to 2.
// the index 1 is connected to 2 and 3.
// [0, 1, 3] => the index 2 is connected to 0, 1 and 3.

// Adjacent matrix
// The matrix is a 2D array. The value of the matrix is 1 if the nodes are connected, 0 if they are not. 1 means "yes and 0 means "no".
const graph3 = [
  [0, 0, 1, 0], // array index 0 is connected to 2 (third index is 1 = "yes ")
  [0, 0, 1, 1], // array index 1 is connected to 2 and 3 (third & fourth index is 1 = "yes ")
  [0, 1, 1, 0], // array index 2 is connected to 1 and 2 (second and third index is 1 = "yes ")
];

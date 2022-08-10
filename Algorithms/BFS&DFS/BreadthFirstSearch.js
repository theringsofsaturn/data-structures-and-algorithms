// Breadth first search is a search algorithm that starts at the root node and explores as far as possible along each branch before backtracking. It will usually go from left to right then next level, then left to right again, and so on.

// Like in this tree example:

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//      9
//  4      20
//1  6  15  170

BFS[(9, 4, 20, 1, 6, 15, 170)]; // this is the order in which the nodes are visited

// Breadth first search Traversal is a search algorithm that starts at the root node and explores as far as possible along each branch before backtracking. It will usually go from left to right then next level, then left to right again, and so on.

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

// Depth first search / Traversal is a search algorithm that starts at the root node and explores as far as possible down each branch before backtracking. Usually going down at left side, until it reaches the end child, then go up again to find if there is a child on the right side at that node.

// With the above tree example, the order of DFS would be:
DFS[(9, 4, 1, 6, 20, 15, 170)];

// Both BSF and DFS do traversal. Both their time complexity is O(n). They both visit the nodes at least once. The difference that matters here is the order when talking about BFS and DFS.

//* BFS is very good for finding the shortest path between two nodes. But BFS has the downside that it requires more memory than DFS. One rule can be that if we have some information about the location of the target node, like for example, we know that the node is likely at the upper level of the tree, then the BFS is better because it searches for its closest nodes first.

//* On the other hand, DFS is the opposite. If we have some information that the target node is likely at the lower level of the tree, then DFS is better because it searches for its furthest deep down nodes first. DFS also, had the biggest advantage that requires less memory than BFS. The downside is, it can get slow though, especially if the tree is very deep.

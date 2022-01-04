class Node {
  constructor(item) {
    this.item = item;
    this.left = null;
    this.right = null
  };
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  add(node) {
    let newItem = new Node(node);
    if(this.root === null) {
      this.root = newItem;
    } else {
      this.insert(this.root, newItem)
    };
  };

  insert(node) {
    node.data < this.root ? (this.left.add(node)) : (this.right = node) 
    node.data > this.root ? (this.right.add(node)) : (this.right = node)
  }
};

const B = new BinarySearchTree();
B.add('B');
B.insert('A');
B.insert('C');
B.insert('D');

console.log(B)
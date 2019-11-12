import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//  create Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    } else 
    const searchTree = function(node) {
      if (data < node.data){
       if (node.left === null) {
        node.left = new Node(data);
        return;
       }
      }
    }
  }
}
}
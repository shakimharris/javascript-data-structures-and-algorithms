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
       } else if (node.left !=== null){
         return searchTree(node.left);
       }
      } else if (node.right === null) {
       node.right = new Node(data);
      } else if (node.right !== null) {
        return searchTree(node.right);
      } else {
        return null;
      }
      return searchTree(node);
    }
  }
}
}
findMin (){
  let current = this.root;
  while (current.right !== null){
    return current.data;
  }
}
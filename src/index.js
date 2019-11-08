import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/* Stacks */

// push, pop, peek, length (to determine how many elements are in a stack

// to create a stack, lets create an array

var letters = [];

var word = "rcar";

var secondword = "";

// put letters of word into stack

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the word in reverse ordeer
for (var i = 0; i < word.length; i++) {
  secondword += letters.pop();
}
// now we use a if statement to see if our word is a palindrome
if (word === secondword) {
  console.log(word + "is a palindrome");
} else {
  console.log(word + "is not a palindrome");
}
//create stack as a function, a default way to count starting from zero, and a way to see storage state
var Stack = function() {
  this.count = 0;
  this.storage = {};
  // Now we want to add a value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.size = function() {
    return this.count;
  };
  // using peek function to return the alue at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Shakim");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());

function mySet() {
  var collection = [];
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in a set
  this.values = function() {
    return collection;
  };
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this function will give us the size of the collection
  this.size = function() {
    return collection.length;
  };
  // this function will return the combination of the two sets
  this.union = function(otherSet){
   var union = new Set(); 
   var firstSet = this.values();
   var secondSet = otherSet.values();
   firstSet.forEach(function(e)){
     if(otherSet.has(e)){
       return 
     }
   }
  }
}

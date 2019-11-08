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

var word = "racecar";

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

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//  create Hash table

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charcodeAt(i);
  }
  return hash % max;
};

let Hashtable = function () {
  let storage = [];
  const StorageLimit = 4;
  this.print = function(){
    console.log(storage);
  }

  this.add = function(key, value) {
   var index = hash(key, storageLimit);
   if(storage[index] === undefined){
     storage[index] = [
       key, value ]
     ];
   } else {
     var inserted = false;
     for(var i=0; i < storage[index].length; i++){
       if(storage[index].length === key){
         storage[index][i][1] = value; 
         inserted = true;
       }
     }
   }
  }
}
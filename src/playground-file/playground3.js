console.log("es6-let-const.js is up and running again");

var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

function getPetName() {
  var petName = "Harry";
  return petName;
}

const petName = getPetName();
console.log(petName);

var name = "Danny Yen";

if (name) {
  var firstName = name.split(" ")[0];
  console.log(firstName);
}

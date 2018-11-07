console.log("es6-arrow-function.js is up and running again");

/*const square = function (x) {
    return x * x;
}
function square(x){
    return x * x;
}
/*const squareArrow = (x) => {
    return x * x;
}
const squareArrow = (x) => x * x;

console.log(square(10));
console.log(squareArrow(100));*/

const getFirstName = x => {
  return x.split(" ")[0];
};
console.log(getFirstName("Michael Jordan"));
const getfirstName = x => x.split(" ")[0];
console.log(getfirstName("Kobe Bryant"));

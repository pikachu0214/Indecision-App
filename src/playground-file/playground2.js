console.log("es6-arrow-function-2.js is up and running again");

//arguments object - no longer bound with arrow functions

/*const add = (a, b) => {
    console.log(arguments);
    return a + b;
    //will break code..
}
console.log(add(55, 1, 1001));
// this keyword - no longer bound
*/
/*const user = {
    name: 'Andrew',
    cities: ['Philadelphia','New York', 'Dublin'],
    printPlacesLived: function () {
        const that = this;


        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived here in ' + city);
            });
        }
    }
*/
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin", "Helsinki", "Stockholm"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(num => this.multiplyBy * num);
  }
};
console.log(multiplier.multiply());

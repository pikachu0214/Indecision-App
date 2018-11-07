//Testing
console.log("App.js in scripts is running");
let name = "mike myer";
const firstName = x => x.split(" ")[0];

const multiplier = {
  number: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.number.map(num => this.multiplyBy * num);
  }
};
console.log(multiplier.multiply());

//Program begins
const person = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};
const submitForm = e => {
  e.preventDefault();
  console.log("form submitted"); //1. shows form submitted

  const option = e.target.elements.option.value;
  console.log(option); //2. shows text entered
  if (option) {
    person.options.push(option); //added to person.options array
    e.target.elements.option.value; //calls again
    renderForm(); //loads the function first then template
  }
};

const resetLength = () => {
  console.log("resetLength function is loaded");
  person.options = [];
  renderForm();
};
// const num = [10, 20, 30 ];
const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * person.options.length);
  const option = person.options[randomNum]; // renders in random the person.options index value
  console.log(randomNum);
  console.log(option);
  alert(option);
};
const renderForm = () => {
  const template = (
    <div>
      <h1>{person.title}</h1>
      {person.subtitle && <p>{person.subtitle}</p>}
      <p>
        {person.options.length > 0 ? "Here are your options" : "No options"}
      </p>
      {/*button is disabled when length of person.options is true or 0 and enabled when false */}
      <button disabled={person.options.length === 0} onClick={makeDecision}>
        What should i do?
      </button>
      <button onClick={resetLength}>Remove All</button>

      {/* this gets rendered after the button {[ 99, 98, 97, null, undefined, true ]} null, undefined and true will not show */}
      {/* key can be anything {[<p key="1">a </p>, <p key="2"> b </p>, <p key="3"> c</p>,]} */}
      {/* example here****** {
        num.map((i, a) =>{
            return <ul key={a}><li>{i}</li></ul>
        })
    }*/}
      <ul>
        {person.options.map((i, a) => {
          return <li key={a}>{i}</li>;
        })}
      </ul>
      <form onSubmit={submitForm}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, app);
};
const app = document.getElementById("app");
renderForm();

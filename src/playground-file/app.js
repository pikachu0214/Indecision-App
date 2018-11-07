class IndecisionApp extends React.Component {
  //gives default props argument to the class
  constructor(props) {
    super(props);
    //allows for class to be used in methods (render, constructor, other components)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    //sets initial state
    this.state = { options: [] };
  }
  componentDidMount() {
    try {
      console.log("componentDidMount used");
      //gets last state from local storage
      const json = localStorage.getItem("options");
      //parse last state as integer value
      const options = JSON.parse(json);

      //if true sets state
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate used");
    //checks if previous state is equal to option state length
    if (prevState.options !== this.state.options.length) {
      //creates a string variable
      const json = JSON.stringify(this.state.options);
      //stores key to "options", json is value
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount used");
  }
  //empty all items method
  handleDeleteOptions() {
    //sets state to empty
    this.setState(() => ({ options: [] }));
  }
  //delete an item method
  handleDeleteButton(optionToRemove) {
    console.log("item deleted", optionToRemove);
    //delete item from add option
    this.setState(prevState => ({
      //if optionToRemove does not match option removes an option
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  //picking an option in random
  handlePick() {
    //sets a random variable
    const randomNum = Math.floor(Math.random() * this.state.options.length);

    const option = this.state.options[randomNum]; // renders in random the person.options index value
    //alerts it to browser
    alert(option);
  }
  //method to add an item to list
  handleAddOptions(option) {
    if (!option) {
      //checks if no item, returns text
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
        //checks if text item is the same in the list of items
      return "This option already exists";
    }
    this.setState(prevState => ({
        //adds an item to the list
      options: prevState.options.concat([option])
    }));
  }
  render() {
    const subtitle = "Put your life in the hand of a computer";
    return (
      <div>
        
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteButton={this.handleDeleteButton}
        />
        <Addoption handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}

//Moved to a stateless component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

{
  /*
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
*/
}

//Moved to stateless component
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
{
  /* 
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}
*/
}

// Moved to a stateless component
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to start</p>}

      {props.options.map(option => (
        <Option
          key={option}
          optiontext={option}
          handleDeleteButton={props.handleDeleteButton}
        />
      ))}
    </div>
  );
};
{
  /*
class Options extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>This is Options component</p>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optiontext={option} />
        ))}
      </div>
    );
  }
}
*/
}

//Moving to a stateless component
const Option = props => {
  return (
    <div>
      {props.optiontext}
      <button
        onClick={e => {
          props.handleDeleteButton(props.optiontext);
        }}
      >
        Remove
      </button>
    </div>
  );
};
{
  /*
class Option extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Options: {this.props.optiontext}</li>
        </ul>
      </div>
    );
  }
}
*/
}

class Addoption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let options = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(options);
    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
{
  /*
const User = (props) => {
    return <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>;
}
*/
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

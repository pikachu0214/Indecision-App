
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //the this key word is used to handle methods in render and other methods in the same class
    this.handleAddMinusOne=this.handleAddMinusOne.bind(this);
    this.handleAddOne=this.handleAddOne.bind(this);
    this.handleClear=this.handleClear.bind(this);
    this.state = { count: 0}
  }
  componentDidMount(){
    try {
      //json variable is set to the last stored value when window loads
      const json = localStorage.getItem("count");
      //parse the variable json to an integer
      const count = parseInt(json, 10);
      //if it is a number, returns the state
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      //returns nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    //checks to see if previous state is not count
    //then stores it to localstorage
    if(prevState.count !== this.state.count){
        localStorage.setItem("count", this.state.count);
    }
  }
  componentWillUnmount(){
    //will not do anything
    console.log("changes in component!")
  }
  handleAddOne() {
    console.log("add 1");
    console.log(this.handleAddMinusOne);
    this.setState((prevState) =>{
      return { count: prevState.count + 1 };
    });
  };
  handleAddMinusOne() {
    console.log("minus 1");
    this.setState((prevState)=>{
      return{
        count: prevState.count - 1
      };
    });
  };
  handleClear(){
    console.log("clear");
    this.setState(()=>{
      return{count: 0}
    });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+</button>
        <button onClick={this.handleAddMinusOne}>-</button>
        <button onClick={this.handleClear}>clear</button>
      </div>
    );
  }
}
//Has to go before ReactDOM.render()
{
  /*
Counter.defaultProps = {
  count: 0
}
*/
}

ReactDOM.render(<Counter  />, document.getElementById("app"));



{
  /*console.log("counter-example.js is up and running again");

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, document.getElementById("app"));
};
renderCounterApp();

*/
}

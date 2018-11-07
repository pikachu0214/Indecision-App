class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = { click: false };
  }
  toggleButton() {
    console.log("click");
    this.setState(prevState => {
      return { click: !prevState.click };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleButton}>
          {this.state.click ? "hide details" : "show details"}
        </button>
        {this.state.click ? (
          <p>Hide details is shown</p>
        ) : (
          <p>Show detials is shown</p>
        )}
        <p hidden={this.state.click}>You clicked the button, now see details!</p>
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));
{
  /*
let clicked = false;

const toggleButton = () => {
  console.log(clicked);
  clicked = !clicked;
  toggle();
  console.log(" button clicked");
};


const app = document.getElementById("app");
const toggle = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleButton}>
        {clicked ? "hide details" : "Click Me!"}
        </button>
        {clicked ? <p>Hide details is set to true and this is shown. Press the button again to hide.</p> : <p>Toggle</p> }
        </div>
    );
    ReactDOM.render(template, app);
}
toggle();
*/
}

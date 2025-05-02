import { React, Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name+"child contructor")

  }


componentDidMount(){
    console.log(this.props.name+"child didmount")
}
  render() {
    const { name } = this.props;
    const { count, count1 } = this.state;
    console.log(this.props.name+"child render")

    return (
      <div>
        UserFunction
        <h1>Name:{name}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Increase Count
        </button>
        <h1>Count: {count}</h1>
        <h2>Location:Almel</h2>
        <h3>contact:gmail</h3>
      </div>
    );
  }
}
export default UserClass;
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

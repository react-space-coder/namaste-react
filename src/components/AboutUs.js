import React, { useState } from "react";
import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
    };
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("parent didmount")
}
  render() {
    console.log("Parent render")

    return (
      <div>
        <h1>AboutUs</h1>
        <h1>Count-{this.state.count1}</h1>
        <h2>This is me leardning React</h2>
        <UserFunction />
        <UserClass name={"Firs"} />
      </div>
    );
  }
}
 export default AboutUs
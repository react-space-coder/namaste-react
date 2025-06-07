import React, { useContext } from "react";
import UserDetails from "../utils/UserContext";
import {TodoList, ToggleSwitch,AppSearch} from "./PracticeCoding";

export default function Contact() {
  const { loggedInUser } = useContext(UserDetails);
  return (
    <div>
      <UserDetails.Consumer>
        {(data) => <h1>Contact Page :{data.loggedInUser}</h1>}
      </UserDetails.Consumer>

      <h2>Learning React</h2>


      <TodoList/>
      <AppSearch/>

    </div>
  );
}


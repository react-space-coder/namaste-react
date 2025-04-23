import React from "react";
import ReactDOM from "react-dom/client";

const Titile = () => {
  return <h1>HI I am Deshpande</h1>;
};
const HeaderComponent = () => {
  return (
    <div>
      <Titile />
      <h1>Hi i am Anusha</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

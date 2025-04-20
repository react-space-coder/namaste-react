import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", { id: "subchild" }, "Hi i am h1 tag"),
      React.createElement("h2", { id: "subchild2" }, "Hi i am h2 tag"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "subchild" }, "Hi i am h1 tag"),
      React.createElement("h2", { id: "subchild2" }, "Hi i am h2 tag"),
    ])
  ),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react js"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);

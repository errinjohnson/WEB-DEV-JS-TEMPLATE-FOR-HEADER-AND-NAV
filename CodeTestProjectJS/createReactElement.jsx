// import React from "react";
// import ReactDOM from "react-dom";

function ListItem(props) {
  return (<li>{props.value}</li>);
}

const element = <ListItem value="This is a list item" />;

ReactDOM.render(element, document.getElementById("root"));


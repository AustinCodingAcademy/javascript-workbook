import React from "react";
function FirstComponent(props) {
  console.log("This is FirstComp Props****", props.items);
  return (
    <div>
      <h1>This is Our Listing Component</h1>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{props.items[index]}</li>;
        })}
      </ul>
    </div>
  );
}

export default FirstComponent;

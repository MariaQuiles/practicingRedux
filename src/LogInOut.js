import React from "react";

function LogInOut(props) {
  function handleClick(event) {
    event.preventDefault();
    props.myFunction(props.user);
  }

  return (
    <div>
      <h2>log in / out</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default LogInOut;

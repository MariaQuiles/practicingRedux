import React from "react";

function SideBar(props) {
  // if user logged in then show properties

  function setUser() {
    props.user = {
      email: "heyheyfabi@gmail.com",
    };
  }

  return (
    <div>
      <h2>side bar</h2>
      <p>{props.user.email}</p>
    </div>
  );
}

export default SideBar;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SideBar from "./SideBar";
import LogInOut from "./LogInOut";
import useState from "react";

function App() {
  const [user, setUser] = useState({});

  let user = {
    email: "",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left-panel box">
          <SideBar user={user} />
        </div>
        <div className="middle-panel box">middle panel</div>
        <div className="right-panel box">
          <LogInOut myFunction={setUser} />
        </div>
      </div>
    </div>
  );
}

export default App;

"use strict";

import { useState } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
export default function App(props) {

  const [personState, setPersoneState] = useState(false);

  const onHandleLogin = () => {
    setPersoneState(true);
    console.log(personState)
  }

  return (
    <div className="container">
      <h1 className="color-red align-center">{props.title}</h1>
      <span className="align-center">{props.subtitle}</span>
      <button onClick={onHandleLogin}>Login</button>
    </div>
  );
}

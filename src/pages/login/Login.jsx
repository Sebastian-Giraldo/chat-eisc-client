import React from "react";

export default function Login(props) {

  const {user, setUser} = useUser();

  return(
    <div className="container">
      <h1 className="color-red text-align-center">Login</h1>
      <span className="text-align-center">Please Login to continue</span>
    </div>
  );
}

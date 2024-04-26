import React from "react";

export default function Register() {
  const {user, setUser} = useUser();

  return (
    <div className="container">
      <h1 className="color-red text-align-center">Register</h1>
      <span className="text-align-center">Please Register to continue</span>
    </div>
  );
}


import { useState } from "react";
import "./LoginPage.css";
export function LoginPage() {
  const [inputs, setinputs] = useState({ username: "", password: "" });
  const [loggedIn, setloggedIn] = useState(false);

  function handleChanged(e) {
    const { name, value } = e.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmits(e) {
    e.preventDefault();
    setloggedIn(true);
    // alert("Hi " + inputs.username);
  }
  function handleLogout() {
    setloggedIn(false);
  }

  return loggedIn ? (
    <div>
      <h2>hi {inputs.username}</h2>
      <button onClick={handleLogout}>logout</button>
    </div>
  ) : (
    <div className="LoginForm">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmits} autoComplete="off">
        <div>
          {/* <label> Username */}
          <input
            type="text"
            name="username"
            onChange={handleChanged}
            placeholder="Enter your Name"
            required
          />
          {/* </label> */}
        </div>
        <div>
          {/* <label> Password */}
          <input
            type="password"
            name="password"
            onChange={handleChanged}
            placeholder="Enter your Password"
            required
          />
          {/* </label> */}
        </div>
        <div>
          <input type="submit" style={{ backgroundColor: "skyblue" }}></input>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
export function LoginPage() {
  const [inputs, setinputs] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChanged(e) {
    const { name, value } = e.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmits(e) {
    e.preventDefault();
    localStorage.setItem("u$ername", inputs.username);
    navigate("/home");
  }

  return (
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

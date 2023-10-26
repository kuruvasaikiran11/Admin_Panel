import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard/css/bootstrap.min.css";
import "./dashboard/css/fontawesome.min.css";
import "./dashboard/css/templatemo-style.css";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are valid
    if (username === "saisk" && password === "saisk") {
      setError("");

      // Call the handleLogin function to set the user as logged in
      handleLogin();

      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      // Invalid credentials, show an error message
      setError("Invalid username or password, try saisk");
    }
  };

  return (
    <>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">
                    Welcome to Dashboard, Login
                  </h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <form
                    action="#"
                    onSubmit={handleSubmit} // Use the handleSubmit function for form submission
                    className="tm-login-form"
                  >
                    {error && <p className="text-danger">{error}</p>}
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        name="username"
                        type="text"
                        className="form-control validate"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="password">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control validate"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase"
                      >
                        Login
                      </button>
                    </div>
                    <button className="mt-5 btn btn-primary btn-block text-uppercase">
                      Forgot your password?
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

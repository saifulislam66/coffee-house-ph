import React from "react";
import { Link } from "react-router";

function Login() {
  const handleLogin = (e) => {
    console.log();
  };
  return (
    <div className="">
      <div className="flex my-5  items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* <Helmet>
              <title>Job House | Register</title>
            </Helmet> */}
            <h1 className="text-3xl font-bold">Register Now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input
                // ref={emailref}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn text-white bg-blue-700 mt-4">
                Register
              </button>

              <p className="text-sm mt-2">
                You Have No Account ?{" "}
                <Link className="text-blue-700" to="/register">
                  Register
                </Link>
              </p>
              {/* <p className="text-red-700">{errorMassage}</p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

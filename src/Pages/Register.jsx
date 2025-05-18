import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "./Coffee-Auth-Context/ContextProvider";
import Swal from "sweetalert2";

function Register() {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...newUser } = Object.fromEntries(
      formData.entries()
    );

    // crate new user in firebase
    createUser(email, password)
      .then((res) => {
        const userData = {
          email,
          ...newUser,
          creationTime: res.user.metadata.creationTimel,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };

        // set user to db
        fetch("https://backend-cofee.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User Crate Successfully!",
                icon: "success",
                draggable: true,
              });
            }
            console.log("data show from clicnt", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
            <form onSubmit={handleRegister} className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* name  */}
              <label className="label">Photo URL</label>
              <input
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo URl"
              />
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

              <button
                type="submit"
                className="btn text-white bg-amber-800 mt-4"
              >
                Register
              </button>

              <p className="text-sm mt-2">
                You Have An Account ?{" "}
                <Link className="text-blue-700" to="/auth/Login">
                  Login
                </Link>
              </p>
              {/* <p className="text-red-700">{errorMassage}</p> */}
            </form>
            {/* google login  */}
            {/* <div className="mx-auto">
              <button
                // onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allData } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { shouldFetch, setShouldFetch } = useContext(allData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const submitHandler = async (e) => {

    console.log("it is workking")
    e.preventDefault();
    console.log(email, password);

    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      console.log(json.error);
      setError(json.error)
    }

    if (response.ok) {
      console.log(json.role)
      //save user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      setShouldFetch(true)
      navigate('/welcome')
    }
  };

  return (

    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 shadow-2xl bg-base-100">
            <form className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>
              
              <div className="form-control mt-6">
                <button onClick={submitHandler} className="btn btn-primary mb-2 text-white no-animation">Login</button>
                <div className="text-red-600 text-center">{error && error}</div>
                <div className="flex justify-between items-center mt-4">
                  <label className="label">
                    <Link to="/forgetpassword">
                      <p className="label-text-alt link link-hover">
                        Forgot password?
                      </p>
                    </Link>
                  </label>
                  <label className="label">
                    <Link to='/register'><p className="label-text-alt link link-hover">New user? <span className="text-blue-600 font-medium">Sign up</span></p></Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

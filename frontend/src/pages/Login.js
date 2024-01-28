import React from "react";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { allData } from "../context/AppContext";
import Footer from "../components/Footer";
import registerBgImage from "../assets/img/register_bg_2.png";
import { Link } from "react-router-dom";

export default function Login() {

  const context = useContext(allData)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async(e) => {
    e.preventDefault()
    console.log(email, password)

    const response = await fetch('/api/users/login', {
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })

    const json = await response.json()

    console.log(json)

    if(!response.ok){
      console.log(json.error)
    }

    if(response.ok){
      console.log(json.message)
    }

  }

  const styles = {
    backgroundImage: `url(${registerBgImage})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>

      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            // style={{
            //   backgroundImage:
            //     "url(" + require("../assets/img/register_bg_2.png").default + ")",
            //   backgroundSize: "100%",
            //   backgroundRepeat: "no-repeat"
            // }}
            style={styles}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <h3 className="text-center font-bold text-lg ">Welcome to LuxurialLoom</h3>
                    {/* <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div> */}
                    {/* <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("../assets/img/github.svg").default}
                        />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("../assets/img/google.svg").default}
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" /> */}
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {/* <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div> */}
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e)=>setEmail(e.currentTarget.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e)=>setPassword(e.currentTarget.value)}

                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button onClick={submitHandler}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div className="flex flex-wrap">
                      <div className="w-1/2">
                        <Link to="/forgot-password" className="text-black">
                          <h3>Forgot password?</h3>
                        </Link>
                      </div>
                        <div className="w-1/2 text-right">
                          <a
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            className="text-black"
                          >
                            <small>Create new account</small>
                          </a>
                        </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </section>
        {/* <FooterSmall absolute /> */}

      </main>

    </>
  );
}

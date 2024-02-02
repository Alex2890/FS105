import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allData } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Login() {
 const context = useContext(allData);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const submitHandler = async (e) => {
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
   }

   if (response.ok) {
     console.log(json.role);
     // save user to local storage
     localStorage.setItem("user", JSON.stringify(json));
   }
 };

 return (
   <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="text-center lg:text-left">
         <h1 className="text-5xl font-bold">Login now!</h1>
         <p className="py-6">
           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
           excepturi exercitationem quasi. In deleniti eaque aut repudiandae
           et a id nisi.
         </p>
       </div>
       <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               placeholder="email"
               className="input input-bordered"
               required
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
               required
               onChange={(e) => setPassword(e.currentTarget.value)}
             />
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary text-white">Login</button>
             <div className="flex justify-between items-center">
               <label className="label">
                 <Link to="/forgetpassword">
                   <p className="label-text-alt link link-hover">
                     Forgot password?
                   </p>
                 </Link>
               </label>
               <label className="label">
                 <Link to="/register">
                   <p className="label-text-alt link link-hover">
                     New user? <span className="text-blue-600 font-medium">Sign up</span>
                   </p>
                 </Link>
               </label>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
 );
}

import React from "react"; 
import { Link } from "react-router-dom" 
import { useContext } from "react"; 
import { allData } from "../context/AppContext.js"; 
import Cookies from 'js-cookie'; 
 
function Navbar() { 
 
  const { user, setUser } = useContext(allData) 
  console.log(user) 
 
  const logoutHandler = () => { 
 
    localStorage.removeItem('user'); 
    window.location.href = "/"; 
  } 
 
 
 
  return ( 
    <div className="navbar py-3"> 
      <div className="navbar-start"> 
        <div className="dropdown"> 
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> 
          </div> 
          <ul tabIndex={0} className="text-gray-500 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> 
            <li> 
              <Link to='/'>Home</Link> 
            </li> 
            <li> 
              <Link to='/aboutus'>About Us</Link> 
            </li> 
            <li> 
              <Link to='/contact'>Contact</Link> 
            </li> 
            <li> 
              <Link to='/products'>Products</Link> 
            </li> 
            <li> 
              <Link to='/faqs'>FAQs</Link> 
            </li> 
            <li> 
              <Link to='/upload'>Upload Admin</Link> 
            </li> 
            <li> 
              <Link to='/cart'>Cart</Link> 
            </li> 
 
          </ul> 
        </div> 
        <Link to='/'><p className="btn btn-ghost text-lg">LuxuriaLoom</p></Link> 
      </div> 
      <div className="navbar-center hidden lg:flex"> 
        <ul className="menu menu-horizontal px-1 text-gray-500"> 
          <li> 
            <Link to='/'>Home</Link> 
          </li> 
          <li> 
            <Link to='/aboutus'>About Us</Link> 
          </li> 
          <li> 
            <Link to='/contact'>Contact</Link> 
          </li> 
          <li> 
            <Link to='/products'>Products</Link> 
          </li> 
          <li> 
            <Link to='/faqs'>FAQs</Link> 
          </li> 
          <li> 
            <Link to='/upload'>Upload Admin(will remove)</Link> 
          </li> 
          <li> 
            <Link to='/cart'>Cart</Link> 
          </li> 
        </ul> 
      </div> 
      <div className="navbar-end"> 
        <div> 
 
          <div className="dropdown dropdown-bottom dropdown-end"> 
            <div tabIndex={0} role="button" className="btn m-1"> 
              {user?.user.firstName} 
              <div className="ms-1 avatar placeholder"> 
                <div className="bg-neutral text-neutral-content rounded-full w-8"> 
                  <span className="text-xs">UI</span> 
                </div> 
              </div> 
            </div> 
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"> 
              <li> 
                {user?.user.firstName} 
 
              </li> 
              <li> 
                {user ? <button onClick={logoutHandler} className="btn btn-ghost text-gray-500"><Link to=''>Logout</Link></button> : <button className="btn btn-ghost text-gray-500"><Link to='/login'>Login</Link></button> 
                } 
              </li> 
 
            </ul> 
          </div> 
        </div> 
 
      </div> 
    </div> 
 
  ); 
} 
 
 
export default Navbar
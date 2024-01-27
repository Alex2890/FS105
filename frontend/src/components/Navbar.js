import React from "react";
import { Link } from "react-router-dom"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    // <>
    //   <nav
    //     className={
    //       (props.transparent
    //         ? "top-0 absolute z-50 w-full"
    //         : "relative shadow-lg bg-white shadow-lg") +
    //       " flex flex-wrap items-center justify-between px-2 py-3 "
    //     }
    //   >
    //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //       <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //         <a
    //           className={
    //             (props.transparent ? "text-white" : "text-gray-800") +
    //             " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
    //           }
    //           href="https://www.google.com"
    //         >
    //           LuxuriaLoom
    //         </a>
    //         <button
    //           className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //           type="button"
    //           onClick={() => setNavbarOpen(!navbarOpen)}
    //         >
    //           <i
    //             className={
    //               (props.transparent ? "text-white" : "text-black")

    //             }
    //           ><FontAwesomeIcon icon={faBars} /></i>
    //         </button>
    //       </div>
    //       <div
    //         className={
    //           "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
    //           (navbarOpen ? " block rounded shadow-lg" : " hidden")
    //         }
    //         id="example-navbar-warning"
    //       >
    //         <ul className="flex flex-col lg:flex-row list-none mr-auto">
    //           <li className="flex items-center">
    //             {/* <a
    //               className={
    //                 (props.transparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //               }
    //               href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/login"
    //             >
    //               <i
    //                 className={
    //                   (props.transparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   " far fa-file-alt text-lg leading-lg mr-2"
    //                 }
    //               />{" "}
    //               Docs
    //             </a> */}
    //           </li>
    //         </ul>
    //         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //           <li className="flex items-center">
    //             <a
    //               className={
    //                 (props.transparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //               }
    //               href="#pablo"
    //             >
    //               <i
    //                 className={
    //                   (props.transparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   " fab fa-facebook text-lg leading-lg "
    //                 }
    //               />
    //               <span className="lg:hidden inline-block ml-2">Share</span>
    //             </a>
    //           </li>

    //           <li className="flex items-center">
    //             <a
    //               className={
    //                 (props.transparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //               }
    //               href="#pablo"
    //             >
    //               <i
    //                 className={
    //                   (props.transparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   " fab fa-twitter text-lg leading-lg "
    //                 }
    //               />
    //               <span className="lg:hidden inline-block ml-2">Tweet</span>
    //             </a>
    //           </li>

    //           <li className="flex items-center">
    //             <a
    //               className={
    //                 (props.transparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //               }
    //               href="#pablo"
    //             >
    //               <i
    //                 className={
    //                   (props.transparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   " fab fa-github text-lg leading-lg "
    //                 }
    //               />
    //               <span className="lg:hidden inline-block ml-2">Star</span>
    //             </a>
    //           </li>

    //           <li className="flex items-center">
    //             <button
    //               className={
    //                 (props.transparent
    //                   ? "bg-white text-gray-800 active:bg-gray-100"
    //                   : "bg-pink-500 text-white active:bg-pink-600") +
    //                 " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
    //               }
    //               type="button"
    //               style={{ transition: "all .15s ease" }}
    //             >
    //               <i className="fas fa-arrow-alt-circle-down">Download</i>
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <div className="navbar bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
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

          </ul>
        </div>
        <a className="btn btn-ghost text-lg">LuxuriaLoom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> */}

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
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
}


export default Navbar
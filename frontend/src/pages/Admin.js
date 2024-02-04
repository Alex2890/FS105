import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Admin = () => {

  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState("dashboard")
  const clickHandler = (e, tabId) => {
    console.log(e.target.id)
    setActiveTab(tabId)
  }

  
  const logoutHandler = () => {

    localStorage.removeItem('user');
    window.location.href = "/";
  }



  return (
    <div>
      <div className="pb-24 mt-16">
        <div className="container">
          <div id="shoptab" className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5">
            <div className="col-span-12 lg:col-span-4">
              <ul className="shop-tab-nav account-nav flex flex-wrap flex-col">
                <li onClick={e => clickHandler(e, "dashboard")} className={activeTab === 'dashboard' ? "active" : ''}><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-gray-600 block" id='dashboard'>dashboad</a></li>
                <li onClick={e => clickHandler(e, "orders")} className={activeTab === 'orders' ? "active" : ''}><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-gray-600 block" id='orders'>orders</a></li>
                <li onClick={e => clickHandler(e, "address")} className={activeTab === 'address' ? "active" : ''}><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-gray-600 block" id='address'>address</a></li>
                <li onClick={e => clickHandler(e, "details")} className={activeTab === 'details' ? "active" : ''}><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-gray-600 block" id='account'> Account Details</a></li>
                <li onClick={e => clickHandler(e, "upload", navigate("/upload"))} className={activeTab === 'upload' ? "active" : ''}><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-gray-600 block" id='account'>Upload Product</a></li>

                <li><a className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange text-base border-t border-l border-r border-b border-gray-600 block" onClick={logoutHandler}>Logout</a></li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div>

                {
                  activeTab === "dashboard" && 
                  <div id="dashboard1" className="shop-tab-content">
                    <div className="p-8 border border-gray-600">
                      <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">Dashboard</h3>
                      <p>
                        Hello, <strong>Alex Tuntuni</strong> (If Not
                        <strong>Tuntuni ! </strong><a href="login-register.html" className="transition-all hover:text-orange">Logout</a>)
                      </p>
                      <p>
                        From your account dashboard, you can easily check &amp; view
                        your recent orders, manage your shipping and billing addresses
                        and edit your password and account details.
                      </p>
                    </div>
                  </div>
                }

                { activeTab === "orders" && 
                <div id="orders1" className="shop-tab-content">
                    <div className="p-8 border border-gray-600">
                      <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">Orders</h3>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-max">
                          <thead>
                            <tr>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">No</th>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">Name</th>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">Date</th>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">Status</th>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">Total</th>
                              <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">1</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Mostarizing Oil</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Aug 22, 2018</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Pending</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">$45</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                                <a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">2</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Katopeno Altuni</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">July 22, 2018</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Approved</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">$100</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                                <a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">3</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">Murikhete Paris</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">June 12, 2017</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">On Hold</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">$99</td>
                              <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                                <a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>
                }

                { activeTab === "address" && 
                  <div id="address1" className="shop-tab-content">

                    <div className="p-8 border border-gray-600">
                      <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">Billing Address</h3>

                      <address className="not-italic">
                        <p><strong>Alex Tuntuni</strong></p>
                        <p>
                          1355 Market St, Suite 900 <br />
                          San Francisco, CA 94103
                        </p>
                        <p>Mobile: (123) 456-7890</p>
                      </address>

                      <a href="#" className="transition-all hover:text-orange">Edit Address</a>
                    </div>
                  </div>
                }

                { activeTab === "details" && 
                  <div id="account1" className="shop-tab-content">
                    <div className="p-8 border border-gray-600">
                      <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">Account Details</h3>
                      <form action="#">
                        <div className="grid grid-cols-12 gap-x-5">
                          <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="first-name" placeholder="First Name" type="text" />
                          </div>

                          <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="last-name" placeholder="Last Name" type="text" />
                          </div>

                          <div className="col-span-12 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="display-name" placeholder="Display Name" type="text" />
                          </div>

                          <div className="col-span-12 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="email" placeholder="Email Address" type="email" />
                          </div>

                          <div className="col-span-12 mb-5">
                            <h4 className="font-semibold text-base capitalize">Password change</h4>
                          </div>

                          <div className="col-span-12 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="current-pwd" placeholder="Current Password" type="password" />
                          </div>

                          <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="new-pwd" placeholder="New Password" type="password" />
                          </div>

                          <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="confirm-pwd" placeholder="Confirm Password" type="password" />
                          </div>

                          <div className="col-span-12">
                            <button className="inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange" aria-label="Save Changes">Save Changes</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
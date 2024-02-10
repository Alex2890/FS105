import React, { useContext } from 'react'
import { allData } from "../context/AppContext.js"; 

const Cart = () => {

    const { cartItems } = useContext(allData);

     // Function to handle quantity change
    const handleQuantityChange = (itemId, newQuantity) => {

        // Prevent negative quantity 
        if (newQuantity < 1) return;
            
        // Find the item and update its quantity
        const updatedItems = cartItems.map(item => {
            if (item._id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        // // Update the global state
        // addToCart(updatedItems);
    };

    return (
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                </div>
                <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                    <div className="bg-white shadow">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                <ul className="-my-8">
                                    {cartItems.map((item, index) => (
                                        <React.Fragment key={`${item._id}-${index}`}>
                                            <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                <div className="shrink-0">
                                                    <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={`http://localhost:5000/Images/${item.image}`} alt={item.bagName} />
                                                </div>

                                                <div className="relative flex flex-1 flex-col justify-between">
                                                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                        <div className="pr-8 sm:pr-5">
                                                            <p className="text-base font-semibold text-gray-900">{item.bagName}</p>
                                                        </div>

                                                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${item.price}</p>

                                                            <div className="sm:order-1">
                                                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                    <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>
                                                                    <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* Additional items like subtotal, shipping, and total can stay outside the map */}
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>

                            {/* Subtotal, Shipping, and Total sections */}
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-400">Subtotal</p>
                                    <p className="text-lg font-semibold text-gray-900">$399.00</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-400">Shipping</p>
                                    <p className="text-lg font-semibold text-gray-900">$8.00</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> 408.00</p>
                            </div>

                            <div className="mt-6 text-center">
                                <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                    Checkout
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
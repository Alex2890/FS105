import React, { useContext, useState, useEffect } from 'react'
import { allData } from "../context/AppContext.js";

const Cart = () => {

    //ALEX's CODE
    // const { cartItems } = useContext(allData);

    //  // Function to handle quantity change
    // const handleQuantityChange = (itemId, newQuantity) => {

    //     // Prevent negative quantity 
    //     if (newQuantity < 1) return;

    //     // Find the item and update its quantity
    //     const updatedItems = cartItems.map(item => {
    //         if (item._id === itemId) {
    //             return { ...item, quantity: newQuantity };
    //         }
    //         return item;
    //     });

    //     // // Update the global state
    //     // addToCart(updatedItems);
    // };


    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(1)

    const [originalData, setOriginalData] = useState([])
    const [total, setTotal] = useState(0)

    //to get all the items from cart

    const getCartItems = async () => {
        const response = await fetch('/api/cart')
        const data = await response.json()
        const uniqueMap = new Map(data.map(item => [item.bagName, item]))
        const uniqueArray = Array.from(uniqueMap)
        console.log(uniqueArray)
        setCartItems(uniqueArray)
        setOriginalData(data)
        console.log(uniqueArray)

        const totalamt = uniqueArray.reduce((total, item) => {
            return total + item[1].price
        }, 0)
        console.log(totalamt)
        setTotal(totalamt)

    }

    useEffect(() => {
        getCartItems()



    }, [])


    const incrementHandler = (index) => {
        // Create a copy of cartItems to avoid mutating state directly
        const updatedCartItems = [...cartItems];

        // Update the quantity for the specified item
        updatedCartItems[index][1].quantity += 1;
        updatedCartItems[index][1].price += originalData[index].price;
        console.log(cartItems[index][1].price)

        const totalamt = updatedCartItems.reduce((total, item) => {
            return total + item[1].price
        }, 0)
        console.log(totalamt)
        setTotal(totalamt)

        // Update the state with the modified cartItems
        setCartItems(updatedCartItems);

        console.log(cartItems)
    }

    const decrementHandler = () => {
        console.log("decrement")


    }



    return (

        <div>
            {/* <h1 className='text-center text-2xl'>My Cart</h1> */}
            {/* {cartItems.map(item => {
                    return (
                        <div key={item._id}>
                            {item.bagName}{item.price}{item.image}{item.description}{item.quantity}
                        </div>
                    )
                })} */}


            <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
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
                                            <React.Fragment key={`${index}`}>
                                                <li className="flex flex-col justify-center items-center space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                    <div className="shrink-0">
                                                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={`http://localhost:5000/Images/${item[1].image}`} alt={item[1].bagName} />
                                                    </div>

                                                    <div className="relative flex flex-1 flex-col justify-center items-center">
                                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                            <div className="pr-8 sm:pr-5">
                                                                <p className="text-base pt-2 sm:pt-0 font-semibold text-gray-900">{item[1].bagName}</p>
                                                            </div>

                                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${item[1].price}</p>

                                                                <div className="sm:order-1">
                                                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                        <button onClick={() => decrementHandler(index)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item[1].quantity}</div>
                                                                        <button onClick={() => incrementHandler(index)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
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
                                    {/* <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400">Subtotal</p>
                                        <p className="text-lg font-semibold text-gray-900">$399.00</p>
                                    </div> */}
                                    {/* <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Shipping</p>
                                            <p className="text-lg font-semibold text-gray-900">$8.00</p>
                                        </div> */}
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">SGD</span>{total}</p>
                                </div>

                                <div className="mt-6 text-center">
                                    <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                        Checkout
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div>

            </div>
        </div>
    );
};

export default Cart;
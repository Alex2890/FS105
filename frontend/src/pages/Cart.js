import React from 'react'

const Cart = () => {
    return (

        <div>
            <body className="font-poppins text-dark text-sm leading-loose">

                <div className="search-form fixed top-0 left-0 w-full bg-black opacity-95 min-h-screen items-center justify-center py-8 px-10 transform  transition-transform translate-x-full ease-in-out duration-500 hidden lg:flex z-50">
                    <button className="search-close absolute left-1/2 text-white text-xl top-12 translate-y-1/2" aria-label="close icon"><span className="icon-close"></span></button>
                    <form className="relative xl:w-1/3 lg:w-1/2" action="#" method="get">
                        <input className="text-md font-normal border-b border-solid border-gray-600 bg-transparent h-14 w-full focus:outline-none pr-14 text-white" type="search" name="search" placeholder="Search our store" />
                        <button className="absolute right-0 top-3 text-white text-md font-normal" type="submit" aria-label="submit button"><i className="icon-magnifier"></i></button>
                    </form>
                </div>
                <div className="offcanvas-overlay hidden fixed inset-0 bg-black opacity-50 z-50"></div>

                <div id="offcanvas-mobile-menu" className="offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white">

                    <div className="px-8 py-12 h-5/6 overflow-y-auto">


                        <form className="pb-10 mb-10 border-b border-solid border-gray-600" action="#" method="get">
                            <div className="relative">
                                <input className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" />
                                    <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600" type="submit" aria-label="button"><i className="icon-magnifier"></i></button>
                            </div>
                        </form>

                        <button className="offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0" aria-label="offcanvas"><i className="icon-close transition-all transform group-hover:rotate-90"></i></button>


                    </div>
                </div>


                <div className="py-24">

                    <div className="container">
                        <div className="grid grid-cols-1 gap-x-5">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-max">
                                    <thead>
                                        <tr>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Image</th>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Product</th>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Price</th>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Quantity</th>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Total</th>
                                            <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="w-32 p-3 border border-solid border-gray-600 text-center">
                                                <a href="#">
                                                    <img src="assets/images/single-product/sm/product1.webp" alt="product image"/></a>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="transition-all hover:text-orange">Birpod product unsde</a><span>m / gold</span>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span><span>$80.00</span></span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">

                                                <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                                    <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                                        <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                                </div>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span>$80.00</span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-pencil"></i></a>
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-32 p-3 border border-solid border-gray-600 text-center">
                                                <a href="#">
                                                    <img src="assets/images/single-product/sm/product2.webp" alt="product image" /></a>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="transition-all hover:text-orange">Birpod product unsde</a><span>m / gold</span>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span><span>$80.00</span></span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">

                                                <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                                    <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                                        <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                                </div>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span>$80.00</span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-pencil"></i></a>
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-32 p-3 border border-solid border-gray-600 text-center">
                                                <a href="#">
                                                    <img src="assets/images/single-product/sm/product3.webp" alt="product image"/></a>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="transition-all hover:text-orange">Birpod product unsde</a><span>m / gold</span>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span><span>$80.00</span></span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">

                                                <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                                    <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"/>
                                                        <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                                </div>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span>$80.00</span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-pencil"></i></a>
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-32 p-3 border border-solid border-gray-600 text-center">
                                                <a href="#">
                                                    <img src="assets/images/single-product/sm/product4.webp" alt="product image"/></a>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="transition-all hover:text-orange">Birpod product unsde</a><span>m / gold</span>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span><span>$80.00</span></span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">

                                                <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                                    <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"/>
                                                        <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                                </div>
                                            </td>
                                            <td className="p-3 border border-solid border-gray-600 text-center"><span>$80.00</span></td>
                                            <td className="p-3 border border-solid border-gray-600 text-center">
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-pencil"></i></a>
                                                <a href="#" className="inline-block mx-1 hover:text-orange transition-all"><i className="icon-close"></i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>


                <section className="pb-24">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                            <div>
                                <div>
                                    <form action="#">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">

                                            <div className="col-span-2">
                                                <h3 className="text-md font-semibold capitalize mb-8">Discount coupon Code</h3>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" placeholder="coupon Code" type="text"/>
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <a href="#" className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white mb-8 sm:mb-0">apply
                                                    code</a>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-4 lg:mt-0">
                                <div className="bg-gray-700 p-10">
                                    <ul className="flex flex-wrap items-center justify-between">
                                        <li className="text-base font-semibold">Product</li>
                                        <li className="text-base font-semibold">Total</li>
                                    </ul>

                                    <ul className="flex flex-wrap items-center justify-between">
                                        <li className="text-base font-semibold">Shipping</li>
                                        <li className="text-base font-semibold">Free shipping</li>
                                    </ul>
                                    <div className="border-t border-b border-gray-600 py-5 mt-5">
                                        <ul className="flex flex-wrap items-center justify-between">
                                            <li className="text-base font-semibold">Total</li>
                                            <li className="text-base font-semibold text-orange">$329</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <a href="#" className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white">Update Cart</a>
                                    <a href="#" className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white ml-4">checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>

                    <div className="news-letter-section bg-gray-100 pt-24 pb-24">
                        <div className="container">
                            <div className="max-w-[600px] mx-auto">
                                <div className="text-center">
                                    <a href="#" className="inline-block mb-11">
                                        <img src="assets/images/logo/logo.webp" alt="brand logo" loading="lazy" width="125" height="45" />
                                    </a>

                                    <p className="mb-10">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua. Ut enim ad
                                        minim. Lorem ipsum dolor sit amet.
                                    </p>

                                    <form id="mc-form" className="relative text-center md:max-w-xl mx-auto mb-10">
                                        <input id="mc-email" type="email" name="email" placeholder="email@example.com" className="border border-solid border-primary w-full h-14 sm:h-16 rounded-full bg-transparent placeholder-primary placeholder-opacity-50 text-sm sm:text-base focus:outline-none py-1 pl-8 pr-14 sm:pr-36" />
                                        <button id="mc-submit" type="submit" className="bg-dark transition-all hover:bg-orange hover:text-white px-10 sm:px-3 py-5 sm:py-1 rounded-l-full sm:rounded-l-none rounded-r-full text-white capitalize font-medium text-sm lg:text-md sm:absolute sm:top-0 sm:right-0 sm:h-full mt-3 sm:mt-0 leading-none w-full sm:w-auto">Subscribe</button>
                                    </form>
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting"></div>
                                        <div className="mailchimp-success text-green-400"></div>
                                        <div className="mailchimp-error text-red-600"></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center">
                                    <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><i className="icon-social-facebook"></i></a>
                                    <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><i className="icon-social-twitter"></i></a>
                                    <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><i className="icon-social-instagram"></i></a>
                                    <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><i className="icon-social-youtube"></i></a>
                                    <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><i className="icon-social-dribbble"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-section py-8 bg-gray-500">
                        <div className="container">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex order-last md:order-first flex-wrap items-center justify-center md:justify-start">
                                    <p className="text-white flex flex-wrap items-center text-sm lg:text-base">&copy; 2022 Sinp. Made with <i className="icon-heart mx-2 text-orange"></i> by<a href="#" className="ml-1 transition hover:text-orange">Codecarnival</a>.</p>
                                </div>

                                <div className="flex flex-wrap items-center justify-center md:justify-end">
                                    <a href="#">
                                        <img className="w-full h-full" src="assets/images/logo/payment.webp" alt="payment logo" loading="lazy" width="286" height="23" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </footer>

                <a id="scrollUp" className="w-12 h-12 rounded-full bg-orange text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10" href="#" aria-label="scroll up"><i className="icon-arrow-up"></i></a>


                <div className="modal-overlay hidden fixed inset-0 bg-black opacity-50 z-10"></div>

                <div id="modal-cart" className="modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-40 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white">



                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <img className="w-full h-full" src="assets/images/products/lg/product1.webp" alt="product image" loading="lazy" width="432" height="480"/>
                        </div>
                        <div>
                            <button className="text-black text-lg absolute top-7 right-7 modal-close"><i className="icon-close"></i></button>

                            <h3 className="text-dark font-medium text-md lg:text-lg leading-none mb-4">Airpod product kiebd</h3>
                            <h5 className="font-bold text-md leading-none text-orange mb-8">
                                $130.00
                                <del className="font-normal text-base mr-1 inline-block">$110.00</del>
                            </h5>

                            <p className="mb-5 text-sm">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>

                            <select className="w-full h-12 border border-solid border-gray-300  px-5 py-2 appearance-none">
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                            </select>

                            <div className="flex flex-wrap items-center mt-8">
                                <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                    <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"/>
                                        <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                </div>
                                <div className="ml-2 sm:ml-8">
                                    <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="modal-overlay hidden fixed inset-0 bg-black opacity-50 z-30"></div>
                <div id="modal-addto-cart" className="modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-50 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white mx-auto">


                    <div className="md:flex md:flex-wrap">
                        <div className="md:mr-5 md:flex-30 mb-5 md:mb-0">
                            <img className="w-full" src="assets/images/products/lg/product1.webp" alt="product image" loading="lazy" width="432" height="480"/>
                        </div>
                        <div className="md:flex-auto">
                            <button className="text-black text-lg absolute top-7 right-7 modal-close"><i className="icon-close"></i></button>
                            <h3 className="text-dark font-medium text-md sm:text-lg mb-4">Airpod product kiebd</h3>
                            <p className="text-dark text-sm flex flex-wrap items-center"><i className="icon-check text-lg mr-5"></i> Added to cart successfully!</p>
                            <div className="mt-8">
                                <a href="#" className="bg-black leading-none py-2 px-5 font-normal text-sm text-white transition-all hover:bg-orange mr-5">View Cart</a>
                                <a href="#" className="bg-black leading-none py-2 px-5 font-normal text-sm text-white transition-all hover:bg-orange">Checkout</a>
                            </div>
                        </div>
                    </div>

                </div>

                <script src="./assets/js/vendor/modernizr-3.11.7.min.js"></script>
                <script src="./assets/js/vendor/jquery-3.6.0.min.js"></script>
                <script src="./assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
                <script src="./assets/js/plugins/swiper-bundle.min.js"></script>
                <script src="./assets/js/plugins/popper.min.js"></script>
                <script src="./assets/js/plugins/tippy-bundle.umd.min.js"></script>
                <script src="./assets/js/plugins/jquery.magnific-popup.min.js"></script>
                <script src="./assets/js/plugins/jquery.ajaxchimp.min.js"></script>

                <script src="./assets/js/main.js"></script>



            </body>

        </div>

        // <div>cart</div>
    );
};


export default Cart;
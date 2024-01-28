import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (

        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="">
                    <div className="container mb-20">
                        <div className="grid grid-cols-12 gap-x-5">
                            <div className="md:col-start-4 md:col-span-6 col-span-12 text-center mx-auto">
                                <h2 className="font-medium text-lg">Ooops! Error 404</h2>
                                <p className="my-4">Sorry, this page does not exist or is temporarily unavailable.</p>
                                <a
                                    className="bg-black inline-block leading-none py-4 px-5 md:px-8 font-medium text-sm text-white transition-all hover:bg-orange capitalize"
                                >
                                    <Link to="/">Back to Home Page</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-letter-section bg-gray-100 pt-10 pb-10" style={{ width: "100%" }}>
                <div className="container">
                    <div className="max-w-[600px] mx-auto">
                        <div className="text-center">
                            <a href="#" className="inline-block mb-11">
                                <img src="assets/images/logo/logo.webp" alt="brand logo" loading="lazy" width="125" height="45" />
                            </a>

                            <p className="mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet.
                            </p>

                            <form id="mc-form" className="relative text-center md:max-w-xl mx-auto mb-10">
                                <input
                                    id="mc-email"
                                    type="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="border border-solid border-primary w-full h-14 sm:h-16 rounded-full bg-transparent placeholder-primary placeholder-opacity-50 text-sm sm:text-base focus:outline-none py-1 pl-8 pr-14 sm:pr-36"
                                />
                                <button
                                    id="mc-submit"
                                    type="submit"
                                    className="bg-dark transition-all hover:bg-orange hover:text-white px-10 sm:px-3 py-5 sm:py-1 rounded-l-full sm:rounded-l-none rounded-r-full text-white capitalize font-medium text-sm lg:text-md sm:absolute sm:top-0 sm:right-0 sm:h-full mt-3 sm:mt-0 leading-none w-full sm:w-auto"
                                >
                                    Subscribe
                                </button>
                            </form>
                            {/* mailchimp-alerts Start */}
                            <div className="mailchimp-alerts text-centre">
                                <div className="mailchimp-submitting"></div>
                                {/* mailchimp-submitting end */}
                                <div className="mailchimp-success text-green-400"></div>
                                {/* mailchimp-success end */}
                                <div className="mailchimp-error text-red-600"></div>
                                {/* mailchimp-error end */}
                            </div>
                            {/* mailchimp-alerts end */}
                        </div>
                        <div className="flex flex-wrap items-center justify-center">
                            <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition">
                                <i className="icon-social-facebook"></i>
                            </a>
                            <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition">
                                <i className="icon-social-twitter"></i>
                            </a>
                            <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition">
                                <i className="icon-social-instagram"></i>
                            </a>
                            <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition">
                                <i className="icon-social-youtube"></i>
                            </a>
                            <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition">
                                <i className="icon-social-dribbble"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Error
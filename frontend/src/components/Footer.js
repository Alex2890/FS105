import React from 'react'

const Footer = () => {
    return (
        <div className='inset-x-0 bottom-0 container mt-5'>
            <div className="container px-4 py-2 bg-slate-300">
                <div className="flex flex-wrap items-center justify-content md:justify-between">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-black font-semibold py-1 text-center">
                            Copyright © {new Date().getFullYear()}{" "}
                            <a
                                href="https://www.creative-tim.com"
                                className="text-black hover:text-gray-400 text-sm font-semibold py-1"
                            >
                                Creative Tim
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                            <li>
                                <a
                                    href="https://www.creative-tim.com"
                                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                >
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.creative-tim.com/presentation"
                                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://blog.creative-tim.com"
                                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                >
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
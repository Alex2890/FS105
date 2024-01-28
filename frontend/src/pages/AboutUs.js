import React from 'react'
import ridwan from '../images/ridwan.png';
import alex from '../images/alex.png';


const AboutUs = () => {
    return (

        <div>

            {/* <div className="py-9 bg-gray-light">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12">
                            <nav>
                                <ul className="flex flex-wrap items-center justify-center">
                                    <li className="mr-5"><a href="index.html" className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5">Home</a></li>
                                    <li className="text-dark font-medium text-base uppercase mr-5">about us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                        <div className="flex flex-wrap items-center mb-10 lg:mb-0">
                            {/* <img src="assets/images/drone/drone4.webp" alt="images" /> */}
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="font-bold uppercase text-3xl md:text-4xl mb-5 text-dark">WELCOME TO <span className="text-orange">LUXURIALOOM</span></h3>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
                            </div>
                            <div className="mb-10">
                                <h4 className="font-semibold uppercase text-md mb-4 text-dark">WE START AT 2022</h4>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born nsidae.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold uppercase text-md mb-4 text-dark">WIN BEST ONLINE SHOP AT 2022</h4>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-20">
                <div className="container">
                    <div className="grid gap-x-4 grid-cols-12">
                        <div className="col-span-12">
                            <div className="text-center pb-14">
                                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">Team Members</h2>
                                <p className="font-playfair font-medium text-md mb-3">Contrary to popular belief, Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="relative -m-4">
                                <div className="team-carousel overflow-hidden p-4">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            ... (your Swiper slides)
                                        </div>
                                    </div>
                                    <div className="swiper-buttons">
                                        <div className="swiper-button-prev right-auto left-4 w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                                        <div className="swiper-button-next left-auto right-4 w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container mb-10'>
                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5 text-center">Team Members</h2>

                <div className="carousel w-full">

                    <div id="item1" className="carousel-item w-full flex flex-col justify-center items-center mb-10">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={ridwan} alt="ridwan" /></figure>
                            <div className="card-body">
                                <h3 className="card-title mx-auto font-light">Ridwan</h3>
                                <h2 className="card-title mx-auto">Full Stack Developer</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item2" className="carousel-item w-full flex flex-col justify-center items-center mb-10">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={ridwan} alt="julia" /></figure>
                            <div className="card-body">
                                <h3 className="card-title mx-auto font-light">Julia</h3>
                                <h2 className="card-title mx-auto">Frontend Lead , Designer</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item3" className="carousel-item w-full flex flex-col justify-center items-center mb-10">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={alex} alt="alex" /></figure>
                            <div className="card-body">
                                <h3 className="card-title mx-auto font-light">Alex</h3>
                                <h2 className="card-title mx-auto">Backend Lead</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item4" className="carousel-item w-full flex flex-col justify-center items-center mb-10">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={ridwan} alt="vishal" /></figure>
                            <div className="card-body">
                                <h3 className="card-title mx-auto font-light">Vishal</h3>
                                <h2 className="card-title mx-auto">Backend Lead, Designer</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">Ridwan</a>
                    <a href="#item2" className="btn btn-xs">Julia</a>
                    <a href="#item3" className="btn btn-xs">Alex</a>
                    <a href="#item4" className="btn btn-xs">Vishal</a>
                </div>
            </div>




        </div>


    );

}

export default AboutUs
import React from 'react';
import home2 from "../images/home/home2.jpg"
import home3 from "../images/home/home3.jpg"
import home4 from "../images/home/home4.jpg"
import home5 from "../images/home/home5.jpg"
import home6 from "../images/home/home6.jpg"
import home7 from "../images/home/home7.jpg"
import home8 from "../images/home/home8.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/1199688598123978762/1207562448996016159/sdfsdf.jpg?ex=65e0192b&is=65cda42b&hm=999e0197794a387df7544917f862394e5b8f48eab48749d816ab7cafd542f9a5&)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-base-100">
          <div className="mt-48">
            <h1 className="mb-10 text-5xl italic font-light"> Crafted for Queens </h1>
            <p className="mb-10 italic font-normal">made for you </p>
            <Link to='/products'><button className="btn btn-primary text-white  rounded-none">Shop Now</button></Link>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen flex">
        <div className='w-1/2 bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${home2})`, minHeight: '100vh' }}>
            <p className="text-white text-center mt-48 text-4xl font-light">Carry confidence, wherever you go.</p>
        </div>
        
        <div className='w-1/2 bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${home3})`, minHeight: '100vh' }}>
            <p className="text-white text-center mt-48 text-4xl font-light">Your story, exquisitely crafted.</p>
        </div>

      </div>



      <div className="hero min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className='container flex flex-col items-center px-4'>
            <img src={home4} className="max-w-full h-auto"/>
            <div className='text-center mt-10'>
              <h6 className='font-bold underline'>PERSONALIZATION</h6>
            <p>We provide unique bags and items with initials to create a unique and special piece.</p>
            </div>
          </div>

          <div className='container flex flex-col items-center px-4'>
            <img src={home5} className="max-w-full h-auto"/>
            <div className='text-center mt-10'>
              <h6 className='font-bold underline'>PACKAGING</h6>
            <p>Choose our online exclusive tote bags to make a gift more personalized and special.</p>
            </div>
            
          </div>

          <div className='container flex flex-col items-center px-4'>
            <img src={home6} className="max-w-full h-auto"/>
            <div className='text-center mt-10'>
              <h6 className='font-bold underline'>COLLECT IN STORE</h6>
              <p>You can order online and collect your order from our nearest store to you.</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className='container hero min-h-screen'>
        <div className='hero-content grid grid-cols-1'>
            <img src={home7} className='w-full '></img>
          <p className='text-center text-base-content'>Allow the Luxurialoom masterpiece to captivate you. Not simply a best-selling bag, it's a coveted expression of premium luxury designed for the woman who defines elegance. Imagine the exquisite touch of meticulously crafted materials, a timeless design that complements your signature style, and the quiet confidence it exudes with every step. This is not just an accessory; it's an investment in timeless sophistication, an iconic piece waiting to become yours. Discover why others have been swept away by its allure and elevate your everyday to the extraordinary. Embrace the Luxurialoom masterpiece, and let it tell your story of discerning taste and effortless refinement.</p>
        </div>
        
        
      </div>

      <div className="hero min-h-screen ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div className=""><img src={home8}/></div>
            <div className="container text-center ml-0 lg:ml-40">
              <p className='mb-10 text-base-content italic'>"Experience the unmatched quality and craftsmanship of our designer bags. Each stitch, each detail, is a testament to the heritage and expertise of these iconic brands. Owning a LuxuriaLoom bag is an investment in timeless luxury that will be cherished for generations to come."</p>
              <Link to='/products'><button className="btn btn-primary text-white no-animation rounded-none">See More</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

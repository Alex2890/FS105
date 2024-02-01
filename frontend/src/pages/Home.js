import React from 'react';
import homepage1 from '../images/homepage1.jpg'
import homepage2 from '../images/homepage2.jpg'
import homepage3 from '../images/homepage3.jpg'
import homepage4 from '../images/homepage4.jpg'

const Home = () => {
  return (
    <main>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618183876181-3df5b83e7be9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-base-100">
          <div className="max-w-lg glass rounded-box p-8 drop-shadow-2xl">
            <h1 className="mb-5 text-5xl font-bold"> Crafted for Queens. </h1>
            <p className="mb-5"> Made for you. </p>
            <button className="btn btn-primary text-base-100">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="artboard phone-1" ><img className='rounded-box image-full' src={homepage1}/></div>
          <div className="divider lg:divider-horizontal"></div> 
          <div className="artboard phone-1" ><img className='rounded-box' src={homepage2}/></div>
          <div className="divider lg:divider-horizontal"></div> 
          <div className="artboard phone-1" ><img className='rounded-box image-full' src={homepage3}/></div>
        </div>
      </div>
      <div className="hero min-h-screen bg-gradient-to-br from-red-50 to-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="artboard artboard-horizontal phone-1"><img className='rounded-box image-full' src={homepage4}/></div>
            <div className="rounded-box artboard artboard-horizontal phone-1 p-20 text-center">
              <p className='mb-5 text-content text-gray-500 italic'>"Experience the unmatched quality and craftsmanship of our designer bags. Each stitch, each detail, is a testament to the heritage and expertise of these iconic brands. Owning a LuxuriaLoom bag is an investment in timeless luxury that will be cherished for generations to come."</p>
              <button className="btn btn-primary text-base-100 ">Explore our collection</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

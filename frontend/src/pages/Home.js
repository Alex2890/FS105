import React from 'react';
import homepage1 from '../images/home/homepage1.jpg'
import homepage2 from '../images/home/homepage2.jpg'
import homepage3 from '../images/home/homepage3.jpg'
import homepage4 from '../images/home/homepage4.jpg'

const Home = () => {
  return (
    <main>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618183876181-3df5b83e7be9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-base-100">
          <div className="max-w-lg bg bg-white rounded-none p-10">
            <h1 className="mb-5 text-base-content text-4xl italic font-light  w-96"> Crafted for Queens </h1>
            <p className="mb-5 text-base-content text-sm italic font-light"> made for you </p>
            <button className="btn btn-primary text-white no-animation mt-3">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="artboard phone-1" ><img className='image-full' src={homepage1}/></div>
          <div className="divider lg:divider-horizontal"></div> 
          <div className="artboard phone-1" ><img className='image-full' src={homepage2}/></div>
          <div className="divider lg:divider-horizontal"></div> 
          <div className="artboard phone-1" ><img className='image-full' src={homepage3}/></div>
        </div>
      </div>
      <div className="hero min-h-screen bg-gradient-to-br from-red-50 to-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="artboard artboard-horizontal phone-1"><img className='image-full' src={homepage4}/></div>
            <div className="rounded-box artboard artboard-horizontal phone-1 p-20 text-center">
              <p className='mb-10 text-base-content italic'>"Experience the unmatched quality and craftsmanship of our designer bags. Each stitch, each detail, is a testament to the heritage and expertise of these iconic brands. Owning a LuxuriaLoom bag is an investment in timeless luxury that will be cherished for generations to come."</p>
              <button className="btn btn-primary text-white no-animation ">Explore our collection</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import React from 'react';
import test from '../images/test.jpg';

const Home = () => {
  return (
    <main>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618183876181-3df5b83e7be9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-base-100">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

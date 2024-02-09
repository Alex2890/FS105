import React, { useContext } from 'react';
import { allData } from '../context/AppContext.js';


const Contact = () => {
  const {
    enquirerName,
    setEnquirerName,
    enquirerEmail,
    setEnquirerEmail,
    subject,
    setSubject,
    message,
    setMessage
  } = useContext(allData);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("it is working");

    const response = await fetch('/api/messages/submitmessage', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enquirerEmail, enquirerName, subject, message })
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      console.log("it is in the database");
    }

    setEnquirerEmail("");
    setEnquirerName("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div className="bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div className="contact-info-area">
              <h2 className="font-semibold text-4xl mb-14 capitalize ">Contact Us</h2>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <p className="flex-1">2 Orchard Link, SCAPE #05 - 08 Near Somerset MRT, Singapore 237978</p>
              </div>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <a href="mailto:info@example.com" className="flex-1"> luxurialoom@gmail.com </a>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="text-dark text-4xl mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <a href="tel:01234567890" className="flex-1">+65 1234 5678</a>
              </div>


              
            </div>


            <div className="card w-full max-w-m bg-base-100">
              <form className="card-body rounded-none p-14">

                <div className="form-control">
                  <label className="label">
                    <span>Name</span>
                  </label>
                  <input
                    onChange={(e) => setEnquirerName(e.currentTarget.value)}
                    className="input input-bordered"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />

                  <label className="label">
                    <span>Email</span>
                  </label>
                  <input
                    onChange={(e) => setEnquirerEmail(e.currentTarget.value)}
                    className="input input-bordered"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <label className="label">
                    <span>Subject</span>
                  </label>
                  <input
                    onChange={(e) => setSubject(e.currentTarget.value)}
                    className="input input-bordered"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />

                  <label className="label">
                    <span>Message</span>
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    className="input input-bordered w-full py-1 px-5 mb-5 h-32 text-base resize-none"
                    name="message"
                  ></textarea>

                  <div className="form-control mt-6">
                    <button
                      className="btn btn-primary text-white no-animation" 
                      onClick={submitHandler}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>



        
      </div>

      <div className='flex justify-center mb-20'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899666052795!2d103.83293041076051!3d1.3008932617253237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1996d80bf041%3A0x65962d763fdc49db!2sMAGES%20Institute%20of%20Excellence!5e0!3m2!1sen!2ssg!4v1706333068895!5m2!1sen!2ssg"
          width="60%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className='flex justify-center mb-20 grid grid-cols-1"'>
        <h6 className="footer-title text-center mb-10">Newsletter</h6> 
        <div className='italic'>
          We believe in using our platform for good. Partner with us to support artisan communities and sustainability initiatives around the world.
        </div>

        <form className='mx-auto w-80 mt-10'>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
              <button className="btn btn-primary join-item text-white no-animation">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>


    </>
  );
};

export default Contact;

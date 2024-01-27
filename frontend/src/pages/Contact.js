import React from 'react'

const Contact = () => {
  return (
    <>
      <div className=''>
        <div className="bg-white py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
              <div className="contact-info-area">
                <h2 className="font-semibold text-dark text-4xl mb-14 capitalize">Contact Us</h2>
                <div className="flex flex-wrap items-center mb-8">
                  <span className="text-dark text-4xl mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>

                  <p className="flex-1">Address goes here, street, Crossroad 123.</p>
                </div>
                <div className="flex flex-wrap items-center mb-8">
                  <span className="text-dark text-4xl mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                  </span>
                  <a href="mailto:info@example.com" className="flex-1">info@example.com / info@example.com</a>
                </div>
                <div className="flex flex-wrap items-center">
                  <span className="text-dark text-4xl mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                  </span>
                  <a href="tel:01234567890" className="flex-1">+1 35 776 859 011 / +1 35 776 859 011</a>
                </div>
              </div>

              <div className="p-10 lg:p-14 shadow mt-14 lg:mt-0">
                <form id="contact-form" method="get" action="#">
                  <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
                  <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" placeholder="Email" name="email" />
                  <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" placeholder="subject" name="subject" />
                  <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-32 focus:outline-none text-base resize-none" name="massage"></textarea>
                  <button className="w-full leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange" type="submit" aria-label="button">Send Message</button>
                </form>
                <p className="form-messege"></p>
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

        <div className="news-letter-section bg-gray-100 pt-24 pb-24">
          <div className="container">
            <div className="max-w-[600px] mx-auto">
              <div className="text-center">
                <a href="#" className="inline-block mb-11">
                  <img src="assets/images/logo/logo.webp" alt="brand logo" loading="lazy" width="125" height="45" />
                </a>

                <p className="mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet.
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

    </>


  )
}

export default Contact
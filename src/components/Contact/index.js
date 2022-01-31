import React from 'react';

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-navy rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=hideout&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-navy relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-red tracking-widest text-xs">
                CURRENT LOCATION
              </h2>
              <p className="mt-1 text-white">
                Hideout, UT 84036
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-red tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-white text-sm leading-relaxed">
                Matthewjkeys22@gmail.com
              </a>
              <h2 className="title-font font-semibold text-red tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className=" text-white leading-relaxed">631-626-2377</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-lightred sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed text-white mb-5">
            I leave power, good. Thank you... thank you.  Taxes, they'll be lower. The democratic vote is the right thing to do Philadelphia...so do.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-red">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-navy rounded border border-foam focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-red">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-navy rounded border border-foam focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-red">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-navy rounded border border-foam focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );

    
  
}

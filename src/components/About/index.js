import React from 'react';


export default function About({ categories, currentCategory, setCurrentCategory  }) {

return (
  
      <section id="about" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
       
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Matt.
            <br className="hidden lg:inline-block" /> I am a new full-stack developer.
          </h1>
          <p className="mb-8 text-charcoal leading-relaxed">
          I currently reside in Utah, after recently receiving a certificate in Full Stack Web Development from the University of Utah. I am most familiar with Javascript ES6+ and the MERN stack, though I do have experience with other technology stacks which you can find on my resume, linked above. 
          I am excited to work with new people and further develop my new skills. <br /><br />
          I'm an avid disc golfer and skier in my free time. If you're in the Park City, Utah area, I'd love to play a round or hit the slopes.  Potential future employers and new friends alike, please feel free to contact me by pressing the button below.  You can also find my LinkedIn, Github, and StackOverflow linked at the bottom of the page.       </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              onClick={() => setCurrentCategory('contact')}
              className="inline-flex text-charcoal bg-beige border-0 py-2 px-6 focus:outline-none hover:text-royal hover:bg-lightgray rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={() => setCurrentCategory('projects')}
              className="ml-4 inline-flex text-charcoal bg-beige border-0 py-2 px-6 focus:outline-none hover:bg-lightgray hover:text-royal rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require("../../assets/images/luzern.jpg")}
          />
        </div>
      </section>
    
)




//   return <div className='bg-pink-400'>
//       <h2>
//           About Me
//       </h2>
//       <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo lectus augue. Quisque iaculis, sem at laoreet iaculis, arcu diam cursus sem, non accumsan massa nunc vitae sapien. Nulla id efficitur nisl. Suspendisse vel lorem nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam rhoncus eros quam. Etiam tristique elit lorem, ac hendrerit sem dictum sed. Integer ultricies ipsum et tincidunt lacinia. Aenean turpis neque, feugiat vel finibus a, pretium non quam. Nam semper dignissim tristique. Praesent id diam id leo pharetra posuere non vitae ex. Fusce volutpat velit id ullamcorper varius.

// Sed porta pellentesque mi sit amet pretium. Vivamus feugiat felis libero, a rhoncus erat auctor vitae. Maecenas vel ultricies augue. Maecenas ex leo, congue eget molestie non, sagittis eu urna. Phasellus sed elementum ligula. Curabitur id viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          
//       </p>
//   </div>;
}

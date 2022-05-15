import React, { useEffect, useState } from 'react';
import Project from '../Project';
import { Redirect } from 'react-router-dom' 


 function Gallery() {

  const [projectFetch, setProjectFetch] = useState([]);
  const [galleryLoading, setGalleryLoading ] = useState(true)

  useEffect(()=> {
    fetch('https://api.github.com/users/fawlty22/repos?per_page=100')
        .then(function (response) {
          return response.json()
        })
        .then(projectFetchData => {
          setProjectFetch(projectFetchData)
          setGalleryLoading(false)
        })
        
  }, [])
   
  // console.log(data)

  // let reposWeLike = [ 'Chatterstorm', 'Pawgers', 'FlightPlan', 'photo-port', 'MatthewKeys', '']
  let reposWeLike = [ 'Pawgers', 'FlightPlan', 'DeepThoughts', 'PhotoPort', 'skiHaus', 'Chatterstorm' ]

  let reversedProjectFetch = projectFetch.slice(0).reverse()

  return (
    <section id="projects" className="text-white bg-gray body-font h-fit">
      <div className="container px-5 py-10 mx-auto text-center text-white lg:px-40">
        <div className="flex flex-col rounded w-full mb-10">
          
          <h1 className="sm:text-3xl text-2xl my-5 font-bold text-white title-font mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-relaxed text-charcoal text-base">
            Here is a selection of projects I've built. Hover over one to reveal links to the live application and GitHub. 
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center bg-charcoal 

        ">
          {galleryLoading && <h2 className='text-sky font-medium'>LOADING... </h2>}
        {reversedProjectFetch.map((repo) => (
          reposWeLike.includes(repo.name) && 
         <Project 
            name={repo.name}
            link={repo.html_url}
            homepage={repo.homepage}
            key={repo.name}
            />
        )
        )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
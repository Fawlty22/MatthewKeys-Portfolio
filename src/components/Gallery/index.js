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
   
  
  let reposWeLike = [ 'Pawgers', 'FlightPlan', 'DeepThoughts', 'PhotoPort', 'skiHaus', 'Chatterstorm' ]

  let reversedProjectFetch = projectFetch.slice(0).reverse()

  return (
    <section id="projects" className="text-white bg-gray body-font h-fit">
      <div className="container sm:px-5 sm:py-10 mx-auto text-center text-white lg:px-40">
        <div className="flex flex-col rounded w-full mb-10">
          
          <h1 className="sm:text-3xl text-2xl my-5 font-bold text-white title-font mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-relaxed text-charcoal text-base">
            Here is a selection of projects I've built. Please use the buttons to visit the live application and GitHub. 
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center bg-gray 

        ">
          {galleryLoading && <h2 className='text-charcoal bg-beige font-medium'>LOADING... </h2>}
        {reversedProjectFetch.map((repo) => (
          reposWeLike.includes(repo.name) && 
         <Project
            name={repo.name}
            link={repo.html_url}
            homepage={repo.homepage}
            key={repo.name}
            description={repo.description}
            topics={repo.topics}
            />
        )
        )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
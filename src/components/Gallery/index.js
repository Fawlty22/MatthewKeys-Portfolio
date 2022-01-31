import React, { useEffect, useState } from 'react';
import Project from '../Project';



 function Gallery() {

  const [projectFetch, setProjectFetch] = useState([]);
  const [galleryLoading, setGalleryLoading ] = useState(true)

  useEffect(()=> {
    fetch('https://api.github.com/users/fawlty22/repos')
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
  let reposWeLike = [ 'Pawgers', 'FlightPlan']



  return (
    <section id="projects" className="text-white bg-gray
     body-font h-fit">
      <div className="container px-5 py-10 mx-auto text-center text-white lg:px-40">
        <div className="flex flex-col border border-red bg-navy rounded w-full mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-semibold text-base">
            Here is a selection of projects I've built during my bootcamp.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center bg-navy">
          {galleryLoading && <h2 className='text-white font-medium'>LOADING... </h2>}
        {projectFetch.map((repo) => (
          reposWeLike.includes(repo.name) && 
         <Project 
            name={repo.name}
            link={repo.html_url}
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
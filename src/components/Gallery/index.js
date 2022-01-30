import React, { useEffect, useState } from 'react';
import Project from '../Project';



 function Gallery() {

  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/users/fawlty22/repos')
        .then(function (response) {
          return response.json()
        })
        .then(data => setData(data))
  }, [])
   
  // console.log(data)

  return (
    <section id="projects" className="text-white bg-gray-900 body-font h-fit">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the complete collection of projects I've built during my bootcamp.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          
        {data.map((eachRepo) => (
          <Project 
            name={eachRepo.name}
            link={eachRepo.html_url}
            />
        ))}
        
      
        </div>
      </div>
    </section>
  );

}

export default Gallery;
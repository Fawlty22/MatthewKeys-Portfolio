import React from "react";

export default function Project({ name, link }) {


  return (
<a href={link} target="blank" alt="project" className=" bg-foam border border-gray overflow-hidden hover:opacity-50  w-full lg:w-6/12 md:w-6/12 mx-3 md:mx-0 lg:mx-0">
    <div className="w-full flex justify-center p-3">
      <div className="text-red flex">
        <span className="pt-1 ml-2 font-bold text-xl ">{name}</span>
      </div>
    </div>
    <img className="w-full bg-cover" alt="screenshot of project" src={require(`../../assets/images/${name}.png`)}/>
  </a>

  );
}

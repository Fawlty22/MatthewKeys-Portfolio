import React from "react";

export default function Project({ name, link }) {


  return (
<a href={link} target="blank" className=" hover:bg-gray-300 rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <span className="pt-1 ml-2 font-bold text-sm">{name}</span>
      </div>
    </div>
    <img className="w-full bg-cover" src={require(`../../assets/images/${name}.png`)}/>
  </a>

  );
}

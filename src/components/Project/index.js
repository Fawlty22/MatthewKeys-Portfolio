import React from "react";

export default function Project({ name, link }) {


  return (
<div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <span className="pt-1 ml-2 font-bold text-sm">{name}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">{link}</span>
    </div>
    <img className="w-full bg-cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"/>
  </div>

  );
}

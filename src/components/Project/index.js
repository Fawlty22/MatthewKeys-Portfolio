import React from "react";

export default function Project() {

  function getProjectsArray () {
    fetch('https://github.com/users/fawlty22/repos')
      .then(function (response) {
        let parsedData = response.json()
        console.log(parsedData)
        return parsedData
      } 
      )}

      // getProjectsArray()


  return (
    <div className=" max-w-sm h-1/3 w-1/2 overflow-hidden shadow-lg bg-blue-400 border border-white ">
  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

  );
}

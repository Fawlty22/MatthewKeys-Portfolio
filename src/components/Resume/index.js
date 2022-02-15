import React from "react";

export default function Resume() {

  const proficiencies = ['Nodes.js', 'REACT', 'Express', 'MySQL', 'MongoDB', 'GraphQL', 'Bulma/Bootstrap/Tailwinds' ]
  return (
    <section className="h-min">
      <div className="p-10 text-center text-lg text-white">
        <h1 className="font-bold">Proficiencies:</h1>
        <ul className="text-sm text-charcoal">
          {proficiencies.map(each => (
            <li>
            <h2>{each}</h2>
          </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <a className="text-white text-lg font-bold" target="_blank" href="https://docs.google.com/document/d/1pgmCInHbLEruLSGlGSQeyHpZP-z6D3jQ/edit?usp=sharing&ouid=103185258164836853942&rtpof=true&sd=true" >
          Click Here To View My Resume 
        </a>
      </div>
    </section>
  );
}

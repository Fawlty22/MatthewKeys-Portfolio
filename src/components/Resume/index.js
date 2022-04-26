import React from "react";

export default function Resume() {

  const proficiencies = [ "JavaScript ES6+",
    "HTML 5",
    "CSS 3",
    "React.js",
   "Express",
    "jQuery",
   "Node.js",
   "Bootstrap",
    "MongoDB",
    "SQL/NoSQL",
   "AJAX/JSON",
   "GraphQL",
   "Apollo"]
  return (
    <section className="h-min">
      
      <div className="p-10 text-center text-lg text-white">
        <h1 className="font-bold">Proficiencies:</h1>
        <ul className="text-md text-charcoal">
          {proficiencies.map(each => (
            <li>
            <h2>{each}</h2>
          </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <a className="text-white text-xl font-bold" target="_blank" href="https://drive.google.com/file/d/1jqSb6Y7jDQgxmn_kjP8t_HaxQKPjTyvM/view?usp=sharing" >
          Click Here To View My Resume 
        </a>
      </div>
    </section>
  );
}

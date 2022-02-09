import React from "react";

export default function Resume() {
  return (
    <section className="h-min">
      <div className="p-10 text-center text-lg text-white">
        <h1 className="font-bold">Proficiencies:</h1>
        <ul className="text-sm text-charcoal">
          <li>
            <h2>Node.js</h2>
          </li>
          <li>
            <h2>REACT</h2>
          </li>
          <li>
            <h2>Express</h2>
          </li>
          <li>
            <h2>MongoDB</h2>
          </li>
          <li>
            <h2>MySQL</h2>
          </li>
          <li>
            <h2>GraphQL</h2>
          </li>
          <li>
            <h2>Bulma/Bootstrap/Tailwinds</h2>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center" id="photo-wrapper">
        <a className="" href="../../assets/resume.png"  download>
          <img
            className="resume-img"
            src={require("../../assets/images/resume.png")}
            alt="resume"
          ></img>
        </a>
      </div>
    </section>
  );
}

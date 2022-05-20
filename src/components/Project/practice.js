import React from "react";

export default function Project({ name, link, homepage }) {
  return (
    <section
      className="effect-container h-40 border border-charcoal overflow-hidden  xs:w-full "
    >
      <img
        className="w-full effect-image bg-cover"
        alt="screenshot of project"
        src={require(`../../assets/images/${name}.png`)}
      />
      <div className="effect-overlay">
        <div className="effect-text">
          <h1 className="text-center text-charcoal mb-5">{name}</h1>
          <div className="flex flex-around">
            <button className="bg-charcoal w-30 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
              <a
              href={link}
              target="blank"
              alt="project"
              >
                GitHub
              </a>
            </button>
            <button className="bg-charcoal w-30 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
            <a
              href={homepage}
              target="blank"
              alt="project"
              >
                {homepage ? 'Live App' : 'In Progress'}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



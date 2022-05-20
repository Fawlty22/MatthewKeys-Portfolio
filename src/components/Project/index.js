import React from "react";
import {
  SiApollographql as Apollo,
  SiGraphql as Graphql,
  SiExpress as Express,
  SiNodedotjs as Node,
  SiMysql as MySQL,
  SiMongodb as Mongo,
  SiBulma as Bulma,
  SiHandlebarsdotjs as Handlebars,
  SiReact as ReactIcon,
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JS,
} from "react-icons/si";

export default function Project({ name, link, homepage, description, topics }) {
  return (
    <section className="border border-charcoal  sm:flex mb-2 bg-beige rounded">
      <img
        className="w-full sm:w-1/3 "
        alt="screenshot of project"
        src={require(`../../assets/images/${name}.png`)}
      />
      <div className="w-full h-full p-3 sm:flex sm:flex-col justify-between">
        <h1 className=" text-charcoal text-xl mb-5 font-bold">{name}</h1>
        <p className="mb-1">{description}</p>
        <div className="flex self-center w-full justify-around mb-1">
          <button className="bg-charcoal w-1/3 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
            <a href={link} target="blank" alt="project">
              GitHub
            </a>
          </button>
          <button className="bg-charcoal w-1/3 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
            <a href={homepage} target="blank" alt="project">
              {homepage ? "Live App" : "In Progress"}
            </a>
          </button>
        </div>
        <div className="w-full self-center text-charcoal flex flex-wrap justify-evenly mb-2">
          {topics.map((each) => {
            switch (each) {
              case "mongodb":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Mongo /> MongoDB
                  </span>
                );
              case "apollo":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Apollo /> Apollo
                  </span>
                );
              case "react":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <ReactIcon /> React.js
                  </span>
                );
              case "graphql":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Graphql /> GraphQL
                  </span>
                );
              case "express":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Express /> Express
                  </span>
                );
              case "nodejs":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Node /> Node.js
                  </span>
                );
              case "mysql":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <MySQL /> MySQL
                  </span>
                );
              case "bulma":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Bulma /> Bulma
                  </span>
                );
              case "handlebars":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <Handlebars /> Handlebars.js
                  </span>
                );
              case "html":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <HTML /> HTML 5
                  </span>
                );
              case "css":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <CSS /> CSS 3
                  </span>
                );
              case "javascript":
                return (
                  <span
                    key={each}
                    className="flex text-sm justify-center items-center"
                  >
                    <JS /> JavaScript ES6+
                  </span>
                );
            }
          })}
        </div>
      </div>
    </section>
  );
}

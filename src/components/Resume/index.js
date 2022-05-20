import React from "react";
import {
  SiApollographql as Apollo,
  SiGraphql as Graphql,
  SiExpress as Express,
  SiNodedotjs as Node,
  SiMysql as MySQL,
  SiMongodb as Mongo,
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JS,
  SiJquery as JQuery,
  SiBootstrap as Bootstrap,
  SiJsonwebtokens as JWT,
  SiHandlebarsdotjs as Handlebars,
  SiReact as ReactIcon
} from "react-icons/si";


export default function Resume() {
  const proficiencies = [
    "JavaScript ES6+",
    "HTML 5",
    "CSS 3",
    "React.js",
    "Express",
    "jQuery",
    "Node.js",
    "Bootstrap",
    "Handlebars",
    "MongoDB",
    "MySQL",
    "JSON Web Tokens",
    "GraphQL",
    "Apollo",
  ];

  return (
    <section className="h-min">
      <div className="p-10 text-center text-lg text-white">
        <h1 className="font-bold">Proficiencies:</h1>
        <ul className="text-md text-charcoal">
          {proficiencies.map((each) => {
            switch (each) {
              case "Apollo":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Apollo /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "React.js":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <ReactIcon /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "Express":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Express /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "Node.js":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Node /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "MySQL":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <MySQL /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "MongoDB":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Mongo /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "HTML 5":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <HTML /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "CSS 3":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <CSS /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "JavaScript ES6+":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <JS /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "jQuery":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <JQuery /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "Bootstrap":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Bootstrap /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "JSON Web Tokens":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <JWT /> <span className="mx-2">{each}</span>
                  </li>
                );
              case "GraphQL":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Graphql /> <span className="mx-2">{each}</span>
                  </li>
                );
                case "Handlebars":
                return (
                  <li
                    key={each}
                    className="flex justify-center font-semibold items-center "
                  >
                    <Handlebars /> <span className="mx-2">{each}</span>
                  </li>
                );
            }
          })}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <a
          className="text-white text-xl font-bold"
          target="_blank"
          href="https://drive.google.com/file/d/1jqSb6Y7jDQgxmn_kjP8t_HaxQKPjTyvM/view?usp=sharing"
        >
          Click Here To View My Resume
        </a>
      </div>
    </section>
  );
}

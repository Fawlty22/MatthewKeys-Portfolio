import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [categories] = useState([
    {
      name: "projects",
      description:
        "The projects I've completed during this cohort.",
    },
    { name: "about me", description: "A section about me." },
    { name: "resume", description: "My resume." },
    {
      name: "contact",
      description: "Contact me.",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div className="App bg-amber-400">
      <Header /> 
      <main className="">
        {<About />}
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

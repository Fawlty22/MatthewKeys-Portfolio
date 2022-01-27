import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [categories] = useState([
    {
      name: 'projects'
    },
    {
      name: 'about'
    },{
      name: 'resume'
    },{
      name: 'contact'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);


  return (
    <div className="App bg-amber-400">
      <Header categories={categories}/> 
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

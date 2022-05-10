import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {

  const [categories] = useState([
    {
      name: 'projects'
    },
    {
      name: 'about'
    },
    {
      name: 'resume'
    },
    {
      name: 'contact'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1].name);



  return (
    <Router>
    <div id="app" className="grad h-fit">
      
      <Header 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      /> 
      <main className="bg-gray h-full flex flex-wrap justify-center content-between">

        {currentCategory === 'about' &&   
        <About 
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          />
        }
        {currentCategory === 'projects' && <Gallery />}
        {currentCategory === 'contact' &&<Contact />}
        {currentCategory === 'resume' &&<Resume />}
        
      <Footer />
      </main>
     
    </div>
    </Router>
  );
}

export default App;

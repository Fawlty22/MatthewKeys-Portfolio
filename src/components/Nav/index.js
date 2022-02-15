import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Navbar({ categories, currentCategory, setCurrentCategory }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between p-1 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-sky border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas icon fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex lg:flex-row list-none lg:ml-auto ">
            {categories.map((category) => (
              <li  className='py-3 px-2 nav-item' key={category.name}>

                <Link
                  className={`py-3 px-2 flex items-center text-lg  sm:p-1 md:p-1 font-bold leading-snug hover:bg-lightgray hover:text-royal rounded ${currentCategory == category.name && 'text-beige'}`} 
                  alt="link" 
                  to={category.name}
                  onClick={() => setCurrentCategory(category.name)}
                >
                  <span className="ml-2 sm:text-sm md:text-sm">{capitalizeFirstLetter(category.name)}</span>

                </Link>

              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
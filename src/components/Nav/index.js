import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Link } from "react-router-dom";

export default function Nav({ categories, currentCategory, setCurrentCategory }) {

  return (
  <div className=''>
      <nav className=''>
          <ul className='font-bold flex justify-between'>
            {categories.map((category) => (
            
              <li  className='py-10 px-5' key={category.name}>
                <Link alt="link" to={category.name} className={`py-5 px-5 hover:bg-lightgray hover:text-royal rounded ${currentCategory == category.name && 'text-beige'}`} onClick={() => setCurrentCategory(category.name)}>
                {capitalizeFirstLetter(category.name)}
                </Link>
              </li>
            ))}
             
          </ul>
      </nav>
  </div>
  )
}

import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav({ categories, currentCategory, setCurrentCategory }) {

  return (
  <div className=''>
      <nav className=''>
          <ul className='font-bold flex justify-between'>
            {categories.map((category) => (
            
              <li  className='py-10 px-5' key={category.name}>
                <a alt="link" href="/" className='py-5 px-5 hover:bg-navy hover:text-white rounded' onClick={() => setCurrentCategory(category.name)} href='#'  >
                {capitalizeFirstLetter(category.name)}
                </a>
              </li>
            ))}
             
          </ul>
      </nav>
  </div>
  )
}

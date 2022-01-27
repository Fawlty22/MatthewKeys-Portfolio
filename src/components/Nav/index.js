import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav({ categories, currentCategory, setCurrentCategory }) {

  return (
  <div className=''>
      <nav className=''>
          <ul className='flex justify-between'>
            {categories.map((category) => (
            
              <li  className='py-10 px-5' key={category.name}>
                <a className='py-5 px-5' onClick={() => setCurrentCategory(category.name)} href='#'  >
                {capitalizeFirstLetter(category.name)}
                </a>
              </li>
            ))}
             
          </ul>
      </nav>
  </div>
  )
}

import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav({ categories }) {

  return (
  <div className=''>
      <nav className=''>
          <ul className='flex justify-between'>
            {categories.map((category) => (
              <li className='p-10' key={category.name}>
                <a href='/' >
                {capitalizeFirstLetter(category.name)}
                </a>
              </li>
            ))}
             
          </ul>
      </nav>
  </div>
  )
}

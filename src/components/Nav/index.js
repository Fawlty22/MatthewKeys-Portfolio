import React from 'react';

export default function Nav() {
  return (
  <div className=''>
      <nav className=''>
          <ul className='flex justify-between'>
              <li className='p-10'>
                  <a href='/'>
                    About Me
                  </a>
              </li>
              <li className='p-10'>
                  <a href='/'>
                    Projects
                  </a>
              </li>
              <li className='p-10'>
                  <a href='/'>
                    Resume
                  </a>
              </li>
              <li className='p-10'>
                  <a href='/'>
                    Contact
                  </a>
              </li>
          </ul>
      </nav>
  </div>
  )
}

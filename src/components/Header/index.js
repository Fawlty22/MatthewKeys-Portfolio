import React from 'react';
import Nav from '../Nav';

export default function Header() {
  return <div className='bg-gray-400 flex justify-between'>
      <h1 className='p-10'>
          <a href='/'> Matthew Keys </a>
      </h1>
      <Nav />

  </div>;
}

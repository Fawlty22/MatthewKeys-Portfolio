import React from 'react';
import Nav from '../Nav';

export default function Header({ categories, currentCategory, setCurrentCategory }) {
  return <div className='bg-gray-400 flex justify-between h-1/8'>
      <h1 className='p-10'>
          <a href='/'> Matthew Keys </a>
      </h1>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        />

  </div>;
}

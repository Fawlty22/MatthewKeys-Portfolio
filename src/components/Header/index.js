import React, {useState} from 'react';
import Nav from '../Nav';

export default function Header({ categories, currentCategory, setCurrentCategory }) {
  
  
  

  return <header className='bg-charcoal flex h-30 justify-between text-sky'>
      <h1 className='font-bold rounded  p-10'>
          <a className="hover:bg-lightgray hover:text-royal rounded p-5" href='/'> Matthew Keys </a>
      </h1>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        />

  </header>; 
}

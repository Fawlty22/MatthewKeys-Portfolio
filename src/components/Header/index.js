import React, {useState} from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom'

export default function Header({ categories, currentCategory, setCurrentCategory }) {
  
  
  

  return <header className='bg-charcoal text-xl md:text-md flex h-30 justify-between text-sky'>
      <h1 className='font-bold rounded p-10'>
          <Link to="/about" className="hover:bg-lightgray hover:text-royal rounded p-5" > Matthew Keys </Link>
      </h1>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        />

  </header>; 
}

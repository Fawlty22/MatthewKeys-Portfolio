import React from 'react';

export default function Footer() {
 
  return <footer className='bg-charcoal h-20 flex justify-center'>

      <div id="icon-container" className="h-full flex w-1/4 justify-around items-center">
        <a href="https://www.linkedin.com/in/matthewkeysprofile/"  target="blank" alt="icon" className="icon m-2 fa fa-2x fa-linkedin"></a>
        <a href="https://fawlty22.github.io/" target="blank" alt="icon" className="icon m-2 fa fa-2x fa-github"></a>
        <a href="https://stackoverflow.com/users/16237984/fawlty22" target="blank" alt="icon" className="icon m-2 fa fa-2x fa-stack-overflow"></a>
      </div>
  </footer>;
}

import * as React from 'react';
import Logo from './Logo';

function Header() {
  
  return (
    <>
      <div className='flex justify-evenly w-1/2'>
        <Logo />
        <span>
          About
        </span>
        <span>
          Booking
        </span>
        <span>
          Contact
        </span>
      </div>
    </>
  );
}
export default Header;

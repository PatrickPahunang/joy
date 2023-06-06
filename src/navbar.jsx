

import './index.css'
import './App.css'
import React, { useState  } from 'react';
import { Link, useLocation } from 'react-router-dom';


 
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [imageSrc, setImageSrc] = useState('/hamburger.svg');



  const handleClick = () => {
    // Function 1
    setIsActive(!isActive);
    
    // Function 2
    setImageSrc(isActive ? '/hamburger.svg' : '/close.svg');
  };

 

  return (
    
    <>
    
    <div className='w-screen h-20 flex items-center justify-center text-center px-5 bg-slate-50'>
    <div className='  xl:w-2/4 max-w-7xl  flex text-center items-center justify-end xl:text-2xl text-sm w-max '>
      <a href="joy/"><img src="/favicon.svg" className='w-10 mx-5' data-aos="fade-down" data-aos-duration="1000" /></a> <span data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">Msjoy Beads and Wire Jewelry</span>
    </div>
    
    <div className='transition ease-in duration-1000 flex justify-center items-center text-center xl:w-3/4 max-w-7xl xl:inline-block w-20 z-50 ' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
      <button onClick={handleClick}><img src={imageSrc} data-aos="zoom-in" data-aos-duration="500"  alt="Menu" className='w-10 ml-4 xl:hidden'/></button>
      {isActive ? (
        <div className='absolute flex flex-col justify-center items-center text-center top-14 -right-1/3 dropdown z-50  ' >
          <a className=' py-4 text-lg text-center text-slate-950 hover:border-b-2 max-w-md w-screen z-50  border-l-8 border-b-2 rounded-l-xl  border-black  bg-slate-50' href='/joy/' data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">Home</a>
          <a className=' py-4 text-lg text-center text-slate-950 hover:border-b-2 max-w-md w-screen z-50  border-l-8 border-b-2 rounded-l-xl  border-black  bg-slate-50' href='/joy/collections' data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">Collections</a>
          <a className=' py-4 text-lg text-center text-slate-950 hover:border-b-2 max-w-md w-screen z-50  border-l-8 border-b-2 rounded-l-xl  border-black  bg-slate-50' href='/joy/about' data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">About</a>
          <a className=' py-4 text-lg text-center text-slate-950 hover:border-b-2 max-w-md w-screen z-50  border-l-8 border-b-2 rounded-l-xl  border-black  bg-slate-50' href='/joy/contacts' data-aos="fade-down" data-aos-duration="500" data-aos-delay="400">Contacts</a>
        
        </div>
      ) : (
        <div>
       </div>
      )}

    
      <a className='px-4 py-2 mb-4 text-xl text-slate-950 hover:border-b-2 border-b-2 font-semibold border-slate-50  hover:border-b-slate-800 xl:inline-block hidden ' href='/joy/'>Home</a>
      <a className='px-4 py-2 mb-4 text-xl text-slate-950 hover:border-b-2 border-b-2 font-semibold border-slate-50  hover:border-b-slate-800 xl:inline-block hidden ' href='/joy/collections'>Collections</a>
      <a className='px-4 py-2 mb-4 text-xl text-slate-950 hover:border-b-2 border-b-2 font-semibold border-slate-50  hover:border-b-slate-800 xl:inline-block hidden ' href='/joy/about'>About</a>
      <a className='px-4 py-2 mb-4 text-xl text-slate-950 hover:border-b-2 border-b-2 font-semibold border-slate-50  hover:border-b-slate-800 xl:inline-block hidden ' href='/joy/contacts'>Contacts</a>
    </div>
      
    </div>
      


    </>

    
  )
  
}

export default Navbar

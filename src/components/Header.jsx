import React, { useState } from 'react'
import { Link, scroller } from 'react-scroll';
export default function Header() {
  const [active, setActive] = useState('');
  const [toggle,setToggle]= useState(false);
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0.3,
      smooth: 'easeInOutQuart',
    });
    setActive(section);
  };
  return (
    <>
    <nav className=' z-40 font-poppins fixed h-navh w-full flex items-center justify-between '>
      <div className='flex gap-1 ml-3 sm:ml-10'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
        <h1 className=' font-semibold font-poppins'>AnilReddy</h1>
      </div>
      <div className='sm:hidden mr-5' onClick={()=>setToggle(!toggle)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 font-bold">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
      </div>

   
      <ul className='hidden sm:flex gap-6 mr-32 font-semibold'>
        <li style={{
          color: active === 'home-section' ? "white" : "",
          textDecoration: active === 'home-section' ? "underline" : "",
          fontSize: active === 'home-section' ? "1.1rem" : "",
          textUnderlineOffset: active === 'home-section' ? "0.5rem" : "",
        }} className='hover:text-white cursor-pointer hover:underline hover:underline-offset-8'>
          <Link
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollTo('home-section')}
          >
            Home
          </Link>
        </li>
        <li style={{
          color: active === 'about-section' ? "white" : "",
          textDecoration: active === 'about-section' ? "underline" : "",
          fontSize: active === 'about-section' ? "1.1rem" : "",
          textUnderlineOffset: active === 'about-section' ? "0.5rem" : "",
        }} className='hover:text-white cursor-pointer hover:underline hover:underline-offset-8'>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollTo('about-section')}
          >
            About
          </Link>
        </li>
        <li style={{
          color: active === 'skills-section' ? "white" : "",
          textDecoration: active === 'skills-section' ? "underline" : "",
          fontSize: active === 'skills-section' ? "1.1rem" : "",
          textUnderlineOffset: active === 'skills-section' ? "0.5rem" : "",
        }} className='hover:text-white cursor-pointer hover:underline hover:underline-offset-8'>
          <Link
            activeClass="active"
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollTo('skills-section')}
          >
            Skills
          </Link>
        </li>
        <li style={{
          color: active === 'education-section' ? "white" : "",
          textDecoration: active === 'education-section' ? "underline" : "",
          fontSize: active === 'education-section' ? "1.1rem" : "",
          textUnderlineOffset: active === 'education-section' ? "0.5rem" : "",
        }} className='hover:text-white cursor-pointer hover:underline hover:underline-offset-8'>
          <Link
            activeClass="active"
            to="education-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollTo('education-section')}
          >
            Education
          </Link>
        </li>
        <li style={{
          color: active === 'work-section' ? "white" : "",
          textDecoration: active === 'work-section' ? "underline" : "",
          fontSize: active === 'work-section' ? "1.1rem" : "",
          textUnderlineOffset: active === 'work-section' ? "0.5rem" : "",
        }} className='hover:text-white cursor-pointer hover:underline hover:underline-offset-8'>
          <Link
            activeClass="active"
            to="work-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollTo('work-section')}
          >
            Work
          </Link>
        </li>
      </ul>
    </nav>
    

    {toggle === true && 
    <div className='sm:hidden py-5 pl-3 z-40 w-full bg-navbarc fixed top-14 '>
    <ul className=''>
        <li className='text-white text-2xl font-medium p-2 cursor-pointer '>
          <Link
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {scrollTo('home-section'); setToggle(!toggle)}}
          >
            Home
          </Link>
        </li>
        <li  className='text-white text-2xl font-medium p-2 cursor-pointer '>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {scrollTo('about-section'); setToggle(!toggle)}}
          >
            About
          </Link>
        </li>
        <li  className='text-white text-2xl font-medium p-2 cursor-pointer '>
          <Link
            activeClass="active"
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {scrollTo('skills-section'); setToggle(!toggle)}}
          >
            Skills
          </Link>
        </li>
        <li  className='text-white text-2xl font-medium p-2 cursor-pointer '>
          <Link
            activeClass="active"
            to="education-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {scrollTo('education-section'); setToggle(!toggle)}}
          >
            Education
          </Link>
        </li>
        <li  className='text-white text-2xl font-medium p-2 cursor-pointer '>
          <Link
            activeClass="active"
            to="work-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {scrollTo('work-section'); setToggle(!toggle)}}
          >
            Work
          </Link>
        </li>
      </ul>
    </div>}

    </>
  )
}

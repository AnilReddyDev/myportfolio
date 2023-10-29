import React, { useState } from 'react'
import { Link, scroller } from 'react-scroll';
export default function Header() {
  const [active, setActive] = useState('');
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0.3,
      smooth: 'easeInOutQuart',
    });
    setActive(section);
  };
  return (
    <nav className=' z-40 font-poppins fixed h-navh w-full flex items-center justify-between '>
      <div className='flex gap-1 ml-10'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
        <h1 className=' font-semibold font-poppins'>AnilReddy</h1>
      </div>
      <ul className='flex gap-6 mr-32 font-semibold'>
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
  )
}

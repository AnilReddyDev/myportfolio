import React from 'react'
import '../common.css'
import anilimg from '../assets/anilimg2.jpg'
export default function About() {
  return (
    <div className='w-full font-poppins pt-navb pb-8 sm:pb-0 sm:h-screen bg-slate-200'>
      <div className='w-full mt-2 sm:my-7 flex justify-center items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-10 sm:h-10">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
        <h1 className='text-3xl sm:text-4xl font-semibold text-center'>About <span className='text-violet-900'>Me</span></h1>
      </div>
      <div className='w-full mt-1 sm:mt-20 flex-wrap py-5 sm:py-12 gap-2 sm:gap-12 justify-center items-center flex'>
        <div className='left w-64 sm:w-96 rounded-xl shadow-lg shadow-gray-700 sm:h-96 flex items-center overflow-hidden bg-yellow-300' id='box'>
          <img src={anilimg} alt="anil img" className='' />
        </div>
        <div className='right font-poppins w-width40rem h-96 px-5 pt-2 sm:pt-0 sm:px-0'>
          <h1 className='text-2xl font-bold mt-2 sm:mt-0 '>I'm Anil Reddy</h1>
          <h1 className='text-lg font-semibold text-violet-900'>Web developer</h1>
          <p className='font-medium text-sm my-1 sm:my-3'>I'm a passionate Web developer hailing
            from the vibrant city of Hyderabad, India. I am an 3rd
            CSE(AI&ML) undergraduate from MRU(Malla Reddy University). As a
            university student, I'm dedicated to enhancing my capabilities,
            and I enjoy reimagining and building Reactjs applications,
            transforming ideas into memorable digital experiences.</p>
          <p className=' font-medium mb-1 sm:mb-4' ><span className='text-blue-600'>Email :</span> konyalaanilreddy00@gamil.com</p>
          <p className=' font-medium'><span className='text-blue-600'>Place :</span> Hyderabad, India - 500100</p>
          <button className='w-32 inline-flex hover:gap-1 transition-all ease-in duration-75 justify-center items-center h-12 text-white rounded-md sm:mt-5 mt-3 shadow-md text-md shadow-blue-600 bg-blue-800'>Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-5 h-5">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>

          </button>
        </div>
      </div>
    </div>
  )
}

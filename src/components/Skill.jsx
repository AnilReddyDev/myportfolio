import React from 'react'
import SkillCards from './SkillCards'

export default function Skill() {
  return (
    <div className='w-full font-poppins pt-navb h-screen bg-violet-700'>
      <div className='w-full my-5 sm:my-10 text-white flex justify-center items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
        </svg>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Skills</h1>
      </div>
      <div className='w-full h-5/6 sm:h-4/5   items-center flex justify-center'>
        <div className=' w-11/12 sm:w-4/5 h-full overflow-y-auto py-4 sm:py-2 px-2 rounded-lg bg-violet-950  opacity-80'>
            <SkillCards/>
        </div>
      </div>
    </div>
  )
}
<h1>Skills</h1>
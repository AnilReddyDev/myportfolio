import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className="w-96 h-72 bg-slate-200 rounded-md relative overflow-hidden" id='projectCon'>
          <img src={project.img} alt="ii" className='w-full h-full rounded-md' />
          <div className=' absolute left-0 top-60 opacity-90 bg-slate-50 w-full h-56 z-10' id='projectSlider'>
            <h1 className='w-full text-center py-2  bg-yellow-500 text-black text-2xl font-bold'>{project.Title}</h1>
            <div className='p-3 box-border'>
              <p className='text-bold font-poppins py-2 text-black'>{project.desc}</p>
              <div className='flex w-full justify-between '>
                <a href={project.viewliveWebsite} target='_blank' className='px-6 flex gap-1 text-white font-semibold hover:bg-violet-900 py-3 bg-redish rounded-md'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                  Live</a>
                <a href={project.viewCodeLink} target='_blank' className='px-6 text-white font-semibold hover:bg-violet-900 py-3 flex gap-1 bg-redish rounded-md mr-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  Code</a>
              </div>
            </div>
          </div>
        </div>
  )
}

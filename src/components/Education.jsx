import React from 'react'

export default function Education() {
  return (
    <div className='w-full font-poppins pt-navb h-screen bg-slate-200'>
      <div className='w-full  mt-0 mb-1 sm:my-8 flex justify-center items-center gap-1 sm:gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
        <h1 className='text-2xl sm:text-4xl font-bold text-center'>My <span className='text-violet-900'>Education</span></h1>
      </div>
      <div className='w-full h-auto flex flex-col gap-2 sm:gap-7 justify-center items-center'>
        <div className=' w-10/12 rounded-md sm:w-3/4 h-auto sm:inline-flex flex flex-col sm:flex-row shadow-md sm:shadow-lg shadow-gray-800 sm:h-40 bg-slate-100'>
          <div className='w-full sm:w-auto flex justify-center'>
          <img src="https://static.wixstatic.com/media/6685d7_fc1bdb02a7624acfb008030da68cfb28~mv2.jpg/v1/crop/x_111,y_117,w_889,h_463/fill/w_714,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/MRUBuilding.jpg"
            alt="MRU" className='py-1 sm:py-0 w-4/5 rounded-sm sm:rounded-none h-28 sm:w-72 sm:h-40' />
          </div>
          <div className='sm:h-40 w-full sm:w-auto flex flex-col gap-0 sm:gap-3 justify-center items-start ml-7 pb-2 sm:pb-0 sm:ml-5'>
            <h1 className='text-lg sm:text-2xl text-blue-800 font-bold'>Bachelor of Engineering in Information Technology</h1>
            <p className=' font-medium'>Malla Reddy University | MRU</p>
            <h1 className='text-md sm:text-xl text-green-600 font-semibold'>2021-2025 | Pursuing </h1>
          </div>
        </div>

        <div className=' w-10/12 rounded-md sm:w-3/4 h-auto sm:inline-flex flex flex-col sm:flex-row shadow-lg shadow-gray-800 sm:h-40 bg-slate-100'>
          <div className='w-full sm:w-auto flex justify-center'>
          <img src="https://content.jdmagicbox.com/comp/hyderabad/s5/040pxx40.xx40.190309165002.y7s5/catalogue/narayana-junior-college-suchitra-junction-hyderabad-junior-colleges-4egn26908m.jpg?clr="
            alt="MRU" className='py-1 sm:py-0 w-4/5 rounded-sm sm:rounded-none h-28 sm:w-72 sm:h-40' />
          </div>
          <div className='sm:h-40 w-full sm:w-auto flex flex-col gap-0 sm:gap-3 justify-center items-start ml-7 pb-2 sm:pb-0 sm:ml-5'>
            <h1 className='text-lg sm:text-2xl text-blue-800 font-bold'>Telangana State Board of Intermediate Education</h1>
            <p className=' font-medium'>Narayana Junior College | MRU</p>
            <h1 className='text-md sm:text-xl text-green-600 font-semibold'>2019-2021 | Completed </h1>
          </div>
        </div>

        <div className=' w-10/12 rounded-md sm:w-3/4 h-auto sm:inline-flex flex flex-col sm:flex-row shadow-lg shadow-gray-800 sm:h-40 bg-slate-100'>
          <div className='w-full sm:w-auto flex justify-center'>
          <img src="https://lh3.googleusercontent.com/p/AF1QipP_vaKYK-dyvyk9YZrnwqJW12TaMUhuOaFw58OF=s680-w680-h510"
            alt="MRU" className='py-1 sm:py-0 w-4/5 rounded-sm sm:rounded-none h-28 sm:w-72 sm:h-40' />
          </div>
          <div className='sm:h-40 w-full sm:w-auto flex flex-col gap-0 sm:gap-3 justify-center items-start ml-7 pb-2 sm:pb-0 sm:ml-5'>
            <h1 className='text-lg sm:text-2xl text-blue-800 font-bold'>Board of secondary education, Telangana</h1>
            <p className=' font-medium'>Narayana High College | MRU</p>
            <h1 className='text-md sm:text-xl text-green-600 font-semibold'>2019 | Completed</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

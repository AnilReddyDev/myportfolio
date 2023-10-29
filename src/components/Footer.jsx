import React from 'react'
import '../common.css'
import { Link, scroller } from 'react-scroll';
export default function Footer() {
    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0.3,
            smooth: 'easeInOutQuart',
        });
    };
    return (
        <div className='w-full h-80 flex justify-center items-center  bg-slate-50'>
            <div className="mainCon w-4/5 h-80 ">
                <div className="top w-full flex h-4/5 flex-wrap ">
                    <div className=' w-width30per font-poppins flex flex-col justify-evenly text-black h-full '>
                        <h1 className='text-2xl font-medium'>Anil's Portfolio</h1>
                        <p className='font-medium text-black'>
                            Thanks for exploring my personal portfolio website. Let's stay connected through social media platforms.
                        </p>
                        <p className='font-medium text-black'>
                            Soar to new heights 🚀. Feel free to reach out to me via live chat!
                        </p>
                    </div>
                    <div className=' w-width30per font-poppins pl-10 pt-7 flex flex-col gap-1 h-full '>
                        <h1 className='text-2xl mb-1 font-medium'>Quick Links</h1>
                        <span>
                            <Link
                                activeClass="active"
                                to="home-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => scrollTo('home-section')}
                                className='flex cursor-pointer text-lg text-medium items-center gap-2 hover:text-orange-600'
                            >
                                Home
                            </Link>
                        </span>
                        <span>
                            <Link
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => scrollTo('about-section')}
                                className='flex cursor-pointer text-lg text-medium items-center gap-2 hover:text-orange-600'
                            >
                                About
                            </Link>
                        </span>
                        <span>
                            <Link
                                activeClass="active"
                                to="skills-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => scrollTo('skills-section')}
                                className='flex cursor-pointer text-lg text-medium items-center gap-2 hover:text-orange-600'
                            >
                                Skills
                            </Link>
                        </span>
                        <span>
                            <Link
                                activeClass="active"
                                to="education-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => scrollTo('education-section')}
                                className='flex cursor-pointer text-lg text-medium items-center gap-2 hover:text-orange-600'
                            >
                                Education
                            </Link>
                        </span>
                        <span>
                            <Link
                                activeClass="active"
                                to="work-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => scrollTo('work-section')}
                                className='flex cursor-pointer text-lg text-medium items-center gap-2 hover:text-orange-600'
                            >
                                Work
                            </Link>
                        </span>
                    </div>
                    <div className=' w-width30per font-poppins pl-5 pt-7 flex flex-col gap-3 h-full '>
                        <h1 className='text-2xl mb-1 font-medium'>Contact Info</h1>
                        < div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 rotate-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p>+91 X-XXX-1358</p>
                        </div>
                        < div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p>konyalaanilreddy00@gmail.com</p>
                        </div>
                        < div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <p>hyderabad, India - 500100</p>
                        </div>
                    </div>
                </div>
                <hr className='bg-black h-1' />
                <div className="bottom w-full flex justify-center items-center h-1/5 ">
                    <h1 className='text-black flex font-medium font-poppins'>Designed With <div id='heartBeat'>❤️</div> By <span><a href="https://www.linkedin.com/in/anil-reddy-513866227" target='_blank' className='ml-1 text-blue-900 underline'>Anil Reddy.</a></span></h1>
                </div>
            </div>
        </div>
    )
}

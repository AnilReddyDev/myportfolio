import React from 'react'
import img2 from '../assets/anilimg2.jpg'
import ProjectCard from './ProjectCard'
export default function Work() {
  const projectsContent = [
    {
      Title: "Mruspace.in React",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/mruspaceImg.jpeg?raw=true",
      desc: "Mruspace: BTech Learning Resources for Malla Reddy University Students, Built with Reactjs and TailwindCSS.",
      viewCodeLink: "https://github.com/anilreddydev/mruspace",
      viewliveWebsite: "https://mruspace.in"
    },
    {
      Title: "Todo Saver",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/TodoSaver.png?raw=true",
      desc: "TodoListSaver: The Ultimate Todo List Management Website, Harnessing the Power of Reactjs for a Seamless Experience.",
      viewCodeLink: "https://github.com/AnilReddyDev/TodoList-React",
      viewliveWebsite: "https://todosaver.netlify.app/"
    },
    {
      Title: "Twitter Frontend Clone",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/TwitterCloneImg.png?raw=true",
      desc: "Twitter Frontend Clone: A Stunning Replica Crafted with HTML, CSS, and JavaScript.",
      viewCodeLink: "https://github.com/AnilReddyDev/twitter_clone_2023",
      viewliveWebsite: "https://anilreddydev.github.io/twitter_clone_2023/",
    },
    {
      Title: "Contact Managemnet API",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/githubImg.png?raw=true",
      desc: "Contact Management Api Safely Save and Organize Your Contacts, built with Node.js, MongoDB, and Express.",
      viewCodeLink: "https://github.com/AnilReddyDev/ContactManagement_API",
      viewliveWebsite: "https://github.com/AnilReddyDev/ContactManagement_API"
    },
    {
      Title: "Expenses Splitter",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/Sharethebill.png?raw=true",
      desc: "Expense Splitter: Effortlessly Manage and Split Expenses, crafted with Reactjs and TailwindCSS",
      viewCodeLink: "https://github.com/AnilReddyDev/BillSplittingWebsite",
      viewliveWebsite: "https://sharethebill.netlify.app/"
    },
    {
      Title: "Chrome Extension",
      img: "https://github.com/CatsOnTree/PortfolioImgs/blob/main/ChromeExtensionImg.png?raw=true",
      desc: "QuickLinks: Your Handy Chrome Extension to Save and Visit Favorite Websites with a Click. Built with HTML, CSS, and JavaScript",
      viewCodeLink: "https://github.com/AnilReddyDev/ChromeExtension",
      viewliveWebsite: "https://github.com/AnilReddyDev/ChromeExtension"
    },
  ]
  return (
    <div className='w-full font-poppins pt-navb h-screen  bg-violet-700'>
      <div className='w-full mt-7 mb-10 flex justify-center items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
        <h1 className='text-4xl font-bold text-white text-center'>My <span className='text-yellow-400'>Projects</span></h1>
      </div>
      <div className='w-full h-auto gap-7 flex flex-wrap justify-center items-center '>
        {projectsContent.map((project) => {
          return <ProjectCard project={project} key={project.Title} />
        })}
      </div>
      <div className='w-full text-center mt-6 mb-2 '>
        <a href="https://github.com/AnilReddyDev"  className='px-5 py-3 border-4 hover:text-black hover:bg-slate-50 rounded-sm hover:gap-2 gap-1 inline-flex border-slate-50 text-white  font-bold'>View More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

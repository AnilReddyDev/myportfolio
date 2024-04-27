import React from 'react'

export default function SkillCards() {
    const skillsinfo = [
        {
            prgmName:"React",
            imgLink:"https://skillicons.dev/icons?i=react"
        },
        {
            prgmName:"Expressjs",
            imgLink:"https://skillicons.dev/icons?i=expressjs"
        },
        {
            prgmName:"Nodejs",
            imgLink:"https://skillicons.dev/icons?i=nodejs"
        },
        {
            prgmName:"mongoDB",
            imgLink:"https://skillicons.dev/icons?i=mongodb"
        },
        {
            prgmName:"Javascript",
            imgLink:"https://skillicons.dev/icons?i=javascript"
        },
        {
            prgmName:"Java",
            imgLink:"https://skillicons.dev/icons?i=java"
        },
        {
            prgmName:"Python",
            imgLink:"https://skillicons.dev/icons?i=python"
        },
        {
            prgmName:"HTML5",
            imgLink:"https://skillicons.dev/icons?i=html"
        },
        {
            prgmName:"CSS3",
            imgLink:"https://skillicons.dev/icons?i=css"
        },
        {
            prgmName:"Tailwindcss",
            imgLink:"https://skillicons.dev/icons?i=tailwindcss"
        },
        {
            prgmName:"Git bash",
            imgLink:"https://skillicons.dev/icons?i=git"
        },
        {
            prgmName:"Github",
            imgLink:"https://skillicons.dev/icons?i=github"
        },
        {
            prgmName:"Netlify",
            imgLink:"https://skillicons.dev/icons?i=netlify"
        },
        {
            prgmName:"Linux",
            imgLink:"https://skillicons.dev/icons?i=linux"
        },
        {
            prgmName:"VSCode",
            imgLink:"https://skillicons.dev/icons?i=vscode"
        },
        
    ]
  return (
    <div className='flex gap-3 w-auto h-full flex-wrap justify-center items-center'>
        {
            skillsinfo.map((skill)=>{
                return <div key={skill.prgmName} className=' w-24 h-auto py-2  sm:w-40 sm:h-36 bg-black rounded-lg flex gap-2 justify-center items-center flex-col'>
                    <img src={skill.imgLink} alt="css" className=' w-16 h-16 opacity-100' />
                    <h1 className='text-md sm:text-xl text-white font-semibold'>{skill.prgmName}</h1>
                    </div>
            })
        }
    </div>
  )
}

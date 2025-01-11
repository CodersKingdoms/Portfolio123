import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-8 md:mb-20'>Projects</h1>
        <div className='flex flex-wrap py-7 px-8 gap-5 md:gap-10 justify-center'>
            <ProjectCard title='Student Result Management' main='Student result management is a website which helped both students and admin to keep record of marks.'/>
            <ProjectCard title='Kawach' main='Using Python, Flask, HTML, CSS anf JS created a AI powered chatbot which have its own frontend and interative interface'/>
            <ProjectCard title='Weather App' main='Using React and OpenWeatherAPI created a weather app which tells weather update from different locations'/>
           
        </div>
    </div>
  )
}

export default Projects
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, description, stacks, siteView, code }) => {
  return (
    <div>
        <div className="flex flex-col p-2 md:mx-8 md:my-0 my-8 ml-12 md:ml-0" style={{
            width: "17rem",
            borderRadius: "10px",
            boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.5)"
            }}>
            <div className="project__image">
                <img src={image} alt="home" />
            </div>
            <div className="project__title text-center border-b-4 border-white">
                <h2 className="font-bold text-2xl">{title}</h2>
            </div>
            <div className="project__description">
                <p className="text-lg">
                {description}
                </p>
            </div>
            <div className="portfolio__stack">
                <p className="font-semibold text-center">Stack</p>
                <div className="flex justify-around">
                {
                    stacks.map((stack) => (
                        <p className="">{stack}</p>
                    ))
                }
                </div>
            </div>
            <div className="project__links">
                <div className="flex justify-around my-4">
                <button className='px-4 border-2 border-white rounded-lg bg-yellow-500'>
                    <Link to={code} >Codes</Link>
                </button>
                <button className='px-4 border-2 border-white rounded-lg bg-yellow-500'>
                    <Link to={siteView} >Visit Site</Link>
                </button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ProjectCard
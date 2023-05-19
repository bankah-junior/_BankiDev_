import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubjectBody = ({ subject, body, animeNameSB, link, LinkName }) => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div>
        <div className="intro my-8" data-aos={animeNameSB}>
            <h4 className="md:text-2xl text-xl font-bold border-b-4 border-t-4 inline py-2">{ subject }</h4>
            <p className='mt-4 md:px-8'>{ body }</p>
            <Link to={link} className='underline'>{LinkName}</Link>
        </div>
    </div>
  )
}

export default SubjectBody
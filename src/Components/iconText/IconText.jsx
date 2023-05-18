import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IconText = ({icon, title, brief, animeNameIT}) => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div>
        <div className="flex md:flex-col items-center mx-16 md:mx-0 py-4 md:py-8" data-aos={animeNameIT}>
            <div className='w-100-85 md:w-full flex justify-center items-center'>
                {icon}
            </div>
            <div className="flex flex-col md:items-center ml-8 w-100-40 md:w-full ">
                <h3 className="text-xl font-semibold">{ title }</h3>
                <h4 className="text-ll font-semibold">{ brief }</h4>
            </div>
        </div>
    </div>
  )
}

export default IconText
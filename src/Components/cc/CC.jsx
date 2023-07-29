import React from 'react';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const CC = ({ CCicon, CCtitle, CCname }) => {
  // useEffect(() => {
  //   AOS.init({duration: 2000});
  // }, []);
  return (
    <div>
      <div className="flex flex-col border-4 border-white rounded-lg p-4 m-4">
        <div className="top py-10 flex justify-center items-center">
          <div className="p-2 bg-white rounded-full">
            {CCicon}
          </div>
        </div>
        <div className="title text-center">
          <h4 className="text-xl">_{CCtitle}_</h4>
        </div>
        <div className="name py-6">
          <h2 className="text-2xl font-semib">{CCname}</h2>
        </div>
      </div>
    </div>
  )
}

export default CC
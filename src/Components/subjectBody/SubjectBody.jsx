import React from 'react';

const SubjectBody = ({ subject, body }) => {
  return (
    <div>
        <div className="intro my-8">
            <h4 className="md:text-2xl text-xl font-bold border-b-4 border-t-4 inline py-2">{ subject }</h4>
            <p className='mt-4 md:px-8'>{ body }</p>
        </div>
    </div>
  )
}

export default SubjectBody
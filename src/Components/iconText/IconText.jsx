import React from 'react';

const IconText = ({icon, title, brief, detail}) => {
  return (
    <div>
        <div className="flex md:flex-col items-center mx-16 md:mx-0 py-4 md:py-8">
            <div className='md:mr-0 mr-8'>
                {icon}
            </div>
            <div className="flex flex-col md:items-center ml-8">
                <h3 className="text-xl font-semibold">{ title }</h3>
                <h4 className="text-ll font-semibold">{ brief }</h4>
            </div>
        </div>
    </div>
  )
}

export default IconText
import React from 'react';
import { PageLoader } from '../../../Components';
import { useState, useEffect } from 'react';

const DevHome = () => {
  /*
    The useState and UseEffect has been used to set the height of the parent div to 100vh and overflow to hidden for 2500ms
    whenever the page loads or refreshes in other to hide the other contents so that the PageLoader can only show for 2500ms
    and after that set the height back to 100% and overflow to none
  */
    const [containerHidden, isContainerHidden] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        isContainerHidden(true);
      }, 2500);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div style={{
      overflow : containerHidden ? 'none' : 'hidden',
      height : containerHidden ? '100%' : '100vh'
    }}>
      <PageLoader unique="devIn" />
      <h2 className='font-bold text-6xl text-white'>helloe</h2>
    </div>
  )
}

export default DevHome
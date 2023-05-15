import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PageLoader = ({unique}) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        <div class="devIn-main w-screen h-screen" id={unique} style={{ display : isVisible ? 'none' : 'block' }}></div>
    </div>
  )
}

export default PageLoader
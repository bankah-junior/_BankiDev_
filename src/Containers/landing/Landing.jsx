import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BottomBar, HeaderText, LinkContainer, Links, MainDiv, SubDiv, TopBar } from './landingStyle';

const Landing = () => {

    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const timer2 =  setTimeout(() => {
            setIsVisible2(true);
        }, 1000);
        const timer3 =  setTimeout(() => {
            setIsVisible3(true);
        }, 2000);
        const timer4 =  setTimeout(() => {
            setIsVisible4(true);
        }, 3000);

        return () => {
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        }
    }, []);

  return (
    <div >
        <div className={MainDiv}>
            <div className={SubDiv} style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
                <div className={TopBar} style={{ border: "2px solid #ddd" }} ></div>
                <h2 className={HeaderText} id="intro" style={{ opacity: isVisible2 ? '1' : '0' }}>
                    Welcome to the official website of Bankah Anthony Bekoe. <br className="hidden md:block"/> 
                    Click on a button to view portfolio
                </h2>
                <div className={LinkContainer}>
                    <Link to="/banki" className={Links} id="banki" style={{ opacity: isVisible3 ? '1' : '0' }}>Banki</Link>
                    <Link to="/dev" className={Links} id="dev" style={{ opacity: isVisible4 ? '1' : '0' }}>Dev</Link>
                </div>
                <div className={BottomBar} style={{ border: "2px solid #ddd" }} ></div>
            </div>
        </div>
    </div>
  )
}

export default Landing
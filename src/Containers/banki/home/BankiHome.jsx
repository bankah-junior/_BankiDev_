import React from 'react';
import logo from '../../../assets/MainLogo.jpg';
import AboutImg from '../../../assets/Banki/bankiAbout.jpg';
import BlogImg from '../../../assets/Banki/bankiTradeBlog.jpg';
import AdviceImg from '../../../assets/Banki/bankiAdvice.jpg';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiMoneyStack } from 'react-icons/gi';
import { MdAccessibility, MdFamilyRestroom } from 'react-icons/md';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FcBusinessman, FcBusinesswoman, FcFlowChart, FcManager } from 'react-icons/fc';
import { AboutDB, ForexReasons } from './index';
import { CC, IconText, PageLoader, SubjectBody } from '../../../Components';
import { useState, useEffect } from 'react';

const BankiHome = () => {
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
      <PageLoader unique="bankiIn" />
      <div className="banki__Conatiner text-white">
        {/* Navigation and Header section */}
        <div className="nav-header pb-8">
          <div className="top-menu flex justify-end pt-4 md:pb-2 pb-4 px-8 md:px-24 border-b-2 border-white">
            <button className='md:w-24 w-16 border-2 border-white  mr-4'>Login</button>
            <button className='md:w-24 w-16 bg-blue-600  mr-4'>Sign Up</button>
            <select name="language" id="language" className='bg-black'>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <nav className='px-8 md:px-24 flex md:flex-row flex-col md:justify-between items-center my-2'>
            <div className="logo md:mt-0 mt-4">
              <img src={logo} alt="logo" className="w-20" />
            </div>
            <ul className="menu flex md:mt-0 mt-4">
              <li className='md:w-24 w-16 mr-2'>Home</li>
              <li className='md:w-24 w-16 mr-2'>About</li>
              <li className='md:w-24 w-16 mr-2'>Blog</li>
              <li className='md:w-24 w-16'>Contact</li>
            </ul>
          </nav>
          <div className="header px-8 md:px-24 py-16 mb-8" id='home'>
            <h2 className='font-bold md:text-4xl text-2xl'>BANKAH ANTHONY BEKOE</h2>            
            <h3 className='font-bold md:text-2xl text-xl'>AS FOREX TRADER <sub className='text-lg'> &lt;$&gt;Banki&lt;&euro;&gt; </sub> </h3>
            <p className='md:w-100-50 w-full'>
              As a trader, my mission is to empower individuals with the knowledge and skills they need to succeed in their finances.
              Helping individuals to be financial stable is part of the goal and to train them through education and mentorship. 
              I believe in a disciplined and patient approach in my dealings. 
              <cite> "Others motivation can have impact on you only when you have self motivation"</cite>
            </p>
          </div>
        </div>
        {/* End of Navigation and Header section */}

        {/* About Section */}
        <div className="about-section px-8 md:px-24 py-8" id='about'>
          <h3 className='font-bold md:text-4xl text-2xl text-center mb-4'>Know Banki</h3>
          <div className="flex flex-row-reverse">
            <div className="w-100-70 hidden md:flex">
              <img src={AboutImg} alt="Me" className='w-full' />
            </div>
            <div className='md:w-100-30'>
              <SubjectBody subject={ AboutDB.intro.subject } body={ AboutDB.intro.body } />
              <SubjectBody subject={ AboutDB.background.subject } body={ AboutDB.background.body } />
              <SubjectBody subject={ AboutDB.tradingPhilosophy.subject } body={ AboutDB.tradingPhilosophy.body } />
              <SubjectBody subject={ AboutDB.dev.subject } body={ AboutDB.dev.body } />
            </div>
          </div>
        </div>
        {/* End of About Section */}

        {/* Why Trade Forex */}
        <div className="why-forex-section px-8 py-8 reddish-bg">
          <h3 className='font-bold md:text-4xl text-2xl text-center mb-4'>Why Trade Forex</h3>
          <div className="reasons flex md:flex-row flex-col justify-between">
            <IconText icon={<FcFlowChart size="40" />} title={ ForexReasons.one.main } brief={ ForexReasons.one.meaning } />
            <IconText icon={<MdAccessibility size="40" />} title={ ForexReasons.two.main } brief={ ForexReasons.two.meaning } />
            <IconText icon={<GiMoneyStack size="40" />} title={ ForexReasons.three.main } brief={ ForexReasons.three.meaning } />
            <IconText icon={<Ri24HoursFill size="40" />} title={ ForexReasons.four.main } brief={ ForexReasons.four.meaning } />
          </div>
        </div>
        {/* End of Why Trade Forex */}

        {/* Blog */}
        <div className="blog-section px-8 md:px-24 py-8" id='blog'>
          <h3 className='font-bold md:text-4xl text-2xl text-center mb-4'>What is Forex?</h3>
          <div className="blog-container w-full flex flex-col md:flex-row">
            <div className="blog-img">
              <img src={BlogImg} alt="Trader" />
            </div>
            <div className="blog-info p-4">
              <p><b>Forex</b> is simply FOREIGN EXCHANGE and its abbreviation is <acronym title="Forex">FX</acronym>. In FX, you can trade:</p>
              <ol>
                <li className='my-2'>1) <u>Currencies</u>: EURO, USD, NZD, AUD, CHF, GBP, JPY. They are mostly traded in pairs like: EUR/USD, GBP/USD, USD/JPY, USD/CAD, USD/CHF, NZD/USD, AUD/NZD and more</li>
                <li className='my-2'>2) <u>Stocks</u>: Core( Trading with companies of a country like Apple, Coca-cola etc... ) and Index( Trading with group of companies of a country like US30, JPN225, Ger30 etc... )</li>
                <li className='my-2'>3) <u>Synthetics</u>: This is a market controlled by someone, a broker. Example: Boom 500</li>
                <li className='my-2'>4) <u>Commodities</u>: Trading natural resources like Gold, Silver, Gas etc...</li>
              </ol>
              <button className='border-2 border-white px-2 rounded-lg mt-4' disabled >Learn Forex Now</button>
            </div>
          </div>
        </div>
        {/* End of Blog */}

        {/* Credits */}
        <div className="credits px-8 md:px-24 py-8">
          <h3 className='font-bold md:text-4xl text-2xl mb-4'>Credits</h3>
          <div className='flex flex-wrap md:justify-between justify-center items-center w-full'>
            <CC CCicon={<FcManager size="35" color='#000'/>} CCtitle={"Uncle"} CCname={"Kingsley Gyebi"} />
            <CC CCicon={<MdFamilyRestroom size="35" color='#000'/>} CCtitle={"Family"} CCname={"Mum Dad Sister"} />
            <CC CCicon={<FcBusinesswoman size="35" color='#000'/>} CCtitle={"Helper"} CCname={"Olivia Dosimey"} />
            <CC CCicon={<FcBusinessman size="35" color='#000'/>} CCtitle={"Competitor"} CCname={"Boakye Samuel"} />
          </div>
        </div>
        {/* End of Credits */}

        {/* My Advice */}
        <div className="advice-section px-8 md:px-24 py-8">
          <h3 className='font-bold md:text-4xl text-2xl text-center mb-4'>Top Level Tips</h3>
          <div className="advice-container w-full flex flex-col md:flex-row">
            <div className="advice-img">
              <img src={AdviceImg} alt="Trader" />
            </div>
            <div className="advice-info p-4">
              <p>Forex trading is not a day/night something to do. You need to build yourself very well. Here are some top tips to sustain you:</p>
              <ol>
                <li className='my-2'>1) <u>Patient</u>: This is essential when it comes to trading. These are some reasons: Waiting for Opportunities, Allowing Trades to Develop, Dealing with Drawdowns and Sticking to the Plan.</li>
                <li className='my-2'>2) <u>Goal Setting</u>: Goal setting is important. Know the amount you are willing to lose for that trade and also set the amount you want to win.</li>
                <li className='my-2'>3) <u>Risk Management</u>: How do you manage risk in your trading? You can manage your trade effectively by setting stop loss and take profit before opening a trade.</li>
                <li className='my-2'>4) <u>Time Managemet</u>: You can create a daily or weekly that outlines your activities. These strategies will help: Creating a Schedule, Prioritizing Tasks, Limiting distractions and Taking Breaks.</li>
                <li className='my-2'>5) <u>Emotional Training</u>: Put emotions aside and embrace the result. Take it and move on.</li>
              </ol>
              <button className='border-2 border-white px-2 rounded-lg mt-4' disabled >Trade with Banki</button>
            </div>
          </div>
        </div>
        {/* End of My Advice */}

        {/* Contact */}
        <div className="contact-section px-8 md:px-24 py-8 reddish-bg">
          <div className="text-white text-center">
            <p>+233 262 991 910</p>
            <p>antqueenbankah95@gmail.com</p>
          </div>
          <div className="social flex justify-around mt-4">
            <AiFillGithub size={30} />
            <AiFillLinkedin size={30} />
            <AiFillInstagram size={30} />
            <AiFillTwitterCircle size={30} />
          </div>
        </div>
        {/* End of Contact */}

        {/* Footer */}
        <div className="footer-section px-8 md:px-24 py-8 text-center">
          <div className="flex flex-col">
            <span>Copyright &copy; 2023</span>
            <span>BankiDev&reg;</span>
          </div>
        </div>
        {/* End of Footer */}

      </div>
    </div>
  )
}

export default BankiHome
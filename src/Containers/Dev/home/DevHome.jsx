import React from 'react';
import { PageLoader } from '../../../Components';
import homeImage from '../../../assets/Dev/developer.gif';
import aboutImage from '../../../assets/Dev/devAbout.jpg';
import techImage from '../../../assets/Dev/devTechnologies.jpg';
import contactImage from '../../../assets/Dev/devContact.jpg';
import { useState, useEffect } from 'react';
import { SiKingstontechnology, SiCodenewbie, SiJavascript, SiTailwindcss, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { GrProjects, GrTechnology, GrContactInfo } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { FaHome, FaReact, FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaGitAlt, FaFigma } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './devHome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PreviousNextMethods from '../../../Components/carousel/CarouselContainer';

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
      AOS.init({duration: 2000});
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div style={{
      overflow : containerHidden ? 'none' : 'hidden',
      height : containerHidden ? '100%' : '100vh'
    }}>
      <PageLoader unique="devIn" />
      <div className="dev__container flex">
        {/* Navbar */}
        <div className="dev__container__navbar w-20 fixed h-screen flex justify-center items-center">
          <div className="flex flex-col bg-yellow-600 rounded-lg ">
            <a href="#home" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="HOME"> <FaHome size={30} /> </span>
            </a>
            <a href="#about" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="ABOUT"> <SiKingstontechnology size={30} /> </span>
            </a>
            <a href="#projects" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="PROJECTS"> <GrProjects size={30} /> </span>
            </a>
            <a href="#technologies" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="TECHNOLOGY"> <GrTechnology size={30} /> </span>
            </a>
            <a href="#skills" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="SKILLS"> <GiSkills size={30} /> </span>
            </a>
            <a href="#contact" className="menus bg-white p-2 m-2 rounded-lg">
              <span className="menu-icon" title="CONTACT"> <GrContactInfo size={30} /> </span>
            </a>
          </div>
        </div>
        {/* End of Navbar */}

        <div className="other__sections w-full h-full md:h-screen md:overflow-hidden">
          {/* Home Page */}
          <div className="dev__container__home w-full h-full flex flex-col-reverse md:flex-row" id="home">
            <div className="dev__container__left w-full md:w-100-40 flex flex-col justify-center md:ml-16 ml-12">
              <div className="md:p-8 py-16 md:py-8 px-12">
                <h2 className='head__container'>
                  <span className='sub-head text-3xl md:text-5xl font-bold'>Hello, This is</span> <br />
                  <span className='text-4xl md:text-6xl font-bold text-white'>Bankah Anthony</span> <br />
                  <span className='sub-head2 text-2xl md:text-4xl font-bold'>A Developer</span>
                </h2>
                <p className='md:w-100-30 text-white text-xl mt-8'>
                  Enthusiastic computer lover with a computer science background and a love for coding, problem-solving, creative and 
                  collaborative team player. I'm always at your service to get the work done neatly, effectively and of desire.
                  Click the button to contact me.
                </p>
                <button className="px-8 py-4 border-4 border-white text-white mt-12">
                  <a href="#contact">Hire Me</a>
                </button>
              </div>
            </div>
            <div className="dev__container__right w-full md:w-100-60 bg-white flex justify-center items-center">
              <div className="py-8">
                <img src={homeImage} alt="Developer" />
              </div>
            </div>
          </div>
          {/* End of Home Page */}

          {/* About Page */}
          <div className="dev__container__about w-full h-full flex flex-col md:flex-row" id="about">
            <div className="dev__container__about-left w-full md:w-100-50 flex items-center justify-center bg-black">
              <img src={aboutImage} alt="profile" />
            </div>
            <div className="dev__container__about-right md:w-100-50 flex flex-col justify-center ml-12">
              <div className="flex flex-col text-right items-end text-white px-6">
                <h2 className='text-4xl md:text-6xl font-bold'>ABOUT ME</h2>
                <p className='text-lg mt-8 pl-2 md:pl-0'>
                  I am Bankah Anthony Bekoe. I am 20 years of age. I'm from Cape Coast but stays at Tarkwa in the Western part of Ghana. 
                  I am a student of University of Mines and Technology (UMaT) which is located in the Western part of Ghana, Takoradi - Essikado. 
                  I am reading Computer Science and Engineering and I'm in my second year. This programme has really exposed me to so many things 
                  and has expanded how I see technology. 2022 was when I started coding and the first programming language I took of with is C++. 
                  It wasn't easy but with Hardworking, being Consistent and Determination I got it well. It has given me a great start making 
                  learning of other programming languages easy.
                </p>
              </div>
            </div>
          </div>
          {/* End of About Page */}

          {/* Project Page */}
          <div className="main w-full md:w-screen h-full md:h-screen md:overflow-hidden my-8 md:my-0" id="projects">
            <div className="flex">
              <div className="w-20 h-full"></div>
              <div className="w-full h-full px-8 py-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">PROJECTS <sub className="text-lg md:hidden">swipe</sub> </h2>
                <div>
                  <div className="w-full flex justify-center items-center">
                    <div className="slideshow-container text-white text-xl">
                      <PreviousNextMethods />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Project Page */}

          {/* Technologies Page */}
          <div className="dev__container__technologies w-full h-full flex flex-col-reverse md:flex-row" id="technologies">
            <div className="dev__container__technologies-left w-full md:w-100-40 flex flex-col justify-center md:ml-16 ml-12">
              <div className="md:p-8 py-16 md:py-8 px-12">
                <h2 className='text-4xl md:text-6xl font-bold text-white'>TECHNOLOGIES</h2>
                <p className="text-lg text-white w-100-30">I've worked with range of Technologies in the web development world. From Back-end To Design</p>
                <div className="tech__contents w-full flex justify-between mt-12">
                  <div className="front__end flex flex-col text-white w-100-70">
                    <FaReact size={20} />
                    <h2 className="font-bold text-xl md:text-2xl">Front-End</h2>
                    <p>
                      Experience with <br /> React.js
                    </p>
                  </div>
                  <div className="back__end flex flex-col text-white w-100-70">
                    <BsDatabaseFillCheck size={20} />
                    <h2 className="font-bold text-xl md:text-2xl">Back-End</h2>
                    <p>
                      Experience with <br /> Node.js and Databases
                    </p>
                  </div>
                  <div className="front__end flex flex-col text-white w-100-70">
                    <SiCodenewbie size={20} />
                    <h2 className="font-bold text-xl md:text-2xl">UI/UX</h2>
                    <p>
                      Experience with <br /> Figma and Adobe Photoshop
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dev__container__technologies-right w-full md:w-100-60 bg-black flex justify-center items-center">
              <div className="py-8">
                <img src={techImage} alt="Developer" />
              </div>
            </div>
          </div>
          {/* End of Technologies Page */}

          {/* Skills Page */}
          <div className="dev__container__skills w-full h-full" id="skills">
            <div className="dev__container__skills-left w-full text-white px-20 h-full flex flex-col md:flex-row items-center py-8">
              <div className="flex items-center md:ml-8">
                <h2 className="text-4xl font-bold mr-2">SKILLS</h2>
                <GiSkills size={30} />
              </div>
              <div className="skills__content ml-8">
                <ul className="flex">
                  <div className="skills flex flex-col mr-8 md:mr-0">
                    <li className="flex items-center my-8 md:mx-8">
                      <FaHtml5 size={30} />
                      <p className="text-xl md:text-2xl font-semibold">HTML</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaCss3Alt Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">CSS</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <SiJavascript Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">JavaScript</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaReact Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">React.js</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <SiTailwindcss Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">TailwindCSS</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <SiNodedotjs Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">Node.js</p>
                    </li>
                  </div>
                  <div className="skills2 flex flex-col">
                    <li className="flex items-center my-8 md:mx-8">
                      <SiMongodb Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">MongoDB</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaGitAlt Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">Git</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaFigma Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">Figma</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaJava Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">Java</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <FaBootstrap Size={30} />
                      <p className="text-xl md:text-2xl font-semibold">Bootstrap</p>
                    </li>
                    <li className="flex items-center my-8 md:mx-8">
                      <p className="text-xl md:text-2xl font-semibold">C++</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* End of Skills Page */}

          {/* Contact Page */}
          <div className="dev__container__contact w-full h-full flex flex-col-reverse md:flex-row" id="contact">
            <div className="dev__container__contact-left w-full md:w-100-60 flex flex-col justify-center md:ml-16 ml-12">
              <div className="md:p-8 py-4 md:py-8 px-12 text-left">
                <h2 className='text-4xl md:text-6xl font-bold text-white'>CONTACT ME</h2>
                <p className="text-lg text-white">Contact <i>BANKAH ANTHONY</i> for your works. </p>
              </div>
              <div className="tech__contents w-full flex md:justify-between justify-start text-white px-12">
                <div className="contact-section text-left">
                  <div className="text-white flex flex-col">
                    <p><a href="tel:+233262991910" className='flex'> <BiPhoneCall size={20} /> <span className='ml-2'>+233 262 991 910</span></a></p>
                    <p><a href="mailto:antqueenbankah95@gmail.com" className='flex'> <MdEmail size={20} /> <span className='ml-2'>antqueenbankah95@gmail.com</span></a></p>
                    <p>For all your trading, check this link out: <Link to="/banki" className="underline">@banki</Link></p>
                  </div>
                  <div className="social flex justify-around mt-4 text-left">
                    <a href="https://github.com/bankah-junior" title='Gitbub'> <AiFillGithub size={30} /> </a>
                    <a href="https://www.linkedin.com/in/anthony-bekoe-bankah-080448240" title='LinkedIn'> <AiFillLinkedin size={30} /> </a>
                    <a href="https://instagram.com/iam.bankah?igshid=ZGUzMzM3NWJiOQ==" title='Instagram'> <AiFillInstagram size={30} /> </a>
                    <a href="https://twitter.com/iam_bankah?t=UFouGnCo6AL1bxU_MMVRg&s=09" title='Twitter'> <AiFillTwitterCircle size={30} /> </a>
                    <a href="https://www.youtube.com/@welearn2" title='YouTube'> <AiFillYoutube size={30} /> </a>
                  </div>
                </div>
              </div>
              <div className="footer-section py-8 text-white text-lg px-12">
                <div className="flex flex-col">
                  <span>Copyright &copy; 2023</span>
                  <span>BankiDev&reg;</span>
                </div>
              </div>
            </div>
            <div className="dev__container__contact-right w-full md:w-100-40 bg-black flex justify-end items-center">
              <div className="py-8">
                <img src={contactImage} alt="Developer" />
              </div>
            </div>
          </div>
          {/* End of Contact Page */}

        </div>

      </div>
    </div>
  )
}

export default DevHome
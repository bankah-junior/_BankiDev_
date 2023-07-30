import React, { Component } from "react"; 
import Slider from "react-slick"; 
import MM from '../../assets/Projects/MindMeld.PNG';
import MR from '../../assets/Projects/MyRecipe.PNG';
import DOW from '../../assets/Projects/DropOfWisdom.PNG';
import CTB from '../../assets/Projects/ConnectToBuyers.PNG';
import TG from '../../assets/Projects/TheGuide.png';
import CHTS from '../../assets/Projects/Chatters.PNG';
import CIG from '../../assets/Projects/ClonedIG.png';
import Sks from '../../assets/Projects/Sneakers.png';
import AL from '../../assets/Projects/AnimatedLogin.png';
import { MindMeldDB, MyRecipeDB, DropOfWisdomDB, ConnectToBuyersDB, TheGuide, ChattersDB, ClonedIG, Sneakers,AnimatedLogin } from '../../constants/constants';

export default class PreviousNextMethods extends Component { 
    constructor(props) { 
        super(props); this.next = this.next.bind(this); this.previous = this.previous.bind(this); 
    } 
    next() { 
        this.slider.slickNext(); 
    } 
    previous() { 
        this.slider.slickPrev(); 
    } 
    render() { 
        const settings = { 
            dots: true, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 1, 
            slidesToScroll: 1 
        }; 
        return (
            <div className="ml-12 md:ml-0 w-100-10" style={{
                bordeRadius: "10px",
                boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.5)"
            }}>
                <Slider ref={c => (this.slider = c)} {...settings}> 
                    <div key={1}> 
                        <div className="flex flex-col w-full">
                            <img src={MM} alt="MM" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {MindMeldDB.title} </h3>
                            <p className="px-2"> { MindMeldDB.description } </p>
                            <p className="px-2"> { MindMeldDB.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={MindMeldDB.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={2}> 
                        <div className="flex flex-col w-full">
                            <img src={MR} alt="MR" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {MyRecipeDB.title} </h3>
                            <p className="px-2"> { MyRecipeDB.description } </p>
                            <p className="px-2"> { MyRecipeDB.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg mr-4 w-full" disabled>
                                    Not Deployed
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={3}> 
                        <div className="flex flex-col w-full">
                            <img src={DOW} alt="DOW" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {DropOfWisdomDB.title} </h3>
                            <p className="px-2"> { DropOfWisdomDB.description } </p>
                            <p className="px-2"> { DropOfWisdomDB.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg mr-4 w-full" disabled>
                                    Not Deployed
                                </button>
                            </div>
                        </div> 
                    </div> 
                    <div key={4}> 
                        <div className="flex flex-col w-full">
                            <img src={CTB} alt="CTB" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {ConnectToBuyersDB.title} </h3>
                            <p className="px-2"> { ConnectToBuyersDB.description } </p>
                            <p className="px-2"> { ConnectToBuyersDB.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={ConnectToBuyersDB.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={5}> 
                        <div className="flex flex-col w-full">
                            <img src={TG} alt="TG" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {TheGuide.title} </h3>
                            <p className="px-2"> { TheGuide.description } </p>
                            <p className="px-2"> { TheGuide.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={TheGuide.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={6}> 
                        <div className="flex flex-col w-full">
                            <img src={CHTS} alt="CHTS" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {ChattersDB.title} </h3>
                            <p className="px-2"> { ChattersDB.description } </p>
                            <p className="px-2"> { ChattersDB.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={ChattersDB.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div key={7}> 
                        <div className="flex flex-col w-full">
                            <img src={CIG} alt="CIG" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {ClonedIG.title} </h3>
                            <p className="px-2"> { ClonedIG.description } </p>
                            <p className="px-2"> { ClonedIG.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={ClonedIG.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={8}> 
                        <div className="flex flex-col w-full">
                            <img src={Sks} alt="Sks" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {Sneakers.title} </h3>
                            <p className="px-2"> { Sneakers.description } </p>
                            <p className="px-2"> { Sneakers.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={Sneakers.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div key={8}> 
                        <div className="flex flex-col w-full">
                            <img src={AL} alt="AL" />
                            <h3 className="md:text-3xl text-2xl font-bold px-2"> {AnimatedLogin.title} </h3>
                            <p className="px-2"> { AnimatedLogin.description } </p>
                            <p className="px-2"> { AnimatedLogin.tags } </p>
                            <div className="flex mt-2 px-2">
                                <button className="px-8 py-1 border-2 border-white rounded-lg w-full">
                                    <a href={AnimatedLogin.visit}>View Site</a>
                                </button>
                            </div>
                        </div>
                    </div> 
                </Slider> 
                <div style={{ textAlign: "center" }}> 
                    <button className="button" onClick={this.previous}> </button> 
                    <button className="button" onClick={this.next}> </button> 
                </div> 
            </div> 
        ); 
    } 
}
import React, { Component } from "react";
import Slider from "react-slick";
import "./carouselContainer.css";
import MM from "../../assets/Projects/MindMeld.PNG";
import MR from "../../assets/Projects/MyRecipe.PNG";
import DOW from "../../assets/Projects/DropOfWisdom.PNG";
import CTB from "../../assets/Projects/ConnectToBuyers.PNG";
import TG from "../../assets/Projects/TheGuide.png";
import CIG from "../../assets/Projects/ClonedIG.png";
// import Sks from "../../assets/Projects/Sneakers.png";
// import AL from "../../assets/Projects/AnimatedLogin.png";
import BFXC from "../../assets/Projects/bfx-calculator.png";
import PB from "../../assets/Projects/pipsBank.png";
import Cty from "../../assets/Projects/Charity.png";
import G_P from "../../assets/Projects/GP.png";
import CRI from "../../assets/Projects/Careari.png";
import TECH from "../../assets/Projects/Techie.png";
import {
  MindMeldDB,
  MyRecipeDB,
  DropOfWisdomDB,
  ConnectToBuyersDB,
  TheGuide,
  ClonedIG,
  BFX_Calc,
  Pips_Bank,
  Charity,
  GP,
  Careari,
  Techie,
} from "../../constants/constants";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
      slidesToScroll: 1,
    };
    return (
      <div
        className="ml-12 md:ml-0 w-100-10"
        style={{
          bordeRadius: "10px",
          boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.5)",
        }}
      >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <div className="flex flex-col w-full">
              <img src={MM} alt="MM" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {MindMeldDB.title}{" "}
              </h3>
              <p className="px-2"> {MindMeldDB.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {MindMeldDB.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={MindMeldDB.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={2}>
            <div className="flex flex-col w-full">
              <img src={MR} alt="MR" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {MyRecipeDB.title}{" "}
              </h3>
              <p className="px-2"> {MyRecipeDB.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {MyRecipeDB.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <button
                  className="btn px-8 py-1 border-2 border-white rounded-lg mr-4 w-full"
                  disabled
                >
                  Not Deployed
                </button>
              </div>
            </div>
          </div>
          <div key={3}>
            <div className="flex flex-col w-full">
              <img src={CRI} alt="CRI" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {Careari.title}{" "}
              </h3>
              <p className="px-2"> {Careari.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {Careari.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <button
                  className="btn px-8 py-1 border-2 border-white rounded-lg mr-4 w-full"
                  disabled
                >
                  Not Deployed
                </button>
              </div>
            </div>
          </div>
          <div key={4}>
            <div className="flex flex-col w-full">
              <img src={TECH} alt="TECH" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {Techie.title}{" "}
              </h3>
              <p className="px-2"> {Techie.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {Techie.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={Techie.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={5}>
            <div className="flex flex-col w-full">
              <img src={TG} alt="TG" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {TheGuide.title}{" "}
              </h3>
              <p className="px-2"> {TheGuide.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {TheGuide.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={TheGuide.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={6}>
            <div className="flex flex-col w-full">
              <img src={CIG} alt="CIG" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {ClonedIG.title}{" "}
              </h3>
              <p className="px-2"> {ClonedIG.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {ClonedIG.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={ClonedIG.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={7}>
            <div className="flex flex-col w-full">
              <img src={Cty} alt="Sks" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {Charity.title}{" "}
              </h3>
              <p className="px-2"> {Charity.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {Charity.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={Charity.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={8}>
            <div className="flex flex-col w-full">
              <img src={G_P} alt="G_P" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {GP.title}{" "}
              </h3>
              <p className="px-2"> {GP.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {GP.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={GP.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={9}>
            <div className="flex flex-col w-full">
              <img src={BFXC} alt="BFXC" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {BFX_Calc.title}{" "}
              </h3>
              <p className="px-2"> {BFX_Calc.description} </p>
              <p className="px-2 m-2 ">
                <span className="mr-2">[</span>
                {BFX_Calc.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={BFX_Calc.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={10}>
            <div className="flex flex-col w-full">
              <img src={PB} alt="PB" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {Pips_Bank.title}{" "}
              </h3>
              <p className="px-2"> {Pips_Bank.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {Pips_Bank.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={Pips_Bank.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div key={11}>
            <div className="flex flex-col w-full">
              <img src={DOW} alt="DOW" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {DropOfWisdomDB.title}{" "}
              </h3>
              <p className="px-2"> {DropOfWisdomDB.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {DropOfWisdomDB.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <button
                  className="btn px-8 py-1 border-2 border-white rounded-lg mr-4 w-full"
                  disabled
                >
                  Not Deployed
                </button>
              </div>
            </div>
          </div>
          <div key={12}>
            <div className="flex flex-col w-full">
              <img src={CTB} alt="CTB" />
              <h3 className="md:text-3xl text-2xl font-bold px-2">
                {" "}
                {ConnectToBuyersDB.title}{" "}
              </h3>
              <p className="px-2"> {ConnectToBuyersDB.description} </p>
              <p className="px-2 m-2">
                <span className="mr-2">[</span>
                {ConnectToBuyersDB.tags}
                <span className="ml-2">]</span>
              </p>
              <div className="flex mt-2 px-2">
                <a href={ConnectToBuyersDB.visit} className="w-full">
                  <button className="btn px-8 py-1 border-2 border-white rounded-lg w-full">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            {" "}
          </button>
          <button className="button" onClick={this.next}>
            {" "}
          </button>
        </div>
      </div>
    );
  }
}

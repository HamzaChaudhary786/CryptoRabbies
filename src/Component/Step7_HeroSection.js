import React from "react";
import { Link } from "react-router-dom";
import gif from "../Assets/gif2.gif";
import bree_rab1 from "../Assets/bree_rab1.jpg";
import bree_rab2 from "../Assets/bree_rab2.png";
import hab from "../Assets/hab.png"

import baby from "../Assets/baby.png";
const Step7_HeroSection = () => {
  return (
    <>
      <div className=" grid justify-items-center items-center h-auto">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center">
            <img
              src={bree_rab1}
              className=" h-28 w-28 md:h-40 md:w-40 rounded-full "
            />
          </div>

          <div className="text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center ">
            Breed
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-auto w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-full md:w-[80%]  text-center rounded p-4 grid justify-items-center items-center  ">
            <h1 className=" mt-2 font-bold text-2xl   ">
              You got a new baby rabby
            </h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>

            <div className="  w-auto md:w-[80%] h-96 bg-white mt-4 rounded-2xl  ">
              <h1 className=" mt-2 font-bold text-2xl   ">Congratulations</h1>
              <div className=" flex mt-6 justify-center">
                <div className=" h- w-16 bg-pink-600 "></div>
                <div className=" h-2 w-16 bg-pink-300"></div>
                <div className=" h-2 w-16 bg-yellow-300"></div>
                <div className=" h-2 w-16 bg-cyan-300"></div>
                <div className=" h-2 w-16 bg-indigo-600"></div>
              </div>

              <div className="imageSlider  w-auto h-auto md:w-auto  grid justify-items-center items-center mt-4">
                <img src={baby} className=" h-48 w-48 " />
              </div>
            </div>
          </div>
          
          <div className="w-[98%] h-auto md:w-[90%]   rounded p-4 text-start  ">
            <img src={bree_rab2} className=" h-auto w-36" />
            <div className=" bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4">
              <p className="ml-4">
                Step 6/6: It's gorgeous! You've discovered a new baby rabby and
                it is a beautiful addition in your rabbies collection which has
                unique attributes. Hit the profile button on the nav bar to
                proceed and watch rabbies collection.
              </p>
            </div>
            <Link to="/habicoll" className=" grid justify-items-end">
            <div
              className="h-26 w-32 rounded-full border border-white 
              flex  items-center bg-gray-900 text-white "
            >
              <span>
                <img src={hab} className="h-12 w-12 rounded-full p-2" />
              </span>
              <span className="p-2">Profile</span>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step7_HeroSection;

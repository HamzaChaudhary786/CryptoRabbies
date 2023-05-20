import React from "react";
import { Link } from "react-router-dom";
import gif from "../Assets/gif2.gif";
import bree_rab1 from "../Assets/bree_rab1.jpg";
import bree_rab2 from "../Assets/bree_rab2.png";
import step2 from "../Assets/step2.gif";

import { useGlobalContext } from "./Context";

const Step2_HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo(500, 380);
  };

  return (
    <>
      <div className=" grid justify-items-center items-center">
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

        <div className=" py-4 bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%]  rounded p-4 grid justify-items-center items-center  ">
            <h1 className=" mt-2 font-bold text-2xl   ">Breeding Rabbies</h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>

            <div className=" grid-cols-3 w-auto md:w-[70%]  grid justify-items-center items-center mt-2">
              <Link to="/step3" onClick={scrollToTop}>
                <div>
                  <h1 className=" font-bold text-lg text-center">Father</h1>
                  <h2 className=" text-white">This Rabby Will Be Father</h2>
                  <div className="bg-white opacity-90 grid p-2 pb-6 justify-center rounded">
                    <div
                      className="bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded"
                      id="pic"
                    >
                      <h1>Select Your Rabby </h1>
                    </div>
                  </div>
                </div>
              </Link>
              <div>
                <img src={step2} className="h-24 w-24" />
              </div>
              <div>
                <h1 className=" font-bold text-lg text-center">Mother</h1>
                <h2 className=" text-white">This Rabby Will Be Mother</h2>

                <div className="bg-white rounded opacity-90 grid p-2 pb-6 justify-center">
                  <div
                    className="bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded"
                    id="pic"
                  >
                    <h1>Select Your Rabby </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[98%] h-auto md:w-[80%] bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 text-center rounded p-4   ">
            <img src={bree_rab2} className=" h-52 w-36" />
            <div className=" bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4">
              <p>
                Step 3/6: Select both of your Rabbies to move on to the breeding
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2_HeroSection;

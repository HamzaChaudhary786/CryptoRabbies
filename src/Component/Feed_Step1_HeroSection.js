import React from "react";
import gif from "../Assets/gif2.gif";
import mes from "../Assets/mes.png";
import cont from "../Assets/contact.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import step3 from "../Assets/Step3.gif";

import { useGlobalContext } from "./Context";
const Feed_Step1_HeroSection = () => {
  const { coll } = useGlobalContext();

  return (
    <>
      <div className=" grid justify-items-center items-center">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center ">
            <img src={cart} className=" h-28 w-28 md:h-40 md:w-40  " />
          </div>

          <div className="text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center ">
            Feeding Rabbies{" "}
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4 bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%]  text-center rounded p-4  ">
            <h1 className=" mt-2 font-bold text-2xl   ">
              Feed your rabbit 10 carrots to grow 1 level{" "}
            </h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>
          </div>

          <div className=" grid-cols-3 w-auto md:w-[70%]  grid justify-items-center items-center mt-2">
            <Link to="/feedstep2">
              <div>
                <h1 className="text-center text-lg font-bold">Rabbit</h1>
                <h2 className=" text-white">Select Hungry Rabbit</h2>
                <div className="bg-white rounded opacity-90 grid p-2 pb-6 justify-center">
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
              <img src={step3} className="h-24 w-24" />
            </div>
            <div>
              <h1 className=" text-center text-lg font-bold">Carrot Shop</h1>
              <h2 className=" text-white">Select The Carrot Feed</h2>

              <div className="bg-white rounded opacity-90 grid p-2 pb-6 justify-center">
                <div
                  className="bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded"
                  id="pic"
                >
                  <h1>Select Your Feed </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed_Step1_HeroSection;

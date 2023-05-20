import React, { useState } from "react";
import { Link } from "react-router-dom";
import gif from "../Assets/gif2.gif";
import Navbar from "./Navbar";
import bree_rab1 from "../Assets/bree_rab1.jpg";
import bree_rab2 from "../Assets/bree_rab2.png";
import step3 from "../Assets/Step3.gif";
import Footer from "./Footer";
import hab from "../Assets/hab.png";
import mes from "../Assets/mes.png";
import cont from "../Assets/contact.png";

import { useGlobalContext } from "./Context";
const Feed_Step2_HeroSection = () => {
  const { coll, feed } = useGlobalContext();

  const DownPage = () => {
    window.scrollTo(500, 2050);
  };

  const TopPage = () => {
    window.scrollTo(500, 380);
  };

  let ClickFunc2 = () => {
    window.scrollTo(500, 400);
  };

  return (
    <>
      <div className=" grid justify-items-center items-center">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center ">
            <img src={hab} className=" h-28 w-28 md:h-40 md:w-40  " />
          </div>

          <div className="text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center ">
            My Profile{" "}
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%]  text-center rounded p-4  ">
            <h1 className=" mt-2 font-bold text-2xl   ">Select Your Rabbit</h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>
            {/* <div className=" grid justify-items-center items-center grid-cols-3 mt-4  ">
              <div className=" ">
                <button className=" h-12 p-2  bg-indigo-600 text-lg text-white rounded shadow-lg shadow-slate-400">
                  My Information
                </button>
              </div>
              <div className=" ">
                <button className=" h-12 p-2  bg-indigo-600 text-lg text-white rounded shadow-lg shadow-slate-400">
                  My Collection
                </button>
              </div>
              <Link to="/breed">
                <div className=" ">
                  <button className=" h-12 p-2 w-32    bg-indigo-600 text-lg text-white rounded shadow-lg shadow-slate-400">
                    Breed
                  </button>
                </div>
              </Link>
            </div> */}
          </div>

          <div className=" mt-4  w-[100%] h-fit grid justify-items-center items-center ">
            <div className="w-[98%] md:w-[80%]  flex items-center gap-2  rounded p-2  ">
              {coll.map((item) => {
                const { id, title, description, poster, price, names, check } =
                  item;

                let ClickFunc = () => {
                  let pic = (document.getElementById(
                    "pic"
                  ).innerHTML = `<img src= \"${poster}\" > `);
                  window.scrollTo(500, 1200);
                };

                return (
                  <>
                    {names.toLowerCase() == "habi" ? (
                      <Link onClick={ClickFunc}>
                        <div>
                          <div className="grid bg-white border-2 h-64 w-52 justify-center  ">
                            <img src={poster} className=" h-44 w-44 rounded" />
                            <div>{id}</div>
                            <div>{title}</div>
                            <div>{description}</div>
                          </div>
                          <div className=" flex rounded-full border-black border-2 p-2 bg-white">
                            <div>
                              <h1>Price</h1>
                              <h1>{price}</h1>
                            </div>
                            <div className="ml-4">
                              <h1>Time </h1>
                              <h1>Snappy 10m</h1>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      console.log(names)
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className=" bg-white grid grid-cols-1 md:grid md:grid-cols-2 transform h-24 md:h-24 w-[80%]   rounded-2xl p-4 -mb-16 mt-4">
            <div className="flex items-center">
              <div className="h-8 w-8 md:h-12 md:w-12 justify-center items-center grid rounded-full bg-slate-300">
                {" "}
                <img src={mes} className=" h-6 w-6 md:h-8 md:w-8 " />
              </div>
              <p className="font-semibold ml-2">cryptorabby@gmail.com</p>
            </div>

            <div className="flex items-center mt-2 md:ml-2 ">
              <div className="h-8 w-8 md:h-12 md:w-12 justify-center items-center grid rounded-full bg-slate-300">
                {" "}
                <img src={cont} className="h-6 w-6 md:h-8 md:w-8 " />
              </div>
              <p className="font-semibold ml-2">(064) 9331816</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feeding Page # 3 Remember */}

      <div className=" grid justify-items-center items-center mt-8">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center">
            <img
              src={bree_rab1}
              className=" h-28 w-28 md:h-40 md:w-40 rounded-full "
            />
          </div>

          <div className="text-lg text-white italic font-semibold md:font-bold md:text-3xl text-center ">
            Breed
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4 bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%] text-center rounded p-4 grid justify-items-center items-center  ">
            <h1 className=" mt-2 font-bold text-2xl   ">Breeding Rabbies</h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>

            <div className=" grid-cols-3 w-auto md:w-[70%]  grid justify-items-center items-center mt-2">
              <div onClick={TopPage}>
                <h1>Rabbit</h1>
                <h2>Select The Hungry Rabbit</h2>
                <div className="bg-white rounded opacity-90 grid p-2 pb-6 justify-center">
                  <div
                    className="bg-gray-900 bg-opacity-30 h-44 w-40 cursor-pointer text-red-600 grid justify-items-center items-center rounded"
                    id="pic"
                  >
                    <h1>Select Your Rabby </h1>
                  </div>
                </div>
              </div>
              <div>
                <img src={step3} className="h-24 w-24" />
              </div>
              <div onClick={DownPage}>
                <h1>Carrot Shop</h1>
                <h2>Select The Carrot</h2>

                <div className="bg-white rounded opacity-90 grid p-2 pb-6 justify-center ">
                  <div
                    className="bg-gray-900 bg-opacity-30 h-44 w-40 cursor-pointer text-red-600 grid justify-items-center items-center rounded"
                    id="pic1"
                  >
                    <h1>Select Your Carrot </h1>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/feedbaby"
              className="mt-6 text-white font-semibold text-lg italic"
            >
              <button className=" border-2 border-white bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-16 w-56  rounded-lg" onClick={ClickFunc2}>
                Feed Now
              </button>
            </Link>
          </div>

          <div className="w-[98%] h-auto md:w-[80%]  text-center rounded p-4   ">
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

      {/* Feeding Page # 3 */}

      <div className=" grid justify-items-center items-center">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center">
            <img
              src={bree_rab1}
              className=" h-28 w-28 md:h-40 md:w-40 rounded-full "
            />
          </div>

          <div
            className="text-lg text-white italic font-semibold md:font-bold md:text-3xl text-center "
            
          >
            Breed
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300  h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%]  text-center rounded p-4  ">
            <h1 className=" mt-2 font-bold text-2xl   ">
              Select Carrot deal of Your Choice
            </h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>
          </div>
          <div className="w-[98%] md:w-[80%]  grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center   rounded p-2 gap-4 ">
            {feed.map((item) => {
              const { title, poster, price } = item;

              let ClickFunc1 = () => {
                let pic = (document.getElementById(
                  "pic1"
                ).innerHTML = `<img src= \"${poster}\" > `);
                window.scrollTo(500, 1100);
              };

              return (
                <>
                  <div
                    className=" hover:scale-105 ease-in-out duration-500 "
                    onClick={ClickFunc1}
                  >
                    <div className="grid  bg-white border-2 h-64 w-52 justify-center rounded  ">
                      <img src={poster} className=" h-44 w-44 rounded" />
                      <div className="grid grid-cols-2 justify-items-end">
                        <div className=" text-center">
                          <div>{title}</div>
                          <div>{price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed_Step2_HeroSection;

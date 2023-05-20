import React from "react";
import gif from "../Assets/gif2.gif";
import mes from "../Assets/mes.png";
import cont from "../Assets/contact.png";
import hab from "../Assets/hab.png";

import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

const Habi_Coll_HeroSection = () => {
  const { coll } = useGlobalContext();
  return (
    <>
      <div>
        <div className=" grid justify-items-center items-center">
          <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
            <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center ">
              <img src={hab} className=" h-28 w-28 md:h-40 md:w-40  " />
            </div>

            <div className="text-lg text-white fo font-semibold md:font-bold md:text-3xl text-center ">
              My Profile{" "}
            </div>

            <div>
              <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
            </div>
          </div>

          <div className=" py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded ">
            <div className="w-[98%] h-auto md:w-[80%]  text-center rounded p-4 bg-white  ">
              <h1 className=" mt-2 font-bold text-2xl   ">Details</h1>
              <div className=" flex mt-6 justify-center">
                <div className=" h- w-16 bg-pink-600 "></div>
                <div className=" h-2 w-16 bg-pink-300"></div>
                <div className=" h-2 w-16 bg-yellow-300"></div>
                <div className=" h-2 w-16 bg-cyan-300"></div>
                <div className=" h-2 w-16 bg-indigo-600"></div>
              </div>
              <div className=" grid justify-items-center items-center  grid-cols-3 mt-4  ">
                <Link to="/habiinfo">
                  <div className=" ">
                    <button className=" h-12  w-36    bg-indigo-600 text-lg text-white rounded-full shadow-lg shadow-slate-400">
                      My Information
                    </button>
                  </div>
                </Link>
                <Link to="/habicoll">
                  <div className=" ">
                    <button className=" h-12 p-2 w-32    bg-indigo-600 text-lg text-white rounded-full shadow-lg shadow-slate-400">
                      My Collection
                    </button>
                  </div>
                </Link>
                <Link to="/breed">
                  <div className=" ">
                    <button className=" h-12 p-2 w-32    bg-indigo-600 text-lg text-white rounded-full shadow-lg shadow-slate-400">
                      Breed
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" mt-4  w-[100%] h-fit grid justify-items-center items-center ">
              <div className="w-[98%] md:w-[80%]  flex items-center gap-2  rounded p-2  ">
                {coll.map((item) => {
                  const { id, title, description, poster, price, names } = item;
                  return (
                    <>
                      {names.toLowerCase() == "habi" ? (
                        <Link to="">
                          <div>
                            <div className="grid bg-white border-2 h-64 w-52 justify-center  ">
                              <img
                                src={poster}
                                className=" h-44 w-44 rounded"
                              />
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
              <div className=" grid grid-cols-2 justify-items-center gap-x-10 mt-4">
                <Link to="/feedstep1">
                  <button className=" bg-indigo-700 text-white h-16 w-48 rounded-full">
                    Feed
                  </button>
                </Link>
                <Link to="/nftsell">
                  <button className=" bg-indigo-700 text-white h-16 w-48 rounded-full">
                    Sell NFT
                  </button>
                </Link>
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
        </div>
      </div>
    </>
  );
};

export default Habi_Coll_HeroSection;

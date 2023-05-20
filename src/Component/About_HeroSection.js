import React from "react";
import gif from "../Assets/gif2.gif";
import rab1 from "../Assets/a_rab1.png";
import mus from "../Assets/mus.png";
import hab from "../Assets/hab.png";
import zee from "../Assets/zee.png";

import mes from "../Assets/mes.png";
import cont from "../Assets/contact.png";
import { Link } from "react-router-dom";

const About_HeroSection = () => {
  return (
    <>
      <div className="grid justify-items-center items-center">
        <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
          <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center ">
            <img src={rab1} className=" h-28 w-28 md:h-40 md:w-40  " />
          </div>

          <div className="text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center ">
            CryptoRabbies Team{" "}
          </div>

          <div>
            <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
          </div>
        </div>

        <div className=" py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <h1 className=" mt-2 font-bold text-2xl   ">About Section</h1>
          <div className=" flex mt-6">
            <div className=" h- w-16 bg-pink-600 "></div>
            <div className=" h-2 w-16 bg-pink-300"></div>
            <div className=" h-2 w-16 bg-yellow-300"></div>
            <div className=" h-2 w-16 bg-cyan-300"></div>
            <div className=" h-2 w-16 bg-indigo-600"></div>
          </div>

          <div className=" mt-6">
            <button className=" h-12 p-2 w-96 bg-indigo-600 text-lg text-white rounded-2xl shadow-lg shadow-slate-400">
              Developer Team
            </button>
          </div>

          <div className=" mt-4  w-[100%] h-fit grid justify-items-center items-center ">
            <div className="w-[98%] md:w-[80%]  p-2 grid justify-items-center items-center rounded mt-2 ">
              <div className="p-2 w-[90%] md:w-[90%] bg-cyan-400 rounded-lg">
                <p>
                  "CryptoRabbies" is developed by a talented and dedicated team
                  of designers, developers, and blockchain experts. We are
                  passionate about creating fun and innovative games that
                  leverage the power of blockchain technology. Our team has a
                  wealth of experience in game development, and we are
                  constantly striving to push the boundaries of what is possible
                  with blockchain-based games. We are excited to bring you
                  "CryptoRabbies," and we can't wait to see what the future
                  holds for this exciting new game. Thank you for choosing
                  "CryptoRabbies" and we hope you enjoy playing as much as we
                  enjoyed creating it!{" "}
                </p>
              </div>

              <div className=" mt-6">
                <button className=" h-12 p-2 w-96 bg-indigo-600 text-lg text-white rounded-2xl shadow-lg shadow-slate-400">
                  Our Talented Team
                </button>
              </div>

              <div className=" grid justify-items-center items-center md:grid-cols-3 mt-6 gap-6">
                <div className=" bg-white text-black rounded h-96 w-auto ">
                  <div className=" justify-center grid items-center mt-4">
                    <img src={mus} className=" h-32 w-32" />
                  </div>
                  <div className="justify-items-center items-center grid mt-4">
                    <h1 className=" text-lg font-bold italic">
                      Mustahsun Tariq
                    </h1>
                    <p className=" text-lg opacity-60 font-bold">DEVELOPER</p>
                    <p className="p-2 opacity-70 text-sm">
                      You can get in touch by following media links:
                    </p>

                    <div className=" flex justify-center items-center mt-8  ">
                      <a href="https://www.facebook.com/" target="blank">
                        {" "}
                        <div className=" mr-4 text-indigo-800">
                          | <ion-icon name="logo-facebook"></ion-icon> |
                        </div>
                      </a>{" "}
                      <a href="https://bit.ly/3LZiVIp" target="blank">
                        <div className=" mr-4 text-amber-700">
                          | <ion-icon name="logo-instagram"></ion-icon> |
                        </div>
                      </a>
                      <a href="https://twitter.com/login" target="blank">
                        <div className=" mr-4 text-blue-700">
                          {" "}
                          <ion-icon name="logo-twitter"></ion-icon> |
                        </div>
                      </a>
                      <a href="https://www.youtube.com/" target="blank">
                        <div className=" mr-4 text-red-600">
                          {" "}
                          <ion-icon name="logo-youtube"></ion-icon> |
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <Link to="/habiprofile">
                  <div className=" bg-white text-black rounded h-96 w-auto ">
                    <div className=" justify-center grid items-center ">
                      <img src={hab} className=" h-32 w-32 mt-4" />
                    </div>
                    <div className="justify-items-center items-center grid mt-4">
                      <h1 className=" text-lg font-bold italic">Habib Ullah</h1>
                      <p className=" text-lg opacity-60 font-bold">DEVELOPER</p>
                      <p className="p-2 opacity-70 text-sm">
                        You can get in touch by following media links:
                      </p>

                      <div className=" flex justify-center items-center mt-8  ">
                        <a href="https://www.facebook.com/" target="blank">
                          {" "}
                          <div className=" mr-4 text-indigo-800">
                            | <ion-icon name="logo-facebook"></ion-icon> |
                          </div>
                        </a>{" "}
                        <a href="https://bit.ly/3LZiVIp" target="blank">
                          <div className=" mr-4 text-amber-700">
                            | <ion-icon name="logo-instagram"></ion-icon> |
                          </div>
                        </a>
                        <a href="https://twitter.com/login" target="blank">
                          <div className=" mr-4 text-blue-700">
                            {" "}
                            <ion-icon name="logo-twitter"></ion-icon> |
                          </div>
                        </a>
                        <a href="https://www.youtube.com/" target="blank">
                          <div className=" mr-4 text-red-600">
                            {" "}
                            <ion-icon name="logo-youtube"></ion-icon> |
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
                  <div className=" bg-white text-black rounded h-96 w-auto ">
                    <div className=" justify-center grid items-center ">
                      <img src={zee} className=" h-32 w-32 rounded-full mt-4" />
                    </div>
                    <div className="justify-items-center items-center grid mt-4">
                      <h1 className=" text-lg font-bold italic">Danish</h1>
                      <p className=" text-lg opacity-60 font-bold">DEVELOPER</p>
                      <p className="p-2 opacity-70 text-sm">
                        You can get in touch by following media links:
                      </p>

                      <div className=" flex justify-center items-center mt-8  ">
                        <a href="https://www.facebook.com/" target="blank">
                          {" "}
                          <div className=" mr-4 text-indigo-800">
                            | <ion-icon name="logo-facebook"></ion-icon> |
                          </div>
                        </a>{" "}
                        <a href="https://bit.ly/3LZiVIp" target="blank">
                          <div className=" mr-4 text-amber-700">
                            | <ion-icon name="logo-instagram"></ion-icon> |
                          </div>
                        </a>
                        <a href="https://twitter.com/login" target="blank">
                          <div className=" mr-4 text-blue-700">
                            {" "}
                            <ion-icon name="logo-twitter"></ion-icon> |
                          </div>
                        </a>
                        <a href="https://www.youtube.com/" target="blank">
                          <div className=" mr-4 text-red-600">
                            {" "}
                            <ion-icon name="logo-youtube"></ion-icon> |
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
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
      </div>
    </>
  );
};

export default About_HeroSection;

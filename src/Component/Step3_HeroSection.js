import React, { useState } from "react";
import gif from "../Assets/gif2.gif";
import bree_rab1 from "../Assets/bree_rab1.jpg";
import bree_rab2 from "../Assets/bree_rab2.png";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import step2 from "../Assets/step2.gif";

const Step3_HeroSection = () => {
  const scrollToDown = () => {
    window.scrollTo(500, 1400);
  };
  const scrollToTop = () => {
    window.scrollTo(500, 380);
  };
  const TopPage = () => {
    window.scrollTo(500, 380);
  };

  const [values, setValues] = useState(true);
  const { game } = useGlobalContext();
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

        <div className=" py-4  bg-slate-900   h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%] bg-white text-center rounded p-4  ">
            <h1 className=" mt-2 font-bold text-2xl   ">Breed</h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>
          </div>
          <div
            className="w-[98%] md:w-[80%] bg-white grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center   rounded p-2 gap-4 "
            onClick={scrollToDown}
          >
            {game.map((item) => {
              const { id, title, description, poster, price, check, image } =
                item;
              let chk = true;
              const ClickFunc = () => {
                if (check == "unlock") {
                  if (values === true) {
                    let pic = (document.getElementById(
                      "pic"
                    ).innerHTML = `<img src= \"${poster}\" > `);
                    setValues(false);
                  } else {
                    let pic1 = (document.getElementById(
                      "pic1"
                    ).innerHTML = `<img src= \"${poster}\" > `);
                    setValues(true);
                  }
                } else {
                  alert("Please Unlock Items ");
                }
              };

              return (
                <>
                  <div
                    className=" hover:scale-105 ease-in-out duration-500 "
                    onClick={ClickFunc}
                  >
                    <div className="grid  bg-white border-2 h-64 w-52 justify-center rounded  ">
                      <img src={poster} className=" h-44 w-44 rounded" />
                      <div className="grid grid-cols-2 justify-items-end">
                        <div className=" text-center">
                          <div>{id}</div>
                          <div>{title}</div>
                          <div>{description}</div>
                        </div>
                        <div className=" h-12 w-16  rounded-full transform -mt-8  ">
                          <img
                            src={image}
                            className=" rounded-full   border-black border-2"
                          />
                        </div>
                      </div>
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
                </>
              );
            })}
          </div>
          {/* <div id='pic' className=' h-24 w-24 border
                    '></div> */}

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

        <div className=" py-4  bg-gray-900 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
          <div className="w-[98%] h-auto md:w-[80%] bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 text-center rounded p-4 grid justify-items-center items-center  ">
            <h1 className=" mt-2 font-bold text-2xl   ">Breeding Rabbies</h1>
            <div className=" flex mt-6 justify-center">
              <div className=" h- w-16 bg-pink-600 "></div>
              <div className=" h-2 w-16 bg-pink-300"></div>
              <div className=" h-2 w-16 bg-yellow-300"></div>
              <div className=" h-2 w-16 bg-cyan-300"></div>
              <div className=" h-2 w-16 bg-indigo-600"></div>
            </div>

            <div className=" grid-cols-3 w-auto md:w-[70%]  grid justify-items-center items-center mt-2">
              <Link to="/step3" onClick={TopPage}>
                <div>
                  <h1>Father</h1>
                  <h2>This Rabby Will Be Father</h2>
                  <div className="bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded">
                    <h1>Select Your Rabby </h1>
                    <div className=" h-28 w-28" id="pic"></div>
                  </div>
                </div>
              </Link>
              <div>
                <img src={step2} className="h-24 w-24" />
              </div>
              <Link to="/step3" onClick={scrollToTop}>
                <div>
                  <h1>Mother</h1>
                  <h2>This Rabby Will Be Mother</h2>

                  <div
                    className="bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded"
                    id="pic"
                  >
                    <h1>Select Your Rabby </h1>
                    <div className=" h-28 w-28" id="pic1"></div>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/step4">
              <button className="h-12 w-36 rounded border-2 bg-white bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300">
                Breeding
              </button>
            </Link>
          </div>

          <div className="w-[98%] h-auto md:w-[80%] bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 text-center rounded p-4   ">
            <img src={bree_rab2} className=" h-52 w-36" />
            <div className=" bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4">
              <p>Step 3/6: Both of your Rabbies are ready now.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3_HeroSection;

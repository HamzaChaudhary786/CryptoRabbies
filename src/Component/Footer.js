import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-indigo-600 py-10 ">
        <div className=" mt-6 grid grid-cols-2  lg:grid lg:grid-cols-3 text-center justify-items-center p-4 text-white">
          <div>
            <h1 className=" text-lg font-bold itallic text-white justify-center ">
              CRYPTORABBIES
            </h1>

            <p className="mt-4">
              Collect , Breed , And Trade Your Every Own Virtual Rabbit On THe
              BlockChain.{" "}
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
          <div>
            <h1 className=" text-lg font-bold itallic text-white text-start">
              QUICK LINK
            </h1>

            <div className=" mt-4">
              <Link to="/overview" className=" hover:text-pink-400">Overview</Link>
              <br></br>
              <Link to="/aboutus" className=" hover:text-pink-400">About</Link>
              <br></br>
              <Link className=" hover:text-pink-400">GetStarted</Link>
            </div>
          </div>
          <div className=" mt-4 md:mt-0">
            <h1 className=" text-lg font-bold itallic text-white text-center">
              CONTACT US
            </h1>

            <p className="mt-4">
              If You Have Any Question About "CRYPTO RABBIES" Don't Hesitate To
              Reach Out To Our Customer Support Team. They Will Be Happy To
              Assist You With Any Issue Or Concern You May Have.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

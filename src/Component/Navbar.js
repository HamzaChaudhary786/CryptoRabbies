import React, { useState } from "react";
import Button from "../Component/GetStarted";
import logo from "../Assets/rabit.png";
import gif from "../Assets/gif.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    {
      name: "Overview",
      link: "/overview",
    },
    {
      name: "Feature",
      link: "/feature",
      // submenu: true,
      // sublinks: [

      //     {
      //         Head: "Equity Funding",
      //         sublinks: [
      //             { title: "Working", link: "/working" },
      //             { title: "Startup", link: "/" },
      //         ]
      //     },
      //     {
      //         Head: "Donation",
      //         sublinks: [
      //             { title: "Flood", link: "/floods" },
      //             { title: "Cancer", link: "/cancer" },

      //         ]
      //     },
      // ]
    },

    {
      name: "About",
      link: "/aboutus",
    },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className=" shadow-md w-full top-0  bg-black left-0 border border-green-500  hover:shadow-md  hover:shadow-indigo-700 hover:border-2 hover:border-blue-700">
        <div className=" w-full flex   lg:justify-between ">
          <div className="">
            <Link to="/" className="flex">
              <span className=" text-3xl text-indigo-600 h-16 w-16 grid items-center ">
                <img src={logo} className=" h-10 w-10 ml-4" alt="Logo" />
              </span>

              <span className="h-16 w-fit grid items-center font-extrabold font-[poppins] ml-4 text-xl text-white">
                CryptoRabbies
              </span>

              <div className=" w-36 grid justify-center">
                <img src={gif} className="h-12 w-16 mt-2 " alt="Logo" />
              </div>
            </Link>
          </div>

          <div
            className=" text-3xl absolute right-8 top-4 cursor-pointer md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:mr-4   md:pb-0 pb-12 absolute md:static bg-black h-80 w-[100%] left-0 md:w-auto md:h-auto md:pl-0  transition-all duration-700 ease-in ${
              open ? "top-[75px] opacity-100" : "top-[-490px]"
            } md:opacity-100 `}
          >
            {Links.map((item) => {
              return (
                <>
                  <li
                    key={item.name}
                    className="  text-center text-lg md:my-0 my-4  group w-32  "
                  >
                    <Link
                      to={item.link}
                      className="text-white hover:text-pink-400  duration-500 md:text-lg   lg:text-lg lg:p-4  "
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div>
                        <div className="">
                          <div className=" absolute lg:top-[45px]  grid grid-cols-2 cursor-pointer rounded-lg  ">
                            {item.sublinks.map((mysublink) => {
                              return (
                                <>
                                  <div
                                    className="hidden  group-hover:block hover:block
                                                                            bg-slate-200  lg:mt-8 h-24 w-48  justify-center rounded -ml-1"
                                  >
                                    <h1 className=" font-bold ml-2">
                                      {mysublink.Head}
                                    </h1>
                                    {mysublink.sublinks.map((slink) => {
                                      return (
                                        <>
                                          <Link to={slink.link}>
                                            <li className=" ml-6 lg:mt-1 hover:text-slate-400">
                                              {slink.title}
                                            </li>
                                          </Link>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </>
              );
            })}
            <Link to="/signin">
              <Button>SignIn</Button>
            </Link>
            <Button>MetaMask</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";

const Sign_Button = (props) => {
  return (
    <>
      <button className=" font-semibold  hover:text-white py-1 w-24 ml-6 text-white  md:px-1  rounded bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 duration-500 ">
        {props.children}
      </button>
    </>
  );
};

export default Sign_Button;

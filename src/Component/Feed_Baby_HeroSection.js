import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../Assets/gif2.gif'
import bree_rab1 from "../Assets/bree_rab1.jpg"
import bree_rab2 from "../Assets/bree_rab2.png"
import baby from "../Assets/baby.png"
import hab from "../Assets/hab.png"

import { useGlobalContext } from './Context'
const Feed_Baby_HeroSection = () => {

  const { level } = useGlobalContext();
  return (
    <>

      <div className=' grid justify-items-center items-center h-auto w-auto'>
        <div className=' grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded'>
          <div className=' h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center'><img src={bree_rab1} className=" h-28 w-28 md:h-40 md:w-40 rounded-full " /></div>

          <div className='text-lg text-white italic font-semibold md:font-bold md:text-3xl text-center '>Breed</div>

          <div><img src={gif} className="h-20 w-24 md:h-auto md:w-auto" /></div>
        </div>


        <div className=' py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-auto w-[95%] mt-4  grid justify-items-center items-center rounded'>



          <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4 grid justify-items-center items-center  ' >
            <h1 className=' mt-2 font-bold text-2xl   '>You got a new baby rabby</h1>
            <div className=' flex mt-6 justify-center'>
              <div className=' h- w-16 bg-pink-600 '></div>
              <div className=' h-2 w-16 bg-pink-300'></div>
              <div className=' h-2 w-16 bg-yellow-300'></div>
              <div className=' h-2 w-16 bg-cyan-300'></div>
              <div className=' h-2 w-16 bg-indigo-600'></div>
            </div>

            <div className='  w-auto md:w-[80%] h-96 bg-white mt-4 '>
              <h1 className=' mt-2 font-bold text-2xl   '>Congratulations</h1>
              <div className=' flex mt-6 justify-center'>
                <div className=' h- w-16 bg-pink-600 '></div>
                <div className=' h-2 w-16 bg-pink-300'></div>
                <div className=' h-2 w-16 bg-yellow-300'></div>
                <div className=' h-2 w-16 bg-cyan-300'></div>
                <div className=' h-2 w-16 bg-indigo-600'></div>
              </div>


              <div className='imageSlider1  w-auto h-auto md:w-auto  grid justify-items-center items-center mt-4'>
                <img src={baby} className=" h-48 w-48" />
              </div>


            </div>
          </div>
        </div>






        <div className='w-[95%] h-auto md:w-[95%] bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300  rounded p-4 text-start  '>

          <div className=' grid grid-cols-2 justify-items-center items-center '>
            <div className=' h-auto w-auto'>
              {
                level.map((item) => {
                  const { title, id, level } = item;
                  return (
                    <>
                      <div>
                        <strong>{id}</strong><br />
                        <strong>{title}</strong><br />
                        <strong>{level}</strong><br />

                      </div>
                    </>
                  )
                })
              }
            </div>

            <div>

              <Link to="/habicoll">
                <div className='h-26 w-32 rounded-full border border-white 
              flex  items-center bg-gray-900 text-white '>
                  <span>
                    <img src={hab} className="h-12 w-12 rounded-full p-2" />
                  </span>
                  <span className='p-2'>
                    Profile
                  </span>
                </div>
              </Link>

            </div>
          </div>
          <img src={bree_rab2} className=" h-auto w-36" />



          <div className=' bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4'>
            <p className='ml-4'>You have successfully fed Rabby #1218, 10 carrots!
              Hurry! Your rabby has grown one level</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default Feed_Baby_HeroSection
import React from 'react'
import gif from '../Assets/gif2.gif'
import bree_rab1 from "../Assets/bree_rab1.jpg"
import bree_rab2 from "../Assets/bree_rab2.png"

import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom'


const Breed_HeroSection = () => {

    const { game } = useGlobalContext();

    return (
        <>
            <div className=' grid justify-items-center items-center'>
                <div className=' grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded'>
                    <div className=' h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center'><img src={bree_rab1} className=" h-28 w-28 md:h-40 md:w-40 rounded-full " /></div>

                    <div className='text-lg text-white italic font-semibold md:font-bold md:text-3xl text-center '>Breed</div>

                    <div><img src={gif} className="h-20 w-24 md:h-auto md:w-auto" /></div>
                </div>


                <div className=' py-4 bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded'>



                    <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4  ' >
                        <h1 className=' mt-2 font-bold text-2xl   '>Breed</h1>
                        <div className=' flex mt-6 justify-center'>
                            <div className=' h- w-16 bg-pink-600 '></div>
                            <div className=' h-2 w-16 bg-pink-300'></div>
                            <div className=' h-2 w-16 bg-yellow-300'></div>
                            <div className=' h-2 w-16 bg-cyan-300'></div>
                            <div className=' h-2 w-16 bg-indigo-600'></div>
                        </div>
                    </div>
                    <div className='w-[98%] md:w-[80%]  grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center   rounded p-2 gap-4 '>
                        {
                            game.map((item) => {
                                const { id, title, description, poster, price, names } = item;
                                return (
                                    <>
                                        <div  >
                                            <div className='grid bg-white border-2 h-64 w-52 justify-center rounded  '>
                                                <img src={poster} className=' h-44 w-44 rounded' />
                                                <div >{id}</div>
                                                <div>{title}</div>
                                                <div>{description}</div>
                                            </div>
                                            <div className=' flex rounded-full border-black border-2 p-2 bg-white'>
                                                <div>
                                                    <h1>Price</h1>
                                                    <h1>{price}</h1>
                                                </div>
                                                <div className='ml-4'>
                                                    <h1>Time </h1>
                                                    <h1>Snappy 10m</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                    <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4   '>
                        <img src={bree_rab2} className=" h-52 w-36" />
                        <div className=' bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4'>
                            <p>Step 1/6: Welcome to Rabby Breeding. I'm your teacher Bunny to guide you for your first try. Our lesson is all about how to play CryptoRabbies! Since our game is all about breeding and collecting rabbits, why don't we practice breeding rabbits together?</p>
                        </div>
                        <Link to="/step1">
                            <button className=' bg-opacity-50 bg-gradient-to-r border-2 border-white rounded-xl from-purple-600 via-purple-400  to-purple-300 w-24 h-10 mt-2'>
                                Next
                            </button>
                        </Link>
                    </div>




                </div>






            </div>


        </>
    )
}

export default Breed_HeroSection
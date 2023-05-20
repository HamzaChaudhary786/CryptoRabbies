import React from 'react'

import gif from '../Assets/gif2.gif'
import bree_rab1 from "../Assets/bree_rab1.jpg"
import bree_rab2 from "../Assets/bree_rab2.png"
import { Link } from 'react-router-dom'

const Step4_HeroSection = () => {
    return (
        <>

            <div className='grid justify-items-center items-center'>

                <div className=' grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded'>
                    <div className=' h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center'><img src={bree_rab1} className=" h-28 w-28 md:h-40 md:w-40 rounded-full " /></div>

                    <div className='text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center '>Breed</div>

                    <div><img src={gif} className="h-20 w-24 md:h-auto md:w-auto" /></div>
                </div>

                <div className=' py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4 grid justify-items-center items-center rounded '>
                    <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4 grid justify-items-center items-center ' >
                        <h1 className=' mt-2 font-bold text-2xl   '>These Two lovely Rabbies will soon be parents!</h1>
                        <div className=' flex mt-6 justify-center'>
                            <div className=' h- w-16 bg-pink-600 '></div>
                            <div className=' h-2 w-16 bg-pink-300'></div>
                            <div className=' h-2 w-16 bg-yellow-300'></div>
                            <div className=' h-2 w-16 bg-cyan-300'></div>
                            <div className=' h-2 w-16 bg-indigo-600'></div>
                        </div>


                        <div className=' justify-items-center items-center grid h-72 w-[90%] mt-4 bg-white'>
                            <div className=' border-black border w-[98%] h-0 '></div>
                            <p className=' text-lg font-bold'>Estimated gas fee:-----------= 0.008 eth</p>
                            <div className=' border-black w-[98%] h-0 border '></div>
                        </div>

                        <Link to="/step5">
                            <div className=' mt-4 text-white '>
                                <button className=' bg-indigo-700 rounded-full h-16 w-96'>OK, give them some privacy</button>
                            </div>
                        </Link>


                        <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4 mt-4   '>
                            <img src={bree_rab2} className=" h-52 w-36" />
                            <div className=' bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4'>
                                <p>Step 4/6: When you play CryptoRabbies, there's a small fee for breeding. That's because the transaction is being written onto the blockchain! It usually costs about 0.008 ether.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Step4_HeroSection
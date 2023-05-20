import React, { useState } from 'react'
import gif from '../Assets/gif2.gif'
import bree_rab1 from "../Assets/bree_rab1.jpg"
import bree_rab2 from "../Assets/bree_rab2.png"
import { Link, Navigate } from 'react-router-dom'
import { useGlobalContext } from './Context'
import { useNavigate } from "react-router-dom"

const Step6_HeroSection = () => {
    const { breed } = useGlobalContext();

    const [values, setValues] = useState(true);
    let navigate =useNavigate();

    return (
        <>
            <div className='grid justify-items-center items-center'>

                <div className=' grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded'>
                    <div className=' h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center'><img src={bree_rab1} className=" h-28 w-28 md:h-40 md:w-40 rounded-full " /></div>

                    <div className='text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center '>Breed</div>

                    <div><img src={gif} className="h-20 w-24 md:h-auto md:w-auto" /></div>
                </div>
                <div className=' py-4  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded'>



                    <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4  ' >
                        <h1 className=' mt-2 font-bold text-2xl   '>Breed</h1>
                        <div className=' flex mt-6 justify-center'>
                            <div className=' h- w-16 bg-pink-600 '></div>
                            <div className=' h-2 w-16 bg-pink-300'></div>
                            <div className=' h-2 w-16 bg-yellow-300'></div>
                            <div className=' h-2 w-16 bg-cyan-300'></div>
                            <div className=' h-2 w-16 bg-indigo-600'></div>
                        </div>

                        <div className=' mt-4  w-[100%] h-fit grid justify-items-center items-center ' >

                            <div className='w-[98%] md:w-[80%]  flex items-center gap-2  rounded p-2  '>
                                {


                                    breed.map((item) => {
                                        const { id, title, description, poster, price, names, image, cond } = item;


                                        const ClickFunc = () => {

                                            if (cond === "unlock") {

                                                navigate('/step7')
                                            }
                                            else {

                                                alert("Please Unlock Items ")
                                            }

                                        }


                                        return (
                                            <>
                                                {
                                                    names.toLowerCase() == "habii" ?

                                                        <div className=' hover:scale-105 ease-in-out duration-500 ' onClick={ClickFunc}  >
                                                            <div className='grid  bg-white border-2 h-64 w-52 justify-center rounded  '>
                                                                <img src={poster} className=' h-44 w-44 rounded' />
                                                                <div className='grid grid-cols-2 justify-items-end'>
                                                                    <div className=' text-center'>
                                                                        <div >{id}</div>
                                                                        <div>{title}</div>
                                                                        <div>{description}</div>
                                                                    </div>
                                                                    <div className=' h-12 w-16  rounded-full transform -mt-8  ' >
                                                                        <img src={image} className=" rounded-full   border-black border-2" />
                                                                    </div>
                                                                </div>
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
                                                        :
                                                        console.log(names)
                                                }
                                            </>
                                        )
                                    })


                                }


                            </div>




                            {/* <div className=' bg-white grid grid-cols-1 md:grid md:grid-cols-2 transform h-24 md:h-24 w-[80%]   rounded-2xl p-4 -mb-16 mt-4'>

                                <div className='flex items-center'>
                                    <div className='h-8 w-8 md:h-12 md:w-12 justify-center items-center grid rounded-full bg-slate-300'> <img src={mes} className=" h-6 w-6 md:h-8 md:w-8 " /></div>
                                    <p className='font-semibold ml-2'>cryptorabby@gmail.com</p>
                                </div>


                                <div className='flex items-center mt-2 md:ml-2 '>

                                    <div className='h-8 w-8 md:h-12 md:w-12 justify-center items-center grid rounded-full bg-slate-300'> <img src={cont} className="h-6 w-6 md:h-8 md:w-8 " /></div>
                                    <p className='font-semibold ml-2'>(064) 9331816</p>
                                </div>

                            </div> */}
                        </div>



                    </div>


                    <div className='w-[98%] h-auto md:w-[80%]  text-center rounded p-4   '>
                        <img src={bree_rab2} className=" h-52 w-36" />
                        <div className=' bg-gray-500 bg-opacity-60 rounded-lg w-full transform  -mt-16 ml-3 h-auto p-4'>
                            <p>Step 2/6: Every CryptoRabby is unique, with its own set of traits. When you breed two Rabbies together, their Rabby has a blend of attributes inherited from its parents. Let's try to breed our Rabbies together and see what we get! Click the breed button to choose Rabbits to breed.</p>
                        </div>
                        
                    </div>




                </div>



            </div>

        </>
    )
}

export default Step6_HeroSection
import React from "react";
import rab1 from "../Assets/rab1.png";
import mes from "../Assets/mes.png";
import cont from "../Assets/contact.png";

const HeroSection = () => {
  let Links = [
    {
      title: "What is Crypto Rabbies?",
      description:
        "CryptoRabbies is a blockchain based game in which players can collect, breed and trade virtual rabbits. Each rabbit is unique than others. Players can also purchase and use carrots to help their rabbits grow and reach new levels. Transactions and interactions within the game are secured and transparent thanks to the use of blockchain technology.",
      image: "https://bit.ly/3Mqwimn",
    },

    {
      title: "How to Buy a Rabbit in CryptoRabbies?",
      description:
        "In CryptoRabbies players have the option to purchase virtual rabbits using real money or in-game currency Ethereum. To buy a rabbit, First of all connect your wallet with game then simply browse through the available rabbits and select the one you want to purchase. You will then be prompted to transaction window and complete the transaction.There are many different rabbits to choose from each with its own unique characteristics and attributes.",
      image: "https://bit.ly/41AxJTp",
    },

    {
      title: "How to Grow Your Rabbit in CryptoRabbies?",
      description:
        "Want to help your rabbit reach its full potential in CryptoRabbies? Here is a way in which you can grow your rabby:Feed it carrots, In CryptoRabbies you can purchase and use carrots to help your rabbit grow and reach new levels. The more carrots you feed your rabbit the faster it will grow and become able to breed",
      image: "https://bit.ly/3Mrx7LN",
    },
   
    {
      title: "How to Breed Your Rabbit in CryptoRabbies?",
      description:
        "There are two ways to breed Rabbies. Breed two of same tier Rabbies together or breed with other tier rabbies. Best practice is to breed two Rabbies of the same tier, since the offspring’s tier will be the tier of both parents with one level 1. If you breed a Bronze tier and Platinum tier Rabby together, you get a Bronze tier baby rabbit.",
      image: "https://bit.ly/3M1z1B5",
    },
    {
      title: "How to Sell Your Rabbit's NFT in CryptoRabbies",
      description:
        "To sell your rabbit in the  game, you will need to log in to your game account using Meta. From there, you can go to the 'My Collecton' section and select the virtual rabbit that you want to sell. Then, you can click the 'Sell' button and follow the prompts to complete the transaction. Make sure you have a digital wallet and some digital currency, like Ether (ETH), stored in your wallet to complete the sale.",
      image: "https://bit.ly/3BlSt6S",
    },
    {
      title: "How to Sell Your Rabbit's NFT in CryptoRabbies",
      description:
        "To sell your rabbit in the  game, you will need to log in to your game account using Meta. From there, you can go to the 'My Collecton' section and select the virtual rabbit that you want to sell. Then, you can click the 'Sell' button and follow the prompts to complete the transaction. Make sure you have a digital wallet and some digital currency, like Ether (ETH), stored in your wallet to complete the sale.",
      image: "https://bit.ly/3BlSt6S",
    },
  ];

  return (
    <>
      <div className="h-[100%] w-[100%] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300  grid justify-items-center  items-center ">
        <div className="h-[250px] w-[95%]  bg-slate-900 rounded-br-[100px] grid grid-cols-2 justify-items-center items-center mt-4">
          <div className="p-4 text-white ">
            <h1 className=" font-semibold text-lg md:text-3xl   font-serif">
              Crypto Rabbies
            </h1>
            <p className="mt-8 text-lg ">
              Where bunnies lead the way to earning
            </p>

            <p className="mt-8 italic">Join The Crypto Rubbies Craze</p>
          </div>
          <div className="h-48 w-48 rounded-full bg-white">
            <img src={rab1} className="rounded-full h-[190px] w-[270px]" />
          </div>
        </div>

        <div className="h-auto w-[95%] gap-8  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300  rounded p-2  justify-items-center items-center mt-4 grid grid-cols-1  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  ">
          {Links.map((item) => {
            return (
              <>
                <div className="grid grid-cols-3 bg-white hover:scale-105 ease-in-out duration-500 hover:shadow-blue-500 shadow-lg   p-2 mt-4 justify-items-center items-center h-[100%] rounded   ">
                  <div className=" p-2 col-span-2">
                    <h1 className="font-semibold text-lg">{item.title}</h1>
                    <br></br>
                    <p className=" w-auto text-xs">{item.description}</p>
                  </div>
                  <div className=" ">
                    <img src={item.image} className="h-[170px] w-[170px] rounded  " />
                  </div>
                </div>
              </>
            );
          })}
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
    </>
  );
};

export default HeroSection;

import React from "react";
import rab3 from "../Assets/rab3.png";
import rab4 from "../Assets/rab4.png";
import rab5 from "../Assets/rab5.png";
import mes from "../Assets/mes.png";
import gif from "../Assets/gif2.gif";
import pic1 from "../Assets/buy.svg";
import pic2 from "../Assets/eggplant.svg";
import pic3 from "../Assets/Screenshot__47_-removebg-preview (1).png";
import pic4 from "../Assets/piggy.svg";
import pic5 from "../Assets/tips-removebg-preview.png";
import pic6 from "../Assets/diamond_tier-removebg-preview.png";
import pic7 from "../Assets/love_money-removebg-preview.png";
import pic8 from "../Assets/carrot-removebg-preview.png";

import cont from "../Assets/contact.png";
const View_HeroSection = () => {
  return (
    <>
      <div className="bg-white">
        <div className=" grid justify-items-center items-center">
          <div className=" grid grid-cols-3   justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-[200px] w-[95%] rounded">
            <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center ">
              <img src={rab3} className=" h-28 w-28 md:h-40 md:w-40  " />
            </div>

            <div className="text-lg text-white font-serif font-semibold md:font-bold md:text-3xl text-center ">
              Crypto Rabbies Overview{" "}
            </div>

            <div>
              <img src={gif} className="h-20 w-24 md:h-auto md:w-auto" />
            </div>
          </div>

          <div className="  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded">
            <div className="  w-[95%] h-fit grid justify-items-center items-center bg-gradient-to-r from-purple-600 via-purple-400  to-purple-300 ">
              <h1 className=" mt-2 font-bold text-2xl   ">Guide Section</h1>
              <div className=" flex mt-6">
                <div className=" h- w-16 bg-pink-600 "></div>
                <div className=" h-2 w-16 bg-pink-300"></div>
                <div className=" h-2 w-16 bg-yellow-300"></div>
                <div className=" h-2 w-16 bg-cyan-300"></div>
                <div className=" h-2 w-16 bg-indigo-600"></div>
              </div>

              <div className=" mt-6">
                <button className=" h-12 p-2 w-96 text-white font-medium bg-indigo-600 rounded-full">
                  Get Started
                </button>
              </div>

              <div className=" mt-4  w-[100%] h-fit grid justify-items-center items-center ">
                <div className="w-[98%] md:w-[80%] bg-cyan-400 flex items-center justify-center rounded-2xl mt-2 ">
                  <div className=" p-2">
                    <div className=" h-56 w-48 md:h-40 md:w-40 rounded md:rounded-full bg-slate-300 grid justify-items-center items-center ">
                      <img src={rab4} className=" h-52 w-52 md:h-40 md:w-40" />
                    </div>
                  </div>

                  <div className="p-2 w-[90%] md:w-[60%]">
                    <p>
                      CryptoRabbies game is based on the Ethereum network. In
                      this game Firstly, you need to go to the game’s website
                      and create your Cryptorabbies account. Then, connect your
                      preferred wallet, you should have some ETH in your wallet
                      in order to buy NFT Rabbies.
                    </p>
                  </div>
                </div>
              </div>

              {/* How To Buy Your Rabbit Section */}

              <div className="md:w-[80%] h-fit grid grid-cols-1 md:grid md:grid-cols-2 justify-items-center mt-6 items-center  ">
                <div className=" bg-white rounded-2xl w-[98%] h-auto  ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic1} />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    How to Buy a Rabbit in CryptoRabbies?
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. Make sure you have a digital wallet such as MetaMask that
                    is compatible with the blockchain platform used by
                    CryptoRabbies.<br></br>
                    2. Make sure you have some digital currency such as Ether
                    (ETH) stored in your wallet.<br></br>
                    3. Log in to your account.<br></br>
                    4. Browse the available virtual rabbits and find one that
                    you would like to purchase.<br></br>
                    5. Click on the rabbit's listing and review its attributes
                    and price.<br></br>
                    6. If you want to proceed with the purchase click the "Buy"
                    button. You will be prompted to confirm the transaction.
                    <br></br>
                    7. Once the transaction is complete the virtual rabbit will
                    be transferred to your account and added to your collection.
                    <br></br>
                    8. Happy collecting!
                  </p>
                </div>

                <div className=" bg-white md:h-[100%] w-[98%] rounded-2xl  ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic2} className=" h-10 w-10" />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    How to Breed Your Rabbit in CryptoRabbies?
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. Make sure you have two rabbits that are ready to breed.
                    Each rabbit must be at least level 5.
                    <br></br>
                    2. Go to the breeding section and select the two rabbits
                    that you want to breed.<br></br>
                    3. Click the "Breed" button to start the breeding process.
                    <br></br>
                    4. The breeding process will take some time to complete.
                    Once it's finished, you'll have a new, unique virtual rabbit
                    after specific time that is a combination of both parents'
                    attributes.
                    <br></br>
                    5. By following these steps, you'll be able to breed your
                    virtual rabbits and grow your collection in CryptoRabbies!
                  </p>
                </div>
              </div>

              {/* How To Sale Your Rabbit */}

              <div
                className="md:w-[80%] h-fit grid grid-cols-1
                            justify-items-center mt-6 items-center "
              >
                <div className="bg-white rounded md:w-[100%] w-[98%] h-auto ">
                  <div className=" grid grid-cols-3 justify-items-center items-center mt-2">
                    <img src={pic3} className=" h-16 w-16" />
                    <h1 className="mt-2 text-center font-semibold italic text-lg">
                      How to Sell Your Rabbit's NFT in CryptoRabbies
                    </h1>
                    <img src={pic4} className=" h-16 w-16" />
                  </div>
                  <p className="mt-2 p-4">
                    Want to sell your virtual rabbit's non-fungible token (NFT)
                    in "CryptoRabbies"? Here's how:
                    <br></br>
                    <br></br>
                    1. Make sure you are the owner of the virtual rabbit and its
                    NFT. If you are not the owner, you will not be able to sell
                    the NFT.
                    <br></br>
                    2. Log in to your account using MetaMask.
                    <br></br>
                    3. Go to the "My Collection" section and select the virtual
                    rabbit that you want to sell.
                    <br></br>
                    4. Click on the rabbit's listing and review its attributes
                    and price.
                    <br></br>
                    5. If you want to proceed with the sale, click the "Sell"
                    button. You will be prompted to opensea website.
                    <br></br>
                    6. On the OpenSea website create an account if you don't
                    already have one.
                    <br></br>
                    7. Connect your digital wallet to your OpenSea account. This
                    will typically be an Ethereum wallet.
                    <br></br>
                    8. Go to the "My Items" section of your OpenSea account and
                    select the virtual rabbit's NFT that you want to sell.
                    <br></br>
                    9. If you want to proceed with the sale, click the "Sell"
                    button. You will be prompted to enter your wallet details
                    and confirm the sale.
                    <br></br>
                    10. Once the sale is complete, the virtual rabbit's NFT will
                    be transferred to the buyer and the sale price will be
                    credited to your account.
                  </p>
                </div>
              </div>

              {/* Advice New Players Button */}

              <div className=" bg-indigo-700 w-96 h-12 text-center rounded-2xl grid items-center mt-6 text-white font-semibold text-lg">
                <button>Advice for New Players</button>
              </div>

              {/* Understanding And Tip For New Player */}

              <div className="  w-[100%] h-fit grid justify-items-center items-center mt-4 ">
                <div className="w-[98%] md:w-[80%] bg-cyan-300 flex items-center justify-center rounded mt-2 ">
                  <div className=" p-2">
                    <div className=" h-56 w-48 md:h-40 md:w-40 rounded md:rounded-full bg-slate-300 grid justify-items-center items-center ">
                      <img src={rab5} className=" h-52 w-52 md:h-36 md:w-36" />
                    </div>
                  </div>

                  <div className="p-2 w-[90%] md:w-[60%]">
                    <p>
                      There’s a lot to do in CryptoRabbies. If you're new to the
                      game then here are a few pieces of advice for new players
                      that can help you get started of the game. By following
                      these tips, you'll be well on your way to building a
                      strong and diverse collection of virtual rabbits:
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[80%] h-fit grid grid-cols-1 md:grid md:grid-cols-2 justify-items-center mt-6 items-center  ">
                <div className=" bg-white rounded md:h-[100%] w-[98%] h-auto  ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic6} className=" h-10 w-10" />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    Understanding of Tiers and Levels
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. In the game tiers and levels are used to represent the
                    strength and value of a rabbit.
                    <br></br>
                    2. Tiers are broad categories that group virtual rabbits
                    together based on their attributes and abilities. For
                    example, the game have four tiers: Bronze, Gold, Platinum
                    and Diamond. Rabbits in the Bronze tier might have fewer
                    attributes and abilities compared to those in the Diamond
                    tier.
                    <br></br>
                    3. Levels are specific ranks within a tier that represent
                    the progress and advancement of a rabbit. For example, a
                    rabbit in the Bronze tier might have levels 1 through 5,
                    with level 1 being the weakest and level 5 being the
                    strongest.
                    <br></br>
                    4. By understanding the tier and level of a rabbit, players
                    can better understand its strengths and weaknesses as well
                    as its overall value in the game.
                  </p>
                </div>

                <div className=" bg-white md:h-[100%] w-[98%] rounded mt-2 md:mt-0 ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic5} className=" h-10 w-10" />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    Tips for New Players
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. Take some time to familiarize yourself with the game's
                    rules and guidelines. This will help you understand how the
                    game works and what you need to do to succeed.
                    <br></br>
                    2. Start by buying a few rabbits to add to your collection.
                    You can browse the available rabbits and choose ones that
                    have attributes and abilities that you like.
                    <br></br>
                    3. Try breeding your virtual rabbits to create new, unique
                    offspring. This can be a fun and rewarding way to grow your
                    collection and discover new rabbits with interesting
                    attributes.
                    <br></br>
                    4. Keep your rabbits active by feeding them carrots and
                    playing with them regularly. This will help them grow and
                    reach new levels faster. 5. Trade your rabbits with other
                    players to try and get the ones you want. 6. You can use the
                    game's trading system or use a marketplace like OpenSea to
                    find potential buyers or sellers.
                  </p>
                </div>

                <div className=" bg-white rounded md:h-[100%] w-[98%] h-auto mt-6 ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic7} className=" h-10 w-10" />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    Understanding of Tiers and Levels
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. In the game tiers and levels are used to represent the
                    strength and value of a rabbit.
                    <br></br>
                    2. Tiers are broad categories that group virtual rabbits
                    together based on their attributes and abilities. For
                    example, the game have four tiers: Bronze, Gold, Platinum
                    and Diamond. Rabbits in the Bronze tier might have fewer
                    attributes and abilities compared to those in the Diamond
                    tier.
                    <br></br>
                    3. Levels are specific ranks within a tier that represent
                    the progress and advancement of a rabbit. For example, a
                    rabbit in the Bronze tier might have levels 1 through 5,
                    with level 1 being the weakest and level 5 being the
                    strongest.
                    <br></br>
                    4. By understanding the tier and level of a rabbit, players
                    can better understand its strengths and weaknesses as well
                    as its overall value in the game.
                  </p>
                </div>
                <div className=" bg-white rounded md:h-[100%] w-[98%] h-auto mt-6  ">
                  <div className=" h-auto w-auto grid justify-center mt-2">
                    <img src={pic8} className=" h-10 w-10" />
                  </div>
                  <h1 className="mt-2 text-center font-semibold italic text-lg">
                    Understanding of Tiers and Levels
                  </h1>
                  <p className=" mt-2 p-4 ">
                    1. In the game tiers and levels are used to represent the
                    strength and value of a rabbit.
                    <br></br>
                    2. Tiers are broad categories that group virtual rabbits
                    together based on their attributes and abilities. For
                    example, the game have four tiers: Bronze, Gold, Platinum
                    and Diamond. Rabbits in the Bronze tier might have fewer
                    attributes and abilities compared to those in the Diamond
                    tier.
                    <br></br>
                    3. Levels are specific ranks within a tier that represent
                    the progress and advancement of a rabbit. For example, a
                    rabbit in the Bronze tier might have levels 1 through 5,
                    with level 1 being the weakest and level 5 being the
                    strongest.
                    <br></br>
                    4. By understanding the tier and level of a rabbit, players
                    can better understand its strengths and weaknesses as well
                    as its overall value in the game.
                  </p>
                </div>
              </div>
              <br></br>

              {/* Contact And Email Section */}
              <div className=" bg-white grid grid-cols-1 mt-6 md:grid md:grid-cols-2 transform h-24 md:h-24 w-[80%]   rounded-2xl p-4 -mb-12">
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
      </div>
    </>
  );
};

export default View_HeroSection;

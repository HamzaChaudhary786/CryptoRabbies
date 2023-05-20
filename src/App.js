import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Overview from "./Pages/Overview";
import Feature from "./Pages/Feature";
import About from "./Pages/About";
import Habi_Profile from "./Pages/Habi_Profile";
import Habi_Info from "./Pages/Habi _Info";
import Habi_Coll from "./Pages/Habi_Coll";
import Breed from "./Pages/Breed";
import Breed_Step1 from "./Pages/Breed_Step1";
import Breed_Step2 from "./Pages/Breed_Step2";
import Breed_Step3 from "./Pages/Breed_Step3";
import Breed_Step4 from "./Pages/Breed_Step4";
import Breed_Step5 from "./Pages/Breed_Step5";
import Breed_Step6 from "./Pages/Breed_Step6";
import Breed_Step7 from "./Pages/Breed_Step7";
import Feed_Step1 from "./Pages/Feed_Step1";
import Feed_Step2_HeroSection from "./Component/Feed_Step2_HeroSection";
import Feed_Step2 from "./Pages/Feed_Step2";
import Feed_Baby from "./Pages/Feed_Baby";
import Sell_NFT from "./Pages/Sell_NFT";
import Sign from "./Pages/Sign";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/habiprofile" element={<Habi_Profile />} />
        <Route path="/habiinfo" element={<Habi_Info />} />
        <Route path="/habicoll" element={<Habi_Coll />} />
        <Route path="/breed" element={<Breed />} />
        <Route path="/step1" element={<Breed_Step1 />} />
        <Route path="/step2" element={<Breed_Step2 />} />
        <Route path="/step3" element={<Breed_Step3 />} />
        <Route path="/step4" element={<Breed_Step4 />} />
        <Route path="/step5" element={<Breed_Step5 />} />
        <Route path="/step6" element={<Breed_Step6 />} />
        <Route path="/step7" element={<Breed_Step7 />} />
        <Route path="/feedstep1" element={<Feed_Step1 />} />
        <Route path="/feedstep2" element={<Feed_Step2 />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feedbaby" element={<Feed_Baby />} />
        <Route path="/nftsell" element={<Sell_NFT />} />

        {/* <Route path="*" element={<Error/>}/> */}
      </Routes>
    </>
  );
}

export default App;

import React, { useContext, useEffect,useRef } from 'react';
import Navbar from "../Navbar/Navbar";
import HomepageHeader from "../Homepage/HomepageHeader";
import HomepageZaNas from './HomepageZaNas';
import InovaciiForma from "../InovaciiForma/InovaciiForma";
import Edukacija from './Edukacija';
import HomepageNastani from "./HomepageNastani";
import HomepageCoworking from './HomepageCoworking';
import HomepageProstorZaNastani from "./HomepageProstorZaNastani"
import Footer from '../footer/Footer';
import { Context } from '../../Context/Context';
import "./HomepageResponsive.scss";

const Homepage = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const { inovaciiForma,isCoworking,setIsCoworking } = useContext(Context)
  const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
  
  useEffect(() =>{
   if(isCoworking) { 
     executeScroll()
   }    
    return () => {
      window.addEventListener("scroll", () => setIsCoworking(false));  
    }
  })  
  return (
    <div className="homepage">
        <Navbar  />
        {inovaciiForma && <InovaciiForma/>}
        <HomepageHeader />
        <div className="homepage-cont">
        <HomepageZaNas/>
        <Edukacija />
        <HomepageNastani />
        <HomepageCoworking r={myRef} />
        <HomepageProstorZaNastani />
        <Footer />
        </div>
    </div>
  );
}

export default Homepage;

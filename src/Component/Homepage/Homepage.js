import React, { useContext, useEffect } from 'react';
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
  const { inovaciiForma,isCoworking,setIsCoworking } = useContext(Context)
  
  useEffect(() =>{
    isCoworking && window.scrollTo(0,3200)    
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
        <HomepageCoworking />
        <HomepageProstorZaNastani />
        <Footer />
        </div>
    </div>
  );
}

export default Homepage;

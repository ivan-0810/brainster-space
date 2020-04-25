import React, { useState, Fragment, useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Prostor_za_nastani.scss";
import Footer from "../footer/Footer";
import p1 from "../../sliki/renderi/2.jpg";
import p2 from "../../sliki/renderi/C1 1.jpg";
import p3 from "../../sliki/renderi/C1 4.jpg";
import p4 from "../../sliki/renderi/C2 1.jpg";
import p5 from "../../sliki/renderi/C3 1.jpg";
import p6 from "../../sliki/renderi/C3 2.jpg";
import p7 from "../../sliki/renderi/C3 EXIBITION_1.jpg";
import p8 from "../../sliki/renderi/HOL KON SEDENJE.jpg";
import p9 from "../../sliki/KITCHEN_03.jpg";
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from "./Box4";
import Box5 from './Box5';
import { Context } from '../../Context/Context';

const Prostor_za_nastani = () => {
    const {scrollToNastani,setScrollToNastani} = useContext(Context)
    useEffect(() => {
        if(scrollToNastani){
            window.scrollTo(0,0)
        }

        return () => {
            window.addEventListener("scroll", setScrollToNastani(false))
        }
    })
    const [nasloviSliki] = useState(["Brainster", "Конференциска Сала", "Сала со бина", "Адептибилна училница", "Училница", "Училница", "Хол", "Канцелариски простор", "Space Kitchen"]);
    const [sliki] = useState({
        1: p1,
        2: p7,
        3: p6,
        4: p5,
        5: p4,
        6: p2,
        7: p8,
        8: p3,
        9: p9
    })
    const scrolni = ()=>{
        window.scrollTo(0,2200)
    }
    return (
        <Fragment>
            <Navbar />
            <div className="prostor-za-nastani">
                <div className="box-1">
                    <Box1 scrolni={scrolni}/>
                </div>
                <div className="box-2">
                    <Box2
                        nasloviSliki={nasloviSliki}
                        sliki={sliki}
                    />
                </div>
                <div className="box-3">
                    <Box3 />
                </div>
                <div className="box-4">
                    <Box4 />
                </div>
                <div className="box-5">
                    <Box5 />
                </div>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Prostor_za_nastani;
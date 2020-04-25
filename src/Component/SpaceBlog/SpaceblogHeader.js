import React, { useState, useEffect } from 'react';
import "./Spaceblog.scss";
import brainster_logo from "../../sliki/default.png"

const SpaceblogHeader = ({data}) => {
    
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        const timeout = setTimeout(() =>{
            counter===9 ? setCounter(1): setCounter(counter+1);

           
        },7000)
        return () => {
            clearTimeout(timeout)
        }
    },[counter]);
    const increaseCounter = () =>{
        counter===9 ? setCounter(9): setCounter(counter+1);
    }
    const decreaseCounter = () =>{
        counter===1 ? setCounter(1): setCounter(counter-1);
    }
    return (
        <div className="spaceblog-header">

            <div className="content-change" style={{
                backgroundImage: "url(" + require(`../../sliki/space_blog/${counter}.jpg`)+")",
                backgroundPosition:"center",
                backgroundSize: "cover"
            }} >
                <div className="overlay">
                <div className="brainster_logo">
                   <div>
                   <img src={brainster_logo} alt=""/>
                    <p>BRAINSTER</p>
                   </div>
                </div>
                <div className="txt-div">
                <span className="description">{data[counter-1].category}</span>
                    <h1>{data[counter-1].title}</h1>
                    <p>{data[counter-1].description}</p>
                    
                    
                    <div className="button-span">
                    <button><i className="fas fa-arrow-right" ></i>дознај повеќе</button>
                    <span className="counter-laptop">{counter}/9</span>
                    </div>

                    <div className="space-header-btn">
                        <span className="arrow" onClick={decreaseCounter}><i className="fas fa-arrow-left" ></i></span>
                        <span className="counter-phone">{counter}/9</span>
                        <span className="arrow" onClick={increaseCounter}><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                </div>
            </div>


        </div>
    );
}

export default SpaceblogHeader;
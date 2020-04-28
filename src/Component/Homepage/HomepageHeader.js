import React from 'react';
import "./HomePage.scss";

const HomepageHeader = (props) =>{
    return (
        <div className="homepage-header" style ={{
            backgroundImage:"url(" + require(`../../sliki/za_nas/edukacija.jpg`)+")",
           
        }}>
           <div className="overlay">
           <h1>Центар за Учење, Кариера и<br /> Иновации</h1>
           </div>
        </div>
    );
}

export default HomepageHeader;
import React from 'react';
import "./HomePage.scss";

const HomepageHeader = (props) =>{
    return (
        <div className="homepage-header" style ={{
            backgroundImage:"url(" + require(`../../sliki/za_nas/edukacija.jpg`)+")",
            backgroundPosition:"centar",
            backgroundSize:"cover"
        }}>
           <div className="overlay">
           <h1>Центар за Учење, Кариера и<br /> Иновации</h1>
           </div>
        </div>
    );
}

export default HomepageHeader;